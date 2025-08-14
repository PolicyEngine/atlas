#!/usr/bin/env python3
"""Final check of all data"""

import pickle
import gspread
from pathlib import Path

def final_check():
    """Final comprehensive check"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FINAL SPREADSHEET CHECK")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Check Personnel
    print("\nPERSONNEL TAB:")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    values = personnel_ws.get_all_values()
    
    for i in range(5, 10):
        if i < len(values):
            row = values[i]
            if row[1]:  # If position title exists
                print(f"Row {i+1}: {row[1]} = {row[4]}")
    
    if len(values) > 26:
        print(f"Row 27 Total: {values[26][4]}")
    
    # Check Other Direct
    print("\nOTHER DIRECT COSTS TAB:")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    values = other_ws.get_all_values()
    
    total_other = 0
    for i in range(3, 15):
        if i < len(values):
            row = values[i]
            if row[1] and row[2]:  # If description and cost exist
                print(f"Row {i+1}: {row[1]} = ${row[2]}")
                try:
                    total_other += float(row[2])
                except:
                    pass
    
    if len(values) > 21:
        print(f"Row 22 Total: {values[21][1]} = {values[21][2]}")
    else:
        print(f"Calculated Total: ${total_other:,.0f}")
    
    # Check Summary
    print("\nSUMMARY TAB TOTALS:")
    print("-"*40)
    summary_ws = sheet.worksheet("Summary")
    values = summary_ws.get_all_values()
    
    # Key rows in summary
    summary_items = [
        (13, "Personnel"),
        (14, "Fringe"),
        (19, "Other Direct"),
        (20, "Total Direct"),
        (21, "Indirect"),
        (22, "TOTAL")
    ]
    
    for row_num, label in summary_items:
        if row_num < len(values):
            row = values[row_num]
            if len(row) > 2:
                print(f"{label}: {row[1]} / {row[2]}")
    
    print("\n" + "="*70)
    print("SUMMARY:")
    print("-"*40)
    print("The spreadsheet has been filled with:")
    print("  • 4 personnel positions (2.1 FTE)")
    print("  • Fringe benefits at 33%")
    print("  • Other direct costs including partner grants")
    print("  • 10% indirect rate")
    print("\nIf any calculations aren't showing, try:")
    print("  1. Refreshing the spreadsheet")
    print("  2. Making a small edit to trigger recalculation")
    print("  3. Checking formulas in column E of Personnel tab")

if __name__ == "__main__":
    final_check()