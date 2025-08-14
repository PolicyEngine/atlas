# Google Sheets Authentication Setup for PBIF Budget

## Option 1: OAuth2 Authentication (Easiest)

1. **Enable Google Sheets API:**
   - Go to https://console.cloud.google.com/
   - Create a new project or select existing
   - Search for "Google Sheets API" and enable it
   - Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
   - Application type: "Desktop app"
   - Download the credentials as `credentials.json`

2. **Install required packages:**
   ```bash
   pip install gspread google-auth google-auth-oauthlib google-auth-httplib2
   ```

3. **Place credentials.json in this directory and run:**
   ```bash
   python fill_pbif_budget_automated.py
   ```
   
   This will:
   - Open a browser for you to authenticate
   - Save a token for future use
   - Fill the spreadsheet automatically

## Option 2: Service Account (For automated/server use)

1. **Create Service Account:**
   - Go to https://console.cloud.google.com/
   - Go to "IAM & Admin" → "Service Accounts"
   - Create new service account
   - Download JSON key file

2. **Share spreadsheet with service account:**
   - Copy the service account email (ends with @...iam.gserviceaccount.com)
   - Share the Google Sheet with this email as "Editor"

3. **Use the service account key file**

## Option 3: Manual with Google Colab

If you have access to Google Colab, you can:

1. Open a new Colab notebook
2. Run this code:
   ```python
   from google.colab import auth
   auth.authenticate_user()
   import gspread
   from google.auth import default
   creds, _ = default()
   gc = gspread.authorize(creds)
   
   # Open the spreadsheet
   sheet = gc.open_by_key('1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw')
   ```

## Which option should we use?

Let me know which authentication method you prefer and I'll create the appropriate script to fill the budget spreadsheet.