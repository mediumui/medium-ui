<template>
  <div id="app">
    <me-table></me-table>
  </div>
</template>

<script>
import MeTable from "./components/table.vue"
export default {
  components: { MeTable },
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
