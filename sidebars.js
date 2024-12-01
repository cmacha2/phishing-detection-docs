// @ts-check

/** 
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} 
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'intro', // References the `docs/intro.md` file
        'installation', // References the `docs/installation.md` file
        'usage', // References the `docs/usage.md` file
        'api-reference', // References the `docs/api-reference.md` file
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      collapsible: true,
      collapsed: true,
      items: [
        'contributing', // References the `docs/contributing.md` file
        'acknowledgments', // References the `docs/acknowledgments.md` file
      ],
    },
    {
      type: 'link',
      label: 'GitHub Repository',
      href: 'https://github.com/cmacha2/phishing-detection-py',
    },
  ],
};

export default sidebars;
