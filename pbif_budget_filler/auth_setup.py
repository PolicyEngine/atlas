#!/usr/bin/env python3
"""Setup Google Sheets authentication for PBIF Budget Filler."""

import pickle
import os
from pathlib import Path
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

def setup_auth():
    """Setup or refresh Google Sheets authentication."""
    creds = None
    token_path = Path(__file__).parent.parent / "token.pickle"
    
    # Check if token.pickle exists
    if token_path.exists():
        print(f"✓ Found existing token at: {token_path}")
        with open(token_path, 'rb') as token:
            creds = pickle.load(token)
    
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print("Refreshing expired token...")
            creds.refresh(Request())
        else:
            print("No valid credentials found. Setting up new authentication...")
            
            # Look for credentials.json in various locations
            cred_locations = [
                Path(__file__).parent.parent / "credentials.json",
                Path(__file__).parent / "credentials.json",
                Path.home() / "Downloads" / "credentials.json"
            ]
            
            cred_file = None
            for path in cred_locations:
                if path.exists():
                    cred_file = path
                    print(f"Found credentials.json at: {cred_file}")
                    break
            
            if not cred_file:
                print("\n❌ ERROR: credentials.json not found!")
                print("\nTo set up authentication:")
                print("1. Go to https://console.cloud.google.com/apis/credentials")
                print("2. Create a new OAuth 2.0 Client ID (or use existing)")
                print("3. Download the credentials as 'credentials.json'")
                print(f"4. Place it in: {Path(__file__).parent.parent}")
                return False
            
            flow = InstalledAppFlow.from_client_secrets_file(
                str(cred_file), SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save the credentials for the next run
        with open(token_path, 'wb') as token:
            pickle.dump(creds, token)
        print(f"✓ Saved credentials to: {token_path}")
    else:
        print("✓ Credentials are valid and ready to use")
    
    return True

def test_connection():
    """Test the connection by accessing the budget spreadsheet."""
    import gspread
    
    token_path = Path(__file__).parent.parent / "token.pickle"
    
    if not token_path.exists():
        print("❌ No token.pickle found. Run setup_auth() first.")
        return False
    
    try:
        with open(token_path, 'rb') as token:
            creds = pickle.load(token)
        
        client = gspread.authorize(creds)
        
        # Try to open the PBIF budget spreadsheet
        spreadsheet_id = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'
        sheet = client.open_by_key(spreadsheet_id)
        
        print(f"✓ Successfully connected to: {sheet.title}")
        print(f"  URL: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")
        
        # List worksheets
        worksheets = sheet.worksheets()
        print(f"  Found {len(worksheets)} worksheets")
        
        return True
        
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        return False

if __name__ == "__main__":
    print("="*60)
    print("PBIF Budget Filler - Authentication Setup")
    print("="*60)
    print()
    
    if setup_auth():
        print("\nTesting connection...")
        if test_connection():
            print("\n✅ Authentication setup complete!")
            print("You can now run: python populate_budget_batch.py")
        else:
            print("\n⚠️ Authentication saved but connection test failed")
    else:
        print("\n❌ Authentication setup failed")