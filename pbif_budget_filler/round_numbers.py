#!/usr/bin/env python3
"""Use rounder numbers for personnel"""

import pickle
import gspread
from pathlib import Path

def round_numbers():
    """Use rounder numbers for cleaner budget"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("USING ROUNDER NUMBERS FOR CLEANER BUDGET")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Update Personnel with rounder hourly rates
    print("\n1. PERSONNEL - Using rounder rates")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Cleaner, rounder numbers
    # Target: ~$150k, ~$100k, ~$60k, ~$40k = ~$350k total personnel
    positions = [
        {
            "title": "Lead Engineer/Project Director",
            "hours": 3200,  # Rounder than 3328
            "rate": 45.00,  # Rounder than 43.27
            "fte": "80% FTE"
        },
        {
            "title": "ML/AI Engineer",
            "hours": 2400,  # Rounder than 2496
            "rate": 40.00,  # Rounder than 38.46
            "fte": "60% FTE"
        },
        {
            "title": "Policy Analyst",
            "hours": 1600,  # Rounder than 1664
            "rate": 35.00,  # Rounder than 33.65
            "fte": "40% FTE"
        },
        {
            "title": "Community Manager",
            "hours": 1200,  # Rounder than 1248
            "rate": 30.00,  # Rounder than 28.85
            "fte": "30% FTE"
        }
    ]
    
    for i, pos in enumerate(positions):
        row = 6 + i
        expected = pos["hours"] * pos["rate"]
        print(f"  Row {row}: {pos['title']}")
        print(f"    {pos['hours']} hours × ${pos['rate']}/hr = ${expected:,}")
        
        # Update with rounder numbers
        personnel_ws.update(range_name=f"C{row}", values=[[pos["hours"]]], value_input_option='RAW')
        personnel_ws.update(range_name=f"D{row}", values=[[pos["rate"]]], value_input_option='RAW')
        personnel_ws.update(range_name=f"G{row}", values=[[pos["fte"]]])
    
    total_personnel = sum(p["hours"] * p["rate"] for p in positions)
    print(f"\n  Total Personnel: ${total_personnel:,}")
    
    # Update Other Direct Costs with rounder numbers too
    print("\n2. OTHER DIRECT COSTS - Using rounder amounts")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    # Cleaner, rounder amounts
    other_costs = [
        ("Partner Microgrants - Founding Partners", 75000),  # Rounder
        ("Partner Microgrants - Implementation", 60000),     # Already round
        ("Cloud Infrastructure (AWS/GCP)", 20000),          # Already round
        ("Travel and Conferences", 5000),                   # Rounder
        ("Software Licenses and Tools", 5000),              # Rounder
    ]
    
    for i, (desc, cost) in enumerate(other_costs):
        row = 4 + i
        print(f"  Row {row}: {desc} = ${cost:,}")
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        other_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
    
    total_other = sum(cost for _, cost in other_costs)
    print(f"\n  Total Other Direct: ${total_other:,}")
    
    # Calculate expected totals
    print("\n" + "="*70)
    print("EXPECTED BUDGET TOTALS (2 years):")
    print("-"*40)
    
    fringe = int(total_personnel * 0.33)
    total_direct = total_personnel + fringe + total_other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print(f"  Personnel:     ${total_personnel:,}")
    print(f"  Fringe (33%):  ${fringe:,}")
    print(f"  Other Direct:  ${total_other:,}")
    print(f"  Total Direct:  ${total_direct:,}")
    print(f"  Indirect (10%): ${indirect:,}")
    print(f"  GRAND TOTAL:   ${grand_total:,}")
    
    print("\n✓ Complete! Rounder numbers have been entered.")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    round_numbers()