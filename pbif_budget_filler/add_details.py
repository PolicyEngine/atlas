#!/usr/bin/env python3
"""Add detailed explanations and fringe job titles"""

import pickle
import gspread
from pathlib import Path

def add_details():
    """Add job titles to fringe, explanations throughout"""
    
    # Load credentials
    token_path = Path(__file__).parent.parent / "token.pickle"
    with open(token_path, 'rb') as token:
        creds = pickle.load(token)
    
    gc = gspread.authorize(creds)
    
    SPREADSHEET_ID = "1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw"
    
    print("ADDING DETAILED EXPLANATIONS")
    print("="*70)
    
    sheet = gc.open_by_key(SPREADSHEET_ID)
    
    # 1. FRINGE TAB - Add job titles and explanation
    print("\n1. FRINGE TAB - Adding job titles and explanation")
    print("-"*40)
    fringe_ws = sheet.worksheet("b. Fringe")
    
    # Add job titles in column A (rows 4-7)
    job_titles = [
        "Lead Engineer/Project Director",
        "ML/AI Engineer",
        "Policy Analyst",
        "Community Manager"
    ]
    
    for i, title in enumerate(job_titles):
        row = 4 + i
        print(f"  Row {row}: {title}")
        fringe_ws.update(range_name=f"A{row}", values=[[title]])
    
    # Add explanation in A26
    fringe_explanation = (
        "PolicyEngine offers a competitive benefits package including: "
        "1) 25% employer contribution to 403(b) retirement accounts, "
        "2) Employer portion of payroll taxes (7.65% for FICA), and "
        "3) State unemployment insurance. Total fringe rate of 33% reflects "
        "these combined benefits. We do not currently offer health insurance "
        "but the generous retirement contribution helps staff secure their own coverage."
    )
    
    print("\n  Adding fringe explanation to A26...")
    fringe_ws.update(range_name="A26", values=[[fringe_explanation]])
    
    # 2. PERSONNEL TAB - Add justification
    print("\n2. PERSONNEL TAB - Adding justifications")
    print("-"*40)
    personnel_ws = sheet.worksheet("a. Personnel")
    
    # Add explanation in A26
    personnel_explanation = (
        "Personnel allocations reflect the AI-powered nature of this project. "
        "Reduced FTEs are possible due to extensive use of AI coding tools (Claude, GPT-4, Copilot) "
        "for development. Lead Engineer oversees architecture and AI integration. "
        "ML/AI Engineer focuses on crawler development and LLM benchmarking. "
        "Policy Analyst ensures accurate document classification and metadata. "
        "Community Manager coordinates with partner organizations and users."
    )
    
    print("  Adding personnel explanation to A26...")
    personnel_ws.update(range_name="A26", values=[[personnel_explanation]])
    
    # 3. OTHER DIRECT COSTS - Add justifications
    print("\n3. OTHER DIRECT COSTS - Adding justifications")
    print("-"*40)
    other_ws = sheet.worksheet("h. Other")
    
    justifications = [
        "Initial grants to 5 founding partners ($15k each) for integration and feedback during development phase",
        "Implementation grants to 20+ partners ($3k each) for production adoption and case studies",
        "AWS/GCP costs for hosting Git LFS storage, OpenSearch cluster, and API infrastructure",
        "Annual licenses for Claude Team, GPT-4, GitHub Copilot, and specialized development tools",
        "Development environment licenses, IDEs, monitoring tools, and security scanning services"
    ]
    
    # Basis of cost (column E)
    basis = [
        "Based on similar PolicyEngine partner grants",
        "Scaled from pilot program experience",
        "AWS calculator estimates for 100k+ documents",
        "Current market pricing for AI tools",
        "Standard industry pricing"
    ]
    
    for i in range(5):
        row = 4 + i
        print(f"  Row {row}: Adding justification and basis")
        # Column D: Basis of Cost
        other_ws.update(range_name=f"E{row}", values=[[basis[i]]])
        # Column F: Justification
        other_ws.update(range_name=f"F{row}", values=[[justifications[i]]])
    
    # Add overall explanation in A23
    other_explanation = (
        "Other direct costs emphasize AI tooling and partner engagement. "
        "AI coding tools (30k/yr) enable small team to build at scale. "
        "Partner microgrants ensure diverse jurisdiction coverage and real-world validation. "
        "Cloud infrastructure supports permanent archival of 100,000+ documents."
    )
    
    print("\n  Adding other costs explanation to A23...")
    other_ws.update(range_name="A23", values=[[other_explanation]])
    
    # 4. INDIRECT TAB - Add explanation
    print("\n4. INDIRECT TAB - Adding explanation")
    print("-"*40)
    indirect_ws = sheet.worksheet("i. Indirect")
    
    # Add explanation about de minimis rate
    indirect_explanation = (
        "PolicyEngine uses the 10% de minimis indirect cost rate as allowed for nonprofits. "
        "This covers general administrative expenses including accounting, HR support, office supplies, "
        "and other overhead costs not directly attributable to the project."
    )
    
    # Find a good cell for explanation (check structure first)
    print("  Adding indirect explanation...")
    try:
        indirect_ws.update(range_name="A10", values=[[indirect_explanation]])
    except:
        print("  Could not add to A10, trying A8...")
        indirect_ws.update(range_name="A8", values=[[indirect_explanation]])
    
    print("\n" + "="*70)
    print("✓ COMPLETE!")
    print("="*70)
    print("\nAdded detailed explanations throughout:")
    print("  • Fringe: Job titles and benefits explanation")
    print("  • Personnel: Justification for AI-enhanced staffing")
    print("  • Other Direct: Basis and justification for each item")
    print("  • Indirect: Explanation of de minimis rate")
    print(f"\nView spreadsheet: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}")

if __name__ == "__main__":
    add_details()