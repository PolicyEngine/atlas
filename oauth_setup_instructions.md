# OAuth2 Setup Instructions for Google Sheets Automation

## Step 1: Enable Google Sheets API (2 minutes)

1. **Go to Google Cloud Console:**
   https://console.cloud.google.com/

2. **Create or Select a Project:**
   - Click the project dropdown at the top
   - Click "New Project" or select an existing one
   - Name it something like "PBIF-Budget" (optional)

3. **Enable Google Sheets API:**
   - In the search bar at the top, type "Google Sheets API"
   - Click on "Google Sheets API" in the results
   - Click the blue "ENABLE" button

## Step 2: Create OAuth2 Credentials (2 minutes)

1. **Go to Credentials:**
   - After enabling the API, click "CREATE CREDENTIALS" button
   - OR go to: https://console.cloud.google.com/apis/credentials

2. **Choose OAuth Client ID:**
   - Click "CREATE CREDENTIALS" → "OAuth client ID"
   - If prompted to configure consent screen:
     - Choose "External" (unless you have a Google Workspace)
     - App name: "PBIF Budget Filler"
     - User support email: Your email
     - Developer contact: Your email
     - Click "Save and Continue" through the scopes section
     - Add your email as a test user
     - Click "Save and Continue"

3. **Create the OAuth Client:**
   - Application type: **Desktop app**
   - Name: "PBIF Budget Client" (or any name)
   - Click "CREATE"

4. **Download Credentials:**
   - Click "DOWNLOAD JSON" button
   - Save the file as `credentials.json` in this directory:
     `/Users/maxghenis/PolicyEngine/policy-library/`

## Step 3: Tell me when ready

Once you have `credentials.json` in the policy-library folder, let me know and I'll run the automated script that will:
1. Open a browser for you to authorize
2. Fill all the budget values automatically
3. Show you the live updates in Google Sheets

## Common Issues:

**If you see "Access blocked: This app's request is invalid":**
- Make sure you added your email as a test user in the OAuth consent screen

**If you see "This app isn't verified":**
- Click "Advanced" → "Go to PBIF Budget Filler (unsafe)"
- This is normal for personal projects

## What you should download:
The file should be named `credentials.json` and look something like:
```json
{
  "installed": {
    "client_id": "xxx.apps.googleusercontent.com",
    "project_id": "your-project",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "client_secret": "xxx"
  }
}
```

Let me know when you have the credentials.json file!