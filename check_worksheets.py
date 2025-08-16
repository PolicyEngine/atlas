#!/usr/bin/env python3
"""Check the actual worksheet names in the spreadsheet."""

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
worksheets = sheet.worksheets()

print("Worksheet names in the spreadsheet:")
print("-" * 40)
for i, ws in enumerate(worksheets):
    print(f"{i+1}. '{ws.title}'")
print("-" * 40)
print(f"Total worksheets: {len(worksheets)}")