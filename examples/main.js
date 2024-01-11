import Vue from "vue"
import App from "./App.vue"
import MediumUI from "medium-ui"
import "medium-ui/dist/medium-ui.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(MediumUI)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: (h) => h(App),
})
