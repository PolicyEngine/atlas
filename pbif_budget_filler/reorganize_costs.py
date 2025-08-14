#!/usr/bin/env python3
"""Reorganize costs - move microgrants to contractual, remove unused tabs"""

import pickle
import gspread
from pathlib import Path

def reorganize_costs():
    """Move microgrants to contractual, clean up unused categories"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("REORGANIZING BUDGET CATEGORIES")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. CLEAR OTHER DIRECT COSTS (moving microgrants out)
    print("\n1. UPDATING OTHER DIRECT COSTS")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    # Clear the microgrants rows
    print("  Clearing microgrants from Other Direct...")
    other_ws.batch_clear(["B4:F5"])
    
    # Move remaining items up
    new_other_items = [
        ("Cloud Infrastructure (AWS/GCP)", 20000, "AWS calculator estimates", "Hosting for Git LFS, OpenSearch cluster, API infrastructure"),
        ("AI Coding Tools (Claude, GPT-4, Copilot)", 30000, "Current market pricing", "Annual licenses for AI pair programming and code generation"),
        ("Software Licenses and Development Tools", 10000, "Standard pricing", "IDEs, monitoring tools, security scanning services"),
    ]
    
    for i, (desc, cost, basis, justif) in enumerate(new_other_items):
        row = 4 + i
        print(f"  Row {row}: {desc} = ${cost:,}")
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        other_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
        other_ws.update(range_name=f"E{row}", values=[[basis]])
        other_ws.update(range_name=f"F{row}", values=[[justif]])
    
    # Clear unused rows
    other_ws.batch_clear(["B7:F8"])
    
    # Update explanation
    other_explanation = (
        "Additional Explanation (as needed): "
        "Other direct costs focus on technical infrastructure and AI tooling. "
        "Cloud infrastructure supports permanent archival of 100,000+ documents. "
        "AI coding tools enable small team to achieve large-scale development goals."
    )
    other_ws.update(range_name="A23", values=[[other_explanation]])
    
    # 2. ADD TO CONTRACTUAL
    print("\n2. ADDING MICROGRANTS TO CONTRACTUAL")
    print("-"*40)
    contractual_ws = sheet.worksheet("f. Contractual")  # Fixed: it's f not g
    
    contractual_items = [
        ("", "Partner Microgrants - Founding Partners", 75000, "5 partners @ $15k each"),
        ("", "Partner Microgrants - Implementation", 60000, "20 partners @ $3k each"),
        ("", "Citizen Codex - UX Research & Design", 15000, "Fixed-price contract"),
    ]
    
    for i, (quote_num, desc, cost, basis) in enumerate(contractual_items):
        row = 4 + i
        print(f"  Row {row}: {desc} = ${cost:,}")
        contractual_ws.update(range_name=f"A{row}", values=[[quote_num]])  # Quote # (empty)
        contractual_ws.update(range_name=f"B{row}", values=[[desc]])
        contractual_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
        contractual_ws.update(range_name=f"D{row}", values=[["Project Total"]])  # Period
        contractual_ws.update(range_name=f"E{row}", values=[[basis]])
    
    # Add contractual explanation
    contractual_explanation = (
        "Additional Explanation (as needed): "
        "Contractual costs include subawards to partner organizations and UX vendor. "
        "Founding partners receive larger grants for early development feedback and integration work. "
        "Implementation partners receive smaller grants to adopt the system and provide case studies. "
        "Citizen Codex provides specialized UX research and accessibility expertise. "
        "All grant recipients must demonstrate active benefit screening programs serving low-income populations."
    )
    
    # Find the right row for explanation (usually around row 23)
    print("\n  Adding contractual explanation...")
    try:
        contractual_ws.update(range_name="A23", values=[[contractual_explanation]])
    except:
        contractual_ws.update(range_name="A20", values=[[contractual_explanation]])
    
    # 3. CLEAR UNUSED TABS (Travel, Equipment, Supplies)
    print("\n3. CLEARING UNUSED CATEGORIES")
    print("-"*40)
    
    # Clear Travel tab if it has sample data
    try:
        travel_ws = sheet.worksheet("c. Travel")
        print("  Clearing Travel tab sample data...")
        travel_ws.batch_clear(["A4:F10"])  # Clear any sample rows
        travel_explanation = "No travel costs budgeted. All partner coordination will be conducted virtually."
        travel_ws.update(range_name="A15", values=[[travel_explanation]])
    except:
        print("  Travel tab not found or already clear")
    
    # Clear Equipment tab if it has sample data  
    try:
        equipment_ws = sheet.worksheet("d. Equipment")
        print("  Clearing Equipment tab sample data...")
        equipment_ws.batch_clear(["A4:F10"])  # Clear any sample rows
        equipment_explanation = "No equipment purchases budgeted. Team uses existing computers and infrastructure."
        equipment_ws.update(range_name="A15", values=[[equipment_explanation]])
    except:
        print("  Equipment tab not found or already clear")
    
    # Clear Supplies tab if it has sample data
    try:
        supplies_ws = sheet.worksheet("e. Supplies")
        print("  Clearing Supplies tab sample data...")
        supplies_ws.batch_clear(["A4:F10"])  # Clear any sample rows
        supplies_explanation = "No supplies budgeted. Project is entirely digital/software-based."
        supplies_ws.update(range_name="A15", values=[[supplies_explanation]])
    except:
        print("  Supplies tab not found or already clear")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nReorganized budget:")
    print("  • Moved $135k microgrants from Other → Contractual")
    print("  • Other Direct now has only technical costs ($60k)")
    print("  • Cleared sample data from Travel, Equipment, Supplies")
    print("  • Added explanations for why unused categories are $0")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    reorganize_costs()