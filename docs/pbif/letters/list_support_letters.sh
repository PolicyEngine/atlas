#!/bin/bash
# List all support letters for manual combination

echo "==================================="
echo "SUPPORT LETTERS FOR PBIF APPLICATION"
echo "==================================="
echo ""
echo "PDF Files (ready to combine):"
echo "------------------------------"
ls -1 *.pdf 2>/dev/null | grep -v combined | while read file; do
    echo "✓ $file"
done

echo ""
echo "Markdown Files (need conversion to PDF):"
echo "-----------------------------------------"
ls -1 *.md 2>/dev/null | grep -v README | while read file; do
    echo "○ $file"
done

echo ""
echo "Word Documents:"
echo "---------------"
ls -1 *.docx 2>/dev/null | while read file; do
    echo "○ $file"
done

echo ""
echo "==================================="
echo "To combine PDFs on Mac:"
echo "1. Open all PDFs in Preview"
echo "2. Show thumbnails sidebar"
echo "3. Drag all pages into one document"
echo "4. Save as 'combined_support_letters.pdf'"
echo ""
echo "Or use online tool: https://www.ilovepdf.com/merge_pdf"
echo "===================================="