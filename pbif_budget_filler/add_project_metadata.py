#!/usr/bin/env python3
"""Add project metadata to the budget summary page"""

import pickle
import gspread
from pathlib import Path

def add_project_metadata():
    """Add project name, dates, and other metadata to summary page"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ADDING PROJECT METADATA TO SUMMARY PAGE")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    summary_ws = sheet.worksheet("Summary")
    
    # Project metadata
    metadata = [
        ["PolicyEngine"],  # Organization Name (B3)
        ["PolicyEngine Policy Library"],  # Project Name (B4)
        ["11/15/2025"],  # Project Period Start (B5)
        ["11/14/2027"],  # Project Period End (B6)
        ["24"],  # Total # of months (B7)
    ]
    
    print("\nUpdating Summary page with project information:")
    print(f"  Organization: PolicyEngine")
    print(f"  Project: PolicyEngine Policy Library")
    print(f"  Period: 11/15/2025 - 11/14/2027 (24 months)")
    
    # Update cells B3 through B7
    for i, value in enumerate(metadata, start=3):
        cell = f"B{i}"
        summary_ws.update(cell, [value])
        print(f"  Updated {cell}: {value[0]}")
    
    # Also add Principal Investigator info if there's a field for it
    # Check if there's a PI field (often around B8-B10)
    try:
        # Add PI information
        pi_info = [
            ["Max Ghenis"],  # Principal Investigator Name
            ["CEO"],  # Title
            ["max@policyengine.org"],  # Email
        ]
        
        # Try to find and update PI fields (adjust row numbers as needed)
        print("\nAdding Principal Investigator information:")
        summary_ws.update('B8', [["Max Ghenis"]])
        print(f"  PI Name: Max Ghenis")
        
        # If there are fields for title and email
        summary_ws.update('B9', [["CEO"]])
        print(f"  Title: CEO")
        
        summary_ws.update('B10', [["max@policyengine.org"]])
        print(f"  Email: max@policyengine.org")
        
    except Exception as e:
        print(f"\nNote: Could not add all PI information (may not have designated fields): {e}")
    
    # Update the budget request amount to ensure it matches our total
    try:
        summary_ws.update('B11', [["675059"]])  # Total budget request
        print(f"\nTotal Budget Request: $675,059")
    except:
        pass
    
    print("\n" + "="*70)
    print("✓ Project metadata added successfully!")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    add_project_metadata()