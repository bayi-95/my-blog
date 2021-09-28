---
title: My-DailyLogs
metaTitle: 我的日志
---

# 我的日志

#### 9/27/21

1. 我的博客新增gitalk评论功能
2. 调整博客布局、样式

#### 9/26/21

1. 使用 wd 评判备份我的 mac（之前安装了虚拟机）识别 wd 很慢，考虑是接触不良，或者反应慢要等一会儿 
2. 继续整理浏览器书签 
3. 完善每日计划

#### 5/14/20

反思：
机会给我了但我没有抓住 需要反思

描述：晚上周伟有反馈问题 / 样式丢失问题 / dev 环境正常？？

1. 没定位到问题,所以我换了组件
2. 定位是样式丢失，没能反应过来，是没 import 引入组件样式，这个组件跟其他的是不一样的，是没带上样式的
3. 列表发现有问题，没能想更近一步，忽视了商品新增/编辑的，用到这个组件的地方
4. 如果想到这一点 再全局搜索就好了；如果引入组件的时候 仔细点就好了

总结：

1. 仔细点，看起来没问题，不代表真的没问题
2. 这个地方有问题，其他地方会不会也有问题（多想一点）

#### 4/17/20

### 开发流程
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

#### 3/31/20

∆ 关于学习

1. 能把对知识的熟练掌握表达出来
2. 记得慢慢的笔记，满书的荧光笔等等，这些方法不好，是实际上的思想懒惰，我们的大脑会以为我们记住了，实则不然。
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

#### 3/30/20

∆ 看了`lavas`的文档：关于移动端、vue、pwa 的开发框架，可以在手机桌面上生成图标

[lavas 参考文档](https://lavas.baidu.com/guide/v2/basic/introduction)

#### 3/25/20

∆ Mac 内存 cpu 占用大 查是 Spotlight 引起

```shell script
# 关闭
sudo mdutil -a -i off
# 打开
sudo mdutil -a -i on
```

#### 2/24/20

∆ 疫情没那么严重了 复工第一天 我的日志也开始写起来了

#### 1/22/20

∆ Git ignore 修改无效

```shell script
git rm -r --cached .
git add .
git commit -m 'removed xxx from repository'
```

#### 1/21/20

∆ 我还有哪些 30 岁前想要尝试的事？

∆ 整理我的博客

∆ web 学习路线

![](/images/web学习路线2.png)

#### 1/20/20

∆ 开始写个人博客了

**参考:**

-   [1 小时搞定 vuepress 快速制作 vue 文档/博客+免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5)

#### 1/17/20

https://gitbook.cn/

GitChat 是一款基于微信平台的知识分享产品。通过这款产品我们希望改变 IT 知识的学习方式。

#### 1/16/20

∆ 学习`react-navigation`的 demo 学习记录；参见 2020-1-16

#### 1/15/20

∆ 结合`react-navigation` example 目录下的示例 完成 MyApp 的改造

∆ ios 的状态栏配置 用的是`react-navigation`的

∆ 0.6+ 版本 RN 项目启动方式

```shell script
# 1.安装依赖
yarn
# 2.链接库
Cd ios && pod install
# 3.参考package.json
yarn ios
```

#### 1/14/20

∆ RN 看 demo

看美团的 rn 的项目架构 学会 RN 的界面搭建，路由跳转

∆ 查看 yarn、npm 全局安装过的包

```shell script
yarn global list --depth=0
npm list -g --depth=0
```

∆ rn 的路由 demo 下载 待研究

#### 1/13/20

∆ `ReactNative` 再熟悉下 架子搭起来

参考 RN 中文官网 安装 pod - gem - ruby 换源 0.6 版以上的 RN-ios 版跑起来了

#### 1/9/20

∆ 整理之前的 Notes，记忆宫殿，下载了《学习之道》

#### 1/8/20

∆ 看了以前的`ffmpeg`文档 试了`ffmpeg`视音频分离；fetch 鬼灭之刃的动漫，优化了 python 脚本

#### 1/7/20

∆ 和 王斌 & 超哥的谈话

王斌：未来的展望，个人的规划，工作的态度

超哥：随时间的增长 个人技术的形状‘梯形’ 广度 & 深度；5 年是技术的目标；

又提起了去看源码的念头

分析自己：

我现在还在基础的层级里，接触 React，RN，小程序，Vue，uni-app，python 之类的技术，涉及不深。

最近 研究新技术的时间不多，我想我应该再去想想，做个规划。尤其，规划好个人的一天怎么过得更充实些，往里面塞些好东西进去。

∆ MAC 快捷键

查网页，整理 mac 快捷键，PDF 文档参见：2020-1-7

∆ 链接我的 windows 电脑

使用`TeamViewer` 进行中...

#### 1/4/20

∆ 写了 Vue 触发式组件 根据博客上的 demo 改装，思路如下：

```js
// 1.Components 写页面
// 2.Index.js 初始化 处理挂载到vue实例后的逻辑
// 3.main.js 挂载到vue实例
import VoicePrompt from '@/components/VoicePrompt'
Vue.use(VoicePrompt)
```

#### 1/3/20

∆ 整理了文件夹

百度云笔记的文件夹 还有 MAC 的 Notes

把 `Google Cloud Platform` 上搭建`shadowSocks`的命令行复制到文件夹里了

∆ 当别人问问题

需要我做什么 我能帮到你什么

你想知道什么 （明确目的么） 耐心些 （觉得吃力）我帮不到你 你可以去找阿东

#### 1/2/20

∆ 实践`ffmpeg`与`python`结合

在原基础上写了个脚本获取 动漫网的 m3u8 地址

难点：
获取嵌套的`iframe`里的地址前缀
查资料使用 py 插件`selenium` 模拟打开浏览器 解决
遇到问题
运行时，报错须官网下载`driver`对应 chrome 的版本才行，复制到`/usr/local/bin` 解决

最后使用`ffmpeg`下载视频

同时开了 3 个 ffmpeg 结果很慢

#### 12/31/19

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


<gitalk-comment :options="{ id: 'log_1', number: 1}" />
