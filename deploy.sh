#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

read -p '请输入提交信息：' message

# 给默认值
if [ -z "$message" ]; then
  message='deploy：更新博客'
  echo 'deploy：更新博客'
fi

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git remote add origin git@github.com:bayi-95/bayi-95.github.io.git
git checkout -b master
git add -A

git commit -m $message

# 发布的 github 仓库地址
git push -f git@github.com:bayi-95/bayi-95.github.io.git master

cd -
