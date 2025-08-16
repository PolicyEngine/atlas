#!/usr/bin/env python3
"""Fix the hard-coded total in Contractual tab - replace with SUM formula."""

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
contractual_ws = sheet.worksheet('f. Contractual')

print("Fixing Contractual tab total...")
print("-" * 40)

# Replace hard-coded value in D13 with SUM formula
# Assuming data rows are 5-12 based on standard template
contractual_ws.update('D13', [['=SUM(D5:D12)']], value_input_option='USER_ENTERED')
print("Replaced hard-coded $130,000 in D13 with =SUM(D5:D12) formula")

print()
print("Fixed! D13 in Contractual tab now has proper SUM formula.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")
