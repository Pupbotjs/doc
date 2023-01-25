import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PupBot',
  description: '轻量、跨平台的 QQ 机器人框架',
  head: [['link', { rel: 'icon', type: 'image/png', href: `/pup.png` }]],
  lastUpdated: true,
  srcDir: 'src',
  markdown: {
    theme: 'one-dark-pro'
    // lineNumbers: true
  },
  themeConfig: {
    logo: '/pup.png',
    nav: [
      { text: '简介', link: '/about' },
      {
        text: '开发',
        link: '/develop/before.md'
      },
      {
        text: '插件',
        items: [
          {
            items: [
              { text: '插件仓库', link: '/plugin/warehouse' }
            ]
          },
          {
            items: [
              { text: 'Gitee 插件索引', link: 'https://gitee.com/pupbotjs/plugins-index' },
              { text: 'Github 插件索引', link: 'https://github.com/Pupbotjs/plugins-index' },
              { text: 'Npm 平台', link: 'https://npm.im/search?q=pupbot-plugin' },
              { text: '提供插件思路', link: 'https://gitee.com/pupbotjs/plugins-index/issues' }
            ]
          }         
        ]
      },
      {
        text: '更多', 
        link: '/more'
      }
    ],
    sidebar: [
      {
        text: '开始',
        collapsible: true,
        items: [
          { text: '简介', link: '/about' },
          {
            text: '快速上手',
            link: '/start/online'
          },
          {
            text: '部署',
            items: [
              { text: 'Linux', link: '/start/linux' },
              { text: 'Windows', link: '/start/win' },
              { text: 'Android (Termux)', link: '/start/android' },
              { text: '随身Wifi', link: 'https://blog.csdn.net/dog234/article/details/128762751'}
            ]
          },
          {
            text: '命令',
            items: [
              { text: '消息指令', link: '/start/cmd/msg' },
              { text: 'CLI 命令', link: '/start/cmd/cli' }
            ]
          },
          {
            text: '配置文件',
            link: '/start/config'
          },
          {
            text: '常见问题',
            link: '/start/problem'
          }
        ]
      },
      {
        text: '插件',
        collapsible: true,
        items: [
          { text: '插件说明', link: '/plugin/note' },
          { text: '安装插件', link: '/plugin/install' },
          { text: '插件仓库', link: '/plugin/warehouse' },
          { text: '官方插件文档', link: '/plugin/list' },
        ]
      },
      {
        text: '开发',
        collapsible: true,
        items: [
          { text: '前置知识', link: '/develop/before' },
          { text: '开发入门', link: '/develop/guide' },
          { text: '开发技巧', link: '/develop/tricks' },
          { text: '发布插件', link: '/develop/publish' },
        ]
      },
      {
        text: 'API 文档',
        collapsible: true,
        items: [
          { text: 'PupPlugin API', link: '/api/plugin' },
          { text: 'Bot API', link: '/api/bot' },
          { text: 'oicq v2 标准事件', link: '/api/oicq_events' }
        ]
      }
    ],
    outline: 2,
    outlineTitle: '目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pupbotjs' },
      { icon: 'discord', link: 'https://discord.gg/zXYt9yksj6' }
  ],
    footer: {
      message:
        'PupBot 使用 MIT 协议开放源代码 | 基于 <a href="https://github.com/takayama-lily/oicq">oicq v2</a> 实现',
      copyright: 'Copyright © 2022-PRESENT <a href="https://github.com/Pupbotjs">Pupbot社区</a>'
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/Pupbotjs/doc/edit/main/src/:path',
      text: '在 GitHub 上编辑'
    }
  }
})