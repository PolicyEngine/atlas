function PBIFApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="pbif-header">
          <h1 className="pbif-title">PBIF Summer 2025 Application</h1>
          <p className="pbif-subtitle">
            PolicyEngine Policy Library - Comprehensive Application Responses
          </p>
        </div>

        {/* Executive Summary */}
        <div className="application-section">
          <h2 className="section-title">Executive Summary</h2>
          <div className="response-box">
            <p>
              PolicyEngine seeks $498,000 to build the Policy Library, an AI-powered infrastructure
              that creates permanent, machine-readable archives of every benefit rule in America.
              Our solution addresses the critical problem of disappearing policy documents that
              cause families to lose benefits and organizations to waste thousands of hours
              maintaining broken systems.
            </p>
            <p>
              Using Claude/GPT-4 powered crawlers, we monitor 50+ jurisdictions weekly, capturing
              statutes, regulations, and forms before they vanish. Human reviewers verify accuracy
              through GitHub, and we serve everything through a stable API with permanent source IDs
              that never break.
            </p>
          </div>
        </div>

        {/* Problem Understanding */}
        <div className="application-section">
          <h2 className="section-title">1. Deep Understanding of the Problem Space</h2>
          <div className="response-box">
            <h3>The Crisis</h3>
            <ul className="response-list">
              <li>
                <strong>18% of benefit program URLs from 2019 are dead today</strong> - critical
                policy documents vanish without warning
              </li>
              <li>
                <strong>CaseText shutdown</strong> eliminated thousands of legal references
                overnight, breaking tools nationwide
              </li>
              <li>
                <strong>State website reorganizations</strong> constantly break links that power
                benefit calculators
              </li>
              <li>
                <strong>Impact on families:</strong> Lost benefits due to inaccessible documentation
              </li>
              <li>
                <strong>Impact on organizations:</strong> MyFriendBen, Benefit Navigator, and
                hundreds of agencies waste thousands of hours annually maintaining broken links
              </li>
              <li>
                <strong>Impact on AI accuracy:</strong> LLMs generate incorrect benefit information
                without reliable source documents
              </li>
            </ul>

            <h3>Root Causes</h3>
            <ul className="response-list">
              <li>No standardized preservation system for policy documents</li>
              <li>Agencies lack resources for maintaining permanent archives</li>
              <li>
                Commercial providers (like CaseText) can disappear, taking critical infrastructure
                with them
              </li>
              <li>No version control for policy changes over time</li>
            </ul>

            <h3>Evidence Base</h3>
            <p>
              Our analysis with Georgetown University and University of Michigan researchers found
              that historical policy analysis is nearly impossible due to missing documents. The
              Atlanta Fed's Policy Rules Database collaboration revealed that even federal agencies
              struggle with document preservation.
            </p>
          </div>
        </div>

        {/* Impact Assessment */}
        <div className="application-section">
          <h2 className="section-title">2. Impact: Addressing Clear Barriers</h2>
          <div className="response-box">
            <h3>Barriers We Address</h3>
            <ul className="response-list">
              <li>
                <strong>Information Access:</strong> Families can't verify eligibility when
                documents disappear
              </li>
              <li>
                <strong>Administrative Burden:</strong> Staff waste hours searching for and updating
                broken links
              </li>
              <li>
                <strong>System Fragmentation:</strong> Each tool maintains its own partial document
                collection
              </li>
              <li>
                <strong>AI Hallucination:</strong> LLMs provide incorrect information without
                authoritative sources
              </li>
            </ul>

            <h3>Measurable Improvements</h3>
            <div className="metrics-grid">
              <div className="metric-box">
                <div className="metric-value">75%</div>
                <div className="metric-label">Reduction in link maintenance time</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">24pp</div>
                <div className="metric-label">LLM accuracy improvement</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">160,000</div>
                <div className="metric-label">People served annually</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">100%</div>
                <div className="metric-label">Document availability</div>
              </div>
            </div>

            <h3>Impact Tracking Plan</h3>
            <ul className="response-list">
              <li>Monthly metrics on document retrieval rates and API usage</li>
              <li>Quarterly surveys of partner organizations on time saved</li>
              <li>Annual assessment of beneficiary reach through partner tools</li>
              <li>Continuous monitoring of LLM accuracy improvements using our benchmark</li>
            </ul>
          </div>
        </div>

        {/* Responsible AI */}
        <div className="application-section">
          <h2 className="section-title">3. Responsible AI Implementation</h2>
          <div className="response-box">
            <h3>Data Privacy & Transparency</h3>
            <ul className="response-list">
              <li>
                <strong>Public Documents Only:</strong> We archive only publicly available
                government documents
              </li>
              <li>
                <strong>No PII Collection:</strong> System designed to exclude personal information
              </li>
              <li>
                <strong>Open Source:</strong> All code publicly available on GitHub for transparency
              </li>
              <li>
                <strong>Audit Trail:</strong> Complete version history with human review records
              </li>
            </ul>

            <h3>Fairness & Bias Mitigation</h3>
            <ul className="response-list">
              <li>
                <strong>Comprehensive Coverage:</strong> All 50 states plus federal, preventing
                geographic bias
              </li>
              <li>
                <strong>Multiple Language Support:</strong> Planning Spanish language document
                support in Year 2
              </li>
              <li>
                <strong>Human Review:</strong> Every AI-crawled document verified by human reviewers
              </li>
              <li>
                <strong>Community Contributions:</strong> Open system allows corrections from
                affected communities
              </li>
            </ul>

            <h3>Risk Mitigation</h3>
            <table className="risk-table">
              <thead>
                <tr>
                  <th>Risk</th>
                  <th>Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI hallucination in extraction</td>
                  <td>Human review of all documents before publication</td>
                </tr>
                <tr>
                  <td>Outdated information</td>
                  <td>Weekly crawling schedule with change detection</td>
                </tr>
                <tr>
                  <td>Misuse for benefits fraud</td>
                  <td>Documents are already public; we improve legitimate access</td>
                </tr>
                <tr>
                  <td>System dependency</td>
                  <td>Open source with multiple mirrors ensures continuity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Feasibility */}
        <div className="application-section">
          <h2 className="section-title">4. Technical Feasibility & Implementation</h2>
          <div className="response-box">
            <h3>Technical Architecture</h3>
            <ul className="response-list">
              <li>
                <strong>AI Crawling:</strong> Claude/GPT-4 for intelligent document extraction
              </li>
              <li>
                <strong>Storage:</strong> Git repositories with LFS for version control (proven at
                scale)
              </li>
              <li>
                <strong>Web Archiving:</strong> Browsertrix for WARC-format preservation
              </li>
              <li>
                <strong>Search:</strong> OpenSearch for full-text document search
              </li>
              <li>
                <strong>API:</strong> RESTful API with permanent source_id references
              </li>
            </ul>

            <h3>Proof of Concept</h3>
            <p>We have operational pilots demonstrating feasibility:</p>
            <ul className="response-list">
              <li>
                <strong>us-nc-sources:</strong> North Carolina documents repository on GitHub
              </li>
              <li>
                <strong>Atlanta Fed PRD:</strong> Integration with Policy Rules Database
              </li>
              <li>
                <strong>Partner Testing:</strong> MyFriendBen successfully using prototype in
                production
              </li>
            </ul>

            <h3>Government Integration</h3>
            <ul className="response-list">
              <li>No integration required - we crawl public websites</li>
              <li>Optional API integration for agencies wanting direct access</li>
              <li>Compliant with government accessibility standards (508)</li>
              <li>Can provide data in multiple formats (JSON, XML, CSV)</li>
            </ul>

            <h3>Team Expertise</h3>
            <div className="team-grid">
              <div className="team-member">
                <h4>Max Ghenis - CEO</h4>
                <p>Former Google data scientist, founded PolicyEngine, MS Stanford</p>
              </div>
              <div className="team-member">
                <h4>Nikhil Woodruff - CTO</h4>
                <p>Lead engineer of PolicyEngine microsimulation models</p>
              </div>
              <div className="team-member">
                <h4>Pavel Makarchuk - ML Engineer</h4>
                <p>AI/ML expertise, formerly at tech startups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="application-section">
          <h2 className="section-title">5. Implementation Timeline & Milestones</h2>
          <div className="response-box">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Q3 2025 (Months 1-3)</div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <ul>
                    <li>Finalize AI crawler architecture</li>
                    <li>Set up Git LFS infrastructure</li>
                    <li>Launch 5 pilot states</li>
                    <li>Establish human review workflow</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Q4 2025 (Months 4-6)</div>
                <div className="timeline-content">
                  <h4>Scale</h4>
                  <ul>
                    <li>Expand to 20 states</li>
                    <li>Launch public API</li>
                    <li>Integrate 3 partner organizations</li>
                    <li>Release LLM benchmark v1</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Q1 2026 (Months 7-9)</div>
                <div className="timeline-content">
                  <h4>Production</h4>
                  <ul>
                    <li>Cover 40 states</li>
                    <li>Launch public search interface</li>
                    <li>10+ partners integrated</li>
                    <li>Historical backfill to 2018</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Q2 2026 (Months 10-12)</div>
                <div className="timeline-content">
                  <h4>Complete Coverage</h4>
                  <ul>
                    <li>All 50 states + federal</li>
                    <li>100,000+ documents archived</li>
                    <li>LLM benchmark v2 published</li>
                    <li>Sustainability model operational</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">July 2026</div>
                <div className="timeline-content">
                  <h4>Success Metrics Achieved</h4>
                  <ul>
                    <li>160,000 people served</li>
                    <li>75% time reduction documented</li>
                    <li>24pp accuracy improvement validated</li>
                    <li>Self-sustaining revenue model active</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="application-section">
          <h2 className="section-title">6. Budget Breakdown</h2>
          <div className="response-box">
            <table className="budget-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Year 1</th>
                  <th>Year 2</th>
                  <th>Total</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Personnel</strong>
                  </td>
                  <td>$405,000</td>
                  <td>$420,000</td>
                  <td>$825,000</td>
                  <td>2.5 FTE (Lead Eng, ML Eng, Policy Analyst)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Partner Grants</strong>
                  </td>
                  <td>$60,000</td>
                  <td>$40,000</td>
                  <td>$100,000</td>
                  <td>Micro-grants for document contributions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Infrastructure</strong>
                  </td>
                  <td>$18,000</td>
                  <td>$24,000</td>
                  <td>$42,000</td>
                  <td>Cloud, storage, API hosting</td>
                </tr>
                <tr>
                  <td>
                    <strong>Contingency</strong>
                  </td>
                  <td>$15,000</td>
                  <td>$18,000</td>
                  <td>$33,000</td>
                  <td>3% buffer for unexpected costs</td>
                </tr>
                <tr className="total-row">
                  <td>
                    <strong>TOTAL</strong>
                  </td>
                  <td>
                    <strong>$498,000</strong>
                  </td>
                  <td>
                    <strong>$502,000</strong>
                  </td>
                  <td>
                    <strong>$1,000,000</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Fit */}
        <div className="application-section">
          <h2 className="section-title">7. Strategic Fit & Catalytic Opportunity</h2>
          <div className="response-box">
            <h3>Why This Needs PBIF</h3>
            <ul className="response-list">
              <li>
                <strong>Public Good Nature:</strong> No single organization can justify building
                this alone
              </li>
              <li>
                <strong>Network Effects:</strong> Value increases exponentially with coverage and
                users
              </li>
              <li>
                <strong>AI Moment:</strong> LLMs make this technically feasible now in ways
                impossible before
              </li>
              <li>
                <strong>Urgency:</strong> Every day more documents disappear permanently
              </li>
            </ul>

            <h3>Why PolicyEngine</h3>
            <ul className="response-list">
              <li>
                <strong>Track Record:</strong> Microsimulation models for US, UK, Canada serving
                millions
              </li>
              <li>
                <strong>Technical Expertise:</strong> Team has deep experience with policy modeling
                and AI
              </li>
              <li>
                <strong>Partner Network:</strong> Existing relationships with key organizations
              </li>
              <li>
                <strong>Mission Alignment:</strong> Dedicated to democratizing policy analysis
              </li>
            </ul>
          </div>
        </div>

        {/* Sustainability */}
        <div className="application-section">
          <h2 className="section-title">8. Path to Sustainability</h2>
          <div className="response-box">
            <h3>Revenue Model (Post-Grant)</h3>
            <ul className="response-list">
              <li>
                <strong>API Subscriptions:</strong> Premium tier for high-volume users
                ($500-5000/month)
              </li>
              <li>
                <strong>Enterprise Contracts:</strong> Custom integrations for large organizations
              </li>
              <li>
                <strong>Government Contracts:</strong> Service agreements with agencies
              </li>
              <li>
                <strong>Foundation Support:</strong> Continued grants for public good maintenance
              </li>
            </ul>

            <h3>Cost Optimization</h3>
            <ul className="response-list">
              <li>Automated crawling reduces manual work over time</li>
              <li>Community contributions lower content costs</li>
              <li>Efficient infrastructure scales without linear cost increase</li>
            </ul>

            <h3>Projected Break-Even</h3>
            <p>
              Month 18: Basic sustainability through API revenue
              <br />
              Month 24: Full self-sufficiency including growth capacity
              <br />
              Month 36: Generating surplus for expansion to new document types
            </p>
          </div>
        </div>

        {/* Shared Learning */}
        <div className="application-section">
          <h2 className="section-title">9. Shared Learning & Scalability</h2>
          <div className="response-box">
            <h3>Open Source Commitment</h3>
            <ul className="response-list">
              <li>All code published on GitHub under MIT license</li>
              <li>Documentation for replication in other countries</li>
              <li>Regular blog posts on technical challenges and solutions</li>
              <li>Conference presentations at Code for America Summit, etc.</li>
            </ul>

            <h3>Research Publications</h3>
            <ul className="response-list">
              <li>LLM accuracy benchmark methodology paper</li>
              <li>Best practices for policy document preservation</li>
              <li>Case studies with partner organizations</li>
              <li>Annual impact report with detailed metrics</li>
            </ul>

            <h3>Scalability Plan</h3>
            <ul className="response-list">
              <li>
                <strong>Geographic:</strong> Model applicable to any country with public benefits
              </li>
              <li>
                <strong>Document Types:</strong> Expandable to court decisions, agency guidance
              </li>
              <li>
                <strong>Languages:</strong> Architecture supports multilingual documents
              </li>
              <li>
                <strong>Use Cases:</strong> Beyond benefits - healthcare, education, housing policy
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Letters */}
        <div className="application-section">
          <h2 className="section-title">10. Partner Support</h2>
          <div className="response-box">
            <h3>Confirmed Partners</h3>
            <div className="partner-letters">
              <div className="letter-summary">
                <h4>Georgetown University - McCourt School</h4>
                <p>
                  "The Policy Library would transform our ability to conduct historical policy
                  research..."
                </p>
              </div>
              <div className="letter-summary">
                <h4>MyFriendBen</h4>
                <p>
                  "We waste 20+ hours monthly on broken links. This infrastructure would be
                  game-changing..."
                </p>
              </div>
              <div className="letter-summary">
                <h4>Atlanta Federal Reserve</h4>
                <p>"Aligns perfectly with our Policy Rules Database initiative..."</p>
              </div>
              <div className="letter-summary">
                <h4>Benefit Navigator</h4>
                <p>"Essential infrastructure for scaling our services nationally..."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Evaluation Strategy */}
        <div className="application-section">
          <h2 className="section-title">11. Evaluation Strategy</h2>
          <div className="response-box">
            <h3>Success Metrics</h3>
            <table className="metrics-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Baseline</th>
                  <th>Year 1 Target</th>
                  <th>Year 2 Target</th>
                  <th>Measurement Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Documents Archived</td>
                  <td>500</td>
                  <td>50,000</td>
                  <td>100,000</td>
                  <td>Database count</td>
                </tr>
                <tr>
                  <td>API Calls/Month</td>
                  <td>1,000</td>
                  <td>100,000</td>
                  <td>1,000,000</td>
                  <td>Server logs</td>
                </tr>
                <tr>
                  <td>Partner Organizations</td>
                  <td>3</td>
                  <td>15</td>
                  <td>30</td>
                  <td>Integration tracking</td>
                </tr>
                <tr>
                  <td>People Served</td>
                  <td>10,000</td>
                  <td>80,000</td>
                  <td>160,000</td>
                  <td>Partner reports</td>
                </tr>
                <tr>
                  <td>Time Saved (hours/year)</td>
                  <td>0</td>
                  <td>5,000</td>
                  <td>15,000</td>
                  <td>Partner surveys</td>
                </tr>
                <tr>
                  <td>LLM Accuracy Improvement</td>
                  <td>0pp</td>
                  <td>15pp</td>
                  <td>24pp</td>
                  <td>Benchmark testing</td>
                </tr>
              </tbody>
            </table>

            <h3>Evaluation Methods</h3>
            <ul className="response-list">
              <li>
                <strong>Quantitative:</strong> Automated metrics dashboard updated daily
              </li>
              <li>
                <strong>Qualitative:</strong> Quarterly partner interviews and case studies
              </li>
              <li>
                <strong>External:</strong> Independent evaluation by university partner in Year 2
              </li>
              <li>
                <strong>Continuous:</strong> Monthly reviews with adjustment capability
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="application-section closing">
          <h2 className="section-title">Closing: Why Fund This Now</h2>
          <div className="response-box">
            <p className="closing-statement">
              The Policy Library represents a once-in-a-generation opportunity to fix the broken
              infrastructure that undermines America's safety net. With AI making intelligent
              document extraction possible and the urgent need highlighted by CaseText's closure,
              the time is now.
            </p>
            <p className="closing-statement">
              PolicyEngine has the technical expertise, partner network, and mission commitment to
              deliver this critical infrastructure. Our request of $498,000 will catalyze a
              transformation in how benefit information is preserved, accessed, and utilized -
              improving outcomes for millions of Americans.
            </p>
            <p className="closing-statement">
              We're not just archiving documents - we're ensuring that every family can access the
              benefits they're entitled to, every organization can build reliable tools, and every
              AI system can provide accurate information. This is infrastructure for equity, built
              for permanence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;
