import matter from 'gray-matter'
import fs from 'fs-extra'
import { globby } from 'globby'

async function getArticles() {
    const paths = await globby(["docs/pages/**/**.md"], {
        ignore: ["node_modules"],
    });
    let pages = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, "utf-8");
            const { data } = matter(content);
            data.date = rTime(data.date || '2022-2-3');
            return {
                frontMatter: data,
                regularPath: `/${item.replace(".md", ".html").replace('docs', '')}`,
                relativePath: item,
            };
        })
    );
    pages = pages.filter((item) => item.frontMatter.isPage);

    pages.sort(compareDate);

    return pages;
}

function rTime(date) {
    const json_date = new Date(date).toJSON();
    return json_date.split("T")[0];
}

function compareDate (obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

export { getArticles }
