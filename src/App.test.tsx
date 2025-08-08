import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('Full-screen layout', () => {
  test('app container should be full width', () => {
    const { container } = render(<App />);
    const appElement = container.querySelector('.app');
    
    // App should take full viewport width
    expect(appElement).toBeInTheDocument();
    const styles = window.getComputedStyle(appElement!);
    expect(styles.width).toBe('100%');
  });

  test('navigation should span full width', () => {
    const { container } = render(<App />);
    const navContainer = container.querySelector('.nav-container');
    
    expect(navContainer).toBeInTheDocument();
    const styles = window.getComputedStyle(navContainer!);
    expect(styles.width).toBe('100%');
  });

  test('content should not have max-width constraint', () => {
    const { container } = render(<App />);
    const content = container.querySelector('.content');
    
    if (content) {
      const styles = window.getComputedStyle(content);
      // Should not have a pixel-based max-width
      expect(styles.maxWidth).not.toMatch(/\d+px/);
      expect(styles.width).toBe('100%');
    }
  });

  test('hero section should be full width', () => {
    const { container } = render(<App />);
    const hero = container.querySelector('.hero');
    
    if (hero) {
      const styles = window.getComputedStyle(hero);
      expect(styles.width).toBe('100%');
    }
  });

  test('cards grid should use percentage widths', () => {
    const { container } = render(<App />);
    const cardsGrid = container.querySelector('.cards-grid');
    
    if (cardsGrid) {
      const styles = window.getComputedStyle(cardsGrid);
      expect(styles.width).toBe('100%');
    }
  });
});