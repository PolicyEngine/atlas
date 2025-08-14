#!/usr/bin/env python3
"""Fix number formatting so formulas calculate"""

import pickle
import gspread
from pathlib import Path

def fix_numbers():
    """Ensure all numbers are properly formatted"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING NUMBER FORMATTING")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Re-enter Other Direct Costs as numbers (not strings)
    print("\n1. OTHER DIRECT COSTS - Re-entering as numbers")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    costs = [70000, 60000, 20000, 6000, 6000]
    
    for i, cost in enumerate(costs):
        row = 4 + i
        print(f"  Row {row}: Setting cost to {cost} (as number)")
        # Enter as number, not string
        other_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
    
    print("\n✓ Other Direct Costs updated with proper number formatting")
    
    # Also update Personnel hours and rates as numbers
    print("\n2. PERSONNEL - Re-entering hours and rates as numbers")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    data = [
        (3328, 43.27),  # Lead Engineer
        (2496, 38.46),  # ML/AI Engineer
        (1664, 33.65),  # Policy Analyst
        (1248, 28.85),  # Community Manager
    ]
    
    for i, (hours, rate) in enumerate(data):
        row = 6 + i
        print(f"  Row {row}: Hours={hours}, Rate={rate}")
        personnel_ws.update(range_name=f"C{row}", values=[[hours]], value_input_option='RAW')
        personnel_ws.update(range_name=f"D{row}", values=[[rate]], value_input_option='RAW')
        personnel_ws.update(range_name=f"F{row}", values=[[0]], value_input_option='RAW')
    
    print("\n✓ Personnel updated with proper number formatting")
    
    # Update indirect rate as number
    print("\n3. INDIRECT - Setting rate as number")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    indirect_ws.update(range_name="B4", values=[[0.10]], value_input_option='RAW')
    print("  Indirect rate set to 0.10 (10%)")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nAll numbers have been properly formatted.")
    print("Formulas should now calculate correctly.")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_numbers()