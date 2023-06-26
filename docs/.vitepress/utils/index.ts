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
    // 微信图片防盗链处理：是被服务器判断了header中的referer的，这里处理不发送 referer 解决
    [
        'meta',
        {
            name: 'referrer',
            content: 'origin'
        }
    ]
]

// 渲染 loading
export function renderLoading() {
    // 插入样式
    createStyleSheet(
        `.loading-container{position:fixed;top:0;left:0;z-index:10000;margin:0 auto;height:100%;width:100%;pointer-events:none;}.loading-container .loading-left-bg,.loading-container .loading-right-bg{position:fixed;width:50%;height:100%;background-color:#333;transition:all 0.75s cubic-bezier(0.42,0,0,1.01);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}.loading-container .loading-right-bg{right:0;}.loaded .loading-left-bg{transform:translate(-100%,0);}.loaded .loading-right-bg{transform:translate(100%,0);}.loaded .container{display:none;}.loading-container .out{height:100vh;}.loading-container .container{position:fixed;width:40vw;height:45vw;left:0;right:0;top:0;bottom:0;margin:auto;z-index:666;}.loading-container .common{position:absolute;overflow:auto;margin:auto;width:2vw;max-width:100%;height:5vw;max-height:100%;border-radius:0 10vw 0 10vw;box-shadow:inset 0 0 0 0.1vw #e645d0,0 0 1.5vw 0 #e645d0;}.loading-container .one{transform:rotate(45deg);left:0;right:0;top:0;bottom:7.5vw;}.loading-container .two{transform:rotate(90deg);left:5.5vw;right:0;top:0;bottom:5.5vw;}.loading-container .three{transform:rotate(135deg);left:7.5vw;right:0;top:0;bottom:0;}.loading-container .four{transform:rotate(180deg);left:5.5vw;right:0;top:5.5vw;bottom:0;}.loading-container .five{transform:rotate(225deg);left:0;right:0;top:7.5vw;bottom:0;}.loading-container .six{transform:rotate(270deg);left:0;right:5.5vw;top:5.5vw;bottom:0;}.loading-container .seven{transform:rotate(315deg);left:0;right:7.5vw;top:0;bottom:0;}.loading-container .eight{transform:rotate(360deg);left:0;right:5.5vw;top:0;bottom:5.5vw;}.loading-container .one{animation:one 1s ease infinite;-moz-animation:one 1s ease infinite;-webkit-animation:one 1s ease infinite;-o-animation:one 1s ease infinite;}@keyframes one{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .two{animation:two 1s 0.125s ease infinite;-moz-animation:two 1s 0.125s ease infinite;-webkit-animation:two 1s 0.125s ease infinite;-o-animation:two 1s 0.125s ease infinite;}@keyframes two{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .three{animation:three 1s 0.25s ease infinite;-moz-animation:three 1s 0.25s ease infinite;-webkit-animation:three 1s 0.25s ease infinite;-o-animation:three 1s 0.25s ease infinite;}@keyframes three{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .four{animation:four 1s 0.375s ease infinite;-moz-animation:four 1s 0.375s ease infinite;-webkit-animation:four 1s 0.375s ease infinite;-o-animation:four 1s 0.375s ease infinite;}@keyframes four{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .five{animation:five 1s 0.5s ease infinite;-moz-animation:five 1s 0.5s ease infinite;-webkit-animation:five 1s 0.5s ease infinite;-o-animation:five 1s 0.5s ease infinite;}@keyframes five{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .six{animation:six 1s 0.625s ease infinite;-moz-animation:six 1s 0.625s ease infinite;-webkit-animation:six 1s 0.625s ease infinite;-o-animation:six 1s 0.625s ease infinite;}@keyframes six{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .seven{animation:seven 1s 0.75s ease infinite;-moz-animation:seven 1s 0.75s ease infinite;-webkit-animation:seven 1s 0.75s ease infinite;-o-animation:seven 1s 0.75s ease infinite;}@keyframes seven{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .eight{animation:eight 1s 0.875s ease infinite;-moz-animation:eight 1s 0.875s ease infinite;-webkit-animation:eight 1s 0.875s ease infinite;-o-animation:eight 1s 0.875s ease infinite;}@keyframes eight{50%{box-shadow:inset 0 0 0 0.1vw var(--vp-c-brand-light),0 0 1.5vw 0 var(--vp-c-brand-light);}}.loading-container .container{animation:container 5s linear infinite;-moz-animation:container 5s linear infinite;-webkit-animation:container 5s linear infinite;-o-animation:container 5s linear infinite;}@keyframes container{from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}@media screen and (min-width:960px){.loading-container .out{transform:scale(0.6);}}`
    )
    // 插入 dom
    const body = document.getElementsByTagName('body')[0]
    const loading = document.createElement('div')
    loading.className = 'loading-container'
    loading.innerHTML =
        '' +
        '<div class="loading-left-bg"></div>' +
        '<div class="loading-right-bg"></div>' +
        '<div class="out">' +
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
        '</div>'
    body.classList.add('loading')
    body.appendChild(loading)
    // 加定时移除 loading
    setTimeout(function () {
        loading.classList.add('loaded')
        body.classList.remove('loading')
    }, 2000)
}

function createStyleSheet(css: string) {
    try {
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(css)
        document.adoptedStyleSheets = [sheet]
    } catch (e) {
        const style = document.createElement('style')
        style.type = 'text/css'
        style.textContent = css
        const head = document.getElementsByTagName('HEAD')[0]
        if (head != null) {
            head.appendChild(style)
        }
    }
}

/**
 * 格式化日期
 * @param time
 * @param cFormat
 */
export function parseTime(time: any, cFormat: string) {
    if (arguments.length === 0 || time === '0' || !time) {
        return '无'
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        date = new Date(time * 1000)
    }
    const formatObj: FormatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: string, key: keyof FormatObj) => {
        let value: string | number = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value] || ''
        }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value.toString() || ''
    })
}

interface FormatObj {
    y: number
    m: number
    d: number
    h: number
    i: number
    s: number
    a: number
}

// 由于markdown-it-mathjax3使用svg渲染，增加了一些自定义标签，配置时同样需要将这些标签标记为自定义标签，防止编译出错
export const CUSTOM_ELEMENTS = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml',
    'mjx-container',
    'mjx-assistive-mml'
]
