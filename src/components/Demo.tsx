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
  const [activeTab, setActiveTab] = useState<'search' | 'upload' | 'api'>('search');
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
              className={`demo-tab ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTab('api')}
            >
              🔌 API Access
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
        </div>
      </div>
    </div>
  );
}

export default Demo;
