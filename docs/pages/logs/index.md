---
title: My-DailyLogs
metaTitle: 我的日志
---

## 我的日志

#### 1/21/20
∆ 我还有哪些30岁前想要尝试的事？

∆ 整理我的博客

∆ web学习路线

![](/images/web学习路线2.png)


#### 1/20/20
∆ 开始写个人博客了

**参考:**
- [1小时搞定vuepress快速制作vue文档/博客+免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5)


#### 1/17/20
https://gitbook.cn/

GitChat 是一款基于微信平台的知识分享产品。通过这款产品我们希望改变IT知识的学习方式。

#### 1/16/20
∆ 学习`react-navigation`的demo 学习记录；参见 2020-1-16

#### 1/15/20
∆ 结合`react-navigation` example目录下的示例 完成MyApp的改造

∆ ios的状态栏配置 用的是`react-navigation`的

∆ 0.6+ 版本RN项目启动方式
```shell script
# 1.安装依赖
yarn
# 2.链接库
Cd ios && pod install
# 3.参考package.json
yarn ios
```

#### 1/14/20
∆ RN看demo 

看美团的rn的项目架构 学会RN的界面搭建，路由跳转

∆ 查看yarn、npm全局安装过的包
```shell script
yarn global list --depth=0
npm list -g --depth=0
```
    
∆ rn 的路由 demo下载 待研究


#### 1/13/20
∆ `ReactNative` 再熟悉下 架子搭起来

参考RN中文官网 安装pod - gem - ruby换源 0.6版以上的RN-ios版跑起来了

#### 1/10/20
∆ 学习 30 seconds of code - CSS

参考：https://www.30secondsofcode.org/css/p/1

#### 1/9/20
∆ 整理之前的Notes，记忆宫殿，下载了《学习之道》

#### 1/8/20
∆ 看了以前的`ffmpeg`文档 试了`ffmpeg`视音频分离；fetch鬼灭之刃的动漫，优化了python脚本

#### 1/7/20
∆ 和 王斌 & 超哥的谈话

王斌：未来的展望，个人的规划，工作的态度

超哥：随时间的增长 个人技术的形状‘梯形’ 广度 & 深度；5年是技术的目标；

又提起了去看源码的念头

分析自己：

我现在还在基础的层级里，接触React，RN，小程序，Vue，uni-app，python之类的技术，涉及不深。

最近 研究新技术的时间不多，我想我应该再去想想，做个规划。尤其，规划好个人的一天怎么过得更充实些，往里面塞些好东西进去。

∆ MAC 快捷键

查网页，整理mac快捷键，PDF文档参见：2020-1-7

∆ 链接我的windows电脑

使用`TeamViewer` 进行中...

#### 1/4/20
∆ 写了Vue触发式组件 根据博客上的demo改装，思路如下：
```js
// 1.Components 写页面 
// 2.Index.js 初始化 处理挂载到vue实例后的逻辑
// 3.main.js 挂载到vue实例
import VoicePrompt from '@/components/VoicePrompt'
Vue.use(VoicePrompt)
```

#### 1/3/20
∆ 整理了文件夹

百度云笔记的文件夹 还有 MAC的 Notes

把 `Google Cloud Platform` 上搭建`shadowSocks`的命令行复制到文件夹里了

∆ 当别人问问题

需要我做什么 我能帮到你什么

你想知道什么 （明确目的么） 耐心些 （觉得吃力）我帮不到你 你可以去找阿东


#### 1/2/20
∆ 实践`ffmpeg`与`python`结合

在原基础上写了个脚本获取 动漫网的 m3u8 地址 

难点：
获取嵌套的`iframe`里的地址前缀
查资料使用py插件`selenium` 模拟打开浏览器 解决
遇到问题
运行时，报错须官网下载`driver`对应chrome的版本才行，复制到`/usr/local/bin` 解决

最后使用`ffmpeg`下载视频

同时开了3个ffmpeg 结果很慢


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

∆ git执行commit后，还没执行push时，想要撤销这次的commit，该怎么办（sourceTree）？
```shell script
git reset --soft HEAD^	
# 然后重启sourceTree
```

∆ 想用`ssh`登录`github`
1. 检查`SSH`密钥是否存在
```shell script
ls -l ~/.ssh
cd ~/.ssh，ls -l ~/
# 如果有文件id_rsa.pub 或 id_dsa.pub，则密钥存在。
```

2. 生成新的`ssh`密钥
在命令行中输入
```shell script
ssh-keygen -t rsa -C "your_email@example.com"
```
生成ssh 密钥后，可以到~/.ssh目录下查看相关文件，一般来说ssh 密钥会包含id_rsa和id_rsa.pub两个文件，分别表示生成的私钥和公钥。
在git等源代码管理中，使用cat ~/.ssh/id_rsa.pub命令，打印并将相应内容复制到源代码管理服务器即可实现git的无密码管理。














