export default {
  name: "form-item",
  props: {
    //标题
    label: String,
    prop: String,
    colSpan: {
      type: Number,
      default: 8,
    },
  },
  render(h) {
    return h("div")
  },
}
