<template>
  <audio ref="audio" src="http://mp3.9ku.com/m4a/186947.m4a" />
</template>
<script>
import Map from './map'
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      src: '',
      sessionKey: null
    }
  },
  methods: {
    /**
     * 调取本地音频或调取百度语音api
     */
    initVoice(message) {
      const src = Map[message]
      if (src && src.length) {
        const audio = this.$refs['audio']
        audio.src = src
        audio.play()
      } else {
        const url = 'http://tsn.baidu.com/text2audio?tok=24.92df637fa948812c5cb5856f7ef79b05.2592000.1580867484.282335-18182610&lan=zh&cuid=' + getToken() + '&ctp=1&tex=' + encodeURI(message)
        const audio = this.$refs['audio']
        audio.src = url
        audio.play()
      }
    },
    cancel() {
      this.dialogFormVisible = false
    }
  }
}
</script>
