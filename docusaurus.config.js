// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Not Gr / blackmann',
  tagline: 'Transformers and Grey',
  url: 'https://degreat.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blackmann', // Usually your GitHub org/user name.
  projectName: 'blackmann.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-SB4PQVZYY0',
        anonymizeIP: true,
      }
    ],
    async function addCustomLoaders() {
      return {
        name: 'webpack-custom-loaders',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.(glsl|vs|fs|vert|frag)$/,
                  use: [
                    'raw-loader',
                    'glslify-loader'
                  ]
                }
              ]
            }
          }
        }
      }
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Not Gr / blackmann',
        items: [
          {
            type: 'doc',
            docId: 'notes/intro',
            position: 'left',
            label: 'Notes',
          },
          {
            type: 'doc',
            docId: 'rnds/intro',
            position: 'left',
            label: 'R&Ds',
          },
          { to: '/blog', label: 'Thoughts', position: 'left' },
          {
            href: 'https://github.com/blackmann/blackmann.github.io',
            label: 'GitHub',
            position: 'right',
            'aria-label': 'Site\'s source',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Today's byte",
            items: [
              {
                html: `
            <p>Good thing about standardization is that we unscrew everything in the same direction</p>
            `,
              },
            ],
          },
          {},
          {
            title: 'Connect',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/blackmann',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5CDnysz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/_yogr',
              },
            ],
          },
          {
            title: 'This site',
            items: [
              {
                label: 'Notes',
                to: '/docs/notes',
              },
              {
                label: 'Thoughts',
                to: '/blog',
              },
              {
                label: 'Research + Development',
                to: '/docs/rnds',
              },
            ],
          },
          {},
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
