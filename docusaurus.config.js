// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Graasp Docs",
  tagline: "Where people build the learning platforms of tomorrow",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://graasp.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "graasp", // Usually your GitHub org/user name.
  projectName: "graasp-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // add mermaid theme to enable diagrams in markdown
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    // enable mermaid diagrams in markdown
    mermaid: true,
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
          editUrl: "https://github.com/graasp/graasp.github.io/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/graasp/docs/",
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
      // Replace with your project's social card
      // todo: create a social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Docs",
        logo: {
          alt: "Graasp",
          src: "img/graasp-develop.svg",
          srcDark: "img/graasp-develop_dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "developer/intro",
            position: "left",
            label: "Developer",
          },
          {
            type: "doc",
            docId: "user/intro",
            position: "left",
            label: "User Resources",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/graasp",
            position: "right",
            label: "Github",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Tutorials",
                to: "docs/user/intro",
              },
              {
                label: "Developer",
                to: "docs/developer",
              },
              {
                label: "App Development",
                to: "docs/developer/apps/intro",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "User Tutorials",
                // todo: change link
                href: "https://builder.graasp.org",
              },
            ],
          },
          {
            title: "Graasp",
            items: [
              {
                label: "Website",
                href: "https://graasp.org",
              },
              {
                label: "Association",
                href: "https://association.graasp.org",
              },
              {
                label: "Library",
                href: "https://library.graasp.org",
              },
              {
                label: "Builder",
                href: "https://builder.graasp.org",
              },
              {
                label: "Player",
                href: "https://player.graasp.org",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/graasp",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/graasp",
              },
            ],
          },
        ],
        copyright: `© 2014 - ${new Date().getFullYear()} Graasp. Built with ❤️ in 🇨🇭.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
