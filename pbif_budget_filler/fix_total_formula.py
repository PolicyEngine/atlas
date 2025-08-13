#!/usr/bin/env python3
"""Fix the total formula in contractual row 13"""

import pickle
import gspread
from pathlib import Path

def fix_total_formula():
    """Restore the total formula in contractual"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING CONTRACTUAL TOTAL FORMULA")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Check what's currently in row 13
    print("\nChecking current row 13...")
    row13 = contractual_ws.row_values(13)
    print(f"  Current row 13: {row13[:5] if row13 else 'Empty'}")
    
    # Clear row 13 and add the total
    print("\nRestoring total formula in row 13...")
    
    # Clear row 13 first
    contractual_ws.update('A13:E13', [["", "", "", "", ""]])
    
    # Add the total label and formula
    contractual_ws.update('B13', [["Total Contractual Costs:"]])
    contractual_ws.update('D13', [["=SUM(D5:D12)"]], value_input_option='USER_ENTERED')
    
    print("✓ Total formula restored: =SUM(D5:D12)")
    
    # Verify the calculation
    print("\nVerifying amounts in D5:D12...")
    for row in range(5, 13):
        value = contractual_ws.acell(f'D{row}').value
        if value and value != "":
            print(f"  D{row}: {value}")
    
    print("\n" + "="*70)
    print("✓ FIXED!")
    print("="*70)
    print("\nThe total formula in D13 should now sum all partner amounts")
    print("Expected total: $150,000")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_total_formula()