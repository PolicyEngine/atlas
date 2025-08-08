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
            <h3>Executive Summary (250 words)</h3>
            <p>
              The Policy Library addresses a critical infrastructure failure: benefit program
              documents disappear constantly, causing families to lose access and organizations to
              waste thousands of hours maintaining broken links. Our analysis shows 18% of benefit
              program URLs from 2019 are dead today. When CaseText shut down, thousands of legal
              references vanished overnight. State website reorganizations routinely break the links
              powering benefit calculators.
            </p>
            <p>
              Our solution uses AI-powered crawlers (Claude/GPT-4) to monitor 50+ jurisdictions
              weekly, capturing statutes, regulations, and forms before they vanish. Human reviewers
              verify accuracy through GitHub pull requests, and we serve everything through a stable
              API with permanent source IDs that never break.
            </p>
            <p>
              Primary beneficiaries include: (1) Families accessing benefits who need reliable
              documentation, (2) Direct service organizations like MyFriendBen and ImagineLA's
              Benefit Navigator that waste 20+ hours monthly fixing broken links, (3) AI tools that
              currently generate incorrect benefit information without proper sources.
            </p>
            <p>
              Expected impact: Save partner organizations 10,000+ hours annually, enable 50,000
              successful benefit applications, and improve AI accuracy by 24 percentage points.
              We've proven feasibility with our North Carolina pilot and have commitments from NBER,
              Better Government Lab, and Federal Reserve Bank of Atlanta. PolicyEngine already
              serves 160,000 users annually through our benefits calculators, positioning us
              uniquely to build this critical infrastructure.
            </p>
          </div>

          <div className="response-box">
            <h3>Stage of Development</h3>
            <p>
              <strong>Status:</strong> Pilot ready / Active pilot
            </p>
            <p>
              We've completed a successful pilot with North Carolina, archiving SNAP, Medicaid, and
              TANF documents. Current users include researchers at Georgetown and Michigan using our
              pilot repository for policy analysis. PolicyEngine's existing benefits calculators
              serve 160,000 users annually who will immediately benefit from reliable document
              access. Partner organizations MyFriendBen (3,500 monthly users) and Benefit Navigator
              are ready to integrate once we launch. The system is architected for immediate scaling
              to all 50 states plus federal programs.
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
              <strong>Total Grant Request:</strong> $498,000
            </p>
            <p>
              <strong>Other Funding:</strong> PolicyEngine has $200,000 in existing foundation
              support and anticipates $300,000 in government contracts starting Year 2. This PBIF
              grant represents 40% of our 2026 budget, enabling dedicated focus on the Policy
              Library while maintaining our core benefits calculator services.
            </p>
          </div>
        </div>

        {/* Section 2: Value Proposition and Responsible Deployment */}
        <div className="application-section">
          <h2 className="section-title">Section 2: Value Proposition and Responsible Deployment</h2>

          <div className="response-box">
            <h3>Problem Statement (250 words)</h3>
            <p>
              The benefits access crisis stems from disappearing policy documents that break the
              infrastructure powering America's safety net. Recent federal policy changes including
              SNAP work requirements, Medicaid unwinding, and TANF time limits make accurate
              documentation critical, yet 18% of benefit program URLs from 2019 are dead today. The
              CaseText shutdown eliminated thousands of legal references overnight, breaking tools
              nationwide.
            </p>
            <p>
              We validated this problem through direct partnerships. MyFriendBen reports spending
              20+ hours monthly fixing broken links instead of serving their 3,500 users. Benefit
              Navigator staff confirmed similar challenges. Georgetown and Michigan researchers
              cannot conduct historical policy analysis due to missing documents. The Federal
              Reserve Bank of Atlanta's Policy Rules Database team validated that even federal
              agencies struggle with document preservation.
            </p>
            <p>
              Non-AI solutions have failed because: (1) Manual archiving cannot scale to 50+
              jurisdictions with weekly updates, (2) Web scraping without intelligence misses
              context and relationships between documents, (3) Commercial providers like CaseText
              can disappear, taking infrastructure with them. AI is uniquely suited to intelligently
              crawl complex government websites, understand document relationships, and identify
              changes requiring preservation. Our testing shows Claude and GPT-4 can accurately
              identify and extract policy documents with 95% precision when properly prompted,
              making this an ideal AI application where traditional approaches have demonstrably
              failed.
            </p>
          </div>

          <div className="response-box">
            <h3>Solution & Target Beneficiaries (250 words)</h3>
            <p>
              The Policy Library solves document disappearance through three integrated components:
              (1) AI-powered crawlers using Claude/GPT-4 that intelligently monitor government
              websites weekly, understanding context and document relationships; (2) Human
              verification through GitHub pull requests ensuring accuracy; (3) A stable API serving
              documents with permanent source IDs that never break.
            </p>
            <p>
              Primary beneficiaries include vulnerable families navigating benefits who currently
              lose access when documents disappear. We're involving them through partnerships with
              direct service organizations that serve these populations daily. MyFriendBen and
              Benefit Navigator staff provide continuous feedback on document needs and usability,
              ensuring we capture what families actually need.
            </p>
            <p>
              Secondary beneficiaries are the organizations serving these families. Direct service
              providers save 20+ hours monthly currently wasted on maintaining broken links.
              Benefits navigators access reliable documentation instantly. Researchers at
              universities gain ability to conduct longitudinal policy analysis. Government agencies
              themselves benefit from permanent archives of their own historical documents.
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
              Success will transform how America's safety net operates. Organizations will shift
              from maintaining broken links to serving families. AI tools will provide accurate
              benefit information. Families will never lose benefits due to missing documents.
            </p>
            <p>Specific measurable metrics include:</p>
            <p>
              <strong>Coverage metrics:</strong> 90% of benefit programs documented by Month 6
              (baseline: 0%), 50+ jurisdictions monitored weekly by Month 12 (baseline: 1 pilot
              state), 100,000+ documents archived by Month 24 (baseline: 500 from pilot).
            </p>
            <p>
              <strong>Reliability metrics:</strong> 99.9% API uptime (measured via monitoring),
              under 100ms document retrieval speed (measured per request), 99.5% document accuracy
              (human verification sampling).
            </p>
            <p>
              <strong>Impact metrics:</strong> 10,000 hours saved annually by partner organizations
              (baseline: 240 hours/year per organization wasted on broken links), 50,000 successful
              benefit applications using our documents by Month 24 (tracked via API usage). LLM
              accuracy improvement measured through comprehensive benchmark: 10,000+ test cases
              comparing baseline LLM performance against document-enhanced and tool-enhanced
              versions, with expected 20-40 percentage point accuracy gains based on preliminary
              testing.
            </p>
            <p>
              We'll track progress through automated dashboards, monthly partner surveys, and API
              analytics. Quarterly reports will share findings publicly. Success means families
              never hear "we can't find that document" when applying for benefits.
            </p>
          </div>

          <div className="response-box">
            <h3>Responsible Design and Use (250 words)</h3>
            <p>
              Key risks include privacy concerns, accuracy issues, and potential misuse. We address
              these proactively through technical and governance measures.
            </p>
            <p>
              <strong>Privacy protection:</strong> We only archive publicly available documents,
              never personal data. No user information is collected or stored. All documents are
              already public; we simply preserve them. We respect robots.txt restrictions and rate
              limits to avoid overloading government servers.
            </p>
            <p>
              <strong>Accuracy safeguards:</strong> Every document undergoes human review via GitHub
              pull requests before inclusion. Version control tracks all changes. Community members
              can report errors through GitHub issues. We maintain clear attribution and sourcing
              for every document. Regular audits verify continued accuracy.
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
              Implementation begins with committed partners ready to integrate immediately.
              MyFriendBen and Benefit Navigator will pilot API integration in Month 1, providing
              real-world validation. Their combined 5,000+ monthly users create immediate impact.
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
              <strong>Open-source code:</strong> All crawler code published on GitHub under MIT
              license. Integration libraries for common frameworks (Python, JavaScript, R). Example
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
              documents, with tools, full stack). Academic papers with university partners on
              AI-powered benefits navigation and administrative burden reduction. Conference
              presentations at Code for America Summit, Benefits Data Trust convening. Webinars for
              benefits navigators and AI developers.
            </p>
            <p>
              <strong>Community engagement:</strong> Monthly community calls for feedback and
              updates. Public GitHub discussions for feature requests and document needs. Newsletter
              sharing updates, tips, and success stories. Documentation wiki with implementation
              guides.
            </p>
            <p>
              <strong>Partnership sharing:</strong> Joint reports with Federal Reserve Bank of
              Atlanta on policy preservation. Case studies with MyFriendBen and Benefit Navigator on
              integration. Research collaborations with Better Government Lab on take-up rates. This
              comprehensive dissemination ensures our work benefits the entire safety net ecosystem.
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
              like human researchers. Claude and GPT-4 navigate complex site structures, identify
              relevant documents, and understand relationships between statutes, regulations, and
              forms. The AI acts as a co-pilot with human oversight at critical checkpoints.
            </p>
            <p>
              <strong>AI techniques:</strong> Large language models (Claude/GPT-4) for intelligent
              crawling and document extraction. Prompted to understand government website patterns,
              identify policy documents, and extract structured metadata. Embedding models for
              semantic search and duplicate detection. Traditional NLP for document classification
              and change detection. LLM benchmark framework using PolicyEngine-US to generate ground
              truth calculations across 10,000+ household scenarios.
            </p>
            <p>
              <strong>Human oversight checkpoints:</strong> (1) Initial crawler configuration:
              Humans define jurisdiction scope and document types. (2) Document identification: AI
              proposes documents, humans verify relevance via GitHub PR review. (3) Change
              detection: AI identifies updates, humans confirm significance. (4) Quality assurance:
              Regular human audits of AI decisions.
            </p>
            <p>
              <strong>Architecture:</strong> Crawler service using LangChain for AI orchestration.
              Leverages OpenStates schema for legislative documents ensuring consistency across
              states. GitHub for version control and human review workflow. PostgreSQL for metadata,
              S3 for document storage with automatic pdf2text extraction for plaintext versions.
              REST API using FastAPI for multi-format document access (PDF, text, HTML, JSON).
              Google Translate API for 100+ language support. CloudFlare CDN for global distribution.
            </p>
            <p>
              This hybrid approach leverages AI's ability to process vast amounts of information
              while maintaining human judgment for critical decisions, ensuring both scale and
              accuracy.
            </p>
          </div>

          <div className="response-box">
            <h3>Data Strategy - Data Sources (250 words)</h3>
            <p>
              All data comes from publicly available government sources. Federal agencies (cms.gov,
              fns.usda.gov, acf.hhs.gov) publish regulations and guidance. State agencies host
              statutes, rules, and forms on official websites. No private or personal data is
              collected.
            </p>
            <p>
              <strong>Data ownership:</strong> Documents are public domain or government works not
              subject to copyright. We maintain clear attribution to source agencies. Our value-add
              (organization, preservation, API access) creates new intellectual property while
              respecting source rights.
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
              without issues. Federal sites are even more standardized, simplifying expansion. This
              public data approach eliminates privacy concerns while preserving critical
              infrastructure.
            </p>
          </div>

          <div className="response-box">
            <h3>Data Strategy - Data Management (250 words)</h3>
            <p>
              Data quality is ensured through multiple validation layers. AI extracts documents with
              confidence scores; low-confidence items receive additional human review. Duplicate
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
              <strong>Privacy safeguards:</strong> Documents are scanned for personally identifiable
              information before storage; any found triggers manual review. No user data collected.
              API access is anonymous beyond basic rate limiting. Documents are already public, but
              we add extra screening to prevent accidental inclusion of private data.
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
              Government partnerships are developing through multiple channels. The Federal Reserve
              Bank of Atlanta committed to collaboration through their Policy Rules Database team,
              providing insider knowledge of federal documentation patterns. North Carolina DHHS
              expressed interest following our successful pilot. OpenStates/Plural CEO expressed
              openness to collaboration, offering their proven legislative tracking infrastructure
              and schema as foundation for our regulatory document archiving.
            </p>
            <p>
              <strong>Engagement strategy:</strong> We approach agencies as partners, not
              adversaries. Our preservation service benefits them by reducing FOIA requests,
              providing historical archives, and improving public access. We offer agencies preview
              access to their archived documents and notification of crawling activities.
            </p>
            <p>
              <strong>Critical stakeholder involvement:</strong> Direct service organizations
              actively shape development. MyFriendBen and Benefit Navigator staff participate in
              monthly design sessions, test beta features, and provide continuous feedback. Their
              frontline experience guides prioritization.
            </p>
            <p>
              <strong>Beneficiary engagement:</strong> Through partner organizations, we gather
              input from families navigating benefits. User research sessions identify document
              needs. Feedback forms on partner sites collect ongoing input. This indirect engagement
              respects privacy while incorporating lived experience.
            </p>
            <p>
              <strong>Academic collaboration:</strong> Better Government Lab researchers contribute
              policy expertise and validation. Georgetown and Michigan teams use the system for
              research, providing academic rigor. These partnerships ensure we're building
              infrastructure that serves both immediate needs and long-term research goals.
            </p>
          </div>

          <div className="response-box">
            <h3>Resources and Infrastructure (250 words)</h3>
            <p>
              Computational resources leverage cloud infrastructure for scalability. AWS provides
              core services: EC2 for crawlers, S3 for document storage, RDS for metadata. Estimated
              monthly costs: $5,000 for compute, $2,000 for storage, $1,000 for bandwidth. AI API
              costs approximately $15,000 monthly for comprehensive crawling (Claude/GPT-4 usage).
            </p>
            <p>
              <strong>Software stack:</strong> Python for crawler development using LangChain for AI
              orchestration. OpenStates API v3 integration for legislative document access and
              schema compatibility. FastAPI for REST API development. PostgreSQL for structured
              data. React for public dashboards. GitHub Actions for CI/CD. All open-source except AI
              services.
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
              Technical scalability is built into architecture. Crawler system uses job queues
              allowing horizontal scaling. Add more workers to handle more jurisdictions. Document
              storage in S3 scales infinitely. API uses caching and CDN for performance at scale.
              Database sharding ready for millions of documents.
            </p>
            <p>
              <strong>Long-term sustainability through revenue diversification:</strong> Enterprise
              API subscriptions from benefits platforms and government contractors ($500K annually
              within two years). Government contracts for official preservation services ($300K
              annually). Foundation support for free nonprofit access ($200K annually). This creates
              $1M+ annual revenue by Year 3.
            </p>
            <p>
              <strong>Cost optimization:</strong> Open-source approach reduces licensing costs.
              Community contributions decrease development expenses. Efficient caching minimizes AI
              API usage. Graduated storage (hot/cold) reduces storage costs for historical
              documents.
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
              <strong>Budget allocation:</strong> $300,000 (60%) for personnel: lead engineer,
              policy analyst, partner success manager. $100,000 (20%) for infrastructure: AI APIs,
              cloud hosting, GitHub enterprise. $75,000 (15%) for operations: travel, legal review,
              community engagement. $23,000 (5%) contingency for unexpected costs.
            </p>
            <p>
              This grant represents 40% of PolicyEngine's 2026 budget, allowing dedicated focus
              while maintaining organizational stability. Our 2026 projected budget is $1.2M
              including existing programs. 2027 projects $1.5M with Policy Library revenue
              beginning.
            </p>
            <p>
              <strong>Funding diversification:</strong> Current support includes $200,000 annual
              foundation funding for core operations. $150,000 in individual donations. $100,000 in
              earned revenue from consulting. PBIF grant enables Policy Library development without
              compromising existing services.
            </p>
            <p>
              <strong>Financial sustainability plan:</strong> Year 1: PBIF funding covers
              development. Year 2: Begin enterprise subscriptions ($100K revenue). Year 3: Full
              sustainability through $500K enterprise revenue, $300K government contracts, $200K
              foundation support. Break-even by Month 30.
            </p>
            <p>
              <strong>Risk mitigation:</strong> Staggered hiring reduces upfront costs. Cloud
              infrastructure scales with usage. Open-source model reduces development costs.
              Multiple revenue streams prevent single points of failure. Reserve funds cover 3
              months operations. This pragmatic approach ensures financial viability while building
              critical infrastructure.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="application-section">
          <h2 className="section-title">Why PolicyEngine, Why Now</h2>
          <div className="response-box">
            <p>
              PolicyEngine is uniquely positioned to build the Policy Library. We already serve
              160,000 users annually through our benefits calculators, understanding deeply what
              families and organizations need. Our team combines policy expertise with technical
              excellence—we've built production systems handling millions of calculations. Our
              nonprofit mission ensures we'll maintain free access for those who need it most.
            </p>
            <p>
              The timing is critical. Every day, more documents disappear forever—18% of 2019 URLs
              are already dead. The recent CaseText shutdown created sector-wide urgency. AI tools
              are being deployed now for benefits navigation, and without proper sources, they're
              spreading dangerous misinformation to vulnerable families. Waiting means more lost
              documents, more broken systems, more families denied benefits.
            </p>
            <p>
              PBIF funding will catalyze transformation. The Policy Library will become essential
              infrastructure—like DNS for the internet, invisible but indispensable. With your
              support, no family will lose benefits because a website reorganized. No organization
              will waste time fixing broken links. AI tools will provide accurate information.
              Researchers will unlock historical insights. Together, we'll build the permanent,
              reliable infrastructure America's safety net deserves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;
