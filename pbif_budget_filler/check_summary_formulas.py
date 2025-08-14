#!/usr/bin/env python3
"""Check what's happening with Summary tab formulas"""

import pickle
import gspread
from pathlib import Path

def check_summary():
    """Check Summary tab to see contractual line"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING SUMMARY TAB")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    summary_ws = sheet.worksheet("Summary")
    
    # Get rows 14-23 to see all categories
    print("\nSummary rows 14-23:")
    for row in range(14, 24):
        values = summary_ws.row_values(row)
        if values:
            print(f"  Row {row}: {values[:3]}")
    
    # Check contractual total
    contractual_ws = sheet.worksheet("f. Contractual")
    contractual_values = contractual_ws.get_all_values()
    
    print("\nContractual tab totals:")
    # Find the total row (usually around row 20-25)
    for i in range(15, min(25, len(contractual_values))):
        row = contractual_values[i]
        if row and any("total" in str(cell).lower() for cell in row):
            print(f"  Row {i+1}: {row[:4]}")
    
    # Calculate our contractual total
    our_total = 75000 + 60000 + 15000
    print(f"\n  Our contractual total: ${our_total:,}")
    
    print("\n" + "="*70)
    print("EXPECTED FINAL BUDGET:")
    print("-"*40)
    personnel = 285000
    fringe = 94050
    contractual = 150000
    other = 60000
    total_direct = personnel + fringe + contractual + other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print(f"  Personnel:    ${personnel:,}")
    print(f"  Fringe:       ${fringe:,}")
    print(f"  Contractual:  ${contractual:,}")
    print(f"  Other Direct: ${other:,}")
    print(f"  Total Direct: ${total_direct:,}")
    print(f"  Indirect:     ${indirect:,}")
    print(f"  GRAND TOTAL:  ${grand_total:,}")

if __name__ == "__main__":
    check_summary()