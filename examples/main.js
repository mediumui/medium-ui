import { createApp } from "vue"
import App from "./App.vue"
import MediumUI from "medium-ui"
import "medium-ui/dist/medium-ui.css"
const app = createApp(App)
app.use(MediumUI)
app.mount("#app")
