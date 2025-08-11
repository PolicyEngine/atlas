import { Link, useLocation } from 'react-router-dom';
import PolicyEngineLogo from './PolicyEngineLogo';

function NavigationRouter() {
  const location = useLocation();

  // Only show sensitive sections if user navigated to them directly
  const showAllSections = ['/partners', '/application', '/engine'].includes(location.pathname);

  const publicItems = [
    { path: '/', label: 'Overview' },
    { path: '/demo', label: 'Mock-up' },
    { path: '/community', label: 'Community' },
  ];

  const allItems = [
    { path: '/', label: 'Overview' },
    { path: '/demo', label: 'Mock-up' },
    { path: '/partners', label: 'Partners' },
    { path: '/application', label: 'PBIF Application' },
    { path: '/community', label: 'Community' },
    { path: '/engine', label: 'ENG(INE) Application' },
  ];

  const navItems = showAllSections ? allItems : publicItems;

  return (
    <nav className="nav-container">
      <div className="nav">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <PolicyEngineLogo />
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationRouter;
