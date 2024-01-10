<template>
  <div
    class="verify-box"
    key="result"
  >
    <me-verify-number
      v-model="status"
      @verify="result"
    >
      <template slot="result">
        {{ status }}
      </template>
    </me-verify-number>
  </div>
</template>

<script>
import MeVerifyNumber from "../../../../packages/verify-number/src/verify-number.vue"
export default {
  components: { MeVerifyNumber },
  data() {
    return {
      status: "none",
    }
  },
  methods: {
    result(val) {
      this.status = val
    },
  },
}
</script>

<style scoped>
.verify-box {
  width: 300px;
}
</style>
