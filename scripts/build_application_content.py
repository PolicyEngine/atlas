#!/usr/bin/env python3
"""
Build the PBIF application content from individual response files and questions YAML.
This generates the TypeScript content file used by the React application.
"""

import yaml
from pathlib import Path
import re

def load_yaml_questions():
    """Load the PBIF questions from the YAML file."""
    yaml_path = Path(__file__).parent.parent / "docs" / "pbif" / "pbif_questions.yaml"
    with open(yaml_path, 'r') as f:
        return yaml.safe_load(f)

def load_response(file_path):
    """Load a response from a markdown file."""
    docs_path = Path(__file__).parent.parent / "docs" / "pbif"
    full_path = docs_path / file_path
    if full_path.exists():
        with open(full_path, 'r') as f:
            content = f.read().strip()
            # Remove any markdown headers since we'll add our own
            content = re.sub(r'^#+\s+.*?\n', '', content, flags=re.MULTILINE)
            return content.strip()
    return f"[Response file not found: {file_path}]"

def count_words(text):
    """Count words in text, excluding markdown formatting."""
    # Remove markdown links, formatting, etc. for accurate count
    clean_text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)  # Remove link URLs
    clean_text = re.sub(r'[*_`#]', '', clean_text)  # Remove formatting chars
    words = clean_text.split()
    return len(words)

def format_question(question_text):
    """Format a question for display."""
    if not question_text:
        return ""
    # Escape backticks for TypeScript template literal
    question_text = question_text.replace('`', '\\`')
    return f"> **Question:** {question_text}"

def build_section_1(questions_data):
    """Build Section 1: Executive Summary content."""
    sections = questions_data['sections']
    
    # Find the executive summary and stage of development questions
    exec_summary = next((s for s in sections if s['id'] == 'executive_summary'), None)
    stage_dev = next((s for s in sections if s['id'] == 'stage_of_development'), None)
    
    content = "## Section 1: Executive Summary\n\n"
    
    if exec_summary:
        content += f"### 1.1 Executive Summary\n\n"
        content += f"{format_question(exec_summary.get('question', ''))}\n\n"
        response = load_response(exec_summary.get('file', ''))
        word_count = count_words(response)
        word_limit = exec_summary.get('word_limit', 250)
        content += f"**Word count: {word_count}/{word_limit}**\n\n"
        content += response + "\n\n"
    
    if stage_dev:
        content += f"### 1.2 Stage of Development\n\n"
        content += f"{format_question(stage_dev.get('question', ''))}\n\n"
        response = load_response(stage_dev.get('file', ''))
        word_count = count_words(response)
        word_limit = stage_dev.get('word_limit', 250)
        content += f"**Word count: {word_count}/{word_limit}**\n\n"
        content += response + "\n"
    
    return content

def build_section_2(questions_data):
    """Build Section 2: Value Proposition content."""
    sections = questions_data['sections']
    section_2_ids = [
        'problem_statement',
        'solution_beneficiaries', 
        'impact_evaluation',
        'responsible_design',
        'adoption_scale',
        'dissemination_learning'
    ]
    
    content = "## Section 2: Value Proposition\n\n"
    
    for i, section_id in enumerate(section_2_ids, 1):
        section = next((s for s in sections if s['id'] == section_id), None)
        if section:
            content += f"### 2.{i} {section['title']}\n\n"
            content += f"{format_question(section.get('question', ''))}\n\n"
            response = load_response(section.get('file', ''))
            word_count = count_words(response)
            word_limit = section.get('word_limit', 250)
            content += f"**Word count: {word_count}/{word_limit}**\n\n"
            content += response + "\n\n"
    
    return content.rstrip() + "\n"

