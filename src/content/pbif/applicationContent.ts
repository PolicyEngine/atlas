export const executiveSummaryContent = `# Section 1: Executive Summary & Project Overview

## Project Title
PolicyEngine Policy Library

## Organization
**Name:** PolicyEngine  
**Type:** Non-profit  
**Contact:** Max Ghenis, CEO (max@policyengine.org)

## Executive Summary (limit 250 words)
*"In a concise summary, describe the core problem your project addresses, the proposed technical solution, the target beneficiaries, and the anticipated impact."*

**Word Count: 205/250**

The Policy Library creates infrastructure transforming benefits delivery. When tools access comprehensive source documents, we enable: AI accurately determining multi-program eligibility, caseworkers confidently navigating rules, researchers tracking policy variations, and innovations we haven't imagined.

We combine AI-powered monitoring (Claude/GPT-5) with PolicyEngine's open-source rules engine. We understand document relationships, surface non-obvious connections (TANF-SNAP categorical eligibility), enabling tools to build on authoritative ground truth.

**PBIF Priority Impact:** Income verification via state-specific disregards; reduced SNAP errors through current criteria; confident beneficiary communication with source documents; backlog reduction saving staff time.

**Not starting from scratch:** Collaboration with Federal Reserve Bank of Atlanta, Georgia Center for Opportunity, and NBER continues—we seed the library with documents covering nationwide scope. NBER and Prenatal-to-3 already use PolicyEngine for tax credit modeling. MyFriendBen, Benefit Navigator, Mirza, and Impactica use our API—we'll add document display to existing requests and integrate into caseworker training. Colorado users and Riverside County caseworkers see primary sources alongside calculations.

**12-month timeline:** Months 1-3: Launch 5,000+ documents, 10 states; Months 4-6: API v1 with partners; Months 7-9: 30 states; Months 10-12: Full production covering 50+ jurisdictions.

## Stage of Development
**Status:** Pilot ready / Active pilot

Our collaboration with Atlanta Fed and Georgia Center for Opportunity archives federal and North Carolina SNAP, Medicaid, and TANF documents. Researchers at Georgetown and Michigan already use our pilot repository. PolicyEngine's benefits calculators serve thousands of users, with MyFriendBen, Benefit Navigator, Mirza, and Impactica among our API clients. NBER and Prenatal-to-3 Policy Impact Center at Vanderbilt already use PolicyEngine for tax credit modeling. We'll build a web application for document submission and retrieval (beyond current API), seeded with documents from ALL participating organizations: PolicyEngine (2,500+ citations), documents in Atlanta Fed's Policy Rules Database model (nationwide coverage), GCO's collection (all states and programs), NBER's assembled tax documents via TAXSIM MOU (historical coverage since 2018), Prenatal-to-3's research archive, Better Government Lab and USC research documents, and documents MyFriendBen and Benefit Navigator reference in their systems—totaling 5,000+ documents at launch. We'll enrich all with metadata and convert PDFs to plaintext for efficient searching and AI processing.

## Project Timeline & Funding
**Start Date:** November 15, 2025  
**End Date:** November 14, 2027 (24 months)  
**Total Grant Request:** $675,059  
**Other Funding:** [To be determined]`;

