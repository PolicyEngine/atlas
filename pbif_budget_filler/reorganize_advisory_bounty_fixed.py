#!/usr/bin/env python3
"""Move advisory services and document bounty from Contractual to Other - with proper number formatting."""

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

# Note: Using actual numbers for column D (amount), strings for other columns
contractual_data = [
    ["LOI-1", "MyFriendBen", "", 50000, "Demonstration partner - test ambiguity analysis with 3,500 monthly users"],
    ["LOI-2", "Benefit Navigator", "", 50000, "Demonstration partner - test with 500+ caseworkers"],
    ["LOI-3", "Citizen Codex", "", 30000, "UX research and interface design"],
    ["", "", "", "", ""],  # Clear row
    ["", "", "", "", ""],  # Clear row
]

print("Updating Contractual worksheet...")
print("-" * 40)

# Update rows 5-9 in Contractual
for i, partner in enumerate(contractual_data):
    row_num = 5 + i
    
    # Update each column separately to handle different data types
    if partner[0]:  # If row has content
        contractual_ws.update(f'A{row_num}', [[partner[0]]])  # LOI number
        contractual_ws.update(f'B{row_num}', [[partner[1]]])  # Name
        contractual_ws.update(f'C{row_num}', [[partner[2]]])  # Empty column
        contractual_ws.update(f'D{row_num}', [[partner[3]]])  # Amount as number
        contractual_ws.update(f'E{row_num}', [[partner[4]]])  # Description
        print(f"Updated row {row_num}: {partner[1]} - ${partner[3]:,}")
    else:  # Clear the row
        contractual_ws.update(f'A{row_num}:E{row_num}', [[""]*5])
        print(f"Cleared row {row_num}")
    time.sleep(1)

# Update contractual explanation (but NOT the total - let formula calculate it)
contractual_explanation = ("MyFriendBen and Benefit Navigator each receive $50k as demonstration partners to test ambiguity analysis. "
                          "Citizen Codex receives $30k for UX research and design.")
contractual_ws.update(f'A15', [[contractual_explanation]])
print("Updated Contractual explanation")
time.sleep(1)

print()
print("Updating Other Direct Costs worksheet...")
print("-" * 40)

# Now update Other Direct Costs
other_ws = sheet.worksheet('h. Other')

# Add advisory and bounty to Other (starting at row 7)
# Column B: Description, Column C: Cost (as number), Column D: Cost share, Column E: Basis, Column F: Justification
other_data = [
    ["Technical Advisory Services", 40000, "", "Professional services", 
     "Expert guidance from Urban Institute, GCO, NBER, Benefit Kitchen, NCCP and others on document collection strategy and policy implementation"],
    ["Document Bounty Program", 35000, "", "Performance-based awards", 
     "Incentives for partners to verify AI-collected documents and contribute missing ones"],
]

# Update rows 7-8 in Other
for i, item in enumerate(other_data):
    row_num = 7 + i
    
    # Update each column with appropriate data type
    other_ws.update(f'B{row_num}', [[item[0]]])  # Description (string)
    other_ws.update(f'C{row_num}', [[item[1]]])  # Cost (number)
    other_ws.update(f'D{row_num}', [[item[2]]])  # Cost share (empty)
    other_ws.update(f'E{row_num}', [[item[3]]])  # Basis (string)
    other_ws.update(f'F{row_num}', [[item[4]]])  # Justification (string)
    
    print(f"Added row {row_num}: {item[0]} - ${item[1]:,}")
    time.sleep(1)

# Don't update totals - let the spreadsheet formulas calculate them!

print()
print("="*60)
print("REORGANIZATION COMPLETE!")
print("="*60)
print()
print("Summary of changes:")
print()
print("CONTRACTUAL (f. Contractual):")
print("  • MyFriendBen: $50,000")
print("  • Benefit Navigator: $50,000")
print("  • Citizen Codex: $30,000")
print("  • (Total will be calculated by spreadsheet formula)")
print()
print("OTHER DIRECT COSTS (h. Other) - Added:")
print("  • Technical Advisory Services: $40,000")
print("  • Document Bounty Program: $35,000")
print("  • (Total will be calculated by spreadsheet formula)")
print()
print("View spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")