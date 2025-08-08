import { useEffect, useState } from 'react';

function VisualTest() {
  const [dimensions, setDimensions] = useState<{
    viewport: { width: number; height: number };
    issues: string[];
  }>({
    viewport: { width: 0, height: 0 },
    issues: [],
  });

  useEffect(() => {
    const checkLayout = () => {
      const issues: string[] = [];
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Check all elements for width issues
      const elements = document.querySelectorAll('*');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        
        // Check if element overflows viewport
        if (rect.right > viewportWidth) {
          issues.push(`${el.className || el.tagName} overflows right by ${rect.right - viewportWidth}px`);
        }
        
        // Check for unnecessary margins creating gaps
        
        if (rect.width < viewportWidth && 
            rect.width > 0 && 
            el.classList.contains('content') || 
            el.classList.contains('section') ||
            el.classList.contains('demo-container')) {
          const gap = viewportWidth - rect.width;
          if (gap > 40) { // More than 40px gap is significant
            issues.push(`${el.className} is ${gap}px narrower than viewport (width: ${rect.width}px)`);
          }
        }
      });

      // Check specific problem areas
      const content = document.querySelector('.content');
      if (content) {
        const contentRect = content.getBoundingClientRect();
        if (contentRect.width < viewportWidth - 10) {
          issues.push(`.content is not full width: ${contentRect.width}px vs viewport ${viewportWidth}px`);
        }
      }

      const demoContainer = document.querySelector('.demo-container');
      if (demoContainer) {
        const rect = demoContainer.getBoundingClientRect();
        const styles = window.getComputedStyle(demoContainer);
        issues.push(`Demo container: width=${rect.width}px, left=${rect.left}px, padding=${styles.padding}`);
      }

      setDimensions({
        viewport: { width: viewportWidth, height: viewportHeight },
        issues,
      });
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    
    // Also check after a delay to catch any async rendering
    setTimeout(checkLayout, 100);
    
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 10,
        right: 10,
        background: 'rgba(255, 0, 0, 0.95)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        maxWidth: '400px',
        maxHeight: '80vh',
        overflow: 'auto',
      }}
    >
      <h4 style={{ margin: '0 0 10px 0' }}>Layout Issues</h4>
      <div>Viewport: {dimensions.viewport.width} x {dimensions.viewport.height}</div>
      
      {dimensions.issues.length === 0 ? (
        <div style={{ color: '#4ade80', marginTop: '10px' }}>✓ No layout issues detected</div>
      ) : (
        <div style={{ marginTop: '10px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
            Found {dimensions.issues.length} issues:
          </div>
          {dimensions.issues.map((issue, i) => (
            <div key={i} style={{ marginBottom: '5px', paddingLeft: '10px' }}>
              • {issue}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VisualTest;