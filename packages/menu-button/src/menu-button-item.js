export default {
  name: "me-menu-button-item",
  props: {
    //文本
    label: String,
    //二次确认提示
    message: String,
    // 响应方法
    func: Function,
    //是否禁用
    disabled: Boolean,
  },
  render: function (h) {
    return h(
      "el-button",
      {
        props: {
          type: "text",
          disabled: this.disabled,
        },
      },
      this.label
    )
  },
}
