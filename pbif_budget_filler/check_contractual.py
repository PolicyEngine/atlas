#!/usr/bin/env python3
"""Check contractual tab structure"""

import pickle
import gspread
from pathlib import Path

def check_contractual():
    """Check the structure of contractual tab"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING CONTRACTUAL TAB STRUCTURE")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    contractual_ws = sheet.worksheet("f. Contractual")
    
    # Get headers
    headers = contractual_ws.row_values(3)
    print(f"\nHeaders (row 3): {headers}")
    
    # Check dimensions
    print(f"\nTab dimensions: {contractual_ws.row_count} rows x {contractual_ws.col_count} columns")
    
    # Get first few rows
    print("\nFirst 5 rows:")
    for i in range(5):
        row = contractual_ws.row_values(i+1)
        if row:
            print(f"  Row {i+1}: {row[:5] if len(row) > 5 else row}")

if __name__ == "__main__":
    check_contractual()