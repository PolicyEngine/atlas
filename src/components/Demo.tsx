import { useState } from 'react';

interface MockDocument {
  title: string;
  id: string;
  lastUpdated: string;
  versions: number;
  excerpt: string;
  url?: string;
}

function Demo() {
  const [jurisdiction, setJurisdiction] = useState('federal');
  const [program, setProgram] = useState('snap');
  const [doctype, setDoctype] = useState('statute');
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'upload' | 'bulk' | 'api' | 'mcp'>('search');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadUrl, setUploadUrl] = useState('');

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

  const doctypeNames: Record<string, string> = {
    statute: 'Statute',
    regulation: 'Regulation',
    form: 'Form',
    guidance: 'Guidance',
  };

  const searchDocuments = () => {
    setShowResults(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
    }
  };

  const handleSubmitDocument = () => {
    alert(
      'Mock-up: This would create a GitHub PR with your document for review by PolicyEngine maintainers.'
    );
  };

  const handleDownload = (docId: string) => {
    alert(`Mock-up: This would download document ${docId}`);
  };

  const generateMockResults = (): MockDocument[] => {
    return [
      {
        title: `${jurisdictionNames[jurisdiction]} ${programNames[program]} Eligibility ${doctypeNames[doctype]}`,
        id: `${jurisdiction}_${program}_001`,
        lastUpdated: '2025-01-15',
        versions: 12,
        excerpt:
          'This document defines the eligibility criteria and application procedures for benefits under this program...',
        url: `https://policy-library.org/docs/${jurisdiction}/${program}/eligibility.pdf`,
      },
      {
        title: `${programNames[program]} Income Limits and Asset Tests`,
        id: `${jurisdiction}_${program}_002`,
        lastUpdated: '2025-01-08',
        versions: 8,
        excerpt:
          'Income and asset limits are adjusted annually based on federal poverty guidelines and cost of living...',
        url: `https://policy-library.org/docs/${jurisdiction}/${program}/income-limits.pdf`,
      },
      {
        title: `Administrative Procedures for ${programNames[program]}`,
        id: `${jurisdiction}_${program}_003`,
        lastUpdated: '2024-12-20',
        versions: 15,
        excerpt:
          'State agencies must follow these procedures when processing applications and conducting reviews...',
        url: `https://policy-library.org/docs/${jurisdiction}/${program}/admin-procedures.pdf`,
      },
    ];
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
          <h2 className="demo-title">Policy Library Mock-up</h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--gray)',
              marginBottom: '30px',
              fontStyle: 'italic',
            }}
          >
            This is a mock-up demonstration. The actual Policy Library will be fully functional upon
            funding.
          </p>

          <div className="demo-tabs">
            <button
              className={`demo-tab ${activeTab === 'search' ? 'active' : ''}`}
              onClick={() => setActiveTab('search')}
            >
              🔍 Search & Retrieve
            </button>
            <button
              className={`demo-tab ${activeTab === 'upload' ? 'active' : ''}`}
              onClick={() => setActiveTab('upload')}
            >
              📤 Submit Document
            </button>
            <button
              className={`demo-tab ${activeTab === 'bulk' ? 'active' : ''}`}
              onClick={() => setActiveTab('bulk')}
            >
              📦 Bulk Ingestion
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

          {activeTab === 'bulk' && (
            <div className="demo-bulk-section">
              <h3>Partner Bulk Document Ingestion</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray)' }}>
                Organizations with large document collections can contribute thousands of documents at once. 
                Our AI-powered system semi-automatically assigns metadata with human verification.
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
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>2,500+ policy parameter citations from rules engine</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>Federal Reserve Bank of Atlanta</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>Policy Rules Database documents (nationwide)</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>Georgia Center for Opportunity</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>All states and programs documentation</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>NBER</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>Tax documents since 2018 via TAXSIM MOU</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>Prenatal-to-3 Policy Impact Center</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>State tax credit modeling documents</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--blue-pressed)' }}>MyFriendBen</strong>
                      <p style={{ fontSize: '14px', marginTop: '5px' }}>Colorado benefits documentation</p>
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
                      <strong>Document Drop:</strong> Partners upload ZIP files or provide cloud storage links with thousands of PDFs, DOCs, and web archives
                    </li>
                    <li>
                      <strong>AI Processing:</strong> Claude/GPT-5 analyzes each document to extract:
                      <ul style={{ marginTop: '8px', marginBottom: '8px' }}>
                        <li>Document title and type (statute, regulation, form, guidance)</li>
                        <li>Jurisdiction and program area</li>
                        <li>Effective dates and version information</li>
                        <li>Related document references</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Metadata Assignment:</strong> AI suggests metadata tags based on content analysis and filename patterns
                    </li>
                    <li>
                      <strong>Human Verification:</strong> Batch review interface for partners to quickly verify or correct AI suggestions
                    </li>
                    <li>
                      <strong>Integration:</strong> Documents added to searchable library with full attribution to contributing organization
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
                <strong>🚀 Launch Impact:</strong> Starting with 5,000+ documents from partner organizations
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
