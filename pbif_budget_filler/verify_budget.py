#!/usr/bin/env python3
"""Verify what data is currently in the budget spreadsheet."""

import pickle
import gspread
from pathlib import Path

def get_client():
    """Initialize gspread client."""
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    return gspread.authorize(creds)

def main():
    client = get_client()
    sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
    
    print("="*60)
    print("CURRENT BUDGET SPREADSHEET VALUES")
    print("="*60)
    
    # Check Summary tab
    print("\nSUMMARY TAB:")
    ws = sheet.worksheet('Summary')
    print(f"  Personnel (B14): {ws.acell('C14').value}")
    print(f"  Fringe (B15): {ws.acell('C15').value}")
    print(f"  Travel (B16): {ws.acell('C16').value}")
    print(f"  Equipment (B17): {ws.acell('C17').value}")
    print(f"  Supplies (B18): {ws.acell('C18').value}")
    print(f"  Contractual (B19): {ws.acell('C19').value}")
    print(f"  Other Direct (B20): {ws.acell('C20').value}")
    print(f"  Total Direct (B21): {ws.acell('C21').value}")
    print(f"  Indirect (B22): {ws.acell('C22').value}")
    print(f"  TOTAL (B23): {ws.acell('C23').value}")
    
    # Check Personnel tab
    print("\nPERSONNEL TAB (rows 6-9):")
    ws = sheet.worksheet('a. Personnel')
    for row in range(6, 10):
        position = ws.acell(f'B{row}').value
        hours = ws.acell(f'C{row}').value
        rate = ws.acell(f'D{row}').value
        total = ws.acell(f'E{row}').value
        basis = ws.acell(f'G{row}').value
        if position:
            print(f"  Row {row}: {position} - {hours} hrs @ ${rate}/hr = ${total} (basis: ${basis})")
    
    # Check Travel tab
    print("\nTRAVEL TAB (rows 4-7):")
    ws = sheet.worksheet('c. Travel')
    for row in range(4, 8):
        purpose = ws.acell(f'B{row}').value
        if purpose:
            days = ws.acell(f'E{row}').value
            travelers = ws.acell(f'F{row}').value
            lodging = ws.acell(f'G{row}').value
            flight = ws.acell(f'H{row}').value
            mie = ws.acell(f'J{row}').value
            total = ws.acell(f'K{row}').value
            print(f"  Row {row}: {purpose[:30]}... - {days} days x {travelers} people = ${total}")
    
    # Check Contractual tab
    print("\nCONTRACTUAL TAB (rows 5-7):")
    ws = sheet.worksheet('f. Contractual')
    for row in range(5, 8):
        partner = ws.acell(f'B{row}').value
        amount = ws.acell(f'D{row}').value
        if partner:
            print(f"  Row {row}: {partner} - ${amount}")
    
    # Check Other Direct
    print("\nOTHER DIRECT TAB (rows 7-8):")
    ws = sheet.worksheet('h. Other')
    for row in range(7, 9):
        expense = ws.acell(f'B{row}').value
        amount = ws.acell(f'C{row}').value
        if expense:
            print(f"  Row {row}: {expense} - ${amount}")

if __name__ == "__main__":
    main()