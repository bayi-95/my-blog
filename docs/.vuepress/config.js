module.exports = {
	title: '秋殇の博客', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
	description: '申光普，博客，学习心得，日志，笔记...', // meta 中的描述文字，用于SEO
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
        `,
		],
	],
	markdown: {
		lineNumbers: false,
	},
	plugins: [
		'@vuepress/back-to-top',
		'@vuepress/nprogress',
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: {
					message: '发现新内容可用.',
					buttonText: '刷新',
				},
			},
		],
		[
			'container',
			{
				type: 'vue',
				before: '<pre class="vue-container"><code>',
				after: '</code></pre>',
			},
		],
		[
			'container',
			{
				type: 'upgrade',
				before: (info) => `<UpgradePath title="${info}">`,
				after: '</UpgradePath>',
			},
		],
	],
	serviceWorker: true,
	themeConfig: {
		logo: '/images/fish.jpg',
		smoothScroll: true,
		lastUpdated: '上次更新', // string | boolean
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
					{ text: 'python', link: '/pages/python/code.md' },
				],
			},
			{ text: '日志', link: '/pages/logs/' },
			{ text: 'Github', link: 'https://github.com/bayi-95/' },
		],
		sidebar: {
			'/pages/vue/': [
				{
					title: 'Vue 学习',
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: [['code.md', 'Vue']],
				},
			],
			'/pages/python/': [
				{
					title: 'Python 学习',
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: [['code.md', 'Python']],
				},
			],
			'/pages/javascript/': [
				{
					title: 'JavaScript 学习',
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: [['code.md', 'JavaScript']],
				},
			],
			'/pages/react/': [
				{
					title: 'React 学习',
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: [['code.md', 'React']],
				},
			],
			'/pages/react-native/': [
				{
					title: 'ReactNative 学习',
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: [['code.md', 'react-navigation']],
				},
			],
		},
	},
	gitalkConfig: {
		clientID: '298ace17e028f2ed1d5c',
		clientSecret: '316d30782c708825120674f6ce4854082e4db82a',
		repo: 'bayi-95.github.io',
		owner: 'bayi-95',
		admin: ['bayi-95'],
		id: 1,
		number: 1, // issueId
		distractionFreeMode: false, // Facebook-like distraction free mode
	},
}
