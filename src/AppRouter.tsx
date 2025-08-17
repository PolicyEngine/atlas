import { BrowserRouter } from 'react-router-dom';
import NavigationRouter from './components/NavigationRouter';
import AppRoutes from './AppRoutes';
import './App.css';

function AppRouter() {
  return (
    <BrowserRouter basename="/atlas">
      <div className="app">
        <NavigationRouter />

        <main>
          <AppRoutes />
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
