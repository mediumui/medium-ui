export default {
  name: "me-menu-button-item",
  props: {
    //文本
    label: String,
    //二次确认提示
    message: String,
    //是否禁用
    disabled: Boolean,
  },
  methods: {
    onClick() {
      if (this.message) {
        this.$confirm(this.message, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$emit("click")
          })
          .catch(() => {})
      } else {
        this.$emit("click")
      }
    },
  },
  render: function (h) {
    return h(
      "el-button",
      {
        props: {
          type: "text",
          disabled: this.disabled,
        },
        on: {
          click: this.onClick,
        },
      },
      this.label
    )
  },
}
