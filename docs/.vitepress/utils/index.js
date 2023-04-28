// 插入页面的额外脚本或者style
export const EXTRA_CONFIG = [
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
]

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
