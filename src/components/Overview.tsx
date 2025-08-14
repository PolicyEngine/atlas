function Overview() {
  return (
    <div className="section">
      <div className="hero">
        <h1>Policy Library</h1>
        <p className="hero-subtitle">Permanent Document Infrastructure for America's Safety Net</p>
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
            <div className="hero-stat-number">10K+</div>
            <div className="hero-stat-label">LLM Tests Planned</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="cards-grid">
          <div className="card problem-card">
            <h2 className="card-title">The Hidden Crisis in Benefit Access</h2>
            <p>
              Every organization building benefit tools faces the same nightmare: finding and
              understanding the actual rules is nearly impossible. Documents are scattered across
              hundreds of agency websites, buried in PDFs, hidden behind paywalls, or simply don't
              exist online. Both humans and AI spend countless hours searching for a single
              eligibility criterion that might be in a policy manual from 2019, a court case from
              2022, or an administrative memo that was never digitized.
            </p>
            <br />
            <p>
              <strong>The real cost:</strong> We're all solving the same problem in isolation. Every
              nonprofit, every government agency, every AI company is independently hunting for the
              same documents, making the same phone calls to agencies, filing the same FOIA
              requests. Meanwhile, millions of families can't access benefits because nobody can
              efficiently understand the rules.
            </p>
          </div>

          <div className="card solution-card">
            <h2 className="card-title">A Public Good for Policy Knowledge</h2>
            <p>
              Policy Library creates the shared infrastructure America needs: a comprehensive,
              searchable, permanent archive of every document that defines benefit eligibility. We
              find documents humans can't—from obscure agency memos to state administrative codes to
              court decisions. AI monitors every agency website weekly, archives everything
              permanently, and makes it all accessible through simple APIs.
            </p>
            <br />
            <p>
              <strong>Unlock innovation at scale:</strong> When every tool builder, researcher, and
              AI company can instantly access the same authoritative documents, we stop duplicating
              work and start building solutions. Thousands of hours shift from document hunting to
              helping families. The entire ecosystem accelerates.
            </p>
          </div>
        </div>

        <div className="workflow-container">
          <h2 className="workflow-title">How It Works</h2>
          <div className="workflow">
            <div className="workflow-step">
              <div className="workflow-icon">👥</div>
              <div className="workflow-label">Identify Sources</div>
              <div className="workflow-desc">Humans point to critical documents</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">🤖</div>
              <div className="workflow-label">AI Monitors</div>
              <div className="workflow-desc">Crawlers track changes weekly</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">📚</div>
              <div className="workflow-label">Archive Forever</div>
              <div className="workflow-desc">Version control & permanent IDs</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">🔗</div>
              <div className="workflow-label">Stable APIs</div>
              <div className="workflow-desc">Never worry about broken links</div>
            </div>
          </div>
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
          <h2 className="section-title">Built for AI & Rules-as-Code</h2>
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
                <h3>🏛️ OpenStates Integration</h3>
                <p>
                  Leveraging OpenStates' proven schema and API for legislative documents. They
                  handle bills and statutes across all 50 states, DC, and Puerto Rico, while we
                  focus on the regulatory and administrative documents that actually define benefit
                  eligibility.
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
              with <strong>nearly 4,000 source document references</strong> (2,500 unique documents)
              including page-specific citations to IRS publications, federal regulations, and state
              codes. We know firsthand the pain: every parameter needs authoritative backing, from
              SNAP asset limits to EITC phase-out rates.
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
          <h2 className="section-title">Vision: Government-to-Government Infrastructure</h2>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              Beyond serving nonprofits and AI tools, Policy Library could transform how governments
              themselves share information. Imagine if states could instantly access county
              implementation manuals, or counties could see how neighboring jurisdictions interpret
              the same federal regulations.
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
                  🏛️ Cross-Jurisdiction Learning
                </h3>
                <p>
                  States implementing new SNAP waivers could instantly see how other states handled
                  similar situations. Counties could learn from each other's interpretations of
                  state guidance.
                </p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: 'var(--blue)', marginBottom: '10px' }}>📊 Policy Continuity</h3>
                <p>
                  When administrations change or staff turn over, institutional knowledge is
                  preserved. New staff can access the complete history of policy interpretations and
                  implementations.
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
