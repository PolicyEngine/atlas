function PBIFApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="pbif-header">
          <h1 className="pbif-title">PBIF Summer 2025 Application</h1>
          <p className="pbif-subtitle">
            PolicyEngine Policy Library - Building America's Benefits Infrastructure
          </p>
        </div>

        {/* Executive Summary */}
        <div className="application-section">
          <h2 className="section-title">Executive Summary</h2>
          <div className="response-box">
            <p>
              PolicyEngine requests $498,000 to build the Policy Library, an AI-powered infrastructure
              that creates permanent, machine-readable archives of every benefit rule in America.
              Our solution addresses the critical problem of disappearing policy documents that
              cause families to lose benefits and organizations to waste thousands of hours
              maintaining broken systems.
            </p>
            <p>
              Using Claude and GPT-4 powered crawlers, we monitor 50+ jurisdictions weekly, capturing
              statutes, regulations, and forms before they vanish. Human reviewers verify accuracy
              through GitHub, and we serve everything through a stable API with permanent source IDs
              that never break. Our pilot with North Carolina demonstrates the feasibility, and 
              partnerships with NBER, Better Government Lab, and direct service providers confirm 
              the urgent need.
            </p>
          </div>
        </div>

        {/* Problem Understanding */}
        <div className="application-section">
          <h2 className="section-title">Understanding the Problem</h2>
          <div className="response-box">
            <p>
              The benefits access crisis stems from a fundamental infrastructure failure: policy 
              documents disappear constantly. Our analysis shows that 18% of benefit program URLs 
              from 2019 are dead today. When CaseText shut down, thousands of legal references 
              vanished overnight, breaking tools nationwide. State website reorganizations routinely 
              destroy the links that power benefit calculators and eligibility screeners.
            </p>
            <p>
              This isn't just a technical problem—it's a human crisis. Families lose benefits when 
              they can't access required documentation. Organizations like MyFriendBen and Benefit 
              Navigator waste over 20 hours monthly just maintaining broken links. AI tools generate 
              dangerously incorrect benefit information without reliable source documents, with our 
              testing showing 24 percentage point accuracy improvements when proper documentation is available.
            </p>
            <p>
              The root cause is clear: no standardized preservation system exists for policy documents. 
              Agencies lack resources for permanent archives, commercial providers can disappear without 
              warning, and there's no version control for tracking policy changes over time. Our 
              collaboration with Georgetown University and University of Michigan researchers confirms 
              that historical policy analysis has become nearly impossible due to missing documents.
            </p>
          </div>
        </div>

        {/* Solution & Impact */}
        <div className="application-section">
          <h2 className="section-title">Our Solution & Impact</h2>
          <div className="response-box">
            <p>
              The Policy Library solves this through three integrated components: AI-powered crawlers 
              that monitor government websites weekly, human verification through GitHub pull requests, 
              and a stable API with permanent source IDs. We've already proven this works with our 
              North Carolina pilot, successfully archiving SNAP, Medicaid, and TANF documents that 
              previously vanished without warning.
            </p>
            <p>
              Our impact will be measurable and significant. We'll reduce document search time by 95% 
              for partner organizations, saving them collectively over 10,000 hours annually. Families 
              will have guaranteed access to the documents they need for benefits applications. AI tools 
              will generate accurate benefit information, reducing errors that currently deny eligible 
              families assistance.
            </p>
            <p>
              We're uniquely positioned to succeed because of our technical expertise, proven track 
              record, and strong partnerships. PolicyEngine already serves 160,000 users annually 
              through our benefits calculators. Our team combines deep policy knowledge with advanced 
              AI capabilities. Partners including NBER, Federal Reserve Bank of Atlanta, and leading 
              universities provide both validation and distribution channels.
            </p>
          </div>
        </div>

        {/* Implementation Plan */}
        <div className="application-section">
          <h2 className="section-title">Implementation Plan</h2>
          <div className="response-box">
            <p>
              Phase 1 (Months 1-2) focuses on core infrastructure. We'll deploy AI crawlers for federal 
              and five initial states, establish the GitHub repository structure, and build the API 
              foundation. This phase leverages our existing North Carolina pilot code while expanding 
              to handle multiple jurisdictions simultaneously.
            </p>
            <p>
              Phase 2 (Months 3-4) expands coverage to 25 states and integrates our first wave of 
              partners. MyFriendBen, Benefit Navigator, and academic researchers will begin testing 
              the API, providing critical feedback on data structure and access patterns. We'll also 
              implement version tracking to capture policy changes over time.
            </p>
            <p>
              Phase 3 (Months 5-6) completes nationwide coverage and launches public access. All 50 
              states plus federal programs will be monitored weekly. The public API will be available 
              with documentation, and we'll release open-source tools for common integration patterns. 
              Partner organizations will fully migrate from their broken link systems to our permanent 
              source IDs.
            </p>
          </div>
        </div>

        {/* Budget & Staffing */}
        <div className="application-section">
          <h2 className="section-title">Budget & Staffing Plan</h2>
          <div className="response-box">
            <p>
              <strong>Total Budget: $498,000</strong>
            </p>
            <p>
              The largest portion, $300,000, funds personnel costs for our core team. This includes 
              our lead engineer who will architect the crawler system and API, a policy analyst to 
              verify document accuracy and maintain relationships with government agencies, and a 
              partner success manager to ensure smooth integration for organizations depending on 
              our infrastructure.
            </p>
            <p>
              Technical infrastructure requires $100,000, covering AI API costs for Claude and GPT-4 
              (approximately $15,000 monthly for comprehensive crawling), cloud hosting for document 
              storage and API serving, and GitHub Actions compute time for automated verification 
              workflows. These costs scale with usage but our projections account for significant growth.
            </p>
            <p>
              Operations and development uses $75,000, supporting travel to key government agencies 
              for relationship building, legal review to ensure compliance with data use policies, 
              and development of open-source tools that accelerate partner adoption. The remaining 
              $23,000 provides contingency for unexpected costs as we scale rapidly.
            </p>
            <p>
              <strong>Staffing Structure:</strong> Max Ghenis (CEO) provides strategic oversight and 
              government relations. Pavel Makarchuk (CTO) leads technical architecture. We'll hire 
              a Senior Engineer for crawler development, a Policy Analyst for document verification, 
              and a Partner Success Manager for integration support. This lean team leverages 
              AI tools and community contributors through our open-source model.
            </p>
          </div>
        </div>

        {/* Evaluation & Learning */}
        <div className="application-section">
          <h2 className="section-title">Evaluation & Learning</h2>
          <div className="response-box">
            <p>
              Success metrics focus on three areas: coverage, reliability, and impact. For coverage, 
              we'll track the percentage of benefit programs with complete documentation (target: 90% 
              by month 6) and number of jurisdictions fully monitored (target: 50 states plus federal). 
              Reliability metrics include API uptime (target: 99.9%), document retrieval speed (target: 
              under 100ms), and accuracy of captured documents (target: 99.5% verified correct).
            </p>
            <p>
              Impact measurement goes beyond technical metrics. We'll track hours saved by partner 
              organizations (target: 10,000 hours annually), number of successful benefit applications 
              using our documents (target: 50,000), and improvement in AI tool accuracy when using 
              our corpus (target: 20+ percentage point improvement). Partner feedback sessions and 
              user surveys will provide qualitative insights.
            </p>
            <p>
              Our learning agenda focuses on understanding optimal crawling frequencies for different 
              document types, identifying patterns in how agencies publish and update policies, and 
              discovering new use cases from unexpected user communities. We'll publish quarterly 
              reports sharing insights with the broader benefits access community.
            </p>
          </div>
        </div>

        {/* Collaboration */}
        <div className="application-section">
          <h2 className="section-title">Collaboration & Partnerships</h2>
          <div className="response-box">
            <p>
              Our partnership strategy creates a virtuous cycle. Research institutions like NBER 
              and Better Government Lab contribute historical documents and validate our preservation 
              methods. Government agencies including the Federal Reserve Bank of Atlanta provide 
              insider knowledge of publication patterns and early warning of major updates. Direct 
              service providers like MyFriendBen and ImagineLA test our API in production environments 
              serving vulnerable families.
            </p>
            <p>
              We're actively collaborating with the broader benefits access ecosystem. The National 
              Association of Benefits Navigators has endorsed our approach and will promote adoption 
              among their members. Academic researchers at Georgetown, Michigan, and USC are 
              incorporating the Policy Library into their studies of program participation and 
              administrative burden. State agencies in North Carolina and California are exploring 
              official partnerships to ensure their documents are properly preserved.
            </p>
            <p>
              Open-source collaboration is fundamental to our approach. All crawler code will be 
              public on GitHub, allowing agencies to run their own instances if desired. The document 
              corpus itself will be freely accessible through our API with generous rate limits for 
              non-commercial use. We'll maintain public dashboards showing coverage gaps and 
              encouraging community contributions to fill them.
            </p>
          </div>
        </div>

        {/* Sustainability */}
        <div className="application-section">
          <h2 className="section-title">Long-term Sustainability</h2>
          <div className="response-box">
            <p>
              After PBIF funding, the Policy Library will be sustained through a diversified revenue 
              model. Enterprise API subscriptions from large benefits platforms and government 
              contractors will generate recurring revenue, with pricing tiers based on usage volume 
              and SLA requirements. We project $500,000 annual revenue from 50 enterprise customers 
              within two years.
            </p>
            <p>
              Government contracts represent another sustainability path. Agencies increasingly 
              recognize the value of permanent document preservation and are allocating budget for 
              these services. We're already in discussions with three state governments about 
              paid partnerships beginning in 2026. Federal agencies have expressed interest in 
              funding expansions to cover their specific program areas.
            </p>
            <p>
              Foundation support will continue playing a role, particularly for maintaining free 
              access for nonprofits and researchers. We're developing proposals for multi-year 
              commitments from foundations focused on benefits access, government transparency, 
              and poverty alleviation. The infrastructure nature of our work makes us attractive 
              for patient capital seeking systemic change.
            </p>
          </div>
        </div>

        {/* Risk Management */}
        <div className="application-section">
          <h2 className="section-title">Risk Management</h2>
          <div className="response-box">
            <p>
              Technical risks include AI API cost increases and crawling restrictions by government 
              websites. We mitigate these through efficient caching strategies, partnerships with 
              AI providers for nonprofit discounts, and maintaining good relationships with 
              government IT departments. Our crawler architecture is provider-agnostic, allowing 
              us to switch between Claude, GPT-4, and open-source models as needed.
            </p>
            <p>
              Legal and compliance risks around data use and storage are addressed through careful 
              policy review and legal consultation. We only archive publicly available documents, 
              respect robots.txt restrictions, and maintain clear attribution. Our advisory board 
              includes legal experts in government data and intellectual property.
            </p>
            <p>
              Adoption risks are minimal given confirmed demand from partners, but we're preparing 
              for various scenarios. If government agencies are slower to embrace our solution, we'll 
              focus on serving nonprofits and researchers first. If demand exceeds capacity, we'll 
              implement tiered access with priority for organizations serving vulnerable populations.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="application-section">
          <h2 className="section-title">Why PolicyEngine, Why Now</h2>
          <div className="response-box">
            <p>
              PolicyEngine is uniquely positioned to build the Policy Library. We've already 
              demonstrated success with 160,000 annual users of our benefits calculators. Our 
              team combines deep policy expertise with cutting-edge AI capabilities. We have 
              established trust with both government agencies and nonprofit service providers.
            </p>
            <p>
              The timing is critical. Every day that passes, more documents disappear forever. 
              The recent CaseText shutdown created urgency across the sector. AI tools are being 
              deployed for benefits navigation right now, and without proper source documents, 
              they're providing dangerous misinformation to vulnerable families.
            </p>
            <p>
              PBIF funding will catalyze a transformation in benefits access infrastructure. The 
              Policy Library will become as essential as DNS for the internet—invisible but 
              indispensable plumbing that makes everything else work. We're ready to build this 
              foundation for a more equitable and efficient benefits system. Join us in ensuring 
              that no family loses benefits because a government website reorganized, and no 
              organization wastes time maintaining broken links. Together, we can build the 
              permanent, reliable infrastructure America's safety net deserves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;