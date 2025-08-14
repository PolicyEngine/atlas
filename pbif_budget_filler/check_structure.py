#!/usr/bin/env python3
"""Check the structure of the spreadsheet to understand Year 2 placement"""

import pickle
import gspread
from pathlib import Path

def check_structure():
    """Check spreadsheet structure"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING SPREADSHEET STRUCTURE")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # Check Personnel tab headers
    print("\nPersonnel Tab Structure:")
    personnel_ws = sheet.worksheet("a. Personnel")
    headers = personnel_ws.row_values(5)  # Row 5 has headers
    print(f"  Columns available: {len(headers)}")
    print(f"  Headers: {headers}")
    
    # Check if there are Year 2 rows below Year 1
    print("\nChecking rows 10-15 for Year 2 section...")
    for row in range(10, 16):
        values = personnel_ws.row_values(row)
        if values and any(values):
            print(f"  Row {row}: {values[:3]}")
    
    # Check Other Direct tab
    print("\nOther Direct Costs Tab Structure:")
    other_ws = sheet.worksheet("h. Other")
    headers = other_ws.row_values(3)
    print(f"  Columns available: {len(headers)}")
    print(f"  Headers: {headers}")
    
    # Check for Year 2 section
    print("\nChecking rows 10-15 for Year 2 section...")
    for row in range(10, 16):
        values = other_ws.row_values(row)
        if values and len(values) > 1 and any(values):
            print(f"  Row {row}: {values[:3]}")
    
    # Check Summary tab
    print("\nSummary Tab Structure:")
    summary_ws = sheet.worksheet("Summary")
    print("  Checking column headers...")
    row13 = summary_ws.row_values(13)
    if len(row13) > 2:
        print(f"  Row 13 (headers): A='{row13[0]}', B='{row13[1]}', C='{row13[2] if len(row13) > 2 else ''}'")
    
    print("\n" + "="*70)
    print("INSIGHT: Year 2 data should likely go in:")
    print("  • Personnel: Rows below Year 1 entries (after row 9)")
    print("  • Other Direct: Rows below Year 1 entries")
    print("  • Summary: Column C is for Year 2, Column B for Year 1")

if __name__ == "__main__":
    check_structure()