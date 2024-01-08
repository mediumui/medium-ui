import Test from "./src/test.vue"
Test.install = function (Vue) {
  Vue.component(Test.name, Test)
}
export default Test
