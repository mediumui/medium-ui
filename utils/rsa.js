import JSEncrypt from "../packages/plugin/rsa"
let instance
class Rsa {}
Rsa.getInstance = function () {
  if (instance) {
    return instance
  }
  instance = new Rsa()
  instance.encryptor = new JSEncrypt()
  return instance
}
Rsa.init = function (publicKey) {
  const rsa = Rsa.getInstance()
  rsa.encryptor.setPublicKey(publicKey)
}
Rsa.encrypt = function (val) {
  const rsa = Rsa.getInstance()
  return rsa.encryptor.encrypt(val)
}
export default Rsa
