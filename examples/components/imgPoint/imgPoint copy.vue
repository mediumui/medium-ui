<template>
  <div class="body">
    <img
      :width="defaultWidth"
      :src="src"
      @click="getPoints"
      draggable="false"
      oncontextmenu="return false;"
    />
    <div
      :style="{ width: `${width}px`, height: `${height}px` }"
      class="module-point"
    >
      <img
        :src="src"
        :width="width"
      />
      <div
        v-for="(point, index) in points"
        :key="index"
        class="point"
        :style="{
          left: `${(point.x - 5) * 2}px`,
          top: `${(point.y - 5) * 2}px`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
      points: [],
      width: 0,
      height: 0,
      defaultWidth: 500,
    }
  },
  created() {
    const img = new Image()
    img.src = this.src
    const width = img.width
    const height = img.height
    const sale = width / height
    const baseWidth = this.defaultWidth * 2
    this.width = baseWidth
    this.height = baseWidth / sale
  },
  methods: {
    getPoints(event) {
      const x = event.offsetX
      const y = event.offsetY
      this.points.push({
        x,
        y,
      })
    },
  },
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
img {
  user-select: none;
  -webkit-user-drag: none;
}
.module-point {
  position: relative;
}
.point {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: red;
}
</style>
