<template>
  <div>
    <div class="string-type">
      <el-input
        placeholder="请输入文本"
        v-model="msg"
      >
      </el-input>
      <el-button @click="isNumber">是否为数字</el-button>
      <el-button @click="isMobile">是否为手机</el-button>
      <el-button @click="isEmail">是否为邮箱</el-button>
      <el-button @click="isEmpty">是否为空</el-button>
    </div>
    {{ result }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      result: "",
    }
  },
  methods: {
    isNumber() {
      this.result = `是否为数字：${this.msg.isNumber()}`
    },
    isMobile() {
      this.result = `是否为手机：${this.msg.isMobile()}`
    },
    isEmail() {
      this.result = `是否为邮件：${this.msg.isEmail()}`
    },
    isEmpty() {
      this.result = `是否为空：${this.msg.isEmpty()}`
    },
  },
}
</script>

<style scoped>
.string-type {
  display: flex;
  flex-direction: row;
}
.el-input {
  width: 220px;
}
.el-input + .el-button {
  margin-left: 10px;
}
</style>
