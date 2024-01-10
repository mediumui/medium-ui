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
        ],
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          {
            title: "人机交互",
            path: "/zh/api/ui/verifyNumber",
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
}
