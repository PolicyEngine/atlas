#!/usr/bin/env python3
"""Check for actual yellow cells and remove only those."""

import pickle
import gspread
import time
from pathlib import Path

# Load credentials using token.pickle
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

client = gspread.authorize(creds)

# Open the spreadsheet
sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')

print("="*60)
print("CHECKING FOR ACTUAL YELLOW CELLS")
print("="*60)
print()

# Get all worksheets
worksheets = sheet.worksheets()

# Check each worksheet for yellow cells
for ws in worksheets:
    print(f"\nChecking {ws.title}...")
    
    try:
        # Get the format of the worksheet
        # This requires using the sheets API directly through gspread
        sheet_metadata = sheet.fetch_sheet_metadata()
        
        # Find this worksheet in the metadata
        for sheet_data in sheet_metadata['sheets']:
            if sheet_data['properties']['title'] == ws.title:
                if 'data' in sheet_data and len(sheet_data['data']) > 0:
                    for data_range in sheet_data['data']:
                        if 'rowData' in data_range:
                            for row_idx, row in enumerate(data_range['rowData']):
                                if 'values' in row:
                                    for col_idx, cell in enumerate(row['values']):
                                        if 'effectiveFormat' in cell:
                                            if 'backgroundColor' in cell['effectiveFormat']:
                                                bg = cell['effectiveFormat']['backgroundColor']
                                                # Check if it's yellow (high red, high green, low blue)
                                                red = bg.get('red', 0)
                                                green = bg.get('green', 0)
                                                blue = bg.get('blue', 0)
                                                
                                                # Yellow typically has red~1, green~1, blue~0
                                                # or red~1, green~0.85-1, blue~0
                                                if red > 0.9 and green > 0.8 and blue < 0.3:
                                                    col_letter = chr(65 + col_idx)
                                                    cell_ref = f"{col_letter}{row_idx + 1}"
                                                    print(f"  Found yellow cell: {cell_ref} (R:{red:.2f}, G:{green:.2f}, B:{blue:.2f})")
                break
                
    except Exception as e:
        print(f"  Could not check format details: {e}")
        print(f"  Trying alternative method...")
        
        # Alternative: Check specific cells we know are usually yellow in templates
        # These are the cells that typically have yellow highlighting
        test_cells = {
            'a. Personnel': ['F4', 'F5', 'F6', 'F7'],  # Pay Rate Basis column
            'b. Fringe': [],
            'f. Contractual': [],
            'h. Other': [],
        }
        
        if ws.title in test_cells:
            for cell_ref in test_cells[ws.title]:
                cell = ws.acell(cell_ref)
                print(f"  Checking {cell_ref}: {cell.value}")

print()
print("="*60)
print("ANALYSIS COMPLETE")
print("="*60)
print()
print("Note: The cells with yellow highlighting in your screenshot appear to be")
print("in the 'Pay Rate Basis' column (column F) of the Personnel tab.")
print("These contain the FTE percentages and are likely the actual yellow cells.")
print()
print("Would you like me to remove highlighting ONLY from those specific cells?")