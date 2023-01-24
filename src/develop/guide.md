# 开发入门
## 前言
**Pupbot插件**基于Javascript开发。<br>因此，本教程假设您已经具有一定的**Javascript基础**，并对Node.js有一定的了解。
- [前置知识](before.md)
## 所需工具

#### 1.Pupbot框架
通过 开始 中的 快速上手 安装框架。
#### 2.代码编辑器
您需要一个文本编辑器来编写代码。 我们推荐使用 Visual Studio Code (VS Code)，因为它是免费和强大的，且支持终端的运行。[vscode官网](https://code.visualstudio.com/)

## 创建第一个插件/demo-1
- 在`框架目录/plugins` 下新建文件夹(文件夹名称即插件名);
- 文件夹下新建index.js(插件主文件);
- 将下列代码粘贴到index.js文件中并保存。
``` js
const { PupPlugin } = require('@pupbot/core')
const plugin = new PupPlugin('demo-1','1.0.0')
plugin.onMounted((bot)=>{
    bot.sendPrivateMsg(1706328818,'插件被启用了！')
})
plugin.onUnmounted((bot)=>{
    bot.sendPrivateMsg(1706328818,'插件被禁用了！')
})
module.exports = { plugin }
```
- 接着向机器人私聊发送`/p on demo-1(插件名)`
- 再发送`/p off demo-1(插件名)`
  
可以看到的是，在启用插件时机器人回复了”插件被启用了！“<br>
在被禁用插件时机器人回复了“插件被禁用了！”

**至此，你成功创建了第一个插件并启用。**

接下来，对插件内容进行简要的讲解：<br>
> ()=>{}为箭头函数，等同于function(){}

**必要部分** 为每个插件都应有的代码：
``` js
const { PupPlugin } = require('@pupbot/core') //[!code focus]
//第一行代码，引入了框架核心(@pupbot/core)里面的PupPlugin类 //[!code focus]
const plugin = new PupPlugin('demo-1','1.0.0')// [!code focus]
//第二行代码，通过PupPlugin类创建了插件对象，传入的参数依次为插件名(demo-1)，版本号(1.0.0) //[!code focus]
plugin.onMounted((bot)=>{
    bot.sendPrivateMsg(1706328818,'插件被启用了！')
})
plugin.onUnmounted((bot)=>{
    bot.sendPrivateMsg(1706328818,'插件被禁用了！')
})
module.exports = { plugin }//[!code focus]
//最后一行代码，导出编写好的插件对象 //[!code focus]
```
**主体部分** 实现插件的功能：
``` js
const { PupPlugin } = require('@pupbot/core')
const plugin = new PupPlugin('demo-1','1.0.0')
plugin.onMounted((bot)=>{//[!code focus]
  //调用插件对象的onMounted方法(插件被启用后执行)//[!code focus]
  //同时引入bot参数，即机器人对象,可调用Bot API//[!code focus]
    bot.sendPrivateMsg(1706328818,'插件被启用了！')//[!code focus]
    //调用Bot对象的发送私聊信息方法，更多方法参考Bot API//[!code focus]
})//[!code focus]
plugin.onUnmounted((bot)=>{//调用插件对象的禁用方法,相对不常用。//[!code focus]
    bot.sendPrivateMsg(1706328818,'插件被禁用了！')//[!code focus]
    //同上//[!code focus]
})//[!code focus]
module.exports = { plugin }
```
> 注意，虽然demo-1演示了 **插件启用/禁用后** 回复消息反馈，但实际插件开发中我们**不推荐**你这样做，因为框架本身提供了消息反馈。

**小结**：插件分为必要部分和本体部分，其中在必要部分实例插件对象，在本体部分实现插件功能。通过demo-1，你应该了解到了插件对象的启用与禁用方法，以及如何简单调用Bot API。

## 实现监听消息并回复/demo-2
除插件启用方法，还有一个开发中常用的监听方法`plugin.on(参数1,参数2)`。<br>

通常情况下，我们是在插件启用后，调用`on()`方法监听(即写在启用方法内)，该方法可以监听机器人接收的事件(event)，同时通过第一个参数设置事件类型(群/私聊消息，好友请求等)，第二个参数(匿名函数)作出回应。

参考下面的示例：
``` js
const { PupPlugin } = require('@pupbot/core')
const plugin = new PupPlugin('demo-2','1.0.0')
plugin.onMounted(()=>{//插件启用方法//[!code focus]
    plugin.on('message',(event)=>{//[!code focus]
      //调用插件on()方法，对message类型事件(所有消息)监听//[!code focus]
      //这里引入event对象,event对象包含多种属性与reply等方法。//[!code focus]
        if(event.message_type==='private'){//[!code focus]
        //访问event对象属性(消息类型) 判断是否为私聊(private)//[!code focus]
            event.reply(event.sender.nickname+'给我发了消息：'+event.raw_message)//[!code focus]
            //reply()为event对象常用方法，用于直接对消息(或事件)进行回复。//[!code focus]
            //sender.nickname和raw_message均为event属性//[!code focus]
        }//[!code focus]
    })//[!code focus]
})//[!code focus]
module.exports = { plugin }
```
> 插件on()方法支持监听的事件类型详见[oicq 标准事件](../api/oicq_events.md)

**下面简要介绍下event对象**：<br>

event为接收到的(消息/事件)**对象**，接收到不同的事件，会有不同的属性。<br>
如群聊接收的消息有group_id属性，而私聊接收到的消息没有。
>如 plugin.on('message',(event)=>{}) 传入了event参数<br>
>下面是一个群聊消息event，包含的属性和方法可以通过英文意思判断。<br>
>另外你可以在插件中console.log(event)打印出来event对象查看。
``` json
GroupMessage {
  post_type: 'message',
  message_id: 'PffsqGW0gvIAAASnc8WhW2OtV/wB',
  user_id: 1706328818,
  time: 1672304636,
  seq: 1191,
  rand: 1942331739,
  font: '宋体',
  message: [
    { type: 'text', text: '这是文字' },
    { type: 'at', qq: 1706328818, text: '@Dogxi' },
    { type: 'text', text: ' ' },
    {
      type: 'image',
      file: '21b6f8fbd84b4e085e872ac05430b1ea33406-750-750.jpg',
      url: 'https://gchat.qpic.cn/download?appid=1407&fileid=Chh1X24xdloxWlBEajY5b2pNbG5HbjIwdncSFHcmAvQ74x_pnNKuuvR8ZsCJ5z_LGP6EAiD_CiiKn9OdvJ78AjD-tegDOPCswf8OUIC9owFYwIQ9&rkey=CAESSGFewwjiPE6gvm0HDXdgw_WqgfON-BWEa7eeD7-N6I9U1-N0PojJkIsF-fam2fKZXdlbEnGRkV-OrjFoykYSkEd2i--0daKJDQ&spec=0',
      asface: false
    }
  ],
  raw_message: '这是文字@Dogxi [图片]',
  message_type: 'group',
  sender: {
    user_id: 1706328818,
    nickname: 'Dogxi',
    card: '',
    sex: 'unknown',
    age: 16,
    area: '',
    level: 1,
    role: 'member',
    title: '你好'
  },
  group_id: 114514,
  group_name: '狗崽子',
  block: false,
  sub_type: 'normal',
  anonymous: null,
  atme: false,
  atall: false,
  group: Group { sendMsg: [AsyncFunction (anonymous)] },
  member: Member {},
  reply: [Function (anonymous)],
  recall: [Function (anonymous)],
  self_id: 2021612943
}
```

## 指定词回复/demo-2.5
再来一个示例，巩固一下demo-2的知识：
``` js
const { PupPlugin } = require('@pupbot/core')
const plugin = new PupPlugin('demo-2.5','1.0.0')
plugin.onMounted(()=>{
    plugin.on('message',(event)=>{
        if(event.raw_message==='你好'){
          //raw_message为event对象属性，是消息的字符串值
            event.reply('世界！',true)
            //reply方法第二个参数为是否引用回复，默认为false
            //event.reply('世界！')
        }
    })
})
module.exports = { plugin }
```

## 发送图片,语音等消息/demo-3
前面学习了发送文本消息，回复文本消息，<br>
那么如何**发送图片，语音等消息**呢？
> 发送 语音，视频 需要配置**ffmpeg**，可自行搜索教程。

这就需要用到框架核心内置的segment工具了，你可以使用segment构建多类型消息。
``` js
const { PupPlugin,segment } = require('@pupbot/core')
//额外引入segment工具(对象)
const plugin = new PupPlugin('demo-3','1.0.0')
plugin.onMounted(()=>{
    plugin.on('message',(event)=>{
        if(event.raw_message==='发图片'){
            const str = '这是个图片：'
            const img = 'https://www.pupbot.cn/logo.png'
            event.reply([str,segment.image(img)])
            //调用segment对象的image()方法，构建图片数据,可传入链接，图片file等。
            //这里event.reply的参数是一个消息数组(字符串和图片)，不能通过“+”连接一起发送，这里规定使用数组将两者拼接发送。
        }
    })
})
module.exports = { plugin }
```
另有艾特(segment.at)，骰子(segment.dice)等消息构造方法，详情见[segment](https://oicqjs.github.io/oicq/modules.html#segment)

## 提升自己
入门教程暂时到这里了，<br>接下来可以通过开发技巧，或在npm平台找开源插件进行学习。
- [开发技巧](tricks.md)
- [npm插件](https://www.npmjs.com/search?q=pupbot-plugin)