<template>
  <div class="me-player">
    <video
      :id="id"
      :src="src"
      :controls="controls"
      poster
    ></video>
  </div>
</template>

<script>
import PlayerController from "./playerController"
export default {
  name: "player",
  data() {
    return {
      id: this.uuid2(),
      controller: null,
    }
  },
  props: {
    src: String,
    controls: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    this.$nextTick(() => {
      this.initVideo()
    })
  },
  computed: {
    video() {
      return document.getElementById(this.id)
    },
  },
  methods: {
    initVideo() {
      this.controller = new PlayerController(this.video, this.src, this.id)
      this.$emit("created", this.controller)
    },
    //随机生成id，避免因为一个页面多个播放窗口
    uuid2(len = 32, radix = 16) {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      var uuid = [],
        i
      radix = radix || chars.length

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
      } else {
        // rfc4122, version 4 form
        var r

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-"
        uuid[14] = "4"

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | (Math.random() * 16)
            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
          }
        }
      }

      return uuid.join("")
    },
  },
  beforeDestroy() {
    this.controller.destroy()
    this.controller = null
  },
}
</script>

<style></style>
