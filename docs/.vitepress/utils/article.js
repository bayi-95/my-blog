import matter from 'gray-matter'
import fs from 'fs-extra'
import { globby } from 'globby'

export async function getArticles() {
    const paths = await globby(['docs/pages/**/**.md'], {
        ignore: ['node_modules', 'weekly']
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

// 获取周刊数据
export function getSidebarWeekly() {
	const content = fs.readFileSync('./scripts/weekly.json', 'utf8').toString()
	const tree = JSON.parse(content)
	const config = [];
	for (let year in tree) {
		const monthItems = [];
		for (let month in tree[year]) {
			const items = [];
			for (let issue of tree[year][month]) {
				items.push({
					text: issue[1].split('-')[1] + '期 | ' + issue[0],
					link: `/pages/weekly/${issue[1]}`
				});
			}
			monthItems.push({
				text: month,
				collapsed: true,
				items: items
			});
		}
		config.push({
			text: year,
			collapsed: true,
			items: monthItems
		});
	}
	config.reverse();
	config[0].collapsed = false;
	config[0].items[0].collapsed = false;
	return config
}

function rTime(date) {
    const json_date = new Date(date).toJSON()
    return json_date.split('T')[0]
}

function compareDate(prev, next) {
    return prev.frontMatter.date < next.frontMatter.date ? 1 : -1
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
