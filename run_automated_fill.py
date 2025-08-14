#!/usr/bin/env python3
"""
Run the automated PBIF budget filler
"""

import sys
import os

# Use the Python that has the packages installed
python_path = "/opt/homebrew/bin/python3.10"

# Check if credentials exist
if not os.path.exists('credentials.json'):
    print("ERROR: credentials.json not found!")
    sys.exit(1)

print("Found credentials.json")
print("Attempting to run automated filling...")
print()
print("Note: If you see an authentication error, it means Google's API")
print("activation is still pending (can take 5 min to a few hours).")
print()

# Run with the correct Python
import subprocess
result = subprocess.run([python_path, "auto_fill_pbif_budget.py"], capture_output=False, text=True)

if result.returncode != 0:
    print()
    print("="*70)
    print("If authentication failed, you have two options:")
    print()
    print("1. Wait a bit and try again (Google API activation delay)")
    print("2. Use manual copy-paste with: python3 simple_fill_budget.py")
    print("="*70)