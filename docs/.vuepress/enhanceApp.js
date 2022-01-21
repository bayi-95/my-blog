export default ({ Vue, isServer, router, siteData }) => {
	if (!isServer) {
		import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
			Vue.use(module.default)
		})
	}
	// 路由切换事件处理
	router.beforeEach((to, from, next) => {
		//触发百度的pv统计
		if (typeof _hmt !== 'undefined') {
			if (to.path) {
				_hmt.push(['_trackPageview', to.fullPath])
			}
		}
		next()
	})
    // 注册组件和方法，document 要写在mounted（因为VuePress是在Node.js 服务端渲染，node没有window，所以报错ReferenceError: document is not defined）
    Vue.mixin({
        mounted() {
            import('./plugins').then((module) => {
                const { registerGitalk, rewriteCopy } = module
                // 注册评论组件
                registerGitalk(siteData.pages || [])
                // 重写copy事件
                rewriteCopy()
            })
        },
    })
}
