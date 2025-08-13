#!/usr/bin/env python3
"""Update indirect explanation noting 15% is allowed for nonprofits"""

import pickle
import gspread
from pathlib import Path

def update_indirect_15percent():
    """Update the indirect explanation noting we could use up to 15%"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING INDIRECT EXPLANATION - 15% ALLOWED")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # Update with better explanation
    print("\nUpdating indirect explanation noting 15% is allowed...")
    
    explanation = (
        "Additional Explanation (as needed): PolicyEngine conservatively uses 10% indirect rate, "
        "though nonprofits are allowed up to 15% de minimis. Our actual indirect costs include: "
        "fiscal sponsor fee (7% of all expenses), office space, utilities, accounting, HR support, "
        "and general administrative overhead. Our 501(c)(3) fiscal sponsor provides financial management, "
        "compliance, grant reporting, and administrative infrastructure. Using only 10% maximizes "
        "funds directed to program activities while covering essential overhead."
    )
    
    # Find and update the explanation row
    for row in [8, 9, 10, 11, 12]:
        value = indirect_ws.acell(f'A{row}').value
        if value and ("explanation" in value.lower() or "fiscal" in value.lower()):
            print(f"  Updating explanation in row {row}")
            indirect_ws.update(f'A{row}', [[explanation]])
            break
    
    print("\n✓ Updated to note 15% is allowed, we're being conservative at 10%")
    
    print("\n" + "="*70)
    print("INDIRECT RATE CONTEXT:")
    print("-"*40)
    print("  • Federal allows: 15% de minimis for nonprofits")
    print("  • We're using: 10% (conservative)")
    print("  • Actual costs:")
    print("    - 7% fiscal sponsor fee")
    print("    - 3-8% other overhead")
    print("  • Result: More funds to program activities")
    print("="*70)
    
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_indirect_15percent()