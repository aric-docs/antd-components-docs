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
    name: 'antd-components',
    description: 'Enhanced Ant Design components for React applications with state management, form integration, and improved UX patterns.',
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
    sidebar: {
      '/': [
        {
          title: 'Guide',
          children: [
            { title: 'Home', link: '/index' },
            { title: 'Getting Started', link: '/guide/getting-started' },
            { title: 'Configuration', link: '/guide/configuration' },
            { title: 'Deployment', link: '/guide/deployment' },
          ],
        },
        {
          title: 'Components',
          children: [
            { title: 'Overview', link: '/components/index' },
            { title: 'Form Input', link: '/components/form-input' },
            { title: 'Selection', link: '/components/selection' },
            { title: 'Date & Time', link: '/components/date-time' },
            { title: 'Upload', link: '/components/upload' },
            { title: 'Data Display', link: '/components/data-display' },
            { title: 'Tag Components', link: '/components/tag-components' },
            { title: 'Other Components', link: '/components/other-components' },
          ],
        },
      ],
    },
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/afeiship/antd-components',
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
