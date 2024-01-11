<template>
  <div class="verify-box">
    <me-verify-number verify-type="blend"></me-verify-number>
  </div>
</template>

<script>
export default {
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
