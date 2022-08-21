// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BCA Practicals",
  tagline: "BCA Practicals [HNGU]",  
  url: "https://miilan.me",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xmi1an", // Usually your GitHub org/user name.
  projectName: "xmi1an", // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "BCA Practicals",
        logo: {
          alt: "BCA Practicals Logo",
          src: "img/logo.gif",
        },
        
        // if dark mode is enabled, change the logo to the dark logo
        dark: {
          logo: {
            src: "img/favicon.png",
          },
        },
      
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Practicals",
          },
          {
            type: "doc",
            docId: "intro",
            href: "docs/intro/#downloads",  
            label: "Downloads",
            position: "right",
          },  
          {
            type: "doc",
            docId: "intro",
            href: "https://miilan.me/",  
            label: "About Me",
            position: "right",
          },
          {
            href: "https://github.com/xmi1an",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Practicals",
                to: "/docs/intro",
              },
              {
                label: "Downloads",
                to: "/docs/intro/#downloads",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/xmi1an/",
              },
              {
                label: "Telegram",
                href: "https://telegram.me/xmi1an",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/xmi1an",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BCA Practicals`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
