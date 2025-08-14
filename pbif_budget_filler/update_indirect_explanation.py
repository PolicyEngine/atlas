#!/usr/bin/env python3
"""Update indirect explanation with fiscal sponsor details"""

import pickle
import gspread
from pathlib import Path

def update_indirect_explanation():
    """Update the indirect explanation to include fiscal sponsor fee"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING INDIRECT EXPLANATION")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # Find and update the explanation
    print("\nUpdating indirect explanation with fiscal sponsor details...")
    
    # Clear old explanation if in wrong place
    indirect_ws.update('A10', [[""]])
    
    # Add comprehensive explanation
    explanation = (
        "Additional Explanation (as needed): PolicyEngine uses the 10% de minimis indirect rate. "
        "This covers our fiscal sponsor fee (7% of all expenses) plus office space, utilities, "
        "accounting, HR support, and general administrative overhead. The fiscal sponsor "
        "(a 501(c)(3) nonprofit) provides financial management, compliance, and administrative services."
    )
    
    # Find the right row for explanation (usually around row 8-12)
    for row in [8, 9, 10, 11, 12]:
        value = indirect_ws.acell(f'A{row}').value
        if value and "explanation" in value.lower():
            print(f"  Found explanation label in row {row}")
            indirect_ws.update(f'A{row}', [[explanation]])
            break
    else:
        # If no label found, add to row 10
        print("  Adding explanation to row 10")
        indirect_ws.update('A10', [[explanation]])
    
    print("\n✓ Indirect explanation updated with fiscal sponsor details")
    print("\n" + "="*70)
    print("JUSTIFICATION FOR 10% RATE:")
    print("-"*40)
    print("  • 7% - Fiscal sponsor fee")
    print("  • 1% - Office space & utilities")
    print("  • 1% - Accounting & bookkeeping")
    print("  • 1% - Other admin (HR, insurance, etc.)")
    print("  • Total: 10% de minimis rate")
    print("="*70)
    
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_indirect_explanation()