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
              src="https://docs.google.com/presentation/d/e/2PACX-1vQIGQdcHkJcOIh6OcRz0rLQMCJJZ7IvnYXILMJFxJGo6nAGD7t4M0EyROkA6_pVYLp0DZSoFzCVHzQN/embed?start=false&loop=false&delayms=3000"
              width="100%"
              height="700"
              style={{ 
                border: 'none',
                borderRadius: '8px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
              }}
              title="PolicyEngine ENG(INE) Application Presentation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ENGINEApplication;