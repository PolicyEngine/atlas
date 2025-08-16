#!/usr/bin/env python3
"""Check sheets in the Excel file."""

import pandas as pd

xl_file = pd.ExcelFile('FY2025_PerDiemRates.xlsx')
print("Available sheets in the Excel file:")
for sheet_name in xl_file.sheet_names:
    print(f"  - {sheet_name}")