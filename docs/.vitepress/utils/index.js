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

export function parseTime(time, cFormat) {
    if (arguments.length === 0 || time === "0" || !time) {
        return "无";
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        date = new Date(time * 1000);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
}
