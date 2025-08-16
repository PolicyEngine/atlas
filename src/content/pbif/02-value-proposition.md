# Section 2: Value Proposition and Responsible Deployment

## Problem Statement (250 words)
*"Clearly articulate the specific problem or challenge your initiative aims to address and how it relates to recent changes in federal policy or funding changes. Provide supporting data or evidence to demonstrate the urgency and significance of this problem - and how you've validated it with staff and/or beneficiaries. Is this an area where non-AI solutions do not already offer effective, fit-for-purpose, affordable approaches?"*

**Word Count: 220/250**

Open-source rules engines cannot achieve government credibility without authoritative documentation. Tim Shaw's feedback confirms this: document libraries are 'an important first step' but need proven utility through real use cases. Rules engines encoding SNAP, Medicaid, and TANF policies lack trust because they can't cite sources. Recent changes—SNAP work requirements, Medicaid unwinding, TANF limits—require verifiable encoding.

Our partners have validated this critical need through their daily work. MyFriendBen and Benefit Navigator waste valuable resources maintaining their own document collections. Researchers at Georgetown and Michigan lack reliable document foundations for their analyses. Our collaboration with the Atlanta Fed demonstrates that even sophisticated institutions need shared infrastructure. Most importantly, families face inconsistent and conflicting information without comprehensive documentation.

Archive.org can't solve this problem because it captures pages indiscriminately without understanding policy documents, provides no API for queries like "Colorado SNAP rules," can't identify document relationships, and lacks metadata or semantic search capabilities. Benefits platforms need purpose-built infrastructure with structured data, reliable APIs, and intelligent understanding. AI uniquely enables this solution: (1) Intelligent crawling understands which documents matter, (2) LLMs identify changes requiring preservation, (3) AI surfaces non-obvious connections like TANF-SNAP categorical eligibility. We'll use agentic AI approaches with robust metadata rather than fine-tuning, as Claude and GPT-5 excel at document extraction and understanding when given proper context. This infrastructure amplifies human expertise, enabling innovations that weren't previously possible.

## Solution & Target Beneficiaries (250 words)

**Word Count: 244/250**

The Policy Library solves document disappearance through four integrated components. First, we'll begin with bulk ingestion where partners contribute thousands of documents, with AI extracting metadata while humans verify accuracy. Second, our AI-powered crawlers will monitor government websites daily, understanding context and document relationships. Third, human reviewers will verify all documents through our review process to ensure accuracy. Fourth, our stable API will serve documents with permanent source IDs that never break. We'll launch with 5,000+ documents bulk-uploaded from participating organizations—PolicyEngine, Atlanta Fed, GCO, NBER (TAXSIM MOU), Urban Institute, Prenatal-to-3 at Vanderbilt, Better Government Lab, USC, MyFriendBen, Benefit Navigator—ensuring comprehensive coverage from day one.

Vulnerable families navigating benefits currently lose access when documents disappear—they are our primary beneficiaries. We'll delegate outreach and trust-building to our direct service partners who already have established relationships with these communities. MyFriendBen serves 3,500+ Colorado families monthly and will integrate document displays directly into their existing screeners. Benefit Navigator's caseworkers in LA and Riverside Counties will provide continuous feedback on document needs while serving their clients. These partners will handle beneficiary outreach through their existing channels, ensuring authentic engagement rather than top-down communication.

Organizations serving these families also benefit significantly. Direct service providers save hours they currently waste maintaining broken links. Our system proactively monitors all document URLs and sends immediate alerts when links break, allowing partners to update references before users encounter errors. Benefits navigators access reliable documentation instantly. University researchers gain the ability to conduct longitudinal policy analysis. Government agencies benefit from permanent archives of their own historical documents.

We'll involve beneficiaries throughout the project via multiple channels. Our partners will conduct monthly feedback sessions with their users and relay insights to us. We'll maintain open GitHub discussions for document requests, publish public dashboards showing coverage gaps, and ensure direct integration with tools families already use. MyFriendBen and Benefit Navigator will serve as our primary conduits for beneficiary feedback, leveraging their existing trust relationships to gather authentic input. This delegated, participatory approach ensures we're building infrastructure that serves real needs identified by those closest to the beneficiaries, not theoretical ones.

