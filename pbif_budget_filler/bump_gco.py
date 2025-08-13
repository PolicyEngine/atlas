#!/usr/bin/env python3
"""Bump GCO to $30k to match integration pilot level"""

import pickle
import gspread
from pathlib import Path

def bump_gco():
    """Update GCO to $30k in contractual"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("UPDATING GCO TO $30K")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Update contractual items with GCO at $30k
    contractual_data = [
        # Headers in row 4
        ["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"],
        
        # Founding Partners with Integration Support (rows 5-8)
        ["LOI-1", "MyFriendBen - Colorado Pilot", "", 25000, "Founding partner + integration support for CO United Ways"],
        ["LOI-2", "Benefit Navigator - Riverside Pilot", "", 25000, "LA County caseworker tool integration for Riverside expansion"],
        ["LOI-3", "Georgia Center for Opportunity", "", 30000, "Atlanta Fed partner, NC pilot lead, integration support"],
        ["LOI-4", "PN3 Policy Center", "", 15000, "Policy research, letter confirmed"],
        
        # Implementation and Other (rows 9-11)
        ["TBD", "Additional Partners (18 @ $3k)", "", 54000, "Via RFP for geographic diversity"],
        ["Contract", "Citizen Codex", "", 15000, "UX research & accessibility"],
        ["", "", "", "", ""],  # Empty row for formula to work
    ]
    
    print("\nUpdating Contractual with GCO at $30k...")
    contractual_ws.update('A4:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Update explanation
    explanation = (
        "Additional Explanation (as needed): Includes integration support for MyFriendBen "
        "(Colorado pilot with United Ways) and Benefit Navigator (Riverside County pilot). "
        "Georgia Center for Opportunity receives $30k as they're leading the NC pilot with Atlanta Fed "
        "and will expand integration to southeastern states. Integration enables real-time document display "
        "when users request program information, providing primary-source corroboration linked to PolicyEngine rules. "
        "Additional partners selected via RFP. Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    # Calculate new totals
    print("\n" + "="*70)
    print("NEW BUDGET WITH GCO AT $30K:")
    print("-"*40)
    
    personnel = 126000 + 88000 + 49000 + 30000  # $293,000 (unchanged)
    fringe = int(personnel * 0.33)  # $96,690
    contractual = 25000 + 25000 + 30000 + 15000 + 54000 + 15000  # $164,000
    other = 60000  # Same
    total_direct = personnel + fringe + contractual + other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print(f"  Personnel (1.85 FTE):  ${personnel:,}")
    print(f"  Fringe (33%):         ${fringe:,}")
    print(f"  Contractual:          ${contractual:,}")
    print(f"    - MFB Colorado:       $25,000")
    print(f"    - BN Riverside:       $25,000")
    print(f"    - GCO (NC/Southeast): $30,000")
    print(f"    - PN3:                $15,000")
    print(f"    - Additional (18):    $54,000")
    print(f"    - Citizen Codex:      $15,000")
    print(f"  Other Direct:         ${other:,}")
    print(f"  Total Direct:         ${total_direct:,}")
    print(f"  Indirect (10%):       ${indirect:,}")
    print(f"  GRAND TOTAL:          ${grand_total:,}")
    
    print("\n✓ GCO increased to $30k!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    bump_gco()