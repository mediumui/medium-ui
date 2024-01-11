import VerifyNumber from "./src/verify-number"
VerifyNumber.install = function (Vue, prefix) {
  Vue.component(prefix + VerifyNumber.name, VerifyNumber)
}
export default VerifyNumber
