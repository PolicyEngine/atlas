export const executiveSummaryContent = `# Section 1: Executive Summary & Project Overview

## Project Title
PolicyEngine Policy Library

## Organization
**Name:** PolicyEngine  
**Type:** Non-profit  
**Contact:** Max Ghenis, CEO (max@policyengine.org)

## Executive Summary (limit 250 words)
*"In a concise summary, describe the core problem your project addresses, the proposed technical solution, the target beneficiaries, and the anticipated impact."*

The Policy Library creates infrastructure transforming benefits delivery. When tools access comprehensive source documents, we enable: AI accurately determining multi-program eligibility, caseworkers confidently navigating rules, researchers tracking policy variations, and innovations we haven't imagined.

We combine AI-powered monitoring (Claude/GPT-5) with PolicyEngine's open-source rules engine. We understand document relationships, surface non-obvious connections (TANF-SNAP categorical eligibility), enabling tools to build on authoritative ground truth.

**PBIF Priority Impact:** Income verification via state-specific disregards; reduced SNAP errors through current criteria; confident beneficiary communication with source documents; backlog reduction saving staff time.

**Not starting from scratch:** Collaboration with Federal Reserve Bank of Atlanta and Georgia Center for Opportunity continues—we seed the library with documents covering nationwide scope. MyFriendBen and Benefit Navigator already use our API—we'll add document display to existing requests and integrate into caseworker training ($50k each). Colorado users and Riverside County caseworkers see primary sources alongside calculations.

**12-month timeline:** Months 1-3: Launch 5,000+ documents, 10 states; Months 4-6: API v1 with partners; Months 7-9: 30 states; Months 10-12: Full production covering 50+ jurisdictions.

## Stage of Development
**Status:** Pilot ready / Active pilot

Our collaboration with Atlanta Fed and Georgia Center for Opportunity archives federal and North Carolina SNAP, Medicaid, and TANF documents. Researchers at Georgetown and Michigan already use our pilot repository. PolicyEngine's benefits calculators serve thousands of users, with MyFriendBen and Benefit Navigator among our API clients. We'll build a web application for document submission and retrieval (beyond current API), seeded with documents from ALL participating organizations: PolicyEngine (2,500+ citations), documents in Atlanta Fed's Policy Rules Database model (nationwide coverage), GCO's collection (all states and programs), Prenatal-to-3 Policy Impact Center's research archive (they use PolicyEngine for state tax credit modeling), Better Government Lab and USC research documents, and documents MyFriendBen and Benefit Navigator reference in their systems—totaling 5,000+ documents at launch. We'll enrich all with metadata and convert PDFs to plaintext for efficient searching and AI processing.

## Project Timeline & Funding
**Start Date:** November 15, 2025  
**End Date:** November 14, 2027 (24 months)  
**Total Grant Request:** $675,059  
**Other Funding:** [To be determined]`;

export const valuePropositionContent = `# Section 2: Value Proposition and Responsible Deployment

## Problem Statement (250 words)
*"Clearly articulate the specific problem or challenge your initiative aims to address and how it relates to recent changes in federal policy or funding changes. Provide supporting data or evidence to demonstrate the urgency and significance of this problem - and how you've validated it with staff and/or beneficiaries. Is this an area where non-AI solutions do not already offer effective, fit-for-purpose, affordable approaches?"*

The benefits ecosystem lacks foundational infrastructure for policy documentation, forcing every organization to rebuild document discovery and maintenance. This fragmentation prevents breakthrough innovations: AI tools can't provide accurate multi-program guidance without comprehensive documents, caseworkers can't confidently navigate complex eligibility rules, and researchers can't track policy evolution. Recent changes—SNAP work requirements, Medicaid unwinding, TANF time limits—make this infrastructure critical for system-wide transformation.

We validated this need through partnerships. MyFriendBen and Benefit Navigator spend resources maintaining document access instead of improving user experience. Georgetown and Michigan researchers lack the document foundation for policy analysis. The Federal Reserve Bank of Atlanta's Policy Rules Database collaboration shows even sophisticated institutions need shared infrastructure. Most critically, families navigating benefits face inconsistent information because no single source provides comprehensive, authoritative documentation.

Why not use Archive.org? While excellent for general web preservation, Archive.org can't solve this problem: it captures pages indiscriminately without understanding what's a policy document, provides no API for benefits tools to query "Colorado SNAP rules," can't identify document relationships, and offers no metadata or semantic search. Benefits platforms need purpose-built infrastructure—structured data, reliable APIs, and intelligent document understanding. AI uniquely enables this: (1) Intelligent crawling understands which documents matter for benefits determination, (2) LLMs identify policy changes requiring immediate preservation, (3) AI surfaces non-obvious connections like TANF-SNAP categorical eligibility. Our testing shows Claude and GPT-5 excel at document extraction when properly prompted. This creates infrastructure that amplifies human expertise, enabling innovations impossible without comprehensive, structured document access.

## Solution & Target Beneficiaries (250 words)

The Policy Library solves document disappearance through three integrated components: (1) AI-powered crawlers using Claude/GPT-5 intelligently monitor government websites weekly, understanding context and document relationships; (2) Humans verify accuracy through GitHub pull requests; (3) Our stable API serves documents with permanent source IDs that never break. We'll launch with 5,000+ documents pooled from all participating organizations—PolicyEngine, Atlanta Fed, GCO, Prenatal-to-3 Policy Impact Center at Vanderbilt, Better Government Lab, USC, MyFriendBen, and Benefit Navigator—ensuring comprehensive coverage from day one.

Vulnerable families navigating benefits currently lose access when documents disappear—they are our primary beneficiaries. We involve them through partnerships with direct service organizations that serve these populations daily. MyFriendBen and Benefit Navigator staff provide continuous feedback on document needs and usability, ensuring we capture what families actually need.

Organizations serving these families also benefit significantly. Direct service providers save hours they currently waste maintaining broken links. Our system proactively monitors all document URLs and sends immediate alerts when links break, allowing partners to update references before users encounter errors. Benefits navigators access reliable documentation instantly. University researchers gain the ability to conduct longitudinal policy analysis. Government agencies benefit from permanent archives of their own historical documents.

We involve beneficiaries throughout the project via: Monthly feedback sessions with partner organizations, open GitHub discussions for document requests, public dashboards showing coverage gaps, and direct integration with tools families already use. This participatory approach ensures we're building infrastructure that serves real needs, not theoretical ones.`;

