<template></template>

<script>
import { defineComponent } from 'vue'
import Snowflakes from 'magic-snowflakes'

export default defineComponent({
  name: 'SnowFlying',
  mounted() {
    new Snowflakes({
      color: '#efefef'
    })
  }
})
</script>
