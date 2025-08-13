#!/usr/bin/env python3
"""Update PN3 to full name: Prenatal-to-3 Policy Impact Center"""

import pickle
import gspread
from pathlib import Path

def update_pn3_name():
    """Update PN3 to its full name in the budget"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING PN3 TO FULL NAME")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update PN3 name and description
    pn3_name = "Prenatal-to-3 Policy Impact Center"
    pn3_description = "Vanderbilt center, uses PolicyEngine for state tax credit modeling"
    
    contractual_ws.update('B8', [[pn3_name]])
    contractual_ws.update('E8', [[pn3_description]])
    
    # Update overall explanation to include Better Government Lab and USC
    explanation = (
        "Additional Explanation (as needed): MyFriendBen and Benefit Navigator each receive $30k "
        "for deep integration pilots. They already use our API for benefit calculations; this adds "
        "document display to show users primary sources alongside results. MFB serves 3,500+ Colorado "
        "users monthly; BN expands from LA to Riverside County. GCO is our three-way pilot partner "
        "with Atlanta Fed, leading North Carolina documentation and southeast expansion. "
        "Prenatal-to-3 Policy Impact Center at Vanderbilt uses PolicyEngine for state tax credit modeling. "
        "Better Government Lab and USC use PolicyEngine for academic research and will contribute documents. "
        "Additional partners (8-10 organizations) selected via RFP from rules-as-code community. "
        "Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    print("✓ Updated PN3 to: Prenatal-to-3 Policy Impact Center")
    print("✓ Added note about Vanderbilt location and PolicyEngine usage")
    print("✓ Added Better Government Lab and USC as contributors")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_pn3_name()