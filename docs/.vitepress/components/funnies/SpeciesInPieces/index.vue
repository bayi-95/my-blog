<template>
  <div class="animal-container">
    <template v-for="(item, index) in currentData" :key="index">
      <div
        class="clip-item"
        :style="{
          backgroundColor: item.backgroundColor,
          clipPath: item.clipPath,
          transitionDelay: `${index * 15}ms`
        }"
      ></div>
    </template>
  </div>

  <div class="flex-y-center justify-center">
    <button @click="changeAnimal">切换 / toggle</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import data from './data.json'

const currentIndex = ref(0)
const currentData = ref<Record<string, string>[]>(data[0])
const length = data.length
const changeAnimal = () => {
  currentIndex.value++
  // 索引到最后了，重置为 0
  if (currentIndex.value >= length) {
    currentIndex.value = 0
  }
  currentData.value = data[currentIndex.value]
}
</script>

<style scoped lang="scss">
.animal-container {
  width: 800px;
  height: 600px;
  position: relative;

  .clip-item {
    position: absolute;
    width: 100%;
    height: 100%;

    // 动画过渡效果
    transition-property: all;
    transition-duration: 1000ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
