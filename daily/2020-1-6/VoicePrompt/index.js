/**
 * Created by bayi on 1/3/20
 */
import VoicePrompt from './index.vue'

export default {
  install: function(Vue) {
    const VoicePromptCom = Vue.extend(VoicePrompt)
    let VoicePromptInit
    const initInstance = () => {
      // 实例化vue实例
      VoicePromptInit = new VoicePromptCom()
      const VoicePromptEl = VoicePromptInit.$mount().$el
      document.body.appendChild(VoicePromptEl)
    }
    Vue.prototype.$VoicePrompt = {
      initVoice(message) {
        if (!VoicePromptInit) {
          initInstance()
        }
        VoicePromptInit.initVoice(message)
      }
    }
  }
}
