function ENGINEApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="engine-header">
          <h1 className="engine-title">Nonprofit ENG(INE) 2025 Application</h1>
          <p className="engine-subtitle">
            PolicyEngine's Vision for Transforming Benefits Access in America
          </p>
        </div>

        {/* Embedded Presentation */}
        <div className="engine-section">
          <h2 className="section-title">Application Presentation</h2>
          <div className="presentation-container">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQIGQdcHkJcOIh6OcRz0rLQMCJJZ7IvnYXILMJFxJGo6nAGD7t4M0EyROkA6_pVYLp0DZSoFzCVHzQN/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              width="100%"
              height="569"
              allowFullScreen={true}
              style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            ></iframe>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="engine-section">
          <h2 className="section-title">Executive Summary: Unlocking Benefits for 1 Million Americans</h2>
          <div className="engine-box">
            <p className="highlight-stat">
              We help over <strong>100,000 Americans</strong> access benefits every year, but
              broken systems waste time for families, organizations, and governments.
            </p>
            <p>
              PolicyEngine is building critical infrastructure to solve the benefits access crisis.
              Our AI-powered Policy Library creates permanent archives of benefit rules, ensuring
              that fragile URLs and vanishing documents no longer block access to benefits.
            </p>
            <p>
              <strong>Our approach:</strong> AI crawls policy documents, humans verify accuracy,
              and everyone benefits through stable, reliable access to the rules that govern
              America's safety net. Together with our partners, we aim to unlock benefits for
              <strong> ±1 million Americans</strong>.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="engine-section">
          <h2 className="section-title">Mission & Vision</h2>
          <div className="engine-box">
            <h3>Mission Statement</h3>
            <p className="mission-statement">
              To democratize policy analysis by providing free, open-source tools that make
              government policies transparent and accessible to everyone.
            </p>
            
            <h3>Vision</h3>
            <p>
              A world where every citizen, researcher, and policymaker has access to accurate,
              transparent tools to understand and improve government policies.
            </p>

            <h3>Core Values</h3>
            <ul className="values-list">
              <li><strong>Transparency:</strong> All our code and methodologies are open-source</li>
              <li><strong>Accuracy:</strong> We maintain rigorous validation standards</li>
              <li><strong>Accessibility:</strong> Free tools available to everyone</li>
              <li><strong>Non-partisan:</strong> We provide neutral analysis tools</li>
              <li><strong>Innovation:</strong> Leveraging cutting-edge technology for social good</li>
            </ul>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="engine-section">
          <h2 className="section-title">The Problem We Solve</h2>
          <div className="engine-box">
            <div className="problem-grid">
              <div className="problem-item">
                <h3>🔒 Policy Analysis is Inaccessible</h3>
                <p>
                  Traditional policy modeling tools cost millions and are only available to
                  governments and large institutions, leaving citizens unable to understand
                  policies that affect them.
                </p>
              </div>
              <div className="problem-item">
                <h3>📊 Lack of Transparency</h3>
                <p>
                  Most policy calculators are "black boxes" - users can't verify calculations
                  or understand the underlying rules and assumptions.
                </p>
              </div>
              <div className="problem-item">
                <h3>🚫 Disappearing Documentation</h3>
                <p>
                  18% of government benefit URLs from 2019 are dead today. Critical policy
                  documents vanish, making it impossible to track changes or verify eligibility.
                </p>
              </div>
              <div className="problem-item">
                <h3>⚡ Slow Policy Development</h3>
                <p>
                  Without accessible modeling tools, policy development is slow and expensive,
                  limiting innovation and evidence-based decision making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="engine-section">
          <h2 className="section-title">Our Solution</h2>
          <div className="engine-box">
            <h3>PolicyEngine Platform</h3>
            <p>
              We've built the world's first free, open-source, web-based microsimulation platform
              that anyone can use to understand government policies:
            </p>
            
            <div className="solution-features">
              <div className="feature-card">
                <h4>💻 Microsimulation Models</h4>
                <p>
                  Comprehensive models for US (federal + all 50 states), UK, and Canada that
                  calculate taxes and benefits for any household or policy reform.
                </p>
              </div>
              <div className="feature-card">
                <h4>📚 Policy Library</h4>
                <p>
                  AI-powered infrastructure to permanently archive every benefit rule, preventing
                  documentation from disappearing and ensuring reliable access.
                </p>
              </div>
              <div className="feature-card">
                <h4>🔍 Economic Impact Analysis</h4>
                <p>
                  Tools to analyze how policy changes affect poverty, inequality, government
                  budgets, and different demographic groups.
                </p>
              </div>
              <div className="feature-card">
                <h4>🤖 AI Integration</h4>
                <p>
                  LLM-powered interfaces making policy analysis accessible through natural
                  language queries and automated documentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Reach */}
        <div className="engine-section">
          <h2 className="section-title">Our Impact</h2>
          <div className="engine-box">
            <div className="impact-metrics">
              <div className="impact-metric">
                <div className="impact-number">3M+</div>
                <div className="impact-label">Users Served</div>
              </div>
              <div className="impact-metric">
                <div className="impact-number">50+</div>
                <div className="impact-label">Legislative Citations</div>
              </div>
              <div className="impact-metric">
                <div className="impact-number">100+</div>
                <div className="impact-label">Media Mentions</div>
              </div>
              <div className="impact-metric">
                <div className="impact-number">3</div>
                <div className="impact-label">Countries Covered</div>
              </div>
            </div>

            <h3>Use Cases</h3>
            <ul className="use-cases">
              <li><strong>Citizens:</strong> Calculate their taxes and benefits, understand policy changes</li>
              <li><strong>Researchers:</strong> Analyze policy impacts with transparent, reproducible methods</li>
              <li><strong>Journalists:</strong> Fact-check claims and create interactive stories</li>
              <li><strong>Policymakers:</strong> Design and test policy reforms before implementation</li>
              <li><strong>Nonprofits:</strong> Understand how policies affect their constituencies</li>
            </ul>

            <h3>Media Coverage</h3>
            <p>
              Our work has been featured in The Washington Post, The New York Times, Bloomberg,
              Financial Times, and numerous other publications, demonstrating the public need
              for accessible policy analysis tools.
            </p>
          </div>
        </div>

        {/* Programs & Activities */}
        <div className="engine-section">
          <h2 className="section-title">Programs & Activities</h2>
          <div className="engine-box">
            <div className="program-grid">
              <div className="program">
                <h3>1. Open-Source Development</h3>
                <ul>
                  <li>Maintain and expand microsimulation models</li>
                  <li>Develop new features based on community needs</li>
                  <li>Ensure all code remains freely available on GitHub</li>
                  <li>Accept and review community contributions</li>
                </ul>
              </div>
              <div className="program">
                <h3>2. Education & Training</h3>
                <ul>
                  <li>Provide documentation and tutorials</li>
                  <li>Host workshops for researchers and advocates</li>
                  <li>Support academic use in classrooms</li>
                  <li>Create educational content about policy analysis</li>
                </ul>
              </div>
              <div className="program">
                <h3>3. Research & Analysis</h3>
                <ul>
                  <li>Publish policy briefs and impact analyses</li>
                  <li>Collaborate with academic institutions</li>
                  <li>Develop new methodologies for policy modeling</li>
                  <li>Create benchmarks for AI accuracy in policy</li>
                </ul>
              </div>
              <div className="program">
                <h3>4. Community Support</h3>
                <ul>
                  <li>Provide free tools to nonprofits and advocates</li>
                  <li>Support community organizations with analysis</li>
                  <li>Partner with benefit navigators and assistance programs</li>
                  <li>Ensure equitable access to policy information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Structure */}
        <div className="engine-section">
          <h2 className="section-title">Governance Structure</h2>
          <div className="engine-box">
            <h3>Board of Directors</h3>
            <p>
              PolicyEngine will be governed by an independent Board of Directors committed to
              our nonprofit mission. The board will include experts in policy analysis, technology,
              and nonprofit governance.
            </p>

            <h3>Leadership Team</h3>
            <div className="leadership-grid">
              <div className="leader">
                <h4>Max Ghenis - Founder & CEO</h4>
                <p>
                  Former Google data scientist with MS from Stanford. Founded PolicyEngine to
                  democratize policy analysis after seeing the lack of accessible tools.
                </p>
              </div>
              <div className="leader">
                <h4>Nikhil Woodruff - Co-founder & CTO</h4>
                <p>
                  Lead architect of PolicyEngine's microsimulation infrastructure. Expert in
                  computational policy modeling and software engineering.
                </p>
              </div>
              <div className="leader">
                <h4>Pavel Makarchuk - Head of Engineering</h4>
                <p>
                  Leads development of AI integration and Policy Library. Background in machine
                  learning and distributed systems.
                </p>
              </div>
            </div>

            <h3>Advisory Board</h3>
            <p>
              We maintain an advisory board of policy experts, economists, and technologists
              who provide guidance on our technical approach and policy coverage.
            </p>
          </div>
        </div>

        {/* Financial Plan */}
        <div className="engine-section">
          <h2 className="section-title">Financial Sustainability</h2>
          <div className="engine-box">
            <h3>Revenue Model</h3>
            <p>
              As a 501(c)(3), PolicyEngine will sustain operations through a diversified
              funding model:
            </p>
            
            <div className="revenue-sources">
              <div className="revenue-item">
                <h4>🏛️ Foundation Grants (40%)</h4>
                <p>Support from foundations focused on democracy, transparency, and social good</p>
              </div>
              <div className="revenue-item">
                <h4>📊 Government Contracts (25%)</h4>
                <p>Providing analysis tools and training to government agencies</p>
              </div>
              <div className="revenue-item">
                <h4>🎓 Research Partnerships (20%)</h4>
                <p>Collaborations with universities and think tanks</p>
              </div>
              <div className="revenue-item">
                <h4>💝 Individual Donations (10%)</h4>
                <p>Support from users and advocates who value our mission</p>
              </div>
              <div className="revenue-item">
                <h4>🏢 Enterprise Support (5%)</h4>
                <p>Premium support for organizations needing custom features</p>
              </div>
            </div>

            <h3>Budget Allocation</h3>
            <ul className="budget-list">
              <li><strong>60%</strong> - Engineering and product development</li>
              <li><strong>15%</strong> - Infrastructure and hosting</li>
              <li><strong>10%</strong> - Community support and education</li>
              <li><strong>10%</strong> - Operations and administration</li>
              <li><strong>5%</strong> - Research and partnerships</li>
            </ul>

            <h3>Commitment to Free Access</h3>
            <p className="commitment">
              All core PolicyEngine tools will remain free forever. Revenue will support
              development, maintenance, and expansion of free tools, not create paywalls.
            </p>
          </div>
        </div>

        {/* Public Benefit */}
        <div className="engine-section">
          <h2 className="section-title">Public Benefit & 501(c)(3) Qualification</h2>
          <div className="engine-box">
            <h3>Educational Purpose</h3>
            <p>
              PolicyEngine advances education by providing tools and resources that help the
              public understand complex government policies. We make policy analysis accessible
              to everyone, not just experts.
            </p>

            <h3>Scientific Research</h3>
            <p>
              We conduct and facilitate scientific research in public policy, developing new
              methodologies for policy analysis and making research tools freely available to
              the academic community.
            </p>

            <h3>Charitable Purpose</h3>
            <p>
              Our tools help vulnerable populations understand and access benefits they're
              entitled to, supporting the charitable purpose of relieving poverty and distress.
            </p>

            <h3>Non-partisan Nature</h3>
            <p>
              PolicyEngine is strictly non-partisan. We provide neutral analysis tools that can
              be used to evaluate any policy proposal, regardless of political affiliation. We
              do not advocate for specific policies or candidates.
            </p>

            <div className="qualification-grid">
              <div className="qualification">
                <h4>✅ Organized Exclusively for Exempt Purposes</h4>
                <p>All activities advance education, research, and charitable purposes</p>
              </div>
              <div className="qualification">
                <h4>✅ No Private Inurement</h4>
                <p>No earnings benefit private individuals or shareholders</p>
              </div>
              <div className="qualification">
                <h4>✅ No Political Campaign Activity</h4>
                <p>We do not participate in political campaigns or endorse candidates</p>
              </div>
              <div className="qualification">
                <h4>✅ Limited Lobbying</h4>
                <p>We focus on education and tools, not legislative advocacy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Supporters */}
        <div className="engine-section">
          <h2 className="section-title">Partners & Collaborators</h2>
          <div className="engine-box">
            <div className="partner-categories">
              <div className="partner-category">
                <h3>Academic Institutions</h3>
                <ul>
                  <li>Georgetown University McCourt School</li>
                  <li>University of Michigan</li>
                  <li>Columbia University</li>
                  <li>MIT</li>
                </ul>
              </div>
              <div className="partner-category">
                <h3>Research Organizations</h3>
                <ul>
                  <li>Atlanta Federal Reserve</li>
                  <li>Urban Institute</li>
                  <li>Tax Policy Center</li>
                  <li>Center on Budget and Policy Priorities</li>
                </ul>
              </div>
              <div className="partner-category">
                <h3>Nonprofit Partners</h3>
                <ul>
                  <li>Code for America</li>
                  <li>Benefits Data Trust</li>
                  <li>MyFriendBen</li>
                  <li>Georgia Center for Opportunity</li>
                </ul>
              </div>
              <div className="partner-category">
                <h3>Technology Partners</h3>
                <ul>
                  <li>Google Cloud Platform</li>
                  <li>GitHub</li>
                  <li>Anthropic</li>
                  <li>OpenAI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline & Milestones */}
        <div className="engine-section">
          <h2 className="section-title">Timeline & Future Plans</h2>
          <div className="engine-box">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                  <h4>Founded</h4>
                  <p>PolicyEngine launched with UK microsimulation model</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h4>US Expansion</h4>
                  <p>Launched comprehensive US federal and state models</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2023</div>
                <div className="timeline-content">
                  <h4>Scale & Impact</h4>
                  <p>Reached 3M users, cited in 50+ legislative proceedings</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2024</div>
                <div className="timeline-content">
                  <h4>AI Integration</h4>
                  <p>Launched Policy Library and LLM-powered analysis tools</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2025</div>
                <div className="timeline-content">
                  <h4>Nonprofit Transition</h4>
                  <p>501(c)(3) status to ensure long-term sustainability and public benefit</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2026-2027</div>
                <div className="timeline-content">
                  <h4>Global Expansion</h4>
                  <p>Expand to 10+ countries, multilingual support, enhanced AI capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="engine-section closing">
          <h2 className="section-title">Why PolicyEngine as a Nonprofit</h2>
          <div className="engine-box">
            <p className="closing-statement">
              Policy analysis tools are critical infrastructure for democracy. They should be
              free, transparent, and accessible to everyone - not locked behind paywalls or
              controlled by private interests.
            </p>
            <p className="closing-statement">
              As a 501(c)(3) nonprofit, PolicyEngine will be permanently committed to the public
              good. Our tools will remain free forever, our code will stay open-source, and our
              mission will always be to democratize policy analysis for everyone.
            </p>
            <p className="closing-statement">
              We've already demonstrated the massive public need for these tools with 3 million
              users. With nonprofit status, we can ensure this critical infrastructure remains
              available to citizens, researchers, journalists, and policymakers for generations
              to come.
            </p>
            <div className="support-box">
              <h3>Support Our Mission</h3>
              <p>
                Help us build a more transparent and accessible democracy. Your support enables
                us to keep PolicyEngine free for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ENGINEApplication;