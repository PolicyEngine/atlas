#!/usr/bin/env python3
"""Efficient PBIF budget spreadsheet population from YAML using batch updates."""

import pickle
import yaml
import gspread
from pathlib import Path
from googleapiclient.discovery import build

def load_budget_data():
    """Load budget data from YAML file."""
    with open('budget_data.yaml', 'r') as f:
        return yaml.safe_load(f)

def get_clients():
    """Initialize both gspread and Google Sheets API clients."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    client = gspread.authorize(creds)
    service = build('sheets', 'v4', credentials=creds)
    
    return client, service

def batch_update_spreadsheet(service, spreadsheet_id, requests):
    """Execute batch update to minimize API calls."""
    if not requests:
        return
    
    body = {'requests': requests}
    service.spreadsheets().batchUpdate(
        spreadsheetId=spreadsheet_id,
        body=body
    ).execute()

def get_sheet_id(service, spreadsheet_id, sheet_name):
    """Get the sheet ID for a given sheet name."""
    spreadsheet = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    for sheet in spreadsheet['sheets']:
        if sheet['properties']['title'] == sheet_name:
            return sheet['properties']['sheetId']
    return None

def create_update_request(sheet_id, row, col, value):
    """Create a single cell update request."""
    return {
        'updateCells': {
            'range': {
                'sheetId': sheet_id,
                'startRowIndex': row - 1,
                'endRowIndex': row,
                'startColumnIndex': col,
                'endColumnIndex': col + 1
            },
            'rows': [{
                'values': [{
                    'userEnteredValue': {
                        'numberValue': value if isinstance(value, (int, float)) else {'stringValue': str(value)}
                    }
                }]
            }],
            'fields': 'userEnteredValue'
        }
    }

def main():
    """Main function to populate the budget from YAML using batch updates."""
    print("="*60)
    print("POPULATING PBIF BUDGET FROM YAML (Batch Mode)")
    print("="*60)
    print()
    
    # Load data
    print("Loading budget data from YAML...")
    budget_data = load_budget_data()
    
    # Get clients
    client, service = get_clients()
    spreadsheet_id = budget_data['metadata']['spreadsheet_id']
    
    # Prepare batch requests for all worksheets
    all_requests = []
    worksheet_mapping = budget_data['metadata']['worksheet_mapping']
    
    # Get sheet IDs
    print("Getting worksheet IDs...")
    sheet_ids = {}
    for worksheet_name in worksheet_mapping.values():
        sheet_id = get_sheet_id(service, spreadsheet_id, worksheet_name)
        if sheet_id is not None:
            sheet_ids[worksheet_name] = sheet_id
    
    # Personnel worksheet
    if 'personnel' in budget_data:
        sheet_name = worksheet_mapping['personnel']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            for i, person in enumerate(budget_data['personnel']):
                row = 4 + i
                all_requests.append(create_update_request(sheet_id, row, 0, person['name']))      # A
                all_requests.append(create_update_request(sheet_id, row, 1, person['title']))     # B
                all_requests.append(create_update_request(sheet_id, row, 2, person['effort_pct'])) # C
                all_requests.append(create_update_request(sheet_id, row, 4, person['base_salary'])) # E
                all_requests.append(create_update_request(sheet_id, row, 6, person['fringe_rate'])) # G
    
    # Travel worksheet
    if 'travel' in budget_data:
        sheet_name = worksheet_mapping['travel']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            for i, trip in enumerate(budget_data['travel']):
                row = 4 + i
                all_requests.append(create_update_request(sheet_id, row, 1, trip['purpose']))       # B
                all_requests.append(create_update_request(sheet_id, row, 2, trip['depart_from']))   # C
                all_requests.append(create_update_request(sheet_id, row, 3, trip['destination']))    # D
                all_requests.append(create_update_request(sheet_id, row, 4, trip['days']))          # E
                all_requests.append(create_update_request(sheet_id, row, 5, trip['travelers']))     # F
                all_requests.append(create_update_request(sheet_id, row, 6, trip['lodging_per_traveler'])) # G
                all_requests.append(create_update_request(sheet_id, row, 7, trip['flight_per_traveler']))  # H
                all_requests.append(create_update_request(sheet_id, row, 8, trip['vehicle_per_traveler'])) # I
                all_requests.append(create_update_request(sheet_id, row, 9, trip['mie_per_traveler']))     # J
                all_requests.append(create_update_request(sheet_id, row, 12, trip['basis']))        # M
    
    # Equipment worksheet
    if 'equipment' in budget_data:
        sheet_name = worksheet_mapping['equipment']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            for i, item in enumerate(budget_data['equipment']):
                row = 5 + i
                all_requests.append(create_update_request(sheet_id, row, 1, item['item']))          # B
                all_requests.append(create_update_request(sheet_id, row, 2, item['quantity']))      # C
                all_requests.append(create_update_request(sheet_id, row, 3, item['unit_cost']))     # D
                all_requests.append(create_update_request(sheet_id, row, 4, item['total_cost']))    # E
                all_requests.append(create_update_request(sheet_id, row, 5, item['cost_share']))    # F
                all_requests.append(create_update_request(sheet_id, row, 6, item['basis_of_cost'])) # G
                all_requests.append(create_update_request(sheet_id, row, 7, item['justification'])) # H
    
    # Contractual worksheet
    if 'contractual' in budget_data:
        sheet_name = worksheet_mapping['contractual']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            for i, partner in enumerate(budget_data['contractual']):
                row = 5 + i
                all_requests.append(create_update_request(sheet_id, row, 0, partner['subaward_number'])) # A
                all_requests.append(create_update_request(sheet_id, row, 1, partner['subawardee']))      # B
                all_requests.append(create_update_request(sheet_id, row, 2, partner['pi_pd']))           # C
                all_requests.append(create_update_request(sheet_id, row, 3, partner['total_cost']))      # D
                all_requests.append(create_update_request(sheet_id, row, 4, partner['justification']))   # E
    
    # Other Direct Costs worksheet
    if 'other_direct' in budget_data:
        sheet_name = worksheet_mapping['other_direct']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            for i, item in enumerate(budget_data['other_direct']):
                row = 7 + i
                all_requests.append(create_update_request(sheet_id, row, 1, item['expense_type']))   # B
                all_requests.append(create_update_request(sheet_id, row, 2, item['total_cost']))     # C
                all_requests.append(create_update_request(sheet_id, row, 3, item.get('unit_cost', ''))) # D
                all_requests.append(create_update_request(sheet_id, row, 4, item['category']))       # E
                all_requests.append(create_update_request(sheet_id, row, 5, item['justification']))  # F
    
    # Indirect Costs worksheet
    if 'indirect' in budget_data:
        sheet_name = worksheet_mapping['indirect']
        sheet_id = sheet_ids.get(sheet_name)
        if sheet_id:
            print(f"Preparing {sheet_name}...")
            indirect = budget_data['indirect']
            all_requests.append(create_update_request(sheet_id, 5, 1, indirect['rate_percentage'])) # B5
            all_requests.append(create_update_request(sheet_id, 7, 0, indirect['explanation']))     # A7
    
    # Execute batch update
    print(f"\nSending {len(all_requests)} updates in a single batch...")
    try:
        batch_update_spreadsheet(service, spreadsheet_id, all_requests)
        print("✓ All updates completed successfully!")
    except Exception as e:
        print(f"✗ Error during batch update: {e}")
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")

if __name__ == "__main__":
    main()