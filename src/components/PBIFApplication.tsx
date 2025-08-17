import ReactMarkdown from 'react-markdown';
import {
  executiveSummaryContent,
  valuePropositionContent,
  technicalFeasibilityContent,
} from '../content/pbif/applicationContent';

// Architecture Diagram Component
function ArchitectureDiagram() {
  return (
    <div
      style={{
        background: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        margin: '30px 0',
        border: '1px solid #e0e0e0',
      }}
    >
      <h3 style={{ marginTop: 0, color: 'var(--blue)' }}>
        Supporting Materials: PolicyEngine Atlas Architecture
      </h3>

      <div style={{ display: 'grid', gap: '20px' }}>
        {/* Data Flow Diagram */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '6px' }}>
          <h4 style={{ marginTop: 0, color: 'var(--darkest-blue)' }}>
            Document Processing Pipeline
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <div
              style={{
                background: '#F7FDFC',
                padding: '10px 15px',
                borderRadius: '4px',
                border: '2px solid var(--teal-accent)',
              }}
            >
              📄 Agency Websites
            </div>
            <span>→</span>
            <div
              style={{
                background: '#F7FAFD',
                padding: '10px 15px',
                borderRadius: '4px',
                border: '2px solid var(--blue)',
              }}
            >
              🤖 LLM Crawlers
            </div>
            <span>→</span>
            <div
              style={{
                background: '#F7FDFC',
                padding: '10px 15px',
                borderRadius: '4px',
                border: '2px solid var(--teal-accent)',
              }}
            >
              👥 GitHub PR Review
            </div>
            <span>→</span>
            <div
              style={{
                background: '#F7FAFD',
                padding: '10px 15px',
                borderRadius: '4px',
                border: '2px solid var(--blue)',
              }}
            >
              🗃️ Git Storage
            </div>
            <span>→</span>
            <div
              style={{
                background: '#F7FDFC',
                padding: '10px 15px',
                borderRadius: '4px',
                border: '2px solid var(--teal-accent)',
              }}
            >
              🌐 API/Web/MCP
            </div>
          </div>
        </div>

        {/* Clarity Index Process */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '6px' }}>
          <h4 style={{ marginTop: 0, color: 'var(--darkest-blue)' }}>Clarity Index Methodology</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
            }}
          >
            <div style={{ background: '#F7FAFD', padding: '15px', borderRadius: '4px' }}>
              <strong>1. Human Baseline</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                Experts rate select documents for ambiguity
              </p>
            </div>
            <div style={{ background: '#F7FDFC', padding: '15px', borderRadius: '4px' }}>
              <strong>2. LLM Testing</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                Multiple runs encoding sample households
              </p>
            </div>
            <div style={{ background: '#F7FAFD', padding: '15px', borderRadius: '4px' }}>
              <strong>3. Consistency Score</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                Measure variation across interpretations
              </p>
            </div>
            <div style={{ background: '#F7FDFC', padding: '15px', borderRadius: '4px' }}>
              <strong>4. Problem Identification</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                Pinpoint unclear passages with SNAP QC data
              </p>
            </div>
          </div>
        </div>

        {/* Three-Phase Implementation */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '6px' }}>
          <h4 style={{ marginTop: 0, color: 'var(--darkest-blue)' }}>Implementation Phases</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #F7FAFD 0%, #D8E6F3 100%)',
                padding: '15px',
                borderRadius: '4px',
              }}
            >
              <strong>Phase 1: Scale (237→5,000 docs)</strong>
              <ul style={{ margin: '10px 0', paddingLeft: '20px', fontSize: '14px' }}>
                <li>Migrate 2,500 PolicyEngine citations</li>
                <li>Track document churn rates</li>
                <li>First bounty: validate metadata</li>
              </ul>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #F7FDFC 0%, #39C6C0 100%)',
                padding: '15px',
                borderRadius: '4px',
              }}
            >
              <strong>Phase 2: Monitor & Update</strong>
              <ul style={{ margin: '10px 0', paddingLeft: '20px', fontSize: '14px' }}>
                <li>Replace URLs with permalinks</li>
                <li>AI monitors document changes</li>
                <li>Summarize modifications</li>
              </ul>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #F7FAFD 0%, #2C6496 100%)',
                padding: '15px',
                borderRadius: '4px',
              }}
            >
              <strong style={{ color: 'var(--darkest-blue)' }}>Phase 3: Discover & Complete</strong>
              <ul
                style={{
                  margin: '10px 0',
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: 'var(--darkest-blue)',
                }}
              >
                <li>AI finds missing documents</li>
                <li>Second bounty: verify discoveries</li>
                <li>Third bounty: contribute gaps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integration Options */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '6px' }}>
          <h4 style={{ marginTop: 0, color: 'var(--darkest-blue)' }}>
            Government Integration Options
          </h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px' }}>🔌</div>
              <strong>REST API</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>Programmatic access</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px' }}>🤖</div>
              <strong>MCP Server</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>AI assistant integration</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px' }}>🌐</div>
              <strong>Web Interface</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>Caseworker access</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px' }}>📦</div>
              <strong>GitHub Repos</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>Full transparency</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px' }}>🏢</div>
              <strong>Onsite Install</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>Government hosting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PBIFApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="pbif-header">
          <h1 className="pbif-title">PBIF Summer 2025 Application</h1>
          <p className="pbif-subtitle">
            PolicyEngine Atlas - Making Safety Net Policies Accessible, Clear, and Computable
          </p>
        </div>

        <div className="response-box" style={{ background: '#f0f8ff', marginBottom: '30px' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
            <strong>Note:</strong> This page shows our responses to the official PBIF application
            questions. Each section header and question text is verbatim from the application.
          </p>
          <p style={{ marginBottom: 0 }}>
            <a
              href="https://www.publicbenefitinnovationfund.org/Summer_2025_Open_Call_Application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--blue)' }}
            >
              View Official Application PDF →
            </a>
          </p>
        </div>

        {/* Section 1: Executive Summary */}
        <div className="application-section">
          <ReactMarkdown>{executiveSummaryContent}</ReactMarkdown>
        </div>

        {/* Section 2: Value Proposition */}
        <div className="application-section">
          <ReactMarkdown>{valuePropositionContent}</ReactMarkdown>
        </div>

        {/* Section 3: Technical Feasibility */}
        <div className="application-section">
          <ReactMarkdown>{technicalFeasibilityContent}</ReactMarkdown>

          {/* Add Architecture Diagram after Solution Description */}
          <ArchitectureDiagram />
        </div>

        {/* Attachments Section */}
        <div className="application-section" style={{ marginTop: '40px' }}>
          <h2>Attachments</h2>
          <div
            style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '20px',
            }}
          >
            <p style={{ marginBottom: '20px' }}>
              <strong>Please attach the following:</strong>
            </p>

            <div style={{ marginBottom: '25px' }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>Brief bios for each of the team members</strong> working on this project.
                Highlight relevant technical expertise, domain knowledge, and responsibilities for
                key personnel.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'var(--blue)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  Team Bios.pdf
                </span>
                <span style={{ color: '#666', fontSize: '14px' }}>✓ Attached</span>
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>A project plan or roadmap</strong> with clear milestones, deliverables, and
                a realistic timeline for each phase of the project.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'var(--blue)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  Project Roadmap.pdf
                </span>
                <span style={{ color: '#666', fontSize: '14px' }}>✓ Attached</span>
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>Letters of support</strong> from partner organizations and stakeholders.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'var(--blue)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  Combined Support Letters.pdf
                </span>
                <span style={{ color: '#666', fontSize: '14px' }}>✓ Attached (7 letters)</span>
              </div>
            </div>

            <div>
              <p style={{ marginBottom: '10px' }}>
                <strong>Budget spreadsheet</strong> with detailed cost breakdown.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'var(--blue)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  Budget Details.xlsx
                </span>
                <span style={{ color: '#666', fontSize: '14px' }}>✓ Attached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;
