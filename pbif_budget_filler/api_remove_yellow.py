#!/usr/bin/env python3
"""Use Google Sheets API directly to find and remove yellow cells."""

import pickle
from pathlib import Path
from googleapiclient.discovery import build

# Load credentials
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

# Build the Sheets API service
service = build('sheets', 'v4', credentials=creds)

SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

print("="*60)
print("FINDING YELLOW CELLS USING SHEETS API")
print("="*60)
print()

# Get the spreadsheet with cell formats
result = service.spreadsheets().get(
    spreadsheetId=SPREADSHEET_ID,
    includeGridData=True
).execute()

yellow_cells = []

# Process each sheet
for sheet in result.get('sheets', []):
    sheet_title = sheet['properties']['title']
    sheet_id = sheet['properties']['sheetId']
    
    if 'data' not in sheet:
        continue
    
    print(f"Checking {sheet_title}...")
    
    for data in sheet['data']:
        if 'rowData' not in data:
            continue
            
        start_row = data.get('startRow', 0)
        start_col = data.get('startColumn', 0)
        
        for row_idx, row in enumerate(data.get('rowData', [])):
            for col_idx, cell in enumerate(row.get('values', [])):
                if 'effectiveFormat' in cell and 'backgroundColor' in cell['effectiveFormat']:
                    bg = cell['effectiveFormat']['backgroundColor']
                    red = bg.get('red', 0)
                    green = bg.get('green', 0)
                    blue = bg.get('blue', 0)
                    
                    # Check if yellow (high red, high green, low blue)
                    if red > 0.9 and green > 0.8 and blue < 0.3:
                        actual_row = start_row + row_idx
                        actual_col = start_col + col_idx
                        
                        # Get cell reference (A1 notation)
                        col_letter = ''
                        col_num = actual_col
                        while col_num >= 0:
                            col_letter = chr(65 + (col_num % 26)) + col_letter
                            col_num = col_num // 26 - 1
                            if col_num < 0:
                                break
                        
                        cell_ref = f"{col_letter}{actual_row + 1}"
                        
                        # Get cell value if it exists
                        cell_value = ''
                        if 'formattedValue' in cell:
                            cell_value = cell['formattedValue']
                        elif 'userEnteredValue' in cell:
                            if 'stringValue' in cell['userEnteredValue']:
                                cell_value = cell['userEnteredValue']['stringValue']
                            elif 'numberValue' in cell['userEnteredValue']:
                                cell_value = str(cell['userEnteredValue']['numberValue'])
                        
                        print(f"  Found yellow cell at {cell_ref}: '{cell_value}' (RGB: {red:.2f}, {green:.2f}, {blue:.2f})")
                        
                        yellow_cells.append({
                            'sheetId': sheet_id,
                            'sheetTitle': sheet_title,
                            'row': actual_row,
                            'col': actual_col,
                            'cell_ref': cell_ref,
                            'value': cell_value
                        })

if yellow_cells:
    print()
    print("="*60)
    print("REMOVING YELLOW BACKGROUNDS")
    print("="*60)
    print()
    
    # Build batch update request
    requests = []
    
    # Group cells by sheet for efficiency
    from collections import defaultdict
    cells_by_sheet = defaultdict(list)
    for cell in yellow_cells:
        cells_by_sheet[cell['sheetId']].append(cell)
    
    for sheet_id, cells in cells_by_sheet.items():
        sheet_title = cells[0]['sheetTitle']
        print(f"Removing yellow from {sheet_title}:")
        
        for cell in cells:
            print(f"  • {cell['cell_ref']}: {cell['value']}")
            
            # Create request to remove background color (set to white)
            requests.append({
                'repeatCell': {
                    'range': {
                        'sheetId': sheet_id,
                        'startRowIndex': cell['row'],
                        'endRowIndex': cell['row'] + 1,
                        'startColumnIndex': cell['col'],
                        'endColumnIndex': cell['col'] + 1
                    },
                    'cell': {
                        'userEnteredFormat': {
                            'backgroundColor': {
                                'red': 1.0,
                                'green': 1.0,
                                'blue': 1.0
                            }
                        }
                    },
                    'fields': 'userEnteredFormat.backgroundColor'
                }
            })
    
    if requests:
        print()
        print("Applying changes...")
        
        # Execute batch update
        body = {'requests': requests}
        response = service.spreadsheets().batchUpdate(
            spreadsheetId=SPREADSHEET_ID,
            body=body
        ).execute()
        
        print(f"✓ Successfully removed yellow from {len(yellow_cells)} cells")
    
else:
    print()
    print("No yellow cells found in the spreadsheet.")

print()
print("="*60)
print("COMPLETE!")
print("="*60)
print()
print("View spreadsheet at:")
print(f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")