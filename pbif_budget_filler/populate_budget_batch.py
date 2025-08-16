#!/usr/bin/env python3
"""Populate PBIF budget spreadsheet using efficient batch updates."""

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

def populate_all_tabs(client, service, budget_data, spreadsheet_config):
    """Populate all tabs using batch updates."""
    spreadsheet_id = spreadsheet_config['spreadsheet']['id']
    sheet = client.open_by_key(spreadsheet_id)
    
    # Prepare all updates as batch
    all_updates = []
    
    # PERSONNEL TAB
    if 'personnel' in budget_data:
        ws_name = spreadsheet_config['worksheets']['personnel']['name']
        start_row = 6
        
        # Clear range (skip column E which has formulas)
        # Clear A6:D13
        all_updates.append({
            'range': f'{ws_name}!A6:D13',
            'values': [[''] * 4 for _ in range(8)]
        })
        # Clear F6:G13
        all_updates.append({
            'range': f'{ws_name}!F6:G13',
            'values': [[''] * 2 for _ in range(8)]
        })
        
        # Prepare personnel data (skip column E which has formula)
        personnel_rows_ad = []  # Columns A-D
        personnel_rows_fg = []  # Columns F-G
        
        for person in budget_data['personnel']:
            hours = int(person['effort_pct'] * 2080 * 2 / 100)  # 2-year total
            hourly_rate = person['base_salary'] / 2080
            pay_basis = f"${person['base_salary']:,}/year @ {person['effort_pct']}% FTE for 2 years"
            
            personnel_rows_ad.append([
                '',                          # A (empty - no names)
                person['position_title'],    # B
                hours,                        # C
                hourly_rate                   # D
            ])
            
            personnel_rows_fg.append([
                '',                          # F
                pay_basis                    # G
            ])
        
        # Update A-D columns
        all_updates.append({
            'range': f'{ws_name}!A6:D{5 + len(personnel_rows_ad)}',
            'values': personnel_rows_ad
        })
        
        # Update F-G columns
        all_updates.append({
            'range': f'{ws_name}!F6:G{5 + len(personnel_rows_fg)}',
            'values': personnel_rows_fg
        })
    
    # FRINGE TAB
    if 'personnel' in budget_data:
        ws_name = 'b. Fringe'
        
        # Clear existing data (rows 4-9)
        all_updates.append({
            'range': f'{ws_name}!A4:C9',
            'values': [[''] * 3 for _ in range(6)]
        })
        
        # Prepare fringe data based on personnel
        fringe_rows = []
        for person in budget_data['personnel']:
            # Calculate 2-year personnel cost
            hours = int(person['effort_pct'] * 2080 * 2 / 100)
            hourly_rate = person['base_salary'] / 2080
            personnel_cost = hours * hourly_rate
            
            fringe_rows.append([
                person['position_title'],    # A - Labor Type
                personnel_cost,              # B - Personnel Costs
                0.25                         # C - Rate (25%)
            ])
        
        all_updates.append({
            'range': f'{ws_name}!A4:C{3 + len(fringe_rows)}',
            'values': fringe_rows
        })
    
    # TRAVEL TAB (avoiding column K)
    if 'travel' in budget_data:
        ws_name = spreadsheet_config['worksheets']['travel']['name']
        
        # Clear B-J
        all_updates.append({
            'range': f'{ws_name}!B4:J10',
            'values': [[''] * 9 for _ in range(7)]
        })
        
        # Clear L-M
        all_updates.append({
            'range': f'{ws_name}!L4:M10',
            'values': [[''] * 2 for _ in range(7)]
        })
        
        # Prepare travel data for B-J
        travel_data_bj = []
        travel_data_m = []
        for trip in budget_data['travel']:
            travel_data_bj.append([
                trip['purpose'],
                trip['depart_from'],
                trip['destination'],
                trip['days'],
                trip['travelers'],
                trip['lodging_per_traveler'],
                trip['flight_per_traveler'],
                trip['vehicle_per_traveler'],
                trip['mie_per_traveler']
            ])
            travel_data_m.append([trip['basis']])
        
        all_updates.append({
            'range': f'{ws_name}!B4:J{3 + len(travel_data_bj)}',
            'values': travel_data_bj
        })
        
        all_updates.append({
            'range': f'{ws_name}!M4:M{3 + len(travel_data_m)}',
            'values': travel_data_m
        })
    
    # EQUIPMENT TAB (should be empty)
    ws_name = spreadsheet_config['worksheets']['equipment']['name']
    all_updates.append({
        'range': f'{ws_name}!A5:H10',
        'values': [[''] * 8 for _ in range(6)]
    })
    
    # SUPPLIES TAB
    if 'supplies' in budget_data:
        ws_name = spreadsheet_config['worksheets']['supplies']['name']
        
        # Clear
        all_updates.append({
            'range': f'{ws_name}!A5:H10',
            'values': [[''] * 8 for _ in range(6)]
        })
        
        # Prepare supplies data
        supplies_rows = []
        for item in budget_data['supplies']:
            row = [
                '',                           # A
                item['category'],            # B
                item['quantity'],            # C
                item['unit_cost'],           # D
                item['total_cost'],          # E
                item.get('cost_share', ''),  # F
                item['basis_of_cost'],       # G
                item['justification']        # H
            ]
            supplies_rows.append(row)
        
        all_updates.append({
            'range': f'{ws_name}!A5:H{4 + len(supplies_rows)}',
            'values': supplies_rows
        })
    
    # CONTRACTUAL TAB
    if 'contractual' in budget_data:
        ws_name = spreadsheet_config['worksheets']['contractual']['name']
        
        # Clear
        all_updates.append({
            'range': f'{ws_name}!A5:E12',
            'values': [[''] * 5 for _ in range(8)]
        })
        
        # Prepare contractual data
        contractual_rows = []
        for partner in budget_data['contractual']:
            row = [
                partner['subaward_number'],  # A
                partner['subawardee'],       # B
                partner['justification'],    # C (Purpose of Subaward)
                partner['total_cost'],       # D
                ''                           # E (empty)
            ]
            contractual_rows.append(row)
        
        all_updates.append({
            'range': f'{ws_name}!A5:E{4 + len(contractual_rows)}',
            'values': contractual_rows
        })
        
        # Clear A14 since we're putting details in column C
        all_updates.append({
            'range': f'{ws_name}!A14',
            'values': [['']]
        })
    
    # OTHER DIRECT TAB
    if 'other_direct' in budget_data:
        ws_name = spreadsheet_config['worksheets']['other_direct']['name']
        start_row = spreadsheet_config['worksheets']['other_direct']['data_start_row']
        
        # Clear existing data
        all_updates.append({
            'range': f'{ws_name}!B4:F10',
            'values': [[''] * 5 for _ in range(7)]
        })
        
        # Prepare other direct data
        other_rows = []
        for item in budget_data['other_direct']:
            row = [
                item['expense_type'],
                item['total_cost'],
                item.get('unit_cost', ''),
                item['category'],
                item['justification']
            ]
            other_rows.append(row)
        
        all_updates.append({
            'range': f'{ws_name}!B{start_row}:F{start_row - 1 + len(other_rows)}',
            'values': other_rows
        })
    
    # INDIRECT TAB
    if 'indirect' in budget_data:
        ws_name = spreadsheet_config['worksheets']['indirect']['name']
        
        all_updates.append({
            'range': f'{ws_name}!B4',
            'values': [[budget_data['indirect']['rate_percentage'] / 100]]  # Convert to decimal
        })
        
        all_updates.append({
            'range': f'{ws_name}!A8',
            'values': [[f"Additional Explanation (as needed): {budget_data['indirect']['explanation']}"]]
        })
    
    # Execute all updates in a single batch
    print(f"Executing {len(all_updates)} batch updates...")
    
    body = {
        'valueInputOption': 'USER_ENTERED',
        'data': all_updates
    }
    
    service.spreadsheets().values().batchUpdate(
        spreadsheetId=spreadsheet_id,
        body=body
    ).execute()
    
    print("✓ All worksheets updated successfully")
    
    # Remove yellow highlights
    remove_yellow_highlights(service, spreadsheet_id)

def remove_yellow_highlights(service, spreadsheet_id):
    """Remove only yellow highlighting from all worksheets."""
    print("Removing yellow highlights...")
    
    # Get all sheet data with formatting
    result = service.spreadsheets().get(
        spreadsheetId=spreadsheet_id,
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
                        
                        # Check if yellow
                        if red > 0.9 and green > 0.8 and blue < 0.3:
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
    
    if requests:
        body = {'requests': requests}
        service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body=body
        ).execute()
        print(f"✓ Removed {len(requests)} yellow highlighted cells")

def main():
    """Main function."""
    print("="*60)
    print("POPULATING PBIF BUDGET FROM YAML (BATCH MODE)")
    print("="*60)
    print()
    
    # Load configurations
    print("Loading configurations...")
    budget_data, spreadsheet_config = load_config()
    
    # Get clients
    client, service = get_clients()
    
    # Populate all tabs in batch
    populate_all_tabs(client, service, budget_data, spreadsheet_config)
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print(f"\nView spreadsheet: {spreadsheet_config['spreadsheet']['url']}")
    print("\nTotal API calls: ~3 (batch updates + yellow removal)")

if __name__ == "__main__":
    main()