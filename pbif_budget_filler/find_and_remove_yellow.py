#!/usr/bin/env python3
"""Loop through cells, check for yellow background, and remove only those."""

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

# Use the Google Sheets API directly through gspread's client
service = client.http_client

# Get spreadsheet metadata including cell formats  
request = service.spreadsheets().get(
    spreadsheetId='1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw',
    includeGridData=True,
    ranges=['Summary!A1:Z100', 
            'a. Personnel!A1:Z100',
            'b. Fringe!A1:Z100',
            'c. Travel!A1:Z100',
            'd. Equipment!A1:Z100',
            'e. Supplies!A1:Z100',
            'f. Contractual!A1:Z100',
            'h. Other!A1:Z100',
            'i. Indirect!A1:Z100']
)
spreadsheet_data = request.execute()

yellow_cells_found = []

# Process each sheet in the response
if 'sheets' not in spreadsheet_data:
    print("No sheet data found")
    exit()

for sheet_data in spreadsheet_data['sheets']:
    sheet_name = sheet_data['properties']['title']
    
    if 'data' not in sheet_data:
        continue
        
    print(f"\nChecking {sheet_name}...")
    
    for data_range in sheet_data['data']:
        if 'rowData' not in data_range:
            continue
            
        start_row = data_range.get('startRow', 0)
        start_col = data_range.get('startColumn', 0)
        
        for row_idx, row_data in enumerate(data_range['rowData']):
            if 'values' not in row_data:
                continue
                
            for col_idx, cell_data in enumerate(row_data['values']):
                if 'effectiveFormat' not in cell_data:
                    continue
                    
                if 'backgroundColor' not in cell_data['effectiveFormat']:
                    continue
                    
                bg_color = cell_data['effectiveFormat']['backgroundColor']
                red = bg_color.get('red', 0)
                green = bg_color.get('green', 0) 
                blue = bg_color.get('blue', 0)
                
                # Check if this is yellow (high red, high green, low blue)
                # Yellow is typically around RGB(1.0, 1.0, 0.0) or RGB(1.0, 0.85, 0.0)
                if red > 0.9 and green > 0.8 and blue < 0.3:
                    actual_row = start_row + row_idx + 1
                    actual_col = start_col + col_idx + 1
                    col_letter = chr(64 + actual_col)  # A=65, B=66, etc.
                    cell_ref = f"{col_letter}{actual_row}"
                    
                    # Get the cell value
                    formatted_value = cell_data.get('formattedValue', '')
                    
                    print(f"  Found yellow cell at {cell_ref}: '{formatted_value}' (RGB: {red:.2f}, {green:.2f}, {blue:.2f})")
                    yellow_cells_found.append({
                        'sheet': sheet_name,
                        'cell': cell_ref,
                        'value': formatted_value
                    })

print()
print("="*60)
print("REMOVING YELLOW BACKGROUNDS")
print("="*60)

# Remove yellow from found cells
white_background = {
    "backgroundColor": {
        "red": 1.0,
        "green": 1.0,
        "blue": 1.0
    }
}

# Group cells by worksheet
from collections import defaultdict
cells_by_sheet = defaultdict(list)
for cell_info in yellow_cells_found:
    cells_by_sheet[cell_info['sheet']].append(cell_info['cell'])

for sheet_name, cells in cells_by_sheet.items():
    ws = sheet.worksheet(sheet_name)
    print(f"\nRemoving yellow from {sheet_name}:")
    
    # Batch format all yellow cells in this sheet
    for cell_ref in cells:
        ws.format(cell_ref, white_background)
        print(f"  ✓ Cleared {cell_ref}")
        time.sleep(0.2)  # Small delay to avoid rate limits

print()
print("="*60)
print("COMPLETE!")
print("="*60)
print(f"\nRemoved yellow highlighting from {len(yellow_cells_found)} cells.")
print("All other formatting preserved.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")