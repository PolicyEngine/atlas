#!/usr/bin/env python3
"""
Convert team bios and project roadmap markdown files to PDFs.
"""

import subprocess
from pathlib import Path

def convert_to_pdf(md_file, output_pdf):
    """Convert markdown to PDF using pandoc."""
    try:
        subprocess.run([
            'pandoc',
            str(md_file),
            '-o', str(output_pdf),
            '--pdf-engine=xelatex',
            '-V', 'geometry:margin=1in',
            '-V', 'fontsize=11pt',
            '-V', 'colorlinks=true',
            '-V', 'linkcolor=blue',
            '-V', 'urlcolor=blue'
        ], check=True, capture_output=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error converting {md_file}: {e}")
        return False
    except FileNotFoundError:
        print("pandoc not found. Please install pandoc to generate PDFs.")
        print("On Mac: brew install pandoc")
        print("On Ubuntu: sudo apt-get install pandoc texlive-xetex")
        return False

def main():
    attachments_dir = Path(__file__).parent
    
    # Convert team bios
    bios_md = attachments_dir / "team_bios.md"
    bios_pdf = attachments_dir / "PolicyEngine_Atlas_Team_Bios.pdf"
    
    print("Converting team bios to PDF...")
    if convert_to_pdf(bios_md, bios_pdf):
        print(f"✅ Created: {bios_pdf}")
    else:
        print(f"❌ Failed to create team bios PDF")
    
    # Convert project roadmap
    roadmap_md = attachments_dir / "project_roadmap.md"
    roadmap_pdf = attachments_dir / "PolicyEngine_Atlas_Project_Roadmap.pdf"
    
    print("Converting project roadmap to PDF...")
    if convert_to_pdf(roadmap_md, roadmap_pdf):
        print(f"✅ Created: {roadmap_pdf}")
    else:
        print(f"❌ Failed to create project roadmap PDF")

if __name__ == "__main__":
    main()