function Partners() {
  const partners = [
    { name: 'Georgetown University', logo: '🎓', category: 'Research' },
    { name: 'University of Michigan', logo: '🏛️', category: 'Research' },
    { name: 'NBER', logo: '📊', category: 'Research' },
    { name: 'USC', logo: '🔬', category: 'Research' },
    { name: 'Atlanta Federal Reserve', logo: '🏦', category: 'Government' },
    { name: 'MyFriendBen', logo: '💚', category: 'Direct Service' },
    { name: 'Benefit Navigator', logo: '🧭', category: 'Direct Service' },
    { name: 'Navvy', logo: '⚓', category: 'Direct Service' },
    { name: 'Benefit Kitchen', logo: '🍳', category: 'Direct Service' },
    { name: 'Urban Institute', logo: '🏙️', category: 'Policy' },
    { name: 'Georgia Center for Opportunity', logo: '🍑', category: 'Policy' },
    { name: 'Prenatal-to-3 Policy Impact', logo: '👶', category: 'Policy' },
    { name: 'DC DHS', logo: '🏛️', category: 'Government' },
    { name: 'Arizona DES', logo: '🌵', category: 'Government' },
    { name: 'Center for Civic Futures', logo: '🌐', category: 'Policy' },
  ];

  return (
    <div className="section">
      <div className="content">
        <div className="partners-container">
          <h2 className="partners-title">Our Partner Organizations</h2>
          <p className="partners-subtitle">
            Leading institutions collaborating to transform benefits access in America
          </p>
          <div className="partners-logo-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo-item">
                <div className="partner-logo">{partner.logo}</div>
                <div className="partner-name">{partner.name}</div>
                <div className="partner-type">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
