#!/usr/bin/env python3
"""Update all spreadsheet values and remove yellow backgrounds."""

import pickle
import gspread
import time
from pathlib import Path
from googleapiclient.discovery import build

# Load credentials
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

# Initialize both gspread and Google Sheets API
client = gspread.authorize(creds)
service = build('sheets', 'v4', credentials=creds)

SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

print("="*60)
print("UPDATING ALL VALUES AND REMOVING YELLOW BACKGROUNDS")
print("="*60)
print()

# Open the spreadsheet with gspread
sheet = client.open_by_key(SPREADSHEET_ID)

# ===========================
# STEP 1: UPDATE ALL VALUES
# ===========================
print("STEP 1: Updating all values...")
print("-" * 40)

# Update Contractual worksheet
contractual_ws = sheet.worksheet('f. Contractual')
contractual_data = [
    ["LOI-1", "MyFriendBen", "", 50000, "Demonstration partner - test ambiguity analysis with 3,500 monthly users"],
    ["LOI-2", "Benefit Navigator", "", 50000, "Demonstration partner - test with 500+ caseworkers"],
    ["LOI-3", "Citizen Codex", "", 30000, "UX research and interface design"],
]

print("Updating Contractual worksheet...")
for i, partner in enumerate(contractual_data):
    row_num = 5 + i
    contractual_ws.update(f'A{row_num}', [[partner[0]]])  # LOI number
    contractual_ws.update(f'B{row_num}', [[partner[1]]])  # Name
    contractual_ws.update(f'C{row_num}', [[partner[2]]])  # Empty
    contractual_ws.update(f'D{row_num}', [[partner[3]]])  # Amount as number
    contractual_ws.update(f'E{row_num}', [[partner[4]]])  # Description
    print(f"  Updated row {row_num}: {partner[1]} - ${partner[3]:,}")
    time.sleep(0.5)

# Clear unused contractual rows
for row_num in [8, 9, 10, 11, 12]:
    contractual_ws.update(f'A{row_num}:E{row_num}', [[""]*5])

# Add SUM formula for Contractual total
contractual_ws.update('D13', [['=SUM(D5:D12)']], value_input_option='USER_ENTERED')
print("  Added SUM formula to D13")

# Update contractual explanation
contractual_explanation = ("MyFriendBen and Benefit Navigator each receive $50k as demonstration partners to test ambiguity analysis. "
                          "Citizen Codex receives $30k for UX research and design.")
contractual_ws.update(f'A15', [[contractual_explanation]])
time.sleep(0.5)

# Update Other Direct Costs worksheet
other_ws = sheet.worksheet('h. Other')
print("\nUpdating Other Direct Costs worksheet...")

# Add Technical Advisory and Document Bounty items
other_items = [
    ["Technical Advisory Services", 40000, "", "Professional services", 
     "Expert guidance from Urban Institute, GCO, NBER, Benefit Kitchen, NCCP and others on document collection strategy and policy implementation"],
    ["Document Bounty Program", 35000, "", "Performance-based awards", 
     "Incentives for partners to verify AI-collected documents and contribute missing ones"],
]

for i, item in enumerate(other_items):
    row_num = 7 + i
    other_ws.update(f'B{row_num}', [[item[0]]])  # Description
    other_ws.update(f'C{row_num}', [[item[1]]])  # Cost as number
    other_ws.update(f'D{row_num}', [[item[2]]])  # Cost share
    other_ws.update(f'E{row_num}', [[item[3]]])  # Basis
    other_ws.update(f'F{row_num}', [[item[4]]])  # Justification
    print(f"  Added row {row_num}: {item[0]} - ${item[1]:,}")
    time.sleep(0.5)

# ===========================
# STEP 2: FIND YELLOW CELLS
# ===========================
print("\nSTEP 2: Finding yellow cells...")
print("-" * 40)

# Get the spreadsheet with cell formats using Sheets API
result = service.spreadsheets().get(
    spreadsheetId=SPREADSHEET_ID,
    includeGridData=True
).execute()

yellow_cells = []

# Process each sheet
for sheet_data in result.get('sheets', []):
    sheet_title = sheet_data['properties']['title']
    sheet_id = sheet_data['properties']['sheetId']
    
    if 'data' not in sheet_data:
        continue
    
    yellow_count = 0
    
    for data in sheet_data['data']:
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
                        
                        # Convert to A1 notation
                        col_letter = ''
                        col_num = actual_col
                        while col_num >= 0:
                            col_letter = chr(65 + (col_num % 26)) + col_letter
                            col_num = col_num // 26 - 1
                            if col_num < 0:
                                break
                        
                        yellow_cells.append({
                            'sheetId': sheet_id,
                            'sheetTitle': sheet_title,
                            'row': actual_row,
                            'col': actual_col,
                            'cell_ref': f"{col_letter}{actual_row + 1}"
                        })
                        yellow_count += 1
    
    if yellow_count > 0:
        print(f"  Found {yellow_count} yellow cells in {sheet_title}")

# ===========================
# STEP 3: REMOVE YELLOW BACKGROUNDS
# ===========================
if yellow_cells:
    print(f"\nSTEP 3: Removing {len(yellow_cells)} yellow backgrounds...")
    print("-" * 40)
    
    # Build batch update request
    requests = []
    
    for cell in yellow_cells:
        requests.append({
            'repeatCell': {
                'range': {
                    'sheetId': cell['sheetId'],
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
    
    # Execute batch update
    body = {'requests': requests}
    response = service.spreadsheets().batchUpdate(
        spreadsheetId=SPREADSHEET_ID,
        body=body
    ).execute()
    
    print(f"  ✓ Successfully removed {len(yellow_cells)} yellow backgrounds")
else:
    print("\nNo yellow cells found.")

# ===========================
# STEP 4: FORMAT CURRENCY CELLS
# ===========================
print("\nSTEP 4: Applying currency formatting...")
print("-" * 40)

# Format currency cells in Other tab
other_ws.format('C7:C8', {
    "numberFormat": {
        "type": "CURRENCY",
        "pattern": "$#,##0"
    }
})
print("  Applied currency formatting to Other C7:C8")

# Format currency cells in Contractual tab
contractual_ws.format('D5:D12', {
    "numberFormat": {
        "type": "CURRENCY",
        "pattern": "$#,##0"
    }
})
print("  Applied currency formatting to Contractual D5:D12")

print()
print("="*60)
print("COMPLETE!")
print("="*60)
print()
print("Summary of changes:")
print("  • Updated Contractual partners (3 partners, $130k total)")
print("  • Added Advisory Services and Bounty Program to Other ($75k)")
print(f"  • Removed {len(yellow_cells)} yellow backgrounds")
print("  • Applied currency formatting to amount columns")
print()
print("Budget totals:")
print("  • Contractual: $130,000")
print("  • Other Direct Costs additions: $75,000")
print()
print("View spreadsheet at:")
print(f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")