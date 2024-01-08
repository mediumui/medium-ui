import Vue from "vue"
import App from "./App.vue"
import MediumUI from "medium-ui"
import "medium-ui/dist/medium-ui.css"
Vue.use(MediumUI)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: (h) => h(App),
})
