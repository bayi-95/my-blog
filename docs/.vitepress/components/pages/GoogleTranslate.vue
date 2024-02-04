<template>
  <div v-if="isShow" class="comp-google-translate">
    <!-- 翻译容器 -->
    <div v-show="!isHide" class="translate-wrapper">
      <div id="google-translate"></div>
      <SvgRestore class="icon-btn" @click="restoreLanguage"></SvgRestore>
      <SvgClose class="icon-btn big" @click="toggleShow"></SvgClose>
    </div>
    <!-- 隐藏的 icon 按钮 -->
    <SvgTranslate v-show="isHide" class="svg-box" @click="toggleShow"></SvgTranslate>
  </div>
</template>

<script lang="ts" setup>
// import svg
import SvgTranslate from 'assets/svg/translate.svg?component'
import SvgClose from 'assets/svg/close.svg?component'
import SvgRestore from 'assets/svg/restore.svg?component'

import { ref, Ref } from 'vue'
import { useScriptTag } from '@vueuse/core'

const isShow: Ref<boolean> = ref(false)
useScriptTag('https://translate.google.com/translate_a/element.js?cb=handleGoogleTranslateInit', () => {
  // 如果能加载js，代表网络环境 ok
  isShow.value = true
  // 暴露在window上，供回调函数调用
  window.handleGoogleTranslateInit = function () {
    new window.google.translate.TranslateElement(
      {
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false
      },
      'google-translate'
    )
  }
})

// 是否显示翻译
const isHide: Ref<boolean> = ref(true)
function toggleShow() {
  isHide.value = !isHide.value
}

// 重置语言
function restoreLanguage() {
  const iframe = document.getElementById(':1.container') as HTMLIFrameElement
  if (iframe) {
    // 在获取到的 iframe 中搜索所有的按钮
    const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
    const restoreElement = innerDoc?.getElementsByTagName('button')
    if (restoreElement) {
      for (let i = 0; i < restoreElement.length; i++) {
        if (restoreElement[i].id.indexOf('restore') >= 0) {
          restoreElement[i].click()
          return
        }
      }
    }
  }
}
</script>

<style lang="scss">
.skiptranslate > iframe {
  display: none;
}
.comp-google-translate {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  padding: 8px;
  background-color: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-5);
  border-radius: 8px;
  .svg-box {
    width: 18px;
    height: 18px;
    fill: var(--vp-c-brand);
    cursor: pointer;
  }

  .translate-wrapper {
    display: flex;
    align-items: center;
    .goog-te-gadget,
    a {
      display: flex;
      align-items: center;
      margin: 0 3px;
      font-weight: normal;
    }
    .goog-te-combo {
      margin: 0;
      padding: 0 8px;
      width: 86px;
      border-radius: 4px;
    }
    img {
      margin-bottom: -2px;
    }
    .icon-btn {
      margin: 0 1px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      &.big {
        width: 20px;
        height: 20px;
      }
      &:hover {
        opacity: 0.64;
      }
    }
  }
}
</style>
