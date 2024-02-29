<template>
  <div id="app">
    <div class="box">
      <me-scroll ref="scroll"></me-scroll>
    </div>
  </div>
</template>

<script>
import MeScroll from "./components/scroll/index.vue"
import Rsa from "../utils/rsa"
export default {
  components: { MeScroll },
  data() {
    return {
      list: [],
    }
  },
  created() {
    const servePublicKey =
      "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+U7PHo+n+YuQdd52JABG\
pCe2fCIy6/4zi14TE1i7sVMdDr3W2ELF57aC4OvXeMkBwS1tXCYcngxV4VXWivni\
MLqpu3gDj6LvyFMf8VKgSc+2BzB2pGfrZQNgyuMzUOiFJxQBG2BYdEpqAMZuVSFO\
+M0/pbsEgQ3X0Sv8DQ3+IqsypeEQ7rVsDgvjxP8XIp7qwL7RDb5d4KBqMonfF6KZ\
9WZwVfJXdALua0ZPr5zCyZJ5AsVMFvK7gw1BDaFeM9sWbvSfwRJC6in0k5Upnn1W\
Tv66xkuFZInuRFS+Sziga/6yfkoZ7LkdJZ2k1wZUz8IdfSs9gQFXsTW7T6//MJ4I\
RQIDAQAB"
    Rsa.init(servePublicKey)
    console.log(Rsa.encrypt("12222"))
    this.$nextTick(() => {
      const list = []
      for (let i = 0; i < 1000; i++) {
        list.push(i)
      }
      this.$refs.scroll.initRow(list)
    })
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
}
.box {
  width: 800px;
  height: 500px;
}
</style>
