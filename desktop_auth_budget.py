#!/usr/bin/env python3
"""
PBIF Budget Filler - Desktop App Auth Version
Works with Desktop app OAuth credentials
"""

import os
import sys
import pickle
import webbrowser

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

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

def authenticate():
    """Authenticate using Desktop app flow."""
    creds = None
    
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("ERROR: credentials.json not found!")
                sys.exit(1)
            
            print("\nUsing Desktop App authentication...")
            print("-"*50)
            
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES,
                redirect_uri='urn:ietf:wg:oauth:2.0:oob')  # Special URI for desktop apps
            
            # Get authorization URL
            auth_url, _ = flow.authorization_url(prompt='consent')
            
            print("Please go to this URL and authorize the app:")
            print()
            print(auth_url)
            print()
            
            # Try to open browser automatically
            webbrowser.open(auth_url)
            
            print("After authorizing, you'll see an authorization code.")
            print("Copy and paste it here:")
            code = input("Enter the authorization code: ").strip()
            
            # Exchange code for token
            flow.fetch_token(code=code)
            creds = flow.credentials
            
        # Save for next time
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    
    return gspread.authorize(creds)

def fill_budget(gc):
    """Fill the budget spreadsheet with our data."""
    
    print("\n" + "="*70)
    print("FILLING SPREADSHEET")
    print("="*70)
    
    try:
        sheet = gc.open_by_key(SPREADSHEET_ID)
        print(f"\n✓ Opened spreadsheet: {sheet.title}")
        
        worksheets = sheet.worksheets()
        print(f"✓ Found {len(worksheets)} worksheets")
        
        # Our exact budget data
        filled_count = 0
        
        for ws in worksheets:
            ws_name = ws.title.lower()
            
            # Personnel
            if 'personnel' in ws_name or ws.title == 'a. Personnel':
                print(f"\nFilling '{ws.title}'...")
                try:
                    # Clear and add header
                    ws.clear()
                    ws.update('A1:D1', [['Position', 'FTE', 'Year 1', 'Year 2']])
                    
                    # Add data
                    data = [
                        ['Lead Engineer/Director', '0.75', '67500', '69525'],
                        ['ML/AI Engineer', '0.5', '40000', '41200'],
                        ['Policy Coordinator', '0.25', '17500', '18025'],
                        ['TOTAL', '1.5', '125000', '128750']
                    ]
                    
                    for i, row in enumerate(data, start=2):
                        ws.update(f'A{i}:D{i}', [row])
                    
                    print("  ✓ Filled personnel")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
            
            # Fringe
            elif 'fringe' in ws_name or ws.title == 'b. Fringe Benefits':
                print(f"\nFilling '{ws.title}'...")
                try:
                    ws.clear()
                    ws.update('A1:C1', [['Description', 'Year 1', 'Year 2']])
                    ws.update('A2:C2', [['Benefits (25% of salaries)', '31250', '32188']])
                    print("  ✓ Filled fringe benefits")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
            
            # Travel
            elif 'travel' in ws_name or ws.title == 'c. Travel':
                print(f"\nFilling '{ws.title}'...")
                try:
                    ws.clear()
                    ws.update('A1:C1', [['Description', 'Year 1', 'Year 2']])
                    ws.update('A2:C2', [['Conference/Dissemination', '2000', '3000']])
                    print("  ✓ Filled travel")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
            
            # Supplies
            elif 'supplies' in ws_name or ws.title == 'e. Supplies':
                print(f"\nFilling '{ws.title}'...")
                try:
                    ws.clear()
                    ws.update('A1:C1', [['Description', 'Year 1', 'Year 2']])
                    ws.update('A2:C2', [['Software Licenses', '3000', '3000']])
                    print("  ✓ Filled supplies")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
            
            # Other Direct
            elif ('other' in ws_name and 'direct' in ws_name) or ws.title == 'g. Other Direct Costs':
                print(f"\nFilling '{ws.title}'...")
                try:
                    ws.clear()
                    ws.update('A1:C1', [['Item', 'Year 1', 'Year 2']])
                    
                    data = [
                        ['Partner Microgrants', '60000', '40000'],
                        ['Cloud Infrastructure', '10000', '14515'],
                        ['TOTAL', '70000', '54515']
                    ]
                    
                    for i, row in enumerate(data, start=2):
                        ws.update(f'A{i}:C{i}', [row])
                    
                    print("  ✓ Filled other direct costs")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
            
            # Indirect
            elif 'indirect' in ws_name or ws.title == 'i. Indirect Charges':
                print(f"\nFilling '{ws.title}'...")
                try:
                    ws.clear()
                    ws.update('A1:C1', [['Description', 'Year 1', 'Year 2']])
                    ws.update('A2:C2', [['Indirect (10% de minimis)', '23125', '22145']])
                    print("  ✓ Filled indirect costs")
                    filled_count += 1
                except Exception as e:
                    print(f"  Error: {e}")
        
        print("\n" + "="*70)
        print(f"✓ Successfully filled {filled_count} worksheets!")
        print("="*70)
        print("\nEXPECTED TOTALS:")
        print("  Year 1: $254,375")
        print("  Year 2: $243,598")
        print("  GRAND TOTAL: $497,973")
        print(f"\n✓ View your spreadsheet:")
        print(f"  https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
        
    except Exception as e:
        print(f"\nError accessing spreadsheet: {e}")

def main():
    print("="*70)
    print("PBIF BUDGET FILLER - DESKTOP APP VERSION")
    print("="*70)
    
    try:
        print("\nAuthenticating...")
        gc = authenticate()
        print("\n✓ Authentication successful!")
        
        fill_budget(gc)
        
    except Exception as e:
        print(f"\nError: {e}")
        print("\nIf this doesn't work, just use manual copy-paste:")
        print("python3 simple_fill_budget.py")

if __name__ == "__main__":
    main()