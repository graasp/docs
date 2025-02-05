// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";
import "dotenv/config";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Graasp Docs",
  staticDirectories: ["blog/screenshots", "static"],
  tagline: "Enrich your Graasp experience",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://graasp.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE ?? "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "graasp", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
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
          editUrl: "https://github.com/graasp/docs/blob/main",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ blogPath }) => {
            if (blogPath.split("/").includes("unlisted")) {
              return `https://github.com/graasp/docs/blob/main/blog/${blogPath}`;
            }
            return undefined;
          },
          blogTitle: "News and Updates from the Graasp Team",
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
      image: "img/graasp-social-card.png",
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
            href: "https://github.com/graasp/docs",
            position: "right",
            label: "Github",
          },
          {
            type: "localeDropdown",
            position: "right",
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
                to: "user/intro",
              },
              {
                label: "Developer",
                to: "developer/intro",
              },
              {
                label: "App Development",
                to: "/developer/apps/",
              },
              {
                label: "Troubleshooting",
                to: "/developer/troubleshooting/",
              },
            ],
          },
          {
            title: "Graasp",
            items: [
              {
                label: "Contact",
                href: "mailto:contact@graasp.org",
              },
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
        theme: themes.github,
        darkTheme: themes.dracula,
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
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        websiteID: process.env.UMAMI_WEBSITE_ID, // Required
        analyticsDomain: "umami.graasp.org", // Required
        // scriptName: "", // Optional
        dataHostURL: "https://umami.graasp.org", // Optional
        dataAutoTrack: true, // Optional
        dataDoNotTrack: true, // Optional
        dataCache: true, // Optional
        dataDomains: "graasp.github.io", // comma separated list of domains, *Recommended*
      }),
    ],
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/fonts/Nunito.ttf",
        as: "font",
        crossorigin: "anonymous",
      },
    },
  ],
};

module.exports = config;
