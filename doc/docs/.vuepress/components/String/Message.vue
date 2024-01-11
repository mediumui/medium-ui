<template>
  <div>
    <el-button @click="showSuccess">成功</el-button>
    <el-button @click="showWarning">警告</el-button>
    <el-button @click="showError">错误</el-button>
    <el-button @click="showInfo">提示</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      const message = "点击了成功消息"
      message.tips()
    },
    showWarning() {
      const message = "点击了警告消息"
      message.tips("warning")
    },
    showError() {
      const message = "点击了错误消息"
      message.tips("error")
    },
    showInfo() {
      const message = "点击了提示消息"
      message.tips("info")
    },
  },
}
</script>

<style></style>
