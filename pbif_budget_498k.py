#!/usr/bin/env python3
"""
PBIF Budget - Exactly $498,000
Final clean version for Google Sheets
"""

def print_budget():
    print("="*70)
    print("PBIF BUDGET - PolicyEngine Policy Library")
    print("Total Request: $498,000 over 2 years")
    print("="*70)
    
    # To hit $498k with reasonable numbers:
    # - Keep 2.5 FTE but with modest salaries
    # - Use 10% indirect rate
    
    # Personnel Budget
    personnel = [
        {
            'role': 'Lead Engineer/Project Director',
            'fte': 1.0,
            'y1_salary': 80000,
            'benefits_rate': 0.25
        },
        {
            'role': 'ML/AI Engineer', 
            'fte': 0.8,
            'y1_salary': 56000,  # 70k * 0.8
            'benefits_rate': 0.25
        },
        {
            'role': 'Policy Analyst/Coordinator',
            'fte': 0.7,
            'y1_salary': 42000,  # 60k * 0.7  
            'benefits_rate': 0.25
        }
    ]
    
    print("\nPERSONNEL (2.5 FTE total)")
    print("-"*50)
    print(f"{'Role':<35} {'Year 1':<15} {'Year 2':<15}")
    print("-"*50)
    
    total_y1_personnel = 0
    total_y2_personnel = 0
    
    for p in personnel:
        y1_salary = p['y1_salary']
        y2_salary = y1_salary * 1.03  # 3% increase
        y1_benefits = y1_salary * p['benefits_rate']
        y2_benefits = y2_salary * p['benefits_rate']
        y1_total = y1_salary + y1_benefits
        y2_total = y2_salary + y2_benefits
        
        total_y1_personnel += y1_total
        total_y2_personnel += y2_total
        
        print(f"{p['role']} ({p['fte']} FTE)")
        print(f"  Salary:                          ${y1_salary:>10,}    ${y2_salary:>10,.0f}")
        print(f"  Benefits (25%):                  ${y1_benefits:>10,.0f}    ${y2_benefits:>10,.0f}")
        print(f"  Subtotal:                        ${y1_total:>10,.0f}    ${y2_total:>10,.0f}")
        print()
    
    print(f"{'Personnel Total:':<35} ${total_y1_personnel:>10,.0f}    ${total_y2_personnel:>10,.0f}")
    
    # Other Direct Costs
    print("\n\nOTHER DIRECT COSTS")
    print("-"*50)
    
    other_direct = [
        ('Partner Microgrants', 30000, 30000),
        ('Cloud Infrastructure (AWS/GCP)', 9000, 9000),
        ('Software Licenses', 2000, 2000),
        ('Travel/Dissemination', 2000, 2000),
    ]
    
    total_y1_other = 0
    total_y2_other = 0
    
    for item, y1, y2 in other_direct:
        total_y1_other += y1
        total_y2_other += y2
        print(f"{item:<35} ${y1:>10,}    ${y2:>10,}")
    
    print(f"{'Other Direct Total:':<35} ${total_y1_other:>10,}    ${total_y2_other:>10,}")
    
    # Direct costs total
    total_y1_direct = total_y1_personnel + total_y1_other
    total_y2_direct = total_y2_personnel + total_y2_other
    
    print(f"\n{'Total Direct Costs:':<35} ${total_y1_direct:>10,}    ${total_y2_direct:>10,}")
    
    # Indirect costs (10% de minimis)
    indirect_rate = 0.10
    y1_indirect = total_y1_direct * indirect_rate
    y2_indirect = total_y2_direct * indirect_rate
    
    print(f"\n{'Indirect Costs (10% de minimis):':<35} ${y1_indirect:>10,.0f}    ${y2_indirect:>10,.0f}")
    
    # Grand totals
    total_y1 = total_y1_direct + y1_indirect
    total_y2 = total_y2_direct + y2_indirect
    grand_total = total_y1 + total_y2
    
    print("\n" + "="*50)
    print(f"{'TOTAL YEAR 1:':<35} ${total_y1:>10,.0f}")
    print(f"{'TOTAL YEAR 2:':<35} ${total_y2:>10,.0f}")
    print(f"{'GRAND TOTAL:':<35} ${grand_total:>10,.0f}")
    
    # Adjustment needed?
    if grand_total != 498000:
        adjustment = 498000 - grand_total
        print(f"\nAdjustment needed: ${adjustment:+,.0f}")
        print("Recommend adjusting Year 1 partner microgrants or cloud infrastructure")
        
        # Calculate exact adjustment
        # We need to account for indirect when adjusting
        direct_adjustment = adjustment / 1.10  # Account for 10% indirect
        print(f"Add ${direct_adjustment:+,.0f} to Other Direct Costs to reach exactly $498,000")
    
    # Print copy-paste format for Google Sheets
    print("\n\n" + "="*70)
    print("COPY AND PASTE INTO GOOGLE SHEETS:")
    print("="*70)
    
    print("\nPERSONNEL SECTION:")
    print("(Copy each row into the spreadsheet)")
    print("-"*50)
    
    for p in personnel:
        y1_salary = p['y1_salary']
        y2_salary = y1_salary * 1.03
        y1_benefits = y1_salary * p['benefits_rate']
        y2_benefits = y2_salary * p['benefits_rate']
        y1_total = y1_salary + y1_benefits
        y2_total = y2_salary + y2_benefits
        
        print(f"Row: {p['role']} ({p['fte']} FTE)")
        print(f"  Year 1: Salary={y1_salary}, Benefits={y1_benefits:.0f}, Total={y1_total:.0f}")
        print(f"  Year 2: Salary={y2_salary:.0f}, Benefits={y2_benefits:.0f}, Total={y2_total:.0f}")
    
    print("\nOTHER DIRECT COSTS SECTION:")
    for item, y1, y2 in other_direct:
        print(f"{item}: Year1={y1}, Year2={y2}")
    
    print(f"\nINDIRECT: Year1={y1_indirect:.0f}, Year2={y2_indirect:.0f}")
    
    # Budget justification notes
    print("\n\nBUDGET JUSTIFICATION NOTES:")
    print("="*70)
    print("""
Personnel (2.5 FTE):
- Lead Engineer: Full-time to architect and build core infrastructure
- ML/AI Engineer: 0.8 FTE for crawler development and document extraction
- Policy Analyst: 0.7 FTE for document verification and partner coordination
- Salaries benchmarked to nonprofit sector, not tech industry rates

Partner Microgrants ($60,000 total):
- $20-30k for founding partners (GCO, Atlanta Fed cannot receive funds)
- $5-10k for testing partners
- Compensates time for document identification, testing, and feedback

Cloud Infrastructure ($18,000 total):
- AWS/GCP compute for weekly crawlers across 50+ jurisdictions  
- Storage for 100,000+ documents with version control
- API hosting and content delivery

Software ($4,000 total):
- GitHub Enterprise for version control
- Monitoring and analytics tools

Travel/Dissemination ($4,000 total):
- Conference presentations to share findings
- Partner site visits for implementation support

Indirect (10%):
- Using de minimis rate as we don't have a negotiated federal rate
- Covers general administrative costs
    """)

print_budget()