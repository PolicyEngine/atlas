# Partner Statements of Work - PolicyEngine Policy Library

## MyFriendBen - Deep Integration Pilot
**Amount: $50,000**  
**Period: 12 months**

### Organization Overview
MyFriendBen operates Colorado's leading digital benefits screener, serving 3,500+ users monthly across the state. Their platform helps vulnerable families navigate complex eligibility requirements for SNAP, Medicaid, WIC, and other safety net programs. As an established PolicyEngine API client, they already integrate our benefits calculations into their screening process.

### Scope of Work

#### 1. Caseworker Training Materials Development (Months 1-3)
- Develop comprehensive training curriculum integrating Policy Library document access with MyFriendBen's existing screening workflow
- Create training modules covering:
  - Accessing authoritative policy documents during client consultations
  - Verifying eligibility criteria against primary sources
  - Using document citations to resolve disputes or clarify requirements
  - Navigating multi-program eligibility with document cross-references
- Produce video tutorials, quick reference guides, and certification materials
- Design assessment tools to measure training effectiveness

#### 2. Caseworker Training Delivery (Months 3-9)
- Conduct initial pilot training with 10-15 caseworkers in Denver metro area
- Refine materials based on pilot feedback
- Roll out statewide training program reaching 200+ caseworkers and benefits navigators
- Deliver monthly refresher webinars covering policy updates and new documents
- Provide ongoing support through dedicated Slack channel and office hours

#### 3. Technical Integration (Months 1-4)
- Enhance existing PolicyEngine API integration to display source documents alongside benefit calculations
- Implement document viewer within MyFriendBen interface showing relevant policy excerpts
- Add "View Source" buttons linking to specific regulatory sections
- Create document bookmarking system for frequently referenced policies
- Develop citation export feature for case documentation

#### 4. Impact Measurement (Months 6-12)
- Track document access patterns and user engagement metrics
- Survey caseworkers on confidence levels and time savings
- Measure reduction in eligibility determination errors
- Document case studies of successful document-assisted resolutions
- Provide quarterly reports on integration effectiveness

### Deliverables
- Comprehensive training curriculum with 20+ hours of content
- 200+ trained caseworkers across Colorado
- Fully integrated document display in MyFriendBen platform
- Quarterly impact reports with metrics and case studies
- Best practices guide for other states to replicate model

---

## Benefit Navigator - Deep Integration Pilot
**Amount: $50,000**  
**Period: 12 months**

### Organization Overview
Benefit Navigator, developed through partnership between Gates Foundation and Nava, provides AI-powered benefits navigation for caseworkers in Los Angeles County and expanding to Riverside County. Their platform includes a closed-domain AI chatbot that helps caseworkers quickly find accurate benefit information. The tool serves 500+ caseworkers supporting thousands of families monthly.

### Scope of Work

#### 1. AI Chatbot Integration (Months 1-4)
- Integrate Policy Library into Benefit Navigator Information Hub and closed-domain AI Chatbot to maximize real-time delivery of trusted benefit information
- Configure chatbot to query Policy Library API for authoritative document sources
- Implement citation system where every AI response includes specific regulatory references
- Train language model on Policy Library document structure for improved retrieval
- Add confidence scoring based on document recency and authority
- Enable chatbot to surface document updates and policy changes proactively

#### 2. Geographic Expansion Support (Months 2-6)
- Facilitate rapid geographic expansion by pre-loading documents for target counties
- Map document requirements for LA County to Riverside County transition
- Identify and archive county-specific implementation guidelines
- Create jurisdiction comparison tools highlighting policy differences
- Support expansion to 3-5 additional California counties

#### 3. Caseworker Training Program (Months 3-9)
- Develop training materials specific to AI-assisted benefits navigation
- Create modules on:
  - Verifying AI responses against source documents
  - Using citations in client communications
  - Navigating multi-jurisdictional policies
  - Leveraging documents for complex eligibility scenarios
- Conduct pilot training with 50 LA County caseworkers
- Expand training to Riverside County (100+ caseworkers)
- Deliver specialized training for supervisors and quality assurance teams

#### 4. Information Hub Enhancement (Months 1-6)
- Integrate document display directly into Information Hub interface
- Create smart document recommendations based on case context
- Implement collaborative annotation system for caseworker insights
- Build document version tracking for policy change management
- Develop export tools for case documentation and appeals

#### 5. Quality Assurance & Metrics (Months 6-12)
- Establish accuracy benchmarks comparing responses with/without document access
- Track reduction in misinformation and eligibility errors
- Measure caseworker confidence and decision speed improvements
- Document successful case resolutions enabled by document access
- Provide monthly metrics dashboards and quarterly analysis reports

### Deliverables
- Fully integrated AI chatbot with Policy Library document sourcing
- 150+ trained caseworkers across LA and Riverside counties
- Geographic expansion toolkit for 3-5 additional counties
- Real-time accuracy monitoring system
- Comprehensive training curriculum with AI-specific modules
- Monthly metrics reports and quarterly impact assessments
- Best practices documentation for AI-powered benefits navigation

