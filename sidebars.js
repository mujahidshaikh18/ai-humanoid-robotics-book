// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/chapter-1',
        'module-1/chapter-2',
        'module-1/chapter-3',
        'module-1/chapter-4',
        'module-1/chapter-5',
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2/chapter-6',
        'module-2/chapter-7',
        'module-2/chapter-8',
        'module-2/chapter-9',
        'module-2/chapter-10',
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module-3/chapter-11',
        'module-3/chapter-12',
        'module-3/chapter-13',
        'module-3/chapter-14',
        'module-3/chapter-15',
      ],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA)',
      items: [
        'module-4/chapter-16',
        'module-4/chapter-17',
        'module-4/chapter-18',
        'module-4/chapter-19',
        'module-4/chapter-20',
      ],
    },
  ],
};

module.exports = sidebars;