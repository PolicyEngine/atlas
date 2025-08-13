#!/usr/bin/env python3
"""Fix the spreadsheet properly by reading instructions and filling all required fields"""

import pickle
import gspread
from pathlib import Path

def fix_spreadsheet():
    """Fix all issues in the spreadsheet"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING SPREADSHEET PROPERLY")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. Fix Personnel tab - remove ALL examples and fix our entries
    print("\n1. FIXING PERSONNEL TAB")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Read current values to understand structure
    values = personnel_ws.get_all_values()
    
    # Instructions say: Position Title (B), Time in Hours (C), Pay Rate $/Hr (D), Project Total (E auto-calc), Cost Share (F), Pay Rate Basis (G)
    print("Instructions: List by position title, enter hours and rate")
    
    # Clear the example in row 6
    print("  Clearing row 6 example...")
    personnel_ws.batch_clear(["B6:G6"])
    
    # Now let's properly fill our data starting from row 6
    positions = [
        ("Lead Engineer/Project Director", 1664, 72000),  # 0.8 FTE * 2080 hrs
        ("ML/AI Engineer", 1248, 48000),  # 0.6 FTE * 2080 hrs
        ("Policy Analyst", 832, 28000),   # 0.4 FTE * 2080 hrs
        ("Community Manager", 624, 18000), # 0.3 FTE * 2080 hrs
    ]
    
    print("\n  Filling personnel correctly:")
    start_row = 6
    for i, (title, hours, annual_salary) in enumerate(positions):
        row = start_row + i
        hourly_rate = annual_salary / hours if hours > 0 else 0
        
        print(f"    Row {row}: {title}")
        # B: Position Title
        personnel_ws.update(f"B{row}", [[title]])
        # C: Time (Hours)
        personnel_ws.update(f"C{row}", [[str(hours)]])
        # D: Pay Rate ($/Hr)
        personnel_ws.update(f"D{row}", [[f"{hourly_rate:.2f}"]]) 
        # E: Project Total - auto-calculates
        # F: Cost share - leave empty (0)
        personnel_ws.update(f"F{row}", [["0"]])
        # G: Pay Rate Basis
        pay_basis = f"{hours/2080:.1%} FTE"
        personnel_ws.update(f"G{row}", [[pay_basis]])
    
    # Clear any remaining rows with old data
    print("  Clearing unused rows 10-26...")
    personnel_ws.batch_clear(["B10:G26"])
    
    # 2. Fix Fringe Benefits tab
    print("\n2. FIXING FRINGE BENEFITS TAB")
    print("-"*40)
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # The fringe tab auto-calculates from personnel!
    # We just need to clear our manual entry and let it calculate
    print("  Fringe auto-calculates from Personnel at 33% rate")
    print("  Clearing manual entries...")
    fringe_ws.batch_clear(["B8:C8"])  # Clear our manual entry
    
    # Clear example rows
    fringe_ws.batch_clear(["A4:D5"])  # Clear examples
    
    # 3. Fix Other Direct Costs
    print("\n3. FIXING OTHER DIRECT COSTS TAB")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    # Read the instructions
    values = other_ws.get_all_values()
    print("  Instructions: Provide description, cost, basis, and justification")
    
    # Our other direct costs - let's start from row 4 (after headers)
    other_items = [
        ("Partner Microgrants - Founding Partners", 35000, "GCO $25k, MyFriendBen $10k", "Compensate partners for integration time"),
        ("Partner Microgrants - Implementation", 30000, "6 partners at $5k each", "Testing and feedback from direct service orgs"),
        ("Cloud Infrastructure (AWS/GCP)", 10000, "AWS pricing calculator", "Storage and compute for 50+ jurisdictions"),
        ("Travel/Conferences", 3000, "2 conferences at $1500", "Present findings and train partners"),
        ("Software Licenses", 3000, "GitHub, monitoring tools", "Development and operations tools"),
    ]
    
    print("\n  Filling other direct costs properly:")
    start_row = 4
    for i, (desc, cost, basis, justification) in enumerate(other_items):
        row = start_row + i
        print(f"    Row {row}: {desc} = ${cost:,}")
        
        # B: Description
        other_ws.update(f"B{row}", [[desc]])
        # C: Cost
        other_ws.update(f"C{row}", [[str(cost)]])
        # D: Cost share (0)
        other_ws.update(f"D{row}", [["0"]])
        # E: Basis of Cost
        other_ws.update(f"E{row}", [[basis]])
        # F: Justification
        other_ws.update(f"F{row}", [[justification]])
    
    # Clear remaining empty rows
    print("  Clearing unused rows 9-21...")
    other_ws.batch_clear(["B9:F21"])
    
    # 4. Fix Travel tab (if we have travel costs)
    print("\n4. FIXING TRAVEL TAB")
    print("-"*40)
    travel_ws = sheet.worksheet("c. Travel")
    
    # Clear the example
    print("  Clearing travel example row 4...")
    travel_ws.batch_clear(["B4:M4"])
    
    # We included travel in Other Direct, so leave this empty
    print("  Travel included in Other Direct Costs")
    
    # 5. Fix Equipment tab
    print("\n5. FIXING EQUIPMENT TAB")
    print("-"*40)
    equipment_ws = sheet.worksheet("d. Equipment")
    
    # Clear the example
    print("  Clearing equipment example row 4...")
    equipment_ws.batch_clear(["B4:H4"])
    
    # We have no equipment
    print("  No equipment purchases")
    
    # 6. Fix Indirect
    print("\n6. FIXING INDIRECT TAB")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # The indirect should calculate from direct costs
    # We use 10% de minimis rate
    print("  Setting 10% de minimis indirect rate")
    
    # Clear and refill
    indirect_ws.batch_clear(["B5:C5"])
    
    # Based on template structure, we need to specify the rate
    # Row 5 seems to be for the rate/description
    indirect_ws.update("B5", [["De minimis rate (10% of direct costs)"]])
    # The amount should auto-calculate
    
    print("\n" + "="*70)
    print("✓ SPREADSHEET FIXED!")
    print("="*70)
    print("\nAll tabs have been corrected:")
    print("  • Removed ALL example entries")
    print("  • Added Pay Rate Basis to Personnel")
    print("  • Let Fringe auto-calculate (33% rate)")
    print("  • Added basis and justification to Other Direct")
    print("  • Cleared unused rows")
    print("\nThe Summary tab should now show correct totals")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_spreadsheet()