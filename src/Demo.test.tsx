import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Demo from './components/Demo';
import '@testing-library/jest-dom';

describe('Demo Component', () => {
  beforeEach(() => {
    render(<Demo />);
  });

  describe('Mock-up labeling', () => {
    it('should display "Policy Library Mock-up" as title', () => {
      expect(screen.getByText('Policy Library Mock-up')).toBeInTheDocument();
    });

    it('should display mock-up disclaimer', () => {
      expect(screen.getByText(/This is a mock-up demonstration/)).toBeInTheDocument();
    });
  });

  describe('Tab functionality', () => {
    it('should display three tabs', () => {
      expect(screen.getByText('🔍 Search & Retrieve')).toBeInTheDocument();
      expect(screen.getByText('📤 Submit Document')).toBeInTheDocument();
      expect(screen.getByText('🔌 API Access')).toBeInTheDocument();
    });

    it('should show search tab content by default', () => {
      expect(screen.getByLabelText('Jurisdiction')).toBeInTheDocument();
      expect(screen.getByLabelText('Program')).toBeInTheDocument();
      expect(screen.getByLabelText('Document Type')).toBeInTheDocument();
    });

    it('should switch to upload tab when clicked', () => {
      const uploadTab = screen.getByText('📤 Submit Document');
      fireEvent.click(uploadTab);

      expect(screen.getByText('Submit a New Document')).toBeInTheDocument();
      expect(screen.getByText('Submit Document (Creates GitHub PR)')).toBeInTheDocument();
    });

    it('should switch to API tab when clicked', () => {
      const apiTab = screen.getByText('🔌 API Access');
      fireEvent.click(apiTab);

      expect(screen.getByText('API Access')).toBeInTheDocument();
      expect(screen.getByText('Endpoints')).toBeInTheDocument();
      expect(screen.getByText('Example Code')).toBeInTheDocument();
    });
  });

  describe('Download functionality', () => {
    it('should show download button in search results', () => {
      const searchButton = screen.getByText('Search Documents');
      fireEvent.click(searchButton);

      const downloadButtons = screen.getAllByText('📥 Download (Mock)');
      expect(downloadButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Upload functionality', () => {
    it('should have file upload input in upload tab', () => {
      const uploadTab = screen.getByText('📤 Submit Document');
      fireEvent.click(uploadTab);

      const fileInput = document.querySelector('input[type="file"]');
      expect(fileInput).toBeInTheDocument();
    });

    it('should have URL input option', () => {
      const uploadTab = screen.getByText('📤 Submit Document');
      fireEvent.click(uploadTab);

      const urlInput = screen.getByPlaceholderText('Or paste document URL...');
      expect(urlInput).toBeInTheDocument();
    });
  });

  describe('API documentation', () => {
    it('should show API endpoints', () => {
      const apiTab = screen.getByText('🔌 API Access');
      fireEvent.click(apiTab);

      const endpoints = screen.getAllByText(/\/v1\/documents/);
      expect(endpoints.length).toBeGreaterThan(0);
    });

    it('should show example code', () => {
      const apiTab = screen.getByText('🔌 API Access');
      fireEvent.click(apiTab);

      expect(screen.getByText(/import requests/)).toBeInTheDocument();
    });
  });
});
