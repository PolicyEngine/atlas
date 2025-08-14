#!/usr/bin/env python3
"""Simple PBIF Budget Filler - Manual browser auth"""

print("="*70)
print("PBIF BUDGET FILLING INSTRUCTIONS")
print("="*70)
print()
print("Since automated filling needs browser authentication,")
print("here are the exact values to copy-paste into the spreadsheet:")
print()
print("Open the spreadsheet:")
print("https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw")
print()
print("="*70)
print("COPY AND PASTE THESE VALUES:")
print("="*70)
print()

# Summary Tab
print("SUMMARY TAB (First tab):")
print("-"*40)
print("Project Name: PolicyEngine Policy Library")
print("Granting Agency: Public Benefit Innovation Fund (PBIF)")
print("Due Date: August 16, 2025")
print("Preparer: Max Ghenis / PolicyEngine")
print()

# Personnel Tab
print("TAB 'a. Personnel':")
print("-"*40)
print("Copy this table (tab-separated):")
print()
print("Position\tFTE\tYear 1\tYear 2")
print("Lead Engineer/Director\t0.75\t67500\t69525")
print("ML/AI Engineer\t0.5\t40000\t41200")
print("Policy Coordinator\t0.25\t17500\t18025")
print("TOTAL\t1.5\t125000\t128750")
print()

# Fringe Tab
print("TAB 'b. Fringe Benefits':")
print("-"*40)
print("Benefits (25% of salaries)\t31250\t32188")
print()

# Travel Tab
print("TAB 'c. Travel' (if needed):")
print("-"*40)
print("Conference/Dissemination\t2000\t3000")
print()

# Supplies Tab
print("TAB 'e. Supplies':")
print("-"*40)
print("Software Licenses\t3000\t3000")
print()

# Other Direct Tab
print("TAB 'g. Other Direct Costs':")
print("-"*40)
print("Copy this table:")
print()
print("Item\tYear 1\tYear 2")
print("Partner Microgrants\t60000\t40000")
print("Cloud Infrastructure (AWS/GCP)\t10000\t14515")
print("TOTAL\t70000\t54515")
print()

# Indirect Tab
print("TAB 'i. Indirect':")
print("-"*40)
print("Indirect (10% de minimis)\t23125\t22145")
print()

print("="*70)
print("EXPECTED TOTALS:")
print("-"*40)
print("Year 1: $254,375")
print("Year 2: $243,598")
print("GRAND TOTAL: $497,973")
print()
print("This is $27 under the $498,000 target, which is fine!")
print()
print("The Summary tab should auto-calculate these totals.")
print("="*70)