export const valuePropositionContent = `# Section 2: Value Proposition and Responsible Deployment

## Problem Statement (250 words)
*"Clearly articulate the specific problem or challenge your initiative aims to address and how it relates to recent changes in federal policy or funding changes. Provide supporting data or evidence to demonstrate the urgency and significance of this problem - and how you've validated it with staff and/or beneficiaries. Is this an area where non-AI solutions do not already offer effective, fit-for-purpose, affordable approaches?"*

**Word Count: 220/250**

The benefits ecosystem lacks infrastructure for policy documentation, forcing organizations to rebuild document discovery. This prevents innovations: AI can't provide accurate multi-program guidance, caseworkers can't navigate eligibility rules, researchers can't track policy evolution. Recent changes—SNAP work requirements, Medicaid unwinding, TANF limits—make this critical.

Partners validated this need. MyFriendBen and Benefit Navigator waste resources maintaining documents. Georgetown and Michigan researchers lack document foundations. Atlanta Fed's collaboration shows even sophisticated institutions need shared infrastructure. Families face inconsistent information without comprehensive documentation.

Archive.org can't solve this: captures pages indiscriminately without understanding policy documents, no API for "Colorado SNAP rules" queries, can't identify document relationships, no metadata or semantic search. Benefits platforms need purpose-built infrastructure—structured data, reliable APIs, intelligent understanding. AI uniquely enables: (1) Intelligent crawling understands which documents matter, (2) LLMs identify changes requiring preservation, (3) AI surfaces non-obvious connections like TANF-SNAP categorical eligibility. Claude and GPT-5 excel at document extraction. This infrastructure amplifies human expertise, enabling impossible innovations.

## Solution & Target Beneficiaries (250 words)

**Word Count: 244/250**

The Policy Library solves document disappearance through three integrated components: (1) AI-powered crawlers using Claude/GPT-5 intelligently monitor government websites weekly, understanding context and document relationships; (2) Humans verify accuracy through GitHub pull requests; (3) Our stable API serves documents with permanent source IDs that never break. We'll launch with 5,000+ documents pooled from all participating organizations—PolicyEngine, Atlanta Fed, GCO, NBER (via TAXSIM MOU), Prenatal-to-3 Policy Impact Center at Vanderbilt, Better Government Lab, USC, MyFriendBen, and Benefit Navigator—ensuring comprehensive coverage from day one.

Vulnerable families navigating benefits currently lose access when documents disappear—they are our primary beneficiaries. We involve them through partnerships with direct service organizations that serve these populations daily. MyFriendBen and Benefit Navigator staff provide continuous feedback on document needs and usability, ensuring we capture what families actually need.

Organizations serving these families also benefit significantly. Direct service providers save hours they currently waste maintaining broken links. Our system proactively monitors all document URLs and sends immediate alerts when links break, allowing partners to update references before users encounter errors. Benefits navigators access reliable documentation instantly. University researchers gain the ability to conduct longitudinal policy analysis. Government agencies benefit from permanent archives of their own historical documents.

We involve beneficiaries throughout the project via: Monthly feedback sessions with partner organizations, open GitHub discussions for document requests, public dashboards showing coverage gaps, and direct integration with tools families already use. This participatory approach ensures we're building infrastructure that serves real needs, not theoretical ones.

## Proposed Benefit and Impact Evaluation (250 words)

**Word Count: 181/250**

Our success transforms how America's safety net operates. Organizations shift from maintaining broken links to serving families. AI tools provide accurate benefit information. Families never lose benefits due to missing documents.

Specific measurable metrics include:

**Coverage metrics:** 90% of benefit programs documented by Month 6 (baseline: 5,000+ from partners), 50+ jurisdictions by Month 12, 100,000+ documents by Month 24.

**Reliability metrics:** 99.9% API uptime, under 100ms retrieval speed, 99.5% accuracy via human verification.

**Impact metrics:** MyFriendBen's 3,500 monthly Colorado users see primary sources; Riverside County's 500+ caseworkers access real-time verification. Rules engine integration ensures ALL relevant documents including non-obvious connections (TANF-SNAP eligibility). Track: document retrievals per partner, broken link reduction, time to resolve eligibility questions. LLM accuracy improvement of 24pp through test cases, including rules-as-code generation experiments (Beeck Center approach) comparing AI performance with/without primary sources—expecting significant improvement generating accurate PolicyEngine parameter files when LLMs reference actual statutes.

We track progress through automated dashboards, monthly partner surveys, and API analytics. We publish quarterly reports sharing findings publicly. Success means families never hear "we can't find that document" when applying for benefits.

## Responsible Design and Use (250 words)

**Word Count: 192/250**

We identify three key risks: privacy concerns, accuracy issues, and potential misuse. We address each proactively through technical and governance measures.

**Privacy protection:** We archive only publicly available documents, never personal data. We don't collect or store user information. All documents we preserve already exist publicly. We respect robots.txt restrictions and rate limits to avoid overloading government servers.

**Accuracy safeguards:** Humans review every document via GitHub pull requests before we include it. Version control tracks all changes. Community members report errors through GitHub issues. We maintain clear attribution and sourcing for every document. Regular audits verify continued accuracy.

**Preventing misuse:** Clear terms of service prohibit using documents for fraud or misrepresentation. API rate limiting prevents abuse. We monitor usage patterns for anomalies. Documents include clear effective dates and jurisdiction markers to prevent confusion.

**Transparency measures:** All crawler code is open-source for inspection. Document selection criteria are publicly documented. Coverage gaps are clearly marked. We publish regular transparency reports on what we're archiving and why. An advisory board including legal experts and benefits advocates provides oversight. These measures ensure the Policy Library serves its intended purpose: helping families access benefits, not enabling harm.

## Adoption and Path to Scale (250 words)

**Word Count: 238/250**

Implementation builds on existing relationships. MyFriendBen already uses our API for 3,500+ monthly benefit calculations across Colorado—we'll add document display to these existing requests, showing users the actual regulations behind their results. Benefit Navigator, deployed with LA County caseworkers and expanding to Riverside County, will enhance their current PolicyEngine integration with primary-source verification during eligibility determinations. Deep integration pilots include technical integration and deployment support.

Government partnership strategy leverages existing relationships. Federal Reserve Bank of Atlanta has committed to collaboration through their Policy Rules Database. North Carolina and California agencies expressed interest following our pilot success. We'll formalize partnerships through MOUs establishing data sharing agreements and technical integration plans.

Community organization adoption follows a tiered approach. Tier 1: Direct integration partners (MyFriendBen, Benefit Navigator) who embed our API. Tier 2: Benefits navigators accessing through web interface. Tier 3: Researchers and advocates using public data. Each tier has tailored onboarding, documentation, and support.

Sustainability comes through diversified support. Enterprise API subscriptions from large platforms generate recurring revenue. Government contracts for official preservation services provide stable funding. Foundation support maintains free access for nonprofits. Open-source model enables community contributions reducing costs.

Scalability is built into architecture. Cloud infrastructure handles growth automatically. Crawler architecture is jurisdiction-agnostic, adding new states requires configuration not code. Community contributors can add coverage through pull requests. By Month 24, we'll cover all 50 states plus federal programs, becoming essential infrastructure for America's safety net.

## Dissemination & Learning (250 words)

**Word Count: 167/250**

Knowledge sharing maximizes impact across the benefits ecosystem.

**Open-source code:** All PolicyEngine code—rules engine, API, web app, document library—on GitHub under MIT license with 100+ contributors. Integration libraries (Python, JavaScript, R). Example implementations. Community contributes improvements, adds jurisdictions.

**Public data access:** Document corpus via API with free tier. Bulk exports for researchers. Public dashboards showing coverage. Weekly Internet Archive dumps for preservation.

**Learning dissemination:** Quarterly reports on policy patterns, preservation challenges, adoption metrics. LLM benchmark results showing accuracy improvements (baseline, with documents, with tools, full stack), including rules-as-code generation experiments demonstrating how primary sources enable accurate PolicyEngine parameter generation—extending Beeck Center's work. Academic papers on AI-powered benefits navigation. Conference presentations at Code for America Summit, Benefits Data Trust convening. Webinars for navigators and developers.

**Community engagement:** Monthly calls for feedback. GitHub discussions for requests. Newsletter with updates. Documentation wiki.

**Partnership sharing:** Case studies with MyFriendBen and Benefit Navigator. Research collaborations with Better Government Lab. Documentation of Atlanta Fed and GCO pilot learnings. Comprehensive dissemination ensures ecosystem-wide benefits.`;

export const technicalFeasibilityContent = `# Section 3: Technical & Practical Feasibility

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

**Risk mitigation:** Staggered hiring reduces upfront costs. Cloud infrastructure scales with usage. Open-source model enables community contributions. Multiple revenue streams prevent single points of failure. This pragmatic approach ensures financial viability while building critical infrastructure.`;
