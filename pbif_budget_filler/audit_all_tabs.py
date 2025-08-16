#!/usr/bin/env python3
"""Audit all tabs for hard-coded totals and formatting issues."""

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
print("AUDITING ALL TABS FOR ISSUES")
print("="*60)
print()

# List of tabs to check
tabs_to_check = [
    'f. Contractual',
    'h. Other',
    'a. Personnel', 
    'b. Fringe',
    'c. Travel',
    'd. Equipment',
    'e. Supplies',
    'i. Indirect',
    'Summary'
]

issues_found = []

for tab_name in tabs_to_check:
    try:
        print(f"\nChecking {tab_name}...")
        print("-" * 40)
        ws = sheet.worksheet(tab_name)
        
        # Get all values to analyze
        all_values = ws.get_all_values()
        
        # Look for common patterns of totals
        for row_idx, row in enumerate(all_values, 1):
            for col_idx, cell in enumerate(row):
                # Check for cells that look like hard-coded totals
                if isinstance(cell, str):
                    # Check if it contains "total" in the label
                    if col_idx > 0 and 'total' in row[0].lower() and cell.startswith('$'):
                        # This might be a hard-coded total
                        col_letter = chr(65 + col_idx)  # Convert to column letter
                        print(f"  Row {row_idx}, Column {col_letter}: Potential hard-coded total: {cell}")
                        
                        # Check if there's a formula by getting the cell
                        cell_ref = f"{col_letter}{row_idx}"
                        actual_cell = ws.acell(cell_ref, value_render_option='FORMULA')
                        
                        if not actual_cell.value.startswith('='):
                            issues_found.append({
                                'tab': tab_name,
                                'cell': cell_ref,
                                'value': cell,
                                'issue': 'Hard-coded total (no formula)'
                            })
                            print(f"    ⚠️  ISSUE: Hard-coded value, should be a formula")
                        else:
                            print(f"    ✓  OK: Has formula: {actual_cell.value}")
        
        # Special check for Contractual tab - row 13
        if tab_name == 'f. Contractual':
            print("\n  Special check for Contractual totals...")
            # Check D13 which should have a formula
            d13 = ws.acell('D13', value_render_option='FORMULA')
            if not d13.value.startswith('='):
                print(f"    ⚠️  D13 has hard-coded value: {d13.value}")
                issues_found.append({
                    'tab': tab_name,
                    'cell': 'D13',
                    'value': d13.value,
                    'issue': 'Should have SUM formula'
                })
            else:
                print(f"    ✓  D13 has formula: {d13.value}")
                
    except Exception as e:
        print(f"  Error checking {tab_name}: {e}")

print("\n" + "="*60)
print("AUDIT SUMMARY")
print("="*60)

if issues_found:
    print(f"\n⚠️  Found {len(issues_found)} issues:\n")
    for issue in issues_found:
        print(f"  • {issue['tab']} - {issue['cell']}: {issue['issue']}")
        print(f"    Current value: {issue['value']}")
else:
    print("\n✓ No issues found - all totals appear to use formulas")

print("\nView spreadsheet at:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")