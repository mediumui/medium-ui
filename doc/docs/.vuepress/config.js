module.exports = {
  base: "/medium-ui/",
  title: "medium-ui组件库",
  description: "medium-ui使用文档",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",
  lastUpdated: "Last Updated", // 显示最后更新时间
  repo: "https://github.com/mediumui/medium-ui", //github地址
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/zh/api/guide/introduction" },
      { text: "源码", link: "https://github.com/mediumui/medium-ui" },
      { text: "npm库", link: "https://www.npmjs.com/package/medium-ui" },
    ],
    sidebar: [
      {
        title: "指南",
        collapsable: false,
        children: [
          {
            title: "介绍",
            path: "/zh/api/guide/introduction",
          },
          {
            title: "安装",
            path: "/zh/api/guide/install",
          },
          {
            title: "功能延展",
            path: "/zh/api/guide/plugin",
          },
        ],
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          {
            title: "人机交互 verify-number",
            path: "/zh/api/ui/verifyNumber",
          },
          {
            title: "菜单按钮 menu-button",
            path: "/zh/api/ui/menuButton",
          },
          {
            title: "图片预览 image-viewers",
            path: "/zh/api/ui/imageViewers",
          },
          {
            title: "表单 form",
            path: "/zh/api/ui/form",
          },
          {
            title: "播放器 Player",
            path: "/zh/api/ui/player",
          },
          {
            title: "框架 Layout",
            path: "/zh/api/ui/layout",
          },
          {
            title: "图片标注 ImageMark",
            path: "/zh/api/ui/imageMark",
          },
          {
            title: "搜索 Search",
            path: "/zh/api/ui/search",
          },
          {
            title: "表格 Table",
            path: "/zh/api/ui/table",
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features")
  },
}
