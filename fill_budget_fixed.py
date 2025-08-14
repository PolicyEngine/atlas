#!/usr/bin/env python3
"""
Fixed PBIF Budget Filler - Using console auth instead of browser
"""

import os
import sys
import pickle

try:
    import gspread
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
except ImportError:
    print("Installing packages...")
    os.system("pip install --quiet gspread google-auth google-auth-oauthlib google-auth-httplib2")
    import gspread
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

def authenticate():
    """Authenticate using console-based flow instead of browser."""
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
            
            print("\nStarting authentication...")
            print("This will open a browser window.")
            print("If you see an error, we'll need to reconfigure the OAuth client.\n")
            
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            
            # Try console-based auth instead of local server
            try:
                # First try with no port (uses console)
                creds = flow.run_console()
            except:
                # If that fails, try with a different port
                try:
                    creds = flow.run_local_server(port=8080, 
                                                 success_message='Authentication successful! You can close this window.',
                                                 open_browser=True)
                except:
                    print("\nAuthentication failed. Let's fix this:")
                    print("\n" + "="*70)
                    print("FIX INSTRUCTIONS:")
                    print("="*70)
                    print("\n1. Go back to Google Cloud Console:")
                    print("   https://console.cloud.google.com/apis/credentials")
                    print("\n2. Click on your OAuth 2.0 Client ID")
                    print("\n3. Under 'Authorized redirect URIs', add:")
                    print("   - http://localhost:8080/")
                    print("   - http://localhost:8080")
                    print("   - http://localhost/")
                    print("\n4. Click 'SAVE'")
                    print("\n5. Wait 2-5 minutes for changes to propagate")
                    print("\n6. Run this script again")
                    print("="*70)
                    sys.exit(1)
            
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    
    return gspread.authorize(creds)

def fill_budget(gc):
    """Fill the budget spreadsheet."""
    
    print("\nOpening spreadsheet...")
    sheet = gc.open_by_key(SPREADSHEET_ID)
    print(f"✓ Opened: {sheet.title}")
    
    # Get all worksheets
    worksheets = sheet.worksheets()
    print(f"✓ Found {len(worksheets)} worksheets")
    
    # Our budget data
    personnel_data = [
        ['Lead Engineer/Director', '0.75', '67500', '69525'],
        ['ML/AI Engineer', '0.5', '40000', '41200'],
        ['Policy Coordinator', '0.25', '17500', '18025']
    ]
    
    other_direct_data = [
        ['Partner Microgrants', '60000', '40000'],
        ['Cloud Infrastructure', '10000', '14515'],
        ['Software Licenses', '3000', '3000'],
        ['Travel/Dissemination', '2000', '3000']
    ]
    
    success_count = 0
    
    for ws in worksheets:
        ws_title = ws.title.lower()
        
        # Try to fill personnel
        if 'personnel' in ws_title or 'a.' in ws.title.lower():
            try:
                print(f"\nFilling {ws.title}...")
                # Add header
                ws.update('A1:D1', [['Position', 'FTE', 'Year 1', 'Year 2']])
                # Add data
                for i, row in enumerate(personnel_data, start=2):
                    ws.update(f'A{i}:D{i}', [row])
                print(f"  ✓ Updated personnel")
                success_count += 1
            except Exception as e:
                print(f"  Could not update: {e}")
        
        # Try to fill fringe
        elif 'fringe' in ws_title or 'b.' in ws.title.lower():
            try:
                print(f"\nFilling {ws.title}...")
                ws.update('A2:C2', [['Benefits (25%)', '31250', '32188']])
                print(f"  ✓ Updated fringe")
                success_count += 1
            except Exception as e:
                print(f"  Could not update: {e}")
        
        # Try to fill other direct
        elif ('other' in ws_title and 'direct' in ws_title) or 'g.' in ws.title.lower():
            try:
                print(f"\nFilling {ws.title}...")
                ws.update('A1:C1', [['Item', 'Year 1', 'Year 2']])
                for i, row in enumerate(other_direct_data, start=2):
                    ws.update(f'A{i}:C{i}', [row])
                print(f"  ✓ Updated other direct costs")
                success_count += 1
            except Exception as e:
                print(f"  Could not update: {e}")
        
        # Try to fill indirect
        elif 'indirect' in ws_title or 'i.' in ws.title.lower():
            try:
                print(f"\nFilling {ws.title}...")
                ws.update('A2:C2', [['Indirect (10%)', '23125', '22145']])
                print(f"  ✓ Updated indirect")
                success_count += 1
            except Exception as e:
                print(f"  Could not update: {e}")
    
    print("\n" + "="*70)
    print(f"✓ Successfully updated {success_count} worksheets")
    print("="*70)
    print("\nExpected totals:")
    print("  Year 1: $254,375")
    print("  Year 2: $243,598")
    print("  GRAND TOTAL: $497,973")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

def main():
    print("="*70)
    print("PBIF BUDGET FILLER (FIXED VERSION)")
    print("="*70)
    
    try:
        gc = authenticate()
        print("\n✓ Authentication successful!")
        fill_budget(gc)
    except Exception as e:
        print(f"\nError: {e}")
        print("\nIf authentication failed, please:")
        print("1. Go to Google Cloud Console and edit your OAuth client")
        print("2. Add the redirect URIs mentioned above")
        print("3. Or just use manual copy-paste: python3 simple_fill_budget.py")

if __name__ == "__main__":
    main()