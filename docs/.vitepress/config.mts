import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "U7Sec",
  description: "专注于软件安全领域研究",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Examples', items: [
        {
          text: 'api-examples',
          link: '/api-examples'
        },
        {
          text: 'markdown-examples',
          link: '/markdown-examples'
        }
      ] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },
  },
  head: [['link', { rel: 'icon', href: '/u7.png' }]]
})
