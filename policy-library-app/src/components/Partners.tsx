function Partners() {
  const partnerCategories = [
    {
      title: 'Research Institutions',
      partners: ['Georgetown University', 'University of Michigan', 'NBER', 'USC']
    },
    {
      title: 'Direct Service',
      partners: ['MyFriendBen', 'Benefit Navigator', 'Navvy', 'Benefit Kitchen']
    },
    {
      title: 'Government',
      partners: ['Atlanta Fed (advisor)', 'DC DHS', 'Arizona DES', 'State agencies']
    },
    {
      title: 'Policy Centers',
      partners: ['Prenatal-to-3 Policy Impact', 'Georgia Center for Opportunity', 'Urban Institute', 'Center for Civic Futures']
    }
  ];

  return (
    <div className="section">
      <div className="content">
        <div className="partners-container">
          <h2 className="partners-title">Partnership Ecosystem</h2>
          <div className="partners-grid">
            {partnerCategories.map((category, index) => (
              <div key={index} className="partner-category">
                <div className="partner-category-title">{category.title}</div>
                <div className="partner-list">
                  {category.partners.map((partner, idx) => (
                    <div key={idx}>{partner}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;