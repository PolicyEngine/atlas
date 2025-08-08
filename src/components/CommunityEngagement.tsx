function CommunityEngagement() {
  return (
    <div className="section">
      <div className="content">
        <h1>Community Engagement & Equity</h1>
        
        <div className="engagement-section">
          <h2>Community Document Discovery</h2>
          <p>
            The primary community contribution is identifying which documents matter for their specific needs:
          </p>
          <ul>
            <li><strong>Document Requests:</strong> "We need the SNAP vehicle asset limit policy for Illinois"</li>
            <li><strong>Missing Coverage:</strong> "The childcare copayment schedule isn't archived yet"</li>
            <li><strong>Update Alerts:</strong> "This WIC food list changed last month"</li>
            <li><strong>Dead Link Reports:</strong> "The Medicaid application form URL broke"</li>
            <li><strong>Priority Ranking:</strong> Which documents are most frequently needed</li>
          </ul>
          <p className="highlight-box">
            <strong>What communities DON'T do:</strong> Edit legal text, verify legal accuracy, or 
            interpret regulations. These are preserved exactly as published by government agencies. 
            Community input is about discovery and prioritization, not content modification.
          </p>
        </div>

        <div className="engagement-section">
          <h2>Translation: Let Chrome Handle It</h2>
          <p className="highlight-box">
            <strong>Simple Reality:</strong> Chrome already translates web pages automatically. 
            Users needing Spanish, Chinese, or any other language just right-click → "Translate to [Language]". 
            We serve documents in their official English form. Chrome/Edge/Safari handle translation. 
            No API costs, no complexity, no maintenance. This is how millions of immigrants already 
            navigate government websites.
          </p>
          <p>
            <strong>What we actually do:</strong> Ensure documents are text-based (not scanned images) 
            so browser translation works. That's it. The technology already exists and users already 
            know how to use it.
          </p>
        </div>

        <div className="engagement-section">
          <h2>Realistic Community Roles</h2>
          <p>
            Limited but impactful positions focused on actual community needs:
          </p>
          <div className="workforce-grid">
            <div className="workforce-item">
              <h3>Document Scouts (2-3 positions)</h3>
              <p>Monitor state agency websites for new documents and policy changes</p>
              <p><strong>Tasks:</strong> Submit URLs, report broken links, flag updates</p>
              <p><strong>Pay:</strong> $20/hour, 5-10 hours/week</p>
            </div>
            <div className="workforce-item">
              <h3>API Integration Support (1-2 positions)</h3>
              <p>Help benefits organizations integrate the Policy Library API</p>
              <p><strong>Tasks:</strong> Technical support, documentation, training</p>
              <p><strong>Pay:</strong> $30/hour, as-needed basis</p>
            </div>
          </div>
          <p className="highlight-box">
            <strong>Reality Check:</strong> Most "community engagement" around legal documents is 
            performative. The real value is in preserving documents reliably and making them 
            accessible via API. Communities need the documents to exist and be findable, not to 
            edit or verify them.
          </p>
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
          <h2>What Organizations Actually Need</h2>
          <div className="capacity-grid">
            <div className="capacity-item">
              <h3>Reliable API</h3>
              <p>Documents that never disappear with consistent URLs</p>
            </div>
            <div className="capacity-item">
              <h3>Simple Integration</h3>
              <p>Basic REST endpoints with good documentation</p>
            </div>
            <div className="capacity-item">
              <h3>Search That Works</h3>
              <p>Find documents by program, state, date, or keyword</p>
            </div>
            <div className="capacity-item">
              <h3>Change Notifications</h3>
              <p>Webhooks when documents they care about update</p>
            </div>
          </div>
          <p>
            <strong>Skip the theater:</strong> No advisory boards discussing documents they can't change. 
            No complex governance structures. Just reliable infrastructure that works.
          </p>
        </div>

        <div className="engagement-section">
          <h2>Actual Equity Metrics That Matter</h2>
          <ul>
            <li><strong>Coverage:</strong> Are all safety net programs in all states archived?</li>
            <li><strong>Accessibility:</strong> Do documents load on slow connections? Work with screen readers?</li>
            <li><strong>Availability:</strong> Is the API free for nonprofits? No rate limits for community orgs?</li>
            <li><strong>Languages:</strong> Which languages are actually being requested via the API?</li>
            <li><strong>Uptime:</strong> Can organizations rely on this infrastructure 24/7?</li>
          </ul>
          <p className="highlight-box">
            <strong>The best equity work is invisible:</strong> When infrastructure just works, 
            organizations can focus on helping families instead of fixing broken links.
          </p>
        </div>

        <div className="engagement-section budget-section">
          <h2>Realistic Budget</h2>
          <p className="highlight-box">
            <strong>Keep the original $498,000 budget.</strong> The "enhanced" community engagement 
            budget was mostly theater. The money is better spent on:
          </p>
          <ul>
            <li><strong>More engineering time:</strong> Build robust crawlers and APIs</li>
            <li><strong>Better infrastructure:</strong> Handle scale and ensure uptime</li>
            <li><strong>Document scouts:</strong> 2-3 people finding documents (maybe $30K total)</li>
            <li><strong>OCR/pdf2text tools:</strong> Make all documents searchable</li>
          </ul>
          <p>
            <strong>The truth:</strong> Good infrastructure IS equity work. When the API never goes down 
            and documents never disappear, that helps vulnerable communities more than any advisory board.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityEngagement;