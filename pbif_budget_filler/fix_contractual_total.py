#!/usr/bin/env python3
"""Fix contractual total row that got overwritten"""

import pickle
import gspread
from pathlib import Path

def fix_contractual_total():
    """Fix the total row in contractual"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING CONTRACTUAL TOTAL ROW")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Move the last two partners up to avoid overwriting row 13
    print("\n1. Moving Propel and mRelief to rows 12-13...")
    
    # Clear rows 12-16
    contractual_ws.batch_clear(["A12:E16"])
    
    # Re-add the last partners in correct positions
    partners_to_fix = [
        ("", "Propel (FreshEBT)", "", 3000, "SNAP recipient tools"),
        ("", "mRelief", "", 3000, "Chicago-based screener"),
        ("Contract", "Citizen Codex", "", 15000, "UX research & accessibility testing"),
        ("TBD", "Additional Implementation Partners (10)", "", 30000, "Reserve for RFP process"),
    ]
    
    for i, (quote, org, blank, amount, desc) in enumerate(partners_to_fix):
        row = 12 + i  # Start at row 12
        print(f"  Row {row}: {org}")
        
        contractual_ws.update(range_name=f"A{row}", values=[[quote]])
        contractual_ws.update(range_name=f"B{row}", values=[[org]])
        contractual_ws.update(range_name=f"C{row}", values=[[blank]])
        contractual_ws.update(range_name=f"D{row}", values=[[amount]], value_input_option='RAW')
        contractual_ws.update(range_name=f"E{row}", values=[[desc]])
    
    # Now add the total row in row 17 (or find empty row after data)
    print("\n2. Adding total row in row 17...")
    contractual_ws.update(range_name="B17", values=[["Total Contractual Costs:"]])
    contractual_ws.update(range_name="D17", values=[["=SUM(D5:D15)"]], value_input_option='USER_ENTERED')
    
    print("\n" + "="*70)
    print("✓ FIXED!")
    print("="*70)
    print("\nContractual items now in rows 5-15")
    print("Total formula in row 17: =SUM(D5:D15)")
    print("\nExpected total: $141,000")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_contractual_total()