#!/usr/bin/env python3
"""Validate and read the current state of the PBIF budget spreadsheet"""

import pickle
import gspread
import sys
from pathlib import Path
from typing import Dict, Any

sys.path.insert(0, str(Path(__file__).parent))


def read_and_validate():
    """Read the current state of the spreadsheet and validate totals"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("="*70)
    print("SPREADSHEET VALIDATION")
    print("="*70)
    print()
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    print(f"Spreadsheet: {sheet.title}")
    print()
    
    # Read Summary tab to see totals
    summary_ws = None
    for ws in sheet.worksheets():
        if "summary" in ws.title.lower():
            summary_ws = ws
            break
    
    if summary_ws:
        print("SUMMARY TAB:")
        print("-"*40)
        values = summary_ws.get_all_values()
        
        # Look for cells with dollar amounts
        for i, row in enumerate(values):
            for j, cell in enumerate(row):
                if "$" in str(cell) and cell != "$0":
                    # Parse the amount
                    try:
                        amount_str = str(cell).replace("$", "").replace(",", "").strip()
                        amount = float(amount_str)
                        if amount > 100:  # Significant amounts only
                            print(f"  Row {i+1}, Col {chr(65+j)}: ${amount:,.0f}")
                    except:
                        pass
    
    # Read Personnel tab
    personnel_ws = None
    for ws in sheet.worksheets():
        if "personnel" in ws.title.lower() or ws.title == "a. Personnel":
            personnel_ws = ws
            break
    
    if personnel_ws:
        print("\nPERSONNEL TAB:")
        print("-"*40)
        values = personnel_ws.get_all_values()
        
        # Find filled rows
        for i in range(7, min(20, len(values))):  # Check rows 8-20
            row = values[i]
            if len(row) > 4:
                # Check if position is filled (column B)
                if row[1] and row[1].strip() and "example" not in row[1].lower():
                    print(f"  Row {i+1}: Position={row[1]}, Hours={row[2]}, Rate={row[3]}, Total={row[4]}")
    
    # Read Other Direct Costs
    other_ws = None
    for ws in sheet.worksheets():
        if ws.title == "h. Other" or "other" in ws.title.lower():
            other_ws = ws
            break
    
    if other_ws:
        print("\nOTHER DIRECT COSTS TAB:")
        print("-"*40)
        values = other_ws.get_all_values()
        
        # Find filled rows
        for i in range(5, min(15, len(values))):
            row = values[i]
            if len(row) > 2:
                # Check if description is filled (column B)
                if row[1] and row[1].strip():
                    print(f"  Row {i+1}: {row[1]} = ${row[2] if row[2] else '0'}")
    
    # Read Fringe
    fringe_ws = None
    for ws in sheet.worksheets():
        if "fringe" in ws.title.lower() or ws.title == "b. Fringe":
            fringe_ws = ws
            break
    
    if fringe_ws:
        print("\nFRINGE TAB:")
        print("-"*40)
        values = fringe_ws.get_all_values()
        
        for i in range(7, min(15, len(values))):
            row = values[i]
            if len(row) > 2:
                if row[1] and row[1].strip():
                    print(f"  Row {i+1}: {row[1]} = ${row[2] if row[2] else '0'}")
    
    # Calculate what we expect
    print("\n" + "="*70)
    print("EXPECTED TOTALS (from our calculations):")
    print("-"*40)
    
    # Personnel
    personnel_salaries = 67500 + 40000 + 17500  # 125,000
    personnel_benefits = personnel_salaries * 0.25  # 31,250
    personnel_total = personnel_salaries + personnel_benefits  # 156,250
    
    # Other direct
    other_direct = 60000 + 10000 + 2000 + 3000  # 75,000
    
    # Direct total
    direct_total = personnel_total + other_direct  # 231,250
    
    # Indirect (10%)
    indirect = direct_total * 0.10  # 23,125
    
    # Grand total
    grand_total = direct_total + indirect  # 254,375 for Year 1
    
    print(f"  Personnel (salaries): ${personnel_salaries:,}")
    print(f"  Personnel (benefits): ${personnel_benefits:,.0f}")
    print(f"  Personnel Total: ${personnel_total:,.0f}")
    print(f"  Other Direct: ${other_direct:,}")
    print(f"  Direct Total: ${direct_total:,.0f}")
    print(f"  Indirect (10%): ${indirect:,.0f}")
    print(f"  YEAR 1 TOTAL: ${grand_total:,.0f}")
    
    print("\n" + "="*70)
    print("RECOMMENDATIONS:")
    print("-"*40)
    
    print("1. Check if Summary tab is auto-calculating correctly")
    print("2. Verify Personnel totals are summing properly")
    print("3. Make sure Indirect is calculating at 10%")
    print("4. If we need to reach $600k, we can:")
    print("   - Increase FTEs (currently 1.5 total)")
    print("   - Add more partner microgrants")
    print("   - Include equipment or contractual costs")
    print("   - Increase indirect rate if allowed")


if __name__ == "__main__":
    read_and_validate()