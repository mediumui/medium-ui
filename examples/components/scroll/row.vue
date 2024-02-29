<template>
  <div
    class="me-row"
    :style="{ height: `${rowHeight}px` }"
  >
    {{ index }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    index: Number,
    rowHeight: {
      type: Number,
      default: 45,
    },
  },
}
</script>

<style>
.me-row {
  width: 100%;
  height: 45px;
  background: orange;
  margin-bottom: 12px;
}
</style>
