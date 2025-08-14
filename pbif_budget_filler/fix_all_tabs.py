#!/usr/bin/env python3
"""Fix all tabs including Fringe"""

import pickle
import gspread
from pathlib import Path

def fix_all_tabs():
    """Fix all tabs to show proper totals"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING ALL TABS FOR 2-YEAR BUDGET")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # First check Fringe tab
    print("\nChecking Fringe tab...")
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Get all values to see what's there
    all_values = fringe_ws.get_all_values()
    print("Fringe tab rows 1-10:")
    for i in range(min(10, len(all_values))):
        if all_values[i] and any(all_values[i]):
            print(f"  Row {i+1}: {all_values[i][:4]}")
    
    # Clear any messy data in Fringe
    print("\nCleaning Fringe tab...")
    fringe_ws.batch_clear(["A4:C10"])  # Clear any manual entries
    
    # The fringe should auto-calculate from Personnel
    # Just ensure the rate is set correctly
    fringe_rate = fringe_ws.acell('B3').value
    print(f"  Fringe rate in B3: {fringe_rate}")
    
    if fringe_rate != "0.33":
        print("  Setting fringe rate to 0.33 (33%)...")
        fringe_ws.update(range_name="B3", values=[["0.33"]])
    
    # Now double the personnel entries for 2-year budget
    print("\nDoubling Personnel entries for 2-year budget...")
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Update hours to reflect 2 years
    positions_2yr = [
        ("Lead Engineer/Project Director", 3328, 43.27),  # 1664 * 2 hours
        ("ML/AI Engineer", 2496, 38.46),  # 1248 * 2
        ("Policy Analyst", 1664, 33.65),   # 832 * 2
        ("Community Manager", 1248, 28.85), # 624 * 2
    ]
    
    for i, (title, hours, rate) in enumerate(positions_2yr):
        row = 6 + i
        print(f"  Updating row {row}: {title} to {hours} hours")
        
        # Update hours (column C)
        personnel_ws.update(range_name=f"C{row}", values=[[str(hours)]])
        # FTE stays same per year but description changes
        fte_pct = f"{hours/4160:.1%} FTE over 2 years"
        personnel_ws.update(range_name=f"G{row}", values=[[fte_pct]])
    
    print("✓ Personnel updated for 2 years")
    
    # Double Other Direct Costs for 2 years
    print("\nDoubling Other Direct Costs for 2-year budget...")
    other_ws = sheet.worksheet("h. Other")
    
    other_2yr = [
        ("Partner Microgrants - Founding Partners (2 yr)", 70000),  # 35000 * 2
        ("Partner Microgrants - Implementation (2 yr)", 60000),     # 30000 * 2
        ("Cloud Infrastructure (AWS/GCP) (2 yr)", 20000),          # 10000 * 2
        ("Travel/Conferences (2 yr)", 6000),                       # 3000 * 2
        ("Software Licenses (2 yr)", 6000),                        # 3000 * 2
    ]
    
    for i, (desc, cost) in enumerate(other_2yr):
        row = 4 + i
        # Update description and cost
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        other_ws.update(range_name=f"C{row}", values=[[str(cost)]])
    
    # Update total
    total_other = sum(cost for _, cost in other_2yr)
    other_ws.update(range_name="C22", values=[[str(total_other)]])
    
    print(f"✓ Other Direct Costs updated to ${total_other:,} for 2 years")
    
    # Update Summary tab
    print("\nUpdating Summary tab for 2-year totals...")
    summary_ws = sheet.worksheet("Summary")
    
    # Calculate 2-year totals
    personnel_2yr = 331996  # Sum of all 2-year personnel
    fringe_2yr = int(personnel_2yr * 0.33)
    other_2yr = total_other
    
    total_direct = personnel_2yr + fringe_2yr + other_2yr
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    # Update both columns B and C with same 2-year totals
    for col in ["B", "C"]:
        summary_ws.update(range_name=f"{col}14", values=[[str(personnel_2yr)]])
        summary_ws.update(range_name=f"{col}15", values=[[str(fringe_2yr)]])
        summary_ws.update(range_name=f"{col}20", values=[[str(other_2yr)]])
        summary_ws.update(range_name=f"{col}21", values=[[str(total_direct)]])
        summary_ws.update(range_name=f"{col}22", values=[[str(indirect)]])
        summary_ws.update(range_name=f"{col}23", values=[[str(grand_total)]])
    
    print(f"\n2-YEAR BUDGET TOTALS:")
    print(f"  Personnel: ${personnel_2yr:,}")
    print(f"  Fringe (33%): ${fringe_2yr:,}")
    print(f"  Other Direct: ${other_2yr:,}")
    print(f"  Total Direct: ${total_direct:,}")
    print(f"  Indirect (10%): ${indirect:,}")
    print(f"  GRAND TOTAL: ${grand_total:,}")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print(f"\nThe spreadsheet now shows a 2-year total budget of ${grand_total:,}")
    print(f"View spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_all_tabs()