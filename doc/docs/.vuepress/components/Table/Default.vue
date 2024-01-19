<template>
  <me-search :model="model">
    <template slot-scope="{ data }">
      <me-search-item label="用户名称">
        <el-input
          v-model="data.a"
          placeholder="请输入用户名"
        >
        </el-input>
      </me-search-item>
    </template>
  </me-search>
</template>

<script>
export default {
  data() {
    return {
      model: {
        name: "",
      },
    }
  },
}
</script>

<style></style>
