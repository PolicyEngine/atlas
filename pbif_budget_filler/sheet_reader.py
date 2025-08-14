"""Sheet reader to understand PBIF template structure"""

import gspread
from typing import Dict, List, Tuple, Optional, Any
import re


class SheetReader:
    """Reads and analyzes the PBIF budget spreadsheet structure"""
    
    def __init__(self, gc: gspread.Client, spreadsheet_id: str):
        self.gc = gc
        self.spreadsheet_id = spreadsheet_id
        self.sheet = None
        self.template_structure = {}
    
    def open_sheet(self):
        """Open the spreadsheet"""
        self.sheet = self.gc.open_by_key(self.spreadsheet_id)
        return self.sheet
    
    def analyze_template(self, template_id: str = "1g-AINvv3uK2VHQ040wgc5FN3ceKYPSeVHeEz7lDhBWk") -> Dict:
        """Analyze the template structure to understand where to put data"""
        
        # Open the template to understand structure
        template = self.gc.open_by_key(template_id)
        
        structure = {}
        
        for ws in template.worksheets():
            ws_data = {
                "title": ws.title,
                "rows": [],
                "data_regions": [],
                "headers": []
            }
            
            # Get all values
            values = ws.get_all_values()
            
            # Analyze Personnel tab specifically
            if "personnel" in ws.title.lower() or ws.title == "a. Personnel":
                ws_data["type"] = "personnel"
                
                # Look for the data entry region
                for i, row in enumerate(values):
                    row_str = ' '.join(str(cell) for cell in row).lower()
                    
                    # Find header rows
                    if 'name' in row_str or 'position' in row_str or 'title' in row_str:
                        ws_data["headers"].append({
                            "row": i + 1,
                            "columns": row
                        })
                    
                    # Find Year 1/Year 2 salary columns
                    for j, cell in enumerate(row):
                        cell_lower = str(cell).lower()
                        if 'year 1' in cell_lower:
                            ws_data["year1_col"] = chr(65 + j)  # Convert to letter
                        if 'year 2' in cell_lower:
                            ws_data["year2_col"] = chr(65 + j)
                        if 'salary' in cell_lower:
                            ws_data["salary_row"] = i + 1
                        if 'fte' in cell_lower or '% effort' in cell_lower:
                            ws_data["fte_col"] = chr(65 + j)
            
            # Analyze Fringe tab
            elif "fringe" in ws.title.lower() or ws.title == "b. Fringe":
                ws_data["type"] = "fringe"
                # Fringe is usually calculated as % of personnel
            
            # Analyze Other Direct Costs
            elif "other" in ws.title.lower() or ws.title in ["g. Other", "h. Other"]:
                ws_data["type"] = "other_direct"
                
                for i, row in enumerate(values):
                    row_str = ' '.join(str(cell) for cell in row).lower()
                    if 'description' in row_str or 'item' in row_str:
                        ws_data["headers"].append({
                            "row": i + 1,
                            "columns": row
                        })
            
            # Store the worksheet data
            structure[ws.title] = ws_data
        
        self.template_structure = structure
        return structure
    
    def find_data_entry_cells(self, worksheet_name: str) -> Dict[str, str]:
        """Find the specific cells where data should be entered"""
        
        if not self.sheet:
            self.open_sheet()
        
        ws = self.sheet.worksheet(worksheet_name)
        values = ws.get_all_values()
        
        entry_cells = {}
        
        # Map out the specific regions based on template analysis
        if "personnel" in worksheet_name.lower():
            # Personnel typically has:
            # Column B: Name/Title
            # Column C: % Effort/FTE  
            # Column D: Annual Salary
            # Column E: Year 1 Amount
            # Column F: Year 2 Amount
            
            # Find the first empty row after headers
            for i in range(5, 25):  # Start from row 5, check up to row 25
                if i < len(values):
                    row = values[i]
                    # Look for empty personnel rows
                    if len(row) > 5 and not row[1] and row[4] == "$0":
                        entry_cells["first_empty_row"] = i + 1
                        break
            
            entry_cells["name_col"] = "B"
            entry_cells["fte_col"] = "C"
            entry_cells["salary_col"] = "D"
            entry_cells["year1_col"] = "E"
            entry_cells["year2_col"] = "F"
        
        return entry_cells
    
    def validate_sheet_structure(self) -> bool:
        """Validate that the sheet has expected structure"""
        
        if not self.sheet:
            self.open_sheet()
        
        required_worksheets = [
            "summary", "a. personnel", "b. fringe", "h. other", "i. indirect"
        ]
        
        worksheet_names = [ws.title.lower() for ws in self.sheet.worksheets()]
        
        for required in required_worksheets:
            found = any(required in name for name in worksheet_names)
            if not found:
                print(f"Warning: Could not find worksheet matching '{required}'")
                return False
        
        return True