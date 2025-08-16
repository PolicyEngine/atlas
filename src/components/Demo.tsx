import { useState } from 'react';

function Demo() {
  const [jurisdiction, setJurisdiction] = useState('federal');
  const [program, setProgram] = useState('snap');
  const [activeTab, setActiveTab] = useState<
    'knowledge' | 'clarity' | 'bounty' | 'dashboard' | 'api'
  >('knowledge');

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
    console.log(`Searching for ${jurisdiction} ${program} documents`);
  };


  return (
    <div className="section">
      <div className="content">
        <div className="demo-container">
          <h2 className="demo-title">PolicyEngine Atlas</h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--gray)',
              marginBottom: '30px',
              fontStyle: 'italic',
            }}
          >
            Navigate the policy landscape with AI-powered document mapping and clarity analysis to reduce $10.5B
            in annual SNAP errors.
          </p>

          <div className="demo-tabs">
            <button
              className={`demo-tab ${activeTab === 'knowledge' ? 'active' : ''}`}
              onClick={() => setActiveTab('knowledge')}
            >
              🔗 Atlas Search
            </button>
            <button
              className={`demo-tab ${activeTab === 'clarity' ? 'active' : ''}`}
              onClick={() => setActiveTab('clarity')}
            >
              ✨ Clarity Index
            </button>
            <button
              className={`demo-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 State Dashboard
            </button>
            <button
              className={`demo-tab ${activeTab === 'bounty' ? 'active' : ''}`}
              onClick={() => setActiveTab('bounty')}
            >
              🏆 Partner Network
            </button>
            <button
              className={`demo-tab ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTab('api')}
            >
              🔧 Developer Tools
            </button>
          </div>

          {activeTab === 'clarity' && (
            <div className="demo-clarity-section">
              <h3>Clarity Index: Learning from Policy Language Nationwide</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                The Clarity Index uses AI analysis validated by human experts to identify policy
                language patterns that cause benefit errors. By comparing documents across all jurisdictions,
                agencies learn which wording reduces errors and improves caseworker effectiveness.
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
                    • $35,000 for document verification payments to trusted research partners
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
                <h4>Document Verification Partners ($35,000)</h4>
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
              <h3>Developer Tools</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Integrate PolicyEngine Atlas into your applications via REST API or native AI assistant support through MCP.
              </p>

              {/* REST API Section */}
              <div style={{ marginBottom: '30px' }}>
                <h4>🔌 REST API</h4>
                <div style={{ marginBottom: '20px' }}>
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
                      <code style={{ color: 'var(--teal-pressed)' }}>GET</code>
                      <code> /v1/graph/eligibility</code> - Get eligibility pathways
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5>Example: Retrieve NC SNAP Document</h5>
                  <pre
                    style={{
                      background: '#2d2d2d',
                      color: '#f8f8f2',
                      padding: '15px',
                      borderRadius: '8px',
                      overflow: 'auto',
                      fontSize: '13px',
                    }}
                  >
                    <code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.policyengine.org/atlas/v1/documents/NC_SNAP_001"

# Returns:
{
  "id": "NC_SNAP_001",
  "title": "North Carolina SNAP Eligibility Manual",
  "jurisdiction": "nc",
  "program": "snap",
  "type": "manual",
  "current_version": "2025.01",
  "versions_available": 12,
  "download_url": "https://api.policyengine.org/atlas/v1/documents/NC_SNAP_001/download",
  "policyengine_refs": [
    "gov/usda/snap/income_limit",
    "gov/states/nc/snap/categorical_eligibility"
  ]
}`}</code>
                  </pre>
                </div>
              </div>

              {/* MCP Server Section */}
              <div style={{ marginBottom: '30px' }}>
                <h4>🤖 MCP Server - Native AI Integration</h4>
                <p style={{ marginBottom: '15px', color: 'var(--gray)', fontSize: '14px' }}>
                  The Model Context Protocol server enables AI assistants like Claude to query Atlas directly during conversations,
                  providing accurate policy information without hallucination.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h5>Installation</h5>
                  <pre
                    style={{
                      background: '#2d2d2d',
                      color: '#f8f8f2',
                      padding: '15px',
                      borderRadius: '8px',
                      overflow: 'auto',
                      fontSize: '13px',
                    }}
                  >
                    <code>{`// claude_desktop_config.json
{
  "mcpServers": {
    "policyengine-atlas": {
      "command": "npx",
      "args": ["-y", "@policyengine/atlas-mcp"],
      "env": {
        "ATLAS_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
                  </pre>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5>Available MCP Tools</h5>
                  <div style={{ background: 'var(--blue-98)', padding: '15px', borderRadius: '8px' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                      <div style={{ marginBottom: '8px' }}>
                        <strong>search_documents</strong> - Find policy documents by jurisdiction/program
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <strong>get_eligibility_path</strong> - Discover categorical eligibility chains
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <strong>check_clarity</strong> - Get Clarity Index scores for documents
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <strong>compare_versions</strong> - Track policy changes over time
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffc107',
                  padding: '15px',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}>
                  <strong>Example Use Case:</strong> A caseworker asks Claude: "Is this family eligible for Lifeline in NC?"
                  Claude uses the MCP server to check current documents, discover the TANF→SNAP→Lifeline pathway,
                  and provide an accurate answer with citations.
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
                <strong>🚀 Why This Matters:</strong>
                <ul style={{ marginTop: '10px', paddingLeft: '20px', margin: 0 }}>
                  <li>Rules engines get authoritative sources for every calculation</li>
                  <li>AI tools provide accurate benefits info without hallucination</li>
                  <li>Developers can build on stable infrastructure that won't break</li>
                  <li>Every response includes traceable citations to official documents</li>
                </ul>
              </div>
            </div>
          )}


          {activeTab === 'knowledge' && (
            <div className="demo-knowledge-section">
              <h3>PolicyEngine Atlas: Bridging Analysis and Access</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                <strong>For Policy Analysts:</strong> Authoritative documents with version history and citations.
                <strong> For Caseworkers:</strong> Instant eligibility pathways and clear guidance.
                Atlas uniquely serves both communities by connecting documents to real-world eligibility.
              </p>

              {/* Simple Document Search */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ marginBottom: '15px' }}>📂 Document Search</h4>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <div className="demo-controls" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div className="demo-select" style={{ flex: '1', minWidth: '150px' }}>
                      <label htmlFor="jurisdiction" style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                        Jurisdiction
                      </label>
                      <select
                        id="jurisdiction"
                        value={jurisdiction}
                        onChange={(e) => setJurisdiction(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      >
                        <option value="federal">Federal</option>
                        <option value="nc">North Carolina</option>
                        <option value="ca">California</option>
                        <option value="ny">New York</option>
                        <option value="tx">Texas</option>
                      </select>
                    </div>
                    <div className="demo-select" style={{ flex: '1', minWidth: '150px' }}>
                      <label htmlFor="program" style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                        Program
                      </label>
                      <select
                        id="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      >
                        <option value="snap">SNAP</option>
                        <option value="medicaid">Medicaid</option>
                        <option value="tanf">TANF</option>
                        <option value="wic">WIC</option>
                        <option value="ssi">SSI</option>
                        <option value="lifeline">Lifeline</option>
                      </select>
                    </div>
                    <div className="demo-select" style={{ flex: '1', minWidth: '150px' }}>
                      <label htmlFor="doctype" style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                        Document Type
                      </label>
                      <select
                        id="doctype"
                        style={{
                          width: '100%',
                          padding: '8px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                        }}
                      >
                        <option value="all">All Types</option>
                        <option value="statute">Statutes</option>
                        <option value="regulation">Regulations</option>
                        <option value="manual">Policy Manuals</option>
                        <option value="form">Forms</option>
                        <option value="guidance">Guidance</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <button 
                        className="demo-button" 
                        onClick={searchDocuments}
                        style={{
                          padding: '8px 20px',
                          background: 'var(--teal-accent)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        Search Atlas
                      </button>
                    </div>
                  </div>

                  {/* Search Results Preview */}
                  <div style={{ 
                    background: 'white', 
                    border: '1px solid #dee2e6', 
                    borderRadius: '4px', 
                    padding: '15px',
                  }}>
                    <div style={{ marginBottom: '10px', fontSize: '13px', color: 'var(--gray)' }}>
                      Showing results for: <strong>{jurisdictionNames[jurisdiction]} - {programNames[program]}</strong>
                    </div>
                    <div style={{ display: 'grid', gap: '10px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        background: '#f8f9fa',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#e3f2fd'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}>
                        <div>
                          <strong style={{ fontSize: '14px' }}>📄 {program.toUpperCase()} Eligibility Requirements</strong>
                          <div style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '3px' }}>
                            Regulation • Last updated: Jan 2025 • ID: {jurisdiction.toUpperCase()}_{program.toUpperCase()}_001
                          </div>
                        </div>
                        <button style={{
                          padding: '5px 10px',
                          background: 'var(--blue)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}>
                          Download
                        </button>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        background: '#f8f9fa',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#e3f2fd'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#f8f9fa'}>
                        <div>
                          <strong style={{ fontSize: '14px' }}>📋 Application Form</strong>
                          <div style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '3px' }}>
                            Form • Version 2024-10 • ID: {jurisdiction.toUpperCase()}_{program.toUpperCase()}_FORM_001
                          </div>
                        </div>
                        <button style={{
                          padding: '5px 10px',
                          background: 'var(--blue)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '3px',
                          fontSize: '12px',
                          cursor: 'pointer',
                        }}>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Search with Knowledge Graph */}
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ marginBottom: '15px' }}>🔍 Advanced Search</h4>
                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="knowledge-search" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                      Natural Language Query:
                    </label>
                    <input
                      id="knowledge-search"
                      type="text"
                      value="lifeline income limit in North Carolina"
                      disabled
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        background: '#f0f0f0',
                        fontSize: '14px',
                        cursor: 'not-allowed',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ marginBottom: '15px' }}>🔗 Three-Layer Knowledge Graph</h5>
                    
                    {/* Three-layer visualization: Programs → Parameters → Documents */}
                    <div style={{
                      background: 'white',
                      border: '2px solid var(--teal-accent)',
                      borderRadius: '8px',
                      padding: '25px',
                      overflow: 'auto',
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'stretch',
                        minWidth: '900px',
                      }}>
                        {/* Layer 1: Program Eligibility Flow */}
                        <div style={{
                          flex: '1',
                          background: 'var(--blue-98)',
                          borderRadius: '8px',
                          padding: '15px',
                        }}>
                          <h6 style={{ marginBottom: '15px', color: 'var(--blue-pressed)' }}>
                            Program Flow
                          </h6>
                          
                          {/* TANF */}
                          <div style={{
                            background: '#d4edda',
                            border: '2px solid #28a745',
                            borderRadius: '6px',
                            padding: '10px',
                            marginBottom: '10px',
                          }}>
                            <strong>TANF Non-Cash</strong>
                            <div style={{ fontSize: '12px', marginTop: '5px' }}>
                              NC Work First Services
                              <br />
                              <span style={{ color: '#28a745', fontWeight: 'bold' }}>200% FPL</span>
                            </div>
                          </div>
                          
                          <div style={{
                            textAlign: 'center',
                            fontSize: '20px',
                            color: 'var(--gray)',
                            margin: '5px 0',
                          }}>
                            ↓
                          </div>
                          
                          {/* SNAP */}
                          <div style={{
                            background: '#fff3cd',
                            border: '2px solid #ffc107',
                            borderRadius: '6px',
                            padding: '10px',
                            marginBottom: '10px',
                          }}>
                            <strong>SNAP</strong>
                            <div style={{ fontSize: '12px', marginTop: '5px' }}>
                              via BBCE
                              <br />
                              <span style={{ color: '#ffc107', fontWeight: 'bold' }}>Auto-qualifies</span>
                            </div>
                          </div>
                          
                          <div style={{
                            textAlign: 'center',
                            fontSize: '20px',
                            color: 'var(--gray)',
                            margin: '5px 0',
                          }}>
                            ↓
                          </div>
                          
                          {/* Lifeline */}
                          <div style={{
                            background: 'var(--teal-light)',
                            border: '2px solid var(--teal-accent)',
                            borderRadius: '6px',
                            padding: '10px',
                          }}>
                            <strong>📱 Lifeline</strong>
                            <div style={{ fontSize: '12px', marginTop: '5px' }}>
                              Categorical Eligibility
                              <br />
                              <span style={{ color: 'var(--teal-pressed)', fontWeight: 'bold' }}>
                                Qualifies at 185% FPL!
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Connection arrows */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-around',
                          width: '30px',
                        }}>
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                        </div>

                        {/* Layer 2: PolicyEngine Parameters */}
                        <div style={{
                          flex: '1',
                          background: 'var(--teal-light)',
                          borderRadius: '8px',
                          padding: '15px',
                        }}>
                          <h6 style={{ marginBottom: '15px', color: 'var(--teal-pressed)' }}>
                            PolicyEngine Rules
                          </h6>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid var(--teal-accent)',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '12px',
                            fontSize: '11px',
                            position: 'relative',
                          }}>
                            <div style={{ fontFamily: 'monospace' }}>
                              <strong>gov/hhs/tanf/non_cash/income_limit</strong>
                            </div>
                            <div style={{ color: 'var(--gray)', marginTop: '3px' }}>
                              value: 2.0 × FPL
                              <br />
                              ref: <span style={{ textDecoration: 'underline' }}>NC_WF_001</span>
                            </div>
                            <a href="https://github.com/PolicyEngine/policyengine-us/tree/master/policyengine_us/parameters/gov/hhs/tanf" 
                              style={{ fontSize: '10px', color: 'var(--blue)' }}
                              target="_blank"
                              rel="noopener noreferrer">
                              View in GitHub →
                            </a>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid var(--teal-accent)',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '12px',
                            fontSize: '11px',
                          }}>
                            <div style={{ fontFamily: 'monospace' }}>
                              <strong>gov/usda/snap/bbce/tanf_eligible</strong>
                            </div>
                            <div style={{ color: 'var(--gray)', marginTop: '3px' }}>
                              condition: receives_tanf_non_cash
                              <br />
                              ref: <span style={{ textDecoration: 'underline' }}>USDA_BBCE_001</span>
                            </div>
                            <a href="https://github.com/PolicyEngine/policyengine-us/tree/master/policyengine_us/variables/gov/usda/snap" 
                              style={{ fontSize: '10px', color: 'var(--blue)' }}
                              target="_blank"
                              rel="noopener noreferrer">
                              View in GitHub →
                            </a>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid var(--teal-accent)',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '12px',
                            fontSize: '11px',
                          }}>
                            <div style={{ fontFamily: 'monospace' }}>
                              <strong>gov/fcc/lifeline/categorical/snap</strong>
                            </div>
                            <div style={{ color: 'var(--gray)', marginTop: '3px' }}>
                              condition: snap_recipient
                              <br />
                              ref: <span style={{ textDecoration: 'underline' }}>FCC_038_001</span>
                            </div>
                            <a href="https://github.com/PolicyEngine/policyengine-us/tree/master/policyengine_us/variables/gov/fcc/lifeline" 
                              style={{ fontSize: '10px', color: 'var(--blue)' }}
                              target="_blank"
                              rel="noopener noreferrer">
                              View in GitHub →
                            </a>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid var(--teal-accent)',
                            borderRadius: '4px',
                            padding: '8px',
                            fontFamily: 'monospace',
                            fontSize: '11px',
                          }}>
                            <div>
                              <strong>gov/fcc/lifeline/income_limit</strong>
                            </div>
                            <div style={{ color: 'var(--gray)', marginTop: '3px' }}>
                              value: 1.35 × FPL
                              <br />
                              ref: <span style={{ textDecoration: 'underline' }}>FCC_038_002</span>
                            </div>
                            <a href="https://github.com/PolicyEngine/policyengine-us/tree/master/policyengine_us/parameters/gov/fcc/lifeline" 
                              style={{ fontSize: '10px', color: 'var(--blue)' }}
                              target="_blank"
                              rel="noopener noreferrer">
                              View in GitHub →
                            </a>
                          </div>
                        </div>

                        {/* Connection arrows */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-around',
                          width: '30px',
                        }}>
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                          <div style={{ 
                            borderTop: '2px dashed var(--gray)',
                            borderRight: '2px dashed var(--gray)',
                            width: '100%',
                            height: '20px',
                            opacity: 0.3,
                          }} />
                        </div>

                        {/* Layer 3: Source Documents */}
                        <div style={{
                          flex: '1',
                          background: '#f8f9fa',
                          borderRadius: '8px',
                          padding: '15px',
                        }}>
                          <h6 style={{ marginBottom: '15px', color: 'var(--dark-gray)' }}>
                            Source Documents
                          </h6>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid #dee2e6',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '10px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e3f2fd';
                            e.currentTarget.style.borderColor = 'var(--blue)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = '#dee2e6';
                          }}
                          title="Click to download">
                            <div style={{ 
                              position: 'absolute', 
                              top: '5px', 
                              right: '5px',
                              fontSize: '10px',
                              color: 'var(--blue)',
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                            }}>
                              NC_WF_001
                            </div>
                            📘 <strong>NC Work First Manual</strong>
                            <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '3px' }}>
                              Chapter 3, Section 3.2
                              <br />
                              Pages 47-52
                              <br />
                              <span style={{ color: 'var(--blue)' }}>📥 Download PDF</span>
                            </div>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid #dee2e6',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '10px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e3f2fd';
                            e.currentTarget.style.borderColor = 'var(--blue)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = '#dee2e6';
                          }}
                          title="Click to download">
                            <div style={{ 
                              position: 'absolute', 
                              top: '5px', 
                              right: '5px',
                              fontSize: '10px',
                              color: 'var(--blue)',
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                            }}>
                              USDA_BBCE_001
                            </div>
                            📋 <strong>USDA SNAP BBCE Report</strong>
                            <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '3px' }}>
                              2024 State Options
                              <br />
                              Page 47, Table 3
                              <br />
                              <span style={{ color: 'var(--blue)' }}>📥 Download PDF</span>
                            </div>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid #dee2e6',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '10px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e3f2fd';
                            e.currentTarget.style.borderColor = 'var(--blue)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = '#dee2e6';
                          }}
                          title="Click to download">
                            <div style={{ 
                              position: 'absolute', 
                              top: '5px', 
                              right: '5px',
                              fontSize: '10px',
                              color: 'var(--blue)',
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                            }}>
                              FCC_038_001
                            </div>
                            📄 <strong>FCC Order 16-38</strong>
                            <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '3px' }}>
                              47 CFR §54.409
                              <br />
                              Paragraphs (a), (b)(2)
                              <br />
                              <span style={{ color: 'var(--blue)' }}>📥 Download PDF</span>
                            </div>
                          </div>
                          
                          <div style={{
                            background: 'white',
                            border: '1px solid #dee2e6',
                            borderRadius: '4px',
                            padding: '8px',
                            marginBottom: '10px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e3f2fd';
                            e.currentTarget.style.borderColor = 'var(--blue)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = '#dee2e6';
                          }}
                          title="Click to download">
                            <div style={{ 
                              position: 'absolute', 
                              top: '5px', 
                              right: '5px',
                              fontSize: '10px',
                              color: 'var(--blue)',
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                            }}>
                              CFR_260_001
                            </div>
                            📖 <strong>45 CFR 260-265</strong>
                            <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '3px' }}>
                              TANF Federal Regulations
                              <br />
                              §260.31 Non-cash benefits
                              <br />
                              <span style={{ color: 'var(--blue)' }}>📥 Download PDF</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Query context */}
                      <div style={{
                        marginTop: '20px',
                        padding: '12px',
                        background: 'var(--blue-98)',
                        borderRadius: '6px',
                        fontSize: '13px',
                      }}>
                        <strong>Query: "lifeline income limit"</strong>
                        <div style={{ marginTop: '8px', color: 'var(--dark-gray)' }}>
                          <strong>Traditional search:</strong> Returns "135% FPL" from FCC Order
                          <br />
                          <strong>Knowledge graph:</strong> Reveals complete pathway - household at 185% FPL qualifies through
                          TANF (200% limit) → SNAP (BBCE) → Lifeline (categorical eligibility)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ marginBottom: '15px' }}>📊 Discovered Eligibility Pathway</h5>
                    <div style={{
                      background: 'white',
                      border: '1px solid #dee2e6',
                      borderRadius: '4px',
                      padding: '15px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <div style={{
                          background: '#f8d7da',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '13px',
                          border: '1px solid #dc3545',
                        }}>
                          NC Work First<br/>
                          <strong>200% FPL</strong>
                        </div>
                        <span style={{ color: 'var(--gray)' }}>→</span>
                        <div style={{
                          background: '#fff3cd',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '13px',
                          border: '1px solid #ffc107',
                        }}>
                          SNAP BBCE<br/>
                          <strong>Auto-qualify</strong>
                        </div>
                        <span style={{ color: 'var(--gray)' }}>→</span>
                        <div style={{
                          background: 'var(--teal-light)',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '13px',
                          border: '1px solid var(--teal-accent)',
                        }}>
                          Lifeline<br/>
                          <strong>Eligible!</strong>
                        </div>
                      </div>
                      <p style={{ marginTop: '15px', fontSize: '14px', color: 'var(--gray)' }}>
                        <strong>Hidden pathway discovered:</strong> Households at 185% FPL can qualify for Lifeline 
                        (normally 135% limit) through TANF non-cash → SNAP → Lifeline categorical eligibility chain.
                      </p>
                    </div>
                  </div>

                  <div style={{
                    background: '#d4edda',
                    border: '1px solid #28a745',
                    padding: '15px',
                    borderRadius: '4px',
                    marginBottom: '20px'
                  }}>
                    <strong>💡 Key Insight:</strong> Traditional document search would return the Lifeline 135% FPL limit. 
                    Our knowledge graph reveals the complete eligibility network, showing all pathways including 
                    categorical eligibility through connected programs.
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h5 style={{ marginBottom: '10px' }}>📚 Document Details</h5>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '10px'
                    }}>
                      <div style={{ 
                        background: 'white', 
                        border: '1px solid #dee2e6', 
                        borderRadius: '4px', 
                        padding: '10px',
                        fontSize: '13px',
                      }}>
                        <strong style={{ color: 'var(--blue)' }}>FCC Order 16-38</strong>
                        <div style={{ color: 'var(--gray)', marginTop: '5px' }}>
                          Federal • Regulation • 2016<br/>
                          Defines Lifeline qualifying programs
                        </div>
                      </div>
                      <div style={{ 
                        background: 'white', 
                        border: '1px solid #dee2e6', 
                        borderRadius: '4px', 
                        padding: '10px',
                        fontSize: '13px',
                      }}>
                        <strong style={{ color: 'var(--blue)' }}>USDA SNAP BBCE Report</strong>
                        <div style={{ color: 'var(--gray)', marginTop: '5px' }}>
                          Federal • Guidance • 2024<br/>
                          State-by-state BBCE policies
                        </div>
                      </div>
                      <div style={{ 
                        background: 'white', 
                        border: '1px solid #dee2e6', 
                        borderRadius: '4px', 
                        padding: '10px',
                        fontSize: '13px',
                      }}>
                        <strong style={{ color: 'var(--blue)' }}>NC Work First Manual</strong>
                        <div style={{ color: 'var(--gray)', marginTop: '5px' }}>
                          State • Policy Manual • 2024<br/>
                          Income limits for non-cash TANF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4>Why This Matters</h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '15px'
                }}>
                  <div style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>👨‍👩‍👧‍👦</div>
                    <strong>For Families</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Discover benefits you didn't know you qualified for through hidden eligibility pathways
                    </p>
                  </div>
                  <div style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏢</div>
                    <strong>For Caseworkers</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Understand complex program interactions without memorizing hundreds of rules
                    </p>
                  </div>
                  <div style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔬</div>
                    <strong>For Researchers</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Analyze participation gaps by tracing all possible eligibility pathways
                    </p>
                  </div>
                  <div style={{
                    background: 'white',
                    border: '1px solid #dee2e6',
                    padding: '15px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>🤖</div>
                    <strong>For AI Tools</strong>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                      Provide accurate eligibility determinations with full reasoning chains
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'var(--blue-98)',
                border: '1px solid var(--blue)',
                padding: '15px',
                borderRadius: '4px'
              }}>
                <strong>🔗 Unique Advantage:</strong> Only PolicyEngine combines document archives with 
                encoded rules and structured metadata. Traditional RAG or document search alone would never 
                reveal these critical program connections that determine real-world eligibility.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Demo;
