<template>
  <div style="height: 500px; width: 100%; background-color: #f0f2f5; padding: 4px">
    <me-layout title="用户详情">
      <div class="content">
        <el-form :data="model">
          <el-form-item
            label="用户名:"
            prop="userName"
          >
            {{ model.userName }}
          </el-form-item>
          <el-form-item
            label="年龄:"
            prop="age"
          >
            {{ model.age }}
          </el-form-item>
        </el-form>
      </div>
      <template slot="footer">
        <el-button
          type="primary"
          @click="onConfirm"
          >确定</el-button
        >
      </template>
    </me-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        userName: "wilson",
        age: 30,
      },
    }
  },
  methods: {
    onConfirm() {
      "确定提示".tips()
    },
  },
}
</script>

<style scope>
.content {
  padding: 12px;
}
</style>
