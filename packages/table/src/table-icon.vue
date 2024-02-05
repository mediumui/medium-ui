<template>
  <el-tooltip placement="top">
    <div slot="content">{{ content }}</div>
    <el-button
      @click="onClick"
      size="small"
      circle
    >
      <i :class="icon" />
    </el-button>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    content: String,
    icon: String,
  },
  methods: {
    onClick() {
      this.$emit("click")
    },
  },
}
</script>

<style></style>
