# How I Wrote a 4,300-Word Grant Application Without Typing a Single Word: Using Claude Code for the PBIF

*By Max Ghenis, CEO of PolicyEngine*

Last night, I submitted PolicyEngine's application for the [Public Benefit Innovation Fund (PBIF)](https://www.challenge.gov/?challenge=pbif-summer-2025) - a comprehensive 4,300-word proposal, complete with budget spreadsheets, architecture diagrams, team bios, and support letters. The remarkable part? I didn't type a single word of the application myself. Instead, I used Claude Code as my writing partner, treating the entire grant as a unified software project.

You can explore our PolicyEngine Atlas proposal at [policyengine.github.io/atlas](https://policyengine.github.io/atlas) (note: we're renaming everything from "policy-library" to "atlas" to match our project name).

## The Challenge: More Than Just a Grant Application

The PBIF Summer 2025 open call gave applicants just four weeks from announcement to submission - an unusually short window for a federal grant. This compressed timeline meant the last week became a whirlwind of stakeholder conversations. Many potential partners were finalizing their own PBIF applications, and we were all trying to coordinate a broader community strategy - figuring out how different proposals could complement rather than compete with each other.

The application for our PolicyEngine Atlas project wasn't just about writing prose. It was about crystallizing a product vision while simultaneously building coalition support. The application required:

- 15 detailed responses across three sections (Executive Summary, Value Proposition, Technical Feasibility)
- Strict 250-word limits per question
- A $729k budget synchronized between YAML, Google Sheets, and narrative descriptions
- Supporting materials including team bios, project roadmaps, and architecture diagrams
- Combining 7 support letters into a single PDF with a cover page

But beyond the requirements, I wanted to use this process to sharpen the product concept through stakeholder feedback. So I also built:
- An interactive React mockup to visualize the Atlas interface
- Architecture diagrams showing the technical implementation
- A public website to share with stakeholders for rapid feedback

With the deadline looming, stakeholder conversations happening in parallel, and the product concept evolving in real-time, attempting this in traditional documents would have been impossible.

## The Solution: Treating a Grant Like Code

Here's the key insight: I structured the entire application as a software repository. Instead of Word documents and scattered emails, everything lived in a single Git repository:

```
atlas/                      # Renaming from policy-library
├── docs/pbif/
│   ├── responses/          # 15 markdown files, one per question
│   ├── letters/            # Support letters and combination script
│   └── attachments/        # Team bios, roadmap, budgets
├── pbif_budget_filler/     # Python scripts to populate Google Sheets
├── scripts/                # Build scripts to generate TypeScript
└── src/components/         # React components for the website
```

This structure transformed grant writing from a document editing task into a software development project - exactly where Claude Code excels.

## The Workflow: Natural Language as the Interface

Here's how a typical interaction would go:

**Me:** "The impact evaluation section should focus on our three objectives: accessible, clear, and computable. Update it to use those as the evaluation framework."

**Claude Code:** *Reads the current content, rewrites the entire section maintaining the 250-word limit, updates the TypeScript, and confirms the word count*

Even for tiny changes:

**Me:** "Change 'Government agencies increasingly seek' to 'will increasingly seek' - we're not there yet"

**Claude Code:** *Finds the exact location across multiple files, makes the edit, rebuilds the application*

## The Power Moves

### 1. Visualizing to Sharpen the Vision

The React mockup wasn't a grant requirement - it was my way of thinking through the product. As I had stakeholder conversations, I could immediately implement their feedback:

**Stakeholder:** "How would a caseworker actually find documents?"

**Me to Claude Code:** "Add a search interface to the mockup showing semantic search across documents"

**Claude Code:** *Updates the React component, adds search UI with example queries like 'SNAP categorical eligibility pathways'*

**Next stakeholder meeting:** *Shows the live mockup*

**Stakeholder:** "Oh, I see it now! What if you could also track document changes over time?"

This iterate-show-refine cycle happened dozens of times. The mockup became a thinking tool - each visual iteration sharpened the concept, which then improved how I described it in the application text. The website at policyengine.github.io/atlas became a living specification that stakeholders could interact with, making abstract concepts concrete.

The systematic approach proved invaluable for stakeholder coordination. When a partner would say "We're applying for X funding to do Y," I could immediately update our application to show how Atlas would complement their work. Claude Code would methodically propagate these partnership details across all relevant sections - from the stakeholder engagement narrative to the budget justification to the dissemination plan. This careful coordination helped the community present a coherent ecosystem strategy rather than isolated projects.

### 2. Word Count Enforcement via Python
We built a Python script that reads all markdown files, combines them into TypeScript, and enforces word limits:

```python
word_count = len(content.split())
if word_count > 250:
    print(f"⚠️ WARNING: Answer {q_num} exceeds 250 words ({word_count} words)")
```

Whenever Claude Code edited a section, it would run this script and trim if needed.

### 2. Building a Custom Budget Tool (Despite Claude Code's Protests)

PBIF provided a Google Sheets template that all applicants had to use. Rather than manually entering numbers, I asked Claude Code to build a custom Python package (`pbif_budget_filler`) to populate it programmatically.

Claude Code initially struggled with the Google Sheets API authentication and repeatedly suggested: "It would be much simpler to just enter the numbers manually." But I persisted, and we built a system that:

- Stored budget data in `budget_data.yaml` as the source of truth
- Used the GSA (General Services Administration) API to automatically fetch per diem rates for travel
- Pushed updates to Google Sheets in real-time via batch API calls
- Synchronized with narrative text in the application

The payoff came when making changes. When I said "let's add the NAWRS conference," Claude Code would:
1. Look up Denver's GSA per diem rates ($215/night lodging, $92/day meals)
2. Add it to the YAML with proper calculations
3. Push to Google Sheets via the API
4. Update the dissemination narrative to mention NAWRS
5. Refresh my browser to show the spreadsheet updating in real-time

Sure, we could have crafted the YAML file first and entered everything into Google Sheets at the end. But watching the official budget spreadsheet update live as we discussed changes made the whole system feel alive and responsive. When stakeholders suggested budget adjustments, I could screen-share the actual PBIF template updating in real-time - far more convincing than promises to "update the budget later."

### 3. Managing Hallucinations (Like Managing Human Employees)

Even using Opus 4.1 exclusively (I'm on Claude Code Max 20x and still approached limits), Claude Code would occasionally invent compelling but false details. It loved claiming that "18% of policy document links are dead" - which would have been a perfect statistic if it had any basis in reality.

Over the course of the application, I probably corrected a couple dozen hallucinated facts:

**Claude Code:** *Writes that "a 2023 GAO study found 30% of benefit denials stem from documentation issues"*

**Me:** "DO NOT MAKE UP STATISTICS! Where is that from?"

**Claude Code:** *Cannot find source, removes the claim*

**Me:** "When you don't know something, use placeholders like [CITATION NEEDED] or [X%]"

This mirrors managing human employees - you need oversight, but far less than in the past. The key difference is that Claude Code could search the entire repository instantly to verify claims:

**Me:** "Did we actually mention APHSA conference?"

**Claude Code:** *Greps through all files, finds it's only in one section, adds it to the dissemination section*

**Me:** "Pavel didn't work at the Atlanta Fed, he worked WITH them"

**Claude Code:** *Updates his bio across team bios, website, and application text*

The repository structure made fact-checking efficient - when I spotted an error, Claude Code could verify and fix it everywhere at once.

### 4. Document Assembly Automation
For the support letters, instead of manually combining PDFs:

```python
def combine_pdfs(pdf_files, output_file):
    writer = PdfWriter()
    for pdf_file in pdf_files:
        reader = PdfReader(pdf_file)
        for page in reader.pages:
            writer.add_page(page)
```

Claude Code wrote scripts to read a YAML configuration, create a cover page noting our project name change, and combine everything into a single PDF.

## Maintaining Rigor Under Pressure

The compressed timeline demanded efficiency without sacrificing accuracy. Each change, no matter how small, followed the same disciplined process:

"We need a 2026-2027 organizational budget"

Claude Code created a comprehensive budget document with historical growth rates and revenue projections, carefully calculating each figure from our actual financial data rather than making assumptions.

"Remove multi-language support, we're not doing that"

Claude Code searched across all 50+ files to find every mention, ensuring nothing was missed - a task that would have taken hours manually but happened in seconds with perfect accuracy.

"The budget is $728,907 not $682,907, update everywhere"

Claude Code traced this number through the budget tool, Google Sheets API, narrative sections, and supporting documents, ensuring perfect consistency across all systems.

## The Results

Working methodically over several days, Claude Code and I:
- Wrote and revised 4,300 words of grant narrative
- Created 3 technical diagrams
- Generated 4 PDF attachments
- Combined 7 support letters
- Synchronized a complex budget across multiple systems
- Built a React website to showcase everything
- Made hundreds of micro-edits for accuracy

The systematic approach enabled us to submit a complete, accurate, and polished application despite the compressed timeline and evolving requirements.

## Lessons Learned

### 1. Repository Structure is Everything
By organizing the grant as a software project, every piece of information had a home. Claude Code could navigate the structure and understand relationships between documents.

### 2. Natural Language is the Ultimate Interface
I never opened a text editor. Every change, from major rewrites to single-word edits, happened through conversation. "Change X to Y" is faster than finding and editing manually.

### 3. Consistency Through Code
Traditional grant writing suffers from version control issues and inconsistent information. With everything in Git and build scripts enforcing consistency, we never had conflicting numbers or outdated sections.

### 4. AI as a Perfect Recall Partner
Claude Code remembered every claim, number, and promise across all documents. When I said "don't make up statistics," it would verify claims against source documents. When I corrected a fact once, it propagated everywhere.

### 5. The Power of Treating Documents as Data
Our markdown files weren't just text - they were data sources that could be validated, transformed, and synchronized. The word count enforcer, budget synchronizer, and PDF generator all treated documents as structured data.

## The Implications

This experience demonstrates a fundamentally different approach to complex document creation. By treating the grant as a software project and maintaining rigorous standards throughout, I could focus on strategy and accuracy while Claude Code handled implementation. The key wasn't speed - it was maintaining perfect consistency across dozens of interconnected documents while ensuring every claim was verifiable.

The unified repository approach enabled something unexpected: the product concept evolved through the grant writing process itself. Each stakeholder conversation led to mockup updates, which clarified the vision, which improved the grant narrative, which prompted new mockup features. The grant application became a forcing function for product development, with Claude Code enabling systematic iteration across all artifacts simultaneously.

For any complex document requiring accuracy, consistency, and multiple output formats, this methodical approach is transformative. It's not about rushing or having AI write for you - it's about establishing rigorous processes where natural language becomes the interface for precise, verifiable document creation. The careful approach, with constant fact-checking and systematic propagation of changes, ensures quality that matches or exceeds traditional methods while enabling complexity that would be impossible to manage manually.

## Try It Yourself

The entire project is open source at [github.com/policyengine/atlas](https://github.com/policyengine/atlas) (currently still at github.com/policyengine/policy-library but migrating to match our project name). You can see every file, script, and component we built together. Visit our interactive demonstration at [policyengine.github.io/atlas](https://policyengine.github.io/atlas) to explore the proposed system.

For your next complex document - whether it's a grant, report, or technical specification - consider structuring it as a repository and letting Claude Code be your implementation partner. You might find, as I did, that you can create something far more sophisticated than you could alone, without typing a single word.

---

*PolicyEngine's [PBIF application](https://www.challenge.gov/?challenge=pbif-summer-2025) for PolicyEngine Atlas aims to create an AI-powered archive of safety net policy documents. While we wait to hear back from PBIF, the process of creating the application has already taught us valuable lessons about the future of human-AI collaboration in knowledge work.*