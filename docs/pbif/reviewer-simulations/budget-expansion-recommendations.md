# Budget Expansion Recommendations from PBIF Reviewers

Based on review of `pbif_budget_filler/budget_data.yaml`, here are specific recommendations for expanding the budget from $700K to $1M-1.2M:

## Cassandra Madison (PBIF Executive Director) - Recommends $1.2M Total

### Personnel Adjustments (+$150K)
Looking at your current staffing (1.3 FTE total), you're severely understaffed for government-scale infrastructure:

**Current Issues:**
- Project Lead at only 20% is insufficient for government relations
- 40% FTE engineers can't handle 50+ jurisdictions

**Recommended Changes:**
```yaml
personnel:
  - position_title: "Project Lead"
    effort_pct: 50      # Increase from 20% to 50%
    base_salary: 150000  # Keep same
    
  - position_title: "Lead Engineer" 
    effort_pct: 100     # Increase from 40% to 100%
    base_salary: 140000
    
  - position_title: "ML/AI Engineer"
    effort_pct: 80      # Increase from 40% to 80%
    base_salary: 120000
```

This adds ~$150K to personnel costs but ensures you can actually deliver.

### Critical Missing Component: Search Infrastructure (+$75K)
Your `other_direct` has no allocation for search! This is the #1 gap:

```yaml
other_direct:
  - expense_type: "Search Infrastructure (Elasticsearch/OpenSearch)"
    total_cost: 75000
    category: "Search services"
    justification: "Enterprise search for 100K+ documents - setup, hosting, tuning"
```

### Government Compliance (+$25K)
No mention of security compliance in your budget:

```yaml
other_direct:
  - expense_type: "Security Audit & Compliance"
    total_cost: 25000
    category: "Professional services"
    justification: "StateRAMP readiness assessment and documentation"
```

---

## Korey Klein (Ballmer Group) - Recommends $1M Total

### Data Architecture Gap (+$50K)
Your current budget only has $12K for cloud services - that's wildly insufficient for 100K documents:

**Replace:**
```yaml
# Current
- expense_type: "Cloud Computing & Storage"
  total_cost: 12000
```

**With:**
```yaml
- expense_type: "Data Infrastructure & Analytics Platform"
  total_cost: 62000
  justification: "Expanded: Data warehouse (BigQuery/Snowflake), storage for 100K+ docs, analytics pipeline, monitoring dashboards"
```

### Increase Document Bounty Program (+$25K)
Your $25K bounty is too small for comprehensive coverage:

```yaml
- expense_type: "Document Bounty Program"
  total_cost: 50000  # Increase from 25000
  justification: "Need higher incentives for rural counties and non-English documents"
```

### Missing: Data Quality Tools (+$15K)
```yaml
- expense_type: "Data Quality & Monitoring Tools"
  total_cost: 15000
  category: "Software licenses"
  justification: "Monte Carlo or similar for data quality monitoring, Datadog for API monitoring"
```

---

## Kumar Garg (Renaissance Philanthropy) - Recommends $900K Total

### Federal Coordination Component (+$40K)
Your travel budget misses key federal engagement:

```yaml
travel:
  - purpose: "Federal Agency Coordination (USDS, 18F, GSA)"
    destination: "Washington DC"
    days: 3
    travelers: 2
    lodging_per_traveler: 250
    flight_per_traveler: 0  # Local
    basis: "Quarterly federal coordination meetings - 8 trips total"
```

### Increase Technical Advisory (+$20K)
Your $30K for advisory is too low for the expertise needed:

```yaml
- expense_type: "Technical Advisory Services"
  total_cost: 50000  # Increase from 30000
  justification: "Add federal expertise from former USDS/18F leads"
```

### Add Policy Brief Production (+$15K)
```yaml
- expense_type: "Policy Brief & Report Production"
  total_cost: 15000
  category: "Communications"
  justification: "Professional editing and design for federal agency briefings"
```

---

## Andrew Coy (Digital Harbor) - Recommends $800K Total

### Youth Workforce Development Component (+$30K)
Add to contractual:

```yaml
contractual:
  - subaward_number: "LOI-4"
    subawardee: "Youth Tech Organization (TBD)"
    total_cost: 30000
    justification: "Train youth to verify documents while learning civic tech - creates pathway to tech careers"
```

### Community Engagement (+$20K)
Missing from your budget:

```yaml
other_direct:
  - expense_type: "Community Workshops & Training"
    total_cost: 20000
    category: "Outreach"
    justification: "Training sessions for community orgs to use and contribute to library"
```

### Digital Equity Audit (+$10K)
```yaml
- expense_type: "Digital Equity Assessment"
  total_cost: 10000
  category: "Professional services"
  justification: "Ensure solution doesn't widen digital divides"
```

---

## Yuri Kim (Gates Foundation) - Recommends $800K Total

### Multilingual Support (+$40K)
Critical gap in current budget:

```yaml
other_direct:
  - expense_type: "Translation & Multilingual Support"
    total_cost: 40000
    category: "Language services"
    justification: "Spanish document processing, translation tools, multilingual search"
```

### Equity Metrics & Auditing (+$25K)
```yaml
- expense_type: "Equity Audits & Reporting"
  total_cost: 25000
  category: "Professional services"
  justification: "Quarterly audits of document collection equity, bias assessment"
```

### Reduce Some Line Items for Balance
To stay at $800K, reduce:
- AI Coding Tools from $9,360 to $5,000 (use free tiers more)
- Conference travel from 2x to 1x per year

---

## Consensus Budget Priorities (All Reviewers)

### Must Add (Universal Agreement):
1. **Search Infrastructure**: $75,000 (currently $0)
2. **Increased Cloud/Data**: $50,000 additional (from $12K to $62K)
3. **Higher Personnel**: At least +0.5 FTE engineering

### Should Add (Majority Agreement):
1. **Equity/Multilingual**: $40,000
2. **Federal Coordination**: $20,000
3. **Security Compliance**: $25,000

### Nice to Have:
1. **Youth Development**: $30,000
2. **Community Engagement**: $20,000

## Recommended Final Budget: $1,000,000

### Allocation:
- **Personnel**: $425,000 (from $270,000)
- **Travel**: $20,000 (keep same)
- **Contractual**: $130,000 (keep same)
- **Other Direct**: $275,000 (from $87,000)
- **Indirect (15%)**: $127,500
- **Total**: $977,500 (~$1M)

This provides the critical infrastructure (search, data, compliance) while maintaining focus on the core mission.