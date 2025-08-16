#!/usr/bin/env python3
"""Check the current structure of the Contractual worksheet."""

import pickle
import gspread
from pathlib import Path

# Load credentials
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

client = gspread.authorize(creds)

# Open the spreadsheet
sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
worksheet = sheet.worksheet('f. Contractual')

# Get all values
all_values = worksheet.get_all_values()

# Print first 30 rows to understand structure
print("First 30 rows of Contractual worksheet:")
print("-" * 80)
for i, row in enumerate(all_values[:30]):
    if any(cell for cell in row):  # Only print non-empty rows
        # Print row number and first 5 columns
        print(f"Row {i+1}: {row[:5]}")
        if len([c for c in row if c]) > 5:
            print(f"        ...and {len([c for c in row if c]) - 5} more non-empty cells")