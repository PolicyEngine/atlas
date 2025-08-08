import { useState } from 'react';

interface MockDocument {
  title: string;
  id: string;
  lastUpdated: string;
  versions: number;
  excerpt: string;
}

function Demo() {
  const [jurisdiction, setJurisdiction] = useState('federal');
  const [program, setProgram] = useState('snap');
  const [doctype, setDoctype] = useState('statute');
  const [showResults, setShowResults] = useState(false);

  const jurisdictionNames: Record<string, string> = {
    'federal': 'Federal',
    'nc': 'North Carolina',
    'ca': 'California',
    'ny': 'New York',
    'tx': 'Texas'
  };

  const programNames: Record<string, string> = {
    'snap': 'SNAP',
    'medicaid': 'Medicaid',
    'tanf': 'TANF',
    'wic': 'WIC',
    'liheap': 'LIHEAP'
  };

  const doctypeNames: Record<string, string> = {
    'statute': 'Statute',
    'regulation': 'Regulation',
    'form': 'Form',
    'guidance': 'Guidance'
  };

  const searchDocuments = () => {
    setShowResults(true);
  };

  const generateMockResults = (): MockDocument[] => {
    return [
      {
        title: `${jurisdictionNames[jurisdiction]} ${programNames[program]} Eligibility ${doctypeNames[doctype]}`,
        id: `${jurisdiction}_${program}_001`,
        lastUpdated: '2025-01-15',
        versions: 12,
        excerpt: 'This document defines the eligibility criteria and application procedures for benefits under this program...'
      },
      {
        title: `${programNames[program]} Income Limits and Asset Tests`,
        id: `${jurisdiction}_${program}_002`,
        lastUpdated: '2025-01-08',
        versions: 8,
        excerpt: 'Income and asset limits are adjusted annually based on federal poverty guidelines and cost of living...'
      },
      {
        title: `Administrative Procedures for ${programNames[program]}`,
        id: `${jurisdiction}_${program}_003`,
        lastUpdated: '2024-12-20',
        versions: 15,
        excerpt: 'State agencies must follow these procedures when processing applications and conducting reviews...'
      }
    ];
  };

  return (
    <div className="section">
      <div className="content">
        <div className="demo-container">
          <h2 className="demo-title">Try the Policy Library</h2>
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
                <option value="snap">SNAP (Food Stamps)</option>
                <option value="medicaid">Medicaid</option>
                <option value="tanf">TANF</option>
                <option value="wic">WIC</option>
                <option value="liheap">LIHEAP</option>
              </select>
            </div>
            <div className="demo-select">
              <label htmlFor="doctype">Document Type</label>
              <select 
                id="doctype"
                value={doctype}
                onChange={(e) => setDoctype(e.target.value)}
              >
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
                    <p style={{ fontSize: '14px', color: 'var(--dark-gray)', marginBottom: '10px' }}>
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Demo;