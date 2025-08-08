function Proposal() {
  return (
    <div className="section">
      <div className="content">
        <div className="budget-timeline-container">
          <div className="budget-card">
            <h2 className="card-title">Year 1 Budget</h2>
            <div className="budget-total">$498,000</div>
            <div className="budget-items">
              • Engineering Team (2.5 FTE): $405,000
              <br />
              • Partner Micro-grants: $60,000
              <br />
              • Cloud & Infrastructure: $18,000
              <br />• Contingency: $15,000
            </div>
          </div>
          <div className="timeline-card">
            <h2 className="card-title">12-Month Timeline</h2>
            <div className="timeline-items">
              <span className="timeline-month">Q1:</span> Core infrastructure & AI crawler
              <br />
              <span className="timeline-month">Q2:</span> 10 state pilots, partner integration
              <br />
              <span className="timeline-month">Q3:</span> Scale to 30 states, API launch
              <br />
              <span className="timeline-month">Q4:</span> Full 50+ jurisdiction deployment
            </div>
          </div>
        </div>

        <div className="workflow-container">
          <h2 className="workflow-title">Why PBIF Should Fund This</h2>
          <div className="pbif-reasons">
            <div className="pbif-reason">
              <strong>✓ AI-Enabled Innovation:</strong> Uses Claude/GPT-4 for intelligent document
              extraction, providing 24 percentage point accuracy improvement in LLM benefit
              calculations.
            </div>
            <div className="pbif-reason">
              <strong>✓ Production Ready:</strong> Existing pilots with Atlanta Fed Policy Rules
              Database and North Carolina sources. Can deploy with real data within 12 months as
              required.
            </div>
            <div className="pbif-reason">
              <strong>✓ Reduces Administrative Burden:</strong> Eliminates hours of manual link
              maintenance for state and local agencies administering SNAP, Medicaid, and other
              programs.
            </div>
            <div className="pbif-reason">
              <strong>✓ Scalable Impact:</strong> Open infrastructure creates lasting public good.
              After Year 2, becomes self-sustaining through PolicyEngine's API revenue model.
            </div>
            <div className="pbif-reason">
              <strong>✓ Strong Partnerships:</strong> Letters of support from Georgetown, Atlanta
              Fed, and direct service organizations already serving 160,000+ individuals annually.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
