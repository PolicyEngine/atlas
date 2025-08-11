function Overview() {
  return (
    <div className="section">
      <div className="hero">
        <h1>Policy Library</h1>
        <p className="hero-subtitle">Permanent Document Infrastructure for America's Safety Net</p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">160K</div>
            <div className="hero-stat-label">People Served Annually</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">50+</div>
            <div className="hero-stat-label">Jurisdictions</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">10K+</div>
            <div className="hero-stat-label">LLM Benchmark Tests</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="cards-grid">
          <div className="card problem-card">
            <h2 className="card-title">The Infrastructure Crisis</h2>
            <p>
              Rules-as-code providers face an impossible challenge: government documents constantly
              disappear. Teams waste thousands of hours maintaining broken links, storing PDFs
              locally, and manually checking for updates. When websites reorganize or vendors like
              CaseText shut down, entire systems break.
            </p>
            <br />
            <p>
              <strong>The cost:</strong> Government URLs frequently break and documents disappear.
              Organizations can't reliably tie rules to source documents. Engineers become
              librarians instead of building tools that help families.
            </p>
          </div>

          <div className="card solution-card">
            <h2 className="card-title">Document Infrastructure That Works</h2>
            <p>
              Policy Library provides the missing infrastructure layer. We preserve every statute,
              regulation, and form that defines eligibility—permanently. Rules-as-code providers get
              stable APIs with documents that never disappear, automatic change detection, and
              version history.
            </p>
            <br />
            <p>
              <strong>Focus on what matters:</strong> Stop managing PDFs. Stop fixing broken links.
              Build the rules engines and calculators that actually help families access benefits.
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
                <h3>📋 Regulatory Focus</h3>
                <p>
                  We archive the implementation details: agency regulations, policy manuals,
                  application forms, and guidance documents. These are the documents that determine
                  whether someone actually qualifies for benefits—and they're the ones that
                  disappear most frequently.
                </p>
              </div>
            </div>
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
