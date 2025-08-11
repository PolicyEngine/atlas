import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationRouter from './components/NavigationRouter';

describe('Navigation visibility', () => {
  it('hides sensitive sections on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show public sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    // Should NOT show sensitive sections
    expect(screen.queryByText('Partners')).not.toBeInTheDocument();
    expect(screen.queryByText('PBIF Application')).not.toBeInTheDocument();
    expect(screen.queryByText('ENG(INE) Application')).not.toBeInTheDocument();
  });

  it('shows all sections when on /partners route', () => {
    render(
      <MemoryRouter initialEntries={['/partners']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show all sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Partners')).toBeInTheDocument();
    expect(screen.getByText('PBIF Application')).toBeInTheDocument();
    expect(screen.getByText('ENG(INE) Application')).toBeInTheDocument();
  });

  it('shows all sections when on /application route', () => {
    render(
      <MemoryRouter initialEntries={['/application']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show all sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Partners')).toBeInTheDocument();
    expect(screen.getByText('PBIF Application')).toBeInTheDocument();
    expect(screen.getByText('ENG(INE) Application')).toBeInTheDocument();
  });

  it('shows all sections when on /engine route', () => {
    render(
      <MemoryRouter initialEntries={['/engine']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show all sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Partners')).toBeInTheDocument();
    expect(screen.getByText('PBIF Application')).toBeInTheDocument();
    expect(screen.getByText('ENG(INE) Application')).toBeInTheDocument();
  });

  it('hides sensitive sections on /demo route', () => {
    render(
      <MemoryRouter initialEntries={['/demo']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show public sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    // Should NOT show sensitive sections
    expect(screen.queryByText('Partners')).not.toBeInTheDocument();
    expect(screen.queryByText('PBIF Application')).not.toBeInTheDocument();
    expect(screen.queryByText('ENG(INE) Application')).not.toBeInTheDocument();
  });

  it('hides sensitive sections on /community route', () => {
    render(
      <MemoryRouter initialEntries={['/community']}>
        <NavigationRouter />
      </MemoryRouter>
    );

    // Should show public sections
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Mock-up')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    // Should NOT show sensitive sections
    expect(screen.queryByText('Partners')).not.toBeInTheDocument();
    expect(screen.queryByText('PBIF Application')).not.toBeInTheDocument();
    expect(screen.queryByText('ENG(INE) Application')).not.toBeInTheDocument();
  });
});
