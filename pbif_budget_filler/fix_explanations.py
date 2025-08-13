#!/usr/bin/env python3
"""Fix explanation placements"""

import pickle
import gspread
from pathlib import Path

def fix_explanations():
    """Fix the placement of explanations"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING EXPLANATION PLACEMENTS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Clear wrong personnel explanation in A26
    print("\n1. Fixing Personnel explanation...")
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Clear A26
    personnel_ws.update('A26', [[""]])
    
    # Find the right row for explanation (usually after the total)
    # Check what's in row 28-30
    print("  Looking for correct explanation row...")
    for row in [28, 29, 30]:
        value = personnel_ws.acell(f'A{row}').value
        if value and "explanation" in value.lower():
            print(f"  Found explanation label in row {row}")
            personnel_ws.update(f'A{row}', [[
                "Additional Explanation (as needed): Personnel reduced due to AI tool leverage. "
                "Lead Engineer oversees architecture, ML Engineer builds crawlers, "
                "Policy Analyst ensures accuracy, Community Manager coordinates partners."
            ]])
            break
    else:
        # If no label found, use row 29
        print("  Adding explanation to row 29")
        personnel_ws.update('A29', [[
            "Additional Explanation (as needed): Personnel reduced due to AI tool leverage. "
            "Lead Engineer oversees architecture, ML Engineer builds crawlers, "
            "Policy Analyst ensures accuracy, Community Manager coordinates partners."
        ]])
    
    # Also check Fringe explanation placement
    print("\n2. Checking Fringe explanation...")
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Clear A26 if wrong
    fringe_ws.update('A26', [[""]])
    
    # Find correct row
    for row in [25, 26, 27]:
        value = fringe_ws.acell(f'A{row}').value
        if value and "explanation" in value.lower():
            print(f"  Found explanation label in row {row}")
            fringe_ws.update(f'A{row}', [[
                "Additional Explanation (as needed): PolicyEngine offers 25% 403(b) contribution "
                "+ 7.65% FICA + unemployment = 33% total. No health insurance currently but "
                "generous retirement helps staff secure coverage."
            ]])
            break
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)

if __name__ == "__main__":
    fix_explanations()