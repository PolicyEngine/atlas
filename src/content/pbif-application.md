# PBIF Summer 2025 Application
## PolicyEngine Policy Library - Comprehensive Application Responses

---

## Executive Summary

PolicyEngine seeks $498,000 to build the Policy Library, an AI-powered infrastructure that creates permanent, machine-readable archives of every benefit rule in America. Our solution addresses the critical problem of disappearing policy documents that cause families to lose benefits and organizations to waste thousands of hours maintaining broken systems.

Using Claude/GPT-4 powered crawlers, we monitor 50+ jurisdictions weekly, capturing statutes, regulations, and forms before they vanish. Human reviewers verify accuracy through GitHub, and we serve everything through a stable API with permanent source IDs that never break.

---

## 1. Deep Understanding of the Problem Space

### The Crisis

- **18% of benefit program URLs from 2019 are dead today** - critical policy documents vanish without warning
- **CaseText shutdown** eliminated thousands of legal references overnight, breaking tools nationwide
- **State website reorganizations** constantly break links that power benefit calculators
- **Impact on families:** Lost benefits due to inaccessible documentation
- **Impact on organizations:** MyFriendBen, Benefit Navigator, and hundreds of agencies waste thousands of hours annually maintaining broken links
- **Impact on AI accuracy:** LLMs generate incorrect benefit information without reliable source documents

### Root Causes

- No standardized preservation system for policy documents
- Agencies lack resources for maintaining permanent archives
- Commercial providers (like CaseText) can disappear, taking critical infrastructure with them
- No version control for policy changes over time

### Evidence Base

Our analysis with Georgetown University and University of Michigan researchers found that historical policy analysis is nearly impossible due to missing documents. The Atlanta Fed's Policy Rules Database collaboration revealed that even federal agencies struggle with document preservation.

---

## 2. Impact: Addressing Clear Barriers

### Barriers We Address

- **Information Access:** Families can't verify eligibility when documents disappear
- **Administrative Burden:** Staff waste hours searching for and updating broken links
- **System Fragmentation:** Each tool maintains its own partial document collection
- **AI Hallucination:** LLMs provide incorrect information without authoritative sources

### Measurable Improvements

| Metric | Value |
|--------|-------|
| Reduction in link maintenance time | 75% |
| LLM accuracy improvement | 24pp |
| People served annually | 160,000 |
| Document availability | 100% |

### Impact Tracking Plan

- Monthly metrics on document retrieval rates and API usage
- Quarterly surveys of partner organizations on time saved
- Annual assessment of beneficiary reach through partner tools
- Continuous monitoring of LLM accuracy improvements using our benchmark

---

## 3. Responsible AI Implementation

### Data Privacy & Transparency

- **Public Documents Only:** We archive only publicly available government documents
- **No PII Collection:** System designed to exclude personal information
- **Open Source:** All code publicly available on GitHub for transparency
- **Audit Trail:** Complete version history with human review records

### Fairness & Bias Mitigation

- **Comprehensive Coverage:** All 50 states plus federal, preventing geographic bias
- **Multiple Language Support:** Planning Spanish language document support in Year 2
- **Human Review:** Every AI-crawled document verified by human reviewers
- **Community Contributions:** Open system allows corrections from affected communities

### Risk Mitigation

| Risk | Mitigation Strategy |
|------|-------------------|
| AI hallucination in extraction | Human review of all documents before publication |
| Outdated information | Weekly crawling schedule with change detection |
| Misuse for benefits fraud | Documents are already public; we improve legitimate access |
| System dependency | Open source with multiple mirrors ensures continuity |

---

## 4. Technical Feasibility & Implementation

### Technical Architecture

- **AI Crawling:** Claude/GPT-4 for intelligent document extraction
- **Storage:** Git repositories with LFS for version control (proven at scale)
- **Web Archiving:** Browsertrix for WARC-format preservation
- **Search:** OpenSearch for full-text document search
- **API:** RESTful API with permanent source_id references

### Proof of Concept

We have operational pilots demonstrating feasibility:

- **us-nc-sources:** North Carolina documents repository on GitHub
- **Atlanta Fed PRD:** Integration with Policy Rules Database
- **Partner Testing:** MyFriendBen successfully using prototype in production

### Government Integration

- No integration required - we crawl public websites
- Optional API integration for agencies wanting direct access
- Compliant with government accessibility standards (508)
- Can provide data in multiple formats (JSON, XML, CSV)

### Team Expertise

**Max Ghenis - CEO**  
Former Google data scientist, founded PolicyEngine, MS Stanford

**Nikhil Woodruff - CTO**  
Lead engineer of PolicyEngine microsimulation models

**Pavel Makarchuk - ML Engineer**  
AI/ML expertise, formerly at tech startups

---

## 5. Implementation Timeline & Milestones

### Q3 2025 (Months 1-3): Foundation
- Finalize AI crawler architecture
- Set up Git LFS infrastructure
- Launch 5 pilot states
- Establish human review workflow

### Q4 2025 (Months 4-6): Scale
- Expand to 20 states
- Launch public API
- Integrate 3 partner organizations
- Release LLM benchmark v1

