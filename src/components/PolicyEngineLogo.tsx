const PolicyEngineLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src="/policy-library/policyengine-logo.png"
        alt="PolicyEngine Icon"
        style={{ height: '32px', width: '32px' }}
      />
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#2C6496',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          POLICY
        </span>
        <span
          style={{
            width: '30px',
            height: '3px',
            backgroundColor: '#D8E6F3',
            margin: '0 6px',
            alignSelf: 'center',
          }}
        ></span>
        <span
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#2C6496',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          ENGINE
        </span>
      </div>
    </div>
  );
};

export default PolicyEngineLogo;
