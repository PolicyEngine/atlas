#!/usr/bin/env python3
"""Single script to populate the entire PBIF budget spreadsheet."""

import pickle
import gspread
from pathlib import Path
from googleapiclient.discovery import build

# Configuration
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

def get_clients():
    """Initialize both gspread and Google Sheets API clients."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    client = gspread.authorize(creds)
    service = build('sheets', 'v4', credentials=creds)
    
    return client, service

def populate_contractual(sheet):
    """Populate the Contractual worksheet."""
    ws = sheet.worksheet('f. Contractual')
    
    # Partners data
    partners = [
        ["LOI-1", "MyFriendBen", "", 50000, 
         "Demonstration partner - test ambiguity analysis with 3,500 monthly users"],
        ["LOI-2", "Benefit Navigator", "", 50000, 
         "Demonstration partner - test with 500+ caseworkers"],
        ["LOI-3", "Citizen Codex", "", 30000, 
         "UX research and interface design"],
    ]
    
    # Clear and populate rows
    for i, partner in enumerate(partners):
        row = 5 + i
        ws.update(f'A{row}:E{row}', [partner])
    
    # Clear unused rows
    for row in range(8, 13):
        ws.update(f'A{row}:E{row}', [[""] * 5])
    
    # Don't add formula - it's already in the template
    
    # Add explanation
    explanation = (
        "MyFriendBen and Benefit Navigator each receive $50k as demonstration partners "
        "to test ambiguity analysis. Citizen Codex receives $30k for UX research and design."
    )
    ws.update('A15', [[explanation]])

def populate_other_direct(sheet):
    """Populate the Other Direct Costs worksheet."""
    ws = sheet.worksheet('h. Other')
    
    # Other direct costs items
    items = [
        ["Technical Advisory Services", 40000, "", "Professional services", 
         "Expert guidance from Urban Institute, GCO, NBER, Benefit Kitchen, NCCP and others "
         "on document collection strategy and policy implementation"],
        ["Document Bounty Program", 35000, "", "Performance-based awards", 
         "Incentives for partners to verify AI-collected documents and contribute missing ones"],
    ]
    
    # Add items
    for i, item in enumerate(items):
        row = 7 + i
        ws.update(f'B{row}:F{row}', [item])

def populate_personnel(sheet):
    """Populate the Personnel worksheet with standard values."""
    ws = sheet.worksheet('a. Personnel')
    
    # Personnel data: Name, Title, Effort %, Base Salary, Fringe Rate
    personnel = [
        ["Max Ghenis", "Project Lead", 50, 150000, 0.30],
        ["Nikhil Woodruff", "Lead Engineer", 100, 140000, 0.30],
        ["Pavel Makarchuk", "ML/AI Engineer", 80, 120000, 0.30],
        ["TBD", "Policy Analyst", 70, 90000, 0.30],
    ]
    
    # Update personnel rows
    for i, person in enumerate(personnel):
        row = 4 + i
        ws.update(f'A{row}', [[person[0]]])  # Name
        ws.update(f'B{row}', [[person[1]]])  # Title
        ws.update(f'C{row}', [[person[2]]])  # Effort %
        ws.update(f'E{row}', [[person[3]]])  # Base salary
        ws.update(f'G{row}', [[person[4]]])  # Fringe rate
        # Don't add formulas - they're already in the template

def populate_equipment(sheet):
    """Populate Equipment worksheet."""
    ws = sheet.worksheet('d. Equipment')
    
    # Clear existing data first (rows 5-10)
    for row in range(5, 11):
        ws.update(f'B{row}:H{row}', [[""] * 7])
    
    # Equipment items - proper column structure
    # B: Equipment Item, C: Qty, D: Unit Cost, E: Total Cost, F: Cost share, G: Basis, H: Justification
    equipment = [
        ["Development Workstations", 2, 3000, 6000, "", "Dell.com pricing",
         "High-performance machines for ML model training and document processing"],
        ["Cloud GPU Credits", 12, 500, 6000, "", "AWS pricing calculator",
         "GPU compute for training document classification models"],
        ["Software Licenses", 4, 1500, 6000, "", "Vendor quotes",
         "Development tools, monitoring, and security software"],
    ]
    
    for i, item in enumerate(equipment):
        row = 5 + i
        ws.update(f'B{row}', [[item[0]]])  # Equipment Item
        ws.update(f'C{row}', [[item[1]]])  # Quantity
        ws.update(f'D{row}', [[item[2]]])  # Unit Cost
        ws.update(f'E{row}', [[item[3]]])  # Total Cost
        ws.update(f'F{row}', [[item[4]]])  # Cost share (empty)
        ws.update(f'G{row}', [[item[5]]])  # Basis of Cost
        ws.update(f'H{row}', [[item[6]]])  # Justification

def populate_travel(sheet):
    """Populate Travel worksheet."""
    ws = sheet.worksheet('c. Travel')
    
    # Clear existing data first (rows 4-10)
    for row in range(4, 11):
        ws.update(f'B{row}:M{row}', [[""] * 12])
    
    # Travel items with proper column structure using GSA FY2025 per diem rates
    # B: Purpose, C: Depart From, D: Destination, E: Days, F: Travelers, 
    # G: Lodging, H: Flight, I: Vehicle, J: M&IE, K: Cost/Trip, M: Basis
    # GSA rates: Atlanta ($189 lodging, $86 M&IE), Denver ($215 lodging, $92 M&IE), 
    #           San Francisco ($381 lodging, $92 M&IE), Austin ($213 lodging, $86 M&IE)
    travel = [
        ["National Benefits Conference presentation", "Washington DC", "Atlanta GA", 
         3, 2, 189, 350, 0, 86, "", "", "GSA FY25 per diem for Atlanta GA"],
        ["Partner integration - MyFriendBen Colorado", "Washington DC", "Denver CO", 
         2, 1, 215, 600, 0, 92, "", "", "GSA FY25 per diem for Denver CO"],
        ["Code for America Summit presentation", "Washington DC", "San Francisco CA", 
         3, 1, 381, 700, 0, 92, "", "", "GSA FY25 per diem for San Francisco CA"],
        ["Policy Simulation Library annual meeting", "Washington DC", "Austin TX", 
         2, 2, 213, 500, 0, 86, "", "", "GSA FY25 per diem for Austin TX"],
    ]
    
    for i, item in enumerate(travel):
        row = 4 + i  # Start at row 4, not row 5
        ws.update(f'B{row}', [[item[0]]])   # Purpose of Travel
        ws.update(f'C{row}', [[item[1]]])   # Depart From
        ws.update(f'D{row}', [[item[2]]])   # Destination
        ws.update(f'E{row}', [[item[3]]])   # No. of Days
        ws.update(f'F{row}', [[item[4]]])   # No. of Travelers
        ws.update(f'G{row}', [[item[5]]])   # Lodging per Traveler
        ws.update(f'H{row}', [[item[6]]])   # Flight per Traveler
        ws.update(f'I{row}', [[item[7]]])   # Vehicle per Traveler
        ws.update(f'J{row}', [[item[8]]])   # M&IE Per Traveler
        # K is calculated by formula
        ws.update(f'M{row}', [[item[11]]])  # Basis for Estimating Costs

def populate_indirect(sheet):
    """Populate Indirect Costs."""
    ws = sheet.worksheet('i. Indirect')
    
    # Set indirect rate (percentage value only, formula already in template)
    ws.update('B5', [[15]])  # 15% de minimis rate
    
    # Add explanation
    explanation = (
        "Using 15% de minimis rate per 2 CFR 200.414(f). This covers administrative support, "
        "facilities, utilities, and general overhead costs."
    )
    ws.update('A7', [[explanation]])

def remove_yellow_highlights(service):
    """Remove all yellow highlighting from the spreadsheet."""
    
    # Get all sheet data with formatting
    result = service.spreadsheets().get(
        spreadsheetId=SPREADSHEET_ID,
        includeGridData=True
    ).execute()
    
    requests = []
    
    # Find all yellow cells
    for sheet_data in result.get('sheets', []):
        sheet_id = sheet_data['properties']['sheetId']
        
        if 'data' not in sheet_data:
            continue
        
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
                            # Add request to remove yellow
                            requests.append({
                                'repeatCell': {
                                    'range': {
                                        'sheetId': sheet_id,
                                        'startRowIndex': start_row + row_idx,
                                        'endRowIndex': start_row + row_idx + 1,
                                        'startColumnIndex': start_col + col_idx,
                                        'endColumnIndex': start_col + col_idx + 1
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
    
    # Execute batch update if there are yellow cells to remove
    if requests:
        service.spreadsheets().batchUpdate(
            spreadsheetId=SPREADSHEET_ID,
            body={'requests': requests}
        ).execute()
        print(f"  ✓ Removed {len(requests)} yellow highlighted cells")

def main():
    """Main function to populate the entire budget."""
    print("="*60)
    print("POPULATING PBIF BUDGET SPREADSHEET")
    print("="*60)
    print()
    
    # Get clients
    client, service = get_clients()
    sheet = client.open_by_key(SPREADSHEET_ID)
    
    # First, list all worksheets
    print("Available worksheets:")
    for ws in sheet.worksheets():
        print(f"  - '{ws.title}'")
    print()
    
    # Populate each worksheet
    print("1. Populating Personnel...")
    try:
        populate_personnel(sheet)
        print("   ✓ Personnel data added")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n2. Populating Equipment...")
    try:
        populate_equipment(sheet)
        print("   ✓ Equipment items added")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n3. Populating Travel...")
    try:
        populate_travel(sheet)
        print("   ✓ Travel expenses added")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n4. Populating Contractual...")
    try:
        populate_contractual(sheet)
        print("   ✓ Partners added")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n5. Populating Other Direct Costs...")
    try:
        populate_other_direct(sheet)
        print("   ✓ Advisory and bounty programs added")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n6. Populating Indirect Costs...")
    try:
        populate_indirect(sheet)
        print("   ✓ 15% de minimis rate set")
    except Exception as e:
        print(f"   ✗ Error: {e}")
    
    print("\n7. Removing yellow highlights...")
    remove_yellow_highlights(service)
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print("\nKey allocations populated:")
    print("  • Personnel: 2.5 FTE")
    print("  • Contractual partners: MyFriendBen, Benefit Navigator, Citizen Codex")
    print("  • Technical Advisory: $40,000")
    print("  • Document Bounty: $35,000")
    print("  • Indirect: 15% de minimis rate")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    main()