"use strict";(self.webpackChunk_jswork_antd_components_docs=self.webpackChunk_jswork_antd_components_docs||[]).push([[307],{64905:function(d,s,_){_.r(s);var t=_(11962),r=_(38207),u=_(46126),m=_(60050),p=_(20719),o=_(69312),h=_(77916),x=_(40098),a=_(29140),i=_(26763),c=_(75271),n=_(87893),e=_(52676);function l(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(c.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"configuration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Configuration"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsxs)("h2",{id:"dumi-configuration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dumi-configuration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Dumi Configuration"]}),(0,e.jsxs)("p",{children:[n.texts[1].value,(0,e.jsx)("code",{children:n.texts[2].value}),n.texts[3].value]}),(0,e.jsxs)("h3",{id:"basic-configuration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-configuration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Configuration"]}),(0,e.jsx)(o.Z,{lang:"typescript",children:n.texts[4].value}),(0,e.jsxs)("h2",{id:"navigation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#navigation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Navigation"]}),(0,e.jsxs)("p",{children:[n.texts[5].value,(0,e.jsx)("code",{children:n.texts[6].value}),n.texts[7].value]}),(0,e.jsx)(o.Z,{lang:"typescript",children:n.texts[8].value}),(0,e.jsxs)("h2",{id:"sidebar",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sidebar",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Sidebar"]}),(0,e.jsx)("p",{children:n.texts[9].value}),(0,e.jsx)(o.Z,{children:n.texts[10].value}),(0,e.jsxs)("h2",{id:"custom-styles",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-styles",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Custom Styles"]}),(0,e.jsxs)("p",{children:[n.texts[11].value,(0,e.jsx)("code",{children:n.texts[12].value}),n.texts[13].value]}),(0,e.jsx)(o.Z,{lang:"typescript",children:n.texts[14].value}),(0,e.jsxs)("h2",{id:"code-blocks",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#code-blocks",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Code Blocks"]}),(0,e.jsx)("p",{children:n.texts[15].value}),(0,e.jsx)(o.Z,{lang:"typescript",children:n.texts[16].value}),(0,e.jsxs)("h2",{id:"modes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Modes"]}),(0,e.jsx)("p",{children:n.texts[17].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n.texts[18].value}),n.texts[19].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n.texts[20].value}),n.texts[21].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:n.texts[22].value}),n.texts[23].value]})]}),(0,e.jsxs)("h2",{id:"more-configuration-options",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#more-configuration-options",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"More Configuration Options"]}),(0,e.jsxs)("p",{children:[n.texts[24].value,(0,e.jsx)("a",{href:"https://d.umijs.org/config",children:n.texts[25].value}),n.texts[26].value]})]})})})})}s.default=l},87893:function(d,s,_){_.r(s),_.d(s,{texts:function(){return t}});const t=[{value:"Learn how to customize your dumi documentation site.",paraId:0,tocIndex:0},{value:"The main configuration file is ",paraId:1,tocIndex:1},{value:".dumirc.ts",paraId:1,tocIndex:1},{value:" in the project root.",paraId:1,tocIndex:1},{value:`import { defineConfig } from 'dumi';

export default defineConfig({
  // Site base path (useful for GitHub Pages)
  base: '/antd-components-docs/',

  // Public path for assets
  publicPath: '/antd-components-docs/',

  // Site logo
  logo: '/antd-components-docs/logo.png',

  // Locales / languages
  locales: [{ id: 'en-US', name: 'English' }],

  // Resolve configuration
  resolve: {
    codeBlockMode: 'passive', // 'passive' | 'active'
  },

  // Theme configuration
  themeConfig: {
    name: 'Your Site Name',
    description: 'Your site description',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/your-username/your-repo',
    },
  },

  // Custom styles
  styles: [
    \`/* Your custom CSS here */\`,
  ],
});
`,paraId:2,tocIndex:2},{value:"Configure the navigation menu in ",paraId:3,tocIndex:3},{value:"themeConfig.nav",paraId:3,tocIndex:3},{value:":",paraId:3,tocIndex:3},{value:`nav: [
  {
    title: 'Guide',           // Nav item title
    link: '/guide/index',     // Link to page
  },
  {
    title: 'Components',
    link: '/components/index',
  },
  {
    title: 'External',
    link: 'https://example.com', // External links work too
  },
],
`,paraId:4,tocIndex:3},{value:"Dumi automatically generates sidebars based on your file structure:",paraId:5,tocIndex:4},{value:`docs/
\u251C\u2500\u2500 guide/
\u2502   \u251C\u2500\u2500 getting-started.md    # /guide/getting-started
\u2502   \u2514\u2500\u2500 configuration.md      # /guide/configuration
\u2514\u2500\u2500 components/
    \u2514\u2500\u2500 index.md              # /components/index
`,paraId:6,tocIndex:4},{value:"Add custom styles in the ",paraId:7,tocIndex:5},{value:"styles",paraId:7,tocIndex:5},{value:" option:",paraId:7,tocIndex:5},{value:`styles: [
  \`
  .dumi-default-sidebar {
    --dumi-sidebar-width: 320px;
  }
  \`,
],
`,paraId:8,tocIndex:5},{value:"Configure code block behavior:",paraId:9,tocIndex:6},{value:`resolve: {
  // 'active' - shows React Playground for React code
  // 'passive' - plain code blocks
  codeBlockMode: 'passive',
},
`,paraId:10,tocIndex:6},{value:"Dumi supports different modes:",paraId:11,tocIndex:7},{value:"Doc Mode",paraId:12,tocIndex:7},{value:" - Standard documentation pages",paraId:12,tocIndex:7},{value:"Demo Mode",paraId:12,tocIndex:7},{value:" - Component demos with live preview",paraId:12,tocIndex:7},{value:"Site Mode",paraId:12,tocIndex:7},{value:" - General-purpose website",paraId:12,tocIndex:7},{value:"See the ",paraId:13,tocIndex:8},{value:"official dumi documentation",paraId:13,tocIndex:8},{value:" for all available options.",paraId:13,tocIndex:8}]}}]);
