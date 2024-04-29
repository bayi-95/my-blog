<template>
  <div class="comp-egg-container">
    <span @click="visible = true">{{ name }}</span>
    <span v-show="visible" class="tips">{{ tips }}</span>
    <div class="content-box" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Egg',
  props: {
    name: {
      type: String,
      default: '-彩蛋-'
    },
    tips: {
      type: String,
      default: ''
    }
  },
  computed: {
    contentStyle(): string {
      return this.visible ? 'display: block' : 'display: none'
    }
  },
  data() {
    return {
      visible: false
    }
  }
})
</script>

<style lang="scss" scoped>
.comp-egg-container {
  .tips {
    margin-left: 20px;
  }
  .content-box {
    margin-top: 10px;
  }
}
</style>
