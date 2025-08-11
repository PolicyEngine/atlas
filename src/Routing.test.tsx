import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

describe('URL-based routing', () => {
  it('shows Overview on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show Overview content (use more specific text)
    expect(screen.getByRole('heading', { name: /Policy Library/ })).toBeInTheDocument();
    expect(screen.getByText(/Permanent Document Infrastructure/)).toBeInTheDocument();
  });

  it('shows Demo when navigating to /demo', () => {
    render(
      <MemoryRouter initialEntries={['/demo']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show Demo content
    expect(screen.getByText(/Policy Library Mock-up/)).toBeInTheDocument();
  });

  it('shows PBIF Application when navigating to /application', () => {
    render(
      <MemoryRouter initialEntries={['/application']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show PBIF Application content
    expect(screen.getByText(/PBIF Summer 2025 Application/)).toBeInTheDocument();
  });

  it('shows Partners when navigating to /partners', () => {
    render(
      <MemoryRouter initialEntries={['/partners']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show Partners content
    expect(screen.getByText(/Our Partner Organizations/)).toBeInTheDocument();
  });

  it('shows ENGINE Application when navigating to /engine', () => {
    render(
      <MemoryRouter initialEntries={['/engine']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show ENGINE Application content
    expect(screen.getByText(/Nonprofit ENG\(INE\) 2025 Application/)).toBeInTheDocument();
  });

  it('shows Community when navigating to /community', () => {
    render(
      <MemoryRouter initialEntries={['/community']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should show Community content
    expect(screen.getByText(/Civic Tech Community Partnership/)).toBeInTheDocument();
  });

  it('redirects unknown routes to Overview', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <AppRoutes />
      </MemoryRouter>
    );
    
    // Should redirect to Overview (use more specific selector)
    expect(screen.getByRole('heading', { name: /Policy Library/ })).toBeInTheDocument();
    expect(screen.getByText(/Permanent Document Infrastructure/)).toBeInTheDocument();
  });
});