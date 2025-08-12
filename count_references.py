#!/usr/bin/env python3
"""
PolicyEngine-US Source Document Reference Analysis

This script analyzes the number of distinct source document references 
in the PolicyEngine-US codebase, both with and without page number fragments.
"""

import os
import re
from pathlib import Path
from collections import defaultdict
import yaml

def extract_urls_from_text(text):
    """Extract URLs from text content."""
    # Match URLs starting with http/https
    url_pattern = r'https?://[^\s<>"\']+' 
    urls = re.findall(url_pattern, text)
    return urls

def extract_legal_citations(text):
    """Extract legal citations like USC, CFR, state codes."""
    citations = []
    
    # USC citations (e.g., "26 USC 32", "26 U.S.C. § 32")
    usc_patterns = [
        r'\d+\s+U\.?S\.?C\.?\s+§?\s*\d+',
        r'\d+\s+USC\s+\d+',
    ]
    
    # CFR citations (e.g., "26 CFR 1.32-1")
    cfr_pattern = r'\d+\s+C\.?F\.?R\.?\s+[\d\.\-]+'
    
    # State code patterns
    state_patterns = [
        r'\b[A-Z]{2,}\s+Rev\.?\s+Code\s+[\d\.\-]+',  # e.g., "WA Rev Code 123"
        r'\b[A-Z]{2,}\s+Stat\.?\s+[\d\.\-]+',  # e.g., "CA Stat 123"
    ]
    
    for pattern in usc_patterns + [cfr_pattern] + state_patterns:
        citations.extend(re.findall(pattern, text, re.IGNORECASE))
    
    return citations

def remove_page_fragment(url):
    """Remove #page=X fragments from URLs."""
    # Remove everything after # for page fragments
    if '#page=' in url:
        return url.split('#page=')[0]
    return url

