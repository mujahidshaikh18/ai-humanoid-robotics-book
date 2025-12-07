# Physical AI & Humanoid Robotics — A Complete Guide

This repository contains the source code for the "Physical AI & Humanoid Robotics — A Complete Guide" textbook, built with Docusaurus. This comprehensive educational resource is designed for robotics students learning Physical AI, Humanoid Robotics, ROS 2, Isaac, Gazebo, Unity, VLA (Vision-Language-Action), and AI-driven humanoid systems.

## 📚 Book Structure

The book is organized into 4 main modules:

- **Module 1** — The Robotic Nervous System (ROS 2)
  - Ch 1: Introduction to Physical AI & ROS 2
  - Ch 2: ROS 2 Core Architecture
  - Ch 3: Building ROS 2 Packages in Python
  - Ch 4: URDF & Humanoid Robot Description
  - Ch 5: Integrating AI Agents with ROS (rclpy)

- **Module 2** — The Digital Twin (Gazebo & Unity)
  - Ch 6: The Digital Twin Concept
  - Ch 7: Gazebo for Humanoid Physics
  - Ch 8: Sensor Simulation
  - Ch 9: Environment Building
  - Ch 10: Unity for High-Fidelity Simulation

- **Module 3** — The AI-Robot Brain (NVIDIA Isaac)
  - Ch 11: Introduction to NVIDIA Isaac
  - Ch 12: Photorealistic Simulation & Synthetic Data
  - Ch 13: Isaac ROS: Hardware-Accelerated Robotics
  - Ch 14: Path Planning with Nav2
  - Ch 15: Reinforcement Learning & Sim-to-Real

- **Module 4** — Vision-Language-Action (VLA)
  - Ch 16: Introduction to VLA Systems
  - Ch 17: Voice-to-Action with Whisper
  - Ch 18: LLM-Based Cognitive Planning
  - Ch 19: Multimodal Perception
  - Ch 20: Capstone Project — Autonomous Humanoid

## 🚀 Getting Started

To run this documentation site locally:

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## 🛠️ Building

To build the static files for deployment:

```bash
npm run build
```

## 📖 Documentation

The documentation for this project is built with [Docusaurus](https://docusaurus.io/), a modern static website generator. You can learn more about Docusaurus in the [official documentation](https://docusaurus.io/docs).

## 🤝 Contributing

We welcome contributions to improve this educational resource. Please feel free to submit pull requests or create issues for any bugs or feature requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 GitHub Pages Deployment

The site is deployed to GitHub Pages at: https://mujahidshaikh18.github.io/ai-humanoid-robotics-book/

### Deployment Process

The site is automatically deployed using GitHub Actions. When changes are pushed to the main branch, the workflow in `.github/workflows/deploy.yml` will:
1. Build the Docusaurus site
2. Deploy the static files to the `gh-pages` branch
3. Update the GitHub Pages site

### Manual Deployment (if needed)

If you need to deploy manually, run:

```bash
npm run build
npm run deploy
```

### GitHub Pages Settings

Make sure GitHub Pages is configured in your repository settings:
1. Go to Settings → Pages
2. Source should be set to "Deploy from a branch"
3. Branch should be "gh-pages" with "/ (root)" folder

## 📚 Academic References

This textbook adheres to strict academic standards with:
- Minimum 15 peer-reviewed sources
- APA-style citations
- 0% plagiarism tolerance
- Flesch-Kincaid grade level 10-12 for accessibility