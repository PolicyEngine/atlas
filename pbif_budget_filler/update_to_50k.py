#!/usr/bin/env python3
"""Update MFB and BN to $50k each as per latest requirements"""

import pickle
import gspread
from pathlib import Path

def update_to_50k():
    """Update partner allocations with MFB/BN at $50k each"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING MFB AND BN TO $50K EACH")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update contractual items with MFB/BN at $50k each
    contractual_data = [
        # Headers in row 4
        ["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"],
        
        # Deep Integration Pilots at $50k each (rows 5-7)
        ["LOI-1", "MyFriendBen - Colorado Pilot", "", 50000, "Deep integration pilot for statewide Colorado deployment, document display enhancement, 3,500+ monthly users"],
        ["LOI-2", "Benefit Navigator - Riverside Pilot", "", 50000, "LA County tool expanding to Riverside, primary source verification integration, caseworker training"],
        ["LOI-3", "Georgia Center for Opportunity", "", 30000, "Atlanta Fed partner, NC pilot lead, southeast expansion, founding partner"],
        
        # Other Partners (rows 8-10) - No PN3 funding
        ["TBD", "Additional Partners (6-8 orgs)", "", 34000, "Rules-as-code contributors via RFP, document contributions"],
        ["", "", "", "", ""],  # Empty row
        ["", "", "", "", ""],  # Empty row
        ["", "", "", "", ""],  # Empty row for formula
    ]
    
    print("\nUpdating Contractual with $50k for MFB and BN...")
    contractual_ws.update('A4:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Update explanation
    explanation = (
        "Additional Explanation (as needed): MyFriendBen and Benefit Navigator each receive $50k "
        "for deep integration pilots with deployment support. They already use our API for benefit calculations; this adds "
        "document display to show users primary sources alongside results. MFB serves 3,500+ Colorado "
        "users monthly. BN expands from LA County to Riverside County with caseworker training. "
        "Georgia Center for Opportunity receives $30k as founding partner leading NC pilot with Atlanta Fed. "
        "Prenatal-to-3 Policy Impact Center contributes documents without receiving funding. "
        "Additional partners selected via RFP contribute documents and receive integration support."
    )
    
    print("\nUpdating contractual explanation...")
    contractual_ws.update('B2', explanation, value_input_option='USER_ENTERED')
    
    # Display new totals
    print("\nNEW PARTNER ALLOCATIONS:")
    print("-" * 40)
    print(f"    - MFB Colorado:       $50,000")
    print(f"    - BN Riverside:       $50,000")
    print(f"    - GCO (NC/Southeast): $30,000")
    print(f"    - Other Partners:     $34,000")
    print(f"    " + "-" * 30)
    print(f"    TOTAL:               $164,000")
    print()
    print("Note: PN3 contributes documents without receiving funding")
    print()
    print("✓ Budget updated in Google Sheets!")
    print(f"✓ View at: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_to_50k()