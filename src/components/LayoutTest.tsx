import { useEffect, useState } from 'react';

function LayoutTest() {
  const [measurements, setMeasurements] = useState<{
    viewportWidth: number;
    appWidth: number;
    navWidth: number;
    contentWidth: number;
    heroWidth: number;
    cardsWidth: number;
  }>({
    viewportWidth: 0,
    appWidth: 0,
    navWidth: 0,
    contentWidth: 0,
    heroWidth: 0,
    cardsWidth: 0,
  });

  useEffect(() => {
    const measure = () => {
      const app = document.querySelector('.app');
      const nav = document.querySelector('.nav-container');
      const content = document.querySelector('.content');
      const hero = document.querySelector('.hero');
      const cards = document.querySelector('.cards-grid');

      setMeasurements({
        viewportWidth: window.innerWidth,
        appWidth: app ? app.getBoundingClientRect().width : 0,
        navWidth: nav ? nav.getBoundingClientRect().width : 0,
        contentWidth: content ? content.getBoundingClientRect().width : 0,
        heroWidth: hero ? hero.getBoundingClientRect().width : 0,
        cardsWidth: cards ? cards.getBoundingClientRect().width : 0,
      });
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const isFullWidth = (width: number) => width === measurements.viewportWidth;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        minWidth: '300px',
      }}
    >
      <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Layout Debug</h4>
      <div>Viewport: {measurements.viewportWidth}px</div>
      <div style={{ marginTop: '8px' }}>
        <div style={{ color: isFullWidth(measurements.appWidth) ? '#4ade80' : '#f87171' }}>
          App: {measurements.appWidth}px {isFullWidth(measurements.appWidth) ? '✓' : '✗'}
        </div>
        <div style={{ color: isFullWidth(measurements.navWidth) ? '#4ade80' : '#f87171' }}>
          Nav: {measurements.navWidth}px {isFullWidth(measurements.navWidth) ? '✓' : '✗'}
        </div>
        <div style={{ color: isFullWidth(measurements.contentWidth) ? '#4ade80' : '#f87171' }}>
          Content: {measurements.contentWidth}px {isFullWidth(measurements.contentWidth) ? '✓' : '✗'}
        </div>
        <div style={{ color: isFullWidth(measurements.heroWidth) ? '#4ade80' : '#f87171' }}>
          Hero: {measurements.heroWidth}px {isFullWidth(measurements.heroWidth) ? '✓' : '✗'}
        </div>
        <div style={{ color: measurements.cardsWidth > 0 && measurements.cardsWidth >= measurements.contentWidth * 0.9 ? '#4ade80' : '#f87171' }}>
          Cards: {measurements.cardsWidth}px {measurements.cardsWidth > 0 && measurements.cardsWidth >= measurements.contentWidth * 0.9 ? '✓' : '✗'}
        </div>
      </div>
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        ✓ = Full width | ✗ = Not full width
      </div>
    </div>
  );
}

export default LayoutTest;