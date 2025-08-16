#!/usr/bin/env python3
"""Update PBIF budget spreadsheet with document contribution pool structure."""

import pickle
import gspread
import time
from pathlib import Path

# Load credentials using token.pickle like other scripts
token_path = Path(__file__).parent.parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

client = gspread.authorize(creds)

# Open the spreadsheet
sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
worksheet = sheet.worksheet('f. Contractual')

# Update partner contracts to new structure for $700k budget
contractual_data = [
    ["LOI-1", "MyFriendBen", "", "$50,000", "Demonstration partner - test ambiguity analysis with 3,500 monthly users"],
    ["LOI-2", "Benefit Navigator", "", "$50,000", "Demonstration partner - test with 500+ caseworkers"],
    ["LOI-3", "Document Contribution Pool", "", "$50,000", "Shared fund for Urban Institute, GCO, NBER, and others"],
    ["LOI-4", "Citizen Codex", "", "$30,000", "UX research and interface design"],
]

print("Updating Contractual worksheet...")
print("-" * 40)

# Update rows 5-8 with new partner data
for i, partner in enumerate(contractual_data):
    row_num = 5 + i  # Starting at row 5
    
    # Update columns A-E with partner data
    range_to_update = f'A{row_num}:E{row_num}'
    worksheet.update(range_to_update, [partner])
    print(f"Updated row {row_num}: {partner[1]} - {partner[3]}")
    time.sleep(1)  # Rate limiting

# Update the total in row 13
total_row = 13
worksheet.update(f'D{total_row}', [['$180,000']])
print(f"Updated total in row {total_row}: $180,000")
time.sleep(1)

# Update the explanation in row 15
explanation = ("MyFriendBen and Benefit Navigator each receive $50k as demonstration partners to test ambiguity analysis. "
               "Document Contribution Pool ($50k) funds organizations contributing documents (Urban Institute, GCO, NBER, others). "
               "Citizen Codex receives $30k for UX research and design. Total partner contracts: $180,000")
worksheet.update(f'A15', [[explanation]])
print("Updated explanation text")

print("\n" + "="*40)
print("Budget update complete!")
print("="*40)
print("\nPartner allocations:")
print("  - MyFriendBen (demonstration): $50,000")
print("  - Benefit Navigator (demonstration): $50,000")
print("  - Document Contribution Pool: $50,000")
print("  - Citizen Codex (UX): $30,000")
print("  - Total Partners: $180,000")
print("\nView spreadsheet at:")
print(f"https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")