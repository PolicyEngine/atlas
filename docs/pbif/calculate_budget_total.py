#!/usr/bin/env python3
"""
Calculate the exact PBIF budget total from budget_data.yaml
"""

import yaml
from pathlib import Path

def calculate_budget_total(budget_file="../../pbif_budget_filler/budget_data.yaml"):
    """Calculate total budget from YAML data."""
    
    # Load budget data
    budget_path = Path(__file__).parent / budget_file
    with open(budget_path, 'r') as f:
        data = yaml.safe_load(f)
    
    totals = {
        'personnel': 0,
        'travel': 0,
        'equipment': 0,
        'supplies': 0,
        'contractual': 0,
        'other_direct': 0,
        'indirect': 0
    }
    
    # Calculate personnel costs (2-year total)
    for person in data.get('personnel', []):
        annual_salary = person['base_salary'] * (person['effort_pct'] / 100)
        annual_fringe = annual_salary * person['fringe_rate']
        two_year_total = (annual_salary + annual_fringe) * 2
        totals['personnel'] += two_year_total
    
    # Calculate travel costs (already 2-year totals)
    for trip in data.get('travel', []):
        # Each trip cost * number of travelers
        per_trip = (trip['lodging_per_traveler'] * trip['days'] +
                   trip['flight_per_traveler'] +
                   trip['vehicle_per_traveler'] +
                   trip['mie_per_traveler'] * trip['days'])
        total_cost = per_trip * trip['travelers']
        totals['travel'] += total_cost
    
    # Equipment (empty in our case)
    totals['equipment'] = 0
    
    # Supplies (empty in our case)
    totals['supplies'] = 0
    
    # Contractual
    for contract in data.get('contractual', []):
        totals['contractual'] += contract['total_cost']
    
    # Other direct costs
    for expense in data.get('other_direct', []):
        totals['other_direct'] += expense['total_cost']
    
    # Calculate subtotal before indirect
    subtotal = sum(v for k, v in totals.items() if k != 'indirect')
    
    # Calculate indirect costs
    indirect_rate = data.get('indirect', {}).get('rate_percentage', 0) / 100
    totals['indirect'] = subtotal * indirect_rate
    
    # Grand total
    grand_total = subtotal + totals['indirect']
    
    # Print breakdown
    print("PBIF Budget Calculation")
    print("=" * 40)
    print(f"Personnel:        ${totals['personnel']:,.0f}")
    print(f"Travel:           ${totals['travel']:,.0f}")
    print(f"Equipment:        ${totals['equipment']:,.0f}")
    print(f"Supplies:         ${totals['supplies']:,.0f}")
    print(f"Contractual:      ${totals['contractual']:,.0f}")
    print(f"Other Direct:     ${totals['other_direct']:,.0f}")
    print("-" * 40)
    print(f"Subtotal:         ${subtotal:,.0f}")
    print(f"Indirect (15%):   ${totals['indirect']:,.0f}")
    print("=" * 40)
    print(f"GRAND TOTAL:      ${grand_total:,.0f}")
    
    return grand_total

if __name__ == "__main__":
    total = calculate_budget_total()
    print(f"\nExact budget request: ${total:,.0f}")