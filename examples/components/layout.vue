<template>
  <div class="layout">
    <zy-layout
      title="页面标题"
      :loading="loading"
    >
      <template slot="head">1111</template>
      <template slot="footer">
        <el-button>返回</el-button>
      </template>
      <div style="height: 1000px; background-color: red; margin-bottom: 20px"></div>
    </zy-layout>
  </div>
</template>

<script>
import ZyLayout from "../../packages/layout/src/layout.vue"
export default {
  components: { ZyLayout },
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 5000)
  },
}
</script>

<style scoped>
.layout {
  width: 500px;
  height: 300px;
}
</style>
