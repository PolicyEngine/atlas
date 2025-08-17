# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **PolicyEngine Atlas** repository (formerly policy-library) - a PBIF (Public Benefit Innovation Fund) application project aimed at creating an AI-powered, permanently archived collection of policy documents for safety net programs across jurisdictions. The project preserves source documents (statutes, regulations, forms) that PolicyEngine and other tools then encode into rules.

## Project Context

### Core Concept
- **Purpose**: Create an immutable archive of benefit program documents to prevent link rot and document disappearance
- **Approach**: AI crawlers monitor agency websites → Human reviewers verify via GitHub PRs → Stable API serves documents with permanent source IDs
- **Target**: 50+ jurisdictions (federal + states) with 100,000+ documents archived in Year 1
- **AI Integration**: Uses Claude/GPT-4 for intelligent document extraction and improves LLM benefit calculations

### PBIF Application Details
- **Application Deadline**: August 16, 2025, 11:59 PM Pacific Time
- **Funding Request**: $700,000 (within PBIF range of $500K-$2M)
- **Grant Period**: 2 years with 12-month production deployment requirement
- **Focus**: AI-enabled technology reducing administrative burden for SNAP, Medicaid, and other safety net programs

### Key Partners & Users
- **Direct Service Tools**: MyFriendBen (~3,500 screeners/month in CO), Benefit Navigator (Gates/Nava AI partnership), Navvy
- **Research Institutions**: Georgetown, University of Michigan, NBER
- **Government**: Atlanta Fed (advisor with Policy Rules Database collaboration), Georgia Center for Opportunity
- **Impact**: Tools powered by PolicyEngine reach ~160,000 individuals annually (72,000 households)

### Existing Work
- **Pilot Repositories**: us-nc-sources (North Carolina), collaboration with Atlanta Fed Policy Rules Database
- **Related Projects**: Can reference styling from ../state-legislative-district-mock
- **Nonprofit ENGINE**: Complementary application for engineering capacity

## Development Commands

```bash
# Local development
open index.html  # View the combined app locally

# GitHub Pages deployment
git add .
git commit -m "Your commit message"
git push origin main

# The site will be available at:
# https://policyengine.github.io/atlas/

# PBIF Application Content Generation
# IMPORTANT: DO NOT manually edit src/content/pbif/applicationContent.ts
# ONLY edit the markdown files in docs/pbif/responses/
# Then regenerate TypeScript with:
python scripts/build_application_content.py

# Running the app locally
npm install
npm run dev
# Visit http://localhost:5173
```

## Technical Architecture

### Current Implementation (MVP/Mock)
- Single HTML file combining one-pager and interactive mock
- Pure HTML/CSS/JavaScript for GitHub Pages compatibility
- No build system required

### Planned Production Architecture
- **AI Crawling**: Claude/GPT-4 powered intelligent extraction
- **Storage**: Git repositories (one per jurisdiction) with Git LFS for PDFs
- **Web Archiving**: Browsertrix for web-based statutes/regulations (WARC format)
- **Search**: OpenSearch for full-text search capabilities
- **API**: Stable source_id system to replace fragile direct links
- **LLM Benchmark**: Comparison of accuracy with/without source documents

### Color Palette (PolicyEngine Brand)
```css
--black: #000000;
--blue-98: #F7FAFD;
--blue: #2C6496;
--blue-light: #D8E6F3;
--blue-pressed: #17354F;
--dark-gray: #616161;
--dark-red: #b50d0d;
--darkest-blue: #0C1A27;
--gray: #808080;
--light-gray: #F2F2F2;
--teal-accent: #39C6C0;
--teal-light: #F7FDFC;
--teal-pressed: #227773;
--white: #FFFFFF;
```

## Repository Structure

```
atlas/
├── src/
│   ├── components/      # React components (Overview, Demo, BlogPost, etc.)
│   ├── content/pbif/    # Auto-generated TypeScript from markdown
│   └── styles/          # Component-specific CSS
├── docs/pbif/
│   ├── responses/       # 15 markdown files (source of truth for PBIF answers)
│   ├── letters/         # Support letters and combination scripts
│   └── attachments/     # Team bios, roadmap, budget PDFs
├── pbif_budget_filler/  # Python package for Google Sheets automation
├── scripts/             # Build scripts (build_application_content.py)
├── public/              # Static assets
├── CLAUDE.md           # This file (AI guidance)
├── LICENSE             # Public domain (Unlicense)
├── README.md           # Public documentation
└── vite.config.ts      # Vite configuration (base: '/atlas/')
```

