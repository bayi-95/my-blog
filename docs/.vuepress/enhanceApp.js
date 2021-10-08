import { rewriteCopy, registerGitalk } from './plugins'

export default ({ Vue, isServer, router, siteData }) => {
	if (!isServer) {
		import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
			Vue.use(module.default)
		})
	}

	// 路由切换事件处理
	router.beforeEach((to, from, next) => {
		//触发百度的pv统计
		if (typeof _hmt != 'undefined') {
			if (to.path) {
				_hmt.push(['_trackPageview', to.fullPath])
			}
		}
		// 注册评论组件
		if (siteData && siteData.pages) {
			setTimeout(() => {
				registerGitalk(siteData.pages || [])
			}, 1000)
		}
		next()
	})

	window.onload = () => {
		try {
			// 对document的判断是防止编译的时候报错
			if (document) {
				;(() => {
					// 重写copy事件
					rewriteCopy()
				})()
			}
		} catch (e) {
			console.error(e.message)
		}
	}
}
