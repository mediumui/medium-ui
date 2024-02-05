<template>
  <div style="width: 500px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
      :disabled="true"
    >
    </me-image-mark>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        { x: 272, y: 161 },
        { x: 468, y: 158 },
        { x: 577, y: 267 },
        { x: 190, y: 344 },
        { x: 104, y: 124 },
        { x: 547, y: 46 },
        { x: 706, y: 286 },
      ],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>

<style></style>
