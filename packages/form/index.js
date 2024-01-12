import Form from "./src/form.vue"
import FormItem from "./src/form-item"
import FormHead from "./src/form-head.vue"
Form.install = function (Vue, prefix) {
  Vue.component(prefix + Form.name.toLowerCase(), Form)
  Vue.component(prefix + FormItem.name, FormItem)
  Vue.component(prefix + FormHead.name, FormHead)
}
export default Form
