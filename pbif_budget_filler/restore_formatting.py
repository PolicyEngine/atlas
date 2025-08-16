#!/usr/bin/env python3
"""Restore the original formatting while only removing yellow data entry highlights."""

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
print("RESTORING SPREADSHEET FORMATTING")
print("="*60)
print()

# Blue header format (for title rows)
blue_header_format = {
    "backgroundColor": {
        "red": 0.6,
        "green": 0.76,
        "blue": 0.91
    }
}

# Light blue format (for instruction rows)
light_blue_format = {
    "backgroundColor": {
        "red": 0.82,
        "green": 0.88,
        "blue": 0.95
    }
}

# Gray format (for total rows)
gray_format = {
    "backgroundColor": {
        "red": 0.85,
        "green": 0.85,
        "blue": 0.85
    }
}

# Define formatting for each tab
tab_formats = {
    'Summary': [
        ('A1:C1', blue_header_format),  # Title row
        ('A13:C13', gray_format),  # Subtotal rows
        ('A21:C21', gray_format),
        ('A23:C23', gray_format),
    ],
    'a. Personnel': [
        ('A1:F1', blue_header_format),  # Title
        ('A2:F2', light_blue_format),  # Instructions
        ('A25:F25', gray_format),  # Total row
    ],
    'b. Fringe': [
        ('A1:E1', blue_header_format),  # Title
        ('A2:E2', light_blue_format),  # Instructions
        ('A25:E25', gray_format),  # Total row
    ],
    'c. Travel': [
        ('A1:F1', blue_header_format),  # Title
        ('A2:F2', light_blue_format),  # Instructions
        ('A22:F22', gray_format),  # Total row
    ],
    'd. Equipment': [
        ('A1:F1', blue_header_format),  # Title
        ('A2:F2', light_blue_format),  # Instructions
        ('A22:F22', gray_format),  # Total row
    ],
    'e. Supplies': [
        ('A1:F1', blue_header_format),  # Title
        ('A2:F2', light_blue_format),  # Instructions
        ('A22:F22', gray_format),  # Total row
    ],
    'f. Contractual': [
        ('A1:E1', blue_header_format),  # Title
        ('A2:E2', light_blue_format),  # Instructions
        ('A13:E13', gray_format),  # Total row
    ],
    'h. Other': [
        ('A1:F1', blue_header_format),  # Title
        ('A2:F2', light_blue_format),  # Instructions
        ('A22:F22', gray_format),  # Total row
    ],
    'i. Indirect': [
        ('A1:D1', blue_header_format),  # Title
        ('A2:D2', light_blue_format),  # Instructions
    ],
}

for tab_name, formats in tab_formats.items():
    try:
        print(f"Restoring formatting for {tab_name}...")
        ws = sheet.worksheet(tab_name)
        
        for cell_range, format_dict in formats:
            ws.format(cell_range, format_dict)
            print(f"  ✓ Applied formatting to {cell_range}")
        
        time.sleep(1)  # Rate limiting
        
    except Exception as e:
        print(f"  ⚠️ Error formatting {tab_name}: {e}")

print()
print("="*60)
print("FORMATTING RESTORED!")
print("="*60)
print()
print("Original formatting has been restored (blue headers, gray totals, etc.)")
print("Yellow data entry highlights have been removed.")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")