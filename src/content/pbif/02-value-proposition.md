# Section 2: Value Proposition and Responsible Deployment

## Problem Statement (250 words)
*"Clearly articulate the specific problem or challenge your initiative aims to address and how it relates to recent changes in federal policy or funding changes. Provide supporting data or evidence to demonstrate the urgency and significance of this problem - and how you've validated it with staff and/or beneficiaries. Is this an area where non-AI solutions do not already offer effective, fit-for-purpose, affordable approaches?"*

The benefits ecosystem lacks foundational infrastructure for policy documentation, forcing every organization to rebuild document discovery and maintenance. This fragmentation prevents breakthrough innovations: AI tools can't provide accurate multi-program guidance without comprehensive documents, caseworkers can't confidently navigate complex eligibility rules, and researchers can't track policy evolution. Recent changes—SNAP work requirements, Medicaid unwinding, TANF time limits—make this infrastructure critical for system-wide transformation.

We validated this need through partnerships. MyFriendBen and Benefit Navigator spend resources maintaining document access instead of improving user experience. Georgetown and Michigan researchers lack the document foundation for policy analysis. The Federal Reserve Bank of Atlanta's Policy Rules Database collaboration shows even sophisticated institutions need shared infrastructure. Most critically, families navigating benefits face inconsistent information because no single source provides comprehensive, authoritative documentation.

Why not use Archive.org? While excellent for general web preservation, Archive.org can't solve this problem: it captures pages indiscriminately without understanding what's a policy document, provides no API for benefits tools to query "Colorado SNAP rules," can't identify document relationships, and offers no metadata or semantic search. Benefits platforms need purpose-built infrastructure—structured data, reliable APIs, and intelligent document understanding. AI uniquely enables this: (1) Intelligent crawling understands which documents matter for benefits determination, (2) LLMs identify policy changes requiring immediate preservation, (3) AI surfaces non-obvious connections like TANF-SNAP categorical eligibility. Our testing shows Claude and GPT-5 excel at document extraction when properly prompted. This creates infrastructure that amplifies human expertise, enabling innovations impossible without comprehensive, structured document access.

## Solution & Target Beneficiaries (250 words)

The Policy Library solves document disappearance through three integrated components: (1) AI-powered crawlers using Claude/GPT-5 intelligently monitor government websites weekly, understanding context and document relationships; (2) Humans verify accuracy through GitHub pull requests; (3) Our stable API serves documents with permanent source IDs that never break. We'll launch with 5,000+ documents pooled from all participating organizations—PolicyEngine, Atlanta Fed, GCO, Prenatal-to-3 Policy Impact Center at Vanderbilt, Better Government Lab, USC, MyFriendBen, and Benefit Navigator—ensuring comprehensive coverage from day one.

Vulnerable families navigating benefits currently lose access when documents disappear—they are our primary beneficiaries. We involve them through partnerships with direct service organizations that serve these populations daily. MyFriendBen and Benefit Navigator staff provide continuous feedback on document needs and usability, ensuring we capture what families actually need.

Organizations serving these families also benefit significantly. Direct service providers save hours they currently waste maintaining broken links. Our system proactively monitors all document URLs and sends immediate alerts when links break, allowing partners to update references before users encounter errors. Benefits navigators access reliable documentation instantly. University researchers gain the ability to conduct longitudinal policy analysis. Government agencies benefit from permanent archives of their own historical documents.

We involve beneficiaries throughout the project via: Monthly feedback sessions with partner organizations, open GitHub discussions for document requests, public dashboards showing coverage gaps, and direct integration with tools families already use. This participatory approach ensures we're building infrastructure that serves real needs, not theoretical ones.

## Proposed Benefit and Impact Evaluation (250 words)

Our success transforms how America's safety net operates. Organizations shift from maintaining broken links to serving families. AI tools provide accurate benefit information. Families never lose benefits due to missing documents.

Specific measurable metrics include:

**Coverage metrics:** 90% of benefit programs documented by Month 6 (baseline: 5,000+ from partner contributions at launch), 50+ jurisdictions monitored weekly by Month 12 (baseline: federal + NC from pilot), 100,000+ documents archived by Month 24 (baseline: 5,000+ from partners).

**Reliability metrics:** 99.9% API uptime (measured via monitoring), under 100ms document retrieval speed (measured per request), 99.5% document accuracy (human verification sampling).

**Impact metrics:** Deep integration pilots provide measurable outcomes: MyFriendBen's 3,500 monthly Colorado users will see primary sources for every benefit query; Riverside County's 500+ caseworkers will access real-time verification during eligibility determinations. Our rules engine integration ensures users see ALL relevant documents—including non-obvious connections like TANF statutes affecting SNAP eligibility. We'll track: (1) Number of document retrievals per partner organization, (2) Reduction in broken link errors reported by users, (3) Time to resolve eligibility questions with vs. without document access. LLM accuracy improvement of 24pp measured through test cases, including rules-as-code generation experiments (similar to Beeck Center's work) comparing AI performance with and without primary source access—we expect significant improvement in generating accurate PolicyEngine-style parameter files when LLMs can reference actual statutes and regulations.

