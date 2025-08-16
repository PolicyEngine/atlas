#!/usr/bin/env python3
"""Restore formulas in Personnel column E."""

import pickle
from pathlib import Path
from googleapiclient.discovery import build

def main():
    # Get credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    service = build('sheets', 'v4', credentials=creds)
    spreadsheet_id = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'
    
    # Restore formulas in Personnel column E
    requests = []
    
    # Add formulas for E6:E9 (C*D for each row)
    for i in range(6, 10):
        requests.append({
            'updateCells': {
                'range': {
                    'sheetId': 596503110,  # Personnel sheet ID
                    'startRowIndex': i-1,
                    'endRowIndex': i,
                    'startColumnIndex': 4,  # Column E
                    'endColumnIndex': 5
                },
                'rows': [{
                    'values': [{
                        'userEnteredValue': {
                            'formulaValue': f'=C{i}*D{i}'
                        }
                    }]
                }],
                'fields': 'userEnteredValue'
            }
        })
    
    # Execute batch update
    body = {'requests': requests}
    service.spreadsheets().batchUpdate(
        spreadsheetId=spreadsheet_id,
        body=body
    ).execute()
    
    print("✓ Restored formulas in Personnel column E (rows 6-9)")

if __name__ == "__main__":
    main()