import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/antd-components-docs/',
  publicPath: '/antd-components-docs/',
  logo: '/antd-components-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'Dumi Docs',
    description: 'A dumi documentation template project.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: 'Playground',
        link: '/playground',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/antd-components-docs',
    },
  },
  styles: [
    `
    .dumi-default-sidebar {
      --dumi-sidebar-width: 320px !important;
      width: 320px !important;
      min-width: 320px !important;
    }

    .dumi-default-header-left {
      width: 320px !important;
    }`,
  ],
});
