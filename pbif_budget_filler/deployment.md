# Deployment Guide - PBIF Budget Filler

This guide covers deployment options for the PBIF Budget Filler automation.

## Local Development

For individual use and testing:

```bash
cd pbif_budget_filler
source venv/bin/activate
python populate_budget_batch.py
```

## Team Deployment

### Option 1: Shared Repository Access

Each team member sets up their own local environment:

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run `python auth_setup.py` with their Google account
4. Execute scripts as needed

**Pros:** Simple, each user has their own auth
**Cons:** Manual execution, no automation

### Option 2: GitHub Actions (Recommended for CI/CD)

Set up automated budget updates on push/schedule:

1. **Create Service Account**
   ```
   - Go to Google Cloud Console
   - Create service account
   - Download JSON key
   - Share spreadsheet with service account email
   ```

2. **Add GitHub Secrets**
   ```
   GOOGLE_SHEETS_CREDENTIALS - Base64 encoded service account JSON
   SPREADSHEET_ID - The spreadsheet ID
   ```

3. **GitHub Workflow** (`.github/workflows/update-budget.yml`)
   ```yaml
   name: Update PBIF Budget
   
   on:
     push:
       paths:
         - 'pbif_budget_filler/budget_data.yaml'
     workflow_dispatch:
   
   jobs:
     update:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Python
           uses: actions/setup-python@v4
           with:
             python-version: '3.11'
         
         - name: Install dependencies
           run: |
             cd pbif_budget_filler
             pip install -r requirements.txt
         
         - name: Setup credentials
           run: |
             echo "${{ secrets.GOOGLE_SHEETS_CREDENTIALS }}" | base64 -d > credentials.json
         
         - name: Update budget
           run: |
             cd pbif_budget_filler
             python populate_budget_batch.py
   ```

### Option 3: Cloud Function (Serverless)

Deploy as Google Cloud Function for API access:

1. **Prepare function**
   ```python
   # main.py
   import functions_framework
   from populate_budget_batch import main
   
   @functions_framework.http
   def update_budget(request):
       try:
           main()
           return {'status': 'success'}, 200
       except Exception as e:
           return {'error': str(e)}, 500
   ```

2. **Deploy**
   ```bash
   gcloud functions deploy update-pbif-budget \
     --runtime python311 \
     --trigger-http \
     --allow-unauthenticated \
     --set-env-vars SPREADSHEET_ID=1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw
   ```

### Option 4: Scheduled Updates (Cron)

For regular automated updates:

1. **Local cron** (Mac/Linux)
   ```bash
   # Edit crontab
   crontab -e
   
   # Add daily update at 9 AM
   0 9 * * * cd /path/to/pbif_budget_filler && ./venv/bin/python populate_budget_batch.py
   ```

2. **GitHub Actions Schedule**
   ```yaml
   on:
     schedule:
       - cron: '0 9 * * 1'  # Every Monday at 9 AM UTC
   ```

## Production Checklist

### Before Deployment

- [ ] Test with copy of spreadsheet first
- [ ] Verify all formulas are preserved
- [ ] Check budget totals match expectations
- [ ] Review git history for budget_data.yaml changes
- [ ] Backup current spreadsheet version

### Security

- [ ] Never commit credentials to git
- [ ] Use environment variables for sensitive data
- [ ] Rotate service account keys periodically
- [ ] Limit spreadsheet permissions to necessary users
- [ ] Enable audit logging in Google Workspace

### Monitoring

- [ ] Set up error notifications
- [ ] Log successful updates
- [ ] Track budget total changes
- [ ] Alert if total exceeds threshold

## Environment Variables

Required for production:

```bash
# .env file (never commit)
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json
SPREADSHEET_ID=1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw
BUDGET_THRESHOLD=750000
NOTIFICATION_EMAIL=budget-team@policyengine.org
```

## Rollback Procedure

If issues occur:

1. **Spreadsheet Recovery**
   - File > Version history > See version history
   - Select previous version
   - Restore

2. **Code Rollback**
   ```bash
   git log --oneline pbif_budget_filler/
   git checkout <previous-commit> -- pbif_budget_filler/budget_data.yaml
   python populate_budget_batch.py
   ```

## Testing

### Unit Tests
```python
# test_budget.py
import pytest
from budget_data import load_budget

def test_budget_total():
    budget = load_budget()
    total = calculate_total(budget)
    assert total < 750000, f"Budget ${total} exceeds limit"

def test_fringe_rate():
    budget = load_budget()
    for person in budget['personnel']:
        assert person['fringe_rate'] == 0.25
```

### Integration Test
```bash
# Test with readonly copy
python populate_budget_batch.py --test --spreadsheet-id=TEST_SHEET_ID
```

## Performance

Current metrics:
- API calls: ~3 per full update
- Execution time: ~5 seconds
- Rate limit: 60 requests/minute (plenty of headroom)

## Troubleshooting

### Common Issues

1. **"Insufficient permission"**
   - Check service account has edit access
   - Verify API is enabled in GCP project

2. **"Rate limit exceeded"**
   - Wait 60 seconds
   - Use batch mode (populate_budget_batch.py)

3. **"Formula overwritten"**
   - Run restore_formulas.py
   - Check column skip logic in code

## Support

- GitHub Issues: https://github.com/PolicyEngine/policy-library/issues
- Documentation: See README.md and oauth_setup_instructions.md
- Spreadsheet: https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw