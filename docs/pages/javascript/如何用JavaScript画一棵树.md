---
title: '如何用 JavaScript 画一棵树？'
description: 产品要一颗随机树，也就是树的茂盛程度、长度、枝干粗细都是随机的，第一时间想到的就是 Canvas，用它来画这棵随机树吧。
isPage: true
date: 2024-06-11
tags:
- javascript
- canvas
---

# 如何用 JavaScript 画一棵树？

------------------

产品说要让前端用 JavaScript 画一棵树出来，但是这难道不能直接让 UI 给一张图片吗？

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX3YJUYsbHh2q7zx0hd0gSicFyzNgicqAMOPQw4ZBCiclzW4OMJz2en2kDA/640?wx_fmt=png&from=appmsg)

后来一问才知道，产品要的是一颗 **随机树**，也就是树的**茂盛程度、长度、枝干粗细**都是随机的，那这确实没办法叫 UI 给图，毕竟 UI 不可能给我 10000 张树的图片吧？

所以第一时间想到的就是 **Canvas**，用它来画这棵**随机树（文末有完整代码）**

Canvas 画一颗随机树
-------------

接下来使用 Canvas 去画这棵随机树

### 基础页面

我们需要在页面上写一个 `canvas` 标签，并设置好宽高，同时需要获取它的 Dom 节点、绘制上下文，以便后续的绘制

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXpmpYict79AzUan6gj9WJ1UBUIia935dXc9R34cibwZfiahKH9SK1Y1HTibw/640?wx_fmt=png&from=appmsg)

### 坐标调整

默认的 Canvas 坐标系是这样的

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXq0J7m8DmibGG8OxG9J1ebNfUfP2xmOrW00kEr4l9rG1oibZe9tXnRcXg/640?wx_fmt=png&from=appmsg)

但是我们现在需要从中间去向上去画一棵树，所以坐标得调整成这样：

* X 轴从最上面移动到**最下面**

* Y 轴的方向由往下调整成**往上**，并且从最左边移动到**画布中间**

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXkcbt4On6xeDfH2kEL7UkuQFiciavad1o9mlJRp1TNQkErndam2gUp1wQ/640?wx_fmt=png&from=appmsg)

这些操作可以使用 Canvas 的方法

* **ctx.translate：** 坐标系移动

* **ctx.scale：** 坐标系缩放

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX77XUPZjkTg4HDdE1nC7zAfL8n11GK5BQZzGdtHZ32BRdwgXLBibAOtA/640?wx_fmt=png&from=appmsg)

### 绘制一棵树的要素

绘制一棵树的要素是什么呢？其实就是**树枝**和**果实**，但是其实**树枝**才是第一要素，那么**树枝**又有哪些要素呢？无非就这几个点

* 起始点

* 树枝长度、树枝粗细

* 生长角度

* 终点

### 开始绘制

所以我们可以写一个 `drawBranch` 来进行绘制，并且初始调用肯定是绘制**树干**，树干的参数如下：

* 起始点：(0, 0)

* 树枝长度、树枝粗细：这些可以自己自定义

* 生长角度：90度

* 终点：需要算

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX2EJBMLc0xJ9lTG76TV4RaqdOoeuHNyYdG4mwsNXksrOR6o2NSkhcOA/640?wx_fmt=png&from=appmsg)

这个终点应该怎么算呢？其实很简单，根据`树枝长度、生长角度`就可以算出来了，这是初高中的知识

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX9nx9luG91n10Qs6j8iczYOvQyjAgvCJ9fgWHOfOlUzmB7qwazsTeX8Q/640?wx_fmt=png&from=appmsg)

于是我们可以使用 Canvas 的绘制方法，去绘制**线段**，其实树枝就是一个一个的**线段**

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXic7Q82BUaI6aVT4v7Me0VTFeDAVbvJtFYianyYZPyrLiapeGK4tVILErg/640?wx_fmt=png&from=appmsg)

到现在我绘制出了一个**树干** 出来

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXjQDhVxYCS3zJGF79V1dcia9q2uiapkHXVOibYVwVEiam2SibiaDVyG5YDXNA/640?wx_fmt=png&from=appmsg)

但是我们是想让这棵树开枝散叶，所以需要继续递归继续去绘制更多的树枝出来~

### 递归绘制

其实往哪开枝散叶呢？无非就是往左或者往右

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXSKVUib0mbPKiaxKrE2w9mFfX9r6icdpPU4viayFv07HYFib8tCxXmV3AjnA/640?wx_fmt=png&from=appmsg)

所以需要递归画左边和右边的树枝，并且**子树枝肯定要比父树枝更短、比父树枝更细**，比如我们可以定义一个比例

* 子树枝是父树枝长度的 0.8

* 子树枝是父树枝粗细的 0.75

