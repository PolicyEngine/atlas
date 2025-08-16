#!/usr/bin/env python3
"""Fix formatting in Other Direct Costs - format C7/C8 like C4-C6 and ensure C13 has formula."""

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

print("Fixing Other Direct Costs formatting...")
print("-" * 40)

# Format C7 and C8 to match C4-C6 (currency format with $ symbol)
# First, let's check what format C4 has
cell_c4 = other_ws.acell('C4')
print(f"C4 format reference: {cell_c4.value}")

# Apply currency formatting to C7 and C8
other_ws.format('C7:C8', {
    "numberFormat": {
        "type": "CURRENCY",
        "pattern": "$#,##0"
    }
})
print("Applied currency formatting to C7:C8")

# Ensure C13 has the SUM formula (not a hard-coded value)
other_ws.update('C13', [['=SUM(C4:C12)']], value_input_option='USER_ENTERED')
print("Restored SUM formula in C13")

print()
print("Formatting fixed!")
print("- C7 and C8 now have currency formatting like C4-C6")
print("- C13 now has =SUM(C4:C12) formula")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")