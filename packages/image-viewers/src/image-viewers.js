import ElImageViewers from "element-ui/packages/image/src/image-viewer.vue"
import "./image-viewers.css"
export default {
  name: "me-image-viewers",
  components: { ElImageViewers },
  data() {
    return {
      showViewers: false,
      initialIndex: 0, //展示图片下标
    }
  },
  props: {
    //图片列表
    images: { type: Array, default: () => [] },
    //读取图片地址字段名
    fileUrl: { type: String, default: "fileUrl" },
    //展示方式，wall:图片矩阵, text: '文字按钮'
    type: { type: String, default: "text" },
    //当type为text时展示文字
    text: { type: String, default: "查看图片" },
    // 当type为wall时图片大小
    size: { type: String, default: "100px" },
  },
  methods: {
    showImagesViewers(index) {
      this.initialIndex = index
      this.showViewers = true
    },
  },
  render(h) {
    const urlList = this.images.map((image) => {
      return image[this.fileUrl]
    })
    const viewers = h("el-image-viewers", {
      props: {
        urlList: urlList,
        initialIndex: this.initialIndex,
        onClose: () => {
          this.showViewers = false
        },
      },
    })
    // 如果时展示文字，非图片列表
    if (this.type == "text") {
      const text = h(
        "div",
        {
          class: "me-image-viewers-button",
          on: {
            click: () => {
              this.showImagesViewers(0)
            },
          },
        },
        [this.text, this.showViewers ? viewers : null]
      )
      return text
    }
    const images = []
    urlList.forEach((url, index) => {
      const fileNode = h("img", {
        class: "me-image-viewers-item",
        attrs: {
          src: url,
          width: this.size,
          height: this.size,
        },
        on: {
          click: () => {
            this.showImagesViewers(index)
          },
        },
      })
      images.push(fileNode)
    })
    return h(
      "div",
      {
        class: "me-image-viewers",
      },
      [...images, this.showViewers ? viewers : null]
    )
  },
}
