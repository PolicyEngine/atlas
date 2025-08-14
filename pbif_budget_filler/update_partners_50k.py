#!/usr/bin/env python3
"""Update partner allocations to $50k for MFB and BN"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import pickle
from pathlib import Path

# Try importing gspread from different locations
try:
    import gspread
except ImportError:
    try:
        # Try local installation
        sys.path.append('/opt/homebrew/lib/python3.10/site-packages')
        import gspread
    except ImportError:
        print("ERROR: gspread not found. Please install with: pip install gspread")
        sys.exit(1)

def update_partners():
    """Update partner allocations"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    if not token_path.exists():
        print(f"ERROR: token.pickle not found at {token_path}")
        print("Please run the authentication script first")
        return
        
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING PARTNER ALLOCATIONS TO $50K FOR MFB AND BN")
    print("="*70)
    
    try:
        sheet = gc.open_by_key(SPREADSHEET_ID)
        contractual_ws = sheet.worksheet("f. Contractual")
    except Exception as e:
        print(f"ERROR: Could not access spreadsheet: {e}")
        return
    
    # Update contractual items
    print("\nUpdating Contractual sheet...")
    
    # Headers in row 4
    headers = [["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"]]
    contractual_ws.update('A4:E4', headers)
    
    # Partner data for rows 5-11
    contractual_data = [
        ["LOI-1", "MyFriendBen", "", 50000, "Deep integration pilot - Colorado, 3,500+ monthly users"],
        ["LOI-2", "Benefit Navigator", "", 50000, "Deep integration pilot - LA/Riverside Counties"],
        ["LOI-3", "Georgia Center for Opportunity", "", 30000, "Founding partner, Atlanta Fed collaboration"],
        ["TBD", "Additional Partners (via RFP)", "", 34000, "Document contributions, no PN3 funding"],
        ["", "", "", "", ""],  # Empty row
        ["", "", "", "", ""],  # Empty row
        ["", "", "", "", ""],  # Empty row
    ]
    
    contractual_ws.update('A5:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Update explanation
    explanation = (
        "Additional Explanation: MyFriendBen and Benefit Navigator each receive $50k for deep integration pilots. "
        "GCO receives $30k as founding partner. PN3 contributes documents without funding. "
        "Total partner contracts: $164,000"
    )
    contractual_ws.update('A15', [[explanation]])
    
    print("\n✅ SUCCESS! Partner allocations updated:")
    print("-" * 40)
    print("  MyFriendBen:         $50,000")
    print("  Benefit Navigator:   $50,000")
    print("  GCO:                 $30,000")
    print("  Other Partners:      $34,000")
    print("  " + "-" * 30)
    print("  TOTAL:              $164,000")
    print()
    print(f"View spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_partners()