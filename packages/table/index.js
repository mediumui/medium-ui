import Table from "./src/table.vue"
Table.install = function (Vue, prefix) {
  Vue.component(prefix + Table.name.toLowerCase(), Table)
}
export default Table
