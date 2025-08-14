#!/usr/bin/env python3
"""Run the budget filler with automatic confirmation"""

import pickle
import gspread
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from budget_filler import PBIFBudgetFiller
from models import BudgetData, PersonnelItem, OtherDirectItem


def main(auto_confirm=False):
    """Main function to fill the budget"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("="*70)
    print("PBIF BUDGET FILLER - AUTOMATED")
    print("="*70)
    print()
    
    # Create filler
    filler = PBIFBudgetFiller(gc, SPREADSHEET_ID)
    
    # Create budget data
    budget = BudgetData()  # Uses default values
    
    filler.set_budget_data(budget)
    
    print(f"Budget Total: ${budget.grand_total:,.0f}")
    print(f"  Year 1: ${budget.year1_total:,.0f}")
    print(f"  Year 2: ${budget.year2_total:,.0f}")
    print()
    
    if auto_confirm:
        print("AUTO-APPLYING CHANGES...")
        print("-"*40)
        
        summary = filler.fill_all(dry_run=False)
        
        print("\n✓ Successfully filled:")
        print(f"  - {len(summary['changes']['personnel'])} personnel entries")
        print(f"  - {len(summary['changes']['fringe'])} fringe entries")
        print(f"  - {len(summary['changes']['other_direct'])} other direct cost entries")
        
        print(f"\n✓ View your spreadsheet:")
        print(f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
    else:
        print("DRY RUN MODE - No changes made")
        summary = filler.fill_all(dry_run=True)
        
        print("\nWould fill:")
        print(f"  - {len(summary['changes']['personnel'])} personnel entries")
        print(f"  - {len(summary['changes']['fringe'])} fringe entries")
        print(f"  - {len(summary['changes']['other_direct'])} other direct cost entries")
        
        print("\nTo apply changes, run with --apply flag")


if __name__ == "__main__":
    auto_confirm = "--apply" in sys.argv
    main(auto_confirm)