# Section 2: Value Proposition and Responsible Deployment

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

**Partnership sharing:** Case studies with MyFriendBen and Benefit Navigator. Research collaborations with Better Government Lab. Documentation of Atlanta Fed and GCO pilot learnings. Comprehensive dissemination ensures ecosystem-wide benefits.