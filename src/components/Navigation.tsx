import PolicyEngineLogo from './PolicyEngineLogo';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  // Only show sensitive sections if they're already active (accessed via URL)
  const showAllSections = ['partners', 'application', 'engine'].includes(activeSection);

  const publicItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'demo', label: 'Mock-up' },
    { id: 'partners', label: 'Partners' },
    { id: 'civic-tech', label: 'Community' },
  ];

  const allItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'demo', label: 'Mock-up' },
    { id: 'partners', label: 'Partners' },
    { id: 'application', label: 'PBIF Application' },
    { id: 'civic-tech', label: 'Community' },
    { id: 'engine', label: 'ENG(INE) Application' },
  ];

  const navItems = showAllSections ? allItems : publicItems;

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
