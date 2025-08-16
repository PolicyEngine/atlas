# PBIF Budget Filler

Script to populate the PBIF budget spreadsheet for PolicyEngine's Policy Library application.

## Setup

1. **Dependencies**: Install required packages:
   ```bash
   pip install gspread google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
   ```
2. **Authentication**: Ensure `token.pickle` exists in parent directory with Google Sheets credentials
3. **Spreadsheet ID**: `1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw`

## Main Script

### populate_budget.py - Single consolidated script for entire budget

```bash
python populate_budget.py
```

This single script will:
- Populate all budget worksheets (Personnel, Equipment, Travel, Contractual, Other, Indirect)
- Remove any yellow template highlighting
- Use existing formulas from the template (doesn't overwrite them)
- Let the template calculate totals automatically

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