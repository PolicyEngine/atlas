import React from 'react';
import '../styles/BlogPost.css';

const BlogPost: React.FC = () => {
  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <h1>
          The Grant Application That Proved Everything Can Be Software: How Treating a PBIF 
          Proposal as Code Unlocked Agentic AI
        </h1>

        <p className="author">
          <em>By Max Ghenis, CEO of PolicyEngine</em>
        </p>

        <p>
          Last night, I submitted PolicyEngine's application for the{' '}
          <a
            href="https://www.challenge.gov/?challenge=pbif-summer-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Benefit Innovation Fund (PBIF)
          </a>{' '}
          - a comprehensive 4,300-word proposal, complete with budget spreadsheets, architecture
          diagrams, team bios, and support letters. But this isn't a story about grant writing. 
          It's about discovering that <strong>any complex project - even a federal grant application - 
          can be transformed into software, and when you do that, agentic AI becomes impossibly 
          powerful.</strong>
        </p>

        <p>
          I didn't type a single word of the application myself. Instead, I structured the entire 
          grant as a software repository and let Claude Code manage it like any other codebase. 
          The result? Not just a successful application, but a fundamental rethinking of how AI 
          can operate in non-technical domains.
        </p>

        <p>
          You can explore our PolicyEngine Atlas proposal at{' '}
          <a href="https://policyengine.github.io/atlas" target="_blank" rel="noopener noreferrer">
            policyengine.github.io/atlas
          </a>{' '}
          - itself a React application that evolved alongside the grant narrative.
        </p>

        <h2>The Challenge: More Than Just a Grant Application</h2>

        <p>
          The PBIF Summer 2025 open call gave applicants just four weeks from announcement to
          submission - an unusually short window for a federal grant. This compressed timeline meant
          the last week became a whirlwind of stakeholder conversations. Many potential partners
          were finalizing their own PBIF applications, and we were all trying to coordinate a
          broader community strategy - figuring out how different proposals could complement rather
          than compete with each other.
        </p>

        <p>
          The application for our PolicyEngine Atlas project wasn't just about writing prose. It was
          about crystallizing a product vision while simultaneously building coalition support. The
          application required:
        </p>

        <ul>
          <li>
            15 detailed responses across three sections (Executive Summary, Value Proposition,
            Technical Feasibility)
          </li>
          <li>Strict 250-word limits per question</li>
          <li>
            A $729k budget synchronized between YAML, Google Sheets, and narrative descriptions
          </li>
          <li>
            Supporting materials including team bios, project roadmaps, and architecture diagrams
          </li>
          <li>Combining 7 support letters into a single PDF with a cover page</li>
        </ul>

        <p>
          But beyond the requirements, I wanted to use this process to sharpen the product concept
          through stakeholder feedback. So I also built:
        </p>
        <ul>
          <li>An interactive React mockup to visualize the Atlas interface</li>
          <li>Architecture diagrams showing the technical implementation</li>
          <li>A public website to share with stakeholders for rapid feedback</li>
        </ul>

        <p>
          With the deadline looming, stakeholder conversations happening in parallel, and the
          product concept evolving in real-time, attempting this in traditional documents would have
          been impossible.
        </p>

        <h2>The Solution: Treating a Grant Like Code</h2>

        <p>
          Here's the key insight: I structured the entire application as a software repository.
          Instead of Word documents and scattered emails, everything lived in a single Git
          repository:
        </p>

        <pre className="code-block">{`atlas/                      # Renaming from policy-library
├── docs/pbif/
│   ├── responses/          # 15 markdown files, one per question
│   ├── letters/            # Support letters and combination script
│   └── attachments/        # Team bios, roadmap, budgets
├── pbif_budget_filler/     # Python scripts to populate Google Sheets
├── scripts/                # Build scripts to generate TypeScript
└── src/components/         # React components for the website`}</pre>

        <p>
          This structure transformed grant writing from a document editing task into a software
          development project - exactly where Claude Code excels.
        </p>

        <h2>The Workflow: Natural Language as the Interface</h2>

        <p>Here's how a typical interaction would go:</p>

        <p>
          <strong>Me:</strong> "The impact evaluation section should focus on our three objectives:
          accessible, clear, and computable. Update it to use those as the evaluation framework."
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>
            Reads the current content, rewrites the entire section maintaining the 250-word limit,
            updates the TypeScript, and confirms the word count
          </em>
        </p>

        <p>Even for tiny changes:</p>

        <p>
          <strong>Me:</strong> "Change 'Government agencies increasingly seek' to 'will increasingly
          seek' - we're not there yet"
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>
            Finds the exact location across multiple files, makes the edit, rebuilds the application
          </em>
        </p>

        <h2>The Power Moves</h2>

        <h3>1. Visualizing to Sharpen the Vision</h3>

        <p>
          The React mockup wasn't a grant requirement - it was my way of thinking through the
          product. As I had stakeholder conversations, I could immediately implement their feedback:
        </p>

        <p>
          <strong>Stakeholder:</strong> "How would a caseworker actually find documents?"
        </p>

        <p>
          <strong>Me to Claude Code:</strong> "Add a search interface to the mockup showing semantic
          search across documents"
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>
            Updates the React component, adds search UI with example queries like 'SNAP categorical
            eligibility pathways'
          </em>
        </p>

        <p>
          <strong>Next stakeholder meeting:</strong> <em>Shows the live mockup</em>
        </p>

        <p>
          <strong>Stakeholder:</strong> "Oh, I see it now! What if you could also track document
          changes over time?"
        </p>

        <p>
          This iterate-show-refine cycle happened dozens of times. The mockup became a thinking tool
          - each visual iteration sharpened the concept, which then improved how I described it in
          the application text. The website at policyengine.github.io/atlas became a living
          specification that stakeholders could interact with, making abstract concepts concrete.
        </p>

        <p>
          The systematic approach proved invaluable for stakeholder coordination. When a partner
          would say "We're applying for X funding to do Y," I could immediately update our
          application to show how Atlas would complement their work. Claude Code would methodically
          propagate these partnership details across all relevant sections - from the stakeholder
          engagement narrative to the budget justification to the dissemination plan. This careful
          coordination helped the community present a coherent ecosystem strategy rather than
          isolated projects.
        </p>

        <h3>2. Iterative Word Count Refinement</h3>

        <p>
          PBIF's strict 250-word limits meant every word mattered. We built a Python script that 
          reads all markdown files and enforces these limits:
        </p>

        <pre className="code-block">{`word_count = len(content.split())
if word_count > 250:
    print(f"⚠️ WARNING: Answer {q_num} exceeds 250 words ({word_count} words)")`}</pre>

        <p>
          But here's where it got interesting - Claude Code would iteratively refine responses when 
          they exceeded limits. It wouldn't just truncate; it would rewrite for conciseness:
        </p>

        <p>
          <strong>First attempt:</strong> 267 words - "PolicyEngine Atlas represents a comprehensive 
          solution to the infrastructure crisis facing organizations..."
        </p>

        <p>
          <strong>Second attempt:</strong> 254 words - Removes filler words like "comprehensive" and 
          "represents"
        </p>

        <p>
          <strong>Final version:</strong> 249 words - Combines sentences, uses active voice, cuts 
          redundancy while preserving all key points
        </p>

        <p>
          This iterative refinement happened automatically. Claude Code would run the script, see 
          the warning, trim the content, regenerate the TypeScript, and verify again - all without 
          me intervening. It learned to write more concisely with each iteration.
        </p>

        <h3>3. Building a Custom Budget Tool (Despite Claude Code's Protests)</h3>

        <p>
          PBIF provided a Google Sheets template that all applicants had to use. Rather than
          manually entering numbers, I asked Claude Code to build a custom Python package
          (`pbif_budget_filler`) to populate it programmatically.
        </p>

        <p>
          Claude Code initially struggled with the Google Sheets API authentication and repeatedly
          suggested: "It would be much simpler to just enter the numbers manually." But I persisted,
          and we built a system that:
        </p>

        <ul>
          <li>Stored budget data in `budget_data.yaml` as the source of truth</li>
          <li>
            Used the GSA (General Services Administration) API to automatically fetch per diem rates
            for travel
          </li>
          <li>Pushed updates to Google Sheets in real-time via batch API calls</li>
          <li>Synchronized with narrative text in the application</li>
        </ul>

        <p>
          The payoff came when making changes. When I said "let's add the NAWRS conference," Claude
          Code would:
        </p>
        <ol>
          <li>Look up Denver's GSA per diem rates ($215/night lodging, $92/day meals)</li>
          <li>Add it to the YAML with proper calculations</li>
          <li>Push to Google Sheets via the API</li>
          <li>Update the dissemination narrative to mention NAWRS</li>
          <li>Refresh my browser to show the spreadsheet updating in real-time</li>
        </ol>

        <p>
          Sure, we could have crafted the YAML file first and entered everything into Google Sheets
          at the end. But watching the official budget spreadsheet update live as we discussed
          changes made the whole system feel alive and responsive. When stakeholders suggested
          budget adjustments, I could screen-share the actual PBIF template updating in real-time -
          far more convincing than promises to "update the budget later."
        </p>

        <h3>4. The Discipline: "Don't Touch the Code" (Or Anything Else)</h3>

        <p>
          In my first job out of college, consulting, the golden rule for Excel mastery was "don't 
          touch the mouse." Keyboard shortcuts were everything. You had to feel the pain of not 
          using the mouse to force yourself to learn the efficient way. This project had a similar 
          discipline: <strong>"Don't touch the code - or anything else."</strong>
        </p>

        <p>
          I challenged myself to do everything within Claude Code. Quick questions I'd normally 
          Google or ask ChatGPT? Asked Claude Code. Minor copy edits? Claude Code. Researching 
          academic articles about administrative burden? Claude Code with WebSearch. Checking if 
          a statistic was real? Claude Code with WebFetch. 
        </p>

        <p>
          The discipline was almost absolute - 95% of tasks stayed in the terminal. The only 
          exceptions were downloading support letters to my Downloads folder (though I probably 
          could have set up an email client locally - next time). This constraint forced me to 
          discover Claude Code's full capabilities. Just like avoiding the mouse in Excel teaches 
          you powerful shortcuts, avoiding manual intervention taught me how to orchestrate complex 
          workflows through natural language alone.
        </p>

        <p>
          This extends to managing corrections. Like a manager reviewing a junior employee's draft, 
          I could have directly edited files myself - but that would miss the point. When I spotted 
          an error like "Government agencies increasingly seek," I didn't open the file and change 
          it to "will increasingly seek." Instead, I told Claude Code exactly what needed changing, 
          teaching it my preferences so it would apply them consistently across the entire codebase.
        </p>

        <p>
          This teaching-through-correction approach proved essential when managing hallucinations.
          Even using Opus 4.1 exclusively (I'm on Claude Code Max 20x and still approached limits),
          Claude Code would occasionally invent compelling but false details. It loved claiming that
          "18% of policy document links are dead" - which would have been a perfect statistic if it
          had any basis in reality.
        </p>

        <p>
          Over the course of the application, I probably corrected a couple dozen hallucinated
          facts:
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>
            Writes that "a 2023 GAO study found 30% of benefit denials stem from documentation
            issues"
          </em>
        </p>

        <p>
          <strong>Me:</strong> "DO NOT MAKE UP STATISTICS! Where is that from?"
        </p>

        <p>
          <strong>Claude Code:</strong> <em>Cannot find source, removes the claim</em>
        </p>

        <p>
          <strong>Me:</strong> "When you don't know something, use placeholders like [CITATION
          NEEDED] or [X%]"
        </p>

        <p>
          This precision in feedback - being specific about what's wrong and how to fix it - helped
          Claude Code learn my standards. The key difference from human management is that Claude 
          Code could search the entire repository instantly to verify claims:
        </p>

        <p>
          <strong>Me:</strong> "Did we actually mention APHSA conference?"
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>
            Greps through all files, finds it's only in one section, adds it to the dissemination
            section
          </em>
        </p>

        <p>
          <strong>Me:</strong> "Pavel didn't work at the Atlanta Fed, he worked WITH them"
        </p>

        <p>
          <strong>Claude Code:</strong>{' '}
          <em>Updates his bio across team bios, website, and application text</em>
        </p>

        <p>
          The repository structure made fact-checking efficient - when I spotted an error, Claude
          Code could verify and fix it everywhere at once.
        </p>

        <h3>5. Document Assembly Automation</h3>

        <p>For the support letters, instead of manually combining PDFs:</p>

        <pre className="code-block">{`def combine_pdfs(pdf_files, output_file):
    writer = PdfWriter()
    for pdf_file in pdf_files:
        reader = PdfReader(pdf_file)
        for page in reader.pages:
            writer.add_page(page)`}</pre>

        <p>
          Claude Code wrote scripts to read a YAML configuration, create a cover page noting our
          project name change, and combine everything into a single PDF.
        </p>

        <h3>6. Simulated Grant Reviews and CI as Quality Control</h3>

        <p>
          Perhaps the most powerful aspect was treating the grant like production software with 
          continuous integration. Every change went through the same rigorous process:
        </p>

        <ol>
          <li><strong>Create a pull request</strong> - Even for tiny changes</li>
          <li><strong>CI runs automatically</strong> - Linting, type checking, build verification</li>
          <li><strong>Watch the checks</strong> - Claude Code would monitor CI status</li>
          <li><strong>Fix any issues</strong> - If Prettier failed, run formatting and push again</li>
          <li><strong>Merge when green</strong> - Only after all checks passed</li>
        </ol>

        <p>
          But we went further - I had Claude Code simulate grant reviews from different perspectives:
        </p>

        <p>
          <strong>Me:</strong> "Review this application as a skeptical PBIF reviewer. What weaknesses 
          do you see?"
        </p>

        <p>
          <strong>Claude Code:</strong> <em>Analyzes the entire application, identifies that we claim 
          government partnerships but don't have letters from agencies, suggests emphasizing 
          existing Federal Reserve collaboration more</em>
        </p>

        <p>
          <strong>Me:</strong> "Now review it as someone who cares about equity and access"
        </p>

        <p>
          <strong>Claude Code:</strong> <em>Points out we should mention how clearer policies 
          disproportionately help vulnerable populations, adds research citations about 
          administrative burden's disparate impact</em>
        </p>

        <p>
          These simulated reviews surfaced blind spots I wouldn't have caught. Combined with the 
          CI pipeline ensuring technical quality, we had both content and code review happening 
          continuously. The GitHub history shows dozens of PRs, each improving the application 
          based on these reviews.
        </p>

        <h2>Maintaining Rigor Under Pressure</h2>

        <p>
          The compressed timeline demanded efficiency without sacrificing accuracy. Each change, no
          matter how small, followed the same disciplined process:
        </p>

        <p>"We need a 2026-2027 organizational budget"</p>

        <p>
          Claude Code created a comprehensive budget document with historical growth rates and
          revenue projections, carefully calculating each figure from our actual financial data
          rather than making assumptions.
        </p>

        <p>"Remove multi-language support, we're not doing that"</p>

        <p>
          Claude Code searched across all 50+ files to find every mention, ensuring nothing was
          missed - a task that would have taken hours manually but happened in seconds with perfect
          accuracy.
        </p>

        <p>"The budget is $728,907 not $682,907, update everywhere"</p>

        <p>
          Claude Code traced this number through the budget tool, Google Sheets API, narrative
          sections, and supporting documents, ensuring perfect consistency across all systems.
        </p>

        <h2>The Results</h2>

        <p>Working methodically over several days, Claude Code and I:</p>
        <ul>
          <li>Wrote and revised 4,300 words of grant narrative</li>
          <li>Created 3 technical diagrams</li>
          <li>Generated 4 PDF attachments</li>
          <li>Combined 7 support letters</li>
          <li>Synchronized a complex budget across multiple systems</li>
          <li>Built a React website to showcase everything</li>
          <li>Made hundreds of micro-edits for accuracy</li>
        </ul>

        <p>
          The systematic approach enabled us to submit a complete, accurate, and polished
          application despite the compressed timeline and evolving requirements.
        </p>

        <h2>Lessons Learned</h2>

        <h3>1. Repository Structure is Everything</h3>
        <p>
          By organizing the grant as a software project, every piece of information had a home.
          Claude Code could navigate the structure and understand relationships between documents.
        </p>

        <h3>2. Natural Language is the Ultimate Interface</h3>
        <p>
          I never opened a text editor. Every change, from major rewrites to single-word edits,
          happened through conversation. "Change X to Y" is faster than finding and editing
          manually.
        </p>

        <h3>3. Consistency Through Code</h3>
        <p>
          Traditional grant writing suffers from version control issues and inconsistent
          information. With everything in Git and build scripts enforcing consistency, we never had
          conflicting numbers or outdated sections.
        </p>

        <h3>4. AI as a Perfect Recall Partner</h3>
        <p>
          Claude Code remembered every claim, number, and promise across all documents. When I said
          "don't make up statistics," it would verify claims against source documents. When I
          corrected a fact once, it propagated everywhere.
        </p>

        <h3>5. The Power of Treating Documents as Data</h3>
        <p>
          Our markdown files weren't just text - they were data sources that could be validated,
          transformed, and synchronized. The word count enforcer, budget synchronizer, and PDF
          generator all treated documents as structured data.
        </p>

        <h2>The Breakthrough: Everything is Software</h2>

        <p>
          In 2011, Marc Andreessen wrote that "software is eating the world." He was right, but 
          perhaps not in the way he imagined. It's not just that software companies are disrupting 
          industries - it's that <strong>everything can become software if you structure it that 
          way.</strong> And when you do, you unlock something extraordinary.
        </p>

        <p>
          Here's the real insight: <strong>By treating the grant application as a software project, 
          I unlocked the full power of agentic AI for a domain that has nothing to do with 
          programming.</strong> This isn't about AI helping with coding - it's about recognizing that 
          any complex project can be structured as code, and once you do that, AI tools become 
          orders of magnitude more powerful.
        </p>

        <p>
          Think about what we actually did: We took a grant application - traditionally a Word 
          document edited by committee - and transformed it into:
        </p>

        <ul>
          <li>Markdown files in version control</li>
          <li>Python scripts enforcing constraints</li>
          <li>Automated CI/CD pipelines</li>
          <li>Pull requests for every change</li>
          <li>Automated tests and validation</li>
          <li>API integrations with Google Sheets</li>
        </ul>

        <p>
          Suddenly, Claude Code could operate at full capacity. It could search across files, 
          maintain consistency, run tests, create pull requests, monitor deployments. The grant 
          became <em>computable</em>. And when something is computable, agentic AI can manage it 
          with superhuman precision.
        </p>

        <p>
          <strong>This approach works for anything:</strong>
        </p>

        <ul>
          <li><strong>Legal contracts</strong> → Markdown + version control + automated clause validation</li>
          <li><strong>Research papers</strong> → LaTeX + citation management + automated fact-checking</li>
          <li><strong>Business plans</strong> → YAML data + markdown narrative + financial model sync</li>
          <li><strong>Policy documents</strong> → Structured text + change tracking + stakeholder review flows</li>
          <li><strong>Even wedding planning</strong> → Task lists + budget tracking + vendor management</li>
        </ul>

        <p>
          The transformation happens when you stop thinking "this is a document" and start thinking 
          "this is a data structure with business logic." Once you make that shift, you can leverage 
          the entire software development ecosystem - version control, testing, CI/CD, code review - 
          for any domain. And more importantly, you can unleash agentic AI to manage it all.
        </p>

        <p>
          The grant application became a living system that could evolve, validate itself, and 
          maintain perfect consistency across dozens of interconnected components. We didn't just 
          write a grant - we built a grant-writing machine that happened to produce a single 
          document as its output.
        </p>

        <h2>The Future: When Everything Becomes Software</h2>

        <p>
          This experiment proved something profound: <strong>The boundary between "technical" and 
          "non-technical" work is dissolving.</strong> When you can structure any project as code, 
          agentic AI can manage it with the same precision it brings to software development. The 
          constraint isn't the AI's capability - it's our imagination about what can be coded.
        </p>

        <p>
          The entire project is open source at{' '}
          <a href="https://github.com/policyengine/atlas" target="_blank" rel="noopener noreferrer">
            github.com/policyengine/atlas
          </a>. 
          Every file, script, and component is there - not just as a grant application, but as a 
          template for how to transform any complex project into software.
        </p>

        <p>
          For your next project - whatever it is - ask yourself: How could this be code? How could 
          I structure this so an AI agent could manage it? You might discover, as I did, that the 
          answer transforms not just how you work, but what becomes possible.
        </p>

        <p>
          <strong>The revolution isn't that AI can write. It's that when you treat everything as 
          software, AI can do everything software developers do: architect, implement, test, deploy, 
          maintain, and evolve complex systems. The grant was just the beginning.</strong>
        </p>

        <hr />

        <p>
          <em>
            PolicyEngine's{' '}
            <a
              href="https://www.challenge.gov/?challenge=pbif-summer-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              PBIF application
            </a>{' '}
            for PolicyEngine Atlas aims to create an AI-powered archive of safety net policy
            documents. While we wait to hear back from PBIF, the process of creating the application
            has already taught us valuable lessons about the future of human-AI collaboration in
            knowledge work.
          </em>
        </p>
      </article>
    </div>
  );
};

export default BlogPost;