def main():
    # Set the base path to PolicyEngine-US repository
    BASE_PATH = Path("/Users/maxghenis/PolicyEngine/policyengine-us")
    
    # Verify the path exists
    if not BASE_PATH.exists():
        print(f"Error: Path {BASE_PATH} does not exist")
        return
    
    print(f"Analyzing PolicyEngine-US repository at: {BASE_PATH}")
    
    # Initialize counters
    all_references_with_pages = set()
    all_references_without_pages = set()
    url_references = set()
    legal_citations = set()
    pdf_references = set()
    gov_urls = set()
    
    # Statistics
    files_processed = 0
    files_with_references = 0
    
    # Process Python files in variables/ and parameters/ directories
    target_dirs = ['policyengine_us/parameters', 'policyengine_us/variables']
    
    for target_dir in target_dirs:
        dir_path = BASE_PATH / target_dir
        if not dir_path.exists():
            print(f"Warning: {dir_path} does not exist")
            continue
        
        print(f"\nProcessing {target_dir}...")
        
        # Process all Python and YAML files
        for file_path in dir_path.rglob('*'):
            if file_path.is_file() and (file_path.suffix in ['.py', '.yaml', '.yml']):
                files_processed += 1
                file_has_references = False
                
                try:
                    content = file_path.read_text(encoding='utf-8', errors='ignore')
                    
                    # Extract URLs
                    urls = extract_urls_from_text(content)
                    for url in urls:
                        file_has_references = True
                        all_references_with_pages.add(url)
                        
                        # Track PDFs specifically
                        if '.pdf' in url.lower():
                            pdf_references.add(url)
                        
                        # Track .gov URLs
                        if '.gov' in url:
                            gov_urls.add(url)
                        
                        # Add version without page numbers
                        url_without_page = remove_page_fragment(url)
                        all_references_without_pages.add(url_without_page)
                        url_references.add(url_without_page)
                    
                    # Extract legal citations
                    citations = extract_legal_citations(content)
                    for citation in citations:
                        file_has_references = True
                        all_references_with_pages.add(citation)
                        all_references_without_pages.add(citation)
                        legal_citations.add(citation)
                    
                    # For YAML files, also check for 'reference', 'source', 'documentation' fields
                    if file_path.suffix in ['.yaml', '.yml']:
                        try:
                            data = yaml.safe_load(content)
                            if data and isinstance(data, dict):
                                # Recursively search for reference fields
                                def search_references(obj, path=""):
                                    if isinstance(obj, dict):
                                        for key, value in obj.items():
                                            if key in ['reference', 'references', 'source', 'documentation', 'href', 'url']:
                                                if isinstance(value, str):
                                                    if value.startswith('http'):
                                                        all_references_with_pages.add(value)
                                                        all_references_without_pages.add(remove_page_fragment(value))
                                                        file_has_references = True
                                                        if '.pdf' in value.lower():
                                                            pdf_references.add(value)
                                                        if '.gov' in value:
                                                            gov_urls.add(value)
                                                elif isinstance(value, list):
                                                    for item in value:
                                                        if isinstance(item, dict) and 'href' in item:
                                                            href = item['href']
                                                            all_references_with_pages.add(href)
                                                            all_references_without_pages.add(remove_page_fragment(href))
                                                            file_has_references = True
                                                            if '.pdf' in href.lower():
                                                                pdf_references.add(href)
                                                            if '.gov' in href:
                                                                gov_urls.add(href)
                                            else:
                                                search_references(value, f"{path}.{key}")
                                    elif isinstance(obj, list):
                                        for item in obj:
                                            search_references(item, path)
                                
                                search_references(data)
                        except yaml.YAMLError:
                            pass  # Skip invalid YAML files
                    
                    if file_has_references:
                        files_with_references += 1
                        
                except Exception as e:
                    # Skip files that can't be read
                    pass
    
    print(f"\nProcessed {files_processed} files")
    print(f"Files with references: {files_with_references}")
    
    # Analyze PDF references to understand page fragmentation
    pdfs_with_pages = [ref for ref in pdf_references if '#page=' in ref]
    pdfs_without_pages = [ref for ref in pdf_references if '#page=' not in ref]
    unique_pdf_bases = set(remove_page_fragment(ref) for ref in pdf_references)
    
    print("\nPDF Reference Analysis:")
    print(f"  Total PDF references: {len(pdf_references):,}")
    print(f"  PDFs with page fragments: {len(pdfs_with_pages):,}")
    print(f"  PDFs without page fragments: {len(pdfs_without_pages):,}")
    print(f"  Unique PDF documents (base URLs): {len(unique_pdf_bases):,}")
    if len(unique_pdf_bases) > 0:
        print(f"  Average pages per PDF: {len(pdfs_with_pages) / len(unique_pdf_bases):.1f}")
    
    # Final summary
    print("\n" + "="*60)
    print("POLICYENGINE-US SOURCE REFERENCE SUMMARY")
    print("="*60)
    
    print(f"\n📊 TOTAL DISTINCT REFERENCES:")
    print(f"  WITH page fragments:    {len(all_references_with_pages):,}")
    print(f"  WITHOUT page fragments: {len(all_references_without_pages):,}")
    if len(all_references_without_pages) > 0:
        print(f"  Reduction factor:       {len(all_references_with_pages) / len(all_references_without_pages):.2f}x")
    
    print(f"\n📑 BREAKDOWN BY TYPE:")
    print(f"  Government URLs (.gov): {len(gov_urls):,}")
    print(f"  PDF documents:          {len(pdf_references):,}")
    print(f"  Legal citations:        {len(legal_citations):,}")
    print(f"  Other URLs:             {len(url_references - gov_urls):,}")
    
    print(f"\n📁 FILE STATISTICS:")
    print(f"  Files processed:        {files_processed:,}")
    print(f"  Files with references:  {files_with_references:,}")
    if files_processed > 0:
        print(f"  Coverage:               {files_with_references/files_processed*100:.1f}%")
    
    # Show some examples
    print("\n" + "="*60)
    print("EXAMPLE REFERENCES")
    print("="*60)
    
    print("\n🔗 Sample URLs with page fragments:")
    for ref in list(pdfs_with_pages)[:5]:
        print(f"  • {ref}")
    
    print("\n📜 Sample legal citations:")
    for ref in list(legal_citations)[:5]:
        print(f"  • {ref}")
    
    print("\n🏛️ Sample government URLs:")
    count = 0
    for ref in list(gov_urls):
        if '.pdf' not in ref:  # Show non-PDF gov URLs
            print(f"  • {ref}")
            count += 1
            if count >= 5:
                break

if __name__ == "__main__":
    main()