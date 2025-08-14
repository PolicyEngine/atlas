#!/usr/bin/env python3
"""Fix the indirect rate to be 10% instead of 8.11%"""

import pickle
import gspread
from pathlib import Path

def fix_indirect():
    """Fix indirect rate"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING INDIRECT RATE")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Fix indirect rate
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # The rate is in B4 (currently 0.0811, should be 0.10)
    print("\nUpdating indirect rate from 8.11% to 10%...")
    indirect_ws.update("B4", [["0.10"]])
    
    # Clear our manual entry in B5/C5
    indirect_ws.batch_clear(["B5:C5"])
    
    print("✓ Indirect rate set to 10% (de minimis)")
    
    # Also need to clear the old Fringe manual entry
    print("\nCleaning up Fringe tab...")
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Clear row 8 which has our manual entry
    fringe_ws.batch_clear(["B8:C8"])
    
    # Clear the example text in column A
    fringe_ws.batch_clear(["A4:A5"])
    
    print("✓ Fringe tab cleaned")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nThe spreadsheet should now calculate correctly:")
    print("  • Personnel: 4 positions totaling ~$166k")
    print("  • Fringe: Auto-calculated at 33% = ~$55k")
    print("  • Other Direct: $81k")
    print("  • Indirect: 10% of direct costs")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_indirect()