## Proposed Benefit and Impact Evaluation (250 words)

**Word Count: 181/250**

Year 1 establishes rules engine credibility through comprehensive documentation and nonprofit demonstrations. Year 2 enables government adoption based on proven accuracy improvements. Success means rules engines transition from experimental tools to trusted infrastructure.

Specific measurable metrics include:

**Coverage metrics:** 90% of benefit programs documented by Month 6 (baseline: 5,000+ from partners), 50+ jurisdictions by Month 12, 100,000+ documents by Month 24.

**Reliability metrics:** 99.9% API uptime, under 100ms retrieval speed, 99.5% accuracy via human verification.

**Impact metrics:** MyFriendBen's 3,500 monthly Colorado users will see primary sources; Riverside County's 500+ caseworkers will access real-time verification. Our rules engine integration will ensure ALL relevant documents are found, including non-obvious connections like TANF-SNAP eligibility. We'll track document retrievals per partner, broken link reduction, and time to resolve eligibility questions. We'll measure API response times, document accuracy rates through human verification, and partner satisfaction scores through monthly surveys.

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

Year 1 focuses on proving rules engine accuracy with nonprofit partners. MyFriendBen's 3,500+ monthly users will demonstrate error reduction when calculations cite sources. Benefit Navigator will show how document-backed rules improve caseworker confidence. These demonstrations establish the credibility needed for Year 2 government adoption.

Government partnership strategy leverages existing relationships. Federal Reserve Bank of Atlanta has committed to collaboration through their Policy Rules Database. North Carolina and California agencies expressed interest following our pilot success. We'll formalize partnerships through MOUs establishing data sharing agreements and technical integration plans.

Community organization adoption follows a tiered approach. Tier 1: Direct integration partners (MyFriendBen, Benefit Navigator) who embed our API. Tier 2: Benefits navigators accessing through web interface. Tier 3: Researchers and advocates using public data. Each tier has tailored onboarding, documentation, and support.

Sustainability comes through diversified support. Enterprise API subscriptions from large platforms generate recurring revenue. Government contracts for official preservation services provide stable funding. Foundation support maintains free access for nonprofits. Open-source model enables community contributions reducing costs.

Scalability is built into our architecture. Cloud infrastructure will handle growth automatically. Our crawler architecture is jurisdiction-agnostic—adding new states requires only configuration changes, not new code. Community contributors can add coverage through pull requests. Year 1 achieves comprehensive coverage (50+ jurisdictions) establishing rules engine credibility. Year 2 leverages proven results for government adoption. Our NSF POSE Phase 1 grant complements PBIF funding by expanding the open-source ecosystem for sustained growth.

## Dissemination & Learning (250 words)

**Word Count: 167/250**

Knowledge sharing maximizes impact across the benefits ecosystem.

**Open-source code:** All PolicyEngine code—rules engine, API, web app, document library—on GitHub under MIT license with 100+ contributors. Integration libraries (Python, JavaScript, R). Example implementations. Community contributes improvements, adds jurisdictions.

**Public data access:** Document corpus via API with free tier. Bulk exports for researchers. Public dashboards showing coverage. Weekly Internet Archive dumps for preservation.

**Learning dissemination:** Quarterly reports on policy patterns, preservation challenges, and adoption metrics. Academic papers on AI-powered benefits navigation and document preservation methodologies. Conference presentations at Code for America Summit and Benefits Data Trust convening. Webinars for navigators and developers on using the Policy Library API and integrating document access into their tools.

**Community engagement:** Monthly calls for feedback. GitHub discussions for requests. Newsletter with updates. Documentation wiki.

**Partnership sharing:** Case studies with MyFriendBen and Benefit Navigator. Research collaborations with Better Government Lab. Documentation of Atlanta Fed and GCO pilot learnings. Comprehensive dissemination ensures ecosystem-wide benefits.