import Player from "./src/player.vue"
Player.install = function (Vue, prefix) {
  Vue.component(prefix + Player.name, Player)
}
export default Player
