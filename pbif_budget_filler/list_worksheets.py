#!/usr/bin/env python3
"""List all worksheets in the PBIF budget spreadsheet."""

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

# List all worksheets
print("Available worksheets:")
for worksheet in sheet.worksheets():
    print(f"  - {worksheet.title}")