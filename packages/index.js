import components from "./components"
import "./plugin"
// 批量组件注册
const install = function (Vue, options) {
  const prefix = options?.prefix ?? "me-"
  Object.keys(components).forEach((key) => {
    const component = components[key]
    if (component.install) {
      component.install(Vue, prefix)
    }
  })
}
export default {
  install,
  ...components,
}
