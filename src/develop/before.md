# 前置知识
要想学习好编写插件，**第一步**应有
- 基础的Javascript知识
- 理解npm模块并学会使用

**⚠️注意**：前置知识很重要！不牢固将影响插件的开发！
> 接下来，将对前置知识进行<透析>
## Javascript
想必你已经知道，[Pupbot框架](#)基于[node.js](#)，那node.js与js(Javascript)有什么区别呢？
- 第一，node.js是平台，js是编程语言
- 第二，js只在浏览器运行，而node.js为js提供服务器平台，从而脱离浏览器。

**了解区别后，我们接下来学习javascript这门编程语言：**<br>
- 如果你只是**基础开发**，你可以选择**下列教程**:<br>
 [现代JavaScript教程](https://zh.javascript.info/)（推荐）
 <br>或[bilibili黑马程序员](https://www.bilibili.com/video/BV1ux411d75J?p=1)（视频）

> 并且你只需要了解：数据类型，变量，常量和函数(+箭头函数)的定义，if,while,switch等函数的使用，数组，对象的属性方法等，剩下的`必应/谷歌`搜索即可。如果你不懂某些语法，可以查找英文意思。
- **深入开发**:你可以学习[ES6入门教程](https://es6.ruanyifeng.com/)，ES7，ES8，以及TypeScript编写插件。
> ES 指的是 ECMAScript，JavaScript 的语言标准。TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。
请确保你掌握JavaScript基础知识后，再继续观看接下来的内容。
```js
//巩固对象知识
//JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
//对象拥有`属性`和`方法`,访问对象需要用到`.`，下面演示String对象:
var a='Hello PupBot!'
//那么a.length == 15，length即为a的属性
//那么a.slice(1) == 'ello PupBot!'，slice()即为a的方法/函数
```
## npm 模块
[npm（“Node 包管理器”）](#npm模块)是 JavaScript 运行时 Node.js 的默认**程序包(模块)管理器**。
<br>你可以把npm理解为一个存储很多模块(软件包)的仓库。
> **npm组成**：
>- [npm官网](https://www.npmjs.com/)（发布和搜索模块的网站）
>- 注册表（巨大的数据库）
>- 命令行工具/终端
npm模块的实质是将代码`模块化`，使用模块可以**简化你的操作，直接实现某些功能。**

例如我开发了一个“吃饭”模块并上传到了[npm官网](https://www.npmjs.com/),你若想要使用模块，需要用**命令行工具/终端** 输入:
```cmd
npm i -D 吃饭
```
- 这里的`npm`是必须要带的，因为你使用的是npm管理器。
- `i`是install的缩写，意为安装。
- `-D`是指本地安装(默认，你也可以不输入)，`-g`是全局安装，正如你安装pupbot框架(模块)，其中的命令就包含了-g。

输入后，npm模块会被安装在当前目录下的`node_modules`目录下，如PupBot框架下就有该目录，里面有内置的模块，例如`oicq`,`axios`等。

最后就需要在js文件里引入(require)了,它通常放在文件的开头:
```js
const eat = require("吃饭")
//这只是CommonJS规范的引入方式,其他的可自行搜索
//接下来便可以通过eat，来访问方法。
eat.do()
```
## API(接口)
[API](#api接口)（Application Programming Interface, 应用程序编程接口）是一些**预先定义**的`函数`。
>例如你**想要给**viki送篮球，你必须**先给**小明送篮球，让小明把篮球给小蔡，**最后**小蔡把篮球给viki。而别人已经写好了**连续送篮球**的`函数`，你只需要调用这个`函数`，就可以直接把篮球送到viki手里，这就是API(接口)。
**PupBot就有很多的API，以便更快实现某功能：**
- [PupPlugin API](/api/plugin)
- [Bot(Oicq) API](https://oicqjs.github.io/oicq/)

这时候解释一下，**PupBot是依靠Oicq API来编写的框架**，意思是实现框架离不开Oicq，编写插件中同样可以使用Oicq API。**请以官方API为主，Bot(Oicq) API为辅。**
