import { useState } from 'react';
import './App.css';
import Overview from './components/Overview';
import Demo from './components/Demo';
import Partners from './components/Partners';
import PBIFApplication from './components/PBIFApplication';
import ENGINEApplication from './components/ENGINEApplication';
import CivicTechEngagement from './components/CivicTechEngagement';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

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
          <em>Application Deadline: August 16, 2025, 11:59 PM PT</em>
        </div>
      </footer>
    </div>
  );
}

export default App;
