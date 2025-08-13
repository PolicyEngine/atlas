#!/usr/bin/env python3
"""Main script to fill PBIF budget spreadsheet"""

import pickle
import gspread
import sys
from pathlib import Path

# Add parent directory to path to import the package
sys.path.insert(0, str(Path(__file__).parent))

from budget_filler import PBIFBudgetFiller
from models import BudgetData, PersonnelItem, OtherDirectItem


def main():
    """Main function to fill the budget"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    if not token_path.exists():
        print("Error: token.pickle not found. Please authenticate first.")
        return
    
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    # Your spreadsheet ID
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("="*70)
    print("PBIF BUDGET FILLER - CAREFUL VERSION")
    print("="*70)
    print()
    
    # Create filler
    filler = PBIFBudgetFiller(gc, SPREADSHEET_ID)
    
    # Create budget data with exact values for $498k
    budget = BudgetData(
        personnel=[
            PersonnelItem(
                position="Lead Engineer/Director",
                fte=0.75,
                year1_salary=67500,
                year2_salary=69525,
                benefits_rate=0.25
            ),
            PersonnelItem(
                position="ML/AI Engineer",
                fte=0.5,
                year1_salary=40000,
                year2_salary=41200,
                benefits_rate=0.25
            ),
            PersonnelItem(
                position="Policy Coordinator",
                fte=0.25,
                year1_salary=17500,
                year2_salary=18025,
                benefits_rate=0.25
            ),
        ],
        other_direct=[
            OtherDirectItem("Partner Microgrants", 60000, 40000),
            OtherDirectItem("Cloud Infrastructure (AWS/GCP)", 10000, 14515),
        ],
        travel_year1=2000,
        travel_year2=3000,
        supplies_year1=3000,
        supplies_year2=3000,
        indirect_rate=0.10
    )
    
    filler.set_budget_data(budget)
    
    print(f"Budget Total: ${budget.grand_total:,.0f}")
    print(f"  Year 1: ${budget.year1_total:,.0f}")
    print(f"  Year 2: ${budget.year2_total:,.0f}")
    print()
    
    # First, do a dry run to show what will be changed
    print("DRY RUN - Showing what will be changed:")
    print("-"*40)
    
    summary = filler.fill_all(dry_run=True)
    
    # Show personnel changes
    print("\nPERSONNEL CHANGES:")
    for change in summary["changes"]["personnel"]:
        print(f"  Row {change['row']}: {change['changes']}")
    
    print("\nFRINGE CHANGES:")
    for change in summary["changes"]["fringe"]:
        if "changes" in change:
            print(f"  Row {change['row']}: {change['changes']}")
    
    print("\nOTHER DIRECT CHANGES:")
    for change in summary["changes"]["other_direct"]:
        print(f"  Row {change['row']}: {change['changes']}")
    
    print("\nINDIRECT:")
    for change in summary["changes"]["indirect"]:
        if "note" in change:
            print(f"  {change['note']}")
    
    print()
    print("="*70)
    
    # Ask for confirmation
    response = input("Do you want to apply these changes? (yes/no): ")
    
    if response.lower() == "yes":
        print("\nApplying changes...")
        summary = filler.fill_all(dry_run=False)
        
        print("✓ Changes applied successfully!")
        
        if "validation" in summary:
            print("\nValidation:")
            for key, value in summary["validation"].items():
                if "expected" in key:
                    print(f"  {key}: ${value:,.0f}")
        
        print(f"\nView your spreadsheet:")
        print(f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
    else:
        print("\nNo changes made.")


if __name__ == "__main__":
    main()