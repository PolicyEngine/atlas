function CommunityEngagement() {
  return (
    <div className="section">
      <div className="content">
        <h1>Community Engagement & Equity</h1>
        
        <div className="engagement-section">
          <h2>Community Advisory Board</h2>
          <p>
            Within 90 days of funding, we will establish a Community Advisory Board comprising:
          </p>
          <ul>
            <li>Benefit recipients with lived experience navigating safety net programs</li>
            <li>Community-based organization leaders serving vulnerable populations</li>
            <li>Multilingual community advocates representing diverse linguistic groups</li>
            <li>Digital equity practitioners addressing technology access barriers</li>
            <li>Rural and urban community representatives ensuring geographic diversity</li>
          </ul>
          <p>
            The board will meet quarterly with decision-making authority over community features, 
            language priorities, and capacity building programs.
          </p>
        </div>

        <div className="engagement-section">
          <h2>Multilingual Access Strategy</h2>
          <p className="highlight-box">
            <strong>Pragmatic Approach:</strong> Rather than complex i18n systems, we'll leverage 
            Google Translate API for automatic document translation with clear disclaimers about 
            official English versions. This provides immediate access in 100+ languages while 
            community reviewers can flag and improve critical translations.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <strong>Month 1:</strong> Google Translate API integration for all documents
            </div>
            <div className="timeline-item">
              <strong>Months 2-3:</strong> Community review system for translation accuracy
            </div>
            <div className="timeline-item">
              <strong>Months 4-6:</strong> Priority language verification (Spanish, Chinese, Arabic)
            </div>
            <div className="timeline-item">
              <strong>Ongoing:</strong> Community-submitted translation improvements
            </div>
          </div>
        </div>

        <div className="engagement-section">
          <h2>Workforce Development Program</h2>
          <p>
            Creating 15-20 part-time positions within communities to support the Policy Library:
          </p>
          <div className="workforce-grid">
            <div className="workforce-item">
              <h3>Community Document Curators</h3>
              <p>Local experts who identify and verify documents relevant to their communities</p>
              <p><strong>Positions:</strong> 10 roles at $25/hour, 10 hours/week</p>
            </div>
            <div className="workforce-item">
              <h3>Technical Assistance Coordinators</h3>
              <p>Bridge between Policy Library and community organizations needing integration support</p>
              <p><strong>Positions:</strong> 5 roles at $30/hour, 15 hours/week</p>
            </div>
            <div className="workforce-item">
              <h3>Community Trainers</h3>
              <p>Conduct workshops and bootcamps for CBOs on using the Policy Library</p>
              <p><strong>Positions:</strong> 5 roles, project-based at $500/workshop</p>
            </div>
          </div>
        </div>

        <div className="engagement-section">
          <h2>Universal Document Accessibility</h2>
          <div className="accessibility-features">
            <h3>Multiple Format Support</h3>
            <ul>
              <li><strong>Automatic Text Extraction:</strong> All PDFs processed with pdf2text to create searchable plaintext versions</li>
              <li><strong>Screen Reader Compatible:</strong> Plaintext versions ensure full accessibility for vision-impaired users</li>
              <li><strong>Low-Bandwidth Access:</strong> Text versions load 100x faster than PDFs on slow connections</li>
              <li><strong>API Flexibility:</strong> Serve documents as PDF, plaintext, HTML, or JSON based on client needs</li>
              <li><strong>Offline Packages:</strong> Compressed text bundles for entire programs/jurisdictions</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <ul>
              <li><strong>pdf2text Pipeline:</strong> Automatic extraction on document ingestion</li>
              <li><strong>OCR Fallback:</strong> Tesseract OCR for scanned/image-based PDFs</li>
              <li><strong>Structure Preservation:</strong> Maintain headings, tables, and lists in plaintext</li>
              <li><strong>Metadata Extraction:</strong> Pull dates, titles, and references automatically</li>
              <li><strong>Version Control:</strong> Track both PDF and text versions in Git</li>
            </ul>
          </div>
        </div>

        <div className="engagement-section">
          <h2>Digital Equity Initiatives</h2>
          <ul>
            <li><strong>Universal Translation:</strong> Google Translate API for 100+ languages with community verification</li>
            <li><strong>Library Partnerships:</strong> Integration with public library systems for community access</li>
            <li><strong>Mobile Optimization:</strong> Full functionality on low-bandwidth mobile connections</li>
            <li><strong>Community Tech Centers:</strong> Partner with existing centers for training and access</li>
            <li><strong>Print-Friendly Formats:</strong> All documents available in printer-optimized versions</li>
          </ul>
        </div>

        <div className="engagement-section">
          <h2>Capacity Building for Community Organizations</h2>
          <div className="capacity-grid">
            <div className="capacity-item">
              <h3>No-Code Integration Tools</h3>
              <p>Simple widgets and embeds that require no technical expertise</p>
            </div>
            <div className="capacity-item">
              <h3>CBO Bootcamps</h3>
              <p>Monthly training sessions on leveraging Policy Library for client services</p>
            </div>
            <div className="capacity-item">
              <h3>Micro-Grants Program</h3>
              <p>$1,000-$5,000 grants for CBOs to integrate Policy Library into their workflows</p>
            </div>
            <div className="capacity-item">
              <h3>Partner Support Network</h3>
              <p>Peer-to-peer learning community for organizations using Policy Library</p>
            </div>
          </div>
        </div>

        <div className="engagement-section">
          <h2>Equity Impact Framework</h2>
          <p>
            We will measure and report on differential impact across communities:
          </p>
          <ul>
            <li>Document coverage by language and community need</li>
            <li>Usage patterns across different demographic groups</li>
            <li>Time savings for organizations serving marginalized communities</li>
            <li>Accessibility audit results and improvements</li>
            <li>Community feedback integration metrics</li>
          </ul>
          <p>
            Quarterly equity reports will be published publicly with input from the Community Advisory Board.
          </p>
        </div>

        <div className="engagement-section budget-section">
          <h2>Enhanced Budget for Community Engagement</h2>
          <table className="budget-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Original</th>
                <th>Enhanced</th>
                <th>Addition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personnel</td>
                <td>$405,000</td>
                <td>$445,000</td>
                <td>+$40,000</td>
              </tr>
              <tr>
                <td>Community Engagement</td>
                <td>$60,000</td>
                <td>$85,000</td>
                <td>+$25,000</td>
              </tr>
              <tr>
                <td>Infrastructure</td>
                <td>$18,000</td>
                <td>$30,000</td>
                <td>+$12,000</td>
              </tr>
              <tr>
                <td>Contingency</td>
                <td>$15,000</td>
                <td>$15,000</td>
                <td>$0</td>
              </tr>
              <tr className="total-row">
                <td><strong>Total</strong></td>
                <td><strong>$498,000</strong></td>
                <td><strong>$575,000</strong></td>
                <td><strong>+$77,000</strong></td>
              </tr>
            </tbody>
          </table>
          <p className="budget-note">
            The enhanced budget addresses all reviewer concerns while staying well within PBIF's 
            funding range, representing high-leverage investments in community engagement and equity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityEngagement;