module.exports = {
    title: '秋殇の博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '秋殇の博客，学习心得，日志，笔记...', // meta 中的描述文字，用于SEO
    repo: 'vuejs/vuepress',
    head: [
        ['link', { rel: 'icon', href: '/images/leaf-1.jpg' }],  //浏览器的标签栏的网页图标
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#235dc8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/leaf-1.jpg' }],
        ['link', { rel: 'mask-icon', href: '/images/leaf-1.jpg', color: '#235dc8' }],
        ['meta', { name: 'msapplication-TileImage', content: '/images/leaf-1.jpg' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    markdown: {
        lineNumbers: false
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        }],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/images/leaf-1.jpg',
        smoothScroll: true,
        lastUpdated: '上次更新', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'vue', link: '/pages/vue/code.md' },
                    { text: 'react', link: '/pages/react/code.md' },
                    { text: 'react-native', link: '/pages/react-native/code.md' },
                    { text: 'python', link: '/pages/python/code.md' },
                    { text: 'javascript', link: '/pages/javascript/code.md' },
                ]
            },
            { text: '日志', link: '/pages/logs/index.md' },
            { text: 'Github', link: 'https://github.com/bayi-95' },
        ],
        sidebar: {
            '/pages/vue/':[
                {
                    title: 'Vue 学习',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['code.md', '30 seconds of code'],
                        ['source.md', '资源链接 🔗']
                    ]
                }
            ],
            '/pages/python/':[
                {
                    title: 'Python 学习',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['code.md', '30 seconds of code'],
                        ['source.md', '资源链接 🔗']
                    ]
                }
            ],
            '/pages/javascript/':[
                {
                    title: 'JavaScript 学习',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['code.md', '30 seconds of code'],
                        ['source.md', '资源链接 🔗']
                    ]
                }
            ],
            '/pages/react/':[
                {
                    title: 'React 学习',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['code.md', '30 seconds of code'],
                        ['source.md', '资源链接 🔗']
                    ]
                }
            ],
            '/pages/react-native/':[
                {
                    title: 'ReactNative 学习',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['basics.md', '环境搭建'],
                        ['code.md', '30 seconds of code'],
                        ['source.md', '资源链接 🔗']
                    ]
                }
            ],
        }
    }
}
