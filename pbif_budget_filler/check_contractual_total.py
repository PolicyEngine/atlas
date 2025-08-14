#!/usr/bin/env python3
"""Check contractual total cell and formula"""

import pickle
import gspread
from pathlib import Path

def check_contractual_total():
    """Check where the contractual total is"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING CONTRACTUAL TOTAL")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Check Summary formula for contractual
    summary_ws = sheet.worksheet("Summary")
    print("\nSummary tab - Contractual row (19):")
    formula_b19 = summary_ws.acell('B19', value_render_option='FORMULA').value
    value_b19 = summary_ws.acell('B19').value
    print(f"  B19: Value='{value_b19}', Formula='{formula_b19}'")
    
    # Check Contractual tab row 13 (total row)
    contractual_ws = sheet.worksheet("f. Contractual")
    print("\nContractual tab - Row 13 (total row):")
    row13 = contractual_ws.row_values(13)
    print(f"  Row 13: {row13}")
    
    # Check formula in D13
    formula_d13 = contractual_ws.acell('D13', value_render_option='FORMULA').value
    value_d13 = contractual_ws.acell('D13').value
    print(f"  D13: Value='{value_d13}', Formula='{formula_d13}'")
    
    # Check our actual data
    print("\nOur contractual entries (rows 4-6):")
    for row in [4, 5, 6]:
        values = contractual_ws.row_values(row)
        if len(values) >= 5:
            print(f"  Row {row}: D={values[3]}, E={values[4]}")
    
    print("\n" + "="*70)
    print("ISSUE: The formula is looking at column D, but it should sum D4:D12")
    print("Let me check what column has our costs...")
    
    # Check which column has the costs
    for col in ['C', 'D', 'E']:
        print(f"\nColumn {col}:")
        for row in [4, 5, 6]:
            value = contractual_ws.acell(f'{col}{row}').value
            print(f"  {col}{row}: {value}")

if __name__ == "__main__":
    check_contractual_total()