#!/usr/bin/env python3
"""Populate PBIF budget spreadsheet from YAML configuration."""

import pickle
import yaml
import gspread
from pathlib import Path

def load_config():
    """Load both budget data and spreadsheet configuration."""
    with open('budget_data.yaml', 'r') as f:
        budget_data = yaml.safe_load(f)
    
    with open('spreadsheet_config.yaml', 'r') as f:
        spreadsheet_config = yaml.safe_load(f)
    
    return budget_data, spreadsheet_config

def get_client():
    """Initialize gspread client."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    return gspread.authorize(creds)

def populate_personnel(ws, data, config):
    """Populate Personnel worksheet using batch range update."""
    print("   Personnel...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['personnel']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 7 for _ in range(8)], range_name=ws_config['clear_range'])
    
    # Prepare all personnel data as a 2D array
    personnel_rows = []
    for person in data:
        row = [
            '',                           # A (Name - leave empty per instructions)
            person['position_title'],     # B (Position Title)
            person['effort_pct'],         # C (Effort %)
            '',                           # D (Pay Rate - formula)
            person['base_salary'],        # E (Base Salary)
            '',                           # F (Personnel Cost - formula)
            person['fringe_rate']         # G (Fringe Rate)
        ]
        personnel_rows.append(row)
    
    # Update all personnel rows at once starting at configured row
    if personnel_rows:
        end_row = start_row - 1 + len(personnel_rows)
        ws.update(values=personnel_rows, range_name=f'A{start_row}:G{end_row}')
    
    print(f"   ✓ Added {len(data)} personnel entries starting at row {start_row}")

def populate_travel(ws, data, config):
    """Populate Travel worksheet using batch range update."""
    print("   Travel...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['travel']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 12 for _ in range(7)], range_name=ws_config['clear_range'])
    
    # Prepare all travel data as a 2D array
    travel_rows = []
    for trip in data:
        row = [
            trip['purpose'],              # B
            trip['depart_from'],          # C
            trip['destination'],          # D
            trip['days'],                 # E
            trip['travelers'],            # F
            trip['lodging_per_traveler'], # G
            trip['flight_per_traveler'],  # H
            trip['vehicle_per_traveler'], # I
            trip['mie_per_traveler'],     # J
            '',                           # K (formula)
            '',                           # L (empty)
            trip['basis']                 # M
        ]
        travel_rows.append(row)
    
    # Update all travel rows at once starting at configured row
    if travel_rows:
        end_row = start_row - 1 + len(travel_rows)
        ws.update(values=travel_rows, range_name=f'B{start_row}:M{end_row}')
    
    print(f"   ✓ Added {len(data)} travel entries starting at row {start_row}")

def populate_equipment(ws, data, config):
    """Populate Equipment worksheet using batch range update."""
    print("   Equipment...")
    
    # Get configuration for this worksheet
    ws_config = config['worksheets']['equipment']
    start_row = ws_config['data_start_row']
    
    # Clear existing data
    ws.update(values=[[''] * 7 for _ in range(6)], range_name=ws_config['clear_range'])
    
    # Prepare all equipment data as a 2D array
    equipment_rows = []
    for item in data:
        row = [
            item['item'],          # B
            item['quantity'],      # C
            item['unit_cost'],     # D
            item['total_cost'],    # E
            item['cost_share'],    # F
            item['basis_of_cost'], # G
            item['justification']  # H
        ]
        equipment_rows.append(row)
    
    # Update all equipment rows at once starting at configured row
    if equipment_rows:
        end_row = start_row - 1 + len(equipment_rows)
        ws.update(values=equipment_rows, range_name=f'B{start_row}:H{end_row}')
    
    print(f"   ✓ Added {len(data)} equipment items starting at row {start_row}")

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
            "MyFriendBen and Benefit Navigator each receive $50k as demonstration partners "
            "to test ambiguity analysis. Citizen Codex receives $30k for UX research and design."
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

def main():
    """Main function to populate the budget from YAML."""
    print("="*60)
    print("POPULATING PBIF BUDGET FROM YAML")
    print("="*60)
    print()
    
    # Load configurations
    print("Loading configurations...")
    budget_data, spreadsheet_config = load_config()
    
    # Get client
    client = get_client()
    spreadsheet_id = spreadsheet_config['spreadsheet']['id']
    sheet = client.open_by_key(spreadsheet_id)
    
    print("\nPopulating worksheets:")
    
    # Process each worksheet
    worksheet_functions = {
        'personnel': populate_personnel,
        'travel': populate_travel,
        'equipment': populate_equipment,
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