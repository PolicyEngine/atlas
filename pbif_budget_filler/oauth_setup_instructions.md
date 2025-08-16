# Google Sheets OAuth Setup Instructions

This guide walks through setting up Google Sheets API access for the PBIF Budget Filler.

## Prerequisites

- Google account with access to the PBIF budget spreadsheet
- Python 3.10+ with venv

## Step 1: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Library**
4. Search for "Google Sheets API"
5. Click on it and press **Enable**

## Step 2: Create OAuth 2.0 Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **OAuth client ID**
3. If prompted, configure the OAuth consent screen:
   - User Type: **Internal** (if using organizational account) or **External**
   - App name: "PBIF Budget Filler"
   - User support email: Your email
   - Developer contact: Your email
   - Scopes: Leave default (you'll add specific scopes in the app)
   - Test users: Add your email

4. For Application type, select **Desktop app**
5. Name it "PBIF Budget Filler Client"
6. Click **Create**
7. Click **Download JSON** and save as `credentials.json`

## Step 3: Place Credentials File

Move the downloaded `credentials.json` to the parent directory of `pbif_budget_filler`:

```
policy-library/
├── pbif_budget_filler/
│   ├── auth_setup.py
│   ├── populate_budget_batch.py
│   └── ...
├── credentials.json  <-- Place here
└── token.pickle     <-- Will be created after first auth
```

## Step 4: Run Authentication Setup

```bash
cd pbif_budget_filler
source venv/bin/activate
python auth_setup.py
```

This will:
1. Open your browser for Google authorization
2. Ask you to select your Google account
3. Request permission to access Google Sheets
4. Save credentials to `../token.pickle` for future use

## Step 5: Verify Access

The `auth_setup.py` script will automatically test access to the spreadsheet:

```
✓ Successfully connected to: PBIF Budget Template
  URL: https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw
  Found 10 worksheets
```

## Troubleshooting

### "Access blocked" error
- Make sure the OAuth consent screen is configured
- If using organizational account, may need admin approval

### "Insufficient permission" error
- Ensure the Google account has edit access to the spreadsheet
- Check that Google Sheets API is enabled in your project

### Token expired
- Delete `../token.pickle` and run `auth_setup.py` again
- The token will auto-refresh if refresh token is available

### Multiple Google accounts
- Use an incognito/private browser window to avoid account confusion
- Or sign out of other accounts first

## Security Notes

- **Never commit** `credentials.json` or `token.pickle` to git
- Both files are already in `.gitignore`
- `token.pickle` contains your access token - keep it secure
- Tokens expire after a period of inactivity but auto-refresh when possible

## Sharing Access

To allow others to use the budget filler:

1. **Option A: Share the spreadsheet**
   - Give them edit access to the Google Sheet
   - They follow this guide to set up their own OAuth

2. **Option B: Service Account** (for automation)
   - Create a service account instead of OAuth
   - Share the spreadsheet with the service account email
   - Use service account JSON key file

## Required Permissions

The app requires the following Google Sheets API scope:
- `https://www.googleapis.com/auth/spreadsheets` (Read and write access)

This allows the budget filler to:
- Read existing spreadsheet data
- Update cell values
- Modify cell formatting (remove yellow highlights)
- Preserve formulas

## Quick Test

After setup, test with:

```bash
python populate_budget_batch.py
```

You should see:
```
============================================================
POPULATING PBIF BUDGET FROM YAML (BATCH MODE)
============================================================
...
✓ All worksheets updated successfully
```