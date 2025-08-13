#!/usr/bin/env python3
"""Analyze contractual tab in detail"""

import pickle
import gspread
from pathlib import Path

def analyze_contractual():
    """Analyze the contractual tab structure"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ANALYZING CONTRACTUAL TAB")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Get all values to understand structure
    all_values = contractual_ws.get_all_values()
    
    print("\nShowing all non-empty rows:")
    for i, row in enumerate(all_values[:30]):  # First 30 rows
        if any(row):  # If row has any content
            # Show row number and first 5 columns
            display_row = row[:5] if len(row) >= 5 else row
            print(f"  Row {i+1}: {display_row}")
            
            # Check for total row
            if any("total" in str(cell).lower() for cell in row):
                print(f"    ^^ TOTAL ROW FOUND")
    
    # Check for formulas in key cells
    print("\n" + "="*70)
    print("Checking for total formula:")
    for row_num in [20, 21, 22, 23]:
        try:
            formula = contractual_ws.acell(f'C{row_num}', value_render_option='FORMULA').value
            value = contractual_ws.acell(f'C{row_num}').value
            print(f"  C{row_num}: Value='{value}', Formula='{formula}'")
        except:
            pass

if __name__ == "__main__":
    analyze_contractual()