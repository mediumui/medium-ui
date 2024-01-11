import ImageViewers from "./src/image-viewers"
ImageViewers.install = function (Vue, prefix) {
  Vue.component(prefix + ImageViewers.name, ImageViewers)
}
export default ImageViewers
