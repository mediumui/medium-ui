<template>
  <div class="img-point">
    <image-mark
      :src="src"
      :basisWidth="1000"
      :disabled="false"
      v-model="list"
    >
      <template slot-scope="{ point }">
        <div class="point">
          <div>x坐标：{{ point.x }}</div>
          <div>Y坐标：{{ point.y }}</div>
        </div>
      </template>
    </image-mark>
  </div>
</template>

<script>
import ImageMark from "../../../packages/image-mark/src/image-mark.vue"
export default {
  components: { ImageMark },
  data() {
    return {
      list: [
        { x: 390, y: 344 },
        { x: 568, y: 390 },
        { x: 740, y: 480 },
        { x: 748, y: 542 },
        { x: 520, y: 526 },
      ],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>

<style lang="scss" scoped>
.img-point {
  width: 500px;
  height: 800px;
}
.point {
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-wrap: nowrap;
  padding: 12px;
  border: 1px solid #dbdbdb;
}
</style>
