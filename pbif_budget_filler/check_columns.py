#!/usr/bin/env python3
"""Check columns in the Excel file."""

import pandas as pd

df = pd.read_excel('FY2025_PerDiemRates.xlsx', sheet_name='Master')
print("Columns in the Excel file:")
for col in df.columns:
    print(f"  - {col}")

print("\nFirst 20 rows:")
print(df.iloc[:20].to_string())