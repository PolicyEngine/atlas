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
            <div className="hero-stat-number">24pp</div>
            <div className="hero-stat-label">LLM Accuracy Gain</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="cards-grid">
          <div className="card problem-card">
            <h2 className="card-title">The Infrastructure Crisis</h2>
            <p>
              Rules-as-code providers face an impossible challenge: government documents constantly 
              disappear. Teams waste thousands of hours maintaining broken links, storing PDFs locally, 
              and manually checking for updates. When websites reorganize or vendors like CaseText shut 
              down, entire systems break.
            </p>
            <br />
            <p>
              <strong>The cost:</strong> 18% of 2019 benefit URLs are dead. Organizations can't reliably 
              tie rules to source documents. Engineers become librarians instead of building tools that 
              help families.
            </p>
          </div>

          <div className="card solution-card">
            <h2 className="card-title">Document Infrastructure That Works</h2>
            <p>
              Policy Library provides the missing infrastructure layer. We preserve every statute, 
              regulation, and form that defines eligibility—permanently. Rules-as-code providers get 
              stable APIs with documents that never disappear, automatic change detection, and version 
              history.
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
              <div className="workflow-icon">🤖</div>
              <div className="workflow-label">AI Monitors</div>
              <div className="workflow-desc">Intelligent crawlers detect document changes</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">📚</div>
              <div className="workflow-label">Permanent Archive</div>
              <div className="workflow-desc">Documents preserved with version history</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">🔗</div>
              <div className="workflow-label">Stable APIs</div>
              <div className="workflow-desc">Rules-as-code providers integrate once</div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2 className="section-title">Built for Rules-as-Code Providers</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>No More Dead Links</h3>
              <p>Permanent source IDs that survive website reorganizations, vendor shutdowns, and agency changes.</p>
            </div>
            <div className="benefit-item">
              <h3>Stop Managing PDFs</h3>
              <p>Access any document via API. No local storage, no file management, no broken references.</p>
            </div>
            <div className="benefit-item">
              <h3>Automatic Updates</h3>
              <p>Get notified when documents change. Access full version history. Never miss critical updates.</p>
            </div>
            <div className="benefit-item">
              <h3>Reliable Citations</h3>
              <p>Every rule links to its authoritative source. Build trust with users and regulators.</p>
            </div>
          </div>
        </div>

        <div className="integration-section">
          <h2 className="section-title">Comprehensive Coverage Through Partnership</h2>
          <div className="integration-content">
            <p className="integration-intro">
              Policy Library complements existing infrastructure to provide complete document coverage:
            </p>
            <div className="integration-grid">
              <div className="integration-item">
                <h3>🏛️ OpenStates Integration</h3>
                <p>
                  Leveraging OpenStates' proven schema and API for legislative documents. 
                  They handle bills and statutes across all 50 states, DC, and Puerto Rico, 
                  while we focus on the regulatory and administrative documents that actually 
                  define benefit eligibility.
                </p>
              </div>
              <div className="integration-item">
                <h3>📋 Regulatory Focus</h3>
                <p>
                  We archive the implementation details: agency regulations, policy manuals, 
                  application forms, and guidance documents. These are the documents that 
                  determine whether someone actually qualifies for benefits—and they're the 
                  ones that disappear most frequently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
