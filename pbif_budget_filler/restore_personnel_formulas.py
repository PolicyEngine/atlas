#!/usr/bin/env python3
"""Restore the formulas in Personnel column E"""

import pickle
import gspread
from pathlib import Path

def restore_personnel_formulas():
    """Restore formulas in Personnel column E"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("RESTORING PERSONNEL FORMULAS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Restore formulas in column E for rows 6-9
    print("\nRestoring formulas in column E (rows 6-9)...")
    
    formulas = [
        ["=C6*D6"],  # Row 6
        ["=C7*D7"],  # Row 7
        ["=C8*D8"],  # Row 8
        ["=C9*D9"],  # Row 9
    ]
    
    personnel_ws.update('E6:E9', formulas, value_input_option='USER_ENTERED')
    
    # Also restore the SUM formula in E27 if needed
    print("\nRestoring SUM formula in E27...")
    personnel_ws.update('E27', [["=SUM(E6:E26)"]], value_input_option='USER_ENTERED')
    
    print("\n✓ Formulas restored!")
    
    # Check the values
    print("\nVerifying calculations:")
    for row in range(6, 10):
        hours = personnel_ws.acell(f'C{row}').value
        rate = personnel_ws.acell(f'D{row}').value
        total = personnel_ws.acell(f'E{row}').value
        print(f"  Row {row}: {hours} hrs × ${rate}/hr = {total}")
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nPersonnel formulas restored. The totals should now calculate properly.")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    restore_personnel_formulas()