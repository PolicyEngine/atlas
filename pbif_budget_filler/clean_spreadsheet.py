#!/usr/bin/env python3
"""Clean up the spreadsheet by removing example rows"""

import pickle
import gspread
from pathlib import Path

def clean_spreadsheet():
    """Remove example entries from the spreadsheet"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CLEANING SPREADSHEET")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Clean Personnel tab
    print("\nCleaning Personnel tab...")
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Get current values to check for example
    values = personnel_ws.get_all_values()
    
    # Look for the example row (usually row 7)
    for i in range(6, 12):  # Check rows 7-12
        if i < len(values):
            row = values[i]
            if len(row) > 1 and row[1]:
                if "example" in row[1].lower():
                    print(f"  Found example in row {i+1}: '{row[1]}'")
                    # Clear this row
                    personnel_ws.batch_clear([f"B{i+1}:F{i+1}"])
                    print(f"  ✓ Cleared example row {i+1}")
    
    # Check Other tabs for examples
    print("\nChecking Other Direct Costs tab...")
    other_ws = sheet.worksheet("h. Other")
    values = other_ws.get_all_values()
    
    for i in range(4, 12):
        if i < len(values):
            row = values[i]
            if len(row) > 1 and row[1]:
                if "example" in row[1].lower():
                    print(f"  Found example in row {i+1}: '{row[1]}'")
                    other_ws.batch_clear([f"B{i+1}:E{i+1}"])
                    print(f"  ✓ Cleared example row {i+1}")
    
    # Check Fringe tab
    print("\nChecking Fringe Benefits tab...")
    fringe_ws = sheet.worksheet("b. Fringe")
    values = fringe_ws.get_all_values()
    
    for i in range(4, 12):
        if i < len(values):
            row = values[i]
            if len(row) > 1 and row[1]:
                if "example" in row[1].lower():
                    print(f"  Found example in row {i+1}: '{row[1]}'")
                    fringe_ws.batch_clear([f"B{i+1}:D{i+1}"])
                    print(f"  ✓ Cleared example row {i+1}")
    
    print("\n✓ Spreadsheet cleaned!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    clean_spreadsheet()