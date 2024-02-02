<template>
  <div id="player-event"></div>
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
      id: "player-event",
      src: this.url,
      autoplay: true,
      onplay(event, controller) {
        console.log("开始播放了")
      },
    })
  },
  methods: {},
}
</script>

<style></style>
