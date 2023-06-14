#!/bin/bash

# 获取文件
curl -s -L -o weekly-master.zip https://github.com/ruanyf/weekly/archive/refs/heads/master.zip
# 解压文件
unzip -o weekly-master.zip
# 生成目录 json
node weekly.js > weekly.json
# 移动文章
mv -n weekly-master/docs/issue*.md ../docs/pages/weekly

# 删除文件
rm weekly-master.zip*
rm -rf ./weekly-master



