# PBIF Budget Filler Documentation

## Setup

This directory contains scripts for updating the PBIF budget spreadsheet in Google Sheets.

### Prerequisites

1. **Python Virtual Environment**: The scripts use a local venv with dependencies installed
2. **Authentication**: Uses `token.pickle` from parent directory for Google Sheets access
3. **Spreadsheet ID**: `1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw`

## Running Scripts

### Important: Always use the virtual environment

```bash
# Navigate to this directory
cd pbif_budget_filler

# Activate the virtual environment
source venv/bin/activate

# Run scripts
python update_document_pool.py
python update_partner_allocations.py
# etc.
```

### Common Issues and Solutions

1. **ModuleNotFoundError: No module named 'gspread'**
   - Solution: Make sure you activated the venv first: `source venv/bin/activate`

2. **"no such file or directory: pbif_budget_filler"**
   - Solution: You're already in the directory. Just run `source venv/bin/activate`

3. **Authentication errors**
   - Solution: Check that `../token.pickle` exists and is valid

## Key Scripts

### update_document_pool.py
Updates the contractual section with partner allocations:
- MyFriendBen: $50,000 (demonstration partner)
- Benefit Navigator: $50,000 (demonstration partner)  
- Technical Advisory Services: $40,000
- Document Bounty Program: $35,000
- Citizen Codex: $30,000 (UX research)
- **Total**: $205,000

### Other Scripts
- `budget_filler.py` - Main budget filling logic
- `update_partner_allocations.py` - Updates partner-specific allocations
- `check_contractual.py` - Validates contractual worksheet

## Spreadsheet Structure

The Google Sheet has these tabs:
- a. Cover
- b. Summary  
- c. Detail
- d. Personnel
- e. Fringe
- f. Contractual (partner allocations)
- g. Other
- h. Indirect

## Notes

- The venv uses Python 3.13 (via homebrew on macOS)
- All scripts include rate limiting (1 second delay between updates)
- Deprecation warnings about `worksheet.update()` argument order can be ignored