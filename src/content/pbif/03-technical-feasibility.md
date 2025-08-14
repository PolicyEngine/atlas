# Section 3: Technical & Practical Feasibility

## Solution Description (250 words)

**Word Count: 198/250**

AI crawlers understand government websites like human researchers. Claude/GPT-5 navigate complex sites, identify documents, understand relationships between statutes, regulations, forms.

**AI techniques:** LLMs power intelligent crawling. Embedding models enable semantic search. NLP for classification and change detection. LLM benchmark using PolicyEngine-US across 10,000+ household scenarios. Rules-as-code generation experiments measuring LLM accuracy creating PolicyEngine parameter files with/without document access. MCP server for direct LLM integration.

**Human oversight:** (1) Initial configuration, (2) Document verification via GitHub PR, (3) Change confirmation, (4) Regular audits.

**Architecture:** LangChain orchestration. Daily URL monitoring with partner alerts. Web app for document submission. Seeded with 5,000+ documents from partners: PolicyEngine (2,500+ citations), Atlanta Fed model (nationwide), GCO (all states/programs), NBER (tax documents since 2018 via TAXSIM MOU), Prenatal-to-3 Policy Impact Center, Better Government Lab, USC, MyFriendBen, Benefit Navigator. Rules engine identifies relevant documents including non-obvious connections (TANF-SNAP eligibility). FastAPI enhances partner integrations—MyFriendBen and Benefit Navigator add document display to existing API calls. PostgreSQL metadata, S3 storage, CloudFlare CDN.

**Rules-as-Code Evaluation:** Building on Beeck Center's work, we'll test LLMs generating rules for PolicyEngine and Atlanta Fed systems. Three conditions: baseline (description only), enhanced (with documents), full (documents plus patterns). Expect 70%+ accuracy with documents versus <30% baseline.

## Data Strategy - Data Sources (250 words)

**Word Count: 140/250**

Data from public government websites only. Federal agencies (cms.gov, fns.usda.gov, acf.hhs.gov) publish regulations. State agencies host statutes, rules, forms. Never collect private data.

**Data ownership:** Public domain or government works. Clear attribution maintained. Our value-add creates new IP while respecting source rights.

**Data agreements:** No formal agreements needed for public documents. Establishing MOUs with Federal Reserve Bank of Atlanta, North Carolina DHHS for collaboration and updates.

**Securing access:** Responsible crawling: respecting robots.txt, rate limits, identifying via user agent. Agencies can push updates directly. Several expressed interest during pilot.

**Pilot validation:** North Carolina pilot proved feasibility archiving SNAP, Medicaid, TANF documents. Federal sites more standardized. Partner contributions: PolicyEngine (2,500+ citations), Atlanta Fed model (nationwide), GCO (all states/programs), NBER (tax documents since 2018), Prenatal-to-3 at Vanderbilt, Better Government Lab, USC, MyFriendBen, Benefit Navigator. Collaborative seeding ensures comprehensive coverage while eliminating privacy concerns.

## Data Strategy - Data Management (250 words)

**Word Count: 200/250**

We ensure data quality through multiple validation layers. AI extracts documents with confidence scores; humans review low-confidence items additionally. Duplicate detection prevents redundant storage. Change tracking identifies true updates versus formatting changes. Automated testing verifies document accessibility and format integrity.

**Representativeness:** We systematically cover all major benefit programs (SNAP, Medicaid, TANF, WIC, LIHEAP) across jurisdictions. Coverage dashboards identify gaps. Community can request missing documents via GitHub. Regular audits ensure comprehensive coverage without bias toward certain programs or states.

**Privacy safeguards:** We scan documents for personally identifiable information before storage; any PII triggers manual review. We collect no user data. API access remains anonymous beyond basic rate limiting. While documents already exist publicly, we add extra screening to prevent accidental inclusion of private data.

**Security measures:** Documents stored in S3 with encryption at rest. API uses TLS for transit encryption. Access controls limit write permissions to verified contributors. Version control in GitHub provides audit trail. Regular security scans check for vulnerabilities. Backup copies in multiple regions prevent data loss.

**Quality metrics:** 99.5% accuracy target verified through sampling. Completeness tracked via coverage dashboards. Freshness monitored through update frequency. Community feedback incorporated via GitHub issues. This comprehensive approach ensures reliable, secure data management.

## Stakeholder Engagement (250 words)

**Word Count: 172/250**

Government partnerships through multiple channels. Federal Reserve Bank of Atlanta and Georgia Center for Opportunity collaboration demonstrates commitment—seeding library with documents covering all states/programs nationwide. Atlanta Fed helps test rules-as-code generation evaluation. OpenStates/Plural CEO expressed openness to collaboration, offering legislative tracking infrastructure.

