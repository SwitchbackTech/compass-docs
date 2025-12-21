// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Compass Docs",
  tagline:
    "Learn how to use Compass, the open source calendar for minimalists.",
  favicon: "img/favicon.ico",
  url: "https://docs.compasscalendar.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "switchback", // Usually your GitHub org/user name.
  projectName: "compass-docs",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SwitchbackTech/compass-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SwitchbackTech/compass-docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social_card.jpg",

      algolia: {
        appId: "8X35L27KEK",
        apiKey: "9b2c833c8deea66a67ffb1277c58abe2",
        indexName: "Compass Docs Crawler",
      },
      navbar: {
        title: "Compass Docs",
        logo: {
          alt: "Compass Docs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Get Started",
          },
          { to: "/blog/about", label: "About", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Repos",
            items: [
              {
                label: "🧭 Compass",
                href: "https://github.com/SwitchbackTech/compass",
              },
              {
                label: "📖 Doc Site (this one)",
                href: "https://github.com/SwitchbackTech/compass-docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "🔵 Production App",
                href: "https://app.compasscalendar.com?utm_source=docsite&utm_medium=footer",
              },
              {
                label: "📓 Handbook",
                href: "https://compasscalendar.notion.site/",
              },
              {
                label: "✍ Blog",
                href: "https://www.compasscalendar.com/blog?utm_source=docsite&utm_medium=footer",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "💬 Discussions",
                href: "https://github.com/SwitchbackTech/compass/discussions",
              },
              {
                label: "🤝 LinkedIn",
                href: "https://www.linkedin.com/company/compass-calendar/",
              },
              {
                label: "🐦 X",
                href: "https://x.com/CompassCalendar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Switchback Tech LLC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
