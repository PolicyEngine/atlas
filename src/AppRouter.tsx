import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationRouter from './components/NavigationRouter';
import Overview from './components/Overview';
import Demo from './components/Demo';
import Partners from './components/Partners';
import PBIFApplication from './components/PBIFApplication';
import ENGINEApplication from './components/ENGINEApplication';
import CivicTechEngagement from './components/CivicTechEngagement';
import './App.css';

function AppRouter() {
  return (
    <BrowserRouter basename="/policy-library">
      <div className="app">
        <NavigationRouter />

        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/community" element={<CivicTechEngagement />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/application" element={<PBIFApplication />} />
            <Route path="/engine" element={<ENGINEApplication />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
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
    </BrowserRouter>
  );
}

export default AppRouter;
