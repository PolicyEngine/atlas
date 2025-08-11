function AccessInfo() {
  const baseUrl = window.location.origin + window.location.pathname;

  return (
    <div className="section">
      <div className="content">
        <div
          style={{
            background: 'var(--blue-98)',
            padding: '30px',
            borderRadius: '12px',
            marginTop: '40px',
          }}
        >
          <h3 style={{ color: 'var(--blue-pressed)', marginBottom: '20px' }}>Direct Access URLs</h3>
          <p style={{ marginBottom: '20px', color: 'var(--dark-gray)' }}>
            To access specific sections of the application, use these URLs:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>PBIF Application:</strong>{' '}
              <a href={`${baseUrl}?section=application`} style={{ color: 'var(--blue)' }}>
                {baseUrl}?section=application
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Partners:</strong>{' '}
              <a href={`${baseUrl}?section=partners`} style={{ color: 'var(--blue)' }}>
                {baseUrl}?section=partners
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>ENGINE Application:</strong>{' '}
              <a href={`${baseUrl}?section=engine`} style={{ color: 'var(--blue)' }}>
                {baseUrl}?section=engine
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccessInfo;
