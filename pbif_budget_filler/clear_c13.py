#!/usr/bin/env python3
"""Clear the hard-coded value from C13 - the total is already in C22."""

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
other_ws = sheet.worksheet('h. Other')

print("Clearing C13 in Other Direct Costs...")
print("-" * 40)

# Clear C13 (remove the hard-coded value)
other_ws.update('C13', [['']])
print("Cleared C13 (removed hard-coded value)")

print()
print("Fixed! C13 is now empty.")
print("The actual total formula is in C22 where it belongs.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")