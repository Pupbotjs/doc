# Android平台 部署Pupbot
视频教程：[bilibili-Android](https://space.bilibili.com/524190453)
## 安装 Termux APP
到[Github-Termux](https://github.com/termux/termux-app/releases)下载 APK 安装包，优先选择 `arm64-v8a` 版本，不可用再尝试使用其他版本。<br>
或[群文件下载](https://qm.qq.com/cgi-bin/qm/qr?k=HK_MJ6jPmNb--oFtqGbYLnrSrYORiayX&jump_from=webapi&authKey=v/GUqKlGOF/EUGF5irCqYRA/+JFJ7pIRtqXNGPsNCos159ati25QOlqVTmGF8bjO)。
## 配置 Termux 国内源
命令行/终端输入：
``` shell
match='s@packages.termux.org@mirrors.ustc.edu.cn/termux@'
sed -i $match $PREFIX/etc/apt/sources.list
pkg up
```
## 安装 Node.js
``` shell
pkg install nodejs
```

## 安装 Pupbot CLI
命令行/终端输入：
``` shell
npm i -g pupbot
``` 
下载慢，可使用国内源(备用)：
``` shell
npm i -g pupbot --registry https://registry.npmmirror.com
```

## 使用 CLI 生成配置
命令行/终端输入：
``` shell
# 创建空目录作为框架目录，并切换到这个目录
mkdir ~/bot && cd ~/bot
# 根据引导生成配置文件
pup init
```

## 启动 Pupbot
``` shell
pup start
```
如果发现二维码显示异常，可能是由于终端字体不兼容导致的，请尝试手动打开 框架目录/data/oicq/[qq] 目录下的二维码图片进行扫码（有效期两分钟）。

## 后台部署(可选)
``` shell
pup deploy
```

## 插件安装
- [插件说明](/plugin/note)
- [插件安装](/plugin/install)

## 报错
- [常见问题](/start/problem) 
