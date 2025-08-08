import React, { useState } from 'react';
import './App.css';
import Overview from './components/Overview';
import Demo from './components/Demo';
import Partners from './components/Partners';
import Proposal from './components/Proposal';
import PBIFApplication from './components/PBIFApplication';
import ENGINEApplication from './components/ENGINEApplication';
import Navigation from './components/Navigation';
import LayoutTest from './components/LayoutTest';

function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showDebug, setShowDebug] = useState(false); // Press 'd' to toggle debug panel
  
  // Add keyboard shortcut for debug panel
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'd' && e.ctrlKey) {
        e.preventDefault();
        setShowDebug(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {activeSection === 'overview' && <Overview />}
        {activeSection === 'demo' && <Demo />}
        {activeSection === 'partners' && <Partners />}
        {activeSection === 'proposal' && <Proposal />}
        {activeSection === 'application' && <PBIFApplication />}
        {activeSection === 'engine' && <ENGINEApplication />}
      </main>
      
      {showDebug && <LayoutTest />}

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
          <em>Application Deadline: August 16, 2025, 11:59 PM PT</em>
        </div>
      </footer>
    </div>
  );
}

export default App;
