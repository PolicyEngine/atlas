#!/usr/bin/env python3
"""Inspect the Travel tab to see what data is in each column."""

import pickle
import gspread
from pathlib import Path

# Load credentials
token_path = Path(__file__).parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

client = gspread.authorize(creds)
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

sheet = client.open_by_key(SPREADSHEET_ID)
ws = sheet.worksheet('c. Travel')

# Get the first 10 rows to see the structure
data = ws.get('A1:H10')

print("Travel tab structure (first 10 rows):")
print("=" * 80)
for i, row in enumerate(data, 1):
    # Pad row to 8 columns if shorter
    while len(row) < 8:
        row.append('')
    
    print(f"Row {i:2}: ", end="")
    for j, cell in enumerate(row):
        col_letter = chr(65 + j)  # A, B, C, etc.
        if cell:
            # Truncate long values
            display = cell[:15] + "..." if len(cell) > 15 else cell
            print(f"[{col_letter}: {display}] ", end="")
    print()

print("\n" + "=" * 80)
print("\nColumn headers (Row 4):")
headers = ws.row_values(4)
for i, header in enumerate(headers):
    col_letter = chr(65 + i)
    print(f"  Column {col_letter}: {header}")