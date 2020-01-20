module.exports = {
    title: '神氏八易の博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '神氏八易の博客，学习心得，日志，笔记...', // meta 中的描述文字，用于SEO
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
    serviceWorker: true,
    themeConfig: {
        logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
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
            { text: '日志', link: '/pages/logs/logs.md' },
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
