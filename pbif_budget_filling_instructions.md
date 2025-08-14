# PBIF Budget Spreadsheet Filling Instructions

## Spreadsheet URL
https://docs.google.com/spreadsheets/d/1sJdmn3IF09h0YA7hYeem80CCfDc1z8jYdeCkq5Phknw

## Overview
The PBIF template has multiple tabs (a through i) for different budget categories. The Summary tab auto-calculates from these tabs.

## Values to Enter in Each Tab

### Header Information (Summary Tab)
- **Project Name:** PolicyEngine Policy Library
- **Granting Agency:** Public Benefit Innovation Fund (PBIF)
- **Due Date:** August 16, 2025
- **Preparer:** Max Ghenis / PolicyEngine

### Tab a - Personnel (Salaries Only)
Enter these positions with Year 1 and Year 2 columns:

| Position | FTE | Year 1 Salary | Year 2 Salary |
|----------|-----|---------------|---------------|
| Lead Engineer/Director | 0.75 | $67,500 | $69,525 |
| ML/AI Engineer | 0.5 | $40,000 | $41,200 |
| Policy Coordinator | 0.25 | $17,500 | $18,025 |
| **TOTAL** | **1.5** | **$125,000** | **$128,750** |

### Tab b - Fringe Benefits
- **Benefits Rate:** 25% of salaries
- **Year 1:** $31,250
- **Year 2:** $32,187

### Tab c - Travel
- **Year 1:** $2,000 (conferences/partner meetings)
- **Year 2:** $3,000 (dissemination events)

### Tab d - Equipment
- Leave blank (no equipment purchases)

### Tab e - Supplies
- **Year 1:** $3,000 (software licenses)
- **Year 2:** $3,000 (software licenses)

### Tab f - Contractual
- Leave blank (partners get microgrants, not contracts)

### Tab g - Other Direct Costs
| Item | Year 1 | Year 2 | Notes |
|------|--------|--------|-------|
| Partner Microgrants | $60,000 | $40,000 | GCO $25k, MyFriendBen $20k, others |
| Cloud Infrastructure (AWS/GCP) | $10,000 | $14,794 | Scales with jurisdictions |
| **TOTAL** | **$70,000** | **$54,794** | |

### Tab h - Total Direct Costs
- This should auto-calculate:
  - **Year 1:** $231,250
  - **Year 2:** $221,731

### Tab i - Indirect Costs
- **Rate:** 10% (de minimis rate)
- **Year 1:** $23,125 (10% of $231,250)
- **Year 2:** $22,173 (10% of $221,731)

## Final Totals (Should Auto-Calculate)
- **Year 1 Total:** $254,375
- **Year 2 Total:** $243,904
- **GRAND TOTAL:** $498,279

Note: We're $279 over target. To hit exactly $498,000, reduce Year 2 cloud infrastructure from $14,794 to $14,515.

## Budget Justification Text

### Personnel (63.7% of budget)
- **Lead Engineer (0.75 FTE):** Architects core infrastructure, develops API, manages GitHub repository system
- **ML/AI Engineer (0.5 FTE):** Builds and maintains Claude/GPT-4 powered document crawlers for 50+ jurisdictions
- **Policy Coordinator (0.25 FTE):** Verifies document accuracy, manages partner relationships, coordinates GitHub PR reviews

### Partner Microgrants (20.1% of budget)
- **Founding Partner:** Georgia Center for Opportunity ($25,000) - Original pilot partner, deep SNAP expertise
- **Implementation Partners:** MyFriendBen ($20,000), Benefit Navigator ($15,000) - Direct service organizations
- **Testing Partners:** 8-10 organizations at $5,000 each - Feedback and validation
- Note: Atlanta Fed participates as unpaid collaborator due to legal constraints

### Cloud Infrastructure (5.0% of budget)
- AWS/GCP compute for weekly crawlers across 50+ jurisdictions
- S3/Cloud Storage for 100,000+ documents with Git LFS
- CloudFront CDN for API performance
- Scales from 10 states (Year 1) to 50+ states (Year 2)

### Other Costs
- **Software Licenses:** GitHub Enterprise, monitoring tools
- **Travel:** Conference presentations, partner site visits

### Indirect (9.0% of budget)
Using federal de minimis rate of 10% as PolicyEngine doesn't have a negotiated indirect rate.

## Cost-Share
No cost-share is provided. This is 100% grant-funded.