def build_section_3(questions_data):
    """Build Section 3: Technical Feasibility content."""
    sections = questions_data['sections']
    
    content = "## Section 3: Technical Feasibility\n\n"
    
    # Solution Description
    sol_desc = next((s for s in sections if s['id'] == 'solution_description'), None)
    if sol_desc:
        content += f"### 3.1 Solution Description\n\n"
        content += f"{format_question(sol_desc.get('question', ''))}\n\n"
        response = load_response(sol_desc.get('file', ''))
        word_count = count_words(response)
        word_limit = sol_desc.get('word_limit', 250)
        content += f"**Word count: {word_count}/{word_limit}**\n\n"
        content += response + "\n\n"
    
    # Data Strategy (combined)
    content += "### 3.2 Data Strategy\n\n"
    
    data_sources = next((s for s in sections if s['id'] == 'data_sources'), None)
    if data_sources:
        content += f"#### Data Sources\n\n"
        content += f"{format_question(data_sources.get('question', ''))}\n\n"
        response = load_response(data_sources.get('file', ''))
        word_count = count_words(response)
        word_limit = data_sources.get('word_limit', 250)
        content += f"**Word count: {word_count}/{word_limit}**\n\n"
        content += response + "\n\n"
    
    data_mgmt = next((s for s in sections if s['id'] == 'data_management'), None)
    if data_mgmt:
        content += f"#### Data Management\n\n"
        content += f"{format_question(data_mgmt.get('question', ''))}\n\n"
        response = load_response(data_mgmt.get('file', ''))
        word_count = count_words(response)
        word_limit = data_mgmt.get('word_limit', 250)
        content += f"**Word count: {word_count}/{word_limit}**\n\n"
        content += response + "\n\n"
    
    # Other Section 3 questions
    section_3_ids = [
        ('stakeholder_engagement', '3.3'),
        ('resources_infrastructure', '3.4'),
        ('scalability_sustainability', '3.5'),
        ('financial_viability', '3.6')
    ]
    
    for section_id, number in section_3_ids:
        section = next((s for s in sections if s['id'] == section_id), None)
        if section:
            content += f"### {number} {section['title']}\n\n"
            content += f"{format_question(section.get('question', ''))}\n\n"
            response = load_response(section.get('file', ''))
            word_count = count_words(response)
            word_limit = section.get('word_limit', 250)
            content += f"**Word count: {word_count}/{word_limit}**\n\n"
            content += response + "\n\n"
    
    return content.rstrip() + "\n"

def check_word_limits(questions_data):
    """Check that all responses are within word limits."""
    sections = questions_data['sections']
    over_limit = []
    
    for section in sections:
        if 'file' in section:
            response = load_response(section['file'])
            word_count = count_words(response)
            word_limit = section.get('word_limit', 250)
            
            if word_count > word_limit:
                over_limit.append({
                    'id': section['id'],
                    'title': section['title'],
                    'count': word_count,
                    'limit': word_limit,
                    'excess': word_count - word_limit,
                    'file': section['file']
                })
    
    if over_limit:
        print("\n❌ ERROR: The following sections exceed word limits:\n")
        for item in over_limit:
            print(f"   - {item['title']}: {item['count']}/{item['limit']} words (+{item['excess']} over)")
            print(f"     File: {item['file']}")
        print("\nPlease edit the files above to meet word limits.")
        return False
    
    return True

def generate_typescript_file():
    """Generate the TypeScript content file."""
    questions = load_yaml_questions()
    
    # Check word limits first
    if not check_word_limits(questions):
        print("\n⚠️  Generation aborted due to word limit violations.")
        import sys
        sys.exit(1)
    
    # Build each section
    executive_summary = build_section_1(questions)
    value_proposition = build_section_2(questions)
    technical_feasibility = build_section_3(questions)
    
    # Create the TypeScript file content
    ts_content = f"""// PBIF Application Content
// This file is auto-generated by scripts/build_application_content.py
// DO NOT EDIT DIRECTLY - edit the source markdown files in docs/pbif/responses/

export const executiveSummaryContent = `
{executive_summary}`;

export const valuePropositionContent = `
{value_proposition}`;

export const technicalFeasibilityContent = `
{technical_feasibility}`;
"""
    
    # Write to the TypeScript file
    output_path = Path(__file__).parent.parent / "src" / "content" / "pbif" / "applicationContent.ts"
    with open(output_path, 'w') as f:
        f.write(ts_content)
    
    # Count total words in each section
    exec_words = count_words(executive_summary)
    value_words = count_words(value_proposition)
    tech_words = count_words(technical_feasibility)
    
    print(f"✅ Generated {output_path}")
    print(f"   - Loaded {len(questions['sections'])} questions from YAML")
    print(f"   - Combined responses from markdown files")
    print(f"\n📊 Word Counts:")
    print(f"   - Section 1 (Executive Summary): {exec_words} words")
    print(f"   - Section 2 (Value Proposition): {value_words} words")
    print(f"   - Section 3 (Technical Feasibility): {tech_words} words")
    print(f"   - Total: {exec_words + value_words + tech_words} words")

if __name__ == "__main__":
    generate_typescript_file()