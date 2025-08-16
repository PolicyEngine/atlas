# PBIF Budget Filler

Automated tool for populating the PBIF budget spreadsheet from YAML configuration files.

## Setup

1. **Install dependencies:**
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install gspread google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client PyYAML
   ```

2. **Authentication:**
   - Ensure you have `token.pickle` in the parent directory (`../token.pickle`)
   - This file contains Google Sheets API credentials
   - If missing, you'll need to run the authentication flow

## Usage

### Quick Update

To update the spreadsheet with current budget data:

```bash
source venv/bin/activate
python populate_budget_batch.py
```

This will:
- Load budget data from `budget_data.yaml`
- Load spreadsheet configuration from `spreadsheet_config.yaml`
- Update all worksheets in ~3 API calls (batch mode)
- Remove yellow highlighting while preserving other formatting
- Display the spreadsheet URL when complete

### Check Budget Total

To verify the current budget total and breakdown:

```bash
source venv/bin/activate
python check_total.py
```

## Configuration Files

### `budget_data.yaml`
Contains all budget line items organized by category:
- **personnel**: Staff positions with FTE%, base salary, and fringe rate (25%)
- **travel**: Trip details with GSA per diem rates
- **equipment**: Empty (items >$5,000)
- **supplies**: Empty (items <$5,000 moved to Other Direct)
- **contractual**: Partner subawards (MyFriendBen $50k, Benefit Navigator $50k, Citizen Codex $30k)
- **other_direct**: Cloud services, AI tools, conferences, advisory services
- **indirect**: 15% rate with explanation

### `spreadsheet_config.yaml`
Defines spreadsheet structure:
- Spreadsheet ID and URL
- Worksheet names and cell mappings
- Data start rows for each tab
- Clear ranges to remove old data

## Modifying the Budget

1. **Edit budget amounts:** Update values in `budget_data.yaml`
2. **Add/remove line items:** Modify the relevant section in `budget_data.yaml`
3. **Change indirect rate:** Update `indirect.rate_percentage` in `budget_data.yaml`
4. **Adjust FTE allocations:** Modify `effort_pct` for personnel

After making changes, run:
```bash
python populate_budget_batch.py
python check_total.py  # Verify new total
```

## Budget Guidelines

Current target: **Under $750,000** for 2-year grant period

Key constraints:
- Personnel fringe rate: 25% (403b only, no health insurance)
- Indirect rate: 15% (7% fiscal sponsor + overhead)
- All items under $5,000 go to Supplies or Other Direct (not Equipment)
- Travel uses GSA FY2025 per diem rates
- Budget values have been updated based on user feedback

## Troubleshooting

### API Rate Limits
The batch script uses only ~3 API calls. If you encounter rate limits:
- Wait 60 seconds and retry
- Ensure you're using `populate_budget_batch.py` (not the individual cell version)

### Formula Preservation
The script preserves formulas in:
- Personnel column E (C*D)
- Travel column K (sum formula)
- Fringe column D (B*C)
- Summary calculations

### Yellow Highlighting
The script automatically removes yellow highlighting while preserving:
- Blue header formatting
- Other cell colors
- All formulas

## Files

- `populate_budget_batch.py` - Main script using efficient batch updates (~3 API calls)
- `populate_budget.py` - Alternative script with individual cell updates (slower)
- `check_total.py` - Verify budget total and breakdown
- `budget_data.yaml` - Budget line items and amounts
- `spreadsheet_config.yaml` - Spreadsheet structure and mappings
- `restore_formulas.py` - Restore formulas if accidentally cleared

## Current Budget Components (Updated for 5K Document Scope)

As configured in budget_data.yaml:
- Personnel: 1.3 FTE over 2 years
  - Project Lead: 0.2 FTE
  - Lead Engineer: 0.4 FTE
  - ML/AI Engineer: 0.4 FTE
  - Policy Analyst: 0.3 FTE
- Fringe: 25% rate
- Travel: Partner sites + conferences
- Equipment: $0
- Supplies: $0  
- Contractual: 
  - MyFriendBen: $50,000
  - Benefit Navigator: $50,000
  - Citizen Codex: $30,000
- Other Direct:
  - Cloud Computing: $15,000 (5K documents)
  - AI API Services: $12,000 (including Clarity Index)
  - Search & Clarity Index: $10,000
  - Technical Advisory: $20,000
  - Document Verification: $15,000
  - AI Tools: $5,000
  - Conferences: $2,600
- Indirect: 15% rate

**Note**: The actual total is calculated by the spreadsheet's Summary tab after applying all formulas and rates. Target is approximately $700,000.

## Spreadsheet

View the live spreadsheet:
https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw