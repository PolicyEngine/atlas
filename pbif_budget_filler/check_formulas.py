#!/usr/bin/env python3
"""Check what formulas are in the Summary tab."""

import pickle
import gspread
from pathlib import Path

def get_client():
    """Initialize gspread client."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    return gspread.authorize(creds)

def main():
    client = get_client()
    sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
    
    print("="*60)
    print("CHECKING SUMMARY TAB FORMULAS")
    print("="*60)
    
    # Get Summary worksheet
    ws = sheet.worksheet('Summary')
    
    # Get all values including formulas
    # Using batch_get to see formulas
    ranges = [f'C{i}' for i in range(14, 24)]
    results = ws.batch_get(ranges, value_render_option='FORMULA')
    
    labels = [
        'Personnel', 'Fringe', 'Travel', 'Equipment', 'Supplies',
        'Contractual', 'Other Direct', 'Total Direct', 'Indirect', 'TOTAL'
    ]
    
    print("\nSummary tab formulas:")
    for i, (label, formula_data) in enumerate(zip(labels, results)):
        row = 14 + i
        if formula_data and formula_data[0]:
            formula = formula_data[0][0] if formula_data[0] else 'empty'
            print(f"  C{row} ({label}): {formula}")
    
    # Also check the Personnel tab totals row
    print("\nPersonnel tab totals (row 13):")
    ws_personnel = sheet.worksheet('a. Personnel')
    total_formula = ws_personnel.acell('E13', value_render_option='FORMULA').value
    print(f"  E13 (Total): {total_formula}")
    
    # Check Travel tab totals
    print("\nTravel tab totals (row 10):")
    ws_travel = sheet.worksheet('c. Travel')
    total_formula = ws_travel.acell('K10', value_render_option='FORMULA').value
    print(f"  K10 (Total): {total_formula}")
    
    # Check Contractual totals
    print("\nContractual tab totals (row 13):")
    ws_contract = sheet.worksheet('f. Contractual')
    total_formula = ws_contract.acell('D13', value_render_option='FORMULA').value
    print(f"  D13 (Total): {total_formula}")
    
    # Check Other Direct totals
    print("\nOther Direct tab totals (row 9):")
    ws_other = sheet.worksheet('h. Other')
    total_formula = ws_other.acell('C9', value_render_option='FORMULA').value
    print(f"  C9 (Total): {total_formula}")

if __name__ == "__main__":
    main()