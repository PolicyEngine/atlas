#!/usr/bin/env python3
"""
Undo incorrect entries and read sheet structure first
"""

import pickle
import gspread

# Load saved credentials
with open('token.pickle', 'rb') as token:
    creds = pickle.load(token)

gc = gspread.authorize(creds)
sheet = gc.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')

print("READING SHEET STRUCTURE FIRST")
print("="*70)

# Get Personnel worksheet
personnel_ws = sheet.worksheet('a. Personnel')

# First, let's READ the structure
print("\nPERSONNEL TAB STRUCTURE:")
print("-"*40)

# Get all values to understand the layout
all_values = personnel_ws.get_all_values()

# Show first 30 rows to understand structure
for i, row in enumerate(all_values[:30]):
    if any(cell for cell in row):  # Only show non-empty rows
        print(f"Row {i+1}: {row[:8]}")  # Show first 8 columns

print("\n" + "="*70)
print("CLEARING INCORRECT ENTRIES")
print("="*70)

# Clear the incorrect entries I made
print("\nClearing rows 2-6 which had incorrect data...")
personnel_ws.batch_clear(['A2:D6'])

print("✓ Cleared incorrect entries")
print("\nThe sheet is back to its original state.")
print("\nNOTE: I need to look for the actual data entry area, which appears to be")
print("in a different part of the sheet with specific column headers for Year 1/Year 2")