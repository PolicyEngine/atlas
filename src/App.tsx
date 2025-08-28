import { useState, useEffect } from 'react';
import './App.css';
import Overview from './components/Overview';
import Demo from './components/Demo';
import Partners from './components/Partners';
import PBIFApplication from './components/PBIFApplication';
import ENGINEApplication from './components/ENGINEApplication';
import CivicTechEngagement from './components/CivicTechEngagement';
import Navigation from './components/Navigation';

function App() {
  // Check URL hash for section
  const getInitialSection = () => {
    const hash = window.location.hash.slice(1); // Remove #
    // Only allow these sections via URL
    const allowedSections = ['overview', 'demo', 'civic-tech', 'partners', 'application', 'engine'];
    if (hash && allowedSections.includes(hash)) {
      return hash;
    }
    // Default to overview, hide sensitive sections unless explicitly requested
    return 'overview';
  };

  const [activeSection, setActiveSection] = useState<string>(getInitialSection());

  // Update URL when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (section === 'overview') {
      // Clear hash for overview (default)
      window.location.hash = '';
    } else {
      window.location.hash = section;
    }
  };

  // Handle browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getInitialSection());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={handleSectionChange} />

      <main>
        {activeSection === 'overview' && <Overview />}
        {activeSection === 'demo' && <Demo />}
        {activeSection === 'partners' && <Partners />}
        {activeSection === 'application' && <PBIFApplication />}
        {activeSection === 'civic-tech' && <CivicTechEngagement />}
        {activeSection === 'engine' && <ENGINEApplication />}
      </main>

      <footer className="footer">
        <h3 className="footer-title">Ready to Build America's Policy Infrastructure?</h3>
        <div className="footer-contact">
          <strong>Max Ghenis, CEO</strong>
          <br />
          <a href="mailto:max@policyengine.org">max@policyengine.org</a> •
          <a href="https://policyengine.org" target="_blank" rel="noopener noreferrer">
            {' '}
            policyengine.org
          </a>
          <br />
          <br />
        </div>
      </footer>
    </div>
  );
}

export default App;
