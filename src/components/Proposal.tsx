function Proposal() {
  return (
    <div className="section">
      <div className="content">
        <div className="budget-timeline-container">
          <div className="budget-card">
            <h2 className="card-title">2-Year Budget</h2>
            <div className="budget-total">$675,059</div>
            <div className="budget-items">
              • Personnel (1.85 FTE/yr): $293,000
              <br />
              • Fringe Benefits (33%): $96,690
              <br />
              • Partner Contracts: $164,000
              <br />
              &nbsp;&nbsp;- Integration pilots (MFB/BN): $100,000
              <br />
              &nbsp;&nbsp;- GCO (Fed/NC pilot lead): $30,000
              <br />
              &nbsp;&nbsp;- Other partners: $34,000
              <br />
              • AI Tools & Infrastructure: $60,000
              <br />• Indirect (10% de minimis): $61,369
            </div>
          </div>
          <div className="timeline-card">
            <h2 className="card-title">12-Month Timeline</h2>
            <div className="timeline-items">
              <span className="timeline-month">Q1:</span> Web app launch, seed 2,500+ docs, start
              pilots
              <br />
              <span className="timeline-month">Q2:</span> MFB & BN integrations live, 10 states
              <br />
              <span className="timeline-month">Q3:</span> Scale to 30 states, measure pilot impact
              <br />
              <span className="timeline-month">Q4:</span> Full deployment, expand integrations
            </div>
          </div>
        </div>

        <div className="workflow-container">
          <h2 className="workflow-title">Why PBIF Should Fund This</h2>
          <div className="pbif-reasons">
            <div className="pbif-reason">
              <strong>✓ AI-Enabled Innovation:</strong> Uses Claude/GPT-5 for intelligent document
              extraction. Our open-source rules engine identifies ALL relevant documents for
              eligibility decisions (e.g., TANF rules affecting SNAP). Provides 24pp accuracy
              improvement in LLM benefit calculations. Will test LLM rules-as-code generation
              (building on Beeck Center's work) with/without document access.
            </div>
            <div className="pbif-reason">
              <strong>✓ Production Ready:</strong> Collaboration with Atlanta Fed and GCO continues
              with nationwide scope. We'll seed system with 5,000+ documents from ALL partners:
              PolicyEngine (2,500+), documents in Atlanta Fed's model (all states/programs), GCO
              (nationwide), Prenatal-to-3 Center at Vanderbilt, Better Government Lab, USC,
              MyFriendBen, Benefit Navigator. All enriched with metadata and converted to plaintext.
              Web app enables document submission beyond API.
            </div>
            <div className="pbif-reason">
              <strong>✓ Reduces Administrative Burden:</strong> We eliminate hours of manual link
              maintenance for state and local agencies administering SNAP, Medicaid, and other
              programs.
            </div>
            <div className="pbif-reason">
              <strong>✓ Scalable Impact:</strong> Our open infrastructure creates lasting public
              good. After Year 2, the system becomes self-sustaining through PolicyEngine's API
              revenue model.
            </div>
            <div className="pbif-reason">
              <strong>✓ Deep Integration Pilots:</strong> MyFriendBen (3,500+ Colorado users
              monthly) and Benefit Navigator (LA County expanding to Riverside) already use our API.
              We'll add document display to their existing benefit calculations—users see primary
              sources alongside results they already receive. $50k each supports deep technical
              integration and deployment support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
