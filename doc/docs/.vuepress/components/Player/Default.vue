<template>
  <me-player
    :src="url"
    @created="createPlayer"
  ></me-player>
</template>

<script>
export default {
  data() {
    return {
      controller: null,
      url: "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4",
    }
  },
  methods: {
    createPlayer(controller) {
      this.controller = controller
    },
  },
}
</script>

<style></style>