We track progress through automated dashboards, monthly partner surveys, and API analytics. We publish quarterly reports sharing findings publicly. Success means families never hear "we can't find that document" when applying for benefits.

## Responsible Design and Use (250 words)

We identify three key risks: privacy concerns, accuracy issues, and potential misuse. We address each proactively through technical and governance measures.

**Privacy protection:** We archive only publicly available documents, never personal data. We don't collect or store user information. All documents we preserve already exist publicly. We respect robots.txt restrictions and rate limits to avoid overloading government servers.

**Accuracy safeguards:** Humans review every document via GitHub pull requests before we include it. Version control tracks all changes. Community members report errors through GitHub issues. We maintain clear attribution and sourcing for every document. Regular audits verify continued accuracy.

**Preventing misuse:** Clear terms of service prohibit using documents for fraud or misrepresentation. API rate limiting prevents abuse. We monitor usage patterns for anomalies. Documents include clear effective dates and jurisdiction markers to prevent confusion.

**Transparency measures:** All crawler code is open-source for inspection. Document selection criteria are publicly documented. Coverage gaps are clearly marked. We publish regular transparency reports on what we're archiving and why. An advisory board including legal experts and benefits advocates provides oversight. These measures ensure the Policy Library serves its intended purpose: helping families access benefits, not enabling harm.

## Adoption and Path to Scale (250 words)

Implementation builds on existing relationships. MyFriendBen already uses our API for 3,500+ monthly benefit calculations across Colorado—we'll add document display to these existing requests, showing users the actual regulations behind their results. Benefit Navigator, deployed with LA County caseworkers and expanding to Riverside County, will enhance their current PolicyEngine integration with primary-source verification during eligibility determinations. Each pilot receives $30k for deep technical integration and deployment support.

Government partnership strategy leverages existing relationships. Federal Reserve Bank of Atlanta has committed to collaboration through their Policy Rules Database. North Carolina and California agencies expressed interest following our pilot success. We'll formalize partnerships through MOUs establishing data sharing agreements and technical integration plans.

Community organization adoption follows a tiered approach. Tier 1: Direct integration partners (MyFriendBen, Benefit Navigator) who embed our API. Tier 2: Benefits navigators accessing through web interface. Tier 3: Researchers and advocates using public data. Each tier has tailored onboarding, documentation, and support.

Sustainability comes through diversified support. Enterprise API subscriptions from large platforms generate recurring revenue. Government contracts for official preservation services provide stable funding. Foundation support maintains free access for nonprofits. Open-source model enables community contributions reducing costs.

Scalability is built into architecture. Cloud infrastructure handles growth automatically. Crawler architecture is jurisdiction-agnostic, adding new states requires configuration not code. Community contributors can add coverage through pull requests. By Month 24, we'll cover all 50 states plus federal programs, becoming essential infrastructure for America's safety net.

## Dissemination & Learning (250 words)

Knowledge sharing is fundamental to our mission. All findings, tools, and data will be publicly accessible to maximize impact across the benefits access ecosystem.

**Open-source code:** All PolicyEngine code—rules engine, API, web app, and now document library—published on GitHub under MIT license with 100+ contributors. Integration libraries for common frameworks (Python, JavaScript, R). Example implementations and tutorials. Community can contribute improvements, add jurisdictions, and adapt for local needs.

**Public data access:** Complete document corpus available via API with generous free tier. Bulk data exports for researchers. Public dashboards showing coverage, updates, and gaps. Weekly data dumps to Internet Archive for permanent preservation.

**Learning dissemination:** Quarterly reports analyzing policy change patterns, document preservation challenges, and adoption metrics. Public LLM benchmark results showing accuracy improvements across different conditions (baseline, with documents, with tools, full stack), including rules-as-code generation experiments demonstrating how primary source access enables LLMs to accurately generate PolicyEngine parameter files—extending Beeck Center's pioneering work in this area. Academic papers with university partners on AI-powered benefits navigation and administrative burden reduction. Conference presentations at Code for America Summit, Benefits Data Trust convening. Webinars for benefits navigators and AI developers.

**Community engagement:** Monthly community calls for feedback and updates. Public GitHub discussions for feature requests and document needs. Newsletter sharing updates, tips, and success stories. Documentation wiki with implementation guides.

**Partnership sharing:** Case studies with MyFriendBen and Benefit Navigator on integration success. Research collaborations with Better Government Lab on take-up rates. Documentation of pilot learnings from our collaboration with Atlanta Fed and GCO. This comprehensive dissemination ensures our work benefits the entire safety net ecosystem.