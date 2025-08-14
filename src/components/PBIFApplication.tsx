function PBIFApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="pbif-header">
          <h1 className="pbif-title">PBIF Summer 2025 Application</h1>
          <p className="pbif-subtitle">
            PolicyEngine Policy Library - AI Infrastructure for America's Safety Net
          </p>
        </div>

        <div className="response-box" style={{ background: '#f0f8ff', marginBottom: '30px' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
            <strong>Note:</strong> This page shows our responses to the official PBIF application
            questions. Each section header and question text is verbatim from the application.
          </p>
          <p style={{ marginBottom: 0 }}>
            <a
              href="https://www.publicbenefitinnovationfund.org/Summer_2025_Open_Call_Application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--blue)' }}
            >
              View Official Application PDF →
            </a>
          </p>
        </div>

        {/* Section 1: Executive Summary & Project Overview */}
        <div className="application-section">
          <h2 className="section-title">Section 1: Executive Summary & Project Overview</h2>

          <div className="response-box">
            <h3>Project Title</h3>
            <p>PolicyEngine Policy Library</p>
          </div>

          <div className="response-box">
            <h3>Organization</h3>
            <p>
              <strong>Name:</strong> PolicyEngine
            </p>
            <p>
              <strong>Type:</strong> Non-profit
            </p>
            <p>
              <strong>Contact:</strong> Max Ghenis, CEO (max@policyengine.org)
            </p>
          </div>

          <div className="response-box">
            <h3>Executive Summary (limit 250 words)</h3>
            <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '15px' }}>
              "In a concise summary, describe the core problem your project addresses, the proposed
              technical solution, the target beneficiaries, and the anticipated impact."
            </p>
            <p>
              The Policy Library is cross-cutting infrastructure that directly enables all four PBIF
              priority areas. Every tool for income verification, SNAP error reduction, beneficiary
              communication, and backlog reduction fails when the underlying policy documents
              disappear—which happens constantly as agencies reorganize websites and vendors shut
              down.
            </p>
            <p>
              Our AI-powered solution (using Claude/GPT-5) monitors 50+ jurisdictions weekly,
              permanently archiving statutes, regulations, and implementation memos. Our 100%
              open-source rules engine (with 100+ contributors) identifies all relevant documents
              for any eligibility decision—including complex interactions like TANF-SNAP categorical
              eligibility. We provide stable APIs ensuring caseworkers, advocates, and AI tools
              always have access to current, authoritative documents.
            </p>
            <p>
              <strong>Direct PBIF Priority Impact:</strong> (1) Income verification—instant access
              to state-specific disregard policies; (2) SNAP errors—current eligibility criteria
              reduce documentation-related errors; (3) Beneficiary communication—advocates can
              confidently explain rules with source documents; (4) Backlog reduction—staff save
              significant time currently spent hunting for policy clarifications.
            </p>
            <p>
              <strong>Not starting from scratch:</strong> Our collaboration with Federal Reserve
              Bank of Atlanta and Georgia Center for Opportunity continues as we seed the library
              with documents in our respective models, covering federal programs and North Carolina
              initially with nationwide scope. MyFriendBen and Benefit Navigator already use our API
              for benefit calculations—we propose adding document display as an enhancement to their
              existing requests ($30k each for deep integration). When Colorado users query benefits
              through MyFriendBen or Riverside County caseworkers use Benefit Navigator, they'll see
              primary sources alongside calculations they already receive.
            </p>
            <p>
              <strong>12-month production timeline:</strong> Months 1-3: Launch with 5,000+
              documents from all partners, scale to 10 states; Months 4-6: API v1 with partner
              integration; Months 7-9: 30 states; Months 10-12: Full production. This infrastructure
              makes every other PBIF project more reliable and sustainable.
            </p>
          </div>

          <div className="response-box">
            <h3>Stage of Development</h3>
            <p>
              <strong>Status:</strong> Pilot ready / Active pilot
            </p>
            <p>
              Our collaboration with Atlanta Fed and Georgia Center for Opportunity archives SNAP,
              Medicaid, and TANF documents as we seed the library with documents in our respective
              models covering all states and programs nationwide. Researchers at Georgetown and
              Michigan already use our pilot repository. PolicyEngine's benefits calculators serve
              thousands of users, with MyFriendBen and Benefit Navigator among our API clients.
              We'll build a web application for document submission and retrieval (beyond current
              API), seeded with documents from ALL participating organizations: PolicyEngine (2,500+
              citations), documents in Atlanta Fed's Policy Rules Database model (nationwide
              coverage), GCO's collection (all states and programs), Prenatal-to-3 Policy Impact
              Center's research archive (they use PolicyEngine for state tax credit modeling),
              Better Government Lab and USC research documents, and documents MyFriendBen and
              Benefit Navigator reference in their systems—totaling 5,000+ documents at launch.
              We'll enrich all with metadata and convert PDFs to plaintext for efficient searching
              and AI processing.
            </p>
          </div>

          <div className="response-box">
            <h3>Project Timeline & Funding</h3>
            <p>
              <strong>Start Date:</strong> November 15, 2025
            </p>
            <p>
              <strong>End Date:</strong> November 14, 2027 (24 months)
            </p>
            <p>
              <strong>Total Grant Request:</strong> $675,059
            </p>
            <p>
              <strong>Other Funding:</strong> [To be determined]
            </p>
          </div>
        </div>

        {/* Section 2: Value Proposition and Responsible Deployment */}
        <div className="application-section">
          <h2 className="section-title">Section 2: Value Proposition and Responsible Deployment</h2>

          <div className="response-box">
            <h3>Problem Statement (250 words)</h3>
            <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: '15px' }}>
              "Clearly articulate the specific problem or challenge your initiative aims to address
              and how it relates to recent changes in federal policy or funding changes. Provide
              supporting data or evidence to demonstrate the urgency and significance of this
              problem - and how you've validated it with staff and/or beneficiaries. Is this an area
              where non-AI solutions do not already offer effective, fit-for-purpose, affordable
              approaches?"
            </p>
            <p>
              The benefits ecosystem lacks foundational infrastructure for policy documentation,
              forcing every organization to rebuild document discovery and maintenance. This
              fragmentation prevents breakthrough innovations: AI tools can't provide accurate
              multi-program guidance without comprehensive documents, caseworkers can't confidently
              navigate complex eligibility rules, and researchers can't track policy evolution.
              Recent changes—SNAP work requirements, Medicaid unwinding, TANF time limits—make this
              infrastructure critical for system-wide transformation.
            </p>
            <p>
              We validated this need through partnerships. MyFriendBen and Benefit Navigator spend
              resources maintaining document access instead of improving user experience. Georgetown
              and Michigan researchers lack the document foundation for policy analysis. The Federal
              Reserve Bank of Atlanta's Policy Rules Database collaboration shows even sophisticated
              institutions need shared infrastructure. Most critically, families navigating benefits
              face inconsistent information because no single source provides comprehensive,
              authoritative documentation.
            </p>
            <p>
              AI uniquely enables this transformation: (1) Intelligent crawling understands context
              and relationships traditional scraping misses, (2) LLMs can identify policy changes
              requiring immediate preservation, (3) AI surfaces non-obvious document connections
              like TANF-SNAP categorical eligibility. Our testing shows Claude and GPT-5 excel at
              document extraction and classification when properly prompted. This isn't about
              replacing human judgment—it's about creating infrastructure that amplifies human
              expertise, enabling innovations impossible without comprehensive document access.
            </p>
          </div>

          <div className="response-box">
            <h3>Solution & Target Beneficiaries (250 words)</h3>
            <p>
              The Policy Library creates infrastructure that transforms what's possible in benefits
              delivery. Three components enable this: (1) AI-powered discovery using Claude/GPT-5
              to intelligently understand policy relationships across jurisdictions; (2) Human
              verification ensuring accuracy through collaborative review; (3) Intelligent APIs that
              don't just serve documents but understand connections between them. We launch with
              5,000+ documents from PolicyEngine, Atlanta Fed, GCO, Prenatal-to-3 Policy Impact
              Center, Better Government Lab, USC, MyFriendBen, and Benefit Navigator—creating
              immediate value while building toward comprehensive coverage.
            </p>
            <p>
              Vulnerable families navigating benefits currently lose access when documents
              disappear—they are our primary beneficiaries. We involve them through partnerships
              with direct service organizations that serve these populations daily. MyFriendBen and
              Benefit Navigator staff provide continuous feedback on document needs and usability,
              ensuring we capture what families actually need.
            </p>
            <p>
              Organizations serving these families also benefit significantly. Direct service
              providers save hours they currently waste maintaining broken links. Our system
              proactively monitors all document URLs and sends immediate alerts when links break,
              allowing partners to update references before users encounter errors. Benefits
              navigators access reliable documentation instantly. University researchers gain the
              ability to conduct longitudinal policy analysis. Government agencies benefit from
              permanent archives of their own historical documents.
            </p>
            <p>
              We involve beneficiaries throughout the project via: Monthly feedback sessions with
              partner organizations, open GitHub discussions for document requests, public
              dashboards showing coverage gaps, and direct integration with tools families already
              use. This participatory approach ensures we're building infrastructure that serves
              real needs, not theoretical ones.
            </p>
          </div>

          <div className="response-box">
            <h3>Proposed Benefit and Impact Evaluation (250 words)</h3>
            <p>
              Our success transforms how America's safety net operates. Organizations shift from
              maintaining broken links to serving families. AI tools provide accurate benefit
              information. Families never lose benefits due to missing documents.
            </p>
            <p>Specific measurable metrics include:</p>
            <p>
              <strong>Coverage metrics:</strong> 90% of benefit programs documented by Month 6
              (baseline: 5,000+ from partner contributions at launch), 50+ jurisdictions monitored
              weekly by Month 12 (baseline: federal + NC from pilot), 100,000+ documents archived by
              Month 24 (baseline: 5,000+ from partners).
            </p>
            <p>
              <strong>Reliability metrics:</strong> 99.9% API uptime (measured via monitoring),
              under 100ms document retrieval speed (measured per request), 99.5% document accuracy
              (human verification sampling).
            </p>
            <p>
              <strong>Impact metrics:</strong> Deep integration pilots provide measurable outcomes:
              MyFriendBen's 3,500 monthly Colorado users will see primary sources for every benefit
              query; Riverside County's 500+ caseworkers will access real-time verification during
              eligibility determinations. Our rules engine integration ensures users see ALL
              relevant documents—including non-obvious connections like TANF statutes affecting SNAP
              eligibility. We'll track: (1) Number of document retrievals per partner organization,
              (2) Reduction in broken link errors reported by users, (3) Time to resolve eligibility
              questions with vs. without document access. LLM accuracy improvement of 24pp measured
              through test cases, including rules-as-code generation experiments (similar to Beeck
              Center's work) comparing AI performance with and without primary source access—we
              expect significant improvement in generating accurate PolicyEngine-style parameter
              files when LLMs can reference actual statutes and regulations.
            </p>
            <p>
              We track progress through automated dashboards, monthly partner surveys, and API
              analytics. We publish quarterly reports sharing findings publicly. Success means
              families never hear "we can't find that document" when applying for benefits.
            </p>
          </div>

          <div className="response-box">
            <h3>Responsible Design and Use (250 words)</h3>
            <p>
              We identify three key risks: privacy concerns, accuracy issues, and potential misuse.
              We address each proactively through technical and governance measures.
            </p>
            <p>
              <strong>Privacy protection:</strong> We archive only publicly available documents,
              never personal data. We don't collect or store user information. All documents we
              preserve already exist publicly. We respect robots.txt restrictions and rate limits to
              avoid overloading government servers.
            </p>
            <p>
              <strong>Accuracy safeguards:</strong> Humans review every document via GitHub pull
              requests before we include it. Version control tracks all changes. Community members
              report errors through GitHub issues. We maintain clear attribution and sourcing for
              every document. Regular audits verify continued accuracy.
            </p>
            <p>
              <strong>Preventing misuse:</strong> Clear terms of service prohibit using documents
              for fraud or misrepresentation. API rate limiting prevents abuse. We monitor usage
              patterns for anomalies. Documents include clear effective dates and jurisdiction
              markers to prevent confusion.
            </p>
            <p>
              <strong>Transparency measures:</strong> All crawler code is open-source for
              inspection. Document selection criteria are publicly documented. Coverage gaps are
              clearly marked. We publish regular transparency reports on what we're archiving and
              why. An advisory board including legal experts and benefits advocates provides
              oversight. These measures ensure the Policy Library serves its intended purpose:
              helping families access benefits, not enabling harm.
            </p>
          </div>

          <div className="response-box">
            <h3>Adoption and Path to Scale (250 words)</h3>
            <p>
              Implementation builds on existing relationships. MyFriendBen already uses our API for
              3,500+ monthly benefit calculations across Colorado—we'll add document display to
              these existing requests, showing users the actual regulations behind their results.
              Benefit Navigator, deployed with LA County caseworkers and expanding to Riverside
              County, will enhance their current PolicyEngine integration with primary-source
              verification during eligibility determinations. Each pilot receives $30k for deep
              technical integration and deployment support.
            </p>
            <p>
              Government partnership strategy leverages existing relationships. Federal Reserve Bank
              of Atlanta has committed to collaboration through their Policy Rules Database. North
              Carolina and California agencies expressed interest following our pilot success. We'll
              formalize partnerships through MOUs establishing data sharing agreements and technical
              integration plans.
            </p>
            <p>
              Community organization adoption follows a tiered approach. Tier 1: Direct integration
              partners (MyFriendBen, Benefit Navigator) who embed our API. Tier 2: Benefits
              navigators accessing through web interface. Tier 3: Researchers and advocates using
              public data. Each tier has tailored onboarding, documentation, and support.
            </p>
            <p>
              Sustainability comes through diversified support. Enterprise API subscriptions from
              large platforms generate recurring revenue. Government contracts for official
              preservation services provide stable funding. Foundation support maintains free access
              for nonprofits. Open-source model enables community contributions reducing costs.
            </p>
            <p>
              Scalability is built into architecture. Cloud infrastructure handles growth
              automatically. Crawler architecture is jurisdiction-agnostic, adding new states
              requires configuration not code. Community contributors can add coverage through pull
              requests. By Month 24, we'll cover all 50 states plus federal programs, becoming
              essential infrastructure for America's safety net.
            </p>
          </div>

          <div className="response-box">
            <h3>Dissemination & Learning (250 words)</h3>
            <p>
              Knowledge sharing is fundamental to our mission. All findings, tools, and data will be
              publicly accessible to maximize impact across the benefits access ecosystem.
            </p>
            <p>
              <strong>Open-source code:</strong> All PolicyEngine code—rules engine, API, web app,
              and now document library—published on GitHub under MIT license with 100+ contributors.
              Integration libraries for common frameworks (Python, JavaScript, R). Example
              implementations and tutorials. Community can contribute improvements, add
              jurisdictions, and adapt for local needs.
            </p>
            <p>
              <strong>Public data access:</strong> Complete document corpus available via API with
              generous free tier. Bulk data exports for researchers. Public dashboards showing
              coverage, updates, and gaps. Weekly data dumps to Internet Archive for permanent
              preservation.
            </p>
            <p>
              <strong>Learning dissemination:</strong> Quarterly reports analyzing policy change
              patterns, document preservation challenges, and adoption metrics. Public LLM benchmark
              results showing accuracy improvements across different conditions (baseline, with
              documents, with tools, full stack), including rules-as-code generation experiments
              demonstrating how primary source access enables LLMs to accurately generate
              PolicyEngine parameter files—extending Beeck Center's pioneering work in this area.
              Academic papers with university partners on AI-powered benefits navigation and
              administrative burden reduction. Conference presentations at Code for America Summit,
              Benefits Data Trust convening. Webinars for benefits navigators and AI developers.
            </p>
            <p>
              <strong>Community engagement:</strong> Monthly community calls for feedback and
              updates. Public GitHub discussions for feature requests and document needs. Newsletter
              sharing updates, tips, and success stories. Documentation wiki with implementation
              guides.
            </p>
            <p>
              <strong>Partnership sharing:</strong> Case studies with MyFriendBen and Benefit
              Navigator on integration success. Research collaborations with Better Government Lab
              on take-up rates. Documentation of pilot learnings from our collaboration with Atlanta
              Fed and GCO. This comprehensive dissemination ensures our work benefits the entire
              safety net ecosystem.
            </p>
          </div>
        </div>

        {/* Section 3: Technical & Practical Feasibility */}
        <div className="application-section">
          <h2 className="section-title">Section 3: Technical & Practical Feasibility</h2>

          <div className="response-box">
            <h3>Solution Description (250 words)</h3>
            <p>
              The Policy Library uses AI as intelligent crawlers that understand government websites
              like human researchers. Claude and GPT-5 navigate complex site structures, identify
              relevant documents, and understand relationships between statutes, regulations, and
              forms. AI acts as our co-pilot while humans provide oversight at critical checkpoints.
            </p>
            <p>
              <strong>AI techniques:</strong> Large language models (Claude/GPT-5) power intelligent
              crawling and document extraction. We prompt them to understand government website
              patterns, identify policy documents, and extract structured metadata. Embedding models
              for semantic search and duplicate detection. Traditional NLP for document
              classification and change detection. LLM benchmark framework using PolicyEngine-US to
              generate ground truth calculations across 10,000+ household scenarios, plus
              rules-as-code generation experiments measuring how accurately LLMs can create
              PolicyEngine parameter files with and without document access (building on Beeck
              Center's approach). MCP (Model Context Protocol) server enabling direct LLM
              integration for real-time policy lookups.
            </p>
            <p>
              <strong>Human oversight checkpoints:</strong> (1) Initial crawler configuration:
              Humans define jurisdiction scope and document types. (2) Document identification: AI
              proposes documents, humans verify relevance via GitHub PR review. (3) Change
              detection: AI identifies updates, humans confirm significance. (4) Quality assurance:
              Regular human audits of AI decisions.
            </p>
            <p>
              <strong>Architecture with Integration Support:</strong> Crawler service using
              LangChain for AI orchestration. Continuous monitoring system checks all document URLs
              daily and sends immediate alerts to partners when links break. Web application enables
              document submission and retrieval beyond API access. We'll seed the system with
              documents from ALL confirmed partners: PolicyEngine's 2,500+ cited documents (from our
              100% open-source rules engine with 100+ contributors), documents in Atlanta Fed's
              Policy Rules Database model (nationwide coverage of federal and state programs), GCO's
              comprehensive collection (all states and programs, not just NC), Prenatal-to-3 Policy
              Impact Center's research archive (they use PolicyEngine for state tax credit
              modeling), Better Government Lab and USC academic research, MyFriendBen's Colorado
              references, and Benefit Navigator's California documents—creating a comprehensive
              launch library of 5,000+ documents, all enriched with metadata and converted to
              plaintext for efficient AI processing. Our rules engine integration identifies the
              most relevant documents for any eligibility decision—including non-obvious connections
              like TANF regulations when TANF provides categorical eligibility for SNAP. REST API
              using FastAPI enhances existing partner integrations—MyFriendBen and Benefit Navigator
              add document display to their current PolicyEngine API calls. When Colorado users
              check benefits, they see actual state regulations. When Riverside County caseworkers
              verify eligibility, they access primary sources instantly. PostgreSQL for metadata, S3
              for documents, CloudFlare CDN for performance.
            </p>
            <p>
              This hybrid approach leverages AI's ability to process vast amounts of information
              while maintaining human judgment for critical decisions, ensuring both scale and
              accuracy.
            </p>
            <p>
              <strong>Rules-as-Code Generation Evaluation:</strong> Building on Beeck Center's
              pioneering work, we'll conduct controlled experiments measuring LLMs' ability to
              generate accurate rules-as-code for multiple open-source systems—PolicyEngine
              parameter files and Atlanta Fed Policy Rules Database entries (the only other
              open-source implementation). We'll test three conditions: (1) Baseline: LLM with only
              a policy description, (2) Enhanced: LLM with Policy Library document access, (3) Full:
              LLM with documents plus existing system patterns. We expect document-enhanced LLMs to
              achieve 70%+ accuracy in generating correct values, formulas, and effective
              dates—compared to under 30% baseline accuracy. This multi-system evaluation proves the
              Policy Library's universal value for automated policy implementation across different
              rules-as-code approaches.
            </p>
          </div>

          <div className="response-box">
            <h3>Data Strategy - Data Sources (250 words)</h3>
            <p>
              We source all data from publicly available government websites. Federal agencies
              (cms.gov, fns.usda.gov, acf.hhs.gov) publish regulations and guidance. State agencies
              host statutes, rules, and forms on official websites. We never collect private or
              personal data.
            </p>
            <p>
              <strong>Data ownership:</strong> Documents exist in public domain or as government
              works not subject to copyright. We maintain clear attribution to source agencies. Our
              value-add (organization, preservation, API access) creates new intellectual property
              while respecting source rights.
            </p>
            <p>
              <strong>Data agreements:</strong> No formal agreements needed for public documents.
              However, we're establishing MOUs with partner agencies (Federal Reserve Bank of
              Atlanta, North Carolina DHHS) for collaboration and notification of major updates.
              These agreements formalize relationships but aren't required for public data access.
            </p>
            <p>
              <strong>Securing access:</strong> We follow responsible crawling practices: respecting
              robots.txt, implementing rate limits, identifying ourselves via user agent. For
              agencies with concerns, we offer direct collaboration where they can push updates to
              us. Several agencies expressed interest in this model during pilot discussions.
            </p>
            <p>
              <strong>Pilot validation:</strong> North Carolina pilot proved feasibility,
              successfully archiving SNAP, Medicaid, and TANF documents from multiple state websites
              without issues. Federal sites are even more standardized, simplifying expansion.
              Partner organizations contribute their existing document collections: PolicyEngine
              (2,500+ policy parameter citations), documents in Atlanta Fed's model (federal and
              state rules covering all jurisdictions), GCO (nationwide program documents, not
              limited to NC), Prenatal-to-3 Policy Impact Center at Vanderbilt (research archive,
              uses PolicyEngine for state tax credit modeling), Better Government Lab and USC
              (academic research using PolicyEngine), MyFriendBen (Colorado references), and Benefit
              Navigator (California documents). This collaborative seeding ensures comprehensive
              coverage from launch while eliminating privacy concerns through public data only.
            </p>
          </div>

          <div className="response-box">
            <h3>Data Strategy - Data Management (250 words)</h3>
            <p>
              We ensure data quality through multiple validation layers. AI extracts documents with
              confidence scores; humans review low-confidence items additionally. Duplicate
              detection prevents redundant storage. Change tracking identifies true updates versus
              formatting changes. Automated testing verifies document accessibility and format
              integrity.
            </p>
            <p>
              <strong>Representativeness:</strong> We systematically cover all major benefit
              programs (SNAP, Medicaid, TANF, WIC, LIHEAP) across jurisdictions. Coverage dashboards
              identify gaps. Community can request missing documents via GitHub. Regular audits
              ensure comprehensive coverage without bias toward certain programs or states.
            </p>
            <p>
              <strong>Privacy safeguards:</strong> We scan documents for personally identifiable
              information before storage; any PII triggers manual review. We collect no user data.
              API access remains anonymous beyond basic rate limiting. While documents already exist
              publicly, we add extra screening to prevent accidental inclusion of private data.
            </p>
            <p>
              <strong>Security measures:</strong> Documents stored in S3 with encryption at rest.
              API uses TLS for transit encryption. Access controls limit write permissions to
              verified contributors. Version control in GitHub provides audit trail. Regular
              security scans check for vulnerabilities. Backup copies in multiple regions prevent
              data loss.
            </p>
            <p>
              <strong>Quality metrics:</strong> 99.5% accuracy target verified through sampling.
              Completeness tracked via coverage dashboards. Freshness monitored through update
              frequency. Community feedback incorporated via GitHub issues. This comprehensive
              approach ensures reliable, secure data management.
            </p>
          </div>

          <div className="response-box">
            <h3>Stakeholder Engagement (250 words)</h3>
            <p>
              We develop government partnerships through multiple channels. Our collaboration with
              Federal Reserve Bank of Atlanta and Georgia Center for Opportunity demonstrates
              commitment—together we provide comprehensive documentation expertise as we seed the
              library with documents in our respective models covering all states and programs
              nationwide. Atlanta Fed helps us test our rules-as-code generation evaluation, where
              we'll assess how well LLMs can generate entries for their open-source Policy Rules
              Database with and without document access. The collaboration covers federal programs
              and NC state benefits, creating a replicable model for other states. OpenStates/Plural
              CEO expressed openness to collaboration, offering their proven legislative tracking
              infrastructure and schema as foundation for our regulatory document archiving.
            </p>
            <p>
              <strong>Civic tech community engagement:</strong> We plan to partner with former Code
              for America brigades and civic tech groups for infrastructure support. These volunteer
              technologists can help identify missing documents, contribute crawlers for their local
              jurisdictions, and validate data quality. The distributed model of civic tech groups
              maintaining their local coverage would ensure comprehensive coverage while building
              local ownership.
            </p>
            <p>
              <strong>Direct service partnership:</strong> MyFriendBen and Benefit Navigator staff
              participate in monthly design sessions, test beta features, and provide continuous
              feedback. Their frontline experience guides prioritization. They identify which
              documents are most critical for daily operations.
            </p>
            <p>
              <strong>Academic collaboration:</strong> Better Government Lab and USC researchers
              contribute policy expertise, validation, and documents from their PolicyEngine-based
              research. Prenatal-to-3 Policy Impact Center at Vanderbilt uses PolicyEngine for state
              tax credit modeling and contributes their policy research archive. Georgetown and
              Michigan teams use the system for research, providing academic rigor. Researchers can
              use our comprehensive document archive for economic analysis of benefit cliff effects
              and policy impacts.
            </p>
            <p>
              <strong>Open source ecosystem:</strong> All code is public, enabling any developer to
              contribute. We'll work with 8-10 rules-as-code organizations selected via RFP—likely
              including state agencies, research institutions, and civic tech groups contributing
              documents from their jurisdictions. Documentation encourages local adaptations. This
              transparency builds trust with government agencies and ensures long-term
              sustainability beyond any single organization.
            </p>
          </div>

          <div className="response-box">
            <h3>Resources and Infrastructure (250 words)</h3>
            <p>
              Computational resources leverage cloud infrastructure for scalability. AWS provides
              core services: EC2 for crawlers, S3 for document storage, RDS for metadata.
              Infrastructure costs scale with usage, starting small and growing as coverage expands.
              AI API costs for Claude/GPT-5 vary based on crawling frequency and document volume.
            </p>
            <p>
              <strong>Software stack:</strong> Python for crawler development using LangChain for AI
              orchestration. Integration with PolicyEngine's open-source rules engine to identify
              relevant documents for eligibility decisions—our engine already maps complex
              relationships like TANF-SNAP categorical eligibility. OpenStates API v3 integration
              for legislative document access and schema compatibility. FastAPI for REST API
              development. MCP server for native LLM integration enabling tools like Claude to
              directly query policy documents during conversations. PostgreSQL for structured data.
              React for public dashboards. GitHub Actions for CI/CD. All components 100% open-source
              except AI services.
            </p>
            <p>
              <strong>Government system integration:</strong> API-first architecture enables
              integration without direct system access. Partners embed via REST calls or JavaScript
              widgets. Government agencies can bulk export their documents. No direct database
              connections required, reducing security concerns and technical barriers.
            </p>
            <p>
              <strong>Access model:</strong> CloudFlare CDN ensures global availability with low
              latency. Multiple availability zones prevent outages. Automated scaling handles
              traffic spikes. API gateway manages authentication and rate limiting.
            </p>
            <p>
              <strong>Development infrastructure:</strong> GitHub for code repository and
              collaboration. Slack for team communication. Linear for project management. Datadog
              for monitoring. This modern stack ensures efficient development and reliable
              operations while remaining vendor-agnostic where possible.
            </p>
          </div>

          <div className="response-box">
            <h3>Scalability & Sustainability (250 words)</h3>
            <p>
              We build technical scalability into our architecture. Our crawler system uses job
              queues enabling horizontal scaling. Add more workers to handle more jurisdictions.
              Document storage in S3 scales infinitely. API uses caching and CDN for performance at
              scale. Database sharding ready for millions of documents.
            </p>
            <p>
              <strong>Long-term sustainability through revenue diversification:</strong> Enterprise
              API subscriptions from benefits platforms and government contractors. Government
              contracts for official preservation services. Foundation support for free nonprofit
              access. Multiple revenue streams ensure sustainability beyond grant period.
            </p>
            <p>
              <strong>Cost optimization:</strong> Open-source approach eliminates licensing costs.
              Community contributions from 100+ developers reduce development expenses. Efficient
              caching minimizes AI API usage. Graduated storage (hot/cold) optimizes costs for
              historical documents.
            </p>
            <p>
              <strong>Organizational sustainability:</strong> PolicyEngine's existing infrastructure
              and team provide stable foundation. Policy Library enhances our core benefits
              calculator mission. Board commitment to long-term support. Partnership agreements
              ensure continued stakeholder investment.
            </p>
            <p>
              <strong>Technical evolution:</strong> Architecture supports new AI models as they
              emerge. Jurisdiction-agnostic design enables international expansion. Modular
              components allow feature addition without system rewrites. Version control preserves
              all historical data. This comprehensive approach ensures the Policy Library becomes
              permanent infrastructure, not a temporary project.
            </p>
          </div>

          <div className="response-box">
            <h3>Financial Viability (250 words)</h3>
            <p>
              <strong>Budget allocation:</strong> Personnel (1.85 FTE): $293,000. Fringe benefits
              (33%): $96,690. Partner contracts including integration support: $164,000. AI tools
              and infrastructure: $60,000. Indirect costs (10% de minimis): $61,369. Total:
              $675,059.
            </p>
            <p>
              The PBIF grant enables dedicated Policy Library development while PolicyEngine
              maintains its existing benefits calculator services. This focused investment creates
              infrastructure that becomes self-sustaining through API subscriptions and government
              contracts.
            </p>
            <p>
              <strong>Funding diversification:</strong> PBIF funding jumpstarts development. By Year
              2, we anticipate enterprise API subscriptions and government preservation contracts.
              The open-source model and community contributions reduce ongoing costs.
            </p>
            <p>
              <strong>Financial sustainability plan:</strong> Year 1: PBIF funding covers
              development and initial deployment with 5,000+ seed documents from partners. Year 2:
              Begin enterprise subscriptions and government contracts as system proves value. Year
              3: Achieve sustainability through diversified revenue including API subscriptions,
              government contracts, and foundation support.
            </p>
            <p>
              <strong>Risk mitigation:</strong> Staggered hiring reduces upfront costs. Cloud
              infrastructure scales with usage. Open-source model enables community contributions.
              Multiple revenue streams prevent single points of failure. This pragmatic approach
              ensures financial viability while building critical infrastructure.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="application-section">
          <h2 className="section-title">Why PolicyEngine, Why Now</h2>
          <div className="response-box">
            <p>
              PolicyEngine uniquely positions itself to build the Policy Library. We already serve
              thousands of users through our benefits calculators and understand deeply what
              families and organizations need. As a 100% open-source project with 100+ contributors,
              we've built production systems handling millions of calculations—from our rules engine
              to API to web applications. Every policy parameter in our system already cites primary
              sources, making document integration natural. Our nonprofit mission ensures we'll
              maintain free access for those who need it most.
            </p>
            <p>
              The timing is critical. Every day, more documents disappear forever—government URLs
              already die daily. The recent CaseText shutdown created sector-wide urgency.
              Organizations deploy AI tools now for benefits navigation, and without proper sources,
              these tools spread dangerous misinformation to vulnerable families. Waiting means more
              lost documents, more broken systems, more families denied benefits.
            </p>
            <p>
              PBIF funding catalyzes transformation. The Policy Library becomes essential
              infrastructure—like DNS for the internet, invisible but indispensable. With your
              support, no family loses benefits because a website reorganized. No organization
              wastes time fixing broken links. AI tools provide accurate information. Researchers
              unlock historical insights. Together, we build the permanent, reliable infrastructure
              America's safety net deserves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;
