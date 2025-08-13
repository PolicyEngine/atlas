#!/usr/bin/env python3
"""Final correct fill - preserving ALL formulas, using batch updates"""

import pickle
import gspread
from pathlib import Path

def final_correct_fill():
    """Fill the spreadsheet correctly, preserving all formulas"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FINAL CORRECT FILL - PRESERVING ALL FORMULAS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. PERSONNEL - Batch update rows 6-9
    print("\n1. PERSONNEL (rows 6-9)")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    personnel_data = [
        # [Title, Hours, Rate, blank, Months, FTE%]
        ["Lead Engineer/Project Director", 2800, 45.00, "", 0, "70% FTE"],
        ["ML/AI Engineer", 2000, 40.00, "", 0, "50% FTE"],
        ["Policy Analyst", 1400, 35.00, "", 0, "35% FTE"],
        ["Community Manager", 1000, 30.00, "", 0, "25% FTE"],
    ]
    
    print("  Batch updating personnel...")
    personnel_ws.update('B6:G9', personnel_data, value_input_option='USER_ENTERED')
    
    # Add personnel explanation
    personnel_ws.update('A26', [[
        "Personnel reduced due to AI tool leverage. Lead Engineer oversees architecture, "
        "ML Engineer builds crawlers, Policy Analyst ensures accuracy, Community Manager coordinates partners."
    ]])
    
    # 2. FRINGE - Add job titles and explanation
    print("\n2. FRINGE")
    print("-"*40)
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Job titles in column A (rows 4-7)
    fringe_titles = [
        ["Lead Engineer/Project Director"],
        ["ML/AI Engineer"],
        ["Policy Analyst"],
        ["Community Manager"]
    ]
    fringe_ws.update('A4:A7', fringe_titles)
    
    # Fringe explanation
    fringe_ws.update('A26', [[
        "PolicyEngine offers 25% 403(b) contribution + 7.65% FICA + unemployment = 33% total. "
        "No health insurance currently but generous retirement helps staff secure coverage."
    ]])
    
    # 3. CONTRACTUAL - Fill rows 5-11 ONLY (NOT row 13 which has total formula!)
    print("\n3. CONTRACTUAL (rows 5-11 only)")
    print("-"*40)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Add headers in row 4 if needed
    headers = [["Quote #", "Vendor/Sub-recipient", "", "Cost", "Description/Justification"]]
    contractual_ws.update('A4:E4', headers)
    
    # Data for rows 5-11 (7 rows, leaving row 12 empty so total works)
    contractual_data = [
        ["LOI-1", "MyFriendBen", "", 15000, "CO screener, letter confirmed"],
        ["LOI-2", "Georgia Center for Opportunity", "", 15000, "Atlanta Fed partner, letter confirmed"],
        ["LOI-3", "PN3 Policy Center", "", 15000, "Policy research, letter confirmed"],
        ["LOI-4", "Benefit Navigator (Gates/Nava)", "", 15000, "AI benefits tool, letter confirmed"],
        ["TBD", "Additional Partners (21 @ $3k)", "", 63000, "Via RFP for geographic diversity"],
        ["Contract", "Citizen Codex", "", 15000, "UX research & accessibility"],
        ["", "", "", "", ""],  # Row 11 - leave empty
    ]
    
    print("  Batch updating contractual partners...")
    contractual_ws.update('A5:E11', contractual_data, value_input_option='USER_ENTERED')
    
    # Add explanation
    contractual_ws.update('A15', [[
        "Additional Explanation: Confirmed partners include MyFriendBen, GCO, PN3, and Benefit Navigator. "
        "Additional partners selected via RFP. Citizen Codex provides UX expertise."
    ]])
    
    # 4. OTHER DIRECT - Technical costs only
    print("\n4. OTHER DIRECT COSTS (rows 4-6)")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    other_data = [
        ["Cloud Infrastructure (AWS/GCP)", 20000, "", "AWS estimates", "Git LFS, OpenSearch, API hosting"],
        ["AI Coding Tools (Claude, GPT-4, Copilot)", 30000, "", "Market pricing", "Annual licenses for AI development"],
        ["Software Licenses and Tools", 10000, "", "Standard pricing", "IDEs, monitoring, security tools"],
    ]
    
    print("  Batch updating other direct costs...")
    other_ws.update('B4:F6', other_data, value_input_option='USER_ENTERED')
    
    # Clear rows 7-8 if they have old data
    other_ws.update('B7:F8', [["", "", "", "", ""], ["", "", "", "", ""]])
    
    # Add explanation
    other_ws.update('A23', [[
        "Additional Explanation (as needed): Technical infrastructure and AI tooling enable "
        "small team to build at scale. Cloud supports 100k+ document archival."
    ]])
    
    # 5. INDIRECT - Set rate
    print("\n5. INDIRECT")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    print("  Setting indirect rate to 10%...")
    indirect_ws.update('B4', [[0.10]], value_input_option='RAW')
    
    indirect_ws.update('A10', [[
        "Using 10% de minimis rate for administrative overhead."
    ]])
    
    # 6. CLEAR UNUSED TABS
    print("\n6. CLEARING UNUSED CATEGORIES")
    print("-"*40)
    
    # Travel
    travel_ws = sheet.worksheet("c. Travel")
    travel_ws.update('A4:F10', [[""] * 6 for _ in range(7)])
    travel_ws.update('A15', [["No travel budgeted - all coordination virtual."]])
    
    # Equipment
    equipment_ws = sheet.worksheet("d. Equipment")
    equipment_ws.update('A4:F10', [[""] * 6 for _ in range(7)])
    equipment_ws.update('A15', [["No equipment - team uses existing computers."]])
    
    # Supplies
    supplies_ws = sheet.worksheet("e. Supplies")
    supplies_ws.update('A4:F10', [[""] * 6 for _ in range(7)])
    supplies_ws.update('A15', [["No supplies - entirely digital project."]])
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nExpected totals:")
    print("  Personnel: $285,000 (1.8 FTE)")
    print("  Fringe: $94,050 (33%)")
    print("  Contractual: $153,000")
    print("  Other Direct: $60,000")
    print("  Indirect: ~$59,000 (10%)")
    print("  TOTAL: ~$651,000")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    final_correct_fill()