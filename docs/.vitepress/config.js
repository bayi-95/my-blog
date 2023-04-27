import { getArticles } from './utils/article'

export default {
	base: '/my-blog/',
    title: '秋殇の博客',
    description: '申光普，博客，学习心得，日志，笔记...',
    website: 'https://github.com/bayi-95/',
	outDir: '../public',
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', href: '/my-blog/images/index/fish.png' }], //浏览器的标签栏的网页图标
        ['link', { rel: 'manifest', href: '/my-blog/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#235dc8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/my-blog/images/index/fish.png' }],
        ['link', { rel: 'mask-icon', href: '/my-blog/images/index/fish.png', color: '#235dc8' }],
        ['meta', { name: 'msapplication-TileImage', content: '/my-blog/images/index/fish.png' }],
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
        ],
    ],
    themeConfig: {
        siteTitle: '秋殇の博客',
        logo: '/images/index/fish.png',
        lastUpdated: '上次更新',
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
        // github 地址
        socialLinks: [{ icon: 'github', link: 'https://github.com/bayi-95/' }],
        // 编辑页面地址
        editLink: {
            pattern: 'https://github.com/bayi-95/my-blog/tree/master/docs/:path',
            text: 'Edit this page'
        },
        // 页面底部
        footer: {
            message: '部分文章收录于网络，转载请署名出处 | 联系博主可以发送邮件至 <a href="mailto:necro.vice@yahoo.com">necro.vice@yahoo.com</a>',
            copyright: 'Copyright © 2020-present'
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
