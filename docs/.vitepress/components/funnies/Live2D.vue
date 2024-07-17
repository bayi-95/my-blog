<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Live2D',
  async mounted() {
    const { loadOml2d } = await import('oh-my-live2d')
    loadOml2d({
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
        }
      ]
    })
  }
})
</script>
