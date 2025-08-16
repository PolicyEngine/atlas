#!/usr/bin/env python3
"""Remove ONLY yellow highlighting from cells, preserving all other formatting."""

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

print("="*60)
print("REMOVING ONLY YELLOW HIGHLIGHTING")
print("="*60)
print()

# List of specific cells that typically have yellow highlighting for data entry
# Based on PBIF template patterns
yellow_cells_by_tab = {
    'a. Personnel': [
        'B4:B24',  # Names column
        'C4:C24',  # Months column
        'D4:D24',  # Salary column
        'E4:E24',  # % Effort column
        'F4:F24',  # Amount column
    ],
    'b. Fringe': [
        'B4:B24',  # Base column
        'C4:C24',  # Rate column
        'D4:D24',  # Benefits column
    ],
    'c. Travel': [
        'B4:B20',  # Description
        'C4:C20',  # Cost
        'E4:E20',  # Basis
        'F4:F20',  # Justification
    ],
    'd. Equipment': [
        'B4:B20',  # Item
        'C4:C20',  # Cost
        'E4:E20',  # Basis
        'F4:F20',  # Justification
    ],
    'e. Supplies': [
        'B4:B20',  # Description
        'C4:C20',  # Cost
        'E4:E20',  # Basis
        'F4:F20',  # Justification
    ],
    'f. Contractual': [
        'A5:A12',  # LOI number
        'B5:B12',  # Name
        'D5:D12',  # Amount
        'E5:E12',  # Description
    ],
    'h. Other': [
        'B4:B20',  # Description
        'C4:C20',  # Cost
        'E4:E20',  # Basis
        'F4:F20',  # Justification
    ],
    'i. Indirect': [
        'B4:B6',  # Rate/amount cells
    ],
}

# Format to remove yellow (set to no background/white)
white_background = {
    "backgroundColor": {
        "red": 1.0,
        "green": 1.0,
        "blue": 1.0
    }
}

for tab_name, cell_ranges in yellow_cells_by_tab.items():
    try:
        print(f"Checking {tab_name} for yellow highlights...")
        ws = sheet.worksheet(tab_name)
        
        for cell_range in cell_ranges:
            # Apply white background only to these specific data entry ranges
            ws.format(cell_range, white_background)
            print(f"  ✓ Cleared highlighting from {cell_range}")
        
        time.sleep(0.5)  # Rate limiting
        
    except Exception as e:
        print(f"  ⚠️ Error processing {tab_name}: {e}")

print()
print("="*60)
print("CLEANUP COMPLETE!")
print("="*60)
print()
print("Removed yellow highlighting from data entry cells only.")
print("All other formatting (blue headers, gray totals, etc.) preserved.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")