import { getArticles } from './utils/article'
import { EXTRA_CONFIG }  from './utils';

export default {
	// base: '/',
    title: '秋殇の博客',
    description: '申光普，博客，vitepress，学习心得，日志，笔记...',
    website: 'https://bayi-95.eu.org/',
	outDir: '../public',
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', href: '/images/index/fish.png' }], //浏览器的标签栏的网页图标
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#235dc8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/index/fish.png' }],
        ['link', { rel: 'mask-icon', href: '/images/index/fish.png', color: '#235dc8' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/index/fish.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        // 额外要插入的 js、style
        ...EXTRA_CONFIG
    ],
    themeConfig: {
        siteTitle: '秋殇の博客',
        logo: '/images/index/fish.png',
        lastUpdated: '上次更新',
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/pages/articles/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'python', link: '/pages/python/index.md' },
                    { text: 'vue', link: '/pages/vue/code.md' },
                    { text: 'javascript', link: '/pages/javascript/前端commit规范.md' },
                    { text: 'react', link: '/pages/react/code.md' },
                    { text: 'react-native', link: '/pages/react-native/code.md' },
                ]
            },
            { text: '日志', link: '/pages/logs/' }
        ],
        // github 地址
        socialLinks: [{ icon: 'github', link: 'https://github.com/bayi-95/' }],
        // 编辑页面地址
        editLink: {
            pattern: 'https://github.com/bayi-95/tree/master/docs/:path',
            text: 'Edit this page'
        },
	    // 侧边栏
	    outlineTitle: '目录',
        // 页面底部
        footer: {
            message: '部分文章收录于网络，转载请署名出处 | 联系博主可以发送邮件至 <a href="mailto:necro.vice@yahoo.com">necro.vice@yahoo.com</a>',
            copyright: 'Copyright © 2020-present bayi-95.'
        },
        // 获取文章列表
        articles: await getArticles(),
        // 搜索
        algolia: {
            appId: '5VSYJHYEBM',
            apiKey: '3071496c8c2cbabf56c677eb7093170d',
            indexName: 'prod_bayi95'
        }
    },
    markdown: {
        lineNumbers: false
    },
}
