<template>
  <div id="player-default"></div>
</template>

<script>
import PlayerController from "medium-ui/utils/playerController"
export default {
  data() {
    return {
      controller: null,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    }
  },
  mounted() {
    this.controller = new PlayerController({
      id: "player-default",
      src: this.url,
    })
  },
  methods: {},
}
</script>

<style></style>
