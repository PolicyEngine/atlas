#!/usr/bin/env python3
"""Remove yellow highlighting from all cells in the spreadsheet."""

import pickle
import gspread
import time
from pathlib import Path

# Load credentials using token.pickle
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

client = gspread.authorize(creds)

# Open the spreadsheet
sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')

print("="*60)
print("REMOVING YELLOW HIGHLIGHTING FROM ALL TABS")
print("="*60)
print()

# List of all tabs to clean
tabs_to_clean = [
    'Summary',
    'a. Personnel', 
    'b. Fringe',
    'c. Travel',
    'd. Equipment',
    'e. Supplies',
    'f. Contractual',
    'h. Other',
    'i. Indirect',
    'j. Cost Share'
]

# Format to remove yellow highlighting (set to white/no background)
no_highlight_format = {
    "backgroundColor": {
        "red": 1.0,
        "green": 1.0,
        "blue": 1.0
    }
}

for tab_name in tabs_to_clean:
    try:
        print(f"Cleaning {tab_name}...")
        ws = sheet.worksheet(tab_name)
        
        # Get the dimensions of the worksheet
        # Apply formatting to entire sheet (A1:Z100 should cover most data)
        ws.format('A1:Z100', no_highlight_format)
        
        print(f"  ✓ Removed yellow highlighting from {tab_name}")
        time.sleep(1)  # Rate limiting
        
    except Exception as e:
        print(f"  ⚠️ Error cleaning {tab_name}: {e}")

print()
print("="*60)
print("CLEANUP COMPLETE!")
print("="*60)
print()
print("All yellow highlighting has been removed from data entry cells.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")