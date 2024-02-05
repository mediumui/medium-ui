<template>
  <div style="width: 500px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
      :disabled="true"
    >
      <template slot-scope="{ point }">
        <div class="point">
          <div>x坐标：{{ point.x }}</div>
          <div>Y坐标：{{ point.y }}</div>
          <div>设备名称：{{ point.deviceName }}</div>
        </div>
      </template>
    </me-image-mark>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        { x: 272, y: 161, deviceName: "摄像头" },
        { x: 468, y: 158, deviceName: "垃圾桶" },
        { x: 577, y: 267, deviceName: "消防栓" },
        { x: 190, y: 344, deviceName: "消防通道" },
        { x: 104, y: 124, deviceName: "走廊" },
        { x: 547, y: 46, deviceName: "墙" },
        { x: 706, y: 286, deviceName: "走廊" },
      ],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>

<style>
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
