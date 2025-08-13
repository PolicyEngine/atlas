#!/usr/bin/env python3
"""Check if we can access version history through the API"""

import pickle
import gspread
from pathlib import Path
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

def check_versions():
    """Check version history capabilities"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("CHECKING VERSION HISTORY CAPABILITIES")
    print("="*70)
    
    # Try using Drive API v3 for revisions
    try:
        drive_service = build('drive', 'v3', credentials=creds)
        
        print("\n1. Listing recent revisions...")
        revisions = drive_service.revisions().list(
            fileId=SPREADSHEET_ID,
            fields="revisions(id,modifiedTime,lastModifyingUser)",
            pageSize=10
        ).execute()
        
        if 'revisions' in revisions:
            print(f"\nFound {len(revisions['revisions'])} revisions:")
            for i, rev in enumerate(revisions['revisions'][:5]):  # Show first 5
                mod_time = rev.get('modifiedTime', 'Unknown')
                user = rev.get('lastModifyingUser', {}).get('displayName', 'Unknown')
                print(f"  {i+1}. ID: {rev['id']} | Modified: {mod_time} | By: {user}")
            
            # Get the first revision (original)
            if revisions['revisions']:
                first_rev_id = revisions['revisions'][0]['id']
                print(f"\n2. First revision ID (original template): {first_rev_id}")
                
                # We could potentially revert to this revision
                print("\nTo restore, we could update the head revision to match an earlier one.")
                print("However, the Sheets API doesn't directly support revert.")
                print("We'd need to:")
                print("  a) Export the old revision content")
                print("  b) Clear current sheet")
                print("  c) Import the old content")
        
    except Exception as e:
        print(f"\nDrive API error: {e}")
        print("\nThe Drive API requires additional scopes.")
    
    # Alternative: Create a copy from template
    print("\n" + "="*70)
    print("RECOMMENDED APPROACH:")
    print("-"*40)
    print("1. Create a fresh copy from the template:")
    print("   https://docs.google.com/spreadsheets/d/1g-AINvv3uK2VHQ040wgc5FN3ceKYPSeVHeEz7lDhBWk")
    print("2. Run the clean_fill.py script on the fresh copy")
    print("3. This preserves all formulas and formatting")
    
    # Or we could copy the template programmatically
    print("\nOr I can create a fresh copy programmatically...")

if __name__ == "__main__":
    check_versions()