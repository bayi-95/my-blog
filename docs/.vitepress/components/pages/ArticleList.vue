<template>
    <template v-if="articles[current].length > 0">
        <div v-for="(article, index) in articles[current]" :key="index" class="article-list">
            <div class="article-header">
                <div class="article-title">
                    <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <img v-if="article.frontMatter.isSticky" class="tag-sticky" src="/images/sticky.svg" alt="置顶" />
                </div>
            </div>
            <p class="describe" v-html="article.frontMatter.description"></p>
            <div class="article-info">
                {{ article.frontMatter.date }}
                <span v-for="item in article.frontMatter.tags"
                    ><a :href="withBase(`/pages/tags.html?tag=${item}`)"> {{ item }}</a></span
                >
            </div>
        </div>
        <div v-if="pageNum > 1" class="pagination">
            <span
                v-for="i in pageNum"
                class="link t"
                :class="{ active: current === i }"
                :key="i"
                @click="current = i"
                >{{ i }}</span
            >
        </div>
        <div v-if="articles[current].length < pageSize" class="no-more">没有更多了～</div>
    </template>
    <template v-else>
        <div class="empty-wrap flex-column item-center">
            <img src="/images/nodata.svg" alt="icon-nodata" />
            <p class="no-data">暂无文章</p>
        </div>
    </template>
</template>

<script lang="ts" setup>
import { withBase, useData } from 'vitepress'
import { computed, ref } from 'vue'

const { theme } = useData()
const pageSize = 5

// 文章列表
const articles = computed(() => {
    const articles = theme.value?.articles || []
    if (articles.length > 0) {
        const res = {
            1: []
        }
        let key = 1
        articles.forEach((item, index) => {
            if (index >= pageSize && index % pageSize === 0) {
                key += 1
                res[key] = []
            }
            res[key].push(item)
        })
        return res
    }
    return {
        1: []
    }
})

// 页数
const pageNum = computed(() => {
    const len = theme.value?.articles.length
    if (len > 0) {
        return Math.ceil(len / pageSize)
    }
    return 0
})

// 当前页码
const current = ref(1)
</script>

<style lang="scss" scoped>
.article-list {
    border-bottom: 1px dashed var(--vp-c-divider);
    padding: 14px 0 14px 0;
    .article-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .article-title {
        position: relative;
        margin: 0.1rem 0;
        width: 100%;
        font-size: 1.125rem;
        font-weight: 500;
        .tag-sticky {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
            width: 30px;
            height: 30px;
            transform: rotate(90deg);
        }
    }
    .article-info {
        font-size: 12px;
        > span {
            display: inline-block;
            margin-left: 10px;
            padding: 0 8px;
            background-color: var(--vp-c-bg-alt);
            transition: 0.4s;
            border-radius: 2px;
            color: var(--vp-c-text-1);
        }
    }
    .describe {
        font-size: 0.9375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        color: var(--vp-c-text-2);
        margin: 10px 0;
        line-height: 1.5rem;
    }
    .link {
        display: inline-block;
        width: 24px;
        text-align: center;
        border: 1px var(--vp-c-divider) solid;
        border-right: none;
        font-weight: 400;
        cursor: pointer;
        &.active {
            background: var(--vp-c-text-1);
            color: var(--vp-c-text-inverse-1);
            border: 1px solid var(--vp-c-text-1) !important;
        }
        &:first-child {
            border-bottom-left-radius: 2px;
            border-top-left-radius: 2px;
        }
        &:last-child {
            border-bottom-right-radius: 2px;
            border-top-right-radius: 2px;
            border-right: 1px var(--vp-c-divider) solid;
        }
    }
}

.pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
}

.empty-wrap {
    margin-top: 3rem;
}

.empty-wrap .no-data,
.no-more {
    color: var(--vp-c-text-2);
}

.no-more {
    padding: 1rem;
    text-align: center;
    font-size: 14px;
}

@media screen and (max-width: 768px) {
    .article-list {
        padding: 14px 0 14px 0;
        .article-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .article-title {
            font-size: 1.0625rem;
            font-weight: 400;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 17rem;
        }
        .describe {
            font-size: 0.9375rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            margin: 0.5rem 0 1rem;
        }
    }
}
</style>
