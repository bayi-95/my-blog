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
      'Pio',
      'Senko_Normals',
      'bilibili-22',
      'bilibili-33',
      'cat-black',
      'cat-white',
      'chino',
      'date',
      'hallo',
      'haruto',
      'hibiki',
      'histoire',
      'kobayaxi',
      'koharu',
      'kp31',
      'live_uu',
      'mai',
      'murakumo',
      'platelet',
      'platelet_2',
      'potion-Maker-Pio',
      'rem',
      'rem_2',
      'shizuku',
      'shizuku_48',
      'shizuku_pajama',
      'terisa',
      'tia',
      'umaru',
      'uni',
      'wed_16',
      'xisitina',
      'z16'
    ]
    const models: ModelOptions[] = modelNames.map((name) => ({
      path: `https://model.oml2d.com/${name}/model.json`,
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
