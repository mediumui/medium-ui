<template>
  <div class="md5">
    <div class="md5-content">
      <el-input
        placeholder="请输入文本"
        v-model="message"
      >
      </el-input>
      <el-button
        @click="toMd5"
        type="primary"
      >
        转换md5
      </el-button>
    </div>
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
.md5-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
}
.el-button {
  width: fit-content;
  margin-left: 10px;
}
.el-input {
  width: 250px;
}
</style>