### Q1 2026 (Months 7-9): Production
- Cover 40 states
- Launch public search interface
- 10+ partners integrated
- Historical backfill to 2018

### Q2 2026 (Months 10-12): Complete Coverage
- All 50 states + federal
- 100,000+ documents archived
- LLM benchmark v2 published
- Sustainability model operational

### July 2026: Success Metrics Achieved
- 160,000 people served
- 75% time reduction documented
- 24pp accuracy improvement validated
- Self-sustaining revenue model active

---

## 6. Budget Breakdown

| Category | Year 1 | Year 2 | Total | Details |
|----------|--------|--------|-------|---------|
| **Personnel** | $405,000 | $420,000 | $825,000 | 2.5 FTE (Lead Eng, ML Eng, Policy Analyst) |
| **Partner Grants** | $60,000 | $40,000 | $100,000 | Micro-grants for document contributions |
| **Infrastructure** | $18,000 | $24,000 | $42,000 | Cloud, storage, API hosting |
| **Contingency** | $15,000 | $18,000 | $33,000 | 3% buffer for unexpected costs |
| **TOTAL** | **$498,000** | **$502,000** | **$1,000,000** | |

---

## 7. Strategic Fit & Catalytic Opportunity

### Why This Needs PBIF

- **Public Good Nature:** No single organization can justify building this alone
- **Network Effects:** Value increases exponentially with coverage and users
- **AI Moment:** LLMs make this technically feasible now in ways impossible before
- **Urgency:** Every day more documents disappear permanently

### Why PolicyEngine

- **Track Record:** Microsimulation models for US, UK, Canada serving millions
- **Technical Expertise:** Team has deep experience with policy modeling and AI
- **Partner Network:** Existing relationships with key organizations
- **Mission Alignment:** Dedicated to democratizing policy analysis

---

## 8. Path to Sustainability

### Revenue Model (Post-Grant)

- **API Subscriptions:** Premium tier for high-volume users ($500-5000/month)
- **Enterprise Contracts:** Custom integrations for large organizations
- **Government Contracts:** Service agreements with agencies
- **Foundation Support:** Continued grants for public good maintenance

### Cost Optimization

- Automated crawling reduces manual work over time
- Community contributions lower content costs
- Efficient infrastructure scales without linear cost increase

### Projected Break-Even

- Month 18: Basic sustainability through API revenue
- Month 24: Full self-sufficiency including growth capacity
- Month 36: Generating surplus for expansion to new document types

---

## 9. Shared Learning & Scalability

### Open Source Commitment

- All code published on GitHub under MIT license
- Documentation for replication in other countries
- Regular blog posts on technical challenges and solutions
- Conference presentations at Code for America Summit, etc.

### Research Publications

- LLM accuracy benchmark methodology paper
- Best practices for policy document preservation
- Case studies with partner organizations
- Annual impact report with detailed metrics

### Scalability Plan

- **Geographic:** Model applicable to any country with public benefits
- **Document Types:** Expandable to court decisions, agency guidance
- **Languages:** Architecture supports multilingual documents
- **Use Cases:** Beyond benefits - healthcare, education, housing policy

---

## 10. Partner Support

### Confirmed Partners

**Georgetown University - McCourt School**  
"The Policy Library would transform our ability to conduct historical policy research..."

**MyFriendBen**  
"We waste 20+ hours monthly on broken links. This infrastructure would be game-changing..."

**Atlanta Federal Reserve**  
"Aligns perfectly with our Policy Rules Database initiative..."

**Benefit Navigator**  
"Essential infrastructure for scaling our services nationally..."

---

## 11. Evaluation Strategy

### Success Metrics

| Metric | Baseline | Year 1 Target | Year 2 Target | Measurement Method |
|--------|----------|---------------|---------------|-------------------|
| Documents Archived | 500 | 50,000 | 100,000 | Database count |
| API Calls/Month | 1,000 | 100,000 | 1,000,000 | Server logs |
| Partner Organizations | 3 | 15 | 30 | Integration tracking |
| People Served | 10,000 | 80,000 | 160,000 | Partner reports |
| Time Saved (hours/year) | 0 | 5,000 | 15,000 | Partner surveys |
| LLM Accuracy Improvement | 0pp | 15pp | 24pp | Benchmark testing |

### Evaluation Methods

- **Quantitative:** Automated metrics dashboard updated daily
- **Qualitative:** Quarterly partner interviews and case studies
- **External:** Independent evaluation by university partner in Year 2
- **Continuous:** Monthly reviews with adjustment capability

---

## Closing: Why Fund This Now

The Policy Library represents a once-in-a-generation opportunity to fix the broken infrastructure that undermines America's safety net. With AI making intelligent document extraction possible and the urgent need highlighted by CaseText's closure, the time is now.

PolicyEngine has the technical expertise, partner network, and mission commitment to deliver this critical infrastructure. Our request of $498,000 will catalyze a transformation in how benefit information is preserved, accessed, and utilized - improving outcomes for millions of Americans.

We're not just archiving documents - we're ensuring that every family can access the benefits they're entitled to, every organization can build reliable tools, and every AI system can provide accurate information. This is infrastructure for equity, built for permanence.