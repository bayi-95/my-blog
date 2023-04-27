// 插入页面的额外脚本或者style
export const EXTRA_CONFIG = []

// 渲染 loading
export function renderLoading() {
    const body = document.getElementsByTagName('body')[0]
    const loading = document.createElement('div')
    loading.className = 'loading-container'
    loading.innerHTML =
        '' +
        '<div class="out">' +
        '<div class="fade-in">' +
        '<div class="container">' +
        '<div class="one common"></div>' +
        '<div class="two common"></div>' +
        '<div class="three common"></div>' +
        '<div class="four common"></div>' +
        '<div class="five common"></div>' +
        '<div class="six common"></div>' +
        '<div class="seven common"></div>' +
        '<div class="eight common"></div>' +
        '</div>' +
        '</div>' +
        '</div>'
    body.appendChild(loading)
    // 加定时移除 loading
    setTimeout(function () {
        if (document.body.contains(loading)) {
            body.removeChild(loading)
        }
    }, 2400)
}
