#!/usr/bin/env python3
"""Count words in each PBIF application section with limits."""

import re
from pathlib import Path

def count_words_in_section(text, start_marker, end_marker=None):
    """Extract and count words in a specific section."""
    # Find the section
    start_idx = text.find(start_marker)
    if start_idx == -1:
        return 0, ""
    
    start_idx = text.find('\n', start_idx) + 1  # Start after the header
    
    if end_marker:
        end_idx = text.find(end_marker, start_idx)
        if end_idx == -1:
            section = text[start_idx:]
        else:
            section = text[start_idx:end_idx]
    else:
        section = text[start_idx:]
    
    # Remove markdown syntax and count words
    # Remove headers
    section = re.sub(r'^#+\s+.*$', '', section, flags=re.MULTILINE)
    # Remove emphasis markers
    section = re.sub(r'\*{1,2}([^*]+)\*{1,2}', r'\1', section)
    # Remove links
    section = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', section)
    # Remove quotes
    section = re.sub(r'^>\s*', '', section, flags=re.MULTILINE)
    # Remove italic quotes
    section = re.sub(r'^\*"[^"]+"\*$', '', section, flags=re.MULTILINE)
    
    # Count words
    words = section.split()
    return len(words), section

def main():
    base_path = Path("src/content/pbif")
    
    sections = [
        # Section 1
        ("01-executive-summary.md", "## Executive Summary", "## Stage of Development", 250),
        
        # Section 2
        ("02-value-proposition.md", "## Problem Statement", "## Solution & Target Beneficiaries", 250),
        ("02-value-proposition.md", "## Solution & Target Beneficiaries", "## Proposed Benefit and Impact Evaluation", 250),
        ("02-value-proposition.md", "## Proposed Benefit and Impact Evaluation", "## Responsible Design and Use", 250),
        ("02-value-proposition.md", "## Responsible Design and Use", "## Adoption and Path to Scale", 250),
        ("02-value-proposition.md", "## Adoption and Path to Scale", "## Dissemination & Learning", 250),
        ("02-value-proposition.md", "## Dissemination & Learning", None, 250),
        
        # Section 3
        ("03-technical-feasibility.md", "## Solution Description", "## Data Strategy - Data Sources", 250),
        ("03-technical-feasibility.md", "## Data Strategy - Data Sources", "## Data Strategy - Data Management", 250),
        ("03-technical-feasibility.md", "## Data Strategy - Data Management", "## Stakeholder Engagement", 250),
        ("03-technical-feasibility.md", "## Stakeholder Engagement", "## Resources and Infrastructure", 250),
        ("03-technical-feasibility.md", "## Resources and Infrastructure", "## Scalability & Sustainability", 250),
        ("03-technical-feasibility.md", "## Scalability & Sustainability", "## Financial Viability", 250),
        ("03-technical-feasibility.md", "## Financial Viability", None, 250),
    ]
    
    print("=" * 80)
    print("PBIF APPLICATION WORD COUNTS")
    print("=" * 80)
    print()
    
    current_file = None
    for filename, start, end, limit in sections:
        if filename != current_file:
            print(f"\n📄 {filename}")
            print("-" * 40)
            current_file = filename
        
        filepath = base_path / filename
        if not filepath.exists():
            print(f"  ❌ File not found: {filepath}")
            continue
            
        with open(filepath, 'r') as f:
            content = f.read()
        
        count, _ = count_words_in_section(content, start, end)
        
        # Format output
        if count > limit:
            status = f"⚠️  OVER by {count - limit}"
            color = "\033[91m"  # Red
        elif count == limit:
            status = "✅ EXACT"
            color = "\033[92m"  # Green
        else:
            status = f"✅ Under by {limit - count}"
            color = "\033[92m"  # Green
        
        print(f"  {start[:30]:30} {color}{count:3}/{limit:3} {status}\033[0m")
    
    print("\n" + "=" * 80)

if __name__ == "__main__":
    main()