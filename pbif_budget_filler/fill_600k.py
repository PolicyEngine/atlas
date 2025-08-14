#!/usr/bin/env python3
"""Fill the PBIF spreadsheet with the $600k budget"""

import pickle
import gspread
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from budget_filler import PBIFBudgetFiller
from budget_600k import create_600k_budget


def main():
    """Fill spreadsheet with $600k budget"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("="*70)
    print("FILLING SPREADSHEET WITH $600K BUDGET")
    print("="*70)
    print()
    
    # Open spreadsheet
    sheet = gc.open_by_key(SPREADSHEET_ID)
    print(f"Opened: {sheet.title}")
    
    # First, let's clear the old data
    print("\nClearing old data...")
    
    # Clear personnel rows 8-15
    personnel_ws = sheet.worksheet("a. Personnel")
    personnel_ws.batch_clear(["B8:D15"])
    
    # Clear other direct costs
    other_ws = sheet.worksheet("h. Other")
    other_ws.batch_clear(["B6:C15"])
    
    # Clear fringe
    fringe_ws = sheet.worksheet("b. Fringe")
    fringe_ws.batch_clear(["B8:C15"])
    
    print("✓ Cleared old data")
    
    # Create the $600k budget
    budget = create_600k_budget()
    
    print(f"\nFilling with new budget (Total: ${budget.grand_total:,.0f})...")
    print()
    
    # Fill Personnel
    print("PERSONNEL:")
    start_row = 8  # Start at row 8
    for i, person in enumerate(budget.personnel):
        row = start_row + i
        
        # Calculate hours and hourly rate for the template format
        hours = int(2080 * person.fte)  # Annual hours
        hourly_rate = person.year1_salary / hours if hours > 0 else 0
        
        print(f"  Row {row}: {person.position} ({person.fte} FTE)")
        
        # Update cells
        personnel_ws.update(f"B{row}", [[person.position]])
        personnel_ws.update(f"C{row}", [[str(hours)]])
        personnel_ws.update(f"D{row}", [[f"{hourly_rate:.2f}"]]) 
    
    print(f"  ✓ Added {len(budget.personnel)} personnel")
    
    # Fill Fringe Benefits
    print("\nFRINGE BENEFITS:")
    # Clear any existing percentage entries
    fringe_ws.batch_clear(["A8:D15"])
    
    # Add our fringe as a single line item
    fringe_row = 8
    fringe_amount = budget.year1_personnel_benefits
    
    fringe_ws.update(f"B{fringe_row}", [["Employee Benefits (25% of salaries)"]])
    fringe_ws.update(f"C{fringe_row}", [[str(int(fringe_amount))]])
    print(f"  Row {fringe_row}: Benefits = ${fringe_amount:,.0f}")
    
    # Fill Other Direct Costs
    print("\nOTHER DIRECT COSTS:")
    start_row = 6
    
    # Add main other direct items
    for i, item in enumerate(budget.other_direct):
        row = start_row + i
        print(f"  Row {row}: {item.description} = ${item.year1_amount:,}")
        
        other_ws.update(f"B{row}", [[item.description]])
        other_ws.update(f"C{row}", [[str(item.year1_amount)]])
    
    # Add travel
    if budget.travel_year1 > 0:
        row = start_row + len(budget.other_direct)
        print(f"  Row {row}: Travel/Conferences = ${budget.travel_year1:,}")
        other_ws.update(f"B{row}", [["Travel/Conferences"]])
        other_ws.update(f"C{row}", [[str(budget.travel_year1)]])
    
    # Add supplies
    if budget.supplies_year1 > 0:
        row = start_row + len(budget.other_direct) + 1
        print(f"  Row {row}: Software Licenses = ${budget.supplies_year1:,}")
        other_ws.update(f"B{row}", [["Software Licenses"]])
        other_ws.update(f"C{row}", [[str(budget.supplies_year1)]])
    
    print(f"  ✓ Added {len(budget.other_direct) + 2} other direct items")
    
    # Fill Indirect
    print("\nINDIRECT COSTS:")
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # Look for where to enter indirect rate
    # The template typically has a field for the rate and base
    indirect_ws.update("B5", [["10% de minimis rate"]])
    indirect_ws.update("C5", [[f"{budget.year1_indirect:.0f}"]]) 
    print(f"  Indirect (10%): ${budget.year1_indirect:,.0f}")
    
    # Update header information in Summary
    print("\nUPDATING SUMMARY HEADER:")
    summary_ws = sheet.worksheet("Summary")
    
    # Find and update project info
    summary_values = summary_ws.get_all_values()
    for i, row in enumerate(summary_values[:10]):
        for j, cell in enumerate(row):
            if "project name" in cell.lower() and j < len(row) - 1:
                summary_ws.update(f"{chr(65+j+1)}{i+1}", [[budget.project_name]])
                print(f"  ✓ Updated Project Name")
            elif "granting agency" in cell.lower() and j < len(row) - 1:
                summary_ws.update(f"{chr(65+j+1)}{i+1}", [[budget.agency]])
                print(f"  ✓ Updated Agency")
            elif "due date" in cell.lower() and j < len(row) - 1:
                summary_ws.update(f"{chr(65+j+1)}{i+1}", [[budget.due_date]])
                print(f"  ✓ Updated Due Date")
            elif "preparer" in cell.lower() and j < len(row) - 1:
                summary_ws.update(f"{chr(65+j+1)}{i+1}", [[budget.preparer]])
                print(f"  ✓ Updated Preparer")
    
    print("\n" + "="*70)
    print("✓ BUDGET FILLING COMPLETE!")
    print("="*70)
    print()
    print("EXPECTED TOTALS:")
    print(f"  Personnel: ${budget.year1_personnel_total:,.0f}")
    print(f"  Fringe: ${budget.year1_personnel_benefits:,.0f}")
    print(f"  Other Direct: ${budget.year1_other_direct_total + budget.travel_year1 + budget.supplies_year1:,.0f}")
    print(f"  Indirect: ${budget.year1_indirect:,.0f}")
    print(f"  YEAR 1 TOTAL: ${budget.year1_total:,.0f}")
    print(f"  YEAR 2 TOTAL: ${budget.year2_total:,.0f}")
    print(f"  GRAND TOTAL: ${budget.grand_total:,.0f}")
    print()
    print("The Summary tab should auto-calculate these totals.")
    print(f"\n✓ View spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")


if __name__ == "__main__":
    main()