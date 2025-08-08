import { useState } from 'react';
import partnersData from '../data/partners.yaml?raw';
import yaml from 'js-yaml';

interface Partner {
  name: string;
  full_name: string;
  category: string;
  logo: string;
  involvement: string;
  contributions: string[];
  status: string;
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
  const categories = [...new Set(partners.map(p => p.category))];

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
              <div className="partner-stat-number">{partners.filter(p => p.status.includes('Active')).length}</div>
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
                <div className="partner-logo">{partner.logo}</div>
                <div className="partner-name">{partner.name}</div>
                <div className="partner-type">{partner.category}</div>
                <div className="partner-status-badge">{partner.status}</div>
              </div>
            ))}
          </div>

          {selectedPartner && (
            <div className="partner-modal" onClick={() => setSelectedPartner(null)}>
              <div className="partner-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedPartner(null)}>×</button>
                
                <div className="modal-header">
                  <div className="modal-logo">{selectedPartner.logo}</div>
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
                  <p>{selectedPartner.involvement}</p>
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