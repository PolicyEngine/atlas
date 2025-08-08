import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PolicyEngineLogo from './components/PolicyEngineLogo';
import '@testing-library/jest-dom';

describe('PolicyEngineLogo', () => {
  it('should have appropriate height for navigation bar', () => {
    const { container } = render(<PolicyEngineLogo />);
    const img = container.querySelector('img');
    
    expect(img).toBeInTheDocument();
    expect(img).toHaveStyle({ height: '70px' });
  });

  it('should maintain aspect ratio', () => {
    const { container } = render(<PolicyEngineLogo />);
    const img = container.querySelector('img');
    
    expect(img).toHaveStyle({ width: 'auto' });
  });
});