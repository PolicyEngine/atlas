#!/usr/bin/env python3
"""Check the actual headers in the Travel tab."""

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

print("Travel tab headers (Row 3):")
print("=" * 80)
headers = ws.row_values(3)
for i, header in enumerate(headers):
    if header:  # Only print non-empty headers
        col_letter = chr(65 + i)
        print(f"  Column {col_letter}: {header}")

print("\n" + "=" * 80)
print("\nCurrent data (Rows 5-7):")
for row_num in range(5, 8):
    row_data = ws.row_values(row_num)
    print(f"Row {row_num}: {row_data[:10]}")  # First 10 columns