# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/1-book-gen/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for the Docusaurus book.

- [ ] T001 Create base Docusaurus project structure docs/, static/ and package.json
- [ ] T002 Initialize `docusaurus.config.js` with book metadata
- [ ] T003 Initialize `sidebars.js` for navigation
- [ ] T004 Create overall `README.md` for the project

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core guidelines and structure that MUST be complete before ANY chapter content can be created.

**⚠️ CRITICAL**: No chapter writing can begin until this phase is complete.

- [ ] T005 Define consistent chapter section structure in specs/1-book-gen/plan.md
- [ ] T006 Establish content guidelines for code examples (Python, ROS 2, YAML, JSON) in specs/1-book-gen/plan.md
- [ ] T007 Establish guidelines for Mermaid diagrams in specs/1-book-gen/plan.md
- [ ] T008 Establish guidelines for APA-style citations and references in specs/1-book-gen/plan.md

**Checkpoint**: Foundation ready - user story (chapter) implementation can now begin in parallel.

---

## Phase 3: User Story 1 - Learning ROS 2 Fundamentals (Priority: P1) 🎯 MVP

**Goal**: Develop Module 1 covering foundational ROS 2 concepts and integration with AI agents.

**Independent Test**: A student can successfully build and run simple ROS 2 nodes and understand its messaging system, demonstrating foundational robotics programming skills.

### Implementation for User Story 1

- [ ] T009 [P] [US1] Generate content for `docs/module-1/chapter-1.mdx` (Introduction to Physical AI & ROS 2)
- [ ] T010 [P] [US1] Generate content for `docs/module-1/chapter-2.mdx` (ROS 2 Core Architecture)
- [ ] T011 [P] [US1] Generate content for `docs/module-1/chapter-3.mdx` (Building ROS 2 Packages in Python)
- [ ] T012 [P] [US1] Generate content for `docs/module-1/chapter-4.mdx` (URDF & Humanoid Robot Description)
- [ ] T013 [P] [US1] Generate content for `docs/module-1/chapter-5.mdx` (Integrating AI Agents with ROS (rclpy))

**Checkpoint**: Module 1 content should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Simulating Humanoid Robots (Priority: P1)

**Goal**: Develop Module 2 covering digital twin concepts and simulation using Gazebo and Unity.

**Independent Test**: A student can successfully set up a simulated humanoid robot, integrate sensors, and build a basic environment in Gazebo/Unity, demonstrating practical simulation expertise.

### Implementation for User Story 2

- [ ] T014 [P] [US2] Generate content for `docs/module-2/chapter-6.mdx` (The Digital Twin Concept)
- [ ] T015 [P] [US2] Generate content for `docs/module-2/chapter-7.mdx` (Gazebo for Humanoid Physics)
- [ ] T016 [P] [US2] Generate content for `docs/module-2/chapter-8.mdx` (Sensor Simulation)
- [ ] T017 [P] [US2] Generate content for `docs/module-2/chapter-9.mdx` (Environment Building)
- [ ] T018 [P] [US2] Generate content for `docs/module-2/chapter-10.mdx` (Unity for High-Fidelity Simulation)

**Checkpoint**: Module 2 content should be fully functional and testable independently.

---

## Phase 5: User Story 3 - Developing AI-Robot Brains with Isaac (Priority: P2)

**Goal**: Develop Module 3 covering NVIDIA Isaac for advanced AI robotics and simulation.

**Independent Test**: A student can understand Isaac's role in the AI robotics pipeline, apply synthetic data generation principles, and grasp reinforcement learning concepts, demonstrating advanced AI integration knowledge.

### Implementation for User Story 3

- [ ] T019 [P] [US3] Generate content for `docs/module-3/chapter-11.mdx` (Introduction to NVIDIA Isaac)
- [ ] T020 [P] [US3] Generate content for `docs/module-3/chapter-12.mdx` (Photorealistic Simulation & Synthetic Data)
- [ ] T021 [P] [US3] Generate content for `docs/module-3/chapter-13.mdx` (Isaac ROS: Hardware-Accelerated Robotics)
- [ ] T022 [P] [US3] Generate content for `docs/module-3/chapter-14.mdx` (Path Planning with Nav2)
- [ ] T023 [P] [US3] Generate content for `docs/module-3/chapter-15.mdx` (Reinforcement Learning & Sim-to-Real)

**Checkpoint**: Module 3 content should be fully functional and testable independently.

---

## Phase 6: User Story 4 - Building VLA Systems (Priority: P2)

**Goal**: Develop Module 4 covering Vision-Language-Action (VLA) systems and autonomous humanoids.

**Independent Test**: A student can design an LLM-based cognitive planner, integrate multimodal perception, and outline a capstone project for an autonomous humanoid, demonstrating cutting-edge AI robotics application skills.

### Implementation for User Story 4

- [ ] T024 [P] [US4] Generate content for `docs/module-4/chapter-16.mdx` (Introduction to VLA Systems)
- [ ] T025 [P] [US4] Generate content for `docs/module-4/chapter-17.mdx` (Voice-to-Action with Whisper)
- [ ] T026 [P] [US4] Generate content for `docs/module-4/chapter-18.mdx` (LLM-Based Cognitive Planning)
- [ ] T027 [P] [US4] Generate content for `docs/module-4/chapter-19.mdx` (Multimodal Perception)
- [ ] T028 [P] [US4] Generate content for `docs/module-4/chapter-20.mdx` (Capstone Project — Autonomous Humanoid)

**Checkpoint**: Module 4 content should be fully functional and testable independently.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final review, validation, and generation of the complete book package.

- [ ] T029 Review overall book-wide consistency (terminology, style, formatting) in docs/
- [ ] T030 Validate all code examples for correctness (syntax and functionality) in docs/**/*.mdx
- [ ] T031 Verify APA citation compliance across all chapters in docs/**/*.mdx
- [ ] T032 Run Docusaurus build and check for errors in root/
- [ ] T033 Generate PDF version of the book (external tool/process)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Polish (Final Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2/US3 but should be independently testable

### Within Each User Story

- Chapter content generation tasks are independent and can be done in parallel.

### Parallel Opportunities

- All Setup tasks (Phase 1) can run in parallel
- All Foundational tasks (Phase 2) can run in parallel
- Once Foundational phase completes, all user stories (Phase 3-6) can start in parallel (if team capacity allows)
- All chapter generation tasks within a user story can run in parallel
- All Polish tasks (Phase 7) can run in parallel where dependencies allow (e.g., reviews vs. build)

---

## Parallel Example: User Story 1

```bash
# Launch all chapter generation tasks for User Story 1 together:
Task: "Generate content for docs/module-1/chapter-1.mdx (Introduction to Physical AI & ROS 2)"
Task: "Generate content for docs/module-1/chapter-2.mdx (ROS 2 Core Architecture)"
Task: "Generate content for docs/module-1/chapter-3.mdx (Building ROS 2 Packages in Python)"
Task: "Generate content for docs/module-1/chapter-4.mdx (URDF & Humanoid Robot Description)"
Task: "Generate content for docs/module-1/chapter-5.mdx (Integrating AI Agents with ROS (rclpy))"
```

---

## Implementation Strategy

### MVP First (User Stories with Priority P1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (Module 1) → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 (Module 2) → Test independently → Deploy/Demo
4. Add User Story 3 (Module 3) → Test independently → Deploy/Demo
5. Add User Story 4 (Module 4) → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Module 1)
   - Developer B: User Story 2 (Module 2)
   - Developer C: User Story 3 (Module 3)
   - Developer D: User Story 4 (Module 4)
3. Chapters within each module can also be developed in parallel.
4. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
