#!/usr/bin/env python3
"""Final clean fill - ONLY input cells, preserve ALL formulas"""

import pickle
import gspread
from pathlib import Path

def final_clean_fill():
    """Fill ONLY input cells, never touch formula cells"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FINAL CLEAN FILL - PRESERVING ALL FORMULAS")
    print("="*70)
    print("✓ Will ONLY fill data entry cells")
    print("✓ Will NOT touch any formula cells")
    print("✓ Using clean, round numbers")
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. PERSONNEL TAB - Fill only B, C, D, F, G (never E which has formulas)
    print("\n1. PERSONNEL TAB (rows 6-9)")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    positions = [
        ("Lead Engineer/Project Director", 3200, 45.00, "80% FTE"),
        ("ML/AI Engineer", 2400, 40.00, "60% FTE"),
        ("Policy Analyst", 1600, 35.00, "40% FTE"),
        ("Community Manager", 1200, 30.00, "30% FTE"),
    ]
    
    for i, (title, hours, rate, fte) in enumerate(positions):
        row = 6 + i
        print(f"  Row {row}: {title}")
        print(f"    {hours} hrs × ${rate}/hr = ${hours*rate:,}")
        
        # Fill ONLY input cells, use RAW for numbers
        personnel_ws.update(range_name=f"B{row}", values=[[title]])
        personnel_ws.update(range_name=f"C{row}", values=[[hours]], value_input_option='RAW')
        personnel_ws.update(range_name=f"D{row}", values=[[rate]], value_input_option='RAW')
        personnel_ws.update(range_name=f"F{row}", values=[[0]], value_input_option='RAW')
        personnel_ws.update(range_name=f"G{row}", values=[[fte]])
    
    # 2. FRINGE TAB - Just verify rate is set
    print("\n2. FRINGE TAB")
    print("-"*40)
    fringe_ws = sheet.worksheet("b. Fringe")
    # Fringe should auto-calculate from Personnel
    print("  Fringe will auto-calculate at 33% from Personnel")
    
    # 3. OTHER DIRECT COSTS - Fill only B and C in data rows (NOT row 22 which has formula!)
    print("\n3. OTHER DIRECT COSTS TAB (rows 4-8)")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    other_items = [
        ("Partner Microgrants - Founding Partners", 75000),
        ("Partner Microgrants - Implementation", 60000),
        ("Cloud Infrastructure (AWS/GCP)", 20000),
        ("Travel and Conferences", 5000),
        ("Software Licenses and Tools", 5000),
    ]
    
    for i, (desc, cost) in enumerate(other_items):
        row = 4 + i
        print(f"  Row {row}: {desc} = ${cost:,}")
        
        # Fill ONLY the data cells, NOT the total row
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        other_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
    
    print("  Row 22: Total will auto-calculate with =SUM(C4:C21)")
    
    # 4. INDIRECT TAB - Set only the rate
    print("\n4. INDIRECT TAB")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    print("  Setting indirect rate to 10% (de minimis)")
    indirect_ws.update(range_name="B4", values=[[0.10]], value_input_option='RAW')
    
    # DO NOT TOUCH SUMMARY TAB - it should all be formulas
    print("\n5. SUMMARY TAB")
    print("-"*40)
    print("  All cells are formulas - not touching anything!")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nExpected totals (will auto-calculate):")
    print("  Personnel:      $332,000")
    print("  Fringe (33%):   $109,560")
    print("  Other Direct:   $165,000")
    print("  Total Direct:   $606,560")
    print("  Indirect (10%): ~$60,656")
    print("  GRAND TOTAL:    ~$667,216")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    final_clean_fill()