const path = require("path")
module.exports = {
  lintOnSave: false,
  publicPath: "./",
  //输出文件目录
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  pages: {
    index: {
      entry: "examples/main.js", // 因为我们改了src目录，所以对应的入口文件配置也要做修改
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options
      })
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      })
      return definitions
    })
  },
}
