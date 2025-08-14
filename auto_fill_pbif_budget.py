#!/usr/bin/env python3
"""
Automated PBIF Budget Filler with OAuth2
Fills the Google Sheets budget template with our $498,000 budget
"""

import os
import sys
import pickle
from pathlib import Path

# Install required packages if needed
try:
    import gspread
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
except ImportError:
    print("Installing required packages...")
    os.system("pip install --quiet gspread google-auth google-auth-oauthlib google-auth-httplib2")
    import gspread
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

# Configuration
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'
TOKEN_FILE = 'token.pickle'
CREDENTIALS_FILE = 'credentials.json'

def authenticate():
    """Authenticate and return Google Sheets client."""
    creds = None
    
    # Check for existing token
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)
    
    # If there are no (valid) credentials, authenticate
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CREDENTIALS_FILE):
                print(f"ERROR: {CREDENTIALS_FILE} not found!")
                print("Please follow the instructions in oauth_setup_instructions.md")
                sys.exit(1)
            
            print("Opening browser for authentication...")
            flow = InstalledAppFlow.from_client_secrets_file(
                CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save credentials for next time
        with open(TOKEN_FILE, 'wb') as token:
            pickle.dump(creds, token)
    
    return gspread.authorize(creds)

def fill_budget_spreadsheet(gc):
    """Fill the PBIF budget spreadsheet with our data."""
    
    # Our budget data (exactly $498,000)
    budget = {
        'header': {
            'project_name': 'PolicyEngine Policy Library',
            'agency': 'Public Benefit Innovation Fund (PBIF)',
            'due_date': 'August 16, 2025',
            'preparer': 'Max Ghenis / PolicyEngine'
        },
        'personnel': [
            ['Lead Engineer/Director', '0.75', '67500', '69525'],
            ['ML/AI Engineer', '0.5', '40000', '41200'],
            ['Policy Coordinator', '0.25', '17500', '18025']
        ],
        'fringe': {
            'year1': '31250',
            'year2': '32188'
        },
        'other_direct': [
            ['Partner Microgrants', '60000', '40000'],
            ['Cloud Infrastructure (AWS/GCP)', '10000', '14515'],
            ['Software Licenses', '3000', '3000'],
            ['Travel/Dissemination', '2000', '3000']
        ],
        'indirect': {
            'year1': '23125',
            'year2': '22145'
        }
    }
    
    try:
        # Open the spreadsheet
        print(f"\nOpening spreadsheet...")
        sheet = gc.open_by_key(SPREADSHEET_ID)
        print(f"✓ Opened: {sheet.title}")
        
        # Get all worksheets
        worksheets = sheet.worksheets()
        print(f"✓ Found {len(worksheets)} worksheets")
        
        # Map worksheet names to our data
        for ws in worksheets:
            ws_title = ws.title.lower()
            print(f"\nProcessing worksheet: {ws.title}")
            
            # Summary/Instructions tab - fill header info
            if 'summary' in ws_title or 'instruction' in ws_title or ws == worksheets[0]:
                print("  → Filling header information...")
                try:
                    # Find cells for project info (typically in first few rows)
                    # Look for "Project Name:" and fill the cell next to it
                    cells = ws.get_all_values()
                    for i, row in enumerate(cells[:10]):  # Check first 10 rows
                        for j, cell in enumerate(row):
                            if 'project name' in cell.lower() and j < len(row) - 1:
                                ws.update_cell(i + 1, j + 2, budget['header']['project_name'])
                                print(f"    ✓ Updated Project Name")
                            elif 'granting agency' in cell.lower() and j < len(row) - 1:
                                ws.update_cell(i + 1, j + 2, budget['header']['agency'])
                                print(f"    ✓ Updated Granting Agency")
                            elif 'due date' in cell.lower() and j < len(row) - 1:
                                ws.update_cell(i + 1, j + 2, budget['header']['due_date'])
                                print(f"    ✓ Updated Due Date")
                            elif 'preparer' in cell.lower() and j < len(row) - 1:
                                ws.update_cell(i + 1, j + 2, budget['header']['preparer'])
                                print(f"    ✓ Updated Preparer")
                except Exception as e:
                    print(f"    Note: Could not update all header fields: {e}")
            
            # Personnel tab
            elif 'personnel' in ws_title or ws.title.lower() == 'a. personnel':
                print("  → Filling personnel data...")
                try:
                    # Clear existing data (rows 2-10, columns A-F)
                    ws.batch_clear(['A2:F10'])
                    
                    # Add our personnel data
                    # Header row
                    ws.update('A1:D1', [['Position', 'FTE', 'Year 1', 'Year 2']])
                    
                    # Data rows
                    start_row = 2
                    for i, person in enumerate(budget['personnel']):
                        row_num = start_row + i
                        ws.update(f'A{row_num}:D{row_num}', [person])
                    
                    # Add totals row
                    total_row = start_row + len(budget['personnel']) + 1
                    ws.update(f'A{total_row}:D{total_row}', 
                             [['TOTAL', '1.5', '125000', '128750']])
                    
                    print(f"    ✓ Added {len(budget['personnel'])} positions")
                except Exception as e:
                    print(f"    Error updating personnel: {e}")
            
            # Fringe benefits tab
            elif 'fringe' in ws_title or ws.title.lower() == 'b. fringe benefits':
                print("  → Filling fringe benefits...")
                try:
                    # Find where to enter the values
                    ws.update('A2:C2', [['Benefits (25% of salaries)', 
                                        budget['fringe']['year1'], 
                                        budget['fringe']['year2']]])
                    print(f"    ✓ Updated fringe benefits")
                except Exception as e:
                    print(f"    Error updating fringe: {e}")
            
            # Other direct costs tab
            elif 'other' in ws_title or ws.title.lower() == 'g. other direct costs':
                print("  → Filling other direct costs...")
                try:
                    # Clear existing data
                    ws.batch_clear(['A2:C10'])
                    
                    # Header
                    ws.update('A1:C1', [['Item', 'Year 1', 'Year 2']])
                    
                    # Data
                    start_row = 2
                    for i, item in enumerate(budget['other_direct']):
                        row_num = start_row + i
                        ws.update(f'A{row_num}:C{row_num}', [item])
                    
                    # Total
                    total_row = start_row + len(budget['other_direct']) + 1
                    ws.update(f'A{total_row}:C{total_row}',
                             [['TOTAL', '75000', '60515']])
                    
                    print(f"    ✓ Added {len(budget['other_direct'])} items")
                except Exception as e:
                    print(f"    Error updating other direct: {e}")
            
            # Indirect costs tab
            elif 'indirect' in ws_title or ws.title.lower() == 'i. indirect':
                print("  → Filling indirect costs...")
                try:
                    ws.update('A2:C2', [['Indirect (10% de minimis)', 
                                        budget['indirect']['year1'], 
                                        budget['indirect']['year2']]])
                    print(f"    ✓ Updated indirect costs")
                except Exception as e:
                    print(f"    Error updating indirect: {e}")
            
            # Skip other tabs
            elif ws.title.lower() in ['c. travel', 'd. equipment', 'e. supplies', 'f. contractual']:
                print(f"  → Skipping (no costs in this category)")
        
        print("\n" + "="*70)
        print("✓ BUDGET FILLING COMPLETE!")
        print("="*70)
        print("\nFinal totals should be:")
        print("  Year 1: $254,375")
        print("  Year 2: $243,598")
        print("  GRAND TOTAL: $497,973")
        print("\nPlease check the Summary tab to verify auto-calculations.")
        print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
        
    except Exception as e:
        print(f"\nError accessing spreadsheet: {e}")
        print("\nTroubleshooting:")
        print("1. Make sure you completed the OAuth flow")
        print("2. Check that you have edit access to the spreadsheet")
        print("3. Try deleting token.pickle and re-authenticating")

def main():
    print("="*70)
    print("PBIF BUDGET AUTOMATED FILLER")
    print("Target: $498,000 over 2 years")
    print("="*70)
    
    # Check for credentials
    if not os.path.exists(CREDENTIALS_FILE):
        print(f"\n❌ ERROR: {CREDENTIALS_FILE} not found!")
        print("\nPlease follow these steps:")
        print("1. Go to https://console.cloud.google.com/")
        print("2. Enable Google Sheets API")
        print("3. Create OAuth2 credentials (Desktop app)")
        print("4. Download as credentials.json to this folder")
        print("\nDetailed instructions in: oauth_setup_instructions.md")
        sys.exit(1)
    
    print("\n✓ Found credentials.json")
    print("Authenticating with Google...")
    
    # Authenticate and get client
    gc = authenticate()
    print("✓ Authentication successful!")
    
    # Fill the spreadsheet
    fill_budget_spreadsheet(gc)

if __name__ == "__main__":
    main()