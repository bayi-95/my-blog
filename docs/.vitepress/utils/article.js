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
