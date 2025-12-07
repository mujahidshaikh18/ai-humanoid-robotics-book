# Implementation Plan: Physical AI & Humanoid Robotics Textbook

**Branch**: `1-book-gen` | **Date**: 2025-12-05 | **Spec**: specs/1-book-gen/spec.md
**Input**: Feature specification from `/specs/1-book-gen/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Develop a complete Docusaurus-based technical book, "Physical AI & Humanoid Robotics", organized into 4 modules (ROS 2 → Gazebo/Unity → Isaac → VLA). The book will cover conceptual, technical, and applied humanoid robotics, with each chapter featuring explanations, technical depth, code examples, diagrams, hands-on tasks, and APA-style citations. Content will be produced through a research-concurrent writing pipeline, iterated through brief, research, draft, validate, and refine stages, and delivered as Markdown/MDX for GitHub Pages deployment.

## Technical Context

**Language/Version**: Python (for ROS 2 and AI examples), YAML, JSON
**Primary Dependencies**: ROS 2, Gazebo, Unity, NVIDIA Isaac, VLA frameworks (Whisper, LLM-based planners)
**Storage**: Filesystem (for Docusaurus content and assets)
**Testing**: Manual content review, code syntax validation, Docusaurus build validation, Mermaid diagram rendering validation.
**Target Platform**: Web (Docusaurus output)
**Project Type**: Documentation/Book Generation (Docusaurus)
**Performance Goals**: N/A (Focus on content quality and rendering speed in Docusaurus)
**Constraints**: Word count (5,000-7,000 words), minimum 15 sources, PDF output with embedded citations, Docusaurus v3 compatible structure, Markdown (*.mdx) output. Focus on hands-on projects.
**Scale/Scope**: 4 modules, 20 chapters, comprehensive educational content for beginners to experts.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Accuracy**: All factual claims and technical assertions MUST be verified against primary sources. (Pass)
- **II. Clarity**: Content MUST be written for an academic audience (beginners to experts). Explanations should be precise, unambiguous. (Pass)
- **III. Reproducibility**: All claims, experiments, and code examples MUST be reproducible and traceable to their sources. (Pass)
- **IV. Rigor**: Preference MUST be given to peer-reviewed academic sources. All concepts MUST reflect established scientific and engineering principles. (Pass)
- **Key Standards**: APA citation compliance, 50% peer-reviewed sources, 0% plagiarism, Flesch-Kincaid grade 10-12. (Pass)
- **Project Constraints**: Word count, min 15 sources, PDF output, Docusaurus platform, hands-on focus. (Pass)

## Project Structure

### Documentation (this feature)

```text
specs/1-book-gen/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
# Docusaurus Project Structure
docs/
├── module-1/
│   ├── chapter-1.mdx
│   ├── ...
│   └── chapter-5.mdx
├── module-2/
│   ├── chapter-6.mdx
│   ├── ...
│   └── chapter-10.mdx
├── module-3/
│   ├── chapter-11.mdx
│   ├── ...
│   └── chapter-15.mdx
├── module-4/
│   ├── chapter-16.mdx
│   ├── ...
│   └── chapter-20.mdx
sidebars.js
docusaurus.config.js
static/
package.json
README.md
```

**Structure Decision**: The project will follow a Docusaurus-native structure, with content organized into `docs/module-X/` directories. This aligns with the specified output structure and Docusaurus best practices for multi-module content.


## Decisions

### Session 2025-12-05

- Q: Which simulation engine(s) should be the primary focus for detailed examples and hands-on labs within the book? → A: Gazebo Classic & Unity
- Q: Which code style standard should be adopted for Python and ROS 2 code examples throughout the book? → A: Hybrid (PEP8 primary, ROS 2 secondary)
- Q: Which robot description format(s) should be primarily taught and used for humanoid robot examples in the book? → A: Both (URDF for ROS/kinematics, SDF for Gazebo/physics)
- Q: For LLM examples and discussions in the book, should the primary focus be on local (edge) inference or cloud-based inference? → A: Both (hybrid approach)
- Q: What should be the primary architectural structure for the VLA pipeline discussed and exemplified in the book? → A: Whisper → LLM → Planner → ROS 2 actions

## Complexity Tracking

