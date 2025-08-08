import { useState } from 'react';
import partnersData from '../data/partners.yaml?raw';
import yaml from 'js-yaml';
import ReactMarkdown from 'react-markdown';

interface Partner {
  name: string;
  full_name: string;
  category: string;
  logo: string;
  involvement: string;
  contributions: string[];
  status: string;
  mou_link?: string;
}

interface PartnersYAML {
  partners: Partner[];
}

function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Parse YAML data
  const data = yaml.load(partnersData) as PartnersYAML;
  const partners = data.partners;

  // Group partners by category for display
  const categories = [...new Set(partners.map((p) => p.category))];

  return (
    <div className="section">
      <div className="content">
        <div className="partners-container">
          <h2 className="partners-title">Our Partner Organizations</h2>
          <p className="partners-subtitle">
            Leading institutions collaborating to transform benefits access in America
          </p>

          <div className="partners-stats">
            <div className="partner-stat">
              <div className="partner-stat-number">{partners.length}</div>
              <div className="partner-stat-label">Partner Organizations</div>
            </div>
            <div className="partner-stat">
              <div className="partner-stat-number">
                {partners.filter((p) => p.status.includes('Active')).length}
              </div>
              <div className="partner-stat-label">Active Contributors</div>
            </div>
            <div className="partner-stat">
              <div className="partner-stat-number">{categories.length}</div>
              <div className="partner-stat-label">Sectors Represented</div>
            </div>
          </div>

          <div className="partners-logo-grid">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-logo-item"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="partner-logo">
                  {partner.logo.startsWith('/') ? (
                    <img
                      src={`/policy-library${partner.logo}`}
                      alt={partner.name}
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.textContent = partner.name
                          .split(' ')
                          .map((w) => w[0])
                          .join('');
                        fallback.style.fontSize = '24px';
                        fallback.style.fontWeight = 'bold';
                        fallback.style.color = '#2C6496';
                        target.parentElement?.appendChild(fallback);
                      }}
                    />
                  ) : (
                    <span>{partner.logo}</span>
                  )}
                </div>
                <div className="partner-name">{partner.name}</div>
                <div className="partner-type">{partner.category}</div>
                <div className="partner-status-badge">{partner.status}</div>
              </div>
            ))}
          </div>

          {selectedPartner && (
            <div className="partner-modal" onClick={() => setSelectedPartner(null)}>
              <div className="partner-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedPartner(null)}>
                  ×
                </button>

                <div className="modal-header">
                  <div className="modal-logo">
                    {selectedPartner.logo.startsWith('/') ? (
                      <img
                        src={`/policy-library${selectedPartner.logo}`}
                        alt={selectedPartner.name}
                        style={{ maxHeight: '64px', maxWidth: '200px' }}
                      />
                    ) : (
                      <span>{selectedPartner.logo}</span>
                    )}
                  </div>
                  <div>
                    <h3>{selectedPartner.full_name}</h3>
                    <div className="modal-badges">
                      <span className="partner-type">{selectedPartner.category}</span>
                      <span className="partner-status-badge">{selectedPartner.status}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Partnership Overview</h4>
                  <ReactMarkdown>{selectedPartner.involvement}</ReactMarkdown>
                  {selectedPartner.mou_link && (
                    <a
                      href={selectedPartner.mou_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '15px',
                        padding: '8px 16px',
                        background: '#39c6c0',
                        color: 'white',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      View MOU →
                    </a>
                  )}
                </div>

                <div className="modal-section">
                  <h4>Key Contributions</h4>
                  <ul className="contributions-list">
                    {selectedPartner.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partners;
