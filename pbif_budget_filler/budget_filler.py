"""Main budget filler class with careful cell-by-cell filling"""

import gspread
from typing import Optional, List, Dict, Tuple
try:
    from .models import BudgetData, PersonnelItem, OtherDirectItem
    from .sheet_reader import SheetReader
except ImportError:
    from models import BudgetData, PersonnelItem, OtherDirectItem
    from sheet_reader import SheetReader


class PBIFBudgetFiller:
    """Fills PBIF budget spreadsheet with validation"""
    
    def __init__(self, gc: gspread.Client, spreadsheet_id: str):
        self.gc = gc
        self.spreadsheet_id = spreadsheet_id
        self.sheet = None
        self.reader = SheetReader(gc, spreadsheet_id)
        self.budget_data = None
        
    def set_budget_data(self, budget_data: BudgetData):
        """Set the budget data to use"""
        self.budget_data = budget_data
        
    def open_sheet(self):
        """Open the spreadsheet"""
        self.sheet = self.gc.open_by_key(self.spreadsheet_id)
        return self.sheet
    
    def read_current_values(self, worksheet_name: str) -> List[List]:
        """Read current values from a worksheet"""
        if not self.sheet:
            self.open_sheet()
        
        ws = self.sheet.worksheet(worksheet_name)
        return ws.get_all_values()
    
    def find_personnel_data_rows(self) -> Tuple[str, int, int]:
        """Find where to enter personnel data
        
        Returns: (worksheet_name, start_row, end_row)
        """
        if not self.sheet:
            self.open_sheet()
            
        # Find personnel worksheet
        personnel_ws = None
        for ws in self.sheet.worksheets():
            if "personnel" in ws.title.lower() or ws.title == "a. Personnel":
                personnel_ws = ws
                break
        
        if not personnel_ws:
            raise ValueError("Could not find Personnel worksheet")
        
        values = personnel_ws.get_all_values()
        
        # Based on template analysis:
        # Row 4 has headers
        # Row 7 has example "Program Director (EXAMPLE)"
        # Rows 8-25 are empty data rows with $0 in column E
        
        # Find first data row (has $0 in project total column)
        start_row = None
        for i in range(6, 26):  # Start from row 7 (index 6)
            if i < len(values):
                row = values[i]
                if len(row) > 4 and "$0" in str(row[4]):
                    # Check if this is empty (not the example row)
                    if not row[1] or "example" not in row[1].lower():
                        start_row = i + 1  # Convert to 1-based
                        break
        
        if not start_row:
            start_row = 8  # Default to row 8
        
        return personnel_ws.title, start_row, start_row + 10  # Allow up to 10 personnel
    
    def fill_personnel(self, dry_run: bool = False) -> List[Dict]:
        """Fill personnel section
        
        Args:
            dry_run: If True, only return what would be changed without modifying
            
        Returns:
            List of changes made/to be made
        """
        if not self.budget_data:
            raise ValueError("Budget data not set")
        
        changes = []
        
        # Find where to put data
        ws_name, start_row, _ = self.find_personnel_data_rows()
        
        if not self.sheet:
            self.open_sheet()
        
        ws = self.sheet.worksheet(ws_name)
        
        # Based on template structure:
        # Column B: Position Title
        # Column C: Time (Hrs) - convert FTE to hours (2080 * FTE)
        # Column D: Pay Rate ($/Hr) - annual salary / 2080
        # Column E: Project Total (calculated)
        
        for i, person in enumerate(self.budget_data.personnel):
            row_num = start_row + i
            
            # Calculate hours and hourly rate
            hours_year1 = 2080 * person.fte
            hourly_rate = person.year1_salary / (2080 * person.fte) if person.fte > 0 else 0
            
            changes.append({
                "worksheet": ws_name,
                "row": row_num,
                "changes": {
                    "B": person.position,
                    "C": str(int(hours_year1)),  # Hours as string
                    "D": f"{hourly_rate:.2f}",   # Hourly rate
                    # Column E will auto-calculate
                }
            })
            
            if not dry_run:
                # Update cells - update expects [[value]]
                ws.update(f"B{row_num}", [[person.position]])
                ws.update(f"C{row_num}", [[str(int(hours_year1))]])
                ws.update(f"D{row_num}", [[f"{hourly_rate:.2f}"]])
        
        return changes
    
    def fill_fringe(self, dry_run: bool = False) -> List[Dict]:
        """Fill fringe benefits section"""
        if not self.budget_data:
            raise ValueError("Budget data not set")
        
        changes = []
        
        # Find fringe worksheet
        fringe_ws = None
        for ws in self.sheet.worksheets():
            if "fringe" in ws.title.lower() or ws.title == "b. Fringe":
                fringe_ws = ws
                break
        
        if not fringe_ws:
            return changes
        
        # Fringe is typically calculated as a percentage
        # Need to find where to enter the rate and base
        
        values = fringe_ws.get_all_values()
        
        # Look for where to enter fringe rate (usually around row 8-10)
        for i in range(7, 15):
            if i < len(values):
                row = values[i]
                if len(row) > 3 and "$0" in str(row):
                    # Found a data entry row
                    changes.append({
                        "worksheet": fringe_ws.title,
                        "row": i + 1,
                        "changes": {
                            "B": "Benefits (25% of salaries)",
                            "C": str(self.budget_data.year1_personnel_benefits),
                        }
                    })
                    
                    if not dry_run:
                        fringe_ws.update(f"B{i+1}", [["Benefits (25% of salaries)"]])
                        fringe_ws.update(f"C{i+1}", [[str(self.budget_data.year1_personnel_benefits)]])
                    break
        
        return changes
    
    def fill_other_direct(self, dry_run: bool = False) -> List[Dict]:
        """Fill other direct costs section"""
        if not self.budget_data:
            raise ValueError("Budget data not set")
        
        changes = []
        
        # Find other worksheet (might be "h. Other" based on template)
        other_ws = None
        for ws in self.sheet.worksheets():
            if ws.title == "h. Other" or "other" in ws.title.lower():
                other_ws = ws
                break
        
        if not other_ws:
            return changes
        
        values = other_ws.get_all_values()
        
        # Based on template:
        # Row 3 has headers
        # Data starts around row 6
        # Column B: Description
        # Column C: Cost
        
        start_row = 6
        for i, item in enumerate(self.budget_data.other_direct):
            row_num = start_row + i
            
            changes.append({
                "worksheet": other_ws.title,
                "row": row_num,
                "changes": {
                    "B": item.description,
                    "C": str(item.year1_amount),  # Using year 1 amount
                }
            })
            
            if not dry_run:
                other_ws.update(f"B{row_num}", [[item.description]])
                other_ws.update(f"C{row_num}", [[str(item.year1_amount)]])
        
        # Add travel and supplies if specified
        if self.budget_data.travel_year1 > 0:
            row_num = start_row + len(self.budget_data.other_direct)
            changes.append({
                "worksheet": other_ws.title,
                "row": row_num,
                "changes": {
                    "B": "Travel/Conferences",
                    "C": str(self.budget_data.travel_year1),
                }
            })
            if not dry_run:
                other_ws.update(f"B{row_num}", [["Travel/Conferences"]])
                other_ws.update(f"C{row_num}", [[str(self.budget_data.travel_year1)]])
        
        if self.budget_data.supplies_year1 > 0:
            row_num = start_row + len(self.budget_data.other_direct) + 1
            changes.append({
                "worksheet": other_ws.title,
                "row": row_num,
                "changes": {
                    "B": "Software Licenses",
                    "C": str(self.budget_data.supplies_year1),
                }
            })
            if not dry_run:
                other_ws.update(f"B{row_num}", [["Software Licenses"]])
                other_ws.update(f"C{row_num}", [[str(self.budget_data.supplies_year1)]])
        
        return changes
    
    def fill_indirect(self, dry_run: bool = False) -> List[Dict]:
        """Fill indirect costs section"""
        if not self.budget_data:
            raise ValueError("Budget data not set")
        
        changes = []
        
        # Find indirect worksheet
        indirect_ws = None
        for ws in self.sheet.worksheets():
            if "indirect" in ws.title.lower() or ws.title == "i. Indirect":
                indirect_ws = ws
                break
        
        if not indirect_ws:
            return changes
        
        # Indirect is typically entered as a rate
        # The template will calculate the amount
        
        changes.append({
            "worksheet": indirect_ws.title,
            "note": f"Indirect rate: {self.budget_data.indirect_rate * 100}% de minimis",
            "amount": self.budget_data.year1_indirect
        })
        
        # Note: Actual cell updates depend on template structure
        # May need manual entry of rate
        
        return changes
    
    def validate_totals(self) -> Dict[str, float]:
        """Validate that totals match expected values"""
        if not self.sheet:
            self.open_sheet()
        
        # Read summary sheet to get calculated totals
        summary_ws = None
        for ws in self.sheet.worksheets():
            if "summary" in ws.title.lower():
                summary_ws = ws
                break
        
        if not summary_ws:
            return {"error": "No summary worksheet found"}
        
        values = summary_ws.get_all_values()
        
        # Look for total cells (usually have $ and large numbers)
        totals = {}
        for row in values:
            for cell in row:
                if "$" in str(cell) and "," in str(cell):
                    # Try to parse as currency
                    try:
                        amount = float(str(cell).replace("$", "").replace(",", ""))
                        if amount > 10000:  # Significant amount
                            totals[f"found_{amount}"] = amount
                    except:
                        pass
        
        # Add expected totals
        totals["expected_year1"] = self.budget_data.year1_total
        totals["expected_year2"] = self.budget_data.year2_total
        totals["expected_total"] = self.budget_data.grand_total
        
        return totals
    
    def fill_all(self, dry_run: bool = True) -> Dict:
        """Fill all sections of the budget
        
        Args:
            dry_run: If True, only show what would be changed
            
        Returns:
            Summary of all changes
        """
        if not self.budget_data:
            self.budget_data = BudgetData()  # Use defaults
        
        summary = {
            "dry_run": dry_run,
            "budget_total": self.budget_data.grand_total,
            "changes": {}
        }
        
        # Fill each section
        summary["changes"]["personnel"] = self.fill_personnel(dry_run)
        summary["changes"]["fringe"] = self.fill_fringe(dry_run)
        summary["changes"]["other_direct"] = self.fill_other_direct(dry_run)
        summary["changes"]["indirect"] = self.fill_indirect(dry_run)
        
        if not dry_run:
            summary["validation"] = self.validate_totals()
        
        return summary