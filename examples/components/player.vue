<template>
  <div class="player-base">
    <div id="player-id"></div>
  </div>
</template>

<script>
import PlayerController from "../../packages/player/src/playerController"
export default {
  data() {
    return {
      controller: null,
      model: {
        url: "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4",
      },
    }
  },
  created() {
    this.controller = new PlayerController({
      id: "player-id",
      autoplay: true,
      loop: true,
      cache: true,
      src: "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4",
      onloadedmetadata: this.onloadedmetadata,
      onplay(event, cxt) {},
    })
  },
  methods: {
    onloadedmetadata(event, controller) {
      console.log(event, controller, this)
    },
  },
}
</script>

<style>
.player-base {
  width: 200px;
  height: 100px;
}
</style>
