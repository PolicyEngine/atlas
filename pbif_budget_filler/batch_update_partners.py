#!/usr/bin/env python3
"""Batch update contractual with confirmed partners only"""

import pickle
import gspread
from pathlib import Path

def batch_update_partners():
    """Update contractual with confirmed partners using batch update"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("BATCH UPDATING CONTRACTUAL WITH CONFIRMED PARTNERS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Prepare all data for rows 5-12 (8 rows total)
    # Format: [Quote#, Vendor, blank, Amount, Description]
    partners_data = [
        # Row 5-8: Confirmed founding partners with letters
        ["LOI-1", "MyFriendBen", "", 15000, "CO screener, 3.5k users/mo, letter confirmed"],
        ["LOI-2", "Georgia Center for Opportunity", "", 15000, "Atlanta Fed partner, letter confirmed"],
        ["LOI-3", "PN3 Policy Center", "", 15000, "Policy research partner, letter confirmed"],
        ["LOI-4", "Benefit Navigator (Gates/Nava)", "", 15000, "AI benefits tool, letter confirmed"],
        
        # Row 9-11: Additional partners and contractor
        ["TBD", "Additional Founding Partner (1)", "", 15000, "To be selected via RFP"],
        ["TBD", "Implementation Partners (20 @ $3k)", "", 60000, "Geographic diversity focus"],
        ["Contract", "Citizen Codex - UX Research", "", 15000, "Accessibility & user testing"],
        
        # Row 12: Leave empty for proper total calculation
        ["", "", "", "", ""],
    ]
    
    # Use batch_update to set all values at once
    print("\nUpdating rows 5-12 in single batch operation...")
    
    # Method 1: Update as a range
    range_name = 'A5:E12'
    contractual_ws.update(range_name, partners_data, value_input_option='USER_ENTERED')
    
    print("✓ Batch update complete!")
    
    # Update explanation in A15 separately
    print("\nUpdating explanation...")
    explanation = (
        "Additional Explanation: "
        "Confirmed founding partners include MyFriendBen (Colorado's leading screener), "
        "Georgia Center for Opportunity (Atlanta Fed collaboration), PN3 Policy Center, "
        "and Benefit Navigator (Gates Foundation/Nava partnership). "
        "Letters of Intent have been secured from all confirmed partners. "
        "Additional partners will be selected through competitive RFP process. "
        "Citizen Codex provides UX research and accessibility testing expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    # Calculate total
    total = sum([15000, 15000, 15000, 15000, 15000, 60000, 15000])
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print(f"\nTotal contractual: ${total:,}")
    print("\nPartner breakdown:")
    print("  • 4 Confirmed Founding Partners @ $15k = $60k")
    print("  • 1 Additional Founding Partner (TBD) = $15k")
    print("  • 20 Implementation Partners @ $3k = $60k")
    print("  • Citizen Codex (UX contractor) = $15k")
    print(f"  • TOTAL: ${total:,}")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    batch_update_partners()