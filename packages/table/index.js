import Table from "./src/table.vue"
import TableColum from "./src/table-column.vue"
Table.install = function (Vue, prefix) {
  Vue.component(prefix + "table", Table)
  Vue.component(prefix + TableColum.name, TableColum)
}
export default Table
