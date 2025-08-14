#!/usr/bin/env python3
"""Correct GCO description to reflect three-way pilot partnership"""

import pickle
import gspread
from pathlib import Path

def correct_gco_description():
    """Update GCO description to accurately reflect the three-way pilot"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CORRECTING GCO DESCRIPTION")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update GCO description to reflect three-way partnership
    gco_description = "Three-way pilot partner with Atlanta Fed, NC document lead, southeast expansion"
    contractual_ws.update('E7', [[gco_description]])
    
    # Update overall explanation
    explanation = (
        "Additional Explanation (as needed): MyFriendBen and Benefit Navigator each receive $30k "
        "for deep integration pilots. They already use our API for benefit calculations; this adds "
        "document display to show users primary sources alongside results. MFB serves 3,500+ Colorado "
        "users monthly; BN expands from LA to Riverside County. GCO is our three-way pilot partner "
        "with Atlanta Fed, leading North Carolina documentation and southeast expansion. "
        "Additional partners (8-10 organizations) selected via RFP from rules-as-code community including "
        "state agencies, research institutions, and civic tech groups. Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    print("✓ Updated GCO description to reflect three-way pilot partnership")
    print("  - PolicyEngine")
    print("  - Federal Reserve Bank of Atlanta") 
    print("  - Georgia Center for Opportunity")
    print("\n✓ GCO leads NC documentation and southeast expansion")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    correct_gco_description()