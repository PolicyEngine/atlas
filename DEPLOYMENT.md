# Deployment Configuration

This application is deployed to GitHub Pages using GitHub Actions.

## GitHub Pages Settings

**Important**: GitHub Pages must be configured to use "GitHub Actions" as the source, not "Deploy from branch".

### Required Configuration
1. Go to repository Settings → Pages
2. Under "Source", select **GitHub Actions** (not "Deploy from branch")
3. Save the changes

### Why This Matters
- The build process creates optimized files in the `dist/` directory
- GitHub Actions deployment serves these built files
- "Deploy from branch" would serve raw source files, breaking the React application

## Deployment Process

1. **Automatic Deployment**: Every push to `main` triggers the deployment workflow
2. **Build**: Vite builds the React application with proper base paths
3. **Deploy**: GitHub Actions uploads the `dist/` folder to GitHub Pages

## Verification

After deployment, verify the site works at: https://policyengine.github.io/policy-library/

You should see:
- PolicyEngine logo in navigation
- Navigation items: Overview, Mock-up, Partners, PBIF Application, Community, ENG(INE) Application
- Interactive demo functionality
- All CSS styling properly applied

## Troubleshooting

If you see raw HTML or "module not found" errors:
1. Check GitHub Pages is set to "GitHub Actions" source
2. Wait 5-10 minutes for caches to clear
3. Check the Actions tab for deployment status

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```