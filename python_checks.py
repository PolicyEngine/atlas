#!/usr/bin/env python3
"""
Python checks for CI - validates Python scripts in the repository.
"""

import subprocess
import sys
from pathlib import Path

def check_python_syntax():
    """Check syntax of all Python files in the repository."""
    python_files = list(Path('.').rglob('*.py'))
    
    if not python_files:
        print("No Python files found to check")
        return True
    
    print(f"Checking {len(python_files)} Python files...")
    
    errors = []
    for file in python_files:
        # Skip virtual environment and node_modules
        if any(part in str(file).split('/') for part in ['venv', 'node_modules', '.git', 'dist']):
            continue
            
        result = subprocess.run(
            [sys.executable, '-m', 'py_compile', str(file)],
            capture_output=True,
            text=True
        )
        
        if result.returncode != 0:
            errors.append(f"Syntax error in {file}: {result.stderr}")
    
    if errors:
        print("\n❌ Python syntax check failed:")
        for error in errors:
            print(f"  {error}")
        return False
    
    print("✅ All Python files have valid syntax")
    return True

def check_imports():
    """Check that required imports are available."""
    required_imports = ['yaml', 'pypdf']
    
    print(f"Checking required imports: {', '.join(required_imports)}...")
    
    missing = []
    for module in required_imports:
        try:
            __import__(module)
        except ImportError:
            missing.append(module)
    
    if missing:
        print(f"\n❌ Missing required modules: {', '.join(missing)}")
        print("Please install them with: pip install -r requirements.txt")
        return False
    
    print("✅ All required imports are available")
    return True

def main():
    """Run all Python checks."""
    print("Running Python checks...\n")
    
    checks = [
        ("Python syntax", check_python_syntax),
        ("Required imports", check_imports),
    ]
    
    all_passed = True
    for name, check_func in checks:
        print(f"Running {name}...")
        if not check_func():
            all_passed = False
        print()
    
    if all_passed:
        print("✅ All Python checks passed!")
        return 0
    else:
        print("❌ Some Python checks failed. Please fix the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())