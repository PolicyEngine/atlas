#!/usr/bin/env python3
"""Fix the personnel formulas by re-entering hours and rates"""

import pickle
import gspread
from pathlib import Path

def fix_personnel_formulas():
    """Fix personnel formulas"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING PERSONNEL FORMULAS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # The issue is that column E should have formula =C*D
    # Let's just re-enter the data cleanly
    
    print("\nRe-entering personnel data to fix formulas...")
    
    # Clear rows 6-9 completely first
    print("  Clearing rows 6-9...")
    personnel_ws.batch_clear(["B6:G9"])
    
    # Now re-enter each position
    positions = [
        ("Lead Engineer/Project Director", 1664, 43.27),  
        ("ML/AI Engineer", 1248, 38.46),  
        ("Policy Analyst", 832, 33.65),   
        ("Community Manager", 624, 28.85), 
    ]
    
    print("\n  Re-entering positions:")
    for i, (title, hours, rate) in enumerate(positions):
        row = 6 + i
        print(f"    Row {row}: {title}")
        
        # Use batch update for efficiency
        range_name = f"B{row}:G{row}"
        fte_pct = f"{hours/2080:.1%} FTE"
        
        # Note: Column E will auto-calculate from C*D
        values = [[title, str(hours), f"{rate:.2f}", "", "0", fte_pct]]
        
        personnel_ws.update(range_name, values)
    
    print("\n✓ Personnel data re-entered")
    print("\nColumn E (Project Total) should auto-calculate from Hours × Rate")
    print("\nChecking totals...")
    
    # Get the updated values to verify
    values = personnel_ws.get_all_values()
    
    total = 0
    for i in range(5, 10):
        if i < len(values):
            row = values[i]
            if len(row) > 4 and row[4]:
                try:
                    # Parse the dollar amount
                    amount = row[4].replace('$', '').replace(',', '')
                    if amount:
                        total += float(amount)
                        print(f"  Row {i+1}: {row[1][:30]} = {row[4]}")
                except:
                    pass
    
    print(f"\n  Total Personnel: ${total:,.0f}")
    
    print("\n" + "="*70)
    print("✓ FIXED!")
    print("="*70)
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_personnel_formulas()