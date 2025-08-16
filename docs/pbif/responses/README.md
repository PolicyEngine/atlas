# PBIF Application Response Files

This directory contains individual response files for each PBIF application question.

## Structure

Each file corresponds to a question in the PBIF application:
- **01_executive_summary.md** - Executive Summary (250 words)
- **02_stage_of_development.md** - Stage of Development Description (250 words)
- **03_problem_statement.md** - Problem Statement (250 words)
- **04_solution_beneficiaries.md** - Solution & Target Beneficiaries (250 words)
- **05_impact_evaluation.md** - Proposed Benefit and Impact Evaluation (250 words)
- **06_responsible_design.md** - Responsible Design and Use (250 words)
- **07_adoption_scale.md** - Adoption and Path to Scale (250 words)
- **08_dissemination_learning.md** - Dissemination & Learning (250 words)
- **09_solution_description.md** - Technical Solution Description (250 words)
- **10_data_sources.md** - Data Strategy - Data Sources (250 words)
- **11_data_management.md** - Data Strategy - Data Management (250 words)
- **12_stakeholder_engagement.md** - Stakeholder Engagement (250 words)
- **13_resources_infrastructure.md** - Resources and Infrastructure (250 words)
- **14_scalability_sustainability.md** - Scalability & Sustainability (250 words)
- **15_financial_viability.md** - Financial Viability (250 words)

## Word Limits

Each response should be **exactly 250 words** (±10% tolerance: 225-275 words).

## Editing Guidelines

1. **Edit individual files** in this directory, not the assembled application
2. **Keep responses focused** - each file addresses one specific question
3. **Use plain markdown** - avoid complex formatting
4. **Count words carefully** - use the assembly script to verify

## Assembling the Application

To combine all responses into the final application:

```bash
cd docs/pbif
python assemble_application.py
```

This will:
- Combine all response files
- Add word counts and validation
- Output to `src/content/pbif-application.md` for the website
- Show which sections need attention

## Word Count Tips

To check word count of a file:
```bash
# Quick check (approximate)
wc -w responses/01_executive_summary.md

# Accurate check (excludes markdown)
python -c "import re; text=open('responses/01_executive_summary.md').read(); print(len(re.sub(r'[#*\-|`\[\]()]', '', text).split()), 'words')"
```

## Status Tracking

The `pbif_questions.yaml` file tracks the status of each response:
- `missing` - File doesn't exist yet
- `needs_update` - Content exists but word count is off
- `needs_formatting` - Content needs restructuring
- `completed` - Ready for submission

## Priority Order

Focus on completing in this order:
1. Missing sections (create new files)
2. Sections with wrong word counts
3. Sections needing formatting updates