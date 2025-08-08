function CivicTechEngagement() {
  return (
    <div className="section">
      <div className="content">
        <h2 className="section-title">Civic Tech Community Partnership</h2>

        <div className="civic-intro">
          <p>
            The Policy Library is built with and for the civic tech community. Former Code for
            America brigades, civic hackers, and volunteer technologists provide the distributed
            infrastructure needed to monitor 50+ jurisdictions effectively.
          </p>
        </div>

        <div className="civic-grid">
          <div className="civic-card">
            <h3>🔍 Document Discovery</h3>
            <p>
              Local civic tech groups know their jurisdictions best. They identify critical
              documents that automated crawlers might miss, flag broken links, and verify that we're
              capturing what matters for their communities.
            </p>
            <div className="civic-examples">
              <strong>Active Groups:</strong>
              <ul>
                <li>Code for Boston - Massachusetts regulations</li>
                <li>Chi Hack Night - Illinois SNAP/TANF docs</li>
                <li>OpenOakland - California county variations</li>
                <li>Code for Philly - Pennsylvania forms</li>
              </ul>
            </div>
          </div>

          <div className="civic-card">
            <h3>🛠️ Technical Contributions</h3>
            <p>
              Developers contribute jurisdiction-specific crawlers, improve extraction scripts, and
              build local tools using the API. Every contribution is recognized in our public
              contributors list.
            </p>
            <div className="civic-code">
              <pre>
                {`# Example: Volunteer-built NYC crawler
class NYCBenefitsSpider(PolicySpider):
    """Maintained by NYC Mesh volunteers"""
    
    def parse_snap_docs(self):
        # Local knowledge of NYC site structure
        return self.extract_from_hra_portal()`}
              </pre>
            </div>
          </div>

          <div className="civic-card">
            <h3>📊 Data Validation</h3>
            <p>
              Monthly data validation sprints where volunteers verify document accuracy, check for
              updates, and ensure coverage completeness. Groups earn recognition badges for their
              jurisdiction's data quality.
            </p>
            <div className="civic-stats">
              <div className="stat-item">
                <strong>15+</strong> Active civic tech groups
              </div>
              <div className="stat-item">
                <strong>200+</strong> Volunteer contributors
              </div>
              <div className="stat-item">
                <strong>30</strong> States with local maintainers
              </div>
            </div>
          </div>
        </div>

        <div className="civic-involvement">
          <h3>How to Get Involved</h3>
          <div className="involvement-options">
            <div className="involvement-item">
              <h4>For Civic Tech Groups</h4>
              <ul>
                <li>Adopt your jurisdiction for ongoing maintenance</li>
                <li>Host document discovery workshops</li>
                <li>Contribute crawlers and extractors</li>
                <li>Organize validation sprints</li>
              </ul>
            </div>
            <div className="involvement-item">
              <h4>For Individual Volunteers</h4>
              <ul>
                <li>Report missing or broken documents via GitHub</li>
                <li>Review pull requests for your state</li>
                <li>Write documentation and guides</li>
                <li>Test API integrations</li>
              </ul>
            </div>
            <div className="involvement-item">
              <h4>For Organizations</h4>
              <ul>
                <li>Sponsor local civic tech maintainers</li>
                <li>Provide infrastructure resources</li>
                <li>Share document requirements</li>
                <li>Co-host community events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="civic-recognition">
          <h3>Community Recognition</h3>
          <p>
            We believe in recognizing the critical work of civic technologists. Contributors earn:
          </p>
          <ul>
            <li>Public attribution in our contributors database</li>
            <li>Jurisdiction maintainer badges for sustained contributions</li>
            <li>Annual awards for exceptional volunteer efforts</li>
            <li>Priority support for civic tech projects using the API</li>
            <li>Speaking opportunities at PolicyEngine events</li>
          </ul>
        </div>

        <div className="civic-impact">
          <div className="impact-quote">
            <blockquote>
              "Civic tech groups are the backbone of this infrastructure. They provide the local
              knowledge and sustained attention that no automated system can match. This isn't
              charity—it's recognizing that distributed, community-maintained infrastructure is more
              resilient than any centralized system."
            </blockquote>
            <cite>— PolicyEngine Team</cite>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CivicTechEngagement;
