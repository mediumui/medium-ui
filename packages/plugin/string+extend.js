import Md5 from "./md5"
import Vue from "vue"
/**
 * Md5加密
 * 返回32为小写
 */
String.prototype.toMd5 = function () {
  return Md5(this)
}
//字符串转Json,如果转失败则返回{}
String.prototype.toJson = function () {
  try {
    return JSON.parse(this)
  } catch (err) {
    console.log(err)
    return {}
  }
}
//判断是否为数字
String.prototype.isNumber = function () {
  if (this.length == 0) return false
  return !isNaN(Number(this))
}
/**
 * 判断是否为手机号码
 * 号码规则，以1开头，后面10位数字长度
 * @returns boolean
 */
String.prototype.isMobile = function () {
  if (this.length !== 11) {
    return false
  }
  var reg = /^1\d{10}$/
  return reg.test(this)
}
/**
 * 判断是否为邮箱地址
 * @returns boolean
 */
String.prototype.isEmail = function () {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  return reg.test(this)
}
// 判断是否为空值
String.prototype.isEmpty = function () {
  if (this.length == 0) return true
  if (this == null || this == undefined) return true
  return false
}
/**
 * 基于ElementUI的message
 * @param {string} type 消息类型,success/error/info
 */
String.prototype.tips = function (type = "success") {
  if (Vue.prototype.$message) {
    Vue.prototype.$message({
      type,
      message: this,
    })
  }
}
