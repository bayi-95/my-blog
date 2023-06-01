---
title: 我的日志
description: 日记、记录、感悟
sidebar: auto
---

# 我的日志

### 6/1/23

∆ chore: 支持 docker 使用 algolia 爬取网站内容功能

### 5/26/23

∆ feat(FourSeasons): 支持夏天组件 -- 太阳、风车、树、云 和 风，等到 6 月份了，会自己切换 ：）

### 5/24/23

∆ idea: 觉得下一代需要早些接触学习编程技能，随着 互联网、AI 技术的发展，`Coding` 将会成为生活中必备的基本技能之一，可以去[网站](https://studio.code.org/courses)学习。

∆ 人们一旦擅长了某件事情那么就会对此充满激情，"如果你热衷于编程，我强烈推荐你阅读 Steve McConnell 编写的《Code Complete》，它将永远改变你的编程思维"。

∆ **阅读专栏：**

1. [10 个诀窍助你成为厉害的远程开发人员](https://x-team.com/blog/10-secrets-to-becoming-a-great-remote-developer/)
2. [PM 的必备技能 —— 如何不被 RD 们嫌弃](https://www.36kr.com/p/1641873735681)
3. [腾讯前员工创业笔记：那些跟钱有关的事儿](https://www.html5tricks.com/sth-about-money.html)
4. [做挖渠道的人啊 挖呀挖](https://www.html5tricks.com/50-wan-enginer.html)

∆ **好的程序员：**

1. 好的程序员知道要在解决一个问题之前先做研究；
2. 渴望深入问题并找出错误的根源；
3. 研究一下源码；
4. 采取行动，立即着手解决，兴奋地发现并处理问题；
5. 防范未然，并精确的解决大部分问题；
6. 善于交流，简洁明了地表达观点；精炼的电子邮件、优雅的报告或者仅仅是高效的备忘录；会把时间花在如何将他们的观点更好地表达出来上面。如果没有人能够理解你写的代码，又有什么意义呢？无论使用什么媒介；
7. 激情、感兴趣、好奇被吸引、痴迷于️专注。

∆ **如何开会议：**

1. 会议绝不该超过一小时；
2. 每个会议都应该有一个清晰的目标声明；
3. 在开会之前预先做好功课；
4. 每一个出现在会议上的人都应该是因为他们想要在那里，或者他们需要在那里。一种让你自己对会议负责的可靠方法就是让每个人自行决定是否要参加你的会议。想象一下举行一次大家都真正想要参加的会议，那一定是因为真的很有用，或者很有趣，或者很娱乐；
5. 在会议结束时概括一下待办事项；
6. 快速干活，少说废话，抓住工作的重点。

∆ 具有良好的沟通反馈习惯，熟悉业务需求，喜欢高效地完成自己的工作、编写清晰优质的代码，可以主动提供帮助、分担一定的任务，具有一定的项目管理经验

∆ 看新闻报道，要看到新闻背后辛酸苦辣的故事，因为新闻报导总是很喜欢忽略很多真实的细节

### 5/18/23

∆ fix: 天气组件再次进入页面时，渲染动画异常的问题

### 5/17/23

∆ `pnpm` 管理 `node` 版本

```shell
# 1. 安装 n
brew install n
# 2. 安装 node16
sudo n 16
# 3. 安装 pnpm
brew install pnpm
# 4. pnpm 安装 node14、node16
pnpm env user --global 14
pnpm env user --global 16
# 5. node16 降低 pnpm 版本
corepack enable
corepack prepare pnpm@7.32.4 --activate
# 6. 卸载 n/node16
sudo n rm 16
brew uninstall n
# 7. 查看版本
node -v
npm -v
pnpm -v
```

### 5/10/23

∆ refactor: 动态注册全局组件

∆ chore: 修改项目开发环境启动时，自动在浏览器打开 tab

∆ feat: 上线一款 h5 小游戏——《[超级玛丽 · Simple](https://bayi-95.eu.org/pages/javascript/super-marie.html)》，tips: 对手残党不是那么友好 ：）

### 5/5/23

∆ update: 修改天气组件，天气数据过接口 api 获取

**来源**：心知天气-天气实况 https://api.seniverse.com/v3/weather/now.json

### 4/28/23

∆ feat: 新增天气组件，是很漂亮的 css 动效

### 4/27/23

∆ feat: 添加首页的加载动画 loading

∆ forefront 聊天 AI 支持 GPT-3.5 / 4.0 - https://chat.forefront.ai/

### 4/18/23

∆ blog: 添加「四季」组件，用于页面渲染，已支持：春天 - 樱花飘落 🌸

∆ chore: 项目添加 husky + lint-staged 代码格式化处理

### 4/13/23

∆ 计划: 思维模型、心理学进修、护工护理、营养师

∆ blog: 文章列表，添加置顶功能

∆ update: 修改博客的部署位置

### 3/29/23

∆ blog: [文章列表](https://bayi-95.eu.org/pages/list/) - 新增《[爱和治愈自己](https://bayi-95.eu.org/pages/idea/%E7%88%B1%E5%92%8C%E6%B2%BB%E6%84%88%E8%87%AA%E5%B7%B1.html)》、《[前端 commit 提交规范](https://bayi-95.eu.org/pages/javascript/%E5%89%8D%E7%AB%AFcommit%E8%A7%84%E8%8C%83.html)》

### 3/28/23

∆ blog: 新增 小彩蛋 —— 《恐龙快跑》小游戏

∆ 查看依赖包

```shell
# npm 全局依赖包
npm ls -g --depth=0

# brew 查看安装的依赖包
brew search pnpm
brew ls
```

**来源**：[chrome 恐龙小游戏源码研究](https://www.cnblogs.com/undefined000/p/trex_1.html)

### 3/7/23

∆ style(component): [CurtBirdButton] 响应式样式修改

∆ blog：新增 思维模型 - 金字塔原理

### 3/6/23

∆ feat: 新增组件 `CurtBirdButton`，首页跳转按钮替换为此组件

∆ 新增：思维模型 - 刻意学习

**来源**：[CSS 的快乐：画一个可爱的三只小鸟 Button](https://mp.weixin.qq.com/s?__biz=Mzg3OTYzMDkzMg==&mid=2247493043&idx=1&sn=197aca704daa784341a8dd8a5c9d0b73&chksm=cf032a88f874a39e712f7a2f8c29af9c4c371270a50ba49d0628fb07353cd18e6a4e6702c069&scene=178&cur_album_id=2150438405699174401#rd)

### 2/20/23

看到一篇文章描述成熟的亲密关系，有受到启发，摘要：

1. 我为我的人生负责，你为你的人生负责，但是我们俩的人生交织在一起，所以我会充分注意和理解我们对于彼此的影响。
2. 我的存在价值，不会因为对方喜欢或不喜欢我，对我好或对我不好有所增减和改变，相反，它始终都在那里。
3. 虽然，你是你，我是我，但是你的一举一动会影响到我，我的一举一动也会影响到你。 爱虽然不是控制，但爱也不是放任，爱是全心全意为了所爱之人的福祉考虑，为其做尽可能的事。 所以，我爱你，既是我的事，也与你有关。 当一个人，最终进入到“他人意识阶段”后，Ta 会成为一个非常好的恋爱对象，也会成为一个非常好的结婚伴侣。

**来源**：[写在情人节：真正成熟的亲密关系是什么样的？](https://mp.weixin.qq.com/s/v0Ird2Pcle6QBnkv_fQCAg)

### 2/8/23

∆ fix: `algolia` 因为 lang 导致无搜索结果的问题，修改 algolia.json 里关于 lang 的设置

**来源**：[vuepress2.x 文档和集成 algolia 配置过程](https://zhuanlan.zhihu.com/p/542544442)

∆ 把首页背景图转 webp 减小图片大小

**来源**：[convertio 转换工具](https://convertio.co/zh/png-webp/)

### 2/2/23

∆ 新增：思维模型

∆ 新增：algolia 搜索 & Github Action 在 Docker 中执行的 AlgoliaDocSearch scraper action

### 1/18/23

∆ 暗黑模式疑问：

1. 如果客户端 `webview` 不支持 `prefers-color-scheme`，那么客户端提供接口 ——客户端 js 注入，前端添加监听
2. h5 页面无客户端支持时，支持按钮点击切换黑夜模式，按钮入口可配置；或者是默认跟随系统？ ——不需要入口，跟随系统
3. 给银行的，default 下面默认 light、dark，现场可以修改定制，给指导文档 ——这样处理
4. 意味着，都是通过样式变量控制，兼容性？影响范围 ——不考虑兼容 ie

∆ 新增文章：暗黑模式方案

∆ 新增 github action 自动部署，调研 travis-ci

### 1/17/23

∆ `shell` 脚本语法

```shell
# 停止执行，需要输入回车
read -p '请输入提交信息：' message

# 给默认值；-n 有值；-z 无值
if [ -z "$message" ]; then
  message='deploy：更新博客'
  echo 'deploy：更新博客'
fi
```

∆ 问题：github 访问慢问题

方法：

1. 解决 `github` 访问慢问题：修改 hosts，[访问获取最新 host 文件](https://github.com/521xueweihan/GitHub520)
2. clone 慢：hub.fastgit.xyz 高速的 GitHub git 仓库镜像，使用：

```shell
git clone https://hub.fastgit.xyz/PaddlePaddle/PaddleOCR.git
```

### 8/22/22

项目经验管理总结：

1. 按照重要性递减的顺序来做下面这些事情
2. 雇佣独立的自由职业者而不是机构（项目规模、管理、资源分配和沟通有关）
3. 串行的任务，增量的结果（1. 如果机构有 8 项完成了 80% 的任务，那么缩小项目范围或更换供应商对你来说代价很大 2. 同时监督 8 项子任务更耗费脑力）
4. 缩小项目范围，规定任务的界限
5. 对时间表达成共识（敦促开发人员评估每一项任务，并要求他们注意工作范围）
6. 及时的沟通、反馈、讨论和解决

**来源**：[项目经验管理总结](https://mp.weixin.qq.com/s/QbBPLp1votLmAb5nVLCdag)

### 8/17/22

`Git` 在提交时，写上分类前缀：

-   feat：新功能
-   update：更新某功能
-   fix：修补某功能的 bug
-   refactor：重构某个功能
-   optimize: 优化构建工具或运行时性能
-   style：仅样式改动
-   docs：仅文档新增/改动
-   chore：构建过程或辅助工具的变动

### 8/16/22

1. `pnpm` 全称是 “Performant NPM”，即高性能的 npm。它结合软硬链接与新的依赖组织方式，大大提升了包管理的效率，也同时解决了 “幻影依赖” 的问题，让包管理更加规范，减少潜在风险发生的可能性。解决了 npm 嵌套复制多份的问题（浪费磁盘资源、嵌套路径过长在 window 下的问题）、处理多版本（还是嵌套）问题、幽灵依赖的问题（同名的包只会提升一个版本的位置，其余的版本依然会复制多次）。不再是复制了，而是都从全局 store 硬连接到 node_modules/.pnpm，然后之间通过软链接来组织依赖关系
2. 快：安装速度快。
3. 准：安装过的依赖会准确复用缓存，甚至包版本升级带来的变化都只 diff，绝不浪费一点空间，逻辑上也严丝合缝。
4. 狠：直接废掉了幻影依赖，在逻辑合理性与含糊的便捷性上，毫不留情的选择了逻辑合理性。

**来源**：

1. [pnpm 的 “快、准、狠”](https://mp.weixin.qq.com/s/bZ7AVSjBcZrZ3I387_esmg)
2. [pnpm 如何实现对 npm、yarn 的降维打击](https://mp.weixin.qq.com/s/sRKiqFNs24NYPxO4P5jq6Q)

### 8/3/22

∆ 临时安装依赖工具，比如：npx create-react-app my-app
执行以上这条命令 npx 会按以下顺序工作：

1. 先查看当前项目有没 `create-react-app`
2. 如果当前项目找不到，会去全局查找 `create-react-app`
3. 如果全局还找不到，会帮我们临时从 `npm` 包仓库安装 `create-react-app`，不会污染到当前项目，也不会装到全局

∆ mac brew 切换 `node` 版本

```shell script
1. brew unlink node
2. brew link --overwrite node@16
```

如果没权限，执行：

```shell script
sudo chown -R `whoami` /usr/local/Homebrew/
sudo chown -R $(whoami) $(brew --prefix)/*
sudo mkdir /usr/local/Frameworks
sudo chown -R `whoami` /usr/local/Frameworks/
```

### 4/8/22

能不能涨薪和当前形势的关系并没有那么大。

涨薪考量的关键因素，还得是你所在公司的业务模式行不行、业绩如何、发展好不好、现金流是否健康等等。当然，最重要的还得看你是否具备涨薪的“潜质”。

薪酬是能力、经验和岗位的体现，更大的职责、更高的岗位自然会有更高的工资。当前形势，日子都不好过，所以企业不管是涨薪还是招聘，也都会比之前更加谨慎。所以要想脱颖而出，就要具备更 “硬” 的技术和能力，要让公司能看得到你的价值。

说到提升价值，根据我这些年的经验，我认为以下几点比较重要：

1. 技术不能落伍。技术要跟得上形势，编码和设计能力要能跟得上发展，这是程序员的基本功。
2. 学习比自己强的人的技术思维。任何的学习都不能闭门造车，站在巨人的肩膀上才能看的更远。
3. 讲究方式方法，把学习做到有效性。
4. 长期坚持学习。互联网时代，信息传播快，各项技术更新换代也快。如果不坚持学习积累，你将会很容易被替代。
5. 合理安排时间，利用好碎片化时间，做知识的积累。

### 4/6/22

持续集成(CI)：目标是更早，更容易地识别开发过程中可能出现的问题。可以设置代码样式的检查，代码复杂度（低复杂性使测试过程更简单）和其他检查。 这有助于最大限度地减少负责代码审查的人员的工作量，节省时间并提高代码质量。

1. 开发人员在其本地计算机上检查代码
2. 完成后 - 他们将代码变更提交到代码仓
3. 代码仓向 CI 系统发送请求（webhook）
4. CI 服务器运行任务（测试，覆盖率，检查语法等）
5. CI 服务器发布已保存的工件（artifacts）以进行测试
6. 如果构建或测试失败，CI 服务器会向团队发出警报
7. 该团队解决了这个问题

**来源**：

1. [持续集成 CircleCI vs Travis CI vs Jenkins](https://zhuanlan.zhihu.com/p/59686072)
2. [使用 CircleCI 2.0 进行持续集成/持续部署](https://www.jianshu.com/p/36af6af74dfc)

### 3/21/22

关于 `fiber`：

1. react fiber：时间切片，改善大批量 dom 渲染时导致 cpu 占用，用户操作无相应的问题；
2. HCI 研究表明，除非它在做动画，否则对于正常的用户交互，大多数人不会感觉到差异，除非更新时间超过 100 毫秒。
3. 也就是说，只有当频繁的更新需要超过 100 毫秒的纯 CPU 时间时，时间切片才变得实际有用。
4. Vue3 的优化，使占用 CPU 的时间要少得多，在 CPU 空间花费 100+毫秒的可能性大大降低，而且只有在极端情况下才会遇到，在这种情况下，DOM 可能会成为更重要的瓶颈。

**来源**：[Why remove time slicing from vue3? #89](https://github.com/vuejs/rfcs/issues/89)

### 3/18/22

∆ idea: 日志里加链接，相当于目录索引，可以在文件夹里归档详细内容。例如：在桌面添加里快捷方式，方便添加日志。

∆ Github 访问失败或者缓慢的原因：

本机网络设置的 DNS 服务器解析 Github 相关域名的 IP 地址，这些 IP 地址要么本身无法访问，要么节点过远，从而导致了访问失败或者速度缓慢。
那么我们修改的方案可以是：

1. 修改本机 Hosts 文件，Hosts 文件的作用就是绑定域名与 IP 的映射关系，这样我们主动建立域名与 IP 的映射关系，访问到这些域名时直接使用 Hosts 指定的 IP，绕过 DNS 解析。

2. 修改网络的 DNS 服务器，换到能够解析出合适 IP 的 DNS 服务器。

因为 DNS 服务器储存的映射关系是动态更新的，无法直接控制。直接修改本机 Hosts 文件，锁定域名对应的 IP，更加有效方便。

**来源**：[关于 webpack 打包/path](test链接地址)

### 2/14/22

薪福通 & 苏薪通 POC 对比

1. 创建薪资组（创建薪资表），我们这边写了名字、选月份，直接创建了，简化了很多（选择人员、计薪周期、薪资规则的配置，薪福通这样的对需求的覆盖范围更广）
2. 在核对算薪人员，同步计薪人员，把人员数据都拉过来了没有按部门区分；（薪福通在创建薪资组时，支持部门、岗位、状态来筛选选择）
3. 薪资规则我们这边是默认了一个，不支持修改配置（规则是什么？），模型，用于后端计算薪资？（数据来源、计算规则）；规则落库，逻辑自洽
4. 薪资规则不同，导入的模版不同，计算规则不同；薪福通预置了几种规则。

### 1/25/22

1. 研究`vitepress`，整了一个 my-blog-vitepress 版本；感觉 vitepress 没有提供插件，文档内容很少。
2. fix：博客部署时，关于 document 的报错警告（因为 VuePress 是在 Node.js 服务端渲染，node 没有 window，所以报错）

### 1/21/22

1. 这阵儿忙过去了，开始写博客。
2. 幸存者偏差：看到的现象、得到的结论是片面的，要警惕、辩证、全面地去思考。来源：二战英国，对返航飞机统计，大多受损的地方在机翼，所以要加厚机翼装甲？可更重要的不是机腹的装甲么？实际上是机腹中弹的飞机飞不回来了。

### 11/17/21

1. 不想过得没意义，所以开始认真定目标计划，每天、每周、每月。
2. 还有每个晚上的，大致安排。
3. 有目标，过得清楚，有意义。
4. 整理了我的滴答清单，过了一遍。
5. <Egg name="-彩蛋 🌈 - 被你发现了 点它 : )" tips="点击空格，游戏开始！"><DinosaurRunner></DinosaurRunner></Egg>

### 9/30/21

1. 早上去体检，做彩超，等的人真多。
2. blog：修复注册评论组件的问题：enhanceApp 的触发时机问题，改为在路由变化时注册组件，且设定时器（因为没有回调、生命周期），等 dom 渲染完。
3. 规划、开发博客列表组件，接下来去整理下博客内容。
4. blog：新增文章列表。

### 9/29/21

1. 下载了 element-plus 源码，结合 [文章：从 Element UI 源码的构建流程来看前端 UI 库设计](https://mp.weixin.qq.com/s?__biz=Mzg3MTU4NTI3OA==&mid=2247488540&idx=1&sn=a201dc3d84c443012b6881b38d9383e9&scene=21#wechat_redirect) 学习
2. 发现了 pnpm（npm/yarn 升级版）、vitepress（vuepress 升级版：vite + vue3.0）
3. 学习 UI 库的构造结构、复习 vue3.0 的语法结构（steup、hook）、学习 vitepress 对比 vuepress
4. 昨晚的暴雨，可真刺激。乌云压的很低，天上是水，地上是水，天地之间被雨幕连接，雨水眯着眼睛看不清，穿着雨衣感觉车像在湖面上骑着，除了雨声听不到其它的声音了。
5. 博客：根据 md 文件 title 的参数`gitalkConfig`，判断是否渲染评论组件

### 9/28/21

博客

1. 新增了百度统计功能
2. 重写 copy 监听，带上版权信息
3. 找到了原博客主的构建他博客的文章，赞

### 9/27/21

1. 我的博客新增 gitalk 评论功能
2. 调整博客布局、样式

### 9/26/21

1. 使用 wd 硬盘备份我的 mac（之前安装了虚拟机）识别 wd 很慢，考虑是接触不良，或者反应慢要等一会儿
2. 继续整理浏览器书签
3. 完善每日计划

### 5/14/20

反思：
摸到 bug 的脚了但我没有抓住它 需要反思

描述：晚上周伟有反馈问题 / 样式丢失问题 / dev 环境正常？？

1. 没定位到问题,所以我换了组件
2. 定位是样式丢失，没能反应过来，是没 import 引入组件样式，这个组件跟其他的是不一样的，是没带上样式的
3. 列表发现有问题，没能想更近一步，忽视了商品新增/编辑的，用到这个组件的地方
4. 如果想到这一点 再全局搜索就好了；如果引入组件的时候 仔细点就好了

总结：

1. 仔细点，看起来没问题，不代表真的没问题
2. 这个地方有问题，其他地方会不会也有问题（多想一点）

### 4/17/20

∆ 开发流程

master：线上稳定版本（所有功能都是稳定的）

dev：新功能测试版本（每个功能都是基本完整的，可用的，但可能不稳定，属于测试阶段）

xiak-monitor-pay：功能开发分支（开发中）

...

线上紧急问题修复
直接从 master 拉一个 fix-bug 分支出来修复，测试完毕后，然后合并到 master 以解决紧急问题

然后不要忘了，dev 和 功能开发分支 要拉 master 的更新

git 开发流程/规则
master：主分支，线上生产环境代码

dev：开发测试分支，测试环境代码，用于内部测试

master 和 dev 上从不直接修改代码，只接受合并

开发新功能和迭代永远只在 master 拉分支出来的功能分支上进行

开发过程中，经常从 master 往自己的功能分支合并，越频繁越好（重复三遍）

功能开发完毕（最新的 master 往上合过并通过自测才算是开发完毕），先合到 dev 上进行测试

测试(内侧)没问题就可以往 master 上合并上线

如果一个功能最初是从某个功能分支中出来的，那么只要涉及该功能的更新，就需要一直维护该分支，没有特殊情况不要抛弃它而去建立新的迭代分支，确保不要出现一个功能分散在多个分支中

建立功能分支时功能要确定，不能模棱两可，一个功能只能在一个分支中，确保该功能的整个生命周期都由该分支来维护和迭代。

功能分支只有测试通过，需要直接上线时才需要往 master 上合并

经常从 master 往自己所开发的功能分支上合并是好习惯

dev 只能接受合并，永远不能往其他任何分支合并，切记！

git 的合并操作是：往当前所在的分支合，一定不要看错了当前所在分支（命令行中可能没实时显示，按下回车或查看当前所在分支）

功能分支的粒度要尽量小，不要把很多功能都放在一个功能分支中，尽量一个小功能一个功能分支

处于开发的功能分支之间不能有任何肢体接触

处于开发的功能分支是不完备的，经常有 coding...这样临时保存代码的提交，而 dev 和 master 上，决不允许出现这样的提交（HEAD）

有时候需要单独测试某个功能分支，dev.abc.com 环境切换为需测试的分支即可

每次开始写代码前，不要忘记 git pull 拉代码，并且开发过程中需要经常拉代码，越频繁越好，因为即使某一个功能分支也往往是由多人同时开发的。

功能开发完毕后合并到 master 分支上线时别忘记了检查开发时的一些为开发环境所作的特定配置修改，如一些硬编码的配置参数，要仔细检查，如预定功能的预定限额(硬编码)，开发时往往为了方便会调整这些值，但是正式上线时一定要修改为正式环境的配置再上线。否则如果把开发/测试环境的配置带到线上了就会造成严重的后果。

严格遵守以上规则，如果你发现你想做的操作不包含在以上规则中，则一定不要做！

其他
当然如果时间过去很久，都差不多忘记当初的分支了，也可以抛弃它再新建分支

速记：

master：可以把我合到任何地方，但别轻易合并到我身上。

dev：要测试的往我这儿合并，但不要让我合并到你身上，否则你就完了。

上线：上线时检查所有开发环境的配置(硬编码参数等)，确保线上除了逻辑代码正常外所有软硬配置也要正确。

各功能分支间：尽量不要有交流，实在想交流的话，彼此得要做好充分的准备，沟通协商好（这意味着两个功能有不可避免的耦合）；如果上线了，要交流通过 master。

### 3/31/20

∆ 关于学习

1. 能把知识熟练地表达出来
2. 记得满满的笔记，满书的荧光笔等等，这些方法不好，是实际上的思想懒惰，我们的大脑会以为我们记住了，实则不然。
3. 只有不断检索知识，给知识打结，才能保证知识是属于自己的。
4. 如果能够间隔练习，并穿插着不同的内容记性练习才是最能帮助长期记忆的。
5. 在别人交给你答案之前，先尝试自己解决问题，这样效果会更好，哪怕在尝试中犯下一下错误，也是有助于帮助自己提升认知的。
6. 思考自己工作中的问题会更有助于提高自己的专业水平。

∆ js 代码规范

```javascript
// 超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。
// [强制] 运算符处换行时，运算符必须在新行的行首。
// 示例：
if (
    (user.isAuthenticated() && user.isInRole('admin') && user.hasAuthority('add-admin')) ||
    user.hasAuthority('delete-admin')
) {
    // Code
}

var html =
    '' + // 此处用一个空字符串，以便整个 HTML 片段都在新行严格对齐
    '<article>' +
    '<h1>Title here</h1>' +
    '<p>This is a paragraph</p>' +
    '<footer>Complete</footer>' +
    '</article>'

// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况。
var result = thisIsAVeryVeryLongCondition ? resultA : resultB

var result = condition ? thisIsAVeryVeryLongResult : resultB

// [强制] 在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}。
// 示例：
if (condition) {
    callFunc()
}

// TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
// FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
// HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
// XXX: 该处存在陷阱。此时需要对陷阱进行描述。
```

### 3/30/20

∆ 看了`lavas`的文档：关于移动端、vue、pwa 的开发框架，可以在手机桌面上生成图标

**来源**：[lavas 参考文档](https://lavas.baidu.com/guide/v2/basic/introduction)

### 3/25/20

∆ Mac 内存 cpu 占用大 查是 Spotlight 引起

```shell script
# 关闭
sudo mdutil -a -i off
# 打开
sudo mdutil -a -i on
```

### 2/24/20

∆ 疫情没那么严重了 复工第一天 我的日志也开始写起来了

### 1/22/20

∆ Git ignore 修改无效

```shell script
git rm -r --cached .
git add .
git commit -m 'removed xxx from repository'
```

### 1/21/20

∆ 我还有哪些 30 岁前想要尝试的事？

∆ 整理我的博客

∆ web 学习路线

![](/images/blog/log/web学习路线.png)

### 1/20/20

∆ 开始写个人博客了

**来源**：[1 小时搞定 vuepress 快速制作 vue 文档/博客+免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5)

### 1/17/20

https://gitbook.cn/

GitChat 是一款基于微信平台的知识分享产品。通过这款产品我们希望改变 IT 知识的学习方式。

### 1/16/20

∆ 学习`react-navigation`的 demo 学习记录；参见 2020-1-16

### 1/15/20

∆ 结合`react-navigation` example 目录下的示例 完成 MyApp 的改造

∆ ios 的状态栏配置 用的是`react-navigation`的

∆ 0.6+ 版本 RN 项目启动方式

```shell script
# 1.安装依赖
yarn
# 2.链接库
Cd ios && pod install
# 3.参考 package.json
yarn ios
```

### 1/14/20

∆ RN 看 demo

看美团的 rn 的项目架构 学会 RN 的界面搭建，路由跳转

∆ 查看 yarn、npm 全局安装过的包

```shell script
yarn global list --depth=0
npm list -g --depth=0
```

∆ rn 的路由 demo 下载 待研究

### 1/13/20

∆ `ReactNative` 再熟悉下 架子搭起来

**来源** RN 中文官网 安装 pod - gem - ruby 换源 0.6 版以上的 RN-ios 版跑起来了

### 1/9/20

∆ 整理之前的 Notes，记忆宫殿，下载了《学习之道》

### 1/8/20

∆ 看了以前的`ffmpeg`文档 试了`ffmpeg`视音频分离；fetch 鬼灭之刃的动漫，优化了 python 脚本

### 1/7/20

∆ 和 王斌 & 超哥的谈话

王斌：未来的展望，个人的规划，工作的态度

超哥：随时间的增长 个人技术的形状‘梯形’ 广度 & 深度；5 年是技术的目标； 又提起了去看源码的念头

分析自己：

我现在还在基础的层级里，接触 `React`，`RN`，`小程序`，`Vue`，`uni-app`，`python`之类的技术，涉及不深。

最近 研究新技术的时间不多，我想我应该再去想想，做个规划。尤其，规划好个人的一天怎么过得更充实些，往里面塞些好东西进去。

∆ MAC 快捷键

查网页，整理 mac 快捷键，PDF 文档参见：2020-1-7

∆ 链接我的 windows 电脑

使用`TeamViewer`，感觉向日葵好用些，`Microsoft Remote Desktop`也还好。

### 1/4/20

∆ 写了 Vue 触发式组件，根据博客上的 demo 改装，思路如下：

```js
// 1.Components 写页面
// 2.Index.js 初始化 处理挂载到vue实例后的逻辑
// 3.main.js 挂载到vue实例
import VoicePrompt from '@/components/VoicePrompt'
Vue.use(VoicePrompt)
```

### 1/3/20

∆ 整理了文件夹

百度云笔记的文件夹 还有 MAC 的 Notes

把 `Google Cloud Platform` 上搭建`shadowSocks`的命令行复制到文件夹里了

∆ 当别人问问题

需要我做什么，我能帮到你什么？

你想知道什么 （明确目的） 耐心些 （分析下）我帮不到你，但我知道对应负责人你可以去找他，阿东

### 1/2/20

∆ 实践`ffmpeg`与`python`结合

在原基础上写了个脚本获取 动漫网的 m3u8 地址

难点：

1. 获取嵌套的`iframe`里的地址前缀，查资料使用 py 插件`selenium`模拟打开浏览器解决；
2. 运行时报错，须官网下载`driver`对应`chrome`的版本才行，复制到`/usr/local/bin` 解决
3. 最后使用`ffmpeg`下载视频，同时开了 3 个`ffmpeg`但是结果很慢

### 12/31/19

∆ 想使用`python`下载「刀剑神域」

```shell script
# 1.下载 ffmpeg
brew install ffmpeg
# 2.打开页面 F12 - source 查找 index.m3u8（它是分片下载的 .ts）
# 3.寻找编号6885_4996de9a,6886_007a5837,6887_f08da6c7
# 4.运行命令 下载合并
ffmpeg -i "https://youku.cdn-163.com/20180507/6885_4996de9a/1000k/hls/index.m3u8" -c copy "01.mp4"
# 参考：https://blog.csdn.net/weixin_33906657/article/details/88595352
```

∆ git 执行 commit 后，还没执行 push 时，想要撤销这次的 commit，该怎么办（sourceTree）？

```shell script
git reset --soft HEAD^
# 然后重启sourceTree
```

∆ 想用`ssh`登录`github`

1. 检查`SSH`密钥是否存在

```shell script
ls -l ~/.ssh
cd ~/.ssh, ls -l ~/
# 如果有文件id_rsa.pub 或 id_dsa.pub，则密钥存在。
```

2. 生成新的`ssh`密钥
   在命令行中输入

```shell script
ssh-keygen -t rsa -C "your_email@example.com"
```

生成 ssh 密钥后，可以到~/.ssh 目录下查看相关文件，一般来说 ssh 密钥会包含 id_rsa 和 id_rsa.pub 两个文件，分别表示生成的私钥和公钥。
在 git 等源代码管理中，使用 cat ~/.ssh/id_rsa.pub 命令，打印并将相应内容复制到源代码管理服务器即可实现 git 的无密码管理。
