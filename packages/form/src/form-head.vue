<template>
  <div class="me-form-head">
    <div class="me-form-head-title">
      <slot>
        <span>{{ title }}</span>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "form-head",
  props: {
    title: String,
  },
}
</script>
<style>
.me-form-head {
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dcdfe6;
}

.me-form-head-title {
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  display: flex;
  color: #1768b4;
}
.me-form-head-title span {
  margin-left: 10px;
}
.me-form-head-title::before {
  content: "";
  width: 3px;
  height: 16px;
  background: #1768b4;
  display: inline-block;
}
</style>
