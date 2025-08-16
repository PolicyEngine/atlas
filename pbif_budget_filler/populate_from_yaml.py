#!/usr/bin/env python3
"""Populate PBIF budget spreadsheet from YAML configuration."""

import pickle
import yaml
import gspread
import time
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

def populate_personnel(ws, data):
    """Populate Personnel worksheet from YAML data."""
    print("   Populating personnel...")
    
    for i, person in enumerate(data):
        row = 4 + i
        ws.update(values=[[person['name']]], range_name=f'A{row}')
        time.sleep(0.1)  # Rate limiting
        ws.update(values=[[person['title']]], range_name=f'B{row}')
        time.sleep(0.1)
        ws.update(values=[[person['effort_pct']]], range_name=f'C{row}')
        time.sleep(0.1)
        ws.update(values=[[person['base_salary']]], range_name=f'E{row}')
        time.sleep(0.1)
        ws.update(values=[[person['fringe_rate']]], range_name=f'G{row}')
        time.sleep(0.1)
    
    print(f"   ✓ Added {len(data)} personnel entries")

def populate_travel(ws, data):
    """Populate Travel worksheet from YAML data."""
    print("   Populating travel...")
    
    # Clear existing data first (rows 4-10)
    for row in range(4, 11):
        ws.update(values=[[""]*12], range_name=f'B{row}:M{row}')
    
    for i, trip in enumerate(data):
        row = 4 + i
        ws.update(values=[[trip['purpose']]], range_name=f'B{row}')
        ws.update(values=[[trip['depart_from']]], range_name=f'C{row}')
        ws.update(values=[[trip['destination']]], range_name=f'D{row}')
        ws.update(values=[[trip['days']]], range_name=f'E{row}')
        ws.update(values=[[trip['travelers']]], range_name=f'F{row}')
        ws.update(values=[[trip['lodging_per_traveler']]], range_name=f'G{row}')
        ws.update(values=[[trip['flight_per_traveler']]], range_name=f'H{row}')
        ws.update(values=[[trip['vehicle_per_traveler']]], range_name=f'I{row}')
        ws.update(values=[[trip['mie_per_traveler']]], range_name=f'J{row}')
        # K is calculated by formula
        ws.update(values=[[trip['basis']]], range_name=f'M{row}')
    
    print(f"   ✓ Added {len(data)} travel entries")

def populate_equipment(ws, data):
    """Populate Equipment worksheet from YAML data."""
    print("   Populating equipment...")
    
    # Clear existing data first (rows 5-10)
    for row in range(5, 11):
        ws.update(values=[[""]*7], range_name=f'B{row}:H{row}')
    
    for i, item in enumerate(data):
        row = 5 + i
        ws.update(values=[[item['item']]], range_name=f'B{row}')
        ws.update(values=[[item['quantity']]], range_name=f'C{row}')
        ws.update(values=[[item['unit_cost']]], range_name=f'D{row}')
        ws.update(values=[[item['total_cost']]], range_name=f'E{row}')
        ws.update(values=[[item['cost_share']]], range_name=f'F{row}')
        ws.update(values=[[item['basis_of_cost']]], range_name=f'G{row}')
        ws.update(values=[[item['justification']]], range_name=f'H{row}')
    
    print(f"   ✓ Added {len(data)} equipment items")

def populate_contractual(ws, data):
    """Populate Contractual worksheet from YAML data."""
    print("   Populating contractual partners...")
    
    # Clear existing rows
    for row in range(5, 13):
        ws.update(values=[[""]*5], range_name=f'A{row}:E{row}')
    
    for i, partner in enumerate(data):
        row = 5 + i
        ws.update(values=[[
            partner['subaward_number'],
            partner['subawardee'],
            partner['pi_pd'],
            partner['total_cost'],
            partner['justification']
        ]], range_name=f'A{row}:E{row}')
    
    # Add explanation
    explanation = (
        "MyFriendBen and Benefit Navigator each receive $50k as demonstration partners "
        "to test ambiguity analysis. Citizen Codex receives $30k for UX research and design."
    )
    ws.update(values=[[explanation]], range_name='A15')
    
    print(f"   ✓ Added {len(data)} contractual partners")

def populate_other_direct(ws, data):
    """Populate Other Direct Costs worksheet from YAML data."""
    print("   Populating other direct costs...")
    
    for i, item in enumerate(data):
        row = 7 + i
        ws.update(values=[[
            item['expense_type'],
            item['total_cost'],
            item.get('unit_cost', ''),
            item['category'],
            item['justification']
        ]], range_name=f'B{row}:F{row}')
    
    print(f"   ✓ Added {len(data)} other direct cost items")

def populate_indirect(ws, data):
    """Populate Indirect Costs worksheet from YAML data."""
    print("   Populating indirect costs...")
    
    ws.update(values=[[data['rate_percentage']]], range_name='B5')
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
    
    # Get clients
    client, service = get_clients()
    spreadsheet_id = budget_data['metadata']['spreadsheet_id']
    sheet = client.open_by_key(spreadsheet_id)
    
    # Process each worksheet
    worksheet_mapping = budget_data['metadata']['worksheet_mapping']
    
    for data_key, worksheet_name in worksheet_mapping.items():
        if data_key in budget_data:
            print(f"\n{worksheet_name}:")
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
                print(f"   ✗ Error: {e}")
    
    print("\n" + "="*60)
    print("COMPLETE!")
    print("="*60)
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")

if __name__ == "__main__":
    main()