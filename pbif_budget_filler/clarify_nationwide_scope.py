#!/usr/bin/env python3
"""Clarify that Atlanta Fed and GCO contribute documents nationwide"""

import pickle
import gspread
from pathlib import Path

def clarify_nationwide_scope():
    """Update descriptions to show AF and GCO contribute nationwide documents"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CLARIFYING NATIONWIDE SCOPE FOR AF AND GCO")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update GCO description to clarify nationwide scope
    gco_description = "Three-way pilot partner, contributes documents for all states and programs nationwide"
    contractual_ws.update('E7', [[gco_description]])
    
    # Update overall explanation to emphasize nationwide contributions
    explanation = (
        "Additional Explanation (as needed): MyFriendBen and Benefit Navigator each receive $30k "
        "for deep integration pilots. They already use our API for benefit calculations; this adds "
        "document display to show users primary sources alongside results. MFB serves 3,500+ Colorado "
        "users monthly; BN expands from LA to Riverside County. GCO is our three-way pilot partner "
        "with Atlanta Fed, both contributing documents for ALL states and programs nationwide, not just "
        "NC and federal. Prenatal-to-3 Policy Impact Center at Vanderbilt uses PolicyEngine for state "
        "tax credit modeling. Better Government Lab and USC use PolicyEngine for academic research and "
        "will contribute documents. Additional partners (8-10 organizations) selected via RFP from "
        "rules-as-code community. Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    print("✓ Updated GCO description to clarify nationwide scope")
    print("✓ Emphasized both Atlanta Fed and GCO contribute documents for ALL states/programs")
    print("\nKey points clarified:")
    print("  - Atlanta Fed: Nationwide coverage of federal and state programs")
    print("  - GCO: All states and programs, not limited to North Carolina")
    print("  - Combined: Comprehensive nationwide document collection from launch")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    clarify_nationwide_scope()