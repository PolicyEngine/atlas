#!/usr/bin/env python3
"""Sync markdown content to TypeScript applicationContent.ts file."""

from pathlib import Path

def read_markdown_file(filepath):
    """Read and return markdown file content."""
    with open(filepath, 'r') as f:
        return f.read()

def main():
    base_path = Path("src/content/pbif")
    
    # Read markdown files
    executive_summary = read_markdown_file(base_path / "01-executive-summary.md")
    value_proposition = read_markdown_file(base_path / "02-value-proposition.md")
    technical_feasibility = read_markdown_file(base_path / "03-technical-feasibility.md")
    
    # Generate TypeScript content
    ts_content = f'''export const executiveSummaryContent = `{executive_summary}`;

export const valuePropositionContent = `{value_proposition}`;

export const technicalFeasibilityContent = `{technical_feasibility}`;
'''
    
    # Write to TypeScript file
    ts_path = base_path / "applicationContent.ts"
    with open(ts_path, 'w') as f:
        f.write(ts_content)
    
    print(f"✅ Updated {ts_path} with content from markdown files including word counts")

if __name__ == "__main__":
    main()