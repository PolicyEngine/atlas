#!/usr/bin/env python3
"""
Combine all support letters (PDFs and converted markdown) into a single PDF.
Requires: pypdf (or PyPDF2) for PDF merging
"""

import os
from pathlib import Path
import subprocess
import tempfile

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

def main():
    letters_dir = Path(__file__).parent
    
    # Find all PDF and markdown files
    pdf_files = sorted(letters_dir.glob("*.pdf"))
    # Exclude the combined output file
    pdf_files = [f for f in pdf_files if 'combined_support_letters' not in f.name]
    md_files = sorted(letters_dir.glob("*.md"))
    
    # Skip README files
    md_files = [f for f in md_files if 'README' not in f.name]
    
    print("Found support letters:")
    print(f"  {len(pdf_files)} PDF files")
    print(f"  {len(md_files)} Markdown files")
    
    # Create temporary directory for converted files
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
        
        # Convert markdown files to PDF
        converted_pdfs = []
        for md_file in md_files:
            output_pdf = temp_path / f"{md_file.stem}.pdf"
            print(f"\nConverting {md_file.name} to PDF...")
            if convert_markdown_to_pdf(md_file, output_pdf):
                converted_pdfs.append(output_pdf)
        
        # Combine all PDFs
        all_pdfs = list(pdf_files) + converted_pdfs
        
        if all_pdfs:
            output_file = letters_dir / "combined_support_letters.pdf"
            print(f"\nCombining {len(all_pdfs)} PDFs...")
            
            if combine_pdfs(all_pdfs, output_file):
                print(f"\n✅ Success! Combined PDF saved to: {output_file}")
                print(f"   Total files combined: {len(all_pdfs)}")
                
                # List the order of files
                print("\nFiles included (in order):")
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