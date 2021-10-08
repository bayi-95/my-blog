import Config from '../config'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

// 重写copy监听
export const rewriteCopy = function () {
	function copy(e) {
		let copyTxt = ''
		e.preventDefault() // 取消默认的复制事件
		copyTxt = window.getSelection(0).toString()
		copyTxt = `${copyTxt} \n\n原文地址：${window.location.href} \n非商业转载请注明出处，商业转载请联系作者获得授权。`
		const clipboardData = e.clipboardData || window.clipboardData
		clipboardData.setData('text', copyTxt)
	}
	// 移除监听
	document.removeEventListener('cut', copy)
	document.removeEventListener('copy', copy)
	// 监听copy
	document.addEventListener('cut', copy)
	document.addEventListener('copy', copy)
}

// 注册评论组件
export const registerGitalk = function (pages = []) {
	const {
		frontmatter: { gitalkConfig = null },
	} = getCurrentPage(pages)

	if (gitalkConfig && gitalkConfig.id) {
		let gitalkWrap = document.querySelector('#gitalk-container')
		if (!gitalkWrap) {
			const pageWrap = document.querySelector('.content__default')
			// 创建容器
			gitalkWrap = document.createElement('div')
			gitalkWrap.id = 'gitalk-container'
			gitalkWrap.style.paddingTop = '20px'
			pageWrap.appendChild(gitalkWrap)
		}
		const gitalk = new Gitalk({
			...Config.gitalkConfig,
			...gitalkConfig,
		})
		gitalk.render('gitalk-container')
	}
	function getCurrentPage(pages) {
		// 获取当前页面信息
		const pathname = window.location.pathname
		// 当前页面信息
		const currentPage = pages.filter((item) => {
			return item.path === pathname
		})[0]
		return currentPage || {}
	}
}
