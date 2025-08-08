function Overview() {
  return (
    <div className="section">
      <div className="hero">
        <h1>Policy Library</h1>
        <p className="hero-subtitle">AI-Powered Infrastructure for Every Benefit Rule in America</p>
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
            <h2 className="card-title">The Crisis</h2>
            <p>When CaseText shut down, thousands of legal references vanished overnight. State websites reorganize constantly, breaking the links that power benefit calculators. 18% of benefit program URLs from 2019 are dead today.</p>
            <br />
            <p><strong>Impact:</strong> Families lose benefits. Organizations waste thousands of hours maintaining broken systems. AI tools generate incorrect information without reliable sources.</p>
          </div>
          
          <div className="card solution-card">
            <h2 className="card-title">Our Solution</h2>
            <p>Policy Library creates an immutable archive of every statute, regulation, and form that defines benefit eligibility. Our AI crawlers monitor agency websites weekly, capturing changes before documents disappear.</p>
            <br />
            <p><strong>Result:</strong> Permanent source IDs that never break. Full version history. AI-ready corpus for accurate benefit calculations.</p>
          </div>
        </div>
        
        <div className="workflow-container">
          <h2 className="workflow-title">How It Works</h2>
          <div className="workflow">
            <div className="workflow-step">
              <div className="workflow-icon">🤖</div>
              <div className="workflow-label">AI Crawls</div>
              <div className="workflow-desc">Claude/GPT-4 monitors 50+ jurisdictions weekly</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">✓</div>
              <div className="workflow-label">Humans Verify</div>
              <div className="workflow-desc">GitHub pull request review process</div>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="workflow-icon">🚀</div>
              <div className="workflow-label">Partners Build</div>
              <div className="workflow-desc">Stable API with permanent source IDs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;