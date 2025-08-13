#!/usr/bin/env python3
"""Check available tabs in the spreadsheet"""

import pickle
import gspread
from pathlib import Path

def check_tabs():
    """List all available tabs"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING AVAILABLE TABS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # List all worksheets
    worksheets = sheet.worksheets()
    
    print("\nAvailable tabs:")
    for i, ws in enumerate(worksheets):
        print(f"  {i+1}. {ws.title}")
    
    print("\n" + "="*70)
    print(f"Total tabs: {len(worksheets)}")

if __name__ == "__main__":
    check_tabs()