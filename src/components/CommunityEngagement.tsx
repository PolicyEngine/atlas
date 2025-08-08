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
          <h2>Accelerated Multilingual Support</h2>
          <p className="highlight-box">
            <strong>Year 1 Commitment:</strong> Spanish language support will launch within 12 months, 
            serving the 13% of Americans who are Spanish speakers. We're partnering with UnidosUS 
            and local Latino-serving organizations for translation verification and cultural adaptation.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <strong>Months 1-3:</strong> Community language needs assessment
            </div>
            <div className="timeline-item">
              <strong>Months 4-6:</strong> Spanish translation and verification
            </div>
            <div className="timeline-item">
              <strong>Months 7-9:</strong> Spanish interface development and testing
            </div>
            <div className="timeline-item">
              <strong>Months 10-12:</strong> Spanish launch with community training
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
          <h2>Digital Equity Initiatives</h2>
          <ul>
            <li><strong>Offline Access:</strong> Downloadable document packages for areas with limited internet</li>
            <li><strong>Library Partnerships:</strong> Integration with public library systems for community access</li>
            <li><strong>Print-Friendly Formats:</strong> All documents available in printer-optimized versions</li>
            <li><strong>Mobile Optimization:</strong> Full functionality on low-bandwidth mobile connections</li>
            <li><strong>Community Tech Centers:</strong> Partner with existing centers for training and access</li>
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