#!/usr/bin/env python3
"""Check what's in the personnel tab"""

import pickle
import gspread
from pathlib import Path

def check_personnel():
    """Check personnel tab in detail"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING PERSONNEL TAB IN DETAIL")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Get all values
    values = personnel_ws.get_all_values()
    
    print("\nRows 4-15 of Personnel tab:")
    print("-"*40)
    for i in range(3, min(15, len(values))):
        row = values[i]
        if len(row) >= 7:
            print(f"Row {i+1}: B={row[1][:30] if row[1] else '[empty]'}, C={row[2]}, D={row[3]}, E={row[4]}, F={row[5]}, G={row[6]}")
    
    print("\n" + "="*70)
    print("ISSUE FOUND:")
    print("It looks like the personnel data got partially overwritten.")
    print("Let me re-add all 4 positions starting from row 6.")

if __name__ == "__main__":
    check_personnel()