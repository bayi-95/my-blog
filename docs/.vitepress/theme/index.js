import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { ArticleList, CuteBirdButton, Egg, DinosaurRunner, Elephant, FourSeasons, WeatherCard } from '../components'

import '../style/index.scss'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-before': () => h(FourSeasons),
            'home-hero-after': () => h(CuteBirdButton),
            'layout-bottom': () => h(Elephant)
        })
    },
    async enhanceApp({ app }) {
        // 插入执行的方法
        if (!import.meta.env.SSR) {
            const { renderLoading } = await import('../utils')
            renderLoading()
        }
        // register global components
        app.component('ArticleList', ArticleList)
        app.component('CuteBirdButton', CuteBirdButton)
        app.component('Egg', Egg)
        app.component('DinosaurRunner', DinosaurRunner)
        app.component('Elephant', Elephant)
        app.component('FourSeasons', FourSeasons)
        app.component('WeatherCard', WeatherCard)
    }
}
