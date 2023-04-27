import matter from 'gray-matter'
import fs from 'fs-extra'
import { globby } from 'globby'

export async function getArticles() {
    const paths = await globby(['docs/pages/**/**.md'], {
        ignore: ['node_modules']
    })
    let pages = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, 'utf-8')
            const { data } = matter(content)
            data.date = rTime(data.date || '2022-2-3')
            return {
                frontMatter: data,
                regularPath: `${item.replace('.md', '.html').replace('docs', '')}`,
                relativePath: item
            }
        })
    )
    // 过滤文章
    pages = pages.filter((item) => item.frontMatter.isPage)
    // 排序
    pages.sort(compareDate)
    // 置顶
    pages = sticky(pages, 'isSticky')

    return pages
}

function rTime(date) {
    const json_date = new Date(date).toJSON()
    return json_date.split('T')[0]
}

function compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

// 置顶
function sticky(arr, key) {
    arr.forEach((item, index) => {
        if (item.frontMatter[key]) {
            arr.unshift(arr.splice(index, 1)[0])
        }
    })
    return arr
}

// 插入页面的额外脚本或者style
export const EXTRA_CONFIG = [
    [
        'style',
        {
            type: 'text/css'
        },
        `
            .loading-container {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 10000;
              background: #161B29;
              margin: 0 auto;
              height: 100%;
              width: 100%;
            }
            
            .loading-container .container {
              position: fixed;
              width: 40vw;
              height: 45vw;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 666;
            }
            
            .loading-container .common {
              height: 5vw;
              max-height: 100%;
              overflow: auto;
              width: 2vw;
              margin: auto;
              max-width: 100%;
              position: absolute;
              background-color: ;
              border-radius: 0vw 10vw 0vw 10vw;
              box-shadow: inset 0vw 0vw 0vw .1vw #E645D0, 0vw 0vw 1.5vw 0vw #E645D0;
            }
            
            .loading-container .one {
              transform: rotate(45deg);
              left: 0;
              right: 0;
              top: 0;
              bottom: 7.5vw;
            }
            
            .loading-container .two {
              transform: rotate(90deg);
              left: 5.5vw;
              right: 0;
              top: 0;
              bottom: 5.5vw;
            }
            
            .loading-container .three {
              transform: rotate(135deg);
              left: 7.5vw;
              right: 0;
              top: 0;
              bottom: 0;
            }
            
            .loading-container .four {
              transform: rotate(180deg);
              left: 5.5vw;
              right: 0;
              top: 5.5vw;
              bottom: 0;
            }
            
            .loading-container .five {
              transform: rotate(225deg);
              left: 0;
              right: 0;
              top: 7.5vw;
              bottom: 0;
            }
            
            .loading-container .six {
              transform: rotate(270deg);
              left: 0;
              right: 5.5vw;
              top: 5.5vw;
              bottom: 0;
            }
            
            .loading-container .seven {
              transform: rotate(315deg);
              left: 0;
              right: 7.5vw;
              top: 0;
              bottom: 0;
            }
            
            .loading-container .eight {
              transform: rotate(360deg);
              left: 0;
              right: 5.5vw;
              top: 0;
              bottom: 5.5vw;
            }
            
            .loading-container .bar {
              width: 12vw;
              height: .25vw;
              left: 0;
              right: 0;
              top: 16vw;
              bottom: 0;
              margin: auto;
              overflow: hidden;
              background: #E645D0;
            }
            
            .loading-container .one {
              animation: one 1s ease infinite;
              -moz-animation: one 1s ease infinite;
              /* Firefox */
              -webkit-animation: one 1s ease infinite;
              /* Safari and Chrome */
              -o-animation: one 1s ease infinite;
              /* Opera */
            }
            
            @keyframes one {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .two {
              animation: two 1s .125s ease infinite;
              -moz-animation: two 1s .125s ease infinite;
              /* Firefox */
              -webkit-animation: two 1s .125s ease infinite;
              /* Safari and Chrome */
              -o-animation: two 1s .125s ease infinite;
              /* Opera */
            }
            
            @keyframes two {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .three {
              animation: three 1s .25s ease infinite;
              -moz-animation: three 1s .25s ease infinite;
              /* Firefox */
              -webkit-animation: three 1s .25s ease infinite;
              /* Safari and Chrome */
              -o-animation: three 1s .25s ease infinite;
              /* Opera */
            }
            
            @keyframes three {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .four {
              animation: four 1s .375s ease infinite;
              -moz-animation: four 1s .375s ease infinite;
              /* Firefox */
              -webkit-animation: four 1s .375s ease infinite;
              /* Safari and Chrome */
              -o-animation: four 1s .375s ease infinite;
              /* Opera */
            }
            
            @keyframes four {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .five {
              animation: five 1s .5s ease infinite;
              -moz-animation: five 1s .5s ease infinite;
              /* Firefox */
              -webkit-animation: five 1s .5s ease infinite;
              /* Safari and Chrome */
              -o-animation: five 1s .5s ease infinite;
              /* Opera */
            }
            
            @keyframes five {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .six {
              animation: six 1s .625s ease infinite;
              -moz-animation: six 1s .625s ease infinite;
              /* Firefox */
              -webkit-animation: six 1s .625s ease infinite;
              /* Safari and Chrome */
              -o-animation: six 1s .625s ease infinite;
              /* Opera */
            }
            
            @keyframes six {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .seven {
              animation: seven 1s .750s ease infinite;
              -moz-animation: seven 1s .750s ease infinite;
              /* Firefox */
              -webkit-animation: seven 1s .750s ease infinite;
              /* Safari and Chrome */
              -o-animation: seven 1s .750s ease infinite;
              /* Opera */
            }
            
            @keyframes seven {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .eight {
              animation: eight 1s .875s ease infinite;
              -moz-animation: eight 1s .875s ease infinite;
              /* Firefox */
              -webkit-animation: eight 1s .875s ease infinite;
              /* Safari and Chrome */
              -o-animation: eight 1s .875s ease infinite;
              /* Opera */
            }
            
            @keyframes eight {
              0%,
              100% {}
              50% {
                background: ;
                box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
              }
            }
            
            .loading-container .container {
              animation: container 5s linear infinite;
              -moz-animation: container 5s linear infinite;
              /* Firefox */
              -webkit-animation: container 5s linear infinite;
              /* Safari and Chrome */
              -o-animation: container 5s linear infinite;
              /* Opera */
            }
            
            @keyframes container {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }
            
            .loading-container .fade-in {
              animation: fade-in 2s ease;
              -moz-animation: fade-in 2s ease;
              /* Firefox */
              -webkit-animation: fade-in 2s ease;
              /* Safari and Chrome */
              -o-animation: fade-in 2s ease;
              /* Opera */
            }
            
            @keyframes fade-in {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            
            .loading-container .out {
              animation: out 2s 15s ease;
              -moz-animation: out 2s 15s ease;
              /* Firefox */
              -webkit-animation: out 2s 15s ease;
              /* Safari and Chrome */
              -o-animation: out 2s 15s ease;
              /* Opera */
            }
            
            @keyframes out {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
        `
    ],
    [
        'script',
        {},
        `
            const body = document.getElementsByTagName('body')[0];
            const loading = document.createElement('div');
            loading.className = 'loading-container';
            loading.innerHTML =
                '' +
                '<div class="out">'+
                '<div class="fade-in">'+
                '<div class="container">'+
                '<div class="one common"></div>'+
                '<div class="two common"></div>'+
                '<div class="three common"></div>'+
                '<div class="four common"></div>'+
                '<div class="five common"></div>'+
                '<div class="six common"></div>'+
                '<div class="seven common"></div>'+
                '<div class="eight common"></div>'+
                '</div>'+
                '</div>'+
                '</div>';
            body.appendChild(loading);
            // 加定时移除 loading
            setTimeout(function () {
                if (document.body.contains(loading)) {
                    body.removeChild(loading)
                }
            }, 3000)
        `
    ]
]
