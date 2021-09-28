export default ({ Vue, isServer, router }) => {
	if (!isServer) {
		import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
			Vue.use(module.default)
		})
	}

	// 路由切换事件处理
	router.beforeEach((to, from, next) => {
		//触发百度的pv统计
		if (typeof _hmt != "undefined") {
			if (to.path) {
				_hmt.push(["_trackPageview", to.fullPath]);
			}
		}
		next();
	});
}
