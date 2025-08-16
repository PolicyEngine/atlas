#!/usr/bin/env python3
"""Get all tab names from the spreadsheet using Google Sheets API."""

import pickle
from pathlib import Path
from googleapiclient.discovery import build

# Load credentials
token_path = Path(__file__).parent / "token.pickle"
with open(token_path, 'rb') as token:
    creds = pickle.load(token)

# Build the Sheets API service
service = build('sheets', 'v4', credentials=creds)

SPREADSHEET_ID = '1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw'

# Get spreadsheet metadata
spreadsheet = service.spreadsheets().get(spreadsheetId=SPREADSHEET_ID).execute()

print("Tab names in the PBIF budget spreadsheet:")
print("=" * 50)
for i, sheet in enumerate(spreadsheet['sheets']):
    title = sheet['properties']['title']
    sheet_id = sheet['properties']['sheetId']
    print(f"{i+1:2}. '{title}' (ID: {sheet_id})")
print("=" * 50)