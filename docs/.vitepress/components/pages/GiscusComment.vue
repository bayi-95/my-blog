<template>
    <div v-if="frontmatter.isComment !== 'N'" class="comp-giscus">
        <Giscus
            host="https://giscus.app"
            repo="bayi-95/bayi-95.github.io"
            repoId="R_kgDOJr11yQ"
            category="Announcements"
            categoryId="DIC_kwDOJr11yc4CXNAr"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            lang="zh-CN"
            loading="lazy"
            crossorigin="anonymous"
            async
            :key="key"
            :theme="isDark ? 'dark' : 'light'"
        />
    </div>
</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData, useRoute } from 'vitepress'
import { watch, ref } from 'vue'

// 主题、前言数据
const { isDark, frontmatter }: UseData = useData()

// 监听路由，更新组件
const key = ref(0)
const route = useRoute()
watch(route, () => {
    key.value += 1
})
</script>

<style scoped>
.comp-giscus {
    margin-top: 2em;
}
</style>
