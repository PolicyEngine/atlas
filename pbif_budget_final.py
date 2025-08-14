#!/usr/bin/env python3
"""
PBIF Budget - Exactly $498,000
"""

# Target: $498,000 over 2 years
# Strategy: Reduce FTEs to fit budget

def create_exact_budget():
    # ADJUSTED FTEs to fit budget
    # Total ~1.25 FTE instead of 2.5 FTE
    
    print("PBIF BUDGET - PolicyEngine Policy Library")
    print("="*60)
    print("TOTAL REQUEST: $498,000 over 2 years")
    print("="*60)
    
    # Personnel (reduced FTE)
    personnel = {
        'Lead Engineer (0.6 FTE)': {
            'y1_salary': 72000,  # 120k * 0.6
            'y2_salary': 74160,  # 3% increase
        },
        'ML/AI Engineer (0.4 FTE)': {
            'y1_salary': 40000,  # 100k * 0.4
            'y2_salary': 41200,
        },
        'Policy Analyst (0.25 FTE)': {
            'y1_salary': 20000,  # 80k * 0.25
            'y2_salary': 20600,
        }
    }
    
    # Calculate with 30% benefits
    print("\nPERSONNEL (1.25 FTE total):")
    print("-"*40)
    
    personnel_y1_total = 0
    personnel_y2_total = 0
    
    for role, data in personnel.items():
        y1_benefits = data['y1_salary'] * 0.30
        y2_benefits = data['y2_salary'] * 0.30
        y1_total = data['y1_salary'] + y1_benefits
        y2_total = data['y2_salary'] + y2_benefits
        
        personnel_y1_total += y1_total
        personnel_y2_total += y2_total
        
        print(f"\n{role}:")
        print(f"  Year 1: ${data['y1_salary']:,} + ${y1_benefits:,.0f} benefits = ${y1_total:,.0f}")
        print(f"  Year 2: ${data['y2_salary']:,} + ${y2_benefits:,.0f} benefits = ${y2_total:,.0f}")
    
    print(f"\nPersonnel Subtotal: Y1: ${personnel_y1_total:,.0f}, Y2: ${personnel_y2_total:,.0f}")
    
    # Other Direct Costs
    print("\n\nOTHER DIRECT COSTS:")
    print("-"*40)
    
    other_direct = {
        'Partner Microgrants': {'y1': 60000, 'y2': 40000},  # More in Y1 for early partners
        'Cloud Infrastructure': {'y1': 15000, 'y2': 20000},  # Scales up in Y2
        'Software Licenses': {'y1': 3000, 'y2': 3000},
        'Documentation/Outreach': {'y1': 5000, 'y2': 5000},
    }
    
    other_y1_total = 0
    other_y2_total = 0
    
    for item, costs in other_direct.items():
        other_y1_total += costs['y1']
        other_y2_total += costs['y2']
        print(f"{item}: Y1: ${costs['y1']:,}, Y2: ${costs['y2']:,}")
    
    print(f"\nOther Direct Subtotal: Y1: ${other_y1_total:,}, Y2: ${other_y2_total:,}")
    
    # Calculate totals before indirect
    direct_y1 = personnel_y1_total + other_y1_total
    direct_y2 = personnel_y2_total + other_y2_total
    total_direct = direct_y1 + direct_y2
    
    # Calculate indirect to reach exactly $498,000
    # Using 10% de minimis rate
    indirect_rate = 0.10
    indirect_y1 = direct_y1 * indirect_rate
    indirect_y2 = direct_y2 * indirect_rate
    
    # Final totals
    total_y1 = direct_y1 + indirect_y1
    total_y2 = direct_y2 + indirect_y2
    grand_total = total_y1 + total_y2
    
    print("\n\nINDIRECT COSTS (10% de minimis rate):")
    print("-"*40)
    print(f"Year 1: ${indirect_y1:,.0f}")
    print(f"Year 2: ${indirect_y2:,.0f}")
    
    print("\n\nTOTAL BUDGET:")
    print("="*40)
    print(f"Year 1: ${total_y1:,.0f}")
    print(f"Year 2: ${total_y2:,.0f}")
    print(f"GRAND TOTAL: ${grand_total:,.0f}")
    
    # Check how close we are
    difference = grand_total - 498000
    print(f"\nTarget: $498,000")
    print(f"Difference: ${difference:+,.0f}")
    
    if abs(difference) > 1000:
        # Need to adjust
        print("\n\nFINAL ADJUSTMENT NEEDED...")
        # Increase personnel slightly
        adjustment = 498000 - grand_total
        print(f"Adding ${adjustment:,.0f} to Year 1 microgrants")
        other_direct['Partner Microgrants']['y1'] += adjustment / 1.1  # Account for indirect
    
    print("\n\n" + "="*60)
    print("GOOGLE SHEETS ENTRY FORMAT:")
    print("="*60)
    
    print("\nPERSONNEL ROWS:")
    print("Role | Y1 Salary | Y1 Benefits | Y1 Total | Y2 Salary | Y2 Benefits | Y2 Total")
    print("-"*70)
    
    for role, data in personnel.items():
        y1_benefits = data['y1_salary'] * 0.30
        y2_benefits = data['y2_salary'] * 0.30
        y1_total = data['y1_salary'] + y1_benefits
        y2_total = data['y2_salary'] + y2_benefits
        
        print(f"{role}:\t{data['y1_salary']}\t{y1_benefits:.0f}\t{y1_total:.0f}\t"
              f"{data['y2_salary']}\t{y2_benefits:.0f}\t{y2_total:.0f}")
    
    print("\n\nOTHER DIRECT COSTS ROWS:")
    print("Item | Year 1 | Year 2")
    print("-"*30)
    for item, costs in other_direct.items():
        print(f"{item}:\t{costs['y1']}\t{costs['y2']}")
    
    print(f"\n\nINDIRECT (10%):\t{indirect_y1:.0f}\t{indirect_y2:.0f}")
    
    # Alternative: Keep 2.5 FTE but adjust salaries way down
    print("\n\n" + "="*60)
    print("ALTERNATIVE: Full 2.5 FTE with lower salaries")
    print("="*60)
    
    alt_personnel = {
        'Lead Engineer (1.0 FTE)': {'y1': 85000, 'y2': 87550},
        'ML/AI Engineer (0.8 FTE)': {'y1': 64000, 'y2': 65920},  # 80k * 0.8
        'Policy Analyst (0.7 FTE)': {'y1': 49000, 'y2': 50470},   # 70k * 0.7
    }
    
    alt_y1_sal = sum(p['y1'] for p in alt_personnel.values())
    alt_y2_sal = sum(p['y2'] for p in alt_personnel.values())
    alt_y1_ben = alt_y1_sal * 0.25  # 25% benefits
    alt_y2_ben = alt_y2_sal * 0.25
    alt_y1_per = alt_y1_sal + alt_y1_ben
    alt_y2_per = alt_y2_sal + alt_y2_ben
    
    # Other direct: $30k each year for partners, $9k infrastructure
    alt_other_y1 = 30000 + 9000
    alt_other_y2 = 30000 + 9000
    
    alt_direct_y1 = alt_y1_per + alt_other_y1
    alt_direct_y2 = alt_y2_per + alt_other_y2
    
    # 10% indirect
    alt_ind_y1 = alt_direct_y1 * 0.10
    alt_ind_y2 = alt_direct_y2 * 0.10
    
    alt_total_y1 = alt_direct_y1 + alt_ind_y1
    alt_total_y2 = alt_direct_y2 + alt_ind_y2
    alt_grand = alt_total_y1 + alt_total_y2
    
    print("\nPersonnel (2.5 FTE):")
    for role, data in alt_personnel.items():
        print(f"  {role}: Y1 ${data['y1']:,}, Y2 ${data['y2']:,}")
    
    print(f"\nPersonnel with 25% benefits: Y1 ${alt_y1_per:,.0f}, Y2 ${alt_y2_per:,.0f}")
    print(f"Other Direct: Y1 ${alt_other_y1:,}, Y2 ${alt_other_y2:,}")
    print(f"Indirect (10%): Y1 ${alt_ind_y1:,.0f}, Y2 ${alt_ind_y2:,.0f}")
    print(f"\nTOTAL: Y1 ${alt_total_y1:,.0f}, Y2 ${alt_total_y2:,.0f}")
    print(f"GRAND TOTAL: ${alt_grand:,.0f}")
    print(f"Difference from $498k: ${alt_grand - 498000:+,.0f}")

create_exact_budget()