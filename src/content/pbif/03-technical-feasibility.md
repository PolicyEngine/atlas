# Section 3: Technical & Practical Feasibility

## Solution Description (250 words)

**Word Count: 237/250**

Our AI crawlers will understand government websites like human researchers do. We'll use Claude and GPT-5 to navigate complex sites, identify relevant documents, and understand relationships between statutes, regulations, and forms.

**AI techniques:** We'll use agentic AI with Retrieval-Augmented Generation (RAG) rather than fine-tuning. LLMs will power intelligent crawling while embedding models enable semantic search. We'll implement NLP for classification and change detection. An MCP server will enable direct LLM integration, allowing AI tools to query our document library directly during conversations with users.

**Human oversight:** We'll implement four stages of human review: (1) Initial configuration by engineers, (2) Document verification via GitHub pull requests, (3) Change confirmation by subject matter experts, (4) Regular quality audits.

**Architecture:** We'll use LangChain for orchestration with daily URL monitoring that sends partner alerts. Our web app will accept document submissions. We'll seed the system with 5,000+ documents from partners including PolicyEngine (2,500+ citations), Atlanta Fed model (nationwide coverage), GCO (all states/programs), NBER (tax documents since 2018 via TAXSIM MOU), Urban Institute, Prenatal-to-3 Policy Impact Center, Better Government Lab, USC, MyFriendBen, and Benefit Navigator. Our rules engine will identify relevant documents including non-obvious connections like TANF-SNAP eligibility. FastAPI will enhance partner integrations—MyFriendBen and Benefit Navigator will add document display to existing API calls. We'll use PostgreSQL for metadata, S3 for storage, and CloudFlare CDN for distribution.

**Integration with Rules Engines:** Building on the Beeck Center's work, we'll integrate our document library with PolicyEngine and Atlanta Fed's rules systems. Our API will provide source documents that these systems need for accurate benefits calculations, ensuring that rules engines have access to the authoritative policy text they're encoding.

## Data Strategy - Data Sources (250 words)

**Word Count: 140/250**

We'll collect data from public government websites only. Federal agencies like cms.gov, fns.usda.gov, and acf.hhs.gov publish regulations, while state agencies host statutes, rules, and forms. We'll never collect private data.

**Data ownership:** All content is public domain or government works. We'll maintain clear attribution for every document. Our value-add will create new IP while respecting source rights.

**Data agreements:** We don't need formal agreements for public documents. We're establishing MOUs with the Federal Reserve Bank of Atlanta and North Carolina DHHS for collaboration and updates.

**Securing access:** We'll practice responsible crawling by respecting robots.txt files, implementing rate limits, and identifying ourselves via user agent strings. Agencies can push updates directly to our system. Several agencies have already expressed interest during our pilot.

**Pilot validation:** Our North Carolina pilot has already proven the feasibility of archiving SNAP, Medicaid, and TANF documents. Federal sites are more standardized, making them easier to process. Partner contributions include PolicyEngine (2,500+ citations), Atlanta Fed model (nationwide coverage), GCO (all states/programs), NBER (tax documents since 2018), Urban Institute, Prenatal-to-3 at Vanderbilt, Better Government Lab, USC, MyFriendBen, and Benefit Navigator. This collaborative seeding approach ensures comprehensive coverage while eliminating privacy concerns.

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

**Academic collaboration:** Better Government Lab and USC contribute expertise and documents from PolicyEngine research. NBER contributes assembled tax documents through TAXSIM MOU covering historical policies since 2018. Urban Institute contributes safety net program documentation and research expertise. Prenatal-to-3 at Vanderbilt uses PolicyEngine for tax credit modeling, contributes research archive. Georgetown and Michigan teams provide academic rigor. Researchers use archive for economic analysis.

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

We'll build technical scalability into our architecture from day one. Our crawler system will use job queues enabling horizontal scaling—we can simply add more workers to handle more jurisdictions. Document storage in S3 will scale infinitely. Our API will use caching and CDN for performance at scale. We'll implement database sharding to handle millions of documents.

**12-Month Detailed Timeline:**
- **Months 1-2:** Set up infrastructure, deploy initial crawlers, bulk ingest 5,000+ partner documents
- **Months 3-4:** Launch API v1, integrate with MyFriendBen and Benefit Navigator  
- **Months 5-6:** Scale to 10 states, implement automated quality checks
- **Months 7-8:** Expand to 30 states, launch public web interface
- **Months 9-10:** Add remaining states, optimize performance
- **Months 11-12:** Full production with 50+ jurisdictions, conduct comprehensive evaluation

**Long-term sustainability through revenue diversification:** We'll secure enterprise API subscriptions from benefits platforms and government contractors. Government contracts for official preservation services will provide stable funding. Foundation support will maintain free access for nonprofits. Multiple revenue streams will ensure sustainability beyond the grant period.

**Cost optimization:** Our open-source approach eliminates licensing costs. Community contributions from 100+ developers will reduce development expenses. Efficient caching will minimize AI API usage. Graduated storage (hot/cold) will optimize costs for historical documents.

**Organizational sustainability:** PolicyEngine's existing infrastructure and team provide a stable foundation. The Policy Library enhances our core benefits calculator mission. Our board has committed to long-term support. Partnership agreements ensure continued stakeholder investment.

**Technical evolution:** Our architecture will support new AI models as they emerge. The jurisdiction-agnostic design enables international expansion. Modular components allow feature addition without system rewrites. Version control preserves all historical data.

## Financial Viability (250 words)

**Word Count: 166/250**

**Budget allocation:** Personnel (1.85 FTE): $293,000. Fringe benefits (33%): $96,690. Partner contracts including integration support: $164,000. AI tools and infrastructure: $60,000. Indirect costs (10% de minimis): $61,369. Total: $675,059.

The PBIF grant enables dedicated Policy Library development while PolicyEngine maintains its existing benefits calculator services. This focused investment creates infrastructure that becomes self-sustaining through API subscriptions and government contracts.

**Funding diversification:** PBIF funding jumpstarts development. By Year 2, we anticipate enterprise API subscriptions and government preservation contracts. The open-source model and community contributions reduce ongoing costs.

**Financial sustainability plan:** Within our 12-month grant period, PBIF funding will cover development and deployment with 5,000+ seed documents from partners. By month 9, we'll begin securing enterprise subscriptions and government contracts as the system proves its value. Post-grant, we'll achieve full sustainability through diversified revenue including API subscriptions, government contracts, and foundation support.

**Risk mitigation:** Staggered hiring reduces upfront costs. Cloud infrastructure scales with usage. Open-source model enables community contributions. Multiple revenue streams prevent single points of failure. This pragmatic approach ensures financial viability while building critical infrastructure.