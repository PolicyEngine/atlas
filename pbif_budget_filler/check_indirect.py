#!/usr/bin/env python3
"""Check indirect calculation"""

import pickle
import gspread
from pathlib import Path

def check_indirect():
    """Check indirect calculation in Summary"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING INDIRECT CALCULATION")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Check Summary formulas
    summary_ws = sheet.worksheet("Summary")
    
    print("\nChecking Summary tab formulas...")
    
    # Get formulas for key cells
    cells_to_check = [
        ("B21", "Total Direct Y1"),
        ("C21", "Total Direct Y2"),
        ("B22", "Indirect Y1"),
        ("C22", "Indirect Y2"),
        ("B23", "Total Y1"),
        ("C23", "Total Y2"),
    ]
    
    for cell, label in cells_to_check:
        try:
            formula = summary_ws.acell(cell, value_render_option='FORMULA').value
            value = summary_ws.acell(cell).value
            print(f"{cell} ({label}): Value={value}, Formula={formula}")
        except:
            print(f"{cell} ({label}): Error reading")
    
    print("\n" + "-"*40)
    print("ANALYSIS:")
    print("It looks like Column C (Year 2) indirect is not calculating correctly.")
    print("The indirect should be 10% of Total Direct costs.")
    print("\nExpected values:")
    print("  Total Direct: $603,556")
    print("  Indirect (10%): $60,356")
    print("  Grand Total: $663,912")

if __name__ == "__main__":
    check_indirect()