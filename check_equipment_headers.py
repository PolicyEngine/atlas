#!/usr/bin/env python3
"""Check the Equipment tab headers."""

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
ws = sheet.worksheet('d. Equipment')

print("Equipment tab structure:")
print("=" * 80)

# Check rows 1-10
for row_num in range(1, 11):
    row_data = ws.row_values(row_num)
    if any(row_data):  # Only print non-empty rows
        print(f"Row {row_num:2}: {row_data[:8]}")  # First 8 columns

print("\n" + "=" * 80)
print("\nLikely headers (Row 4):")
headers = ws.row_values(4)
for i, header in enumerate(headers[:8]):
    if header:
        col_letter = chr(65 + i)
        print(f"  Column {col_letter}: {header}")