# Section 1: Executive Summary & Project Overview

## Project Title
PolicyEngine Policy Library

## Organization
**Name:** PolicyEngine  
**Type:** Non-profit  
**Contact:** Max Ghenis, CEO (max@policyengine.org)

## Executive Summary (limit 250 words)
*"In a concise summary, describe the core problem your project addresses, the proposed technical solution, the target beneficiaries, and the anticipated impact."*

**Word Count: 249/250**

SNAP errors cost $10.5 billion annually (FY 2023), with 44 states failing accuracy thresholds in FY 2024. Root cause: ambiguous policy language creates inconsistent caseworker interpretations. Our AI-powered Policy Library analyzes benefit documents to identify ambiguities that drive errors, providing governments actionable insights to write clearer policies.

Our solution uses Claude/GPT-4 to scan policy documents across 50+ jurisdictions, scoring ambiguity levels and correlating them with actual SNAP Quality Control error rates by state. We deliver specific recommendations: "Your eligibility criteria has ambiguity score X, correlating with Y% higher error rates—here's how to clarify." This directly addresses PBIF priorities: reducing SNAP errors through clearer documentation, improving income verification consistency, and reducing administrative burden.

Strong partnerships validate demand. Federal Reserve Bank of Atlanta collaborates on Policy Rules Database integration; NBER leverages our TAXSIM MOU for tax policy analysis; Urban Institute and Georgetown researchers use our pilot archives. MyFriendBen (3,500 monthly users) and Benefit Navigator (500+ caseworkers) demonstrate immediate application—both struggle with interpreting contradictory policy sources.

Our permanent document library provides the stable foundation this analysis requires. AI monitors agency websites, capturing documents before they disappear (18% of 2019 URLs are dead). Human reviewers verify accuracy through GitHub workflows. We provide stable APIs with permanent source IDs, eliminating broken links.

**Year 1:** Deploy ambiguity analysis across 10 pilot states, correlate with actual error data. **Year 2:** Scale nationwide, providing governments evidence-based recommendations for clearer policy writing.

This transforms policy writing from art to science, enabling error reduction at the source rather than expensive downstream corrections.

## Stage of Development
**Status:** Pilot ready / Active pilot

Our collaboration with Atlanta Fed and Georgia Center for Opportunity archives federal and North Carolina SNAP, Medicaid, and TANF documents. Researchers at Georgetown, Michigan, and Urban Institute already use our pilot repository. PolicyEngine's benefits calculators serve thousands of users, with MyFriendBen, Benefit Navigator, Mirza, and Impactica among our API clients. NBER and Prenatal-to-3 Policy Impact Center at Vanderbilt already use PolicyEngine for tax credit modeling. We'll build a web application for document submission and retrieval (beyond current API), seeded with documents from ALL participating organizations: PolicyEngine (2,500+ citations), documents in Atlanta Fed's Policy Rules Database model (nationwide coverage), GCO's collection (all states and programs), NBER's assembled tax documents via TAXSIM MOU (historical coverage since 2018), Urban Institute's safety net research archive, Prenatal-to-3's research archive, Better Government Lab and USC research documents, and documents MyFriendBen and Benefit Navigator reference in their systems—totaling 5,000+ documents at launch. We'll enrich all with metadata and convert PDFs to plaintext for efficient searching and AI processing.

## Project Timeline & Funding
**Start Date:** November 15, 2025  
**End Date:** November 14, 2027 (24 months)  
**Total Grant Request:** $700,000  
**Other Funding:** NSF POSE Phase 1 grant for open-source ecosystem expansion, PolicyEngine operational support, partner in-kind contributions