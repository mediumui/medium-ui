<template>
  <div class="me-layout">
    <!-- 头部 -->
    <div class="me-layout-head">
      <div class="me-layout-head-left">
        <el-button
          type="text"
          @click="back"
        >
          <i class="el-icon-back"></i>
          返回
        </el-button>
        <template v-if="title.length">
          <div class="me-layout-line"></div>
          <div class="me-layout-head-left-title">{{ title }}</div>
        </template>
      </div>
      <slot name="head" />
    </div>
    <div
      class="me-layout-body"
      v-loading="loading"
    >
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="me-layout-footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  props: {
    //标题
    title: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    back() {
      if (!this.$router) {
        window.history.back(-1)
      } else {
        console.log("router")
        this.$router.back()
      }
    },
  },
}
</script>

<style>
.me-layout {
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100%;
}
.me-layout-head {
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  justify-content: space-between;
  border-bottom: #dcdfe6 1px solid;
}
.me-layout .me-layout-head .me-layout-head-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.me-layout-head-left-title {
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 24px;
}
.me-layout .me-layout-head .el-button {
  color: #909399;
  font-size: 18px;
  font-weight: 500;
  color: #909399;
  line-height: 24px;
  margin-right: 15px;
  padding: 0;
}
.me-layout .me-layout-head .me-layout-line {
  width: 1px;
  height: 14px;
  background: #c0c4cc;
}
.me-layout-body {
  height: 100%;
  flex: 2;
  width: 100%;
  overflow: auto;
}
.me-layout-footer {
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: #dcdfe6 1px solid;
}
</style>
