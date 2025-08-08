function ENGINEApplication() {
  return (
    <div className="section">
      <div className="content">
        <div className="engine-header">
          <h1 className="engine-title">Nonprofit ENG(INE) 2025 Application</h1>
          <p className="engine-subtitle">
            PolicyEngine's Vision for Transforming Benefits Access in America
          </p>
        </div>

        {/* Embedded Presentation */}
        <div className="engine-section">
          <div className="presentation-container" style={{ marginTop: '30px' }}>
            <iframe
              src="https://docs.google.com/presentation/d/1NTtqyQnCqU2sB8Fan9NUxb9RNoWbGg3iI7T3CdmxZLQ/embed?start=false&loop=false&delayms=3000"
              width="100%"
              height="700"
              style={{
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              title="PolicyEngine ENG(INE) Application Presentation"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ENGINEApplication;
