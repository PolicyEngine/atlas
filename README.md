# PolicyEngine Atlas

AI-powered navigation system for America's safety net: mapping policy documents and revealing hidden eligibility pathways.

## Overview

PolicyEngine Atlas addresses a critical infrastructure failure: benefit program documents disappear constantly while their connections remain hidden. This system monitors 50+ jurisdictions, capturing statutes, regulations, and forms before they vanish, while our knowledge graph reveals how programs interact—like how TANF enables SNAP which enables Lifeline.

**Live Application**: https://policyengine.github.io/policy-library/

### Direct Access URLs

- **PBIF Application**: https://policyengine.github.io/policy-library/application
- **Partners List**: https://policyengine.github.io/policy-library/partners
- **ENGINE Application**: https://policyengine.github.io/policy-library/engine

## Features

- **AI-Powered Document Crawling**: Claude/GPT-4 powered intelligent extraction
- **Permanent Archive**: Version-controlled documents with stable source IDs
- **MCP Server Integration**: Native AI assistant support for accurate policy lookups
- **REST API**: Simple endpoints for document access
- **Community Maintained**: Civic tech groups help maintain jurisdiction coverage

## PBIF Budget

**Important**: The budget is maintained in `pbif_budget_filler/budget_data.yaml` and automatically synced to Google Sheets. Check this file for the authoritative budget numbers before making changes.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint and format
npm run lint -- --fix
npx prettier --write .
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Important**: GitHub Pages must be configured to use "GitHub Actions" as the source. See [DEPLOYMENT.md](DEPLOYMENT.md) for configuration details.

## Project Structure

```
src/
├── components/
│   ├── Overview.tsx              # Main landing page
│   ├── Demo.tsx                  # Interactive mock-up
│   ├── Partners.tsx              # Partner organizations
│   ├── PBIFApplication.tsx       # PBIF grant application
│   ├── CivicTechEngagement.tsx  # Community involvement
│   └── ENGINEApplication.tsx     # ENGINE nonprofit application
├── App.tsx                       # Main application component
└── App.css                       # Global styles
```

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: CSS with PolicyEngine design system
- **Deployment**: GitHub Pages via GitHub Actions
- **CI/CD**: GitHub Actions for testing and deployment

## Contributing

We welcome contributions from civic technologists! See our [Community page](https://policyengine.github.io/policy-library/#civic-tech) for ways to get involved.

## License

Public domain (Unlicense) - This is public infrastructure for public benefit.

## Contact

Max Ghenis, CEO - max@policyengine.org

**Application Deadline**: August 16, 2025, 11:59 PM PT