import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ArticleList from '../components/ArticleList.vue'
import CuteBirdButton from '../components/CuteBirdButton.vue'
import '../style/index.scss'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-after': () => h(CuteBirdButton)
        })
    },
    enhanceApp({ app }) {
        // register global compoment
        app.component('ArticleList', ArticleList)
        app.component('CuteBirdButton', CuteBirdButton)
    }
}

