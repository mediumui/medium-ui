module.exports = {
  base: "/medium-ui/",
  title: "medium-ui组件库",
  description: "medium-ui使用文档",
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",
  lastUpdated: "Last Updated", // 显示最后更新时间
  repo: "https://github.com/mediumui/medium-ui", //github地址
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api/guide/install" },
      { text: "github", link: "https://github.com/mediumui/medium-ui" },
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
