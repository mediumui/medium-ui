import MenuButton from "./src/menu-button.vue"
import MenuButtonItem from "./src/menu-button-item"
MenuButton.install = function (Vue) {
  Vue.component(MenuButton.name, MenuButton)
  Vue.component(MenuButtonItem.name, MenuButtonItem)
}
export default MenuButton
