<template>
  <div id="player-props"></div>
</template>

<script>
import PlayerController from "../../../../../utils/playerController.js"
export default {
  data() {
    return {
      controller: null,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    }
  },
  mounted() {
    this.controller = new PlayerController({
      id: "player-props",
      src: this.url,
      autoplay: true,
    })
  },
  methods: {},
}
</script>

<style></style>
