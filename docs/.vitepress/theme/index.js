import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ArticleList from '../components/ArticleList.vue'
import CuteBirdButton from '../components/CuteBirdButton.vue'
import DinosaurRunner from '../components/DinosaurRunner.vue'
import Egg from '../components/Egg.vue'
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
        app.component('Egg', Egg)
        app.component('DinosaurRunner', DinosaurRunner)
    }
}

