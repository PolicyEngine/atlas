import ReactMarkdown from 'react-markdown';
import {
  executiveSummaryContent,
  valuePropositionContent,
  technicalFeasibilityContent,
} from '../content/pbif/applicationContent';

function PBIFApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="pbif-header">
          <h1 className="pbif-title">PBIF Summer 2025 Application</h1>
          <p className="pbif-subtitle">
            PolicyEngine Policy Library - AI Infrastructure for America's Safety Net
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
        </div>
      </div>
    </div>
  );
}

export default PBIFApplication;
