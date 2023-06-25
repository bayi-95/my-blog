<template>
    <div v-if="isShow" class="comp-google-translate">
        <!-- 翻译容器 -->
        <div v-show="!isHide" class="wrapper">
            <div id="google-translate"></div>
            <SvgClose class="btn-close" @click="toggleShow"></SvgClose>
        </div>
        <!-- 隐藏的 icon 按钮 -->
        <SvgTranslate v-show="isHide" class="svg-box" @click="toggleShow"></SvgTranslate>
    </div>
</template>

<script lang="ts" setup>
// import svg
import SvgTranslate from 'assets/svg/translate.svg?component'
import SvgClose from 'assets/svg/close.svg?component'

import { ref, Ref } from 'vue'
import { useScriptTag } from '@vueuse/core'

const isShow: Ref<boolean> = ref(false)
useScriptTag('https://translate.google.com/translate_a/element.js', () => {
    isShow.value = true
    // 加载插件后，还需要等插件调用其他方法后才行，所以要加延迟
    setTimeout(function () {
        new window.google.translate.TranslateElement(
            {
                layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                autoDisplay: false
            },
            'google-translate'
        )
    }, 1000)
})

// 是否显示翻译
const isHide: Ref<boolean> = ref(true)
function toggleShow() {
    isHide.value = !isHide.value
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
    .svg-box {
        width: 18px;
        height: 18px;
        fill: var(--vp-c-brand);
        cursor: pointer;
    }
    .btn-close {
        position: absolute;
        top: -8px;
        right: -8px;
        z-index: 1;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        fill: var(--vp-c-text-1);
        border: 1px solid var(--vp-c-text-2);
        cursor: pointer;
    }
}
</style>
