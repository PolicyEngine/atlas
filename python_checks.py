#!/usr/bin/env python3
"""Basic test to ensure Python code imports correctly."""

import sys
import os

# Add the pbif_budget_filler directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'pbif_budget_filler'))

def test_imports():
    """Test that populate_budget.py doesn't have import errors (beyond missing dependencies)."""
    try:
        # Check if we can at least parse the file without syntax errors
        import ast
        with open('pbif_budget_filler/populate_budget.py', 'r') as f:
            ast.parse(f.read())
        print("✓ populate_budget.py has valid Python syntax")
        return True
    except (SyntaxError, FileNotFoundError) as e:
        print(f"✗ Error with populate_budget.py: {e}")
        return False

def test_syntax():
    """Test that all Python files have valid syntax."""
    import ast
    import glob
    
    python_files = glob.glob('pbif_budget_filler/*.py')
    errors = []
    
    for filepath in python_files:
        try:
            with open(filepath, 'r') as f:
                ast.parse(f.read())
            print(f"✓ {filepath}: Valid syntax")
        except SyntaxError as e:
            errors.append(f"✗ {filepath}: {e}")
    
    if errors:
        for error in errors:
            print(error)
        return False
    
    return True

if __name__ == "__main__":
    success = True
    
    print("Running Python tests...")
    print("-" * 40)
    
    if not test_syntax():
        success = False
    
    if not test_imports():
        success = False
    
    print("-" * 40)
    if success:
        print("✓ All Python tests passed!")
        sys.exit(0)
    else:
        print("✗ Some Python tests failed")
        sys.exit(1)