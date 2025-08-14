from setuptools import setup, find_packages

setup(
    name="pbif-budget-filler",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "gspread>=6.0.0",
        "google-auth>=2.0.0",
        "google-auth-oauthlib>=1.0.0",
        "google-auth-httplib2>=0.2.0",
        "pytest>=7.0.0",
        "pytest-mock>=3.0.0",
    ],
    python_requires=">=3.8",
    author="PolicyEngine",
    description="Automated PBIF budget spreadsheet filler with validation",
)