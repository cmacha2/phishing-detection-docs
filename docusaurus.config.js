// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Phishing Detection Framework',
  tagline: 'Effortless phishing detection for emails and URLs',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://cmacha2.github.io',
  // Set the base path for your site
  baseUrl: '/phishing-detection-docs/',


  // GitHub pages deployment config
  organizationName: 'cmacha2', // GitHub username
  projectName: 'phishing-detection-docs', // GitHub repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Localization
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
          editUrl: 'https://github.com/cmacha2/phishing-detection-docs/tree/main/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cmacha2/phishing-detection-docs/tree/main/blog/',
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/phishing-detection-social-card.jpg',
      navbar: {
        title: 'Phishing Detection Framework',
        logo: {
          alt: 'Phishing Detection Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // Updated from tutorialSidebar
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/cmacha2/phishing-detection-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference',
              },
              {
                label: 'Installation Guide',
                to: '/docs/installation',
              },
              {
                label: 'Usage Guide',
                to: '/docs/usage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/cmacha2/phishing-detection-docs/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/cmacha2/phishing-detection-docs/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cmacha2/phishing-detection-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Phishing Detection Framework. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['python'],
      },
    }),
};

export default config;
