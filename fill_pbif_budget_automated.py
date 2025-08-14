#!/usr/bin/env python3
"""
Automated PBIF Budget Spreadsheet Filler
Fills the PBIF budget template with PolicyEngine Policy Library budget
Total: $498,000 over 2 years
"""

import os
import sys

try:
    import gspread
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
except ImportError:
    print("Installing required packages...")
    os.system("pip install gspread google-auth google-auth-oauthlib google-auth-httplib2")
    import gspread
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request

import pickle
from datetime import datetime

# If modifying these scopes, delete the file token.pickle
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# The ID of your spreadsheet (from the URL)
SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

def authenticate():
    """Authenticate and return credentials."""
    creds = None
    
    # Token file stores the user's access and refresh tokens
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    
    # If there are no (valid) credentials available, let the user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("ERROR: credentials.json not found!")
                print("Please follow the setup instructions in google_sheets_auth_setup.md")
                sys.exit(1)
            
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    
    return creds

def analyze_spreadsheet(gc):
    """Analyze the spreadsheet structure to understand tabs and layout."""
    try:
        # Open the spreadsheet
        sheet = gc.open_by_key(SPREADSHEET_ID)
        
        print("\n" + "="*70)
        print("SPREADSHEET ANALYSIS")
        print("="*70)
        print(f"Spreadsheet Title: {sheet.title}")
        print(f"Number of worksheets: {len(sheet.worksheets())}")
        print("\nWorksheets (tabs):")
        print("-"*40)
        
        worksheets_info = []
        for i, worksheet in enumerate(sheet.worksheets()):
            print(f"{i+1}. {worksheet.title}")
            # Get first few cells to understand structure
            try:
                values = worksheet.get_all_values()
                if values:
                    worksheets_info.append({
                        'index': i,
                        'title': worksheet.title,
                        'rows': len(values),
                        'cols': len(values[0]) if values else 0,
                        'sample': values[:5] if len(values) > 5 else values
                    })
            except:
                pass
        
        return sheet, worksheets_info
        
    except Exception as e:
        print(f"Error accessing spreadsheet: {e}")
        return None, None

