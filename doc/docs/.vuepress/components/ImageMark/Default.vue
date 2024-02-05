<template>
  <div style="width: 800px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
    >
    </me-image-mark>
    获取到的点位： {{ points }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>

<style></style>
