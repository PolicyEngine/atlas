function Overview() {
  return (
    <div className="section">
      <div className="hero">
        <h1>PolicyEngine Atlas</h1>
        <p className="hero-subtitle">
          Navigate the Policy Landscape: AI-Powered Document Mapping and Hidden Eligibility
          Discovery
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">Target Jurisdictions</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100K+</div>
            <div className="hero-stat-label">Documents to Archive</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">44</div>
            <div className="hero-stat-label">States Failing Thresholds</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="cards-grid">
          <div className="card problem-card">
            <h2 className="card-title">Ambiguous Policies Cause Errors</h2>
            <p>
              Many states struggle with benefit accuracy due to ambiguous policy language that
              creates inconsistent caseworker interpretations. When the same eligibility criteria
              can be read multiple ways, errors are inevitable.
            </p>
            <br />
            <p>
              <strong>The hidden problem:</strong> Governments don't know which specific policy
              passages cause errors. Caseworkers waste hours reconciling contradictory guidance.
              Families receive inconsistent determinations. Yet the solution is straightforward:
              clearer policy writing. We just haven't had the tools to identify and fix ambiguous
              language at scale.
            </p>
          </div>

          <div className="card solution-card">
            <h2 className="card-title">AI That Shows Exactly What to Fix</h2>
            <p>
              PolicyEngine Atlas uses Claude/GPT-4 to analyze policy documents, scoring ambiguity
              levels and revealing program connections. We deliver specific recommendations: "Your
              eligibility criteria has Atlas Clarity Score X, correlating with Y% higher error
              rates—here's how to clarify." Plus, our knowledge graph reveals hidden eligibility
              pathways across programs.
            </p>
            <br />
            <p>
              <strong>The transformation:</strong> When rules engines can cite exact policy sources,
              they transform from experimental tools to trusted infrastructure. MyFriendBen and
              Benefit Navigator will demonstrate error reduction. Our NSF POSE Phase 1 grant
              complements PBIF funding to expand the open-source ecosystem. Government adoption
              follows proven results.
            </p>
          </div>
        </div>

        <div className="workflow-container">
          <h2 className="workflow-title">How the Clarity Index Works</h2>
          <div className="workflow">
            <div className="workflow-step">
              <div className="workflow-icon">📄</div>
              <div className="workflow-label">Collect Policies</div>
              <div className="workflow-desc">Gather documents from all jurisdictions</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">🤖</div>
              <div className="workflow-label">AI Analysis</div>
              <div className="workflow-desc">Score ambiguity and complexity</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">📊</div>
              <div className="workflow-label">Correlate Errors</div>
              <div className="workflow-desc">Match with SNAP QC data</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">✏️</div>
              <div className="workflow-label">Recommend Fixes</div>
              <div className="workflow-desc">Specific rewriting guidance</div>
            </div>
          </div>
        </div>

        <div className="research-evidence-section" style={{
          marginTop: '60px',
          padding: '30px',
          background: 'var(--blue-light)',
          borderRadius: '12px'
        }}>
          <h2 className="section-title">Research Evidence: Policy Clarity Drives Accuracy</h2>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Extensive research demonstrates the direct link between policy document clarity and benefit administration accuracy:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                📊 GAO Analysis (2001-2024)
              </h3>
              <p style={{ marginBottom: '10px' }}>
                GAO reports found SNAP regulations are "extremely complex and inherently error-prone." 
                SNAP achieved record-low <strong>3.2% error rate in FY2013</strong> through simplification, 
                but rates have climbed back to 10.93% by FY2024.
              </p>
              <a
                href="https://www.gao.gov/assets/a246247.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                GAO-05-245: SNAP Error Reduction →
              </a>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                🔬 Administrative Burden Research
              </h3>
              <p style={{ marginBottom: '10px' }}>
                2023 study found states with complex UI policies had <strong>significantly higher error rates</strong>. 
                Each additional requirement increased errors by 0.5-1%. Simplification impact equals expanding eligibility.
              </p>
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/14719037.2023.2288247"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                Complexity, Errors & Burdens Study →
              </a>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                📈 Current SNAP Error Crisis
              </h3>
              <p style={{ marginBottom: '10px' }}>
                SNAP error rate reached <strong>10.93% in FY2024</strong>, up from record-low 3.2% in FY2013. 
                44 states fail error thresholds. 99% are administrative errors from policy interpretation, not fraud.
              </p>
              <a
                href="https://www.fns.usda.gov/snap/qc/per"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                USDA Payment Error Rates →
              </a>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                ⚖️ Racial Disparities in Errors
              </h3>
              <p style={{ marginBottom: '10px' }}>
                Analysis of 53 UI programs (2002-2018) found non-white claimants <strong>more likely to experience 
                underpayment errors</strong>. Complex policies amplify disparities in administrative outcomes.
              </p>
              <a
                href="https://academic.oup.com/jpart/article-abstract/33/3/512/6680693"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                Administrative Errors & Race →
              </a>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                📖 Readability Impact
              </h3>
              <p style={{ marginBottom: '10px' }}>
                2024 Israeli study: Poor readability of welfare documents <strong>directly correlates with 
                lower engagement and higher error rates</strong>. Plain language initiatives show 20-30% error reduction.
              </p>
              <a
                href="https://link.springer.com/article/10.1007/s10209-024-01167-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                Readability & Welfare Rights →
              </a>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                💡 The Solution Works
              </h3>
              <p style={{ marginBottom: '10px' }}>
                The FY2013 record-low <strong>3.2% error rate</strong> proved simplification works. 
                Current 10.93% rate shows regression when complexity returns. Primary source: USDA SNAP Quality Control data.
              </p>
              <a
                href="https://www.usda.gov/media/blog/2013/06/21/snap-payment-accuracy-best-record"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'underline' }}
              >
                USDA: SNAP Payment Accuracy Best on Record →
              </a>
            </div>
          </div>
          <p style={{ fontSize: '16px', fontStyle: 'italic', marginTop: '20px' }}>
            <strong>The evidence is clear:</strong> Policy language complexity is the primary driver of administrative errors, 
            costing billions annually and disproportionately harming vulnerable populations. The Clarity Index will quantify 
            this relationship for the first time, enabling targeted improvements that reduce errors while increasing access.
          </p>
        </div>

        <div
          className="progress-section"
          style={{
            marginTop: '60px',
            padding: '30px',
            background: 'var(--teal-light)',
            borderRadius: '12px',
          }}
        >
          <h2 className="section-title">Already In Progress</h2>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              We're not starting from scratch. In partnership with the{' '}
              <strong>Atlanta Fed's Policy Rules Database</strong>,{' '}
              <strong>Georgia Center for Opportunity</strong>, and <strong>MyFriendBen</strong>,
              we're already building the foundation:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                  🏗️ US Sources Repository
                </h3>
                <p style={{ marginBottom: '10px' }}>
                  Federal-level documents for SNAP, Medicaid, TANF, and more. Establishing the core
                  infrastructure and standards.
                </p>
                <a
                  href="https://github.com/PolicyEngine/us-sources"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--blue)', textDecoration: 'underline' }}
                >
                  github.com/PolicyEngine/us-sources →
                </a>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                  🏛️ North Carolina Pilot
                </h3>
                <p style={{ marginBottom: '10px' }}>
                  Complete state-level implementation with Atlanta Fed collaboration. Proving the
                  model works at scale.
                </p>
                <a
                  href="https://github.com/PolicyEngine/us-nc-sources"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--blue)', textDecoration: 'underline' }}
                >
                  github.com/PolicyEngine/us-nc-sources →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2 className="section-title">Enabling Trusted Rules-as-Code</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>MCP Server Integration</h3>
              <p>
                Native Model Context Protocol server lets AI assistants query policy documents
                directly during conversations. No hallucinations, just facts.
              </p>
            </div>
            <div className="benefit-item">
              <h3>No More Dead Links</h3>
              <p>
                Permanent source IDs that survive website reorganizations, vendor shutdowns, and
                agency changes.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Automatic Updates</h3>
              <p>
                Get notified when documents change. Access full version history. Never miss critical
                updates.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Simple REST API</h3>
              <p>
                Basic endpoints that work. No complex auth. Free tier for nonprofits. Just GET the
                documents you need.
              </p>
            </div>
          </div>
        </div>

        <div className="integration-section">
          <h2 className="section-title">Comprehensive Coverage Through Partnership</h2>
          <div className="integration-content">
            <p className="integration-intro">
              Policy Library complements existing infrastructure to provide complete document
              coverage:
            </p>
            <div className="integration-grid">
              <div className="integration-item">
                <h3>🏛️ OpenStates Standards</h3>
                <p>
                  Adopting OpenStates' proven schema and API standards for legislative documents.
                  We'll follow their successful approach to state data uniformity, focusing on the
                  regulatory and administrative documents that actually define benefit eligibility
                  while maintaining compatibility with their legislative tracking infrastructure.
                </p>
              </div>
              <div className="integration-item">
                <h3>📋 Complete Document Coverage</h3>
                <p>
                  We archive the full picture: statutes, regulations, policy manuals, court
                  decisions, administrative memos, and application forms. Understanding how policies
                  actually work requires all these pieces together—not just laws or just
                  regulations. We preserve the complete documentary record that determines benefit
                  eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rules-as-code-section"
          style={{
            marginTop: '60px',
            padding: '30px',
            background: 'var(--teal-light)',
            borderRadius: '12px',
          }}
        >
          <h2 className="section-title">Powering Rules-as-Code at Scale</h2>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              PolicyEngine has encoded thousands of rules into our open-source benefit calculators,
              with <strong>nearly 4,000 source document references</strong> (2,500 unique
              documents). But without permanent access to these documents, our rules engine—and
              others like it—can't achieve the credibility needed for government adoption. Policy
              Library solves this by ensuring every rule can be traced to its authoritative source.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                  🔗 Source-to-Code Traceability
                </h3>
                <p>
                  Every rule in PolicyEngine-US links to its source document, often down to the
                  specific page. Policy Library ensures those links never break and the documents
                  remain accessible forever.
                </p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                  ⚡ Accelerate Development
                </h3>
                <p>
                  New rules-as-code projects can build faster when documents are instantly
                  accessible. What took us years to collect will be available to everyone from day
                  one.
                </p>
              </div>
            </div>
            <p style={{ marginTop: '20px', fontSize: '16px' }}>
              <strong>The multiplier effect:</strong> When document access is solved once for
              everyone, dozens of rules-as-code projects can flourish. Each new calculator, each new
              tool, builds on reliable infrastructure instead of reinventing document management.
            </p>
          </div>
        </div>

        <div
          className="government-vision-section"
          style={{
            marginTop: '60px',
            padding: '30px',
            background: 'var(--blue-light)',
            borderRadius: '12px',
          }}
        >
          <h2 className="section-title">Proven Impact Path</h2>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              <strong>Year 1:</strong> Deploy with nonprofits to demonstrate impact. MyFriendBen's
              3,500 monthly users and Benefit Navigator's 500+ caseworkers will show how clearer
              policies reduce errors.
              <br />
              <br />
              <strong>Year 2:</strong> Scale to government partners using proven results. States see
              exactly which policy passages cause their errors and get specific rewriting
              recommendations.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>
                  📉 Measurable Error Reduction
                </h3>
                <p>
                  States with clearer policies have lower error rates. We'll prove this correlation
                  and show governments exactly how to improve their documents to reduce costly
                  errors and administrative burden.
                </p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>💰 Cost Savings</h3>
                <p>
                  Reducing SNAP errors saves millions in improper payments and administrative costs.
                  Clear policies mean faster processing, fewer appeals, and less staff time on
                  interpretation.
                </p>
              </div>
            </div>
            <p style={{ marginTop: '20px', fontSize: '16px', fontStyle: 'italic' }}>
              We're setting aside resources to engage government partners and test how this
              infrastructure could serve their needs directly. The potential for improving
              government efficiency is enormous.
            </p>
          </div>
        </div>

        <div className="benchmark-section">
          <h2 className="section-title">Rigorous LLM Accuracy Benchmark</h2>
          <div className="benchmark-content">
            <p className="benchmark-intro">
              We're building the first comprehensive benchmark for AI benefit calculations, testing
              how access to authoritative documents improves accuracy:
            </p>
            <div className="benchmark-methodology">
              <h3>🧪 Benchmark Methodology</h3>
              <div className="methodology-steps">
                <div className="methodology-step">
                  <strong>1. Generate Test Suite:</strong> Create 10,000+ test cases using
                  PolicyEngine-US with exact benefit calculations for diverse household-benefit
                  combinations across all states.
                </div>
                <div className="methodology-step">
                  <strong>2. Test Four Conditions:</strong>
                  <ul>
                    <li>
                      <strong>Baseline:</strong> LLM alone with no additional context
                    </li>
                    <li>
                      <strong>With Documents:</strong> LLM with access to Policy Library documents
                    </li>
                    <li>
                      <strong>With Calculator:</strong> LLM with PolicyEngine-US tool access
                    </li>
                    <li>
                      <strong>Full Stack:</strong> LLM with both documents and calculator
                    </li>
                  </ul>
                </div>
                <div className="methodology-step">
                  <strong>3. Measure Impact:</strong> Track accuracy improvements, error types, and
                  confidence levels across different benefit programs and household types.
                </div>
              </div>
            </div>
            <div className="benchmark-preview">
              <h3>📊 Expected Findings</h3>
              <p>
                Early testing suggests dramatic improvements when LLMs have access to source
                documents. The benchmark will quantify exactly how much document access matters for
                different use cases, creating the evidence base for AI-powered benefits navigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
