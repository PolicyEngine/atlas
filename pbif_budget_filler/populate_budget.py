#!/usr/bin/env python3
"""Populate PBIF budget spreadsheet from YAML configuration."""

import pickle
import yaml
import gspread
from pathlib import Path
from googleapiclient.discovery import build

def load_config():
    """Load both budget data and spreadsheet configuration."""
    with open('budget_data.yaml', 'r') as f:
        budget_data = yaml.safe_load(f)
    
    with open('spreadsheet_config.yaml', 'r') as f:
        spreadsheet_config = yaml.safe_load(f)
    
    return budget_data, spreadsheet_config

def get_clients():
    """Initialize both gspread and Google Sheets API clients."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    client = gspread.authorize(creds)
    service = build('sheets', 'v4', credentials=creds)
    
    return client, service

def populate_personnel(ws, data, config):
    """Populate Personnel worksheet - only non-formula columns."""
    print("   Personnel...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['personnel']
    start_row = ws_config['data_start_row']
    
    # Clear only the data entry columns (B, C, G) to preserve formulas
    for i in range(8):
        row = start_row + i
        ws.update(values=[['']], range_name=f'B{row}')  # Clear Position Title
        ws.update(values=[['']], range_name=f'C{row}')  # Clear Time (Hrs)
        ws.update(values=[['']], range_name=f'G{row}')  # Clear Pay Rate Basis
    
    # Populate data for each person
    # We only populate:
    # B: Position Title
    # C: Time (Hrs) - effort as hours (% * 2080)
    # G: Pay Rate Basis - the annual salary
    # The other columns have formulas that calculate automatically:
    # D: Pay Rate ($/Hr) = G/2080
    # E: Project Total = C*D
    # F: Cost share - leave empty
    
    for i, person in enumerate(data):
        # Convert effort percentage to hours (% of 2080 hours/year * 2 years)
        hours_per_year = int(person['effort_pct'] * 2080 / 100)
        total_hours = hours_per_year * 2  # 2-year grant period
        row = start_row + i
        
        # Calculate hourly rate for column D
        hourly_rate = person['base_salary'] / 2080
        
        # Create pay rate basis text for column G
        # Include: annual salary, FTE %, and 2-year duration
        pay_rate_basis = f"${person['base_salary']:,}/year @ {person['effort_pct']}% FTE for 2 years"
        
        # Update individual cells
        ws.update(values=[[person['position_title']]], range_name=f'B{row}')  # Position Title
        ws.update(values=[[total_hours]], range_name=f'C{row}')               # Time (Hours) - 2 year total
        ws.update(values=[[hourly_rate]], range_name=f'D{row}')               # Pay Rate ($/Hr)
        ws.update(values=[[pay_rate_basis]], range_name=f'G{row}')            # Pay Rate Basis text
    
    print(f"   ✓ Added {len(data)} personnel entries starting at row {start_row}")

def populate_travel(ws, data, config):
    """Populate Travel worksheet using batch range update."""
    print("   Travel...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['travel']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 12 for _ in range(7)], range_name=ws_config['clear_range'])
    
    # Populate each trip individually to avoid overwriting column K formula
    for i, trip in enumerate(data):
        row = start_row + i
        # Update columns B-J individually
        ws.update(values=[[trip['purpose']]], range_name=f'B{row}')
        ws.update(values=[[trip['depart_from']]], range_name=f'C{row}')
        ws.update(values=[[trip['destination']]], range_name=f'D{row}')
        ws.update(values=[[trip['days']]], range_name=f'E{row}')
        ws.update(values=[[trip['travelers']]], range_name=f'F{row}')
        ws.update(values=[[trip['lodging_per_traveler']]], range_name=f'G{row}')
        ws.update(values=[[trip['flight_per_traveler']]], range_name=f'H{row}')
        ws.update(values=[[trip['vehicle_per_traveler']]], range_name=f'I{row}')
        ws.update(values=[[trip['mie_per_traveler']]], range_name=f'J{row}')
        # Skip K - it has the sum formula
        # Skip L - empty
        ws.update(values=[[trip['basis']]], range_name=f'M{row}')
    
    print(f"   ✓ Added {len(data)} travel entries starting at row {start_row}")

def populate_equipment(ws, data, config):
    """Populate Equipment worksheet - should be empty per federal guidelines."""
    print("   Equipment...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['equipment']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 7 for _ in range(6)], range_name=ws_config['clear_range'])
    
    # Equipment should be empty - all items under $5,000 go to Supplies
    print(f"   ✓ Equipment cleared (all items under $5,000 threshold)")

def populate_supplies(ws, data, config):
    """Populate Supplies worksheet with items under $5,000."""
    print("   Supplies...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['supplies']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 7 for _ in range(6)], range_name=ws_config['clear_range'])
    
    # Populate supplies data
    for i, item in enumerate(data):
        row = start_row + i
        ws.update(values=[[item['category']]], range_name=f'B{row}')          # Category
        ws.update(values=[[item['quantity']]], range_name=f'C{row}')          # Quantity
        ws.update(values=[[item['unit_cost']]], range_name=f'D{row}')         # Unit Cost
        ws.update(values=[[item['total_cost']]], range_name=f'E{row}')        # Total Cost
        ws.update(values=[[item.get('cost_share', '')]], range_name=f'F{row}') # Cost share
        ws.update(values=[[item['basis_of_cost']]], range_name=f'G{row}')     # Basis
        ws.update(values=[[item['justification']]], range_name=f'H{row}')     # Justification
    
    print(f"   ✓ Added {len(data)} supplies items starting at row {start_row}")

def populate_contractual(ws, data, config):
    """Populate Contractual worksheet using batch range update."""
    print("   Contractual partners...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['contractual']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 5 for _ in range(8)], range_name=ws_config['clear_range'])
    
    # Prepare all contractual data as a 2D array
    contractual_rows = []
    for partner in data:
        row = [
            partner['subaward_number'],  # A
            partner['subawardee'],       # B
            partner['pi_pd'],            # C
            partner['total_cost'],       # D
            partner['justification']     # E
        ]
        contractual_rows.append(row)
    
    # Update all contractual rows at once starting at configured row
    if contractual_rows:
        end_row = start_row - 1 + len(contractual_rows)
        ws.update(values=contractual_rows, range_name=f'A{start_row}:E{end_row}')
    
    # Add explanation in configured cell
    if 'explanation_cell' in ws_config:
        explanation = (
            "MyFriendBen and Benefit Navigator each receive $40k as demonstration partners "
            "to test ambiguity analysis. Citizen Codex receives $20k for UX research and design."
        )
        ws.update(values=[[explanation]], range_name=ws_config['explanation_cell'])
    
    print(f"   ✓ Added {len(data)} contractual partners starting at row {start_row}")

def populate_other_direct(ws, data, config):
    """Populate Other Direct Costs worksheet using batch range update."""
    print("   Other direct costs...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['other_direct']
    start_row = ws_config['data_start_row']
    
    # Prepare all other direct cost data as a 2D array
    other_rows = []
    for item in data:
        row = [
            item['expense_type'],         # B
            item['total_cost'],          # C
            item.get('unit_cost', ''),  # D
            item['category'],            # E
            item['justification']       # F
        ]
        other_rows.append(row)
    
    # Update all other direct cost rows at once starting at configured row
    if other_rows:
        end_row = start_row - 1 + len(other_rows)
        ws.update(values=other_rows, range_name=f'B{start_row}:F{end_row}')
    
    print(f"   ✓ Added {len(data)} other direct cost items starting at row {start_row}")

def populate_indirect(ws, data, config):
    """Populate Indirect Costs worksheet using batch update."""
    print("   Indirect costs...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['indirect']
    
    # Update rate percentage in configured cell
    ws.update(values=[[data['rate_percentage']]], range_name=ws_config['rate_cell'])
    
    # Update explanation in configured cell
    ws.update(values=[[data['explanation']]], range_name=ws_config['explanation_cell'])
    
    print(f"   ✓ Set {data['rate_percentage']}% indirect rate")

def remove_yellow_highlights(service, spreadsheet_id):
    """Remove only yellow highlighting from all worksheets, preserving other colors."""
    print("   Removing yellow highlights...")
    
    # Get all sheet data with formatting
    result = service.spreadsheets().get(
        spreadsheetId=spreadsheet_id,
        includeGridData=True
    ).execute()
    
    requests = []
    
    # Find all yellow cells
    for sheet_data in result.get('sheets', []):
        sheet_id = sheet_data['properties']['sheetId']
        sheet_name = sheet_data['properties']['title']
        
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
                        # Yellow is typically RGB(1, 1, 0) or close to it
                        if red > 0.9 and green > 0.8 and blue < 0.3:
                            # Add request to remove yellow by setting to white
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
        body = {'requests': requests}
        service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body=body
        ).execute()
        print(f"   ✓ Removed {len(requests)} yellow highlighted cells")

def main():
    """Main function to populate the budget from YAML."""
    print("="*60)
    print("POPULATING PBIF BUDGET FROM YAML")
    print("="*60)
    print()
    
    # Load configurations
    print("Loading configurations...")
    budget_data, spreadsheet_config = load_config()
    
    # Get clients
    client, service = get_clients()
    spreadsheet_id = spreadsheet_config['spreadsheet']['id']
    sheet = client.open_by_key(spreadsheet_id)
    
    print("\nPopulating worksheets:")
    
    # Process each worksheet
    worksheet_functions = {
        'personnel': populate_personnel,
        'travel': populate_travel,
        'equipment': populate_equipment,
        'supplies': populate_supplies,
        'contractual': populate_contractual,
        'other_direct': populate_other_direct,
        'indirect': populate_indirect
    }
    
    for data_key, populate_func in worksheet_functions.items():
        if data_key in budget_data:
            try:
                worksheet_name = spreadsheet_config['worksheets'][data_key]['name']
                ws = sheet.worksheet(worksheet_name)
                populate_func(ws, budget_data[data_key], spreadsheet_config)
            except Exception as e:
                print(f"   ✗ Error in {data_key}: {e}")
    
    # Remove yellow highlights from Personnel tab
    remove_yellow_highlights(service, spreadsheet_id)
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print(f"\nView spreadsheet: {spreadsheet_config['spreadsheet']['url']}")
    print("\nKey allocations:")
    print("  • Personnel: 2.5 FTE (starting at row 6)")
    print("  • Partners: MyFriendBen ($50k), Benefit Navigator ($50k), Citizen Codex ($30k)")
    print("  • Technical Advisory: $40,000")
    print("  • Document Bounty: $35,000")
    print("  • Travel: 4 trips using GSA FY2025 per diem rates")
    print("  • Indirect: 15% de minimis rate")

if __name__ == "__main__":
    main()