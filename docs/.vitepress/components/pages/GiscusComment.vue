<template>
    <div class="giscus">
        <Giscus
            repo="bayi-95/bayi-95.github.io"
            repo-id="R_kgDOJr11yQ"
            category="Announcements"
            category-id="DIC_kwDOJr11yc4CXNAr"
            mapping="pathname"
            strict="0"
            reactions-enabled="1"
            emit-metadata="0"
            input-position="top"
            lang="zh-CN"
            loading="lazy"
            crossorigin="anonymous"
            async
            :theme="isDark ? 'dark' : 'light'"
        />
    </div>
</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<style scoped>
img.pv {
    margin-top: 1em;
}

div.giscus {
    margin-top: 2em;
}

.donation {
    margin-top: 2em;
}

.donation div {
    margin: 0 auto;
    flex: 0 1 auto;
    flex-direction: row;
    max-width: max-content;
    row-gap: 10px;
}

.donation img {
    display: inline-block;
    zoom: 25%;
    margin: 4em;
}
</style>
