#!/usr/bin/env python3
"""Clean fill - only update input cells, preserve all formulas"""

import pickle
import gspread
from pathlib import Path

def clean_fill():
    """Fill only the input cells, let formulas calculate"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CLEAN FILL - PRESERVING ALL FORMULAS")
    print("="*70)
    print("\nThis script will ONLY fill input cells.")
    print("All formulas will be preserved to auto-calculate totals.")
    print("\nTarget: ~$600k budget over 2 years")
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # PERSONNEL TAB - Only fill input cells (B, C, D, F, G)
    print("\n1. PERSONNEL TAB")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # For 2-year budget, we enter annual hours x2 
    # But keep rates per hour
    positions = [
        {
            "title": "Lead Engineer/Project Director",
            "annual_hours": 1664,  # 0.8 FTE
            "hourly_rate": 43.27,
            "months": 0,  # Not using months column
            "fte_desc": "80% FTE"
        },
        {
            "title": "ML/AI Engineer", 
            "annual_hours": 1248,  # 0.6 FTE
            "hourly_rate": 38.46,
            "months": 0,
            "fte_desc": "60% FTE"
        },
        {
            "title": "Policy Analyst",
            "annual_hours": 832,  # 0.4 FTE
            "hourly_rate": 33.65,
            "months": 0,
            "fte_desc": "40% FTE"
        },
        {
            "title": "Community Manager",
            "annual_hours": 624,  # 0.3 FTE
            "hourly_rate": 28.85,
            "months": 0,
            "fte_desc": "30% FTE"
        }
    ]
    
    print("Filling personnel (rows 6-9):")
    for i, pos in enumerate(positions):
        row = 6 + i
        
        # For 2-year budget, double the hours
        total_hours = pos["annual_hours"] * 2
        
        print(f"  Row {row}: {pos['title']}")
        print(f"    Hours: {total_hours} (2 years), Rate: ${pos['hourly_rate']}/hr")
        
        # B: Position Title
        personnel_ws.update(range_name=f"B{row}", values=[[pos["title"]]])
        # C: Hours 
        personnel_ws.update(range_name=f"C{row}", values=[[str(total_hours)]])
        # D: Rate
        personnel_ws.update(range_name=f"D{row}", values=[[str(pos["hourly_rate"])]])
        # F: Months (leave as 0)
        personnel_ws.update(range_name=f"F{row}", values=[["0"]])
        # G: FTE Description
        personnel_ws.update(range_name=f"G{row}", values=[[pos["fte_desc"]]])
    
    # FRINGE TAB - Only set the rate if needed
    print("\n2. FRINGE TAB")
    print("-"*40)
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Check if rate is set correctly in B3
    current_rate = fringe_ws.acell('B3').value
    print(f"  Current fringe rate: {current_rate}")
    
    # The fringe formulas should auto-calculate from Personnel
    
    # OTHER DIRECT COSTS TAB - Fill input cells (B, C)
    print("\n3. OTHER DIRECT COSTS TAB")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    other_costs = [
        ("Partner Microgrants - Founding Partners", 70000),  # 2-year total
        ("Partner Microgrants - Implementation", 60000),     # 2-year total
        ("Cloud Infrastructure (AWS/GCP)", 20000),          # 2-year total
        ("Travel and Conferences", 6000),                   # 2-year total
        ("Software Licenses and Tools", 6000),              # 2-year total
    ]
    
    print("Filling other direct costs (rows 4-8):")
    for i, (desc, cost) in enumerate(other_costs):
        row = 4 + i
        print(f"  Row {row}: {desc} = ${cost:,}")
        
        # B: Description
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        # C: Cost
        other_ws.update(range_name=f"C{row}", values=[[str(cost)]])
    
    # INDIRECT TAB - Set the rate
    print("\n4. INDIRECT TAB")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    print("  Setting indirect rate to 10% (de minimis)...")
    indirect_ws.update(range_name="B4", values=[["0.10"]])
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nAll input cells have been filled.")
    print("The spreadsheet formulas will auto-calculate:")
    print("  • Personnel total: ~$332k")
    print("  • Fringe (33%): ~$110k")  
    print("  • Other direct: $162k")
    print("  • Indirect (10%): ~$60k")
    print("  • EXPECTED TOTAL: ~$664k")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
    print("\nNote: If formulas show #VALUE! or don't calculate,")
    print("try making a small edit to trigger recalculation.")

if __name__ == "__main__":
    clean_fill()