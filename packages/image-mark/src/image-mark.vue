<template>
  <div class="me-image-mark">
    <div
      class="me-image-mark-tool"
      v-if="tool.length > 0"
    >
      <el-tooltip
        content="扩大"
        v-if="tool.indexOf('add') != -1"
      >
        <el-button
          size="mini"
          @click="addSize"
        >
          <i class="el-icon-circle-plus-outline" />
        </el-button>
      </el-tooltip>
      <el-tooltip
        content="缩小"
        v-if="tool.indexOf('lower') != -1"
      >
        <el-button
          size="mini"
          @click="deleteSize"
        >
          <i class="el-icon-remove-outline" />
        </el-button>
      </el-tooltip>
    </div>
    <div class="me-image-mark-content">
      <div :style="{ transform: `scale(${scale})`, 'transform-origin': '0% 0% 0' }">
        <img
          :src="src"
          :width="width"
          @click="getPoints"
          class="me-image-mark-image"
        />
        <div
          class="me-image-mark-point"
          v-for="(point, index) in value"
          :key="`${point.x}${point.y}-${index}`"
          @click="removePoint(index)"
          :style="{
            left: `${point.x * basis - 5}px`,
            top: `${point.y * basis - 5}px`,
          }"
        >
          <div class="me-image-mark-point-child">
            <slot :point="point">
              <div class="me-image-mark-default"></div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "image-mark",
  data() {
    return {
      //图片缩放比例
      scale: 1,
      //图片尺寸基准大小
      basis: 1,
      //图片初始化宽度
      width: 0,
    }
  },
  watch: {
    src: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            const img = new Image()
            img.src = val
            const clientWidth = this.$el.clientWidth
            this.basis = clientWidth / this.basisWidth ?? clientWidth
            this.width = clientWidth - 24
          })
        }
      },
    },
  },
  props: {
    src: String,
    //点位数据
    value: {
      type: Array,
      default: () => [],
    },
    // 是否运行对图片进行操作
    disabled: {
      type: Boolean,
      default: false,
    },
    // 基准宽度，当拾取坐标点时会保存响应的宽度。
    basisWidth: Number,
    //顶部工具栏，目前支持放大(add)、缩小(lower)
    tool: {
      type: Array,
      default: () => ["add", "lower"],
    },
  },
  methods: {
    getPoints(event) {
      if (this.disabled) return
      const x = event.offsetX / this.basis
      const y = event.offsetY / this.basis
      const list = JSON.parse(JSON.stringify(this.value))
      list.push({ x, y })
      this.$emit("input", list)
    },
    removePoint(index) {
      if (this.disabled) return
      const list = JSON.parse(JSON.stringify(this.value))
      list.splice(index, 1)
      this.$emit("input", list)
    },
    addSize() {
      this.scale += 0.1
      if (this.scale > 2.0) {
        this.scale = 2.0
      }
      this.width
      this.$forceUpdate()
    },
    deleteSize() {
      this.scale -= 0.1
      if (this.scale < 0.5) {
        this.scale = 0.5
      }
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped>
.me-image-mark {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: #dcdfe6 1px solid;
  height: fit-content;
}
.me-image-mark-tool {
  padding: 12px;
  display: flex;
  flex-direction: row;
  border-bottom: #dcdfe6 1px solid;
}
.me-image-mark-content {
  position: relative;
  overflow: auto;
  padding: 12px;
}
.me-image-mark-image {
  user-select: none;
  -webkit-user-drag: none;
}
.me-image-mark-point {
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 10px;
}
.me-image-mark-point:hover {
  z-index: 999;
}
.me-image-mark-point:hover > .me-image-mark-point-child {
  opacity: 1;
}
/* 使元素置中 */
.me-image-mark-point-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
