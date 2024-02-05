import ImageMark from "./src/image-mark.vue"
ImageMark.install = function (Vue, prefix) {
  Vue.component(prefix + ImageMark.name, ImageMark)
}
export default ImageMark
