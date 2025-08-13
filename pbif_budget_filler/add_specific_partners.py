#!/usr/bin/env python3
"""Add specific partner organizations to contractual"""

import pickle
import gspread
from pathlib import Path

def add_specific_partners():
    """Replace generic microgrants with specific partner organizations"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ADDING SPECIFIC PARTNER ORGANIZATIONS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Clear current entries (rows 5-12 to be safe)
    print("\n1. Clearing current generic entries...")
    contractual_ws.batch_clear(["A5:E12"])
    
    # Add specific partners with realistic allocations
    print("\n2. Adding specific partner organizations...")
    
    # Founding partners ($15k each) - organizations already using PolicyEngine
    # Implementation partners ($3-5k each) - new organizations
    partners = [
        # Founding Partners (confirmed relationships)
        ("LOI-1", "MyFriendBen", "", 15000, "CO benefit screener, 3.5k users/mo, letter confirmed"),
        ("LOI-2", "Georgia Center for Opportunity", "", 15000, "Atlanta Fed partnership, letter confirmed"),
        ("LOI-3", "Benefits Data Trust", "", 15000, "National reach, letter pending"),
        ("LOI-4", "Code for America", "", 15000, "GetCalFresh integration, letter pending"),
        ("LOI-5", "Navvy (Economic Security Project)", "", 15000, "Benefits navigator, letter confirmed"),
        
        # Implementation Partners (smaller grants)
        ("", "Center on Budget and Policy Priorities", "", 5000, "Research validation & policy analysis"),
        ("", "National Council on Aging", "", 5000, "Senior benefits focus"),
        ("", "United Way 211", "", 5000, "National helpline integration"),
        ("", "Propel (FreshEBT)", "", 3000, "SNAP recipient tools"),
        ("", "mRelief", "", 3000, "Chicago-based screener"),
        
        # UX Partner
        ("Contract", "Citizen Codex", "", 15000, "UX research & accessibility testing"),
        
        # Reserve for additional partners
        ("TBD", "Additional Implementation Partners (10)", "", 30000, "Reserve for RFP process"),
    ]
    
    total = 0
    for i, (quote, org, blank, amount, description) in enumerate(partners):
        row = 5 + i
        total += amount
        print(f"  Row {row}: {org} = ${amount:,}")
        
        contractual_ws.update(range_name=f"A{row}", values=[[quote]])
        contractual_ws.update(range_name=f"B{row}", values=[[org]])
        contractual_ws.update(range_name=f"C{row}", values=[[blank]])
        contractual_ws.update(range_name=f"D{row}", values=[[amount]], value_input_option='RAW')
        contractual_ws.update(range_name=f"E{row}", values=[[description]])
    
    # Update explanation
    print("\n3. Updating explanation with letter status...")
    explanation = (
        "Additional Explanation: "
        "Founding partners are organizations with existing PolicyEngine integrations who will provide "
        "early feedback on the document library. Letters of Intent (LOI) are being collected from confirmed partners. "
        "Implementation partners will be selected through an RFP process prioritizing geographic diversity "
        "and populations served. All partners must demonstrate active benefit screening programs. "
        "Citizen Codex provides specialized UX research and accessibility expertise under a fixed-price contract."
    )
    contractual_ws.update(range_name="A15", values=[[explanation]])
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print(f"\nTotal contractual: ${total:,}")
    print("\nPartner breakdown:")
    print("  • 5 Founding Partners @ $15k = $75k (3 letters confirmed, 2 pending)")
    print("  • 5 Named Implementation Partners = $21k")
    print("  • 10 Additional Partners (TBD via RFP) = $30k")
    print("  • Citizen Codex (UX contractor) = $15k")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    add_specific_partners()