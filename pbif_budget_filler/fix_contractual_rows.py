#!/usr/bin/env python3
"""Fix contractual rows - move data to start at row 5"""

import pickle
import gspread
from pathlib import Path

def fix_contractual_rows():
    """Move contractual data to correct rows"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING CONTRACTUAL ROW POSITIONS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # 1. Clear current data in rows 4-6
    print("\n1. Clearing rows 4-7...")
    contractual_ws.batch_clear(["A4:E7"])
    
    # 2. Add headers in row 4
    print("\n2. Adding headers in row 4...")
    headers = ["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"]
    contractual_ws.update(range_name="A4:E4", values=[headers])
    
    # 3. Add data starting at row 5
    print("\n3. Adding contractual items starting at row 5...")
    
    contractual_items = [
        ("", "Partner Microgrants - Founding Partners", "", 75000, "5 partners @ $15k each for early development"),
        ("", "Partner Microgrants - Implementation", "", 60000, "20 partners @ $3k each for production adoption"),
        ("", "Citizen Codex - UX Research & Design", "", 15000, "Fixed-price contract for accessibility testing"),
    ]
    
    for i, (quote, vendor, blank, cost, description) in enumerate(contractual_items):
        row = 5 + i  # Start at row 5
        print(f"  Row {row}: {vendor} = ${cost:,}")
        
        contractual_ws.update(range_name=f"A{row}", values=[[quote]])
        contractual_ws.update(range_name=f"B{row}", values=[[vendor]])
        contractual_ws.update(range_name=f"C{row}", values=[[blank]])
        contractual_ws.update(range_name=f"D{row}", values=[[cost]], value_input_option='RAW')
        contractual_ws.update(range_name=f"E{row}", values=[[description]])
    
    print("\n" + "="*70)
    print("✓ FIXED!")
    print("="*70)
    print("\nContractual data now starts at row 5 (with headers in row 4)")
    print("The SUM(D5:D12) formula should now capture all three items:")
    print("  • Row 5: $75k - Founding partners")
    print("  • Row 6: $60k - Implementation partners")  
    print("  • Row 7: $15k - Citizen Codex")
    print("  • Total: $150k")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_contractual_rows()