而子树枝的生长角度，其实可以随机，我们可以在 **0° - 30°** 之间随机选一个角度，于是增加了递归调用的代码

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXaqAjfEW8g3DERnaTPAte2smULlxcib1fuz0zszwqI1tA5foQtj8zy1w/640?wx_fmt=png&from=appmsg)

但是这个时候会发现，报错了，爆栈了，因为我们只递归开始，但却没有在某个时刻递归停止

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXHffLqzNDfxr2l7QDNHwufW4PfT4mD61ZM2miaf8qn9iaN2Bce108CrDg/640?wx_fmt=png&from=appmsg)

我们可以自己定义一个停止规则（规则可以自己定义，这会决定你这棵树的茂盛程度）：

* 粗细小于 2 时马上停止

* （粗细小于 10 时 + 随机数）决定是否停止

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX2ic1mUQH5XFUXI8whaxFaWF0ic1FOK0nbaibiczn2CbYzuOSzepGISYe1Q/640?wx_fmt=png&from=appmsg)

现在可以看到我们已经大致绘制出一棵树了

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXMzDVWAm7aGicklQBaSjCUHdmY2icYVbdDFCoc1gffAdwDibHN8Vy1nA0Q/640?wx_fmt=png&from=appmsg)

不过还少了树的果实

### 绘制果实

绘制果实很简单，只需要在绘制树枝结束的时候，去把果实绘制出来就行，其实果实就是一个个的**白色实心圆**

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZXRdYsfRyg8Telzdv9VvjypicOIeWbiasw7gJKrmYzMF2FTuLa0OeStX5A/640?wx_fmt=png&from=appmsg)

至此这棵树完整绘制完毕

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX3YJUYsbHh2q7zx0hd0gSicFyzNgicqAMOPQw4ZBCiclzW4OMJz2en2kDA/640?wx_fmt=png&from=appmsg)

绘制部分的代码如下

![](https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdgmxFA53UBXN4648Zu4RcZX24rjL15vX5usVN3WNTbRSZZOL3DWy44YrxLYhGpbpdib8nnjxNB4G2g/640?wx_fmt=png&from=appmsg)

完整代码
----

``` vue
<template>  
  <div style="background-color: cadetblue">  
    <canvas ref="canvasRef" width="1000" height="750"></canvas>  
  </div>  
</template>  
  
<script setup lang="ts">  
import { ref, onMounted } from 'vue';  
  
// 获取 canvas 的 dom 节点  
const canvasRef = ref<HTMLCanvasElement | null>(null);  
  
onMounted(() => {  
  const canvasEle = canvasRef.value;  
  if (!canvasEle) return;  
  
  // 获取 canvas 上下文  
  const ctx = canvasEle.getContext('2d')!;  
  // 坐标系移动  
  ctx.translate(canvasEle.width / 2, canvasEle.height);  
  // y轴反向  
  ctx.scale(1, -1);  
  
  //   coordinate 起始点  
  //   len 树枝长度  
  //   thick 树枝粗细  
  //   angle 生长角度  
  const drawBranch = (coordinate: [number, number], len: number, thick: number, angle: number) => {  
    // 绘制结束条件  
    if (thick < 10 && Math.random() < 0.1) return;  
    if (thick < 2) {  
      // 绘制果实  
      ctx.beginPath();  
      ctx.arc(...coordinate, 5, 0, 2 * Math.PI);  
      ctx.fillStyle = '#fff';  
      ctx.fill();  
      return;  
    }  
  
    ctx.beginPath(); // 开启线段绘制  
    ctx.moveTo(...coordinate); // 初始起始点  
  
    // 计算结束点  
    const endCoordinate: [number, number] = [  
      coordinate[0] + len * Math.cos((angle * Math.PI) / 180),  
      coordinate[1] + len * Math.sin((angle * Math.PI) / 180),  
    ];  
  
    ctx.lineTo(...endCoordinate); // 线段终点  
    ctx.strokeStyle = '#333'; // 线段颜色  
    ctx.lineWidth = thick; // 线段粗细  
    ctx.lineCap = 'round';  
    ctx.stroke(); // 开始画  
  
    // 左分支  
    drawBranch(endCoordinate, len * 0.8, thick * 0.75, angle + Math.random() * 30);  
    // 右分支  
    drawBranch(endCoordinate, len * 0.8, thick * 0.75, angle - Math.random() * 30);  
  };  
  
  // 先画树干  
  drawBranch([0, 0], 100, 20, 90);  
});  
</script>  
  

```

本文转自 [https://mp.weixin.qq.com/s/6jfubgtHJly56w21j\_mlQw](https://mp.weixin.qq.com/s/6jfubgtHJly56w21j_mlQw)，如有侵权，请联系删除。