## Budget Breakdown (Total 2 Years)

- **Personnel (1.85 FTE)**: $425,235
  - Lead Engineer: 1.0 FTE
  - ML/AI Engineer: 0.8 FTE  
  - Policy Analyst: 0.05 FTE
- **Partner Contracts**: $180,000
  - MyFriendBen: $50,000 (5-state expansion: CO, NC, MA, IL, TX)
  - Benefit Navigator: $50,000 (7 markets via PolicyEngine API)
  - Georgia Center for Opportunity: $30,000 (technical integration)
  - Citizen Codex: $20,000 (UX research & design)
  - Others: $30,000 (Urban Institute, Mirza, additional partners)
- **Cloud & Infrastructure**: $20,000
- **Other Direct Costs**: $11,141
- **Indirect (10% de minimis)**: $63,637
- **Total**: $700,000

## PBIF Budget Google Sheets Automation

**IMPORTANT**: We have a Python package `pbif_budget_filler/` that directly updates the PBIF budget in Google Sheets.

### Key Scripts:
- `update_partner_allocations.py` - Updates partner funding amounts (MFB, BN, GCO, etc.)
- `update_expanded_partners.py` - Updates budget to $700k with expanded partner network
- `final_correct_fill.py` - Main script to fill the entire budget spreadsheet
- Uses `gspread` with credentials in `token.pickle`
- Spreadsheet ID: `1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw`

### To Update Budget in Google Sheets:
```bash
cd pbif_budget_filler
python update_partner_allocations.py  # Or create new script with updated amounts
```

**Note**: Prenatal-to-3 Policy Impact Center contributes documents without receiving funding

## Timeline

- **Months 1-3**: Core infrastructure, AI crawler development
- **Months 4-6**: 10 state pilots, partner integration
- **Months 7-9**: Scale to 30 states, API launch
- **Months 10-12**: Full 50+ jurisdiction deployment, LLM benchmark

## Important Considerations

1. **Document vs Rules**: This library archives source documents, not encoded rules. PolicyEngine and other tools handle the encoding/interpretation.

2. **AI Focus for PBIF**: Emphasize AI-powered crawling, LLM benchmarking, and accuracy improvements when discussing with funders.

3. **Production Deployment**: Must deploy with real data within 12 months per PBIF requirements.

4. **Open Source**: Maintain open access to maximize impact and partner adoption.

5. **Sustainability**: After Year 2, system becomes self-sustaining through PolicyEngine's API revenue model.

## Working with Claude Code - Best Practices

### Managing Hallucinations
- **NEVER make up statistics or claims** - Use placeholders like [X%] or [CITATION NEEDED] when data is unknown
- **Verify all facts** - Search the repository to confirm claims before adding them
- **Be precise with corrections** - When user corrects a fact (e.g., "Pavel worked WITH not AT Atlanta Fed"), propagate the correction everywhere

### Teaching Through Feedback
- **Like a manager reviewing drafts** - User provides specific corrections to teach desired behavior
- **Apply feedback consistently** - When user says "change X to Y", apply that pattern throughout the codebase
- **Learn preferences** - User may ask for specific changes (e.g., "will increasingly seek" vs "increasingly seek") to model precise language

### Repository Management
- **Maintain consistency** - When renaming (e.g., policy-library → atlas), update:
  - Repository name on GitHub
  - Local folder name  
  - vite.config.ts base path
  - BrowserRouter basename
  - All documentation references
  
### Budget & Financial Accuracy
- **Final budget is $728,907** over 2 years
- **Team is 1.3 FTE** broken across 5 actual team members
- **27% of expanded budget** (not 37% - be precise with math)
- **No made-up funding sources** - Only cite confirmed partners

### Word Limits
- **Strict 250-word limits** per PBIF question
- **Always verify word counts** after edits
- **Trim ruthlessly** - Remove filler words to stay under limit