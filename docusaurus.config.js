// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://47.115.129.219',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'onepiecettt', // Usually your GitHub org/user name.
  projectName: 'ddocs-tes', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      path: 'i18n',
      localeConfigs: {
          en: {
              label: 'English',
              direction: 'ltr',
              htmlLang: 'en-US',
              calendar: 'gregory',
          },
          zh: {
              label: '中文',
              path: 'cn',
          },
      },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/onepiecettt/docs-test/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/onepiecettt/docs-test/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
              href: 'https://ai.luckfox.com/',
              label: 'Ask AI',
              position: 'left',
          },
          {
              href: 'https://forums.luckfox.com',
              label: 'Forums',
              position: 'right',
          },
          {
              href: 'https://github.com/LuckfoxTECH',
              label: 'GitHub',
              position: 'right',
          },
          {
              type: 'localeDropdown',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [{
                    label: 'Shop',
                    href: 'http://www.luckfox.com/',
                },
                {
                    label: 'Ask AI',
                    href: 'https://ai.luckfox.com',
                },
                {
                    label: 'Forums',
                    href: 'https://forums.luckfox.com',
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/LuckfoxTECH',
                },
            ],
        },
        {
            title: 'Information',
            items: [{
                    label: 'About Luckfox',
                    href: 'https://www.luckfox.com/about_us',
                },
                {
                    label: 'Contact Us',
                    href: 'https://www.luckfox.com/index.php?route=information/contact',
                },
                {
                    label: 'Technical Support',
                    href: 'https://wiki.luckfox.com/intro',
                },
            ],
        },
    ],
          copyright: `Copyright © ${new Date().getFullYear()} Luckfox Technology.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
