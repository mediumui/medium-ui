import MenuButton from "./src/menu-button.vue"
import MenuButtonItem from "./src/menu-button-item"
MenuButton.install = function (Vue, prefix) {
  Vue.component(prefix + MenuButton.name, MenuButton)
  Vue.component(prefix + MenuButtonItem.name, MenuButtonItem)
}
export default MenuButton
