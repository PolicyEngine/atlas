"""Tests for PBIF budget filler"""

import pytest
from unittest.mock import Mock, MagicMock, patch
from .budget_filler import PBIFBudgetFiller
from .models import BudgetData, PersonnelItem, OtherDirectItem


class TestBudgetData:
    """Test the BudgetData model"""
    
    def test_default_budget_totals(self):
        """Test that default budget adds up correctly"""
        budget = BudgetData()
        
        # Check personnel
        assert len(budget.personnel) == 3
        assert budget.year1_personnel_salaries == 125000  # 67500 + 40000 + 17500
        assert budget.year2_personnel_salaries == 128750  # 69525 + 41200 + 18025
        
        # Check benefits (25%)
        assert budget.year1_personnel_benefits == 31250
        assert budget.year2_personnel_benefits == 32187.5
        
        # Check other direct
        assert budget.year1_other_direct_total == 70000  # 60000 + 10000
        assert budget.year2_other_direct_total == 54515  # 40000 + 14515
        
        # Check grand total is close to $498k
        assert 497000 < budget.grand_total < 499000
    
    def test_custom_personnel(self):
        """Test with custom personnel"""
        personnel = [
            PersonnelItem("Test Engineer", 1.0, 100000, 103000, 0.30)
        ]
        budget = BudgetData(personnel=personnel, other_direct=[])
        
        assert budget.year1_personnel_salaries == 100000
        assert budget.year1_personnel_benefits == 30000  # 30% of 100k
        assert budget.year1_personnel_total == 130000


class TestPBIFBudgetFiller:
    """Test the budget filler"""
    
    @pytest.fixture
    def mock_gc(self):
        """Mock Google Sheets client"""
        return Mock()
    
    @pytest.fixture
    def mock_sheet(self):
        """Mock spreadsheet with worksheets"""
        sheet = Mock()
        
        # Create mock worksheets
        personnel_ws = Mock()
        personnel_ws.title = "a. Personnel"
        personnel_ws.get_all_values.return_value = [
            ["A. Personnel", "", "", "", "", "", ""],
            ["INSTRUCTIONS", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "Position Title", "Time (Hrs)", "Pay Rate", "Project Total", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "Program Director (EXAMPLE)", "", "", "$0", "", ""],
            ["", "", "", "", "$0", "", ""],  # Row 8 - first empty
            ["", "", "", "", "$0", "", ""],  # Row 9
            ["", "", "", "", "$0", "", ""],  # Row 10
        ]
        
        fringe_ws = Mock()
        fringe_ws.title = "b. Fringe"
        fringe_ws.get_all_values.return_value = [
            ["B. Fringe Benefits", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "Description", "Amount", "", ""],
            ["", "", "$0", "", ""],
        ]
        
        other_ws = Mock()
        other_ws.title = "h. Other"
        other_ws.get_all_values.return_value = [
            ["H. Other Direct Costs", "", "", "", "", ""],
            ["INSTRUCTIONS", "", "", "", "", ""],
            ["", "Description", "Cost", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "", "", "", ""],
            ["", "", "$0", "", "", ""],  # Row 6 - first data row
        ]
        
        summary_ws = Mock()
        summary_ws.title = "Summary"
        summary_ws.get_all_values.return_value = []
        
        sheet.worksheets.return_value = [
            summary_ws, personnel_ws, fringe_ws, other_ws
        ]
        
        # Make worksheet() return the right mock based on name
        def get_worksheet(name):
            ws_map = {
                "a. Personnel": personnel_ws,
                "b. Fringe": fringe_ws,
                "h. Other": other_ws,
                "Summary": summary_ws,
            }
            return ws_map.get(name)
        
        sheet.worksheet = get_worksheet
        
        return sheet
    
    @pytest.fixture
    def filler(self, mock_gc, mock_sheet):
        """Create a budget filler with mocked dependencies"""
        mock_gc.open_by_key.return_value = mock_sheet
        
        filler = PBIFBudgetFiller(mock_gc, "test_spreadsheet_id")
        filler.sheet = mock_sheet
        return filler
    
    def test_find_personnel_data_rows(self, filler):
        """Test finding where to enter personnel data"""
        ws_name, start_row, end_row = filler.find_personnel_data_rows()
        
        assert ws_name == "a. Personnel"
        assert start_row == 8  # First empty row after example
        assert end_row == 18  # Allows for 10 personnel
    
    def test_fill_personnel_dry_run(self, filler):
        """Test filling personnel in dry run mode"""
        budget = BudgetData()
        filler.set_budget_data(budget)
        
        changes = filler.fill_personnel(dry_run=True)
        
        assert len(changes) == 3  # 3 personnel
        assert changes[0]["worksheet"] == "a. Personnel"
        assert changes[0]["row"] == 8
        assert changes[0]["changes"]["B"] == "Lead Engineer/Director"
        assert changes[0]["changes"]["C"] == "1560"  # 0.75 * 2080 hours
        
        # Verify no actual updates were made
        personnel_ws = filler.sheet.worksheet("a. Personnel")
        personnel_ws.update.assert_not_called()
    
    def test_fill_personnel_actual(self, filler):
        """Test actually filling personnel"""
        budget = BudgetData()
        filler.set_budget_data(budget)
        
        changes = filler.fill_personnel(dry_run=False)
        
        # Verify updates were made
        personnel_ws = filler.sheet.worksheet("a. Personnel")
        
        # Check first person was added
        personnel_ws.update.assert_any_call("B8", "Lead Engineer/Director")
        personnel_ws.update.assert_any_call("C8", "1560")  # Hours
        
        # Check that hourly rate was calculated correctly
        # $67,500 / (0.75 * 2080) = $43.27
        calls = personnel_ws.update.call_args_list
        d8_call = [c for c in calls if c[0][0] == "D8"][0]
        assert "43.27" in d8_call[0][1]
    
    def test_fill_other_direct(self, filler):
        """Test filling other direct costs"""
        budget = BudgetData()
        filler.set_budget_data(budget)
        
        changes = filler.fill_other_direct(dry_run=True)
        
        # Should have microgrants, cloud, travel, supplies
        assert len(changes) == 4
        
        # Check first item
        assert changes[0]["worksheet"] == "h. Other"
        assert changes[0]["row"] == 6
        assert changes[0]["changes"]["B"] == "Partner Microgrants"
        assert changes[0]["changes"]["C"] == "60000"
    
    def test_fill_all_dry_run(self, filler):
        """Test filling all sections in dry run mode"""
        summary = filler.fill_all(dry_run=True)
        
        assert summary["dry_run"] is True
        assert 497000 < summary["budget_total"] < 499000
        assert "personnel" in summary["changes"]
        assert "fringe" in summary["changes"]
        assert "other_direct" in summary["changes"]
        assert "indirect" in summary["changes"]
        
        # Verify no actual updates
        for ws in filler.sheet.worksheets():
            if hasattr(ws, 'update'):
                ws.update.assert_not_called()


if __name__ == "__main__":
    pytest.main([__file__, "-v"])