#!/usr/bin/env python3
"""Get GSA per diem rates for specific locations."""

import pandas as pd
import json

def get_perdiem_rates():
    """Extract per diem rates from GSA file."""
    
    # Read the Excel file, skip the header rows
    df = pd.read_excel('FY2025_PerDiemRates.xlsx', sheet_name='Master', header=0)
    
    # Rename columns based on the actual structure
    df.columns = ['ID', 'STATE', 'DESTINATION', 'COUNTY', 'SEASON_BEGIN', 
                  'SEASON_END', 'LODGING', 'MIE', 'EXTRA1', 'EXTRA2', 'EXTRA3']
    
    # Skip the standard rate message row
    df = df[df['STATE'].notna()]
    df = df[df['STATE'] != 'STATE']  # Remove header row if still present
    
    # Convert rates to numeric
    df['LODGING'] = pd.to_numeric(df['LODGING'], errors='coerce')
    df['MIE'] = pd.to_numeric(df['MIE'], errors='coerce')
    
    # Locations we need
    locations = [
        ('Chicago', 'IL'),  # RWJ Benefits Data Summit
        ('Denver', 'CO'),   # MyFriendBen site visit
        ('Alexandria', 'VA')  # USDA FNS meetings
    ]
    
    rates = {}
    
    # Standard rate (from the note in the file)
    rates['standard'] = {
        'lodging': 110,
        'mie': 68
    }
    
    for city, state in locations:
        # Try to find the specific city
        city_match = df[(df['DESTINATION'].str.contains(city, case=False, na=False)) & 
                        (df['STATE'] == state)]
        
        if not city_match.empty:
            # Get the October rate (first entry if seasonal)
            row = city_match.iloc[0]
            rates[f"{city}, {state}"] = {
                'lodging': int(row['LODGING']) if pd.notna(row['LODGING']) else 110,
                'mie': int(row['MIE']) if pd.notna(row['MIE']) else 68
            }
        else:
            # Try state-level match for any city in that state
            state_match = df[df['STATE'] == state]
            if not state_match.empty:
                # Use standard rate if no specific city found
                rates[f"{city}, {state}"] = rates['standard']
            else:
                # Use standard rate
                rates[f"{city}, {state}"] = rates['standard']
    
    # Washington DC (look for DC state)
    dc_match = df[df['STATE'] == 'DC']
    if not dc_match.empty:
        row = dc_match.iloc[0]
        rates['Washington, DC'] = {
            'lodging': int(row['LODGING']) if pd.notna(row['LODGING']) else 110,
            'mie': int(row['MIE']) if pd.notna(row['MIE']) else 68
        }
    else:
        # DC might be listed as a destination in VA/MD
        dc_match = df[df['DESTINATION'].str.contains('Washington', case=False, na=False)]
        if not dc_match.empty:
            row = dc_match.iloc[0]
            rates['Washington, DC'] = {
                'lodging': int(row['LODGING']) if pd.notna(row['LODGING']) else 110,
                'mie': int(row['MIE']) if pd.notna(row['MIE']) else 68
            }
        else:
            rates['Washington, DC'] = rates['standard']
    
    return rates

if __name__ == "__main__":
    rates = get_perdiem_rates()
    
    print("GSA FY 2025 Per Diem Rates")
    print("=" * 50)
    for location, rate in rates.items():
        print(f"\n{location}:")
        print(f"  Lodging: ${rate['lodging']}/night")
        print(f"  M&IE: ${rate['mie']}/day")
    
    print("\n" + "=" * 50)
    print("\nRates to use in populate_budget.py:")
    print(json.dumps(rates, indent=2))