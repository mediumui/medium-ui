module.exports = {
  base: "/medium-ui/",
  title: "medium-ui组件库",
  description: "medium-ui使用文档",
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [
      { text: "Home", link: "/" },
      { text: "github", link: "https://github.com/mediumui/medium-ui" },
      { text: "API", link: "https://github.com/mediumui/medium-ui" },
    ],
    sidebar: [
      {
        title: "安装",
        path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },
    ],
  },
}
