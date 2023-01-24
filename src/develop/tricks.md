# 插件开发技巧
- [插件开发技巧](#插件开发技巧)
  - [*判断首字符*](#判断首字符)
  - [*发送图文*](#发送图文)
  - [短暂存储数据(插件重载丢失)](#短暂存储数据插件重载丢失)
  - [永久存储数据(config.json存储)](#永久存储数据configjson存储)
  - [调用简单api(get/post)](#调用简单apigetpost)
  - [待更新补充](#待更新补充)
  
**下面均为部分代码!**

## *判断首字符*
```js
if(event.raw_message.startsWith('点歌')){
    //执行代码
}
```
## *发送图文*
```js
const{segment}= require('oicq')
var img =segment.image(https://)
var msg ='xxx'
event.reply([img,msg])
```

## 短暂存储数据(插件重载丢失)
使用js内置对象Map，详见[Map对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
```js
const map = new Map()
//在开头，或插件启用方法内创建map实例。
map.set(key,'pupbot')
const v = map.get(key)
console.log(v)
//打印为：pupbot
```
## 永久存储数据(config.json存储)
使用PupPlugin API中的加载配置api和存储配置api。
> 即`plugin.loadConfig()`和`plugin.saveConfig()`
```js
const config = plugin.loadConfig()
//加载 框架目录/data/plugins/该插件名 的config.json文件
config.name = 'pupbot'
console.log(config.name)
//打印为：pupbot
plugin.saveConfig(config)
//将config文件保存，可以下一次使用
```
**添加默认配置：**
```js
const config = {name:'pupbot'}
plugin.saveConfig(Object.assign(config, plugin.loadConfig()))
//合并配置文件,`读取配置(data/plugins/插件名)` 会替代 `默认配置`
console.log(config.name)
//打印为：pupbot
```
## 调用简单api(get/post)
发送get请求推荐使用**axios**，http也可以。<br>
发送get请求需要异步操作！[异步js](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing)
>axios,http均可从框架核心引入。
```js
const { PupPlugin,axios,http } = require('@pupbot/core')
//写在插件开头,引入axios或http(必须)
//...
plugin.onMessage(async()=>{
  const get = await axios.get('https://www.baidu.com')
  console.log(get.data)
  //为请求获取到的响应内容。
  console.log(get)
  //查看请求后返回的对象。
})
```
相关教程：
- [axios](https://cn.bing.com/search?q=nodejs+axios)
- [http](https://cn.bing.com/search?q=nodejs+http)

## 待更新补充
如果您有好的技巧，可以在群内分享或投稿doge，感谢您的贡献！