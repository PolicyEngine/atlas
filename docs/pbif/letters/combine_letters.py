#!/usr/bin/env python3
"""
Combine all support letters (PDFs and converted markdown) into a single PDF.
Requires: pypdf (or PyPDF2) for PDF merging
"""

import os
from pathlib import Path
import subprocess
import tempfile
import yaml

def convert_markdown_to_pdf(md_file, output_pdf):
    """Convert markdown to PDF using pandoc or markdown-pdf."""
    try:
        # Try pandoc first (most common)
        subprocess.run([
            'pandoc', 
            str(md_file), 
            '-o', str(output_pdf),
            '--pdf-engine=xelatex',
            '-V', 'geometry:margin=1in',
            '-V', 'fontsize=11pt'
        ], check=True, capture_output=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Try using python markdown + weasyprint as fallback
        try:
            import markdown
            import weasyprint
            
            with open(md_file, 'r') as f:
                html = markdown.markdown(f.read())
            
            # Add basic styling
            styled_html = f"""
            <html>
            <head>
                <style>
                    body {{ 
                        font-family: Arial, sans-serif; 
                        margin: 40px;
                        line-height: 1.6;
                    }}
                    h1 {{ color: #333; }}
                    h2 {{ color: #666; }}
                </style>
            </head>
            <body>{html}</body>
            </html>
            """
            
            weasyprint.HTML(string=styled_html).write_pdf(str(output_pdf))
            return True
        except ImportError:
            print(f"Warning: Could not convert {md_file} - install pandoc or weasyprint")
            return False

def combine_pdfs(pdf_files, output_file):
    """Combine multiple PDFs into one."""
    try:
        from pypdf import PdfWriter, PdfReader
    except ImportError:
        try:
            from PyPDF2 import PdfWriter, PdfReader
        except ImportError:
            print("Error: Please install pypdf or PyPDF2")
            print("  pip install pypdf")
            return False
    
    writer = PdfWriter()
    
    for pdf_file in pdf_files:
        if os.path.exists(pdf_file):
            reader = PdfReader(pdf_file)
            for page in reader.pages:
                writer.add_page(page)
            print(f"  Added: {os.path.basename(pdf_file)}")
    
    with open(output_file, 'wb') as output:
        writer.write(output)
    
    return True

def create_cover_page(letters_list, output_pdf):
    """Create a cover page listing all support letters."""
    try:
        import weasyprint
        
        # Create HTML for cover page
        letters_html = "\n".join([f"<li>{letter}</li>" for letter in letters_list])
        
        cover_html = f"""
        <html>
        <head>
            <style>
                @page {{ size: letter; margin: 1in; }}
                body {{ 
                    font-family: Georgia, serif; 
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 100vh;
                }}
                h1 {{ 
                    color: #2C6496;
                    font-size: 28pt;
                    text-align: center;
                    margin-bottom: 10px;
                }}
                h2 {{
                    color: #333;
                    font-size: 18pt;
                    text-align: center;
                    font-weight: normal;
                    margin-bottom: 20px;
                }}
                .subtitle {{
                    text-align: center;
                    color: #666;
                    font-size: 14pt;
                    margin-bottom: 30px;
                }}
                .note {{
                    text-align: center;
                    font-style: italic;
                    color: #666;
                    font-size: 11pt;
                    margin: 30px auto;
                    max-width: 500px;
                    line-height: 1.4;
                }}
                .organizations-header {{
                    font-size: 12pt;
                    margin-bottom: 15px;
                    text-align: center;
                }}
                ul {{
                    font-size: 12pt;
                    line-height: 1.8;
                    list-style-type: none;
                    padding: 0;
                    margin: 0 auto;
                    max-width: 600px;
                }}
                li {{
                    margin-bottom: 8px;
                    padding-left: 20px;
                    position: relative;
                }}
                li:before {{
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #39C6C0;
                    font-weight: bold;
                }}
            </style>
        </head>
        <body>
            <div style="text-align: center; padding: 50px 0;">
                <h1>PolicyEngine Atlas</h1>
                <h2>Letters of Support</h2>
                <p class="subtitle">Public Benefit Innovation Fund - Summer 2025 Application</p>
                <p class="organizations-header">The following organizations have provided letters of support:</p>
                <ul>
                    {letters_html}
                </ul>
                <p class="note">
                    Note: These letters reference "Policy Library" as the project was renamed to 
                    "PolicyEngine Atlas" after the support letters were requested.
                </p>
            </div>
        </body>
        </html>
        """
        
        weasyprint.HTML(string=cover_html).write_pdf(str(output_pdf))
        return True
    except ImportError:
        # Fallback to pandoc
        try:
            cover_md = f"""# PolicyEngine Atlas
## Letters of Support

### Public Benefit Innovation Fund - Summer 2025 Application

The following organizations have provided letters of support:

{chr(10).join(['- ' + letter for letter in letters_list])}

*Note: These letters reference "Policy Library" as the project was renamed to "PolicyEngine Atlas" after the support letters were requested.*
"""
            
            with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
                f.write(cover_md)
                temp_md = f.name
            
            subprocess.run([
                'pandoc', 
                temp_md, 
                '-o', str(output_pdf),
                '--pdf-engine=xelatex',
                '-V', 'geometry:margin=1in',
                '-V', 'fontsize=12pt'
            ], check=True, capture_output=True)
            
            os.unlink(temp_md)
            return True
        except (subprocess.CalledProcessError, FileNotFoundError):
            print("Warning: Could not create cover page - install weasyprint or pandoc")
            return False

def main():
    letters_dir = Path(__file__).parent
    
    # Load the YAML file
    yaml_file = letters_dir / "support_letters.yaml"
    with open(yaml_file, 'r') as f:
        config = yaml.safe_load(f)
    
    # Get list of PDF files from YAML
    pdf_files = []
    letters_list = []
    
    for letter in config.get('pdf_letters', []):
        pdf_path = letters_dir / letter['file']
        if pdf_path.exists():
            pdf_files.append(pdf_path)
            org_name = letter.get('organization', '')
            if letter.get('institution'):
                org_name = f"{letter['institution']} - {org_name}"
            letters_list.append(org_name)
    
    # Get markdown files from YAML (if any listed)
    md_files = []
    for letter in config.get('markdown_drafts', []):
        if letter:  # Skip if empty
            md_path = letters_dir / letter['file']
            if md_path.exists():
                md_files.append(md_path)
                letters_list.append(letter.get('organization', ''))
    
    # Add word documents if in YAML
    for letter in config.get('word_documents', []):
        org_name = letter.get('full_name', letter.get('organization', ''))
        # Only add to letters_list if PDF exists
        pdf_name = letter['file'].replace('.docx', '.pdf')
        pdf_path = letters_dir / pdf_name
        if pdf_path.exists():
            pdf_files.append(pdf_path)
            letters_list.append(org_name)
    
    print("Found support letters from YAML:")
    print(f"  {len(pdf_files)} PDF files")
    print(f"  {len(md_files)} Markdown files")
    
    # Create temporary directory for converted files
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        
        # Create cover page
        cover_pdf = temp_path / "00_cover.pdf"
        print("\nCreating cover page...")
        create_cover_page(letters_list, cover_pdf)
        
        # Convert markdown files to PDF
        converted_pdfs = []
        for md_file in md_files:
            output_pdf = temp_path / f"{md_file.stem}.pdf"
            print(f"\nConverting {md_file.name} to PDF...")
            if convert_markdown_to_pdf(md_file, output_pdf):
                converted_pdfs.append(output_pdf)
        
        # Combine all PDFs with cover page first
        all_pdfs = [cover_pdf] + pdf_files + converted_pdfs
        
        if all_pdfs:
            output_file = letters_dir / "combined_support_letters.pdf"
            print(f"\nCombining {len(all_pdfs)} PDFs...")
            
            if combine_pdfs(all_pdfs, output_file):
                print(f"\n✅ Success! Combined PDF saved to: {output_file}")
                print(f"   Total files combined: {len(all_pdfs)}")
                
                # List the order of files
                print("\nFiles included (in order):")
                print("  - Cover Page")
                for pdf in pdf_files:
                    print(f"  - {pdf.name}")
                for md in md_files:
                    print(f"  - {md.name} (converted)")
            else:
                print("\n❌ Error combining PDFs")
        else:
            print("\n❌ No PDF files to combine")

if __name__ == "__main__":
    main()