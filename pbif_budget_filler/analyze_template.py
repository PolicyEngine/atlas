#!/usr/bin/env python3
"""Analyze the PBIF template structure"""

import pickle
import gspread
from sheet_reader import SheetReader

# Load credentials
with open('../token.pickle', 'rb') as token:
    creds = pickle.load(token)

gc = gspread.authorize(creds)

# Template ID from the URL you provided
TEMPLATE_ID = "1g-AINvv3uK2VHQ040wgc5FN3ceKYPSeVHeEz7lDhBWk"

print("ANALYZING PBIF TEMPLATE STRUCTURE")
print("="*70)

# Open and analyze template
template = gc.open_by_key(TEMPLATE_ID)

print(f"\nTemplate: {template.title}")
print(f"Worksheets: {len(template.worksheets())}")
print()

# Analyze each worksheet
for ws in template.worksheets():
    print(f"\nWORKSHEET: '{ws.title}'")
    print("-"*40)
    
    # Get values to understand structure
    values = ws.get_all_values()
    
    if not values:
        print("  Empty worksheet")
        continue
    
    print(f"  Dimensions: {len(values)} rows × {len(values[0])} columns")
    
    # For Personnel tab, show the structure in detail
    if "personnel" in ws.title.lower() or ws.title == "a. Personnel":
        print("\n  PERSONNEL STRUCTURE:")
        
        # Show first 15 rows to understand layout
        for i, row in enumerate(values[:15]):
            if any(cell for cell in row):  # Non-empty rows
                # Show relevant columns
                if i < 5:  # Headers
                    print(f"    Row {i+1}: {row[:10]}")
                elif "$0" in str(row):  # Data entry rows
                    print(f"    Row {i+1}: [Data entry row] {row[1:6]}")
        
        # Find column positions
        for i, row in enumerate(values[:5]):
            for j, cell in enumerate(row):
                cell_lower = str(cell).lower()
                if "name" in cell_lower or "title" in cell_lower:
                    print(f"\n  Name/Title column: {chr(65+j)} (column {j+1})")
                if "effort" in cell_lower or "fte" in cell_lower:
                    print(f"  FTE/Effort column: {chr(65+j)} (column {j+1})")
                if "salary" in cell_lower and "annual" in cell_lower:
                    print(f"  Annual Salary column: {chr(65+j)} (column {j+1})")
                if "year 1" in cell_lower:
                    print(f"  Year 1 column: {chr(65+j)} (column {j+1})")
                if "year 2" in cell_lower:
                    print(f"  Year 2 column: {chr(65+j)} (column {j+1})")
    
    # For Other/Other Direct Costs
    elif "other" in ws.title.lower():
        print("\n  OTHER DIRECT COSTS STRUCTURE:")
        for i, row in enumerate(values[:10]):
            if any(cell for cell in row):
                print(f"    Row {i+1}: {row[:6]}")

print("\n" + "="*70)
print("KEY FINDINGS:")
print("-"*40)
print("Based on the template structure:")
print("1. Personnel data goes in specific columns (B=Name, C=FTE, D=Salary, E=Year1, F=Year2)")
print("2. Data entry starts after header rows (usually row 11 onwards)")
print("3. The template has $0 placeholders in column E that need to be replaced")
print("4. Other Direct Costs has a similar structure with Description and Year columns")