**Civic tech engagement:** Partner with former Code for America brigades for infrastructure support. Volunteer technologists identify missing documents, contribute crawlers, validate quality. Distributed model ensures comprehensive coverage with local ownership.

**Direct service partnership:** MyFriendBen and Benefit Navigator staff participate monthly, test features, provide feedback. Frontline experience guides prioritization.

**Academic collaboration:** Better Government Lab and USC contribute expertise and documents from PolicyEngine research. NBER contributes assembled tax documents through TAXSIM MOU covering historical policies since 2018. Prenatal-to-3 at Vanderbilt uses PolicyEngine for tax credit modeling, contributes research archive. Georgetown and Michigan teams provide academic rigor. Researchers use archive for economic analysis.

**Open source ecosystem:** All code public. Work with 8-10 rules-as-code organizations via RFP—state agencies, research institutions, civic tech groups contributing documents. Documentation encourages adaptation. Transparency builds trust and ensures sustainability.

## Resources and Infrastructure (250 words)

**Word Count: 228/250**

Computational resources leverage cloud infrastructure for scalability. AWS provides core services: EC2 for crawlers, S3 for document storage, RDS for metadata. Infrastructure costs scale with usage, starting small and growing as coverage expands. AI API costs for Claude/GPT-5 vary based on crawling frequency and document volume.

**Software stack:** Python for crawler development using LangChain for AI orchestration. Integration with PolicyEngine's open-source rules engine to identify relevant documents for eligibility decisions—our engine already maps complex relationships like TANF-SNAP categorical eligibility. OpenStates API v3 integration for legislative document access and schema compatibility. FastAPI for REST API development. MCP server for native LLM integration enabling tools like Claude to directly query policy documents during conversations. PostgreSQL for structured data. React for public dashboards. GitHub Actions for CI/CD. All components 100% open-source except AI services.

**Government system integration:** API-first architecture enables integration without direct system access. Partners embed via REST calls or JavaScript widgets. Government agencies can bulk export their documents. No direct database connections required, reducing security concerns and technical barriers.

**Access model:** CloudFlare CDN ensures global availability with low latency. Multiple availability zones prevent outages. Automated scaling handles traffic spikes. API gateway manages authentication and rate limiting.

**Development infrastructure:** GitHub for code repository and collaboration. Slack for team communication. Linear for project management. Datadog for monitoring. This modern stack ensures efficient development and reliable operations while remaining vendor-agnostic where possible.

## Scalability & Sustainability (250 words)

**Word Count: 180/250**

We build technical scalability into our architecture. Our crawler system uses job queues enabling horizontal scaling. Add more workers to handle more jurisdictions. Document storage in S3 scales infinitely. API uses caching and CDN for performance at scale. Database sharding ready for millions of documents.

**Long-term sustainability through revenue diversification:** Enterprise API subscriptions from benefits platforms and government contractors. Government contracts for official preservation services. Foundation support for free nonprofit access. Multiple revenue streams ensure sustainability beyond grant period.

**Cost optimization:** Open-source approach eliminates licensing costs. Community contributions from 100+ developers reduce development expenses. Efficient caching minimizes AI API usage. Graduated storage (hot/cold) optimizes costs for historical documents.

**Organizational sustainability:** PolicyEngine's existing infrastructure and team provide stable foundation. Policy Library enhances our core benefits calculator mission. Board commitment to long-term support. Partnership agreements ensure continued stakeholder investment.

**Technical evolution:** Architecture supports new AI models as they emerge. Jurisdiction-agnostic design enables international expansion. Modular components allow feature addition without system rewrites. Version control preserves all historical data. This comprehensive approach ensures the Policy Library becomes permanent infrastructure, not a temporary project.

## Financial Viability (250 words)

**Word Count: 166/250**

**Budget allocation:** Personnel (1.85 FTE): $293,000. Fringe benefits (33%): $96,690. Partner contracts including integration support: $164,000. AI tools and infrastructure: $60,000. Indirect costs (10% de minimis): $61,369. Total: $675,059.

The PBIF grant enables dedicated Policy Library development while PolicyEngine maintains its existing benefits calculator services. This focused investment creates infrastructure that becomes self-sustaining through API subscriptions and government contracts.

**Funding diversification:** PBIF funding jumpstarts development. By Year 2, we anticipate enterprise API subscriptions and government preservation contracts. The open-source model and community contributions reduce ongoing costs.

**Financial sustainability plan:** Year 1: PBIF funding covers development and initial deployment with 5,000+ seed documents from partners. Year 2: Begin enterprise subscriptions and government contracts as system proves value. Year 3: Achieve sustainability through diversified revenue including API subscriptions, government contracts, and foundation support.

**Risk mitigation:** Staggered hiring reduces upfront costs. Cloud infrastructure scales with usage. Open-source model enables community contributions. Multiple revenue streams prevent single points of failure. This pragmatic approach ensures financial viability while building critical infrastructure.