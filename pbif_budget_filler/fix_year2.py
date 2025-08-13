#!/usr/bin/env python3
"""Fix Year 2 entries in the spreadsheet"""

import pickle
import gspread
from pathlib import Path

def fix_year2():
    """Add Year 2 data to all tabs"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ADDING YEAR 2 DATA")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Personnel Tab - Add Year 2 in columns H-L
    print("\nUpdating Personnel tab with Year 2...")
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Year 2 personnel with 3% raises
    positions_y2 = [
        ("Lead Engineer/Project Director", 1664, 44.57),  # 3% raise
        ("ML/AI Engineer", 1248, 39.61),  
        ("Policy Analyst", 832, 34.66),   
        ("Community Manager", 624, 29.72), 
    ]
    
    for i, (title, hours, rate) in enumerate(positions_y2):
        row = 6 + i
        print(f"  Row {row} Year 2: {title}")
        
        # Column H: Position (same)
        personnel_ws.update(range_name=f"H{row}", values=[[title]])
        # Column I: Hours
        personnel_ws.update(range_name=f"I{row}", values=[[str(hours)]])
        # Column J: Rate
        personnel_ws.update(range_name=f"J{row}", values=[[f"{rate:.2f}"]]) 
        # Column L: Months (0 for now)
        personnel_ws.update(range_name=f"L{row}", values=[["0"]])
        # Column M: FTE %
        fte_pct = f"{hours/2080:.1%} FTE"
        personnel_ws.update(range_name=f"M{row}", values=[[fte_pct]])
    
    print("✓ Personnel Year 2 added")
    
    # Other Direct Costs - Year 2 in columns E-F
    print("\nUpdating Other Direct Costs with Year 2...")
    other_ws = sheet.worksheet("h. Other")
    
    # Year 2 other costs (same as Year 1)
    other_y2 = [
        ("Partner Microgrants - Founding Partners", 35000),
        ("Partner Microgrants - Implementation", 30000),
        ("Cloud Infrastructure (AWS/GCP)", 10000),
        ("Travel/Conferences", 3000),
        ("Software Licenses", 3000),
    ]
    
    for i, (desc, cost) in enumerate(other_y2):
        row = 4 + i
        # Column E: Description (same)
        other_ws.update(range_name=f"E{row}", values=[[desc]])
        # Column F: Cost
        other_ws.update(range_name=f"F{row}", values=[[str(cost)]])
    
    # Set Year 2 total
    other_ws.update(range_name="F22", values=[["81000"]])
    
    print("✓ Other Direct Costs Year 2 added")
    
    # Update Summary tab to show both years
    print("\nUpdating Summary tab totals...")
    summary_ws = sheet.worksheet("Summary")
    
    # Year 2 amounts (with 3% personnel raise)
    personnel_y2 = 171078  # 3% raise
    fringe_y2 = int(personnel_y2 * 0.33)  # 56456
    other_y2 = 81000
    total_direct_y2 = personnel_y2 + fringe_y2 + other_y2
    indirect_y2 = int(total_direct_y2 * 0.10)
    grand_total_y2 = total_direct_y2 + indirect_y2
    
    # Update Year 2 column (C)
    summary_ws.update(range_name="C14", values=[[str(personnel_y2)]])
    summary_ws.update(range_name="C15", values=[[str(fringe_y2)]])
    summary_ws.update(range_name="C20", values=[[str(other_y2)]])
    summary_ws.update(range_name="C21", values=[[str(total_direct_y2)]])
    summary_ws.update(range_name="C22", values=[[str(indirect_y2)]])
    summary_ws.update(range_name="C23", values=[[str(grand_total_y2)]])
    
    print(f"\nYear 1 Total: $331,954")
    print(f"Year 2 Total: ${grand_total_y2:,}")
    print(f"GRAND TOTAL (2 years): ${331954 + grand_total_y2:,}")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_year2()