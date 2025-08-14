#!/usr/bin/env python3
"""Read all tabs to understand the current state"""

import pickle
import gspread
from pathlib import Path

def read_all_tabs():
    """Read and display all tabs to understand current state"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("READING ALL TABS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    for ws in sheet.worksheets():
        print(f"\n\nTAB: {ws.title}")
        print("-"*40)
        
        values = ws.get_all_values()
        
        if not values:
            print("  Empty worksheet")
            continue
            
        print(f"  Dimensions: {len(values)} rows × {len(values[0])} columns")
        
        # Show non-empty rows with data
        print("\n  Non-empty data rows:")
        for i, row in enumerate(values):
            # Skip completely empty rows
            if not any(cell.strip() for cell in row):
                continue
                
            # For data rows (not headers), show if they have content
            row_str = ' | '.join(str(cell)[:30] for cell in row[:6])
            
            # Check for important content
            has_dollar = any('$' in str(cell) for cell in row)
            has_number = any(cell.replace(',','').replace('.','').isdigit() for cell in row if cell)
            has_text = any(len(str(cell)) > 2 for cell in row)
            
            if has_dollar or (has_number and i > 5) or (has_text and i > 3):
                print(f"    Row {i+1}: {row_str}")
                
                # Flag issues
                if i > 6:  # Data rows
                    # Check for skipped rows (empty row followed by filled row)
                    if len(row) > 4:
                        if row[1] == "" and row[4] == "$0":
                            print(f"      ^ EMPTY DATA ROW")
                        elif row[1] and "example" not in row[1].lower():
                            print(f"      ^ FILLED ROW")

if __name__ == "__main__":
    read_all_tabs()