import PolicyEngineLogo from './PolicyEngineLogo';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'demo', label: 'Mock-up' },
    { id: 'partners', label: 'Partners' },
    { id: 'community', label: 'Community' },
    { id: 'application', label: 'PBIF Application' },
    { id: 'engine', label: 'ENG(INE) Application' },
  ];

  return (
    <nav className="nav-container">
      <div className="nav">
        <a href="#" className="logo" style={{ textDecoration: 'none' }}>
          <PolicyEngineLogo />
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
