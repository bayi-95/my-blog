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
