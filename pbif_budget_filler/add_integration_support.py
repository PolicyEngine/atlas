#!/usr/bin/env python3
"""Add integration support for MyFriendBen and Benefit Navigator pilots"""

import pickle
import gspread
from pathlib import Path

def add_integration_support():
    """Update budget to include integration support for partners"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ADDING INTEGRATION SUPPORT TO BUDGET")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Update Contractual tab to include integration support
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # New contractual items with integration support
    contractual_data = [
        # Headers in row 4
        ["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"],
        
        # Founding Partners with Integration Support (rows 5-8)
        ["LOI-1", "MyFriendBen - Colorado Pilot", "", 25000, "Founding partner + integration support for CO United Ways"],
        ["LOI-2", "Benefit Navigator - Riverside Pilot", "", 25000, "LA County caseworker tool integration for Riverside expansion"],
        ["LOI-3", "Georgia Center for Opportunity", "", 15000, "Atlanta Fed partner, letter confirmed"],
        ["LOI-4", "PN3 Policy Center", "", 15000, "Policy research, letter confirmed"],
        
        # Implementation and Other (rows 9-11)
        ["TBD", "Additional Partners (20 @ $3k)", "", 60000, "Via RFP for geographic diversity"],
        ["Contract", "Citizen Codex", "", 15000, "UX research & accessibility"],
        ["", "", "", "", ""],  # Empty row for formula to work
    ]
    
    print("\nUpdating Contractual with integration support...")
    contractual_ws.update('A4:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Update explanation
    explanation = (
        "Additional Explanation (as needed): Includes $10k integration support each for MyFriendBen "
        "(Colorado pilot with United Ways) and Benefit Navigator (Riverside County pilot expanding from LA County). "
        "Integration enables real-time document display when users request program information, providing "
        "primary-source corroboration linked to PolicyEngine rules. MyFriendBen serves 3,500+ users monthly; "
        "Benefit Navigator is used by LA County caseworkers and expanding throughout California. "
        "Other confirmed partners include GCO and PN3. Additional partners selected via RFP. "
        "Citizen Codex provides UX expertise."
    )
    contractual_ws.update('A15', [[explanation]])
    
    # Update Personnel slightly to account for integration engineering time
    print("\nAdjusting personnel for integration support...")
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Slightly increase ML Engineer time for integration work
    personnel_data = [
        ["Lead Engineer/Project Director", 2800, 45.00, "", 0, "70% FTE"],
        ["ML/AI Engineer - Integration Lead", 2200, 40.00, "", 0, "55% FTE (+5% for integration)"],
        ["Policy Analyst", 1400, 35.00, "", 0, "35% FTE"],
        ["Community Manager", 1000, 30.00, "", 0, "25% FTE"],
    ]
    
    print("  Increasing ML Engineer to 55% FTE for integration work...")
    personnel_ws.update('B6:G9', personnel_data, value_input_option='USER_ENTERED')
    
    # Restore formulas in column E
    formulas = [
        ["=C6*D6"],
        ["=C7*D7"],
        ["=C8*D8"],
        ["=C9*D9"],
    ]
    personnel_ws.update('E6:E9', formulas, value_input_option='USER_ENTERED')
    
    # Update personnel explanation
    personnel_explanation = (
        "Additional Explanation (as needed): ML Engineer increased to 55% FTE to support integration "
        "with MyFriendBen (Colorado) and Benefit Navigator (Riverside County). These pilots will demonstrate "
        "real-time document retrieval linked to PolicyEngine rules, providing caseworkers and users with "
        "primary-source verification. Lean team leverages AI tools for efficiency."
    )
    personnel_ws.update('A28', [[personnel_explanation]])
    
    # Calculate new totals
    print("\n" + "="*70)
    print("NEW BUDGET WITH INTEGRATION SUPPORT:")
    print("-"*40)
    
    personnel = 2800*45 + 2200*40 + 1400*35 + 1000*30  # $293,000
    fringe = int(personnel * 0.33)  # $96,690
    contractual = 25000*2 + 15000*2 + 60000 + 15000  # $155,000
    other = 60000  # Same
    total_direct = personnel + fringe + contractual + other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print(f"  Personnel (1.85 FTE):  ${personnel:,}")
    print(f"  Fringe (33%):         ${fringe:,}")
    print(f"  Contractual:          ${contractual:,}")
    print(f"    - MFB Colorado:       $25,000 (includes $10k integration)")
    print(f"    - BN Riverside:       $25,000 (includes $10k integration)")
    print(f"    - Other partners:     $105,000")
    print(f"  Other Direct:         ${other:,}")
    print(f"  Total Direct:         ${total_direct:,}")
    print(f"  Indirect (10%):       ${indirect:,}")
    print(f"  GRAND TOTAL:          ${grand_total:,}")
    
    print("\n✓ Integration support added!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    add_integration_support()