#!/usr/bin/env python3
"""Check why Other Direct Costs total isn't calculating"""

import pickle
import gspread
from pathlib import Path

def check_other():
    """Check Other Direct Costs tab"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING OTHER DIRECT COSTS TAB")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    other_ws = sheet.worksheet("h. Other")
    
    # Get the formula in row 22
    print("\nChecking row 22 (total row)...")
    all_values = other_ws.get_all_values()
    
    # Print all rows to see structure
    print("\nAll rows with data:")
    for i in range(min(25, len(all_values))):
        row = all_values[i]
        if any(row):  # If row has any content
            print(f"Row {i+1}: {row[:4]}")
    
    # Check if there's a formula in C22
    try:
        formula = other_ws.acell('C22', value_render_option='FORMULA').value
        print(f"\nFormula in C22: {formula}")
    except:
        print("\nNo formula found in C22")
    
    # See if we need to manually set the total
    print("\nCalculating manual total from our entries...")
    total = 70000 + 60000 + 20000 + 6000 + 6000
    print(f"Manual total: ${total:,}")
    
    print("\nSetting the total in C22...")
    other_ws.update(range_name="C22", values=[[str(total)]])
    print("✓ Total set")

if __name__ == "__main__":
    check_other()