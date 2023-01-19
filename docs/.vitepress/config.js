import { getArticles } from './utils'

export default {
    title: '秋殇の博客',
    description: '申光普，博客，学习心得，日志，笔记...',
    head: [
        ['link', { rel: 'icon', href: '/images/fish.jpg' }], //浏览器的标签栏的网页图标
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#235dc8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/fish.jpg' }],
        ['link', { rel: 'mask-icon', href: '/images/fish.jpg', color: '#235dc8' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/fish.jpg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        // 百度统计
        [
            'script',
            {},
            `
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?f00a6211b690ac3505105511f6b90b30";
			  var s = document.getElementsByTagName("script")[0];
			  s.parentNode.insertBefore(hm, s);
			})();
        `
        ]
    ],
    themeConfig: {
        siteTitle: '秋殇の博客',
        logo: '/images/fish.jpg',
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/pages/list/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'vue', link: '/pages/vue/code.md' },
                    { text: 'javascript', link: '/pages/javascript/code.md' },
                    { text: 'react', link: '/pages/react/code.md' },
                    { text: 'react-native', link: '/pages/react-native/code.md' },
                    { text: 'python', link: '/pages/python/code.md' }
                ]
            },
            { text: '日志', link: '/pages/logs/' }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/bayi-95/' }],
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        // 获取文章列表
        articles: await getArticles()
    },
    markdown: {
        lineNumbers: false
    },
    lastUpdated: true,
    ignoreDeadLinks: true,
    website: 'https://github.com/bayi-95/'
}
