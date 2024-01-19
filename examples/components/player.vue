<template>
  <div class="player-base">
    <me-player
      :src="model.url"
      @created="onCreated"
    ></me-player>
    <el-button @click="pause">暂停</el-button>
    <el-button @click="play">播放</el-button>
  </div>
</template>

<script>
import MePlayer from "../../packages/player/src/player.vue"
export default {
  components: { MePlayer },
  data() {
    return {
      controller: null,
      model: {
        url: "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4",
      },
    }
  },
  methods: {
    onCreated(controller) {
      this.controller = controller
      controller.on("play", this.play)
    },
    play(event) {
      console.log("接收监听", event)
    },
    pause() {
      this.controller.paused()
    },
    play() {
      this.controller.play()
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
