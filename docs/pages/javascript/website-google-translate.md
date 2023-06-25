---
title: '基于 Google translate 的网站多语言方案'
description: 这篇文章讨论了网站国际化的需求和多语言方案。传统的基于 i18n 的方案需要维护多套语言文件，工作量大，不便于维护。这里提出了基于 Google 翻译的方案，需要科学上网，但是在国外访问还行。建议具体情况具体考虑。
date: 2023-6-25
isPage: true
tags:
    - 多语言
    - i18n
    - google translate
---

# 基于 Google translate 的网站多语言方案

### 前言

网站国际化的需求在不断升高。

### i18n

常见的 `i18n` 的多语言方案，需要维护多套语言文件，缺点是工作量大，且不便于维护，某个词改了统统都要改。

### Google translate 方案

偶尔看到一个网站，对他网站的多语言方案，感兴趣搜了下，找到了下面的方案，基于 Google translate 的多语言翻译方案，如下 :

```html
<!-- 元素容器 -->
<div id="”google_translate_element”"></div>
```

```js
// 下面的插件加载好了，会执行此方法
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        },
        'google_translate_element'
    )
}
```

```js
// 引入插件支持，cb 传入执行的回调方法名称
<script
    type="text/javascript"
    src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
```

### 缺点

需要科学上网，不过，考虑在国外访问的话，方案也还行；当然，只是提供个思路，具体情况还需要考虑下。

### 效果

可以访问这个[网站](https://bayi-95.eu.org/pages/articles/)，科学上网的情况下，可以看到右下角的翻译按钮，可以切换语言，在线翻译。
