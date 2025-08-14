#!/usr/bin/env python3
"""Rebalance budget - reduce personnel, increase AI tools"""

import pickle
import gspread
from pathlib import Path

def rebalance_budget():
    """Move budget from personnel to AI coding tools"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("REBALANCING BUDGET - Personnel → AI Tools")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. REDUCE PERSONNEL HOURS/RATES
    print("\n1. REDUCING PERSONNEL COSTS")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Reduce hours slightly to free up budget
    positions = [
        ("Lead Engineer/Project Director", 2800, 45.00, "70% FTE"),  # was 3200
        ("ML/AI Engineer", 2000, 40.00, "50% FTE"),                  # was 2400
        ("Policy Analyst", 1400, 35.00, "35% FTE"),                  # was 1600
        ("Community Manager", 1000, 30.00, "25% FTE"),               # was 1200
    ]
    
    total_personnel = 0
    for i, (title, hours, rate, fte) in enumerate(positions):
        row = 6 + i
        cost = hours * rate
        total_personnel += cost
        print(f"  Row {row}: {title}")
        print(f"    {hours} hrs × ${rate}/hr = ${cost:,}")
        
        # Update only the changing cells
        personnel_ws.update(range_name=f"C{row}", values=[[hours]], value_input_option='RAW')
        personnel_ws.update(range_name=f"G{row}", values=[[fte]])
    
    print(f"\n  New Personnel Total: ${total_personnel:,}")
    print(f"  Savings: ${332000 - total_personnel:,}")
    
    # 2. INCREASE AI TOOLS BUDGET
    print("\n2. INCREASING AI TOOLS & SOFTWARE")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    # Add more to AI tools and software
    other_items = [
        ("Partner Microgrants - Founding Partners", 75000),          # same
        ("Partner Microgrants - Implementation", 60000),             # same
        ("Cloud Infrastructure (AWS/GCP)", 20000),                   # same
        ("AI Coding Tools (Claude, GPT-4, Copilot)", 30000),        # NEW - was part of software
        ("Software Licenses and Development Tools", 10000),          # increased from 5000
    ]
    
    # Clear existing rows first
    other_ws.batch_clear(["B4:C8"])
    
    total_other = 0
    for i, (desc, cost) in enumerate(other_items):
        row = 4 + i
        total_other += cost
        print(f"  Row {row}: {desc} = ${cost:,}")
        
        other_ws.update(range_name=f"B{row}", values=[[desc]])
        other_ws.update(range_name=f"C{row}", values=[[cost]], value_input_option='RAW')
    
    print(f"\n  New Other Direct Total: ${total_other:,}")
    print(f"  Increase: ${total_other - 165000:,}")
    
    # Calculate new totals
    print("\n" + "="*70)
    print("NEW BUDGET TOTALS (2 years):")
    print("-"*40)
    
    fringe = int(total_personnel * 0.33)
    total_direct = total_personnel + fringe + total_other
    indirect = int(total_direct * 0.10)
    grand_total = total_direct + indirect
    
    print(f"  Personnel:      ${total_personnel:,} (reduced)")
    print(f"  Fringe (33%):   ${fringe:,}")
    print(f"  Other Direct:   ${total_other:,} (increased)")
    print(f"  Total Direct:   ${total_direct:,}")
    print(f"  Indirect (10%): ${indirect:,}")
    print(f"  GRAND TOTAL:    ${grand_total:,}")
    
    print("\n✓ Budget rebalanced to emphasize AI tools!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    rebalance_budget()