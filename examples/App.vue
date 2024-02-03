<template>
  <div id="app">
    <de-player></de-player>
  </div>
</template>

<script>
import DePlayer from "./components/layout.vue"
export default {
  components: { DePlayer },
  data() {
    return {}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
