<template>
  <div
    class="me-scroll"
    @scroll="onScroll"
  >
    <div :style="{ height: `${topBox}px` }"></div>
    <me-row
      v-for="(item, index) in contentList"
      :key="index"
      :index="index"
    ></me-row>
    <div :style="{ height: `${bottomBox}px` }"></div>
  </div>
</template>

<script>
import MeRow from "./row.vue"
export default {
  components: { MeRow },
  props: {
    rowHeight: {
      type: Number,
      default: 45,
    },
  },
  data() {
    return {
      //窗体高度
      clientHeight: 0,
      topBox: 0,
      bottomBox: 200,
      currentStart: 0,
      line: 0,
      list: [],
      contentList: [],
    }
  },
  methods: {
    initRow(list) {
      this.$nextTick(() => {
        this.list = list
        this.clientHeight = this.$el.clientHeight
        this.line = Math.floor(this.clientHeight / this.rowHeight) + 1
        if (this.line > this.list.length) {
          this.bottomBox = 0
          this.contentList = JSON.parse(JSON.stringify(list))
        } else {
          this.__updateList()
        }
      })
    },
    onScroll(e) {
      const scrollTop = e.target.scrollTop
      this.topBox = scrollTop
      const topLine = scrollTop / this.rowHeight
      if (topLine - this.currentStart > 2) {
        this.currentStart = topLine
        this.__updateList()
      }
    },
    __updateList() {
      const list = JSON.parse(JSON.stringify(this.list))
      this.contentList = list.slice(this.currentStart, this.line)
    },
  },
}
</script>

<style>
.me-scroll {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: red;
}
</style>