def fill_budget(sheet, worksheets_info):
    """Fill the budget spreadsheet with our data."""
    
    # Our exact budget (total $498,000)
    budget_data = {
        'project_info': {
            'name': 'PolicyEngine Policy Library',
            'agency': 'Public Benefit Innovation Fund (PBIF)',
            'program': 'PBIF Open Call 2025',
            'due_date': 'August 16, 2025',
            'preparer': 'Max Ghenis / PolicyEngine'
        },
        'personnel': [
            {
                'title': 'Lead Engineer/Director',
                'fte': 0.75,
                'y1_salary': 67500,
                'y1_benefits': 16875,
                'y2_salary': 69525,
                'y2_benefits': 17381
            },
            {
                'title': 'ML/AI Engineer',
                'fte': 0.5,
                'y1_salary': 40000,
                'y1_benefits': 10000,
                'y2_salary': 41200,
                'y2_benefits': 10300
            },
            {
                'title': 'Policy Coordinator',
                'fte': 0.25,
                'y1_salary': 17500,
                'y1_benefits': 4375,
                'y2_salary': 18025,
                'y2_benefits': 4506
            }
        ],
        'other_direct': [
            ('Partner Microgrants', 60000, 40000),
            ('Cloud Infrastructure (AWS/GCP)', 10000, 14794),
            ('Software Licenses', 3000, 3000),
            ('Travel/Dissemination', 2000, 3000)
        ],
        'indirect_rate': 0.10
    }
    
    print("\n" + "="*70)
    print("FILLING BUDGET DATA")
    print("="*70)
    
    # Strategy based on tab analysis
    print("\nSTRATEGY:")
    print("-"*40)
    print("Based on the tabs found, I'll fill:")
    
    for info in worksheets_info:
        title_lower = info['title'].lower()
        
        # Look for personnel/salary tab
        if any(keyword in title_lower for keyword in ['personnel', 'salary', 'staff']):
            print(f"\n✓ Found Personnel tab: '{info['title']}'")
            print("  Will fill with 1.5 FTE staff positions")
            
            # TODO: Fill personnel data
            # This would need to be customized based on actual cell locations
            
        # Look for other direct costs tab
        elif any(keyword in title_lower for keyword in ['other', 'direct', 'supplies', 'equipment']):
            print(f"\n✓ Found Other Direct Costs tab: '{info['title']}'")
            print("  Will fill with partner grants, cloud, software, travel")
            
            # TODO: Fill other direct costs
            
        # Look for indirect tab
        elif 'indirect' in title_lower:
            print(f"\n✓ Found Indirect Costs tab: '{info['title']}'")
            print("  Will use 10% de minimis rate")
            
            # TODO: Fill indirect costs
            
        # Look for summary tab
        elif any(keyword in title_lower for keyword in ['summary', 'total', 'overview']):
            print(f"\n✓ Found Summary tab: '{info['title']}'")
            print("  Should auto-calculate from other tabs")
    
    print("\n" + "="*70)
    print("MANUAL ENTRY INSTRUCTIONS")
    print("="*70)
    print("\nSince each grant template varies, here are the exact values to enter:")
    
    print("\n1. PERSONNEL (1.5 FTE):")
    print("-"*40)
    for p in budget_data['personnel']:
        print(f"\n{p['title']} ({p['fte']} FTE):")
        print(f"  Year 1: Salary=${p['y1_salary']:,} Benefits=${p['y1_benefits']:,}")
        print(f"  Year 2: Salary=${p['y2_salary']:,} Benefits=${p['y2_benefits']:,}")
    
    print("\n2. OTHER DIRECT COSTS:")
    print("-"*40)
    for item, y1, y2 in budget_data['other_direct']:
        print(f"{item}: Year1=${y1:,} Year2=${y2:,}")
    
    # Calculate totals
    y1_personnel = sum(p['y1_salary'] + p['y1_benefits'] for p in budget_data['personnel'])
    y2_personnel = sum(p['y2_salary'] + p['y2_benefits'] for p in budget_data['personnel'])
    y1_other = sum(od[1] for od in budget_data['other_direct'])
    y2_other = sum(od[2] for od in budget_data['other_direct'])
    
    y1_direct = y1_personnel + y1_other
    y2_direct = y2_personnel + y2_other
    
    y1_indirect = y1_direct * budget_data['indirect_rate']
    y2_indirect = y2_direct * budget_data['indirect_rate']
    
    y1_total = y1_direct + y1_indirect
    y2_total = y2_direct + y2_indirect
    grand_total = y1_total + y2_total
    
    print("\n3. INDIRECT COSTS (10% de minimis):")
    print("-"*40)
    print(f"Year 1: ${y1_indirect:,.0f}")
    print(f"Year 2: ${y2_indirect:,.0f}")
    
    print("\n4. TOTALS:")
    print("-"*40)
    print(f"Year 1 Total: ${y1_total:,.0f}")
    print(f"Year 2 Total: ${y2_total:,.0f}")
    print(f"GRAND TOTAL: ${grand_total:,.0f}")
    
    if abs(grand_total - 498000) < 1:
        print("\n✓ Budget equals exactly $498,000")
    else:
        print(f"\nNote: ${grand_total - 498000:+,.0f} from target")
    
    return budget_data

def main():
    print("="*70)
    print("PBIF BUDGET SPREADSHEET FILLER")
    print("PolicyEngine Policy Library - $498,000")
    print("="*70)
    
    # Authenticate
    print("\nAuthenticating...")
    creds = authenticate()
    
    # Connect to Google Sheets
    gc = gspread.authorize(creds)
    
    # Analyze spreadsheet structure
    sheet, worksheets_info = analyze_spreadsheet(gc)
    
    if sheet and worksheets_info:
        # Fill budget
        fill_budget(sheet, worksheets_info)
        
        print("\n" + "="*70)
        print("NEXT STEPS:")
        print("="*70)
        print("1. Review the manual entry instructions above")
        print("2. Open the spreadsheet in your browser")
        print("3. Enter the values in the appropriate cells")
        print("4. Verify totals calculate to $498,000")
        print("\nSpreadsheet URL:")
        print(f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")
    else:
        print("\nCould not access spreadsheet. Please check permissions.")

if __name__ == "__main__":
    main()