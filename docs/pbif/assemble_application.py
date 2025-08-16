#!/usr/bin/env python3
"""
Assemble PBIF application from individual response files.
Tracks word counts and ensures compliance with limits.
"""

import yaml
import os
from pathlib import Path
import re
from datetime import datetime

def count_words(text):
    """Count words in text, excluding markdown formatting."""
    # Remove markdown formatting
    clean_text = re.sub(r'[#*\-|`\[\]()]', '', text)
    clean_text = re.sub(r'\n+', ' ', clean_text)
    words = clean_text.split()
    return len(words)

def load_response(file_path):
    """Load a response file and return content with word count."""
    if not os.path.exists(file_path):
        return None, 0
    
    with open(file_path, 'r') as f:
        content = f.read().strip()
    
    word_count = count_words(content)
    return content, word_count

def format_section(section, content, word_count):
    """Format a section with word count indicator."""
    limit = section['word_limit']
    
    if word_count == 0:
        status = "❌"
    elif word_count <= limit:
        status = "✅"
    else:
        status = "⚠️"  # Over limit
    
    header = f"## {section['title']}"
    footer = f"\n*[Word count: {word_count}/{limit} {status}]*\n"
    
    return f"{header}\n\n{content}\n{footer}"

def main():
    # Load configuration
    config_path = Path(__file__).parent / 'pbif_questions.yaml'
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)
    
    # Create output document
    output = []
    output.append("# PBIF Summer 2025 Application")
    output.append(f"**Organization:** {config['basic_info']['organization_name']}")
    output.append(f"**Project:** {config['basic_info']['project_title']}")
    output.append(f"**Grant Request:** ${config['metadata']['total_grant_request']:,}")
    output.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
    output.append("---\n")
    
    # Summary statistics
    total_sections = len(config['sections'])
    completed_sections = 0
    sections_needing_work = []
    
    # Process each section
    current_section_num = None
    for section in config['sections']:
        # Add section divider if new section number
        if section['section'] != current_section_num:
            output.append(f"\n# Section {section['section']}\n")
            current_section_num = section['section']
        
        # Load response
        response_path = Path(__file__).parent / section['file']
        content, word_count = load_response(response_path)
        
        # Update stats
        if content:
            if word_count > 0 and word_count <= section['word_limit']:
                completed_sections += 1
            elif word_count > section['word_limit']:
                sections_needing_work.append({
                    'title': section['title'],
                    'current': word_count,
                    'target': section['word_limit'],
                    'issue': 'over_limit'
                })
            
            # Add formatted section
            output.append(format_section(section, content, word_count))
        else:
            # Missing section
            output.append(f"## {section['title']}\n")
            output.append(f"❌ **MISSING** - {section['description']}\n")
            output.append(f"*[Word count: 0/{section['word_limit']} ❌]*\n")
            sections_needing_work.append({
                'title': section['title'],
                'current': 0,
                'target': section['word_limit']
            })
        
        output.append("---\n")
    
    # Add summary at the end
    output.append("\n# Application Status Summary\n")
    output.append(f"- **Sections Complete:** {completed_sections}/{total_sections}")
    output.append(f"- **Completion Rate:** {completed_sections/total_sections*100:.1f}%")
    
    if sections_needing_work:
        output.append("\n## Sections Needing Attention:\n")
        for section in sections_needing_work:
            if section.get('issue') == 'over_limit':
                over_by = section['current'] - section['target']
                output.append(f"- **{section['title']}**: Reduce by {over_by} words ({section['current']}/{section['target']})")
            elif section['current'] == 0:
                output.append(f"- **{section['title']}**: Missing (need up to {section['target']} words)")
    
    # Check attachments
    output.append("\n## Required Attachments:\n")
    for attachment in config['attachments']:
        status = "✅" if attachment['status'] == 'completed' else "⚠️"
        if attachment['status'] == 'pending':
            status = "❌"
        output.append(f"- {status} {attachment['title']}")
    
    # Write output directly to website location (single source of truth)
    output_path = Path(__file__).parent.parent.parent / 'src/content/pbif-application.md'
    with open(output_path, 'w') as f:
        f.write('\n'.join(output))
    
    print(f"✅ Application assembled: {output_path}")
    print(f"📊 Completion: {completed_sections}/{total_sections} sections")
    
    if sections_needing_work:
        print("\n⚠️  Sections needing attention:")
        for section in sections_needing_work:
            print(f"   - {section['title']}: {section['current']}/{section['target']} words")

if __name__ == "__main__":
    main()