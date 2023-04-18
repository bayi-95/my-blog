import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { ArticleList, CuteBirdButton, Egg, DinosaurRunner, Elephant, SeasonComponent } from '../components'

import '../style/index.scss'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-before': () => h(SeasonComponent),
            'home-hero-after': () => h(CuteBirdButton),
            'layout-bottom': () => h(Elephant)
        })
    },
    enhanceApp({ app }) {
        // register global compoment
        app.component('ArticleList', ArticleList)
        app.component('CuteBirdButton', CuteBirdButton)
        app.component('Egg', Egg)
        app.component('DinosaurRunner', DinosaurRunner)
	    app.component('Elephant', Elephant)
	    app.component('SeasonComponent', SeasonComponent)
    }
}
