// @ts-check
// `@type` JSDoc annotations allow IDEs and type-checking tools to autocomplete and validate
// This is a Docusaurus v3 configuration file.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics — A Complete Guide',
  tagline: 'A comprehensive educational resource for robotics students learning Physical AI, Humanoid Robotics, ROS 2, Isaac, Gazebo, Unity, VLA, and AI-driven humanoid systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mujahidshaikh18.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-humanoid-robotics-book/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mujahidshaikh18', // Usually your GitHub org/user name.
  projectName: 'ai-humanoid-robotics-book', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mujahidshaikh18/ai-humanoid-robotics-book/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Robotics Book Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modules',
          },
          {
            href: 'https://github.com/mujahidshaikh18/ai-humanoid-robotics-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'Module 1 - The Robotic Nervous System (ROS 2)',
                to: '/ai-humanoid-robotics-book/docs/module-1/chapter-1',
              },
              {
                label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
                to: '/ai-humanoid-robotics-book/docs/module-2/chapter-6',
              },
              {
                label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac)',
                to: '/ai-humanoid-robotics-book/docs/module-3/chapter-11',
              },
              {
                label: 'Module 4 - Vision-Language-Action (VLA)',
                to: '/ai-humanoid-robotics-book/docs/module-4/chapter-16',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ros2',
              },
              {
                label: 'Robotics Stack Exchange',
                href: 'https://robotics.stackexchange.com/',
              },
              {
                label: 'ROS Discourse',
                href: 'https://discourse.ros.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mujahidshaikh18/ai-humanoid-robotics-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml'],
      },
    }),
};

module.exports = config;