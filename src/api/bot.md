# Bot(Oicq) API

参考 [`oicq v2` 文档](https://oicqjs.github.io/oicq/classes/Client.html)的 [`Client` 类](https://oicqjs.github.io/oicq/classes/Client.html)<br>
>`plugin.on('message',(bot)=>{})`引入的bot即Clinet类实例。
***
>看不懂的可以看带注解的:<br>
参考 [`oicq` 带注解文档](https://ltxhhz.github.io/oicq-wiki/api/%E5%BA%94%E7%94%A8%E7%B1%BBapi.html)的 [`应用类api`](https://ltxhhz.github.io/oicq-wiki/api/%E5%BA%94%E7%94%A8%E7%B1%BBapi.html)
```js
const plugin = new PupPlugin('demo', '1.0.0')
plugin.onMounted((bot, admins) => {//引入参数bot(即Client)
  plugin.log('插件被启用了！')
  bot.sendPrivateMsg(1706328818,'你好')
  //调用Bot API发信息
  //与文档中Client.sendPrivateMsg(user_id, message, auto_escape)相照应。
})
```