#!/usr/bin/env python3
"""Check the total in Summary B23."""

import pickle
import gspread
from pathlib import Path

def get_client():
    """Initialize gspread client."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    return gspread.authorize(creds)

def main():
    client = get_client()
    sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
    
    # Check Summary tab B23
    ws = sheet.worksheet('Summary')
    total = ws.acell('C23').value
    
    print(f"TOTAL BUDGET (Summary C23): {total}")
    
    # Also check the component values
    print("\nBreakdown:")
    print(f"  Personnel (C14): {ws.acell('C14').value}")
    print(f"  Fringe (C15): {ws.acell('C15').value}")
    print(f"  Travel (C16): {ws.acell('C16').value}")
    print(f"  Equipment (C17): {ws.acell('C17').value}")
    print(f"  Contractual (C19): {ws.acell('C19').value}")
    print(f"  Other Direct (C20): {ws.acell('C20').value}")
    print(f"  Indirect (C22): {ws.acell('C22').value}")

if __name__ == "__main__":
    main()