import Layout from "./src/layout.vue"
Layout.install = function (Vue, prefix) {
  Vue.component(prefix + Layout.name, Layout)
}
export default Layout
