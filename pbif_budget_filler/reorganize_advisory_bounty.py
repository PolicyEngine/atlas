#!/usr/bin/env python3
"""Move advisory services and document bounty from Contractual to Other."""

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
print("REORGANIZING ADVISORY AND BOUNTY TO OTHER DIRECT COSTS")
print("="*60)
print()

# First, update Contractual to remove advisory and bounty
contractual_ws = sheet.worksheet('f. Contractual')

contractual_data = [
    ["LOI-1", "MyFriendBen", "", "$50,000", "Demonstration partner - test ambiguity analysis with 3,500 monthly users"],
    ["LOI-2", "Benefit Navigator", "", "$50,000", "Demonstration partner - test with 500+ caseworkers"],
    ["LOI-3", "Citizen Codex", "", "$30,000", "UX research and interface design"],
    ["", "", "", "", ""],  # Clear row
    ["", "", "", "", ""],  # Clear row
]

print("Updating Contractual worksheet...")
print("-" * 40)

# Update rows 5-9 in Contractual
for i, partner in enumerate(contractual_data):
    row_num = 5 + i
    range_to_update = f'A{row_num}:E{row_num}'
    contractual_ws.update(range_to_update, [partner])
    if partner[1]:  # Only print if there's content
        print(f"Updated row {row_num}: {partner[1]} - {partner[3]}")
    else:
        print(f"Cleared row {row_num}")
    time.sleep(1)

# Update contractual total
contractual_ws.update(f'D13', [['$130,000']])
print("Updated Contractual total: $130,000")
time.sleep(1)

# Update contractual explanation
contractual_explanation = ("MyFriendBen and Benefit Navigator each receive $50k as demonstration partners to test ambiguity analysis. "
                          "Citizen Codex receives $30k for UX research and design. Total partner contracts: $130,000")
contractual_ws.update(f'A15', [[contractual_explanation]])
print("Updated Contractual explanation")
time.sleep(1)

print()
print("Updating Other Direct Costs worksheet...")
print("-" * 40)

# Now update Other Direct Costs
other_ws = sheet.worksheet('h. Other')

# Add advisory and bounty to Other (starting at row 7)
other_data = [
    ["Technical Advisory Services", "$40,000", "", "Professional services", "Expert guidance from Urban Institute, GCO, NBER, Benefit Kitchen, NCCP and others on document collection strategy and policy implementation"],
    ["Document Bounty Program", "$35,000", "", "Performance-based awards", "Incentives for partners to verify AI-collected documents and contribute missing ones"],
]

# Update rows 7-8 in Other
for i, item in enumerate(other_data):
    row_num = 7 + i
    for col_idx, value in enumerate(item):
        col_letter = chr(66 + col_idx)  # B=66, C=67, etc.
        other_ws.update(f'{col_letter}{row_num}', [[value]])
    print(f"Added row {row_num}: {item[0]} - {item[1]}")
    time.sleep(1)

# Update Other total (assuming it needs to add $75k to existing $60k)
# Current items: Cloud $20k, AI Tools $30k, Software $10k = $60k
# New total: $60k + $75k = $135k
other_ws.update(f'C13', [['$135,000']])
print("Updated Other total: $135,000")

print()
print("="*60)
print("REORGANIZATION COMPLETE!")
print("="*60)
print()
print("Summary of changes:")
print()
print("CONTRACTUAL (f. Contractual) - Now $130,000:")
print("  • MyFriendBen: $50,000")
print("  • Benefit Navigator: $50,000")
print("  • Citizen Codex: $30,000")
print()
print("OTHER DIRECT COSTS (h. Other) - Now $135,000:")
print("  • Cloud Infrastructure: $20,000")
print("  • AI Coding Tools: $30,000")
print("  • Software Licenses: $10,000")
print("  • Technical Advisory Services: $40,000")
print("  • Document Bounty Program: $35,000")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")