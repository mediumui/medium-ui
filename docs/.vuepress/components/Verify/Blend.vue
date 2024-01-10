<template>
  <div class="verify-box">
    <me-verify-number verify-type="blend"></me-verify-number>
  </div>
</template>

<script>
import MeVerifyNumber from "../../../../packages/verify-number/src/verify-number.vue"
export default {
  components: { MeVerifyNumber },
  data() {
    return {
      status: false,
    }
  },
}
</script>

<style scoped>
.verify-box {
  width: 300px;
}
</style>
