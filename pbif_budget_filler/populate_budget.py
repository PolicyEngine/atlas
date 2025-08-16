#!/usr/bin/env python3
"""Populate PBIF budget spreadsheet from YAML configuration."""

import pickle
import yaml
import gspread
from pathlib import Path

def load_budget_data():
    """Load budget data from YAML file."""
    with open('budget_data.yaml', 'r') as f:
        return yaml.safe_load(f)

def get_client():
    """Initialize gspread client."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    return gspread.authorize(creds)

def populate_personnel(ws, data):
    """Populate Personnel worksheet using batch range update."""
    print("   Personnel...")
    
    # Clear existing data first (rows 4-11)
    clear_rows = [[''] * 7 for _ in range(8)]  # 8 rows, 7 columns (A-G)
    ws.update(values=clear_rows, range_name='A4:G11')
    
    # Prepare all personnel data as a 2D array
    personnel_rows = []
    for person in data:
        # Create row with proper column spacing
        # A: Name (leave empty per instructions)
        # B: Position Title
        # C: Effort %
        # D: Pay Rate (calculated by formula)
        # E: Base Salary
        # F: Personnel Cost (calculated by formula)
        # G: Fringe Rate
        row = [
            '',                           # A (Name - leave empty)
            person['position_title'],     # B (Position Title)
            person['effort_pct'],         # C (Effort %)
            '',                           # D (Pay Rate - formula)
            person['base_salary'],        # E (Base Salary)
            '',                           # F (Personnel Cost - formula)
            person['fringe_rate']         # G (Fringe Rate)
        ]
        personnel_rows.append(row)
    
    # Update all personnel rows at once starting at A4
    if personnel_rows:
        end_row = 3 + len(personnel_rows)
        ws.update(values=personnel_rows, range_name=f'A4:G{end_row}')
    
    print(f"   ✓ Added {len(data)} personnel entries")

def populate_travel(ws, data):
    """Populate Travel worksheet using batch range update."""
    print("   Travel...")
    
    # Clear existing data first
    clear_rows = [[''] * 12 for _ in range(7)]  # 7 rows, 12 columns (B-M)
    ws.update(values=clear_rows, range_name='B4:M10')
    
    # Prepare all travel data as a 2D array
    travel_rows = []
    for trip in data:
        # Columns B through M (skip K which is formula)
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
    
    # Update all travel rows at once starting at B4
    if travel_rows:
        end_row = 3 + len(travel_rows)
        ws.update(values=travel_rows, range_name=f'B4:M{end_row}')
    
    print(f"   ✓ Added {len(data)} travel entries")

def populate_equipment(ws, data):
    """Populate Equipment worksheet using batch range update."""
    print("   Equipment...")
    
    # Clear existing data first
    clear_rows = [[''] * 7 for _ in range(6)]  # 6 rows, 7 columns (B-H)
    ws.update(values=clear_rows, range_name='B5:H10')
    
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
    
    # Update all equipment rows at once starting at B5
    if equipment_rows:
        end_row = 4 + len(equipment_rows)
        ws.update(values=equipment_rows, range_name=f'B5:H{end_row}')
    
    print(f"   ✓ Added {len(data)} equipment items")

def populate_contractual(ws, data):
    """Populate Contractual worksheet using batch range update."""
    print("   Contractual partners...")
    
    # Clear existing rows
    clear_rows = [[''] * 5 for _ in range(8)]  # 8 rows (5-12), 5 columns (A-E)
    ws.update(values=clear_rows, range_name='A5:E12')
    
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
    
    # Update all contractual rows at once starting at A5
    if contractual_rows:
        end_row = 4 + len(contractual_rows)
        ws.update(values=contractual_rows, range_name=f'A5:E{end_row}')
    
    # Add explanation in A15
    explanation = (
        "MyFriendBen and Benefit Navigator each receive $50k as demonstration partners "
        "to test ambiguity analysis. Citizen Codex receives $30k for UX research and design."
    )
    ws.update(values=[[explanation]], range_name='A15')
    
    print(f"   ✓ Added {len(data)} contractual partners")

def populate_other_direct(ws, data):
    """Populate Other Direct Costs worksheet using batch range update."""
    print("   Other direct costs...")
    
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
    
    # Update all other direct cost rows at once starting at B7
    if other_rows:
        end_row = 6 + len(other_rows)
        ws.update(values=other_rows, range_name=f'B7:F{end_row}')
    
    print(f"   ✓ Added {len(data)} other direct cost items")

def populate_indirect(ws, data):
    """Populate Indirect Costs worksheet using batch update."""
    print("   Indirect costs...")
    
    # Update rate percentage in B5
    ws.update(values=[[data['rate_percentage']]], range_name='B5')
    
    # Update explanation in A7
    ws.update(values=[[data['explanation']]], range_name='A7')
    
    print(f"   ✓ Set {data['rate_percentage']}% indirect rate")

def main():
    """Main function to populate the budget from YAML."""
    print("="*60)
    print("POPULATING PBIF BUDGET FROM YAML")
    print("="*60)
    print()
    
    # Load data
    print("Loading budget data from YAML...")
    budget_data = load_budget_data()
    
    # Get client
    client = get_client()
    spreadsheet_id = budget_data['metadata']['spreadsheet_id']
    sheet = client.open_by_key(spreadsheet_id)
    
    # Process each worksheet
    worksheet_mapping = budget_data['metadata']['worksheet_mapping']
    
    print("\nPopulating worksheets:")
    
    for data_key, worksheet_name in worksheet_mapping.items():
        if data_key in budget_data:
            try:
                ws = sheet.worksheet(worksheet_name)
                
                if data_key == 'personnel':
                    populate_personnel(ws, budget_data[data_key])
                elif data_key == 'travel':
                    populate_travel(ws, budget_data[data_key])
                elif data_key == 'equipment':
                    populate_equipment(ws, budget_data[data_key])
                elif data_key == 'contractual':
                    populate_contractual(ws, budget_data[data_key])
                elif data_key == 'other_direct':
                    populate_other_direct(ws, budget_data[data_key])
                elif data_key == 'indirect':
                    populate_indirect(ws, budget_data[data_key])
                    
            except Exception as e:
                print(f"   ✗ Error in {worksheet_name}: {e}")
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")
    print("\nKey allocations:")
    print("  • Personnel: 2.5 FTE")
    print("  • Partners: MyFriendBen ($50k), Benefit Navigator ($50k), Citizen Codex ($30k)")
    print("  • Technical Advisory: $40,000")
    print("  • Document Bounty: $35,000")
    print("  • Travel: 4 trips using GSA FY2025 per diem rates")
    print("  • Indirect: 15% de minimis rate")

if __name__ == "__main__":
    main()