#!/usr/bin/env python3
"""
PBIF Budget Calculator for PolicyEngine Policy Library
Target: $498,000 over 2 years
"""

import pandas as pd
import numpy as np

# Create budget that totals exactly $498,000

def calculate_budget():
    # Personnel (2.5 FTE total as mentioned)
    personnel = {
        'Role': [
            'Lead Engineer (1.0 FTE)',
            'ML/AI Engineer (0.8 FTE)', 
            'Policy Analyst (0.7 FTE)'
        ],
        'Year_1_Salary': [
            120000,  # 1.0 FTE
            80000,   # 0.8 FTE (100k * 0.8)
            56000    # 0.7 FTE (80k * 0.7)
        ]
    }
    
    # Apply 3% increase for Year 2
    personnel_df = pd.DataFrame(personnel)
    personnel_df['Year_2_Salary'] = personnel_df['Year_1_Salary'] * 1.03
    
    # Add 25% for benefits (lower than 30% to fit budget)
    personnel_df['Year_1_Benefits'] = personnel_df['Year_1_Salary'] * 0.25
    personnel_df['Year_2_Benefits'] = personnel_df['Year_2_Salary'] * 0.25
    
    personnel_df['Year_1_Total'] = personnel_df['Year_1_Salary'] + personnel_df['Year_1_Benefits']
    personnel_df['Year_2_Total'] = personnel_df['Year_2_Salary'] + personnel_df['Year_2_Benefits']
    
    # Other Direct Costs
    other_direct = {
        'Category': [
            'Partner Microgrants',
            'Cloud Infrastructure (AWS/GCP)',
            'Software Licenses',
            'Travel/Conferences'
        ],
        'Year_1': [30000, 9000, 2000, 2000],
        'Year_2': [30000, 9000, 2000, 2000]
    }
    
    other_direct_df = pd.DataFrame(other_direct)
    
    # Calculate subtotals
    personnel_y1_total = personnel_df['Year_1_Total'].sum()
    personnel_y2_total = personnel_df['Year_2_Total'].sum()
    
    other_y1_total = other_direct_df['Year_1'].sum()
    other_y2_total = other_direct_df['Year_2'].sum()
    
    # Direct costs before indirect
    direct_y1 = personnel_y1_total + other_y1_total
    direct_y2 = personnel_y2_total + other_y2_total
    
    # Calculate indirect to reach exactly $498,000
    # Using 7% indirect rate to make numbers work
    indirect_rate = 0.07
    indirect_y1 = direct_y1 * indirect_rate
    indirect_y2 = direct_y2 * indirect_rate
    
    total_y1 = direct_y1 + indirect_y1
    total_y2 = direct_y2 + indirect_y2
    total_project = total_y1 + total_y2
    
    print("="*60)
    print("PBIF BUDGET - PolicyEngine Policy Library")
    print("="*60)
    
    print("\nPERSONNEL:")
    print("-"*40)
    for idx, row in personnel_df.iterrows():
        print(f"\n{row['Role']}")
        print(f"  Year 1: Salary ${row['Year_1_Salary']:,.0f} + Benefits ${row['Year_1_Benefits']:,.0f} = ${row['Year_1_Total']:,.0f}")
        print(f"  Year 2: Salary ${row['Year_2_Salary']:,.0f} + Benefits ${row['Year_2_Benefits']:,.0f} = ${row['Year_2_Total']:,.0f}")
    
    print(f"\nPersonnel Subtotal:")
    print(f"  Year 1: ${personnel_y1_total:,.0f}")
    print(f"  Year 2: ${personnel_y2_total:,.0f}")
    
    print("\n\nOTHER DIRECT COSTS:")
    print("-"*40)
    for idx, row in other_direct_df.iterrows():
        print(f"{row['Category']}: Y1: ${row['Year_1']:,} | Y2: ${row['Year_2']:,}")
    
    print(f"\nOther Direct Subtotal:")
    print(f"  Year 1: ${other_y1_total:,.0f}")
    print(f"  Year 2: ${other_y2_total:,.0f}")
    
    print("\n\nINDIRECT COSTS (7% de minimis rate):")
    print("-"*40)
    print(f"  Year 1: ${indirect_y1:,.0f}")
    print(f"  Year 2: ${indirect_y2:,.0f}")
    
    print("\n\nTOTAL PROJECT BUDGET:")
    print("="*40)
    print(f"  Year 1: ${total_y1:,.0f}")
    print(f"  Year 2: ${total_y2:,.0f}")
    print(f"  TOTAL:  ${total_project:,.0f}")
    
    # Check if we're close to target
    target = 498000
    difference = total_project - target
    print(f"\n  Target: ${target:,}")
    print(f"  Difference: ${difference:+,.0f}")
    
    # Create spreadsheet-ready format
    print("\n\n" + "="*60)
    print("COPY-PASTE FORMAT FOR GOOGLE SHEETS:")
    print("="*60)
    
    print("\nPERSONNEL SECTION:")
    for idx, row in personnel_df.iterrows():
        print(f"{row['Role']}\t{row['Year_1_Salary']:.0f}\t{row['Year_1_Benefits']:.0f}\t{row['Year_1_Total']:.0f}\t{row['Year_2_Salary']:.0f}\t{row['Year_2_Benefits']:.0f}\t{row['Year_2_Total']:.0f}")
    
    print("\nOTHER DIRECT COSTS SECTION:")
    for idx, row in other_direct_df.iterrows():
        print(f"{row['Category']}\t{row['Year_1']}\t{row['Year_2']}")
    
    print(f"\nINDIRECT COSTS:\t{indirect_y1:.0f}\t{indirect_y2:.0f}")
    print(f"\nTOTALS:\t{total_y1:.0f}\t{total_y2:.0f}\t{total_project:.0f}")
    
    # Return values for adjustment if needed
    return {
        'personnel_df': personnel_df,
        'other_direct_df': other_direct_df,
        'totals': {
            'year_1': total_y1,
            'year_2': total_y2,
            'total': total_project
        }
    }

