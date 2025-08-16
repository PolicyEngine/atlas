# Final PBIF Budget Summary - PolicyEngine Policy Library

## Total Request: $700,000 over 2 years

### Updated Scope
- **Document Target**: 5,000 documents (not 100K+)
- **Coverage**: Complete policy documentation for all 50 states + DC + federal
- **Programs**: Tax credits, SNAP, Medicaid, CHIP, ACA, SSI (including state supplements), WIC, LIHEAP, TANF, CCDF
- **Focus**: Clarity Index scoring across all documents to identify ambiguous policies

### Personnel (1.3 FTE total) - $402,500
| Position | FTE | 2-Year Salary | 2-Year Fringe (25%) | Total |
|----------|-----|---------------|---------------------|-------|
| Project Lead | 0.2 | $60,000 | $15,000 | $75,000 |
| Lead Engineer | 0.4 | $112,000 | $28,000 | $140,000 |
| ML/AI Engineer | 0.4 | $96,000 | $24,000 | $120,000 |
| Policy Analyst | 0.3 | $54,000 | $13,500 | $67,500 |
| **Subtotal** | **1.3** | **$322,000** | **$80,500** | **$402,500** |

### Other Direct Costs - $167,500

#### Partner Contracts - $130,000
- MyFriendBen: $50,000 (integration, testing with 3,500 Colorado users)
- Benefit Navigator: $50,000 (integration, testing with 500+ caseworkers)
- Citizen Codex: $30,000 (UX research and design)

#### Infrastructure & Services - $37,500
- Cloud Computing & Storage: $15,000 (for 5K documents)
- AI API Services: $12,000 (extraction, classification, Clarity Index)
- Search & Clarity Index Infrastructure: $10,000
- AI Coding Tools: $5,000 (reduced from original)

#### Engagement & Advisory - $37,500
- Technical Advisory Services: $20,000 (Urban Institute, GCO, NBER)
- Document Verification Program: $15,000 (performance-based payments to trusted partners)
- Conference Registration: $2,600 (Code for America Summit, NAWRS)

#### Travel - $15,000
Partner site visits and conference attendance

### Indirect Costs (15% de minimis) - $87,750

### Grand Total: $700,000

## Key Changes from Original Budget

1. **Reduced scope** from 100K+ to 5,000 documents (realistic for 10 programs across 51 jurisdictions)
2. **Reduced search infrastructure** from $35K to $10K (appropriate for 5K documents)
3. **Emphasized Clarity Index** as key innovation for measuring policy ambiguity
4. **Reduced auxiliary costs** (AI tools, advisory, bounty program) to fit budget
5. **Maintained partner commitments** at original levels for continuity

## Justification

This budget appropriately scales infrastructure for a focused collection of 5,000 critical policy documents while maintaining strong partnerships and developing the innovative Clarity Index. The reduced scope allows for higher quality verification and deeper analysis of policy ambiguity across all major safety net programs.

## To Update Google Sheets

The budget data is maintained in `pbif_budget_filler/budget_data.yaml`. When ready to update the Google Sheets:

1. Ensure all numbers in budget_data.yaml match this summary
2. Run the populate_budget.py script with appropriate credentials
3. Verify totals match $700,000 target

Current status: Budget properly sized for 5,000 document scope with comprehensive coverage of 10 programs across all US jurisdictions.