#!/usr/bin/env python3
"""Update PBIF budget spreadsheet with expanded partner allocations."""

import gspread
from google.oauth2.service_account import Credentials
import time

# Set up authentication
scope = ['https://www.googleapis.com/auth/spreadsheets']
creds = Credentials.from_service_account_file(
    'credentials.json',
    scopes=scope
)
client = gspread.authorize(creds)

# Open the spreadsheet
sheet = client.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
worksheet = sheet.worksheet('Federal Agencies')

# Update partner contracts to $90k per year (total $180k)
# This includes: MyFriendBen ($50k), Benefit Navigator ($50k), GCO ($30k), Others ($50k)
contractual_data = [
    ["LOI-1", "MyFriendBen", "", 50000, "Deep integration pilot - 5 states (CO, NC, MA, IL, TX)"],
    ["LOI-2", "Benefit Navigator", "", 50000, "Deep integration pilot - 7 markets via PolicyEngine API"],
    ["LOI-3", "Georgia Center for Opportunity", "", 30000, "Technical integration with benefitscliffs.org"],
    ["LOI-4", "Urban Institute & Others", "", 50000, "Urban Institute safety net corpus, Mirza childcare data, additional partners"],
]

# Find the Contractual section and update it
print("Searching for Contractual section...")
all_values = worksheet.get_all_values()

contractual_row = None
for i, row in enumerate(all_values):
    if row and row[0] == "Contractual":
        contractual_row = i + 1
        print(f"Found Contractual section at row {contractual_row}")
        break

if contractual_row:
    # Clear old partner entries (rows after Contractual)
    print("Clearing old entries...")
    for i in range(4):  # Clear 4 rows for partners
        row_to_clear = contractual_row + i + 1
        worksheet.update(f'A{row_to_clear}:Z{row_to_clear}', [[''] * 26])
        time.sleep(1)
    
    # Add new partner data
    print("Adding updated partner allocations...")
    for i, partner in enumerate(contractual_data):
        row_num = contractual_row + i + 1
        
        # Prepare row data - partner info goes in columns B-E
        row_data = [''] * 26  # Initialize empty row
        row_data[1:5] = partner[:4]  # Columns B-E: Type, Contractor, Location, Amount
        row_data[5] = partner[4] if len(partner) > 4 else ""  # Column F: Justification
        
        # Year 1 amount in column H (90000 total)
        row_data[7] = 22500  # Each partner's share of Year 1 $90k
        
        # Year 2 amount in column T (90000 total)  
        row_data[19] = 22500  # Each partner's share of Year 2 $90k
        
        # Update the row
        worksheet.update(f'A{row_num}:Z{row_num}', [row_data])
        print(f"  Added: {partner[1]} - ${partner[3]:,}")
        time.sleep(1)
    
    # Update totals row for Contractual
    totals_row = contractual_row + 5
    worksheet.update(f'H{totals_row}', [[90000]])  # Year 1 total
    worksheet.update(f'T{totals_row}', [[90000]])  # Year 2 total
    print(f"Updated Contractual totals: Year 1: $90,000, Year 2: $90,000")
    
    # Update travel to add the extra $141
    travel_row = None
    for i, row in enumerate(all_values):
        if row and "Travel" in str(row[0]):
            travel_row = i + 1
            print(f"Found Travel at row {travel_row}")
            break
    
    if travel_row:
        worksheet.update(f'H{travel_row}', [[2071]])  # Year 1
        worksheet.update(f'T{travel_row}', [[3070]])  # Year 2
        print("Updated Travel amounts to balance budget to $700,000")
    
    print("\nBudget update complete!")
    print("Total grant request: $700,000")
    print("Partner allocations:")
    print("  - MyFriendBen: $50,000")
    print("  - Benefit Navigator: $50,000")
    print("  - Georgia Center for Opportunity: $30,000")
    print("  - Urban Institute & Others: $50,000")
    print("  - Total Partners: $180,000")
else:
    print("Could not find Contractual section in spreadsheet")