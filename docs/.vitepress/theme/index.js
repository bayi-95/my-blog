import DefaultTheme from 'vitepress/theme'
import ArticleList from '../components/ArticleList.vue'
import '../style/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // register global compoment
        app.component('ArticleList', ArticleList)
    }
}

