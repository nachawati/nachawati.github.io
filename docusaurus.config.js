// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dr. Mohamad Omar Nachawati',
  tagline: 'Research Software Engineer',
  favicon: 'img/favicon.ico',

  url: 'https://nachawati.me',
  baseUrl: '/',

  organizationName: 'nachawati',
  projectName: 'nachawati.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/nachawati-social-card.png',
      navbar: {
        title: 'Dr. Mohamad Omar Nachawati',
        logo: { alt: 'shahadatayn', src: 'img/image.svg' },
        items: [
          { label: 'Publications', href: 'https://scholar.google.com/citations?hl=en&user=LQJ_8wIAAAAJ&view_op=list_works&sortby=pubdate' },
          { label: 'Projects', href: 'https://github.com/nachawati' },
          { label: 'Teaching', to: '/teaching' },
          { label: 'Tutorials', type: 'docSidebar', sidebarId: 'tutorialsSidebar' },
          { label: 'Blog', to: '/blog' },
          { label: '🤝 Become a sponsor', position: 'right', href: 'https://github.com/sponsors/nachawati' },
          { label: 'mnachawa@gmail.com', position: 'right', href: 'mailto:mnachawa@gmail.com' }
        ]
      },
      announcementBar: {
        id: 'basmalah',
        content: 'بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ',
        backgroundColor: '#007bff',
        textColor: '#ffffff',
        isCloseable: false
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              { label: 'Home', to: '/', },
              { label: 'Publications', href: 'https://scholar.google.com/citations?hl=en&user=LQJ_8wIAAAAJ&view_op=list_works&sortby=pubdate' },
              { label: 'Projects', href: 'https://github.com/nachawati' },
              { label: 'Teaching', to: '/teaching' },
              { label: 'Blog', to: '/blog' }
            ]
          },
          {
            title: 'Academic',
            items: [
              { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=LQJ_8wIAAAAJ&view_op=list_works&sortby=pubdate' },
              { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mohamad-Omar-Nachawati' },
              { label: 'ORCID', href: 'https://orcid.org/0000-0001-6153-8152' },
              { label: 'Rate My Professors', href: 'https://www.ratemyprofessors.com/professor/2091818' },
              { label: 'Digital Diploma', href: 'https://www.parchment.com/u/s/iXNI' }
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'GitHub', href: 'https://github.com/nachawati' },
              { label: 'Twitter', href: 'https://twitter.com/realNachawati' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nachawati' },
              { label: 'E-mail', href: 'mailto:mnachawa@gmail.com' }
            ],
          },
        ],
        copyright: `Please send me an <a href="mailto:mnachawa@gmail.com">e-mail</a> if you find any mistakes on this site. I'll do my best to correct them as soon as possible.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
};

module.exports = config;
