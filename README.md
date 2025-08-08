# PolicyEngine Policy Library

AI-Powered Infrastructure for Every Benefit Rule in America

## Overview

The Policy Library creates an immutable archive of every statute, regulation, and form that defines benefit eligibility across the United States. Our AI crawlers monitor agency websites weekly, capturing changes before documents disappear, and human reviewers verify accuracy through GitHub pull requests.

## Live Demo

Visit the live application: [https://policyengine.github.io/policy-library/](https://policyengine.github.io/policy-library/)

## Problem We Solve

- **18% of benefit program URLs from 2019 are dead today**
- When CaseText shut down, thousands of legal references vanished overnight
- State websites reorganize constantly, breaking links that power benefit calculators
- Families lose benefits and organizations waste thousands of hours maintaining broken systems

## Our Solution

1. **AI Crawls**: Claude/GPT-4 monitors 50+ jurisdictions weekly
2. **Humans Verify**: GitHub pull request review process
3. **Partners Build**: Stable API with permanent source IDs

## Impact

- **160,000** people served annually through partner tools
- **50+** jurisdictions covered (federal + states)
- **100,000+** documents archived with full version history
- **24pp** accuracy improvement in LLM benefit calculations

## Partnership Ecosystem

### Research Institutions
- Georgetown University
- University of Michigan
- NBER
- USC

### Direct Service Organizations
- MyFriendBen (~3,500 screeners/month in Colorado)
- Benefit Navigator (Gates/Nava AI partnership)
- Navvy
- Benefit Kitchen

### Government Partners
- Atlanta Fed (advisor with Policy Rules Database)
- Georgia Center for Opportunity
- Various state agencies

## Technical Architecture

- **AI Crawling**: Claude/GPT-4 powered intelligent extraction
- **Storage**: Git repositories (one per jurisdiction) with Git LFS for PDFs
- **Web Archiving**: Browsertrix for web-based statutes/regulations (WARC format)
- **Search**: OpenSearch for full-text search capabilities
- **API**: Stable source_id system to replace fragile direct links

## Development

### Prerequisites
- Node.js >= 18
- npm >= 9

### Local Development
```bash
# Install dependencies
cd policy-library-app
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Repository Structure
```
policy-library/
├── policy-library-app/     # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx        # Main app component
│   │   └── App.css        # PolicyEngine styling
│   └── package.json       # Dependencies and scripts
├── one-pager.html         # Standalone PBIF proposal
├── CLAUDE.md             # AI assistant instructions
└── README.md             # This file
```

## PBIF Application

This repository supports our application to the Public Benefit Innovation Fund (PBIF) Summer 2025 Open Call.

### Funding Request
- **Year 1 Budget**: $498,000
- **Personnel (2.5 FTE)**: $405,000
- **Partner Micro-grants**: $60,000
- **Cloud & Infrastructure**: $18,000
- **Contingency**: $15,000

### Timeline
- **Q1**: Core infrastructure & AI crawler development
- **Q2**: 10 state pilots, partner integration
- **Q3**: Scale to 30 states, API launch
- **Q4**: Full 50+ jurisdiction deployment

### Application Deadline
August 16, 2025, 11:59 PM PT

## Existing Work

- **Pilot Repositories**: 
  - [us-nc-sources](https://github.com/PolicyEngine/us-nc-sources) - North Carolina documents
  - Atlanta Fed Policy Rules Database collaboration
- **Related Projects**: PolicyEngine microsimulation models for US, UK, Canada, and other countries

## Contact

**Max Ghenis, CEO**  
Email: max@policyengine.org  
Website: [policyengine.org](https://policyengine.org)

## License

Public Domain (Unlicense)