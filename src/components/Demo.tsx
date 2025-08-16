import { useState } from 'react';

function Demo() {
  const [jurisdiction, setJurisdiction] = useState('federal');
  const [program, setProgram] = useState('snap');
  const [doctype, setDoctype] = useState('statute');
  const [activeTab, setActiveTab] = useState<
    'library' | 'clarity' | 'bounty' | 'dashboard' | 'api' | 'mcp'
  >('library');

  const jurisdictionNames: Record<string, string> = {
    federal: 'Federal',
    nc: 'North Carolina',
    ca: 'California',
    ny: 'New York',
    tx: 'Texas',
  };

  const programNames: Record<string, string> = {
    snap: 'SNAP',
    medicaid: 'Medicaid',
    tanf: 'TANF',
    wic: 'WIC',
    liheap: 'LIHEAP',
  };

  const searchDocuments = () => {
    // Mock search functionality
    console.log(`Searching for ${jurisdiction} ${program} ${doctype} documents`);
  };

  const apiExample = `# Python example
import requests

response = requests.get(
  "https://api.policy-library.org/v1/documents",
  params={
    "jurisdiction": "${jurisdiction}",
    "program": "${program}",
    "type": "${doctype}"
  },
  headers={"Authorization": "Bearer YOUR_API_KEY"}
)

documents = response.json()`;

  return (
    <div className="section">
      <div className="content">
        <div className="demo-container">
          <h2 className="demo-title">Policy Library with Clarity Index</h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--gray)',
              marginBottom: '30px',
              fontStyle: 'italic',
            }}
          >
            Comprehensive document infrastructure with AI-powered clarity analysis to reduce $10.5B
            in annual SNAP errors.
          </p>

          <div className="demo-tabs">
            <button
              className={`demo-tab ${activeTab === 'library' ? 'active' : ''}`}
              onClick={() => setActiveTab('library')}
            >
              📚 Document Library
            </button>
            <button
              className={`demo-tab ${activeTab === 'clarity' ? 'active' : ''}`}
              onClick={() => setActiveTab('clarity')}
            >
              ✨ Clarity Index
            </button>
            <button
              className={`demo-tab ${activeTab === 'bounty' ? 'active' : ''}`}
              onClick={() => setActiveTab('bounty')}
            >
              🏆 Bounty Program
            </button>
            <button
              className={`demo-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Government Dashboard
            </button>
            <button
              className={`demo-tab ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTab('api')}
            >
              🔌 API Access
            </button>
            <button
              className={`demo-tab ${activeTab === 'mcp' ? 'active' : ''}`}
              onClick={() => setActiveTab('mcp')}
            >
              🤖 MCP Server
            </button>
          </div>

          {activeTab === 'library' && (
            <div className="demo-library-section">
              <h3>Comprehensive Document Coverage</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Permanent archive of benefit program documents across all 50 states and DC,
                replacing broken URLs and scattered PDFs with stable, citable sources.
              </p>

              <div style={{ marginBottom: '25px' }}>
                <h4>Coverage Commitment</h4>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>Programs:</strong> Tax Credits, SNAP, Medicaid, CHIP, ACA, WIC, TANF,
                    CCDF, LIHEAP, SSI, State Supplements
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>Document Types:</strong> Statutes, Regulations, Policy Manuals, Forms,
                    Court Decisions
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    <strong>Jurisdictions:</strong> Federal + All 50 States + DC
                  </p>
                  <p>
                    <strong>Starting Corpus:</strong> 2,500+ documents from PolicyEngine-US
                    citations
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Collection Strategy</h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px',
                  }}
                >
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>📚</div>
                    <strong>Phase 1: Existing Sources</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      2,500+ documents from PolicyEngine-US rules engine citations
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>🤖</div>
                    <strong>Phase 2: AI Agents</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Deploy Claude/GPT-4 to crawl agency sites for missing documents
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>✅</div>
                    <strong>Phase 3: Verification Bounty</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Partners review AI contributions for accuracy
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏆</div>
                    <strong>Phase 4: Completion Bounty</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Fill remaining gaps through partner contributions
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Value for Rules-as-Code Providers</h4>
                <div
                  style={{
                    background: '#d4edda',
                    border: '1px solid #28a745',
                    padding: '15px',
                    borderRadius: '4px',
                  }}
                >
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li>Replace fragmented local PDFs with single source of truth</li>
                    <li>Automate rules development with structured documents</li>
                    <li>Permanent citations that never break</li>
                    <li>Version history for all policy changes</li>
                    <li>API access for automated encoding</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Search Documents</h4>
                <div className="demo-controls">
                  <div className="demo-select">
                    <label htmlFor="jurisdiction">Jurisdiction</label>
                    <select
                      id="jurisdiction"
                      value={jurisdiction}
                      onChange={(e) => setJurisdiction(e.target.value)}
                    >
                      <option value="federal">Federal</option>
                      <option value="nc">North Carolina</option>
                      <option value="ca">California</option>
                      <option value="ny">New York</option>
                      <option value="tx">Texas</option>
                    </select>
                  </div>
                  <div className="demo-select">
                    <label htmlFor="program">Program</label>
                    <select
                      id="program"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                    >
                      <option value="snap">SNAP</option>
                      <option value="medicaid">Medicaid</option>
                      <option value="tanf">TANF</option>
                      <option value="wic">WIC</option>
                      <option value="ssi">SSI</option>
                    </select>
                  </div>
                  <button className="demo-button" onClick={searchDocuments}>
                    Search Library
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clarity' && (
            <div className="demo-clarity-section">
              <h3>Clarity Index: AI Analysis Validated by Humans</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                The Clarity Index combines AI analysis with human validation to identify policy
                language causing benefit errors. Scores correlate directly with SNAP Quality Control
                error rates.
              </p>

              <div style={{ marginBottom: '25px' }}>
                <h4>Live Analysis Example</h4>
                <div
                  style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    padding: '20px',
                  }}
                >
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Document:</strong> Texas SNAP Eligibility Manual - Section 3.2.1
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#dc3545',
                          marginRight: '10px',
                        }}
                      />
                      <strong style={{ color: '#dc3545' }}>Low Clarity Score</strong>
                    </div>
                    <div
                      style={{
                        background: '#fff3cd',
                        border: '1px solid #ffc107',
                        padding: '15px',
                        borderRadius: '4px',
                        marginBottom: '15px',
                      }}
                    >
                      <strong>Original Text:</strong>
                      <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                        "Income from self-employment should be considered when determining
                        eligibility, unless the income is irregular or seasonal, in which case it
                        may be averaged over a reasonable period as determined by the caseworker's
                        assessment of the household's circumstances."
                      </p>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <strong>🔍 Clarity Opportunities:</strong>
                      <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        <li>Replace "should be considered" with "must be included"</li>
                        <li>Define "irregular or seasonal" with specific thresholds</li>
                        <li>Specify "reasonable period" as exact timeframes</li>
                        <li>Provide standardized criteria for assessments</li>
                      </ul>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                      <strong>📊 Error Correlation:</strong>
                      <p style={{ marginTop: '10px' }}>
                        Analysis will correlate this type of language with actual SNAP Quality
                        Control error data to demonstrate the impact of unclear policies.
                      </p>
                    </div>

                    <div
                      style={{
                        background: '#d4edda',
                        border: '1px solid #28a745',
                        padding: '15px',
                        borderRadius: '4px',
                      }}
                    >
                      <strong>✅ AI-Suggested Clarification:</strong>
                      <p style={{ marginTop: '10px' }}>
                        "Self-employment income must be included when determining eligibility. For
                        irregular or seasonal income (defined as varying by more than 25%
                        month-to-month), calculate the average over the most recent 12 months. If
                        less than 12 months of history exists, use all available months (minimum 3
                        months required)."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Clarity Index Methodology</h4>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <strong>AI Components:</strong>
                      <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        <li>Document comprehensibility analysis</li>
                        <li>Consistency in benefit calculations</li>
                        <li>Accuracy of rules encoding</li>
                        <li>Ambiguity detection patterns</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Human Validation:</strong>
                      <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        <li>Caseworker comprehension ratings</li>
                        <li>User confusion tracking</li>
                        <li>Expert policy analyst review</li>
                        <li>Correlation with SNAP QC data</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '20px',
                      padding: '15px',
                      background: 'white',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>Validation Approach:</strong> AI scores will be validated against human
                    rater baselines and correlated with actual SNAP Quality Control error data
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Clarity Leaders & Laggards</h4>
                <div
                  style={{
                    background: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                  }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>State</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Clarity Score</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Error Rate</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Est. Annual Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Mississippi</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#dc3545' }}>Low</span>
                        </td>
                        <td style={{ padding: '10px' }}>High</td>
                        <td style={{ padding: '10px' }}>High</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Louisiana</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#dc3545' }}>Low</span>
                        </td>
                        <td style={{ padding: '10px' }}>High</td>
                        <td style={{ padding: '10px' }}>High</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Vermont</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#28a745' }}>High</span>
                        </td>
                        <td style={{ padding: '10px' }}>Low</td>
                        <td style={{ padding: '10px' }}>Low</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Minnesota</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#28a745' }}>High</span>
                        </td>
                        <td style={{ padding: '10px' }}>Low</td>
                        <td style={{ padding: '10px' }}>Low</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--gray)' }}>
                    * Based on FY 2024 SNAP Quality Control data and AI analysis of state policy
                    manuals
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: '#d4edda',
                  border: '1px solid #28a745',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>💡 Your Path to Clarity:</strong>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Score your policies against clarity best practices</li>
                  <li>Get specific improvements that boost comprehension</li>
                  <li>Each clarity point gained = ~$15M saved nationally</li>
                  <li>Track your progress toward clarity excellence</li>
                  <li>Learn from states achieving 9+ clarity scores</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'bounty' && (
            <div className="demo-bounty-section">
              <h3>Technical Advisory and Content Partnership</h3>
              <div style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Total allocation: $75,000</strong>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <div>
                    • $40,000 for technical advisory services from leading research organizations
                  </div>
                  <div>
                    • $35,000 for document bounty rewards based on contribution quality and volume
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Potential Advisory Partners ($40,000)</h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '15px',
                  }}
                >
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>Urban Institute</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Federal program expertise, safety net research guidance
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>Georgia Center for Opportunity</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      State agency relationships, multi-state documentation
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>NBER</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Tax policy expertise and historical documentation
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>Benefit Kitchen</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Benefits administration expertise and implementation insights
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>NCCP</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Child and family policy expertise, state-level analysis
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <strong>Atlanta Fed</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Policy Rules Database collaboration (unfunded advisor)
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Document Bounty Program ($35,000)</h4>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Task</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Reward</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Verify AI-collected document</td>
                        <td style={{ padding: '10px' }}>TBD</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#28a745' }}>Active</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Contribute missing statute/regulation</td>
                        <td style={{ padding: '10px' }}>TBD</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#28a745' }}>Active</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Provide policy manual</td>
                        <td style={{ padding: '10px' }}>TBD</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#ffc107' }}>Limited</span>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>Complete state coverage</td>
                        <td style={{ padding: '10px' }}>TBD</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#17a2b8' }}>Upcoming</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Leaderboard</h4>
                <div
                  style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    padding: '20px',
                    borderRadius: '8px',
                  }}
                >
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Organization</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Documents</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Verifications</th>
                        <th style={{ padding: '10px', textAlign: 'right' }}>Earned</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>🥇 Urban Institute</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'right' }}>TBD</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>🥈 Georgia Center</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'right' }}>TBD</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>🥉 Individual Contributors</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                        <td style={{ padding: '10px', textAlign: 'right' }}>TBD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="demo-dashboard-section">
              <h3>Government Dashboard for Policy Writers</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Real-time analytics showing which policies cause errors and how to fix them.
                Designed for state SNAP directors and policy teams.
              </p>

              <div style={{ marginBottom: '25px' }}>
                <h4>Texas SNAP Policy Analytics</h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>
                      TBD
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>
                      Low Clarity Sections
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
                      TBD
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>Annual Error Cost</div>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#17a2b8' }}>
                      TBD
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>Current Error Rate</div>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                      TBD
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>
                      Projected After Fixes
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <h5 style={{ marginBottom: '15px' }}>Top Error-Causing Policies</h5>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Policy Section</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Clarity</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Errors/Month</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>3.2.1 Self-Employment Income</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#dc3545' }}>Low</span>
                        </td>
                        <td style={{ padding: '10px' }}>High</td>
                        <td style={{ padding: '10px' }}>
                          <button
                            style={{
                              padding: '5px 10px',
                              background: 'var(--teal-accent)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            View Fix
                          </button>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>4.1.3 Household Composition</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#dc3545' }}>Low</span>
                        </td>
                        <td style={{ padding: '10px' }}>High</td>
                        <td style={{ padding: '10px' }}>
                          <button
                            style={{
                              padding: '5px 10px',
                              background: 'var(--teal-accent)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            View Fix
                          </button>
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                        <td style={{ padding: '10px' }}>2.4.7 Resource Limits</td>
                        <td style={{ padding: '10px' }}>
                          <span style={{ color: '#ffc107' }}>Medium</span>
                        </td>
                        <td style={{ padding: '10px' }}>Medium</td>
                        <td style={{ padding: '10px' }}>
                          <button
                            style={{
                              padding: '5px 10px',
                              background: 'var(--teal-accent)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            View Fix
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <h5 style={{ marginBottom: '15px' }}>Clarity Improvement Timeline</h5>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span>Current State</span>
                    <span>After Clarity Analysis</span>
                  </div>
                  <div
                    style={{
                      background: 'white',
                      height: '40px',
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '60%',
                        background: 'linear-gradient(to right, #dc3545, #ffc107)',
                        borderRadius: '20px 0 0 20px',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '40%',
                        background: '#28a745',
                        borderRadius: '0 20px 20px 0',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '60%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '12px',
                      }}
                    >
                      Improvement Target
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '10px',
                      fontSize: '14px',
                    }}
                  >
                    <span>Current State</span>
                    <span>Target State</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#d4edda',
                  border: '1px solid #28a745',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>🎯 Government Benefits:</strong>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Meet federal accuracy thresholds and avoid penalties</li>
                  <li>Reduce administrative burden on caseworkers</li>
                  <li>Decrease appeals and fair hearings</li>
                  <li>Improve client satisfaction and trust</li>
                  <li>Save millions in improper payments</li>
                </ul>
              </div>
            </div>
          )}

          {/* Hidden impact tab with made-up numbers - commented out
          {activeTab === 'impact' && (
            <div className="demo-impact-section">
              <h3>ROI Calculator for Your State</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                See how much your state could save by reducing policy ambiguity.
                Based on actual SNAP Quality Control data and error rates.
              </p>

              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="state-select" style={{ display: 'block', marginBottom: '5px' }}>
                    Select Your State
                  </label>
                  <select
                    id="state-select"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                  >
                    <option value="tx">Texas</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="fl">Florida</option>
                    <option value="nc">North Carolina</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                  <div>
                    <strong>Current Metrics</strong>
                    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Error Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>11.4%</div>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Annual Error Cost</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>$178M</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Caseworker Hours on Clarification</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>42,000</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong>After Clarity Analysis</strong>
                    <div style={{ background: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Projected Error Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#28a745' }}>6.8%</div>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Annual Savings</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#28a745' }}>$71M</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--gray)' }}>Hours Saved</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#28a745' }}>16,800</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '20px', padding: '15px', background: 'var(--blue-light)', borderRadius: '8px' }}>
                  <strong>5-Year Projection</strong>
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span>Policy Library Investment:</span>
                      <span>$50,000</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span>5-Year Savings:</span>
                      <span style={{ fontWeight: 'bold', color: '#28a745' }}>$355,000,000</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--gray)' }}>
                      <span>ROI:</span>
                      <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#28a745' }}>7,100:1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>📊 National Impact at Scale:</strong>
                <p style={{ marginTop: '10px' }}>
                  If all 44 states failing SNAP accuracy thresholds improved clarity by just 3 points:
                </p>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li><strong>$3.2 billion</strong> saved annually in reduced errors</li>
                  <li><strong>850,000</strong> fewer incorrect determinations</li>
                  <li><strong>2.1 million</strong> caseworker hours saved</li>
                  <li><strong>420,000</strong> fewer appeals and hearings</li>
                </ul>
              </div>
            </div>
          )}
          */}

          {/* Hidden search tab - not in UI
          {activeTab === 'search' && (
            <>
              <div className="demo-controls">
                <div className="demo-select">
                  <label htmlFor="jurisdiction">Jurisdiction</label>
                  <select
                    id="jurisdiction"
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                  >
                    <option value="federal">Federal</option>
                    <option value="nc">North Carolina</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="tx">Texas</option>
                  </select>
                </div>
                <div className="demo-select">
                  <label htmlFor="program">Program</label>
                  <select id="program" value={program} onChange={(e) => setProgram(e.target.value)}>
                    <option value="snap">SNAP (Food Stamps)</option>
                    <option value="medicaid">Medicaid</option>
                    <option value="tanf">TANF</option>
                    <option value="wic">WIC</option>
                    <option value="liheap">LIHEAP</option>
                  </select>
                </div>
                <div className="demo-select">
                  <label htmlFor="doctype">Document Type</label>
                  <select id="doctype" value={doctype} onChange={(e) => setDoctype(e.target.value)}>
                    <option value="statute">Statutes</option>
                    <option value="regulation">Regulations</option>
                    <option value="form">Forms</option>
                    <option value="guidance">Guidance</option>
                  </select>
                </div>
                <button className="demo-button" onClick={searchDocuments}>
                  Search Documents
                </button>
              </div>

              {showResults && (
                <div className="demo-results show">
                  <div className="demo-doc-header">
                    <h3 className="demo-doc-title">Search Results</h3>
                    <span className="demo-doc-badge">AI-Verified</span>
                  </div>
                  <div>
                    {generateMockResults().map((doc) => (
                      <div key={doc.id} className="demo-doc-content">
                        <h4 style={{ color: 'var(--blue-pressed)', marginBottom: '10px' }}>
                          {doc.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '14px',
                            color: 'var(--dark-gray)',
                            marginBottom: '10px',
                          }}
                        >
                          {doc.excerpt}
                        </p>
                        <div className="demo-doc-meta">
                          <div className="demo-doc-meta-item">
                            <strong>Source ID:</strong> {doc.id}
                          </div>
                          <div className="demo-doc-meta-item">
                            <strong>Last Updated:</strong> {doc.lastUpdated}
                          </div>
                          <div className="demo-doc-meta-item">
                            <strong>Versions:</strong> {doc.versions}
                          </div>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                          <button
                            className="demo-download-btn"
                            onClick={() => handleDownload(doc.id)}
                            style={{
                              padding: '8px 16px',
                              background: 'var(--teal-accent)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              marginRight: '10px',
                            }}
                          >
                            📥 Download (Mock)
                          </button>
                          <span style={{ fontSize: '12px', color: 'var(--gray)' }}>{doc.url}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          */}

          {/* Hidden upload tab - not in UI
          {activeTab === 'upload' && (
            <div className="demo-upload-section">
              <h3>Submit a New Document</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Contribute to the Policy Library by submitting new or updated policy documents. Your
                submission will create a GitHub pull request for review.
              </p>

              <div
                style={{
                  background: 'var(--blue-98)',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
              >
                <label style={{ display: 'block', marginBottom: '10px' }}>
                  <strong>Document Details</strong>
                </label>

                <div style={{ marginBottom: '15px' }}>
                  <label
                    htmlFor="doc-jurisdiction"
                    style={{ display: 'block', marginBottom: '5px' }}
                  >
                    Jurisdiction
                  </label>
                  <select
                    id="doc-jurisdiction"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                  >
                    <option value="federal">Federal</option>
                    <option value="nc">North Carolina</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="tx">Texas</option>
                  </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="doc-program" style={{ display: 'block', marginBottom: '5px' }}>
                    Program
                  </label>
                  <select
                    id="doc-program"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                  >
                    <option value="snap">SNAP</option>
                    <option value="medicaid">Medicaid</option>
                    <option value="tanf">TANF</option>
                    <option value="wic">WIC</option>
                    <option value="liheap">LIHEAP</option>
                  </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Upload Method</label>
                  <div style={{ marginBottom: '10px' }}>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.txt"
                      style={{ marginBottom: '10px' }}
                    />
                    {uploadFile && (
                      <p style={{ fontSize: '14px', color: 'var(--dark-gray)' }}>
                        Selected: {uploadFile.name}
                      </p>
                    )}
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <input
                      type="url"
                      placeholder="Or paste document URL..."
                      value={uploadUrl}
                      onChange={(e) => setUploadUrl(e.target.value)}
                      style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmitDocument}
                  style={{
                    padding: '10px 20px',
                    background: 'var(--teal-accent)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  Submit Document (Creates GitHub PR)
                </button>
              </div>

              <div
                style={{
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>📝 Mock-up Note:</strong> In the live system, this would:
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Validate the document format and metadata</li>
                  <li>Create a pull request to the appropriate GitHub repository</li>
                  <li>Notify maintainers for review</li>
                  <li>Track contribution history and attribution</li>
                </ul>
              </div>
            </div>
          )}
          */}

          {/* Hidden bulk tab - not in UI
          {activeTab === 'bulk' && (
            <div className="demo-bulk-section">
              <h3>Partner Bulk Document Ingestion</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Organizations with large document collections can contribute thousands of documents
                at once. Our AI-powered system semi-automatically assigns metadata with human
                verification.
              </p>

              <div style={{ marginBottom: '25px' }}>
                <h4>Contributing Organizations</h4>
                <div
                  style={{
                    background: 'var(--blue-98)',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>PolicyEngine</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        2,500+ policy parameter citations from rules engine
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>
                        Federal Reserve Bank of Atlanta
                      </strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        Policy Rules Database documents (nationwide)
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>
                        Georgia Center for Opportunity
                      </strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        All states and programs documentation
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>NBER</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        Tax documents since 2018 via TAXSIM MOU
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>
                        Prenatal-to-3 Policy Impact Center
                      </strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        State tax credit modeling documents
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>MyFriendBen</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>
                        Colorado benefits documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Bulk Ingestion Process</h4>
                <div
                  style={{
                    background: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <ol style={{ paddingLeft: '20px', lineHeight: '2' }}>
                    <li>
                      <strong>Document Drop:</strong> Partners upload ZIP files or provide cloud
                      storage links with thousands of PDFs, DOCs, and web archives
                    </li>
                    <li>
                      <strong>AI Processing:</strong> Claude/GPT-5 analyzes each document to
                      extract:
                      <ul style={{ marginTop: '8px', marginBottom: '8px' }}>
                        <li>Document title and type (statute, regulation, form, guidance)</li>
                        <li>Jurisdiction and program area</li>
                        <li>Effective dates and version information</li>
                        <li>Related document references</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Metadata Assignment:</strong> AI suggests metadata tags based on
                      content analysis and filename patterns
                    </li>
                    <li>
                      <strong>Human Verification:</strong> Batch review interface for partners to
                      quickly verify or correct AI suggestions
                    </li>
                    <li>
                      <strong>Integration:</strong> Documents added to searchable library with full
                      attribution to contributing organization
                    </li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Example Bulk Upload Interface</h4>
                <div
                  style={{
                    background: 'white',
                    border: '2px dashed var(--blue-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>📁</div>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Drop document collection here
                  </p>
                  <p style={{ color: 'var(--gray)', marginBottom: '15px' }}>
                    or click to browse (supports ZIP, folders, cloud links)
                  </p>
                  <div style={{ fontSize: '14px', color: 'var(--dark-gray)' }}>
                    <strong>Accepted formats:</strong> PDF, DOC, DOCX, TXT, HTML, WARC
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>AI Metadata Extraction Preview</h4>
                <div
                  style={{
                    background: '#2d2d2d',
                    color: '#f8f8f2',
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                  }}
                >
                  <div style={{ marginBottom: '15px', color: '#75715e' }}>
                    # Processing: GA_SNAP_Eligibility_2024.pdf
                  </div>
                  <div style={{ color: '#a6e22e' }}>✓ Extracted metadata:</div>
                  <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <div>Title: "Georgia SNAP Eligibility Requirements"</div>
                    <div>Type: Regulation</div>
                    <div>Jurisdiction: Georgia</div>
                    <div>Program: SNAP</div>
                    <div>Effective Date: 2024-10-01</div>
                    <div>Source Agency: Georgia Division of Family and Children Services</div>
                    <div>Confidence: 94%</div>
                  </div>
                  <div style={{ marginTop: '15px', color: '#f92672' }}>
                    [Human Review Required] ▶ Confirm or edit metadata
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#d4edda',
                  border: '1px solid #28a745',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>🚀 Launch Impact:</strong> Starting with 5,000+ documents from partner
                organizations
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Comprehensive coverage from day one</li>
                  <li>AI processes metadata 100x faster than manual entry</li>
                  <li>Human verification ensures accuracy</li>
                  <li>Partners retain full attribution and credit</li>
                  <li>Continuous updates as partners add new documents</li>
                </ul>
              </div>
            </div>
          )}
          */}

          {activeTab === 'api' && (
            <div className="demo-api-section">
              <h3>API Access</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Integrate the Policy Library directly into your applications with our RESTful API.
              </p>

              <div style={{ marginBottom: '20px' }}>
                <h4>Endpoints</h4>
                <div
                  style={{
                    background: 'var(--blue-98)',
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>GET</code>
                    <code> /v1/documents</code> - Search and retrieve documents
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>GET</code>
                    <code> /v1/documents/:id</code> - Get specific document
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>GET</code>
                    <code> /v1/documents/:id/versions</code> - Get version history
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--green)' }}>POST</code>
                    <code> /v1/documents</code> - Submit new document
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4>Example Code</h4>
                <pre
                  style={{
                    background: '#2d2d2d',
                    color: '#f8f8f2',
                    padding: '15px',
                    borderRadius: '8px',
                    overflow: 'auto',
                  }}
                >
                  <code>{apiExample}</code>
                </pre>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4>Response Format</h4>
                <pre
                  style={{
                    background: '#2d2d2d',
                    color: '#f8f8f2',
                    padding: '15px',
                    borderRadius: '8px',
                    overflow: 'auto',
                    fontSize: '14px',
                  }}
                >
                  <code>{`{
  "documents": [
    {
      "id": "${jurisdiction}_${program}_001",
      "title": "${jurisdictionNames[jurisdiction]} ${programNames[program]} Eligibility",
      "jurisdiction": "${jurisdiction}",
      "program": "${program}",
      "type": "${doctype}",
      "url": "https://policy-library.org/docs/...",
      "last_updated": "2025-01-15",
      "versions": 12,
      "metadata": {
        "ai_verified": true,
        "source": "official",
        "format": "pdf"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 156
  }
}`}</code>
                </pre>
              </div>

              <div
                style={{
                  background: '#d4edda',
                  border: '1px solid #28a745',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>🔑 Mock-up Note:</strong> The production API will include:
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Authentication via API keys</li>
                  <li>Rate limiting (1000 requests/hour)</li>
                  <li>Webhook notifications for document updates</li>
                  <li>Batch operations for bulk retrieval</li>
                  <li>Full OpenAPI/Swagger documentation</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'mcp' && (
            <div className="demo-api-section">
              <h3>MCP Server - Native AI Integration</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                The Model Context Protocol server enables AI assistants like Claude to query policy
                documents directly during conversations. No more hallucinations about benefit rules.
              </p>

              <div style={{ marginBottom: '20px' }}>
                <h4>How It Works</h4>
                <div
                  style={{
                    background: 'var(--blue-98)',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                  }}
                >
                  <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>User asks Claude: "What's the SNAP asset limit in California?"</li>
                    <li>Claude queries Policy Library MCP server for CA SNAP regulations</li>
                    <li>Server returns authoritative document excerpts</li>
                    <li>Claude provides accurate answer with citations</li>
                  </ol>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4>MCP Configuration</h4>
                <pre
                  style={{
                    background: '#2d2d2d',
                    color: '#f8f8f2',
                    padding: '15px',
                    borderRadius: '8px',
                    overflow: 'auto',
                  }}
                >
                  <code>{`// claude_desktop_config.json
{
  "mcpServers": {
    "policy-library": {
      "command": "npx",
      "args": [
        "-y",
        "@policyengine/policy-library-mcp"
      ],
      "env": {
        "POLICY_LIBRARY_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
                </pre>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4>Available Tools</h4>
                <div
                  style={{
                    background: 'var(--blue-98)',
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>search_documents</code>- Find
                    policy documents by jurisdiction, program, and keywords
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>get_document</code>- Retrieve
                    full document text by ID
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>get_excerpt</code>- Extract
                    relevant sections for specific questions
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <code style={{ color: 'var(--teal-pressed)' }}>check_updates</code>- Find recent
                    changes to policies
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4>Example Conversation</h4>
                <div
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                >
                  <div style={{ marginBottom: '15px' }}>
                    <strong>User:</strong> Can a family with $3,000 in savings qualify for SNAP in
                    Texas?
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Claude (using MCP):</strong> Let me check the current Texas SNAP asset
                    limits...
                    <div
                      style={{
                        background: '#e9ecef',
                        padding: '10px',
                        marginTop: '10px',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                        fontSize: '13px',
                      }}
                    >
                      Querying: policy_library.search_documents({`{`}
                      <br />
                      &nbsp;&nbsp;jurisdiction: "texas",
                      <br />
                      &nbsp;&nbsp;program: "snap",
                      <br />
                      &nbsp;&nbsp;keywords: "asset limit resource"
                      <br />
                      {`}`})
                    </div>
                  </div>
                  <div>
                    <strong>Claude:</strong> According to Texas SNAP regulations (7 TAC §360.63,
                    last updated October 2024), households may have up to $2,750 in countable
                    resources, or $4,250 if at least one member is age 60 or older or disabled. With
                    $3,000 in savings, a regular household would exceed the limit, but could qualify
                    if a member is elderly or disabled.
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#d4edda',
                  border: '1px solid #28a745',
                  padding: '15px',
                  borderRadius: '4px',
                }}
              >
                <strong>🤖 Why MCP Matters:</strong>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>AI tools get accurate, up-to-date policy information</li>
                  <li>Every answer includes authoritative citations</li>
                  <li>No hallucinations about benefit rules</li>
                  <li>Works with Claude, ChatGPT, and other MCP-compatible tools</li>
                  <li>Zero integration effort for end users</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Demo;
