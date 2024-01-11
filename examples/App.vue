<template>
  <me-menu-button>
    <me-menu-button-item label="编辑"></me-menu-button-item>
    <me-menu-button-item label="删除"></me-menu-button-item>
    <me-menu-button-item label="查看"></me-menu-button-item>
    <me-menu-button-item label="禁用"></me-menu-button-item>
    <me-menu-button-item
      label="启用"
      disabled
    ></me-menu-button-item>
  </me-menu-button>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
