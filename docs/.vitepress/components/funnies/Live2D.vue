<script lang="ts">
import { defineComponent } from 'vue'
import type { ModelOptions } from 'oh-my-live2d'

export default defineComponent({
  name: 'Live2D',
  async mounted() {
    const { loadOml2d } = await import('oh-my-live2d')
    const modelNames = [
      'HK416-1-normal',
      'HK416-2-destroy',
      'HK416-2-normal',
      'Kar98k-normal',
      'cat-white',
      'histoire',
      'mai',
      'platelet',
      'rem'
    ]
    const models: ModelOptions[] = modelNames.map((name) => ({
      path: `https://model.hacxy.cn/${name}/model.json`,
      position: [0, 60],
      scale: 0.08,
      stageStyle: {
        height: 350
      }
    }))
    loadOml2d({
      models
    })
  }
})
</script>
