<template></template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SnowFlying',
  mounted() {
    import('../utils/snow-flying').then(() => {
      new Snowflakes({
        color: '#efefef'
      })
    })
  }
})
</script>