export const technicalFeasibilityContent = `# Section 3: Technical & Practical Feasibility

## Solution Description (250 words)

The Policy Library uses AI as intelligent crawlers that understand government websites like human researchers. Claude and GPT-5 navigate complex site structures, identify relevant documents, and understand relationships between statutes, regulations, and forms. AI acts as our co-pilot while humans provide oversight at critical checkpoints.

**AI techniques:** Large language models (Claude/GPT-5) power intelligent crawling and document extraction. We prompt them to understand government website patterns, identify policy documents, and extract structured metadata. Embedding models for semantic search and duplicate detection. Traditional NLP for document classification and change detection. LLM benchmark framework using PolicyEngine-US to generate ground truth calculations across 10,000+ household scenarios, plus rules-as-code generation experiments measuring how accurately LLMs can create PolicyEngine parameter files with and without document access (building on Beeck Center's approach). MCP (Model Context Protocol) server enabling direct LLM integration for real-time policy lookups.

**Human oversight checkpoints:** (1) Initial crawler configuration: Humans define jurisdiction scope and document types. (2) Document identification: AI proposes documents, humans verify relevance via GitHub PR review. (3) Change detection: AI identifies updates, humans confirm significance. (4) Quality assurance: Regular human audits of AI decisions.

**Architecture with Integration Support:** Crawler service using LangChain for AI orchestration. Continuous monitoring system checks all document URLs daily and sends immediate alerts to partners when links break. Web application enables document submission and retrieval beyond API access. We'll seed the system with documents from ALL confirmed partners: PolicyEngine's 2,500+ cited documents (from our 100% open-source rules engine with 100+ contributors), documents in Atlanta Fed's Policy Rules Database model (nationwide coverage of federal and state programs), GCO's comprehensive collection (all states and programs, not just NC), Prenatal-to-3 Policy Impact Center's research archive (they use PolicyEngine for state tax credit modeling), Better Government Lab and USC academic research, MyFriendBen's Colorado references, and Benefit Navigator's California documents—creating a comprehensive launch library of 5,000+ documents, all enriched with metadata and converted to plaintext for efficient AI processing. Our rules engine integration identifies the most relevant documents for any eligibility decision—including non-obvious connections like TANF regulations when TANF provides categorical eligibility for SNAP. REST API using FastAPI enhances existing partner integrations—MyFriendBen and Benefit Navigator add document display to their current PolicyEngine API calls. When Colorado users check benefits, they see actual state regulations. When Riverside County caseworkers verify eligibility, they access primary sources instantly. PostgreSQL for metadata, S3 for documents, CloudFlare CDN for performance.

This hybrid approach leverages AI's ability to process vast amounts of information while maintaining human judgment for critical decisions, ensuring both scale and accuracy.

**Rules-as-Code Generation Evaluation:** Building on Beeck Center's pioneering work, we'll conduct controlled experiments measuring LLMs' ability to generate accurate rules-as-code for multiple open-source systems—PolicyEngine parameter files and Atlanta Fed Policy Rules Database entries (the only other open-source implementation). We'll test three conditions: (1) Baseline: LLM with only a policy description, (2) Enhanced: LLM with Policy Library document access, (3) Full: LLM with documents plus existing system patterns. We expect document-enhanced LLMs to achieve 70%+ accuracy in generating correct values, formulas, and effective dates—compared to under 30% baseline accuracy. This multi-system evaluation proves the Policy Library's universal value for automated policy implementation across different rules-as-code approaches.`;
