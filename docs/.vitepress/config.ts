import path from 'path'
import SvgLoader from 'vite-svg-loader'
import mathjax3 from 'markdown-it-mathjax3'
import type MarkdownIt from 'markdown-it'
import { visualizer } from 'rollup-plugin-visualizer'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { getArticles, getSidebarWeekly } from './utils/article'
import { EXTRA_CONFIG, CUSTOM_ELEMENTS } from './utils'

const RSS: RSSOptions = {
  title: '秋殇の博客',
  baseUrl: 'https://bayi-95.eu.org',
  copyright: 'Copyright © 2020-present bayi-95',
  limit: 24
}

export default {
  title: RSS.title,
  description: '申光普，博客，vitepress，学习心得，日志，笔记...',
  outDir: '../public',
  cleanUrls: true,
  lang: 'zh-CN',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/images/index/fish.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#235dc8' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/index/fish.png' }],
    ['link', { rel: 'mask-icon', href: '/images/index/fish.png', color: '#235dc8' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/index/fish.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // 额外要插入的 js、style
    ...EXTRA_CONFIG
  ],
  themeConfig: {
    siteTitle: RSS.title,
    logo: '/images/index/fish.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/pages/articles/' },
      {
        text: '分类',
        ariaLabel: '分类',
        items: [
          { text: 'python', link: '/pages/python/index.md' },
          { text: 'vue', link: '/pages/vue/code.md' },
          { text: 'javascript', link: '/pages/javascript/前端commit规范.md' }
        ]
      },
      { text: '周刊', link: '/pages/weekly/' },
      { text: '日志', link: '/pages/logs/' }
    ],
    // 周刊的侧边栏目录
    sidebar: {
      '/pages/weekly/': getSidebarWeekly()
    },
    // 侧边栏
    outlineTitle: '页面导航',
    // 文章列表
    articles: await getArticles(),
    // github 地址
    socialLinks: [{ icon: 'github', link: 'https://github.com/bayi-95/' }],
    // 编辑地址
    editLink: {
      pattern: 'https://gitlab.com/bayi-95/my-blog/tree/develop/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: '上次更新',
    // Copyright
    footer: {
      message: '部分文章收录于网络，转载请署名出处 | 联系博主可以发送邮件至 <a href="mailto:necro.vice@yahoo.com">necro.vice@yahoo.com</a>',
      copyright: RSS.copyright
    },
    returnToTopLabel: '回到顶部',
    // 搜索
    algolia: {
      appId: '1GE630FKUJ',
      apiKey: '8373f57daad29cd7dc55b9d5a541459e',
      indexName: 'prod_bayi95'
    }
  },
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    headers: {
      level: [0, 1]
    },
    config: (md: MarkdownIt) => {
      md.use(mathjax3)
    }
  },
  vite: {
    plugins: [
      // 生成 RSS
      RssPlugin(RSS),
      // 处理 svg
      SvgLoader(),
      // 打包分析
      visualizer({
        filename: 'analysis.html'
      })
    ],
    // 别名
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'assets')
      }
    }
  },
  // 注册自定义标签，防止编译报错
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => CUSTOM_ELEMENTS.includes(tag)
      }
    }
  }
}