---

## Georgia Center for Opportunity - Founding Partner Integration
**Amount: $30,000**  
**Period: 12 months**

### Organization Overview
Georgia Center for Opportunity (GCO) operates comprehensive rules engines for safety net programs across multiple states, with deep expertise in SNAP, Medicaid, and TANF policy implementation. As a founding partner collaborating with the Federal Reserve Bank of Atlanta, GCO brings extensive document collections and policy encoding experience. Their tools serve researchers, policymakers, and direct service organizations across the Southeast.

### Scope of Work

#### 1. Document Contribution & Migration (Months 1-3)
- Conduct one-time bulk transfer of all documents currently used in GCO rules engines
  - Estimated 2,000+ documents covering federal and state policies
  - Include statutes, regulations, guidance letters, and implementation manuals
  - Provide documents in original formats (PDF, HTML, DOC)
- Establish ongoing document contribution pipeline
  - Set up automated weekly exports of new documents as programs are encoded
  - Create GitHub integration for direct document submissions
  - Implement change tracking for document updates
- Document coverage mapping
  - Catalog all programs and jurisdictions covered
  - Identify gaps in current documentation
  - Prioritize additional document acquisition

#### 2. Metadata Verification & Enhancement (Months 2-6)
- Review and verify AI-extracted metadata for contributed documents
  - Validate jurisdiction assignments
  - Confirm program categorizations
  - Verify effective dates and version information
  - Check document relationships and dependencies
- Enhance metadata with GCO's domain expertise
  - Add implementation notes and clarifications
  - Tag documents with common use cases
  - Create cross-references between related policies
  - Identify superseded documents and policy changes
- Establish quality assurance process
  - Develop metadata standards and validation rules
  - Create review workflows for high-priority documents
  - Train GCO team on metadata best practices

#### 3. Rules Engine Integration Testing (Months 4-9)
- Design integration architecture for GCO's rules engine
  - Map current document storage to Policy Library API
  - Create middleware for seamless document retrieval
  - Implement caching for frequently accessed documents
- Develop proof-of-concept integration
  - Select pilot state (likely Georgia or North Carolina)
  - Replace static document links with Policy Library API calls
  - Test document retrieval performance and reliability
- Full integration rollout
  - Migrate all document references to Policy Library
  - Implement version control for policy updates
  - Create fallback mechanisms for system resilience
- Performance optimization
  - Analyze document access patterns
  - Optimize API queries for rules engine workflows
  - Implement predictive document pre-loading

#### 4. Tools Integration & Development (Months 6-12)
- Integrate Policy Library into GCO's existing tools
  - Benefits calculators
  - Eligibility screeners
  - Policy comparison tools
  - Research dashboards
- Develop new features leveraging document access
  - Policy change tracker showing document diffs
  - Jurisdiction comparison tools with source documents
  - Citation generator for research reports
  - Document-backed validation for calculations
- Create demonstration tools
  - Public-facing document explorer for Southeast region
  - API usage examples and code samples
  - Integration guides for other rules engines

#### 5. Knowledge Transfer & Documentation (Months 9-12)
- Document integration patterns and best practices
- Create technical guides for rules engine integration
- Develop case studies showing impact on accuracy
- Train PolicyEngine team on GCO's document organization
- Establish long-term collaboration framework

### Deliverables
- 2,000+ verified documents with enhanced metadata
- Fully integrated rules engine with Policy Library backend
- Integration toolkit for other rules-as-code organizations
- Quarterly document contribution reports
- Technical documentation and integration guides
- Performance benchmarks and optimization recommendations
- Case studies demonstrating accuracy improvements
- Ongoing document contribution pipeline

### Success Metrics
- 100% of GCO documents migrated to Policy Library
- 95%+ metadata accuracy after verification
- <100ms average document retrieval time
- 50% reduction in broken document links
- 20% improvement in rules engine accuracy
- 500+ documents contributed annually ongoing

---

## Budget Summary

| Partner | Amount | Primary Focus |
|---------|--------|--------------|
| MyFriendBen | $50,000 | Caseworker training, Colorado statewide deployment |
| Benefit Navigator | $50,000 | AI chatbot integration, multi-county expansion |
| Georgia Center for Opportunity | $30,000 | Document contribution, rules engine integration |
| **Total** | **$130,000** | |

## Cross-Partner Collaboration

All three partners will participate in:
- Monthly coordination calls to share learnings
- Quarterly workshops to align on best practices
- Annual summit to showcase impact and plan expansion
- Shared Slack workspace for ongoing collaboration
- Joint development of open-source integration tools
- Co-authored white papers on document-driven benefits delivery

## Long-term Sustainability

These partnerships establish sustainable models for:
- **MyFriendBen**: Template for statewide caseworker training programs
- **Benefit Navigator**: Blueprint for AI-powered benefits navigation at scale
- **GCO**: Standard for rules engine document integration

Each partner commits to maintaining integrations beyond the grant period and contributing to the open-source ecosystem.