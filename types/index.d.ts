// 组件类型
interface Components {
    [key: string]: ComponentType
}

// 字体阴影 位置
type Position = {
    x: number
    y: number
}

// 字体阴影 属性
type Target = {
    light?: {
        position: Position
    }
    draw: Function
}

type Weather = {
    now: {
        text: string
        code: string
        temperature: string
    }
    location: {
        name: ''
    }
}

// 文章数据
interface ArticleItem {
    frontMatter: {
        // 标签
        tags: string | string[]
        title: string
        // 置顶
        isSticky: boolean
        description: string
        date: string
        // 是否有评论组件
        isComment: 'Y' | 'N'
        [key: string]: any
    }
    regularPath: string
    relativePath: string
}

interface ArticleResult {
    [key: number]: ArticleItem[]
}

// vitepress 主题数据
interface UseData {
    // 主题
    isDark: Ref<boolean>
    // 页面参数
    frontmatter: Ref<ArticleItem.frontMatter>
    // 其它
    [key: string]: any
}
