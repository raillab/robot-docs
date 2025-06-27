module.exports = {
  title: 'RAIL Lab Robots',
  tagline: 'The Wits Robotics, Autonomous Intelligence and Learning Lab',
  url: 'https://www.raillab.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'rail-lab-robots',
  themeConfig: {
    navbar: {
      title: 'RAIL Lab',
      logo: {
        alt: 'RAIL Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/docs/open-tasks', label: 'Tasks', position: 'left' },
        { href: 'https://github.com/raillab', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Open Tasks', to: '/docs/open-tasks' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/raillab' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The RAIL Lab.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/duotoneDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
