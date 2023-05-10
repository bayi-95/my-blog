import DefaultTheme from 'vitepress/theme'
import * as Components from '../components'
import { h } from 'vue'

import '../style/index.scss'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-before': () => h(Components['FourSeasons']),
            'home-hero-after': () => h(Components['CuteBirdButton']),
            'layout-bottom': () => h(Components['Elephant'])
        })
    },
    async enhanceApp({ app }) {
        // 插入执行的方法
        if (!import.meta.env.SSR) {
            const { renderLoading } = await import('../utils')
            renderLoading()
        }
        // 注册全局组件
        Object.keys(Components).forEach((key) => {
            app.component(key, Components[key])
        })
    }
}
