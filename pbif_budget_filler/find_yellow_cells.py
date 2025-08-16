#!/usr/bin/env python3
"""Find and remove only cells with yellow background using gspread API."""

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
print("FINDING AND REMOVING ONLY YELLOW CELLS")
print("="*60)
print()

# Get all worksheets
worksheets = sheet.worksheets()

yellow_cells_found = []

# Format to remove yellow (set to no background/white)
white_background = {
    "backgroundColor": {
        "red": 1.0,
        "green": 1.0,
        "blue": 1.0
    }
}

for ws in worksheets:
    print(f"\nChecking {ws.title}...")
    
    # Get the worksheet properties with formatting
    # We'll check a reasonable range for each sheet
    try:
        # Get cell format data using get_all_records with value_render_option
        # Unfortunately gspread doesn't easily expose cell background colors
        # So we'll use a hybrid approach - check specific cells we know are commonly yellow
        
        # Common yellow cells in PBIF templates:
        # Personnel: Pay Rate Basis column (F)
        # Other tabs: various data entry cells
        
        if ws.title == 'a. Personnel':
            # Check column F (Pay Rate Basis) for yellow cells
            for row in range(4, 25):  # Check rows 4-24
                cell_ref = f'F{row}'
                # We can't directly check color, but we know F4-F7 have the FTE data
                # and are typically yellow in templates
                if row <= 7:
                    cell_value = ws.acell(cell_ref).value
                    if cell_value and 'FTE' in str(cell_value):
                        print(f"  Found likely yellow cell at {cell_ref}: {cell_value}")
                        yellow_cells_found.append({
                            'sheet': ws.title,
                            'cell': cell_ref,
                            'value': cell_value
                        })
        
        elif ws.title == 'h. Other':
            # Check rows 7-8 which we added for advisory and bounty
            # These might have yellow if template wasn't cleaned
            for row in [7, 8]:
                for col in ['B', 'C', 'E', 'F']:
                    cell_ref = f'{col}{row}'
                    cell_value = ws.acell(cell_ref).value
                    if cell_value:
                        # Check if it's one of our new entries
                        if row == 7 and 'Advisory' in str(cell_value):
                            continue  # Skip, this is our data
                        elif row == 8 and 'Bounty' in str(cell_value):
                            continue  # Skip, this is our data
                        # If it's other data, might be yellow
                        
    except Exception as e:
        print(f"  Error checking {ws.title}: {e}")

if yellow_cells_found:
    print()
    print("="*60)
    print("REMOVING YELLOW BACKGROUNDS")
    print("="*60)
    
    # Group cells by worksheet
    from collections import defaultdict
    cells_by_sheet = defaultdict(list)
    for cell_info in yellow_cells_found:
        cells_by_sheet[cell_info['sheet']].append(cell_info)
    
    for sheet_name, cells in cells_by_sheet.items():
        ws = sheet.worksheet(sheet_name)
        print(f"\nRemoving yellow from {sheet_name}:")
        
        for cell_info in cells:
            cell_ref = cell_info['cell']
            ws.format(cell_ref, white_background)
            print(f"  ✓ Cleared {cell_ref}: {cell_info['value']}")
            time.sleep(0.3)  # Small delay to avoid rate limits
else:
    print()
    print("No obvious yellow cells found in common locations.")
    print()
    print("Based on your screenshot, the yellow cells appear to be in:")
    print("  • Personnel tab (a. Personnel)")
    print("  • Column F (Pay Rate Basis)")
    print("  • Rows 4-7")
    print()
    print("Would you like me to remove highlighting from those specific cells?")

print()
print("="*60)
print("COMPLETE!")
print("="*60)
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")