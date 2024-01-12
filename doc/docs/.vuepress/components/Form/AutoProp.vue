<template>
  <me-form
    :model="model"
    title="设备信息"
  >
    <me-form-item
      label="设施编号"
      prop="code"
    >
    </me-form-item>
    <me-form-item
      label="设施状态"
      prop="statusStr"
    >
      <template slot-scope="{ model }">
        <span style="color: red">{{ model.statusStr }}</span>
      </template>
    </me-form-item>
    <me-form-item
      label="创建时间"
      prop="createTime"
    >
    </me-form-item>
    <me-form-item
      label="设施名称"
      prop="deviceName"
    >
    </me-form-item>
    <me-form-item
      label="设施分类"
      prop="class"
    >
    </me-form-item>
  </me-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        code: "ZYA20240112",
        deviceName: "空调",
        class: "1222",
        statusStr: "异常",
        createTime: "2024-01-12 12:00:00",
      },
    }
  },
}
</script>

<style></style>
