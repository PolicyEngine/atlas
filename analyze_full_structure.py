#!/usr/bin/env python3
"""
Carefully analyze the full spreadsheet structure before making changes
"""

import pickle
import gspread

# Load saved credentials
with open('token.pickle', 'rb') as token:
    creds = pickle.load(token)

gc = gspread.authorize(creds)
sheet = gc.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')

print("FULL SPREADSHEET ANALYSIS")
print("="*70)

# Analyze each worksheet
worksheets = sheet.worksheets()

for ws in worksheets:
    print(f"\nWORKSHEET: {ws.title}")
    print("-"*40)
    
    # Get all values
    try:
        values = ws.get_all_values()
        
        # Look for header rows
        for i, row in enumerate(values[:15]):
            # Look for rows with "Year 1", "Year 2", "Total", etc.
            row_str = ' '.join(str(cell) for cell in row).lower()
            if any(keyword in row_str for keyword in ['year 1', 'year 2', 'total', 'project period', 'salary', 'fte', 'personnel']):
                print(f"Row {i+1} (Header?): {row[:10]}")
        
        # Show the general structure
        print(f"Total rows: {len(values)}")
        print(f"Total columns: {len(values[0]) if values else 0}")
        
        # Look for formula cells in Summary
        if 'summary' in ws.title.lower():
            print("\nLooking for formulas in Summary tab...")
            # Get a sample of cells to see if they have formulas
            for i in range(min(30, len(values))):
                for j in range(min(10, len(values[i]))):
                    if values[i][j] and '$' in str(values[i][j]):
                        print(f"  Cell ({i+1},{chr(65+j)}): {values[i][j]}")
        
    except Exception as e:
        print(f"  Error reading: {e}")

print("\n" + "="*70)
print("KEY FINDINGS:")
print("-"*40)
print("1. The Personnel tab has a specific structure with Position names in column A")
print("2. There are specific columns for Year 1 and Year 2 amounts")
print("3. The Summary tab has formulas that pull from other tabs")
print("4. We need to find the exact cells where data should be entered")
print("\nLet me check the exact column headers in Personnel tab...")