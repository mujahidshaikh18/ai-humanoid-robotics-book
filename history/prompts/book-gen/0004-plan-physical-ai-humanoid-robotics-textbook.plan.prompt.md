---
id: 0004
title: Plan Physical AI & Humanoid Robotics Textbook
stage: plan
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: book-gen
branch: 1-book-gen
user: user
command: /sp.plan
labels: ["planning", "textbook", "AI", "robotics"]
links:
  spec: specs/1-book-gen/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/1-book-gen/plan.md
tests:
null
---

## Prompt

```text

=====================================================
ARCHITECTURE SKETCH
=====================================================

Goal:
Develop a complete Docusaurus-based technical book,
"Physical AI & Humanoid Robotics", organized into 4 modules
(ROS 2 → Gazebo/Unity → Isaac → VLA),
covering conceptual, technical, and applied humanoid robotics.

High-Level Architecture:

1. Content Architecture
   - 4 Modules → 20 Chapters → each chapter produces:
       • Conceptual explanation
       • Technical depth
       • Code examples (ROS 2, Python, YAML)
       • Diagrams (Mermaid)
       • Hands-on tasks
       • APA-style citations
   - Folder structure aligned with Docusaurus (docs/module-x/).

2. Production Pipeline
   - Research-Concurrent Writing:
       • For each chapter → research while writing.
       • Not upfront research; iterative refinement.
   - Iteration flow:
       Chapter Brief → Research → Draft → Validate → Refine.

3. Delivery Architecture
   - Markdown/MDX output
   - Docusaurus v3 compatible structure
   - GitHub Pages deployment

4. Quality Control Pipeline
   - APA citation compliance
   - Technical accuracy (ROS 2, Gazebo, Isaac)
   - Code correctness validation
   - Structure consistency across chapters
   - Uniform formatting & terminology

-----------------------------------------------------
SECTION STRUCTURE (FOR EVERY CHAPTER)
-----------------------------------------------------

Each chapter in the book follows a consistent structure:

1. Overview
   - What the chapter covers
   - Learning objectives

2. Background Concepts
   - Key theory
   - Physical AI foundations
   - APA citations

3. Technical Breakdown
   - ROS/Gazebo/Isaac/VLA principles
   - Architecture diagrams
   - Algorithms used

4. Step-by-Step Procedures
   - Installation/setup steps
   - Practical instructions
   - Code examples (Python, ROS 2, YAML)

5. Hands-On Lab
   - Clear reproducible steps
   - Expected outputs
   - Testing method

6. Diagrams
   - Mermaid diagrams for:
        • Data flow
        • ROS graphs
        • Humanoid control loops
        • Perception pipelines

7. Summary & Key Takeaways

8. References
   - APA formatted (books, papers, docs)

-----------------------------------------------------
RESEARCH APPROACH
-----------------------------------------------------

We use a **research-concurrent** approach:

PHASE 1 — Research
- For each chapter:
    • Fetch authoritative sources (ROS docs, Gazebo docs, Isaac SDK guides)
    • Collect APA-format reference data
    • Build conceptual baseline

PHASE 2 — Foundation
- Define:
    • Key terms
    • Theoretical explanations
    • Required diagrams

PHASE 3 — Analysis
- Break down:
    • Robotics subsystems (perception, locomotion, planning)
    • Software stacks (ROS 2, Isaac, VLA)
    • Code patterns
    • Inter-module interactions

PHASE 4 — Synthesis
- Combine research + analysis into:
    • Final chapter content
    • Code examples
    • Hands-on workflows
    • Final Markdown output

-----------------------------------------------------
QUALITY VALIDATION CHECKLIST
-----------------------------------------------------

Every chapter must validate against these criteria:

1. **Content Accuracy**
   - Matches official ROS 2, Gazebo, Isaac, and OpenAI references
   - Technical descriptions verified

2. **Code Validity**
   - Python/ROS code runnable
   - No undefined variables or missing imports

3. **Structural Consistency**
   - Follows the defined 8-part chapter structure
   - Includes diagrams where needed

4. **Pedagogical Quality**
   - Easy to follow
   - Correct ordering from simple → complex

5. **APA Citations**
   - All external concepts cited properly
   - Reference section included

6. **Book-Wide Consistency**
   - Terminology unified
   - Style coherent
   - Formatting identical across chapters

-----------------------------------------------------
DECISIONS NEEDING DOCUMENTATION
-----------------------------------------------------

The following must be documented at build time:

1. **Simulation Engine Choice**
   Options:
      • Gazebo Classic
      • Gazebo Fortress/Ignition
      • Isaac Sim only
   Tradeoff:
      Gazebo good for physics, Isaac for photorealism.

2. **Code Style Standard**
   Options:
      • PEP8 Python
      • ROS 2 style guide
   Tradeoff:
      PEP8 ensures readability, ROS 2 ensures consistency.

3. **URDF vs SDF for humanoids**
   Options:
      • URDF for kinematic model
      • SDF for physics accuracy
   Tradeoff:
      URDF simpler, SDF more realistic.

4. **LLM Local vs Cloud**
   Options:
      • Edge Jetson inference
      • Cloud inference
   Tradeoff:
      Cloud more powerful, Edge lower latency.

5. **VLA pipeline structure**
   Options:
      • Whisper → LLM → Planner → ROS 2 actions
      • Whisper → Intent engine → Hard-coded planner
   Tradeoff:
      LLM planner is flexible, hard-coded planner is safer.

6. **Deployment Path**
   Options:
      • GitHub Pages
      • Self-hosted
   Tradeoff:
      GitHub Pages easy and free, self-hosted gives control.

-----------------------------------------------------
TESTING STRATEGY
-----------------------------------------------------

Testing covers content validation, structural validation, and code correctness.

1. **Structural Acceptance Criteria**
   - Each chapter contains all 8 required sections.
   - Folder structure matches Docusaurus conventions.
   - Sidebars auto-generate correctly.

2. **Code Testing**
   - Syntax validation for Python and ROS 2 code.
   - ROS graph consistency:
       • Nodes compile
       • Topics exist
       • Actions/services resolvable

3. **Simulation Testing**
   - URDF loads in RViz and Gazebo without warnings.
   - Isaac scenes render successfully.
   - VSLAM pipeline runs on sample data.

4. **Intelligence Testing**
   - Whisper transcription tested on sample inputs.
   - LLM task decomposition produces valid action sequences.
   - Vision perception correctly identifies objects.

5. **Cross-Module Integration**
   - ROS 2 control interacts with Gazebo physics.
   - Isaac perception outputs usable to Nav2.
   - VLA pipeline connects to ROS 2 actions.

6. **Final Acceptance Test: Capstone Robot**
   The humanoid robot must:
   - Accept voice command
   - Understand intent
   - Plan sequence
   - Navigate environment
   - Identify object
   - Manipulate object
   - Confirm success
```

## Response snapshot

The planning phase for the "Physical AI & Humanoid Robotics Textbook" is complete. 5 questions were asked and answered, and the plan document (`specs/1-book-gen/plan.md`) has been updated with these decisions. The plan is now ready. Suggested next command: `/sp.tasks`

## Outcome

- ✅ Impact: Implementation plan created and ambiguities resolved through user interaction.
- 🧪 Tests: No formal tests run, but planning structure validated.
- 📁 Files: specs/1-book-gen/plan.md updated with decisions.
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: Successfully guided the user through key architectural decisions for the textbook, ensuring alignment before proceeding to task generation.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
