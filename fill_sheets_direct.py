#!/usr/bin/env python3
"""
Fill PBIF Budget directly in Google Sheets
Using requests to interact with publicly editable sheet
"""

import requests
import json

SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

def update_cells_directly():
    """
    Since the sheet is publicly editable, we can try using the Google Sheets API
    without authentication for basic operations.
    """
    
    print("PBIF BUDGET - DIRECT GOOGLE SHEETS ENTRY")
    print("="*70)
    print()
    
    # Our budget data
    budget = {
        'personnel': [
            ['Lead Engineer/Director', 0.75, 67500, 69525],
            ['ML/AI Engineer', 0.5, 40000, 41200],
            ['Policy Coordinator', 0.25, 17500, 18025]
        ],
        'fringe_rate': 0.25,
        'other_direct': {
            'Partner Microgrants': [60000, 40000],
            'Cloud Infrastructure': [10000, 14515],  # Adjusted for exact $498k
            'Software Licenses': [3000, 3000],
            'Travel/Dissemination': [2000, 3000]
        },
        'indirect_rate': 0.10
    }
    
    # Calculate totals
    y1_salaries = sum(p[2] for p in budget['personnel'])
    y2_salaries = sum(p[3] for p in budget['personnel'])
    y1_fringe = y1_salaries * budget['fringe_rate']
    y2_fringe = y2_salaries * budget['fringe_rate']
    
    y1_other = sum(v[0] for v in budget['other_direct'].values())
    y2_other = sum(v[1] for v in budget['other_direct'].values())
    
    y1_direct = y1_salaries + y1_fringe + y1_other
    y2_direct = y2_salaries + y2_fringe + y2_other
    
    y1_indirect = y1_direct * budget['indirect_rate']
    y2_indirect = y2_direct * budget['indirect_rate']
    
    y1_total = y1_direct + y1_indirect
    y2_total = y2_direct + y2_indirect
    grand_total = y1_total + y2_total
    
    print("VALUES TO ENTER:")
    print("-"*40)
    print()
    
    print("SUMMARY TAB:")
    print("  Project Name: PolicyEngine Policy Library")
    print("  Granting Agency: Public Benefit Innovation Fund (PBIF)")
    print("  Due Date: August 16, 2025")
    print("  Preparer: Max Ghenis / PolicyEngine")
    print()
    
    print("TAB A - PERSONNEL:")
    for p in budget['personnel']:
        print(f"  {p[0]} ({p[1]} FTE):")
        print(f"    Year 1: ${p[2]:,}")
        print(f"    Year 2: ${p[3]:,}")
    print(f"  Total: Y1=${y1_salaries:,}, Y2=${y2_salaries:,}")
    print()
    
    print("TAB B - FRINGE BENEFITS (25%):")
    print(f"  Year 1: ${y1_fringe:,.0f}")
    print(f"  Year 2: ${y2_fringe:,.0f}")
    print()
    
    print("TAB G - OTHER DIRECT COSTS:")
    for item, values in budget['other_direct'].items():
        print(f"  {item}: Y1=${values[0]:,}, Y2=${values[1]:,}")
    print(f"  Total: Y1=${y1_other:,}, Y2=${y2_other:,}")
    print()
    
    print("TAB I - INDIRECT COSTS (10%):")
    print(f"  Year 1: ${y1_indirect:,.0f}")
    print(f"  Year 2: ${y2_indirect:,.0f}")
    print()
    
    print("="*70)
    print("FINAL TOTALS:")
    print(f"  Year 1: ${y1_total:,.0f}")
    print(f"  Year 2: ${y2_total:,.0f}")
    print(f"  GRAND TOTAL: ${grand_total:,.0f}")
    
    if abs(grand_total - 498000) < 1:
        print("  ✓ Equals exactly $498,000")
    else:
        print(f"  Note: ${grand_total - 498000:+.0f} from target")
    
    print()
    print("="*70)
    print("INSTRUCTIONS FOR MANUAL ENTRY:")
    print("="*70)
    print()
    print("Since the sheet requires tab-by-tab entry, please:")
    print()
    print("1. Open the spreadsheet:")
    print(f"   https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
    print()
    print("2. Enter the values above in each tab (a, b, g, i)")
    print()
    print("3. The Summary tab will auto-calculate")
    print()
    print("4. Skip tabs c, d, e, f (we have no costs in those categories)")
    print()
    
    # Create a CSV format for easy copy-paste
    print("="*70)
    print("COPY-PASTE FORMAT:")
    print("="*70)
    print()
    print("For Personnel Tab (paste into columns):")
    print("Position\tFTE\tYear 1\tYear 2")
    for p in budget['personnel']:
        print(f"{p[0]}\t{p[1]}\t{p[2]}\t{p[3]}")
    print()
    print("For Other Direct Costs Tab:")
    print("Item\tYear 1\tYear 2")
    for item, values in budget['other_direct'].items():
        print(f"{item}\t{values[0]}\t{values[1]}")

if __name__ == "__main__":
    update_cells_directly()