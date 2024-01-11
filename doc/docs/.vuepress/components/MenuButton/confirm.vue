<template>
  <me-menu-button>
    <me-menu-button-item
      label="编辑"
      @click="onEdit"
      message="确定进入编辑页面？"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="删除"
      @click="onDelete"
      message="确定删除该数据吗?"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="查看"
      @click="onInfo"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="禁用"
      @click="onDisabled"
      message="确定禁用该数据？"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="启用"
      @click="onOpen"
      message="确定启用该数据？"
    >
    </me-menu-button-item>
  </me-menu-button>
</template>

<script>
export default {
  methods: {
    onDelete() {
      this.$message.success("点击了删除按钮")
    },
    onEdit() {
      this.$message.success("点击了编辑按钮")
    },
    onInfo() {
      this.$message.success("点击了查看按钮")
    },
    onDisabled() {
      this.$message.success("点击了禁用按钮")
    },
    onOpen() {
      this.$message.success("点击了启用按钮")
    },
  },
}
</script>

<style></style>
