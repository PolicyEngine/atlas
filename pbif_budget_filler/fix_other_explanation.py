#!/usr/bin/env python3
"""Fix the Other Direct Costs explanation - keep the label"""

import pickle
import gspread
from pathlib import Path

def fix_other_explanation():
    """Fix the explanation in Other Direct Costs to keep the label"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("FIXING OTHER DIRECT COSTS EXPLANATION")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    other_ws = sheet.worksheet("h. Other")
    
    # Update A23 to keep the label and add explanation after it
    other_explanation = (
        "Additional Explanation (as needed): "
        "Other direct costs emphasize AI tooling and partner engagement. "
        "AI coding tools ($30k/yr) enable small team to build at scale. "
        "Partner microgrants ensure diverse jurisdiction coverage and real-world validation. "
        "Cloud infrastructure supports permanent archival of 100,000+ documents."
    )
    
    print("  Updating A23 with proper label and explanation...")
    other_ws.update(range_name="A23", values=[[other_explanation]])
    
    print("\n✓ Fixed! Kept the 'Additional Explanation (as needed):' label")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    fix_other_explanation()