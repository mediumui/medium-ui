import ImageViewers from "./src/image-viewers"
ImageViewers.install = function (Vue) {
  Vue.component(ImageViewers.name, ImageViewers)
}
export default ImageViewers
