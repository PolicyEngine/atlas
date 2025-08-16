# PBIF Application - Input Needed from Max

## Current Status
- **Budget Total:** $711,751 (verified via calculate_budget_total.py)
- **Sections Complete:** 15/15 response files created with flowing narratives
- **Word Counts:** All sections under 250 words
- **Support Letters:** 9 combined into single PDF (6 institutions + 2 drafts + log)

## Critical Information Needed

### 1. Metrics Validation
Please confirm or correct these key metrics we're claiming:
- **People served annually:** 160,000 (through partner tools)
- **Households currently served by PolicyEngine:** 72,000
- **Time saved for organizations:** 75% reduction / 10,000+ hours annually
- **LLM accuracy improvement:** 24 percentage points
- **Document target:** 5,000 critical documents (per budget narrative) or 100,000+ (per some sections)?
- **MyFriendBen monthly users:** 3,500 in Colorado

### 2. Technical Claims
Please verify:
- **AI extraction accuracy:** 95% (claimed in stage of development)
- **Link rot statistic:** 18% of 2019 benefit URLs are dead
- **Partner reduction in maintenance:** 60% (MyFriendBen pilot)

### 3. Timeline Confirmation
- **Project start:** November 1, 2025
- **Project end:** October 31, 2027
- **Production deployment:** Within 12 months (PBIF requirement)

### 4. Partnership Details
Should we mention specific commitments from:
- **NBER:** Dan Feenberg's tax form archive
- **Urban Institute:** Policy documents from microsimulation models
- **Atlanta Fed:** Integration with Policy Rules Database
- **Gates Foundation:** Connection via Benefit Navigator

### 5. Financial Projections
Please validate post-grant sustainability numbers:
- **Premium API subscriptions:** $500/month average
- **Enterprise contracts:** $50,000 each
- **Break-even timeline:** 18 months
- **Year 2 revenue target:** $630,000

### 6. Specific Questions

1. **Document Scope:** The budget narrative mentions 5,000 documents (focused approach) but older text mentions 100,000+. Which should we use consistently?

2. **Clarity Index:** This is mentioned in budget docs but not fully explained in responses. Should we add more detail about this innovation?

3. **Spanish Language Support:** Currently mentioned for Year 2. Is this still planned?

4. **Staff Names:** Should we include actual names (Max Ghenis, Nikhil Woodruff, Pavel Makarchuk) or keep generic titles?

5. **Geographic Focus:** We mention Colorado, North Carolina, and California as initial states. Is this still the plan?

## Next Steps

1. **Review all 15 response files** in `/docs/pbif/responses/`
2. **Run assembly script** to see formatted application with word counts
3. **Confirm budget** matches Google Sheets submission
4. **Finalize support letters** - do we need the PSL and SnapScreener drafts signed?

## Quick Actions Needed

- [ ] Verify all metrics and numbers above
- [ ] Confirm if we should mention specific dollar amounts anywhere besides budget section
- [ ] Review stakeholder engagement section - adequately acknowledges support letters?
- [ ] Decide on document count messaging (5,000 vs 100,000)
- [ ] Approve team member naming approach

## Files to Review Priority

1. `responses/01_executive_summary.md` - Sets the tone
2. `responses/12_stakeholder_engagement.md` - Mentions support letters
3. `responses/15_financial_viability.md` - Sustainability claims
4. `combined_support_letters.pdf` - All 9 letters in one file

## Assembly Command
To see the full application with word counts and copy buttons:
```bash
cd /Users/maxghenis/PolicyEngine/policy-library/docs/pbif
python assemble_application.py
```

Then view the generated file at:
`/Users/maxghenis/PolicyEngine/policy-library/src/content/pbif-application.md`