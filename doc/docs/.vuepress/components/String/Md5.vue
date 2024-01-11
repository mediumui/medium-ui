<template>
  <div class="md5">
    <div>原始文本：{{ message }}</div>
    <el-button @click="toMd5">转换md5</el-button>
    <div>转换结果： {{ md5Str }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello world",
      md5Str: "",
    }
  },
  methods: {
    toMd5() {
      this.md5Str = this.message.toMd5()
    },
  },
}
</script>

<style scoped>
.md5 {
  display: flex;
  flex-direction: column;
}
.el-button {
  width: fit-content;
}
</style>
