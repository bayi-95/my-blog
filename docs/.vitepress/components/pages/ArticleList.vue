<template>
  <template v-if="articles[current].length > 0">
    <!-- 标签过滤 -->
    <div v-if="tagList.length > 0" class="tag-box">
      <span class="label">标签 🏷️：</span>
      <p v-for="item in tagList" class="tag-item">
        <span class="tag">{{ item }}</span>
        <SvgClose class="tag-close" @click="handleRemoveTag(item)"></SvgClose>
      </p>
    </div>
    <div v-for="(article, index) in articles[current]" :key="index" class="article-list">
      <div class="article-header">
        <div class="article-title">
          <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
          <SvgSticky v-if="article.frontMatter.isSticky" class="tag-sticky"></SvgSticky>
        </div>
      </div>
      <p class="describe" v-html="article.frontMatter.description"></p>
      <div class="article-info">
        {{ article.frontMatter.date }}
        <span v-for="item in article.frontMatter.tags" @click="handleTagChange(item)">{{ item }}</span>
      </div>
    </div>
    <div v-if="pageNum > 1" class="pagination">
      <span v-for="i in pageNum" class="link t" :class="{ active: current === i }" :key="i" @click="handleCurrentChange(i)">{{ i }}</span>
    </div>
    <div v-if="articles[current].length < pageSize" class="no-more">没有更多了～</div>
  </template>
  <template v-else>
    <div class="empty-wrap flex-column item-center">
      <SvgEmpty></SvgEmpty>
      <p class="no-data">暂无文章</p>
    </div>
  </template>
</template>

<script lang="ts" setup>
// import svg
import SvgSticky from 'assets/svg/sticky.svg?component'
import SvgClose from 'assets/svg/close.svg?component'
import SvgEmpty from 'assets/svg/empty.svg?component'

import { useData, withBase } from 'vitepress'
import { useUrlSearchParams } from '@vueuse/core'
import { computed, onMounted, ref, unref, watch } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

const { theme } = useData()

// 当前页码
const current: Ref<number> = ref(1)
const pageSize = 5

// 标签数据
const tagList = ref<string[]>([])
onMounted(() => {
  const { tag: urlTags = '' } = useUrlSearchParams()
  const tagStr = urlTags || sessionStorage.getItem('tagList') || ''
  tagList.value = tagStr ? (tagStr as string).split(',') : []
  current.value = Number(sessionStorage?.getItem('currentPageNum') || 1)
})

// 文章列表
const articles = computed(() => {
  let _articles = theme.value?.articles || []
  // 如果有标签
  const tags = tagList.value || []
  if (tags.length > 0) {
    _articles = _articles.filter((item: ArticleItem) => {
      return tags.every((tag) => item.frontMatter.tags.includes(tag))
    })
  }
  // 如果有文章
  if (_articles.length > 0) {
    const res: ArticleResult = {
      1: []
    }
    let key = 1
    _articles.forEach((item: any, index: number) => {
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

// 总页数
const pageNum = computed(() => {
  return Object.keys(articles.value).length
})

// 监听tag重置页码
watch(
  tagList,
  (val) => {
    if (val) {
      // 重置页码
      handleCurrentChange(1)
    }
  },
  { deep: true }
)

// 添加 tag
function handleTagChange(tag: string) {
  if (tag) {
    const tags: UnwrapRef<string[]> = unref(tagList) || []
    if (!tags.includes(tag)) {
      tags.push(tag)
      const tagStr: string = [...new Set(tags)].join(',')
      sessionStorage.setItem('tagList', tagStr)
    }
  }
}

// 移除 tag
function handleRemoveTag(tag: string) {
  const index = tagList.value.findIndex((item) => item === tag)
  if (index > -1) {
    tagList.value.splice(index, 1)
    sessionStorage.setItem('tagList', tagList.value.join(','))
  }
}

// 页码改变
function handleCurrentChange(num: number) {
  current.value = num
  sessionStorage.setItem('currentPageNum', String(num))
  document.body.scrollIntoView()
}
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
      fill: var(--vp-c-red-1);
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
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
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
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  .link {
    display: inline-block;
    width: 24px;
    text-align: center;
    background-color: var(--vp-c-bg-soft);
    border: 1px var(--vp-c-border) solid;
    border-right: none;
    font-weight: 400;
    cursor: pointer;
    &.active {
      background: var(--vp-c-brand);
      color: var(--vp-c-white);
      border: 1px solid var(--vp-c-brand) !important;
    }
    &:first-child {
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
    }
    &:last-child {
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      border-right: 1px var(--vp-c-border) solid;
    }
  }
}

.tag-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  .label {
    line-height: 28px;
  }
  .tag-item {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 8px 0 0;
    padding: 0 6px 0 12px;
    font-size: 12px;
    border: 1px var(--vp-c-divider) solid;
    border-radius: 18px;
    line-height: 24px;
    .tag-close {
      margin-left: 2px;
      width: 16px;
      color: var(--vp-c-divider);
      cursor: pointer;
    }
  }
}

.empty-wrap {
  margin-top: 3rem;
}

.no-more {
  padding: 1rem;
  text-align: center;
  font-size: 14px;
}

.empty-wrap .no-data,
.no-more {
  color: var(--vp-c-text-2);
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
