import DefaultTheme from 'vitepress/theme'
import * as Components from '../components'
import { h, App } from 'vue'

import '../style/index.scss'
import "virtual:uno.css";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Components['FourSeasons']),
      'home-hero-after': () => h(Components['CuteBirdButton']),
      'home-features-before': () => h(Components['Live2D']),
      'layout-top': () => h(Components['GoogleTranslate']),
      'layout-bottom': () => h(Components['Elephant']),
      'doc-after': () => h(Components['GiscusComment'])
    })
  },
  async enhanceApp({ app }: { app: App }) {
    // 注册全局组件
    Object.keys(Components).forEach((key) => {
      const componentKey = key as keyof typeof Components
      app.component(key, Components[componentKey])
    })
  }
}