# Run the calculation
budget = calculate_budget()

# If we need to adjust, let's try again with tweaked numbers
if abs(budget['totals']['total'] - 498000) > 1000:
    print("\n\nADJUSTING TO HIT $498,000 EXACTLY...")
    print("="*60)
    
    # Adjust personnel to hit target
    # Reduce benefits to 20% and salaries slightly
    personnel_adjusted = {
        'Role': [
            'Lead Engineer (1.0 FTE)',
            'ML/AI Engineer (0.8 FTE)', 
            'Policy Analyst (0.7 FTE)'
        ],
        'Year_1_Salary': [
            115000,  # Reduced
            78000,   # Reduced
            55000    # Reduced
        ]
    }
    
    personnel_df = pd.DataFrame(personnel_adjusted)
    personnel_df['Year_2_Salary'] = personnel_df['Year_1_Salary'] * 1.03
    
    # 20% benefits
    personnel_df['Year_1_Benefits'] = personnel_df['Year_1_Salary'] * 0.20
    personnel_df['Year_2_Benefits'] = personnel_df['Year_2_Salary'] * 0.20
    
    personnel_df['Year_1_Total'] = personnel_df['Year_1_Salary'] + personnel_df['Year_1_Benefits']
    personnel_df['Year_2_Total'] = personnel_df['Year_2_Salary'] + personnel_df['Year_2_Benefits']
    
    # Same other costs
    other_direct = {
        'Category': [
            'Partner Microgrants',
            'Cloud Infrastructure (AWS/GCP)',
            'Software Licenses'
        ],
        'Year_1': [30000, 9000, 3000],
        'Year_2': [30000, 9000, 3000]
    }
    
    other_direct_df = pd.DataFrame(other_direct)
    
    personnel_y1_total = personnel_df['Year_1_Total'].sum()
    personnel_y2_total = personnel_df['Year_2_Total'].sum()
    
    other_y1_total = other_direct_df['Year_1'].sum()
    other_y2_total = other_direct_df['Year_2'].sum()
    
    direct_y1 = personnel_y1_total + other_y1_total
    direct_y2 = personnel_y2_total + other_y2_total
    
    # Adjust indirect rate to hit exactly $498,000
    # Total = direct_y1 + direct_y2 + indirect
    # 498000 = direct_y1 + direct_y2 + indirect
    total_direct = direct_y1 + direct_y2
    total_indirect_needed = 498000 - total_direct
    indirect_rate = total_indirect_needed / total_direct
    
    indirect_y1 = direct_y1 * indirect_rate
    indirect_y2 = direct_y2 * indirect_rate
    
    total_y1 = direct_y1 + indirect_y1
    total_y2 = direct_y2 + indirect_y2
    total_project = total_y1 + total_y2
    
    print("\nADJUSTED BUDGET TO HIT EXACTLY $498,000:")
    print("-"*40)
    print(f"Personnel Year 1: ${personnel_y1_total:,.0f}")
    print(f"Personnel Year 2: ${personnel_y2_total:,.0f}")
    print(f"Other Direct Year 1: ${other_y1_total:,.0f}")
    print(f"Other Direct Year 2: ${other_y2_total:,.0f}")
    print(f"Indirect Rate: {indirect_rate:.1%}")
    print(f"Indirect Year 1: ${indirect_y1:,.0f}")
    print(f"Indirect Year 2: ${indirect_y2:,.0f}")
    print(f"\nTOTAL YEAR 1: ${total_y1:,.0f}")
    print(f"TOTAL YEAR 2: ${total_y2:,.0f}")
    print(f"GRAND TOTAL: ${total_project:,.0f}")
    
    print("\n\nFINAL SPREADSHEET ENTRIES:")
    print("="*60)
    print("\nPERSONNEL:")
    for idx, row in personnel_df.iterrows():
        print(f"{row['Role']}")
        print(f"  Year 1: ${row['Year_1_Salary']:,.0f} salary + ${row['Year_1_Benefits']:,.0f} benefits = ${row['Year_1_Total']:,.0f}")
        print(f"  Year 2: ${row['Year_2_Salary']:,.0f} salary + ${row['Year_2_Benefits']:,.0f} benefits = ${row['Year_2_Total']:,.0f}")
    
    print("\nOTHER DIRECT:")
    for idx, row in other_direct_df.iterrows():
        print(f"{row['Category']}: ${row['Year_1']:,} (Y1) | ${row['Year_2']:,} (Y2)")
    
    print(f"\nINDIRECT ({indirect_rate:.1%}):")
    print(f"  Year 1: ${indirect_y1:,.0f}")
    print(f"  Year 2: ${indirect_y2:,.0f}")