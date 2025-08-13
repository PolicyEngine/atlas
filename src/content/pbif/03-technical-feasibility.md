# Section 3: Technical & Practical Feasibility

## Solution Description (250 words)

The Policy Library uses AI as intelligent crawlers that understand government websites like human researchers. Claude and GPT-5 navigate complex site structures, identify relevant documents, and understand relationships between statutes, regulations, and forms. AI acts as our co-pilot while humans provide oversight at critical checkpoints.

**AI techniques:** Large language models (Claude/GPT-5) power intelligent crawling and document extraction. We prompt them to understand government website patterns, identify policy documents, and extract structured metadata. Embedding models for semantic search and duplicate detection. Traditional NLP for document classification and change detection. LLM benchmark framework using PolicyEngine-US to generate ground truth calculations across 10,000+ household scenarios, plus rules-as-code generation experiments measuring how accurately LLMs can create PolicyEngine parameter files with and without document access (building on Beeck Center's approach). MCP (Model Context Protocol) server enabling direct LLM integration for real-time policy lookups.

**Human oversight checkpoints:** (1) Initial crawler configuration: Humans define jurisdiction scope and document types. (2) Document identification: AI proposes documents, humans verify relevance via GitHub PR review. (3) Change detection: AI identifies updates, humans confirm significance. (4) Quality assurance: Regular human audits of AI decisions.

**Architecture with Integration Support:** Crawler service using LangChain for AI orchestration. Continuous monitoring system checks all document URLs daily and sends immediate alerts to partners when links break. Web application enables document submission and retrieval beyond API access. We'll seed the system with documents from ALL confirmed partners: PolicyEngine's 2,500+ cited documents (from our 100% open-source rules engine with 100+ contributors), documents in Atlanta Fed's Policy Rules Database model (nationwide coverage of federal and state programs), GCO's comprehensive collection (all states and programs, not just NC), Prenatal-to-3 Policy Impact Center's research archive (they use PolicyEngine for state tax credit modeling), Better Government Lab and USC academic research, MyFriendBen's Colorado references, and Benefit Navigator's California documents—creating a comprehensive launch library of 5,000+ documents, all enriched with metadata and converted to plaintext for efficient AI processing. Our rules engine integration identifies the most relevant documents for any eligibility decision—including non-obvious connections like TANF regulations when TANF provides categorical eligibility for SNAP. REST API using FastAPI enhances existing partner integrations—MyFriendBen and Benefit Navigator add document display to their current PolicyEngine API calls. When Colorado users check benefits, they see actual state regulations. When Riverside County caseworkers verify eligibility, they access primary sources instantly. PostgreSQL for metadata, S3 for documents, CloudFlare CDN for performance.

This hybrid approach leverages AI's ability to process vast amounts of information while maintaining human judgment for critical decisions, ensuring both scale and accuracy.

**Rules-as-Code Generation Evaluation:** Building on Beeck Center's pioneering work, we'll conduct controlled experiments measuring LLMs' ability to generate accurate rules-as-code for multiple open-source systems—PolicyEngine parameter files and Atlanta Fed Policy Rules Database entries (the only other open-source implementation). We'll test three conditions: (1) Baseline: LLM with only a policy description, (2) Enhanced: LLM with Policy Library document access, (3) Full: LLM with documents plus existing system patterns. We expect document-enhanced LLMs to achieve 70%+ accuracy in generating correct values, formulas, and effective dates—compared to under 30% baseline accuracy. This multi-system evaluation proves the Policy Library's universal value for automated policy implementation across different rules-as-code approaches.

## Data Strategy - Data Sources (250 words)

We source all data from publicly available government websites. Federal agencies (cms.gov, fns.usda.gov, acf.hhs.gov) publish regulations and guidance. State agencies host statutes, rules, and forms on official websites. We never collect private or personal data.

**Data ownership:** Documents exist in public domain or as government works not subject to copyright. We maintain clear attribution to source agencies. Our value-add (organization, preservation, API access) creates new intellectual property while respecting source rights.

**Data agreements:** No formal agreements needed for public documents. However, we're establishing MOUs with partner agencies (Federal Reserve Bank of Atlanta, North Carolina DHHS) for collaboration and notification of major updates. These agreements formalize relationships but aren't required for public data access.

**Securing access:** We follow responsible crawling practices: respecting robots.txt, implementing rate limits, identifying ourselves via user agent. For agencies with concerns, we offer direct collaboration where they can push updates to us. Several agencies expressed interest in this model during pilot discussions.

**Pilot validation:** North Carolina pilot proved feasibility, successfully archiving SNAP, Medicaid, and TANF documents from multiple state websites without issues. Federal sites are even more standardized, simplifying expansion. Partner organizations contribute their existing document collections: PolicyEngine (2,500+ policy parameter citations), documents in Atlanta Fed's model (federal and state rules covering all jurisdictions), GCO (nationwide program documents, not limited to NC), Prenatal-to-3 Policy Impact Center at Vanderbilt (research archive, uses PolicyEngine for state tax credit modeling), Better Government Lab and USC (academic research using PolicyEngine), MyFriendBen (Colorado references), and Benefit Navigator (California documents). This collaborative seeding ensures comprehensive coverage from launch while eliminating privacy concerns through public data only.

## Data Strategy - Data Management (250 words)

We ensure data quality through multiple validation layers. AI extracts documents with confidence scores; humans review low-confidence items additionally. Duplicate detection prevents redundant storage. Change tracking identifies true updates versus formatting changes. Automated testing verifies document accessibility and format integrity.

**Representativeness:** We systematically cover all major benefit programs (SNAP, Medicaid, TANF, WIC, LIHEAP) across jurisdictions. Coverage dashboards identify gaps. Community can request missing documents via GitHub. Regular audits ensure comprehensive coverage without bias toward certain programs or states.

**Privacy safeguards:** We scan documents for personally identifiable information before storage; any PII triggers manual review. We collect no user data. API access remains anonymous beyond basic rate limiting. While documents already exist publicly, we add extra screening to prevent accidental inclusion of private data.

**Security measures:** Documents stored in S3 with encryption at rest. API uses TLS for transit encryption. Access controls limit write permissions to verified contributors. Version control in GitHub provides audit trail. Regular security scans check for vulnerabilities. Backup copies in multiple regions prevent data loss.

**Quality metrics:** 99.5% accuracy target verified through sampling. Completeness tracked via coverage dashboards. Freshness monitored through update frequency. Community feedback incorporated via GitHub issues. This comprehensive approach ensures reliable, secure data management.

## Stakeholder Engagement (250 words)

We develop government partnerships through multiple channels. Our collaboration with Federal Reserve Bank of Atlanta and Georgia Center for Opportunity demonstrates commitment—together we provide comprehensive documentation expertise as we seed the library with documents in our respective models covering all states and programs nationwide. Atlanta Fed helps us test our rules-as-code generation evaluation, where we'll assess how well LLMs can generate entries for their open-source Policy Rules Database with and without document access. The collaboration creates a replicable model with nationwide scope from the start. OpenStates/Plural CEO expressed openness to collaboration, offering their proven legislative tracking infrastructure and schema as foundation for our regulatory document archiving.

**Civic tech community engagement:** We plan to partner with former Code for America brigades and civic tech groups for infrastructure support. These volunteer technologists can help identify missing documents, contribute crawlers for their local jurisdictions, and validate data quality. The distributed model of civic tech groups maintaining their local coverage would ensure comprehensive coverage while building local ownership.

**Direct service partnership:** MyFriendBen and Benefit Navigator staff participate in monthly design sessions, test beta features, and provide continuous feedback. Their frontline experience guides prioritization. They identify which documents are most critical for daily operations.

**Academic collaboration:** Better Government Lab and USC researchers contribute policy expertise, validation, and documents from their PolicyEngine-based research. Prenatal-to-3 Policy Impact Center at Vanderbilt uses PolicyEngine for state tax credit modeling and contributes their policy research archive. Georgetown and Michigan teams use the system for research, providing academic rigor. Researchers can use our comprehensive document archive for economic analysis of benefit cliff effects and policy impacts.

**Open source ecosystem:** All code is public, enabling any developer to contribute. We'll work with 8-10 rules-as-code organizations selected via RFP—likely including state agencies, research institutions, and civic tech groups contributing documents from their jurisdictions. Documentation encourages local adaptations. This transparency builds trust with government agencies and ensures long-term sustainability beyond any single organization.

## Resources and Infrastructure (250 words)

Computational resources leverage cloud infrastructure for scalability. AWS provides core services: EC2 for crawlers, S3 for document storage, RDS for metadata. Infrastructure costs scale with usage, starting small and growing as coverage expands. AI API costs for Claude/GPT-5 vary based on crawling frequency and document volume.

**Software stack:** Python for crawler development using LangChain for AI orchestration. Integration with PolicyEngine's open-source rules engine to identify relevant documents for eligibility decisions—our engine already maps complex relationships like TANF-SNAP categorical eligibility. OpenStates API v3 integration for legislative document access and schema compatibility. FastAPI for REST API development. MCP server for native LLM integration enabling tools like Claude to directly query policy documents during conversations. PostgreSQL for structured data. React for public dashboards. GitHub Actions for CI/CD. All components 100% open-source except AI services.

**Government system integration:** API-first architecture enables integration without direct system access. Partners embed via REST calls or JavaScript widgets. Government agencies can bulk export their documents. No direct database connections required, reducing security concerns and technical barriers.

**Access model:** CloudFlare CDN ensures global availability with low latency. Multiple availability zones prevent outages. Automated scaling handles traffic spikes. API gateway manages authentication and rate limiting.

**Development infrastructure:** GitHub for code repository and collaboration. Slack for team communication. Linear for project management. Datadog for monitoring. This modern stack ensures efficient development and reliable operations while remaining vendor-agnostic where possible.

## Scalability & Sustainability (250 words)

We build technical scalability into our architecture. Our crawler system uses job queues enabling horizontal scaling. Add more workers to handle more jurisdictions. Document storage in S3 scales infinitely. API uses caching and CDN for performance at scale. Database sharding ready for millions of documents.

**Long-term sustainability through revenue diversification:** Enterprise API subscriptions from benefits platforms and government contractors. Government contracts for official preservation services. Foundation support for free nonprofit access. Multiple revenue streams ensure sustainability beyond grant period.

**Cost optimization:** Open-source approach eliminates licensing costs. Community contributions from 100+ developers reduce development expenses. Efficient caching minimizes AI API usage. Graduated storage (hot/cold) optimizes costs for historical documents.

**Organizational sustainability:** PolicyEngine's existing infrastructure and team provide stable foundation. Policy Library enhances our core benefits calculator mission. Board commitment to long-term support. Partnership agreements ensure continued stakeholder investment.

**Technical evolution:** Architecture supports new AI models as they emerge. Jurisdiction-agnostic design enables international expansion. Modular components allow feature addition without system rewrites. Version control preserves all historical data. This comprehensive approach ensures the Policy Library becomes permanent infrastructure, not a temporary project.

## Financial Viability (250 words)

**Budget allocation:** Personnel (1.85 FTE): $293,000. Fringe benefits (33%): $96,690. Partner contracts including integration support: $164,000. AI tools and infrastructure: $60,000. Indirect costs (10% de minimis): $61,369. Total: $675,059.

The PBIF grant enables dedicated Policy Library development while PolicyEngine maintains its existing benefits calculator services. This focused investment creates infrastructure that becomes self-sustaining through API subscriptions and government contracts.

**Funding diversification:** PBIF funding jumpstarts development. By Year 2, we anticipate enterprise API subscriptions and government preservation contracts. The open-source model and community contributions reduce ongoing costs.

**Financial sustainability plan:** Year 1: PBIF funding covers development and initial deployment with 5,000+ seed documents from partners. Year 2: Begin enterprise subscriptions and government contracts as system proves value. Year 3: Achieve sustainability through diversified revenue including API subscriptions, government contracts, and foundation support.

**Risk mitigation:** Staggered hiring reduces upfront costs. Cloud infrastructure scales with usage. Open-source model enables community contributions. Multiple revenue streams prevent single points of failure. This pragmatic approach ensures financial viability while building critical infrastructure.