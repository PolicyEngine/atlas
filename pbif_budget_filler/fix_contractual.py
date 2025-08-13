#!/usr/bin/env python3
"""Fix contractual tab - clear wrong entries and put in correct cells"""

import pickle
import gspread
from pathlib import Path

def fix_contractual():
    """Fix the contractual tab entries"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING CONTRACTUAL TAB")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # 1. Clear the wrong explanation in row 23
    print("\n1. Clearing wrong explanation from row 23...")
    contractual_ws.update(range_name="A23", values=[[""]])
    
    # 2. Clear wrong entries and re-enter correctly
    print("\n2. Re-entering contractual items in correct format...")
    
    # The template expects: Quote#, Vendor/Partner, blank, Cost, blank
    # Based on the structure, column C should have the cost
    contractual_items = [
        ("", "Partner Microgrants - Founding Partners", "", 75000, "5 partners @ $15k each"),
        ("", "Partner Microgrants - Implementation", "", 60000, "20 partners @ $3k each"),
        ("", "Citizen Codex - UX Research & Design", "", 15000, "Fixed-price contract"),
    ]
    
    # Clear existing entries first
    contractual_ws.batch_clear(["A4:E6"])
    
    for i, (quote, vendor, blank, cost, description) in enumerate(contractual_items):
        row = 4 + i
        print(f"  Row {row}: {vendor} = ${cost:,}")
        
        # A: Quote # (empty)
        contractual_ws.update(range_name=f"A{row}", values=[[quote]])
        # B: Vendor/Partner name
        contractual_ws.update(range_name=f"B{row}", values=[[vendor]])
        # C: blank or secondary description
        contractual_ws.update(range_name=f"C{row}", values=[[blank]])
        # D: Cost amount
        contractual_ws.update(range_name=f"D{row}", values=[[cost]], value_input_option='RAW')
        # E: Description/Justification
        contractual_ws.update(range_name=f"E{row}", values=[[description]])
    
    # 3. Add explanation in the correct row (15)
    print("\n3. Adding explanation to row 15 (after the label)...")
    explanation = (
        "Additional Explanation: "
        "Contractual costs include subawards to partner organizations ($135k) and UX vendor ($15k). "
        "Founding partners receive $15k each for early development feedback and integration. "
        "Implementation partners receive $3k each to adopt the system and provide case studies. "
        "Citizen Codex provides specialized UX research and accessibility testing. "
        "All grant recipients must serve low-income populations."
    )
    contractual_ws.update(range_name="A15", values=[[explanation]])
    
    print("\n" + "="*70)
    print("✓ FIXED!")
    print("="*70)
    print("\nContractual tab now has:")
    print("  • $75k - Founding partner grants (5 @ $15k)")
    print("  • $60k - Implementation partner grants (20 @ $3k)")
    print("  • $15k - Citizen Codex UX research")
    print("  • Total: $150k")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_contractual()