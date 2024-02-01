import Player from "./src/player.vue"
import "./src/playerController"
Player.install = function (Vue, prefix) {
  Vue.component(prefix + Player.name, Player)
}
export default Player
