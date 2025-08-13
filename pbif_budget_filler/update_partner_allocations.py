#!/usr/bin/env python3
"""Update MFB and BN to $30k each, reduce partner count to realistic number"""

import pickle
import gspread
from pathlib import Path

def update_allocations():
    """Update partner allocations with higher MFB/BN amounts and fewer partners"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING MFB AND BN TO $30K EACH, REDUCING PARTNER COUNT")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update contractual items with MFB/BN at $30k, fewer partners
    contractual_data = [
        # Headers in row 4
        ["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"],
        
        # Integration Pilots at $30k each (rows 5-7)
        ["LOI-1", "MyFriendBen - Colorado Pilot", "", 30000, "Integration pilot for statewide Colorado deployment, document display enhancement"],
        ["LOI-2", "Benefit Navigator - Riverside Pilot", "", 30000, "LA County tool expanding to Riverside, primary source verification integration"],
        ["LOI-3", "Georgia Center for Opportunity", "", 30000, "Atlanta Fed partner, NC pilot lead, southeast expansion"],
        
        # Other Partners (rows 8-10)
        ["LOI-4", "PN3 Policy Center", "", 15000, "Policy research, letter confirmed"],
        ["TBD", "Additional Partners (8-10 orgs)", "", 44000, "Rules-as-code contributors via RFP"],
        ["Contract", "Citizen Codex", "", 15000, "UX research & accessibility"],
        ["", "", "", "", ""],  # Empty row for formula
    ]
    
    print("\nUpdating Contractual with realistic partner count...")
    contractual_ws.update('A4:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Update explanation
    explanation = (
        "Additional Explanation (as needed): MyFriendBen and Benefit Navigator each receive $30k "
        "for deep integration pilots. They already use our API for benefit calculations; this adds "
        "document display to show users primary sources alongside results. MFB serves 3,500+ Colorado "
        "users monthly; BN expands from LA to Riverside County. GCO leads federal/NC pilot with Atlanta Fed. "
        "Additional partners (8-10 organizations) selected via RFP from rules-as-code community including "
        "state agencies, research institutions, and civic tech groups. Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    # Calculate totals
    personnel = 126000 + 88000 + 49000 + 30000  # $293,000
    fringe = int(personnel * 0.33)  # $96,690
    contractual = 30000 + 30000 + 30000 + 15000 + 44000 + 15000  # $164,000
    other = 60000
    total_direct = personnel + fringe + contractual + other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print("\n" + "="*70)
    print("UPDATED BUDGET:")
    print("-"*40)
    print(f"  Personnel (1.85 FTE):  ${personnel:,}")
    print(f"  Fringe (33%):         ${fringe:,}")
    print(f"  Contractual:          ${contractual:,}")
    print(f"    - MFB Colorado:       $30,000")
    print(f"    - BN Riverside:       $30,000")
    print(f"    - GCO (NC/Southeast): $30,000")
    print(f"    - PN3:                $15,000")
    print(f"    - Additional (8-10):  $44,000")
    print(f"    - Citizen Codex:      $15,000")
    print(f"  Other Direct:         ${other:,}")
    print(f"  Total Direct:         ${total_direct:,}")
    print(f"  Indirect (10%):       ${indirect:,}")
    print(f"  GRAND TOTAL:          ${grand_total:,}")
    
    print("\n✓ Budget updated with realistic partner count!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    update_allocations()