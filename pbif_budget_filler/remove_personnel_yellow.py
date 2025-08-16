#!/usr/bin/env python3
"""Remove yellow highlighting from specific Personnel Pay Rate Basis cells only."""

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
print("REMOVING YELLOW FROM PERSONNEL PAY RATE BASIS CELLS")
print("="*60)
print()

# Target the specific yellow cells visible in the screenshot
ws = sheet.worksheet('a. Personnel')

# Format to remove yellow (set to no background/white)
white_background = {
    "backgroundColor": {
        "red": 1.0,
        "green": 1.0,
        "blue": 1.0
    }
}

# Only target the cells that are actually yellow (F4:F7 in Pay Rate Basis column)
yellow_cells = ['F4', 'F5', 'F6', 'F7']

print(f"Removing yellow highlighting from Personnel tab...")
for cell_ref in yellow_cells:
    value = ws.acell(cell_ref).value
    ws.format(cell_ref, white_background)
    print(f"  ✓ Cleared yellow from {cell_ref}: {value}")
    time.sleep(0.5)

print()
print("="*60)
print("DONE!")
print("="*60)
print()
print("Removed yellow highlighting from Pay Rate Basis cells (F4:F7) only.")
print("All other formatting preserved.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")