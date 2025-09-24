import { defineConfig } from 'vitepress'
import { gen_nav, gen_sidebar } from './generate.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "U7Sec",
  description: "专注于软件安全领域研究",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: gen_nav,
    sidebar: gen_sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/u7sec' }
    ],

    search: {
      provider: 'local'
    },
  },
  head: [['link', { rel: 'icon', href: '/u7.png' }]]
})
