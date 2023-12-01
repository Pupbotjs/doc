# PupBot 简介 {#PupBot}

<!--[![npm-version](https://img.shields.io/npm/v/@pupbot/core?color=527dec&label=%40pupbot%2Fcore&style=flat-square)](https://npm.im/package/@pupbot/core)[![dm](https://shields.io/npm/dm/@pupbot/core?label=downloads&style=flat-square)](https://npm.im/package/@pupbot/core)
-->
[![dm](https://shields.io/npm/dm/@pupbot/core?label=downloads&style=flat-square)](https://npm.im/package/@pupbot/core)

<!--[![node-engine](https://img.shields.io/node/v/@pupbot/core?style=flat-square&logo=Node.js&logoColor=ffffff&color=527dec)](https://nodejs.org)-->
[![qq-group](https://img.shields.io/badge/QQ%20%E7%BE%A4-532286460-527dec?logo=TencentQQ&style=flat-square&logoColor=ffffff)](https://qm.qq.com/cgi-bin/qm/qr?k=HK_MJ6jPmNb--oFtqGbYLnrSrYORiayX&jump_from=webapi&authKey=v/GUqKlGOF/EUGF5irCqYRA/+JFJ7pIRtqXNGPsNCos159ati25QOlqVTmGF8bjO)

`PupBot` 是使用 [TypeScript](https://www.typescriptlang.org/) 语言编写的**轻量**、**优雅**、**跨平台**、**开发者友好**的 QQ 机器人框架。

框架提供了状态监控、插件管理、管理员机制、消息通知、请求处理功能，开箱即用。框架完全开源，可扩展性强，插件开发简单，核心底层协议使用 [oicq](https://github.com/takayama-lily/oicq) v2，API 众多，功能强大。另外，框架使用 [node](https://nodejs.org/) 驱动，得益于 node 及其高效的 v8 引擎，PupBot 的性能可观。

本项目开发初衷在于提高群活跃氛围、方便群管理，仅供个人娱乐、学习和交流使用，**不得将本项目用于任何非法用途**。

## 为什么选择 PupBot

-  **轻量**: 无需运行 UI，内存占用低。

-  **高效**: 框架依赖少，执行效率高。

-  **跨平台**: Windows, Linux,  Android 等都能运行。

-  **多协议**: 支持安卓手机、安卓平板、iPad、安卓手表和 MacOS 协议。

-  **注重体验**: 使用 QQ消息 执行操作、启用或升级插件。

-  **极速开发**: 学习门槛低，只需几行 JS/TS 代码就能编写插件。

-  **开发者友好**: 插件支持热重载，拥有友好的Plugin API。
  
三步安装：[快速上手](/start/online)
## 插件示例

仅需编写少量 JavaScript 代码即可实现丰富功能，参考下面的 demo。

::: tip 请注意
框架仍处于**测试阶段**，插件的 API 会不断完善，请留意文档更新。
:::

```js
const { PupPlugin, segment } = require('@pupbot/core')
const plugin = new PupPlugin('demo', '0.1.0')
plugin.onMounted(() => {
  plugin.onMessage(event => {
    const { raw_message } = event
    if (raw_message === 'hello') {
      const msgs = [segment.face(66), 'world']
      event.reply(msgs)
    }
  })
})
module.exports = { plugin }
```

详细插件 `API` 说明请参阅 [`PupPlugin API`](/api/plugin)<br>
详细Bot `API` 说明请参阅 [`Bot API`](/api/bot)

## 留给用户的话
>轻量--Dogxi
 
>真正意义上的理想机器人，理应是功能足够强大，默默无闻的，在你需要的时候，又能以最高的效率及时给予你帮助，足够方便，还能偶尔带来趣味与欢乐，而不是一味的堆积菜单，搞一堆花里胡哨的插件或者功能，抛开太多无意义的功能不说，还不断的刷屏，就为了显得机器人有多么多的功能--Viki
