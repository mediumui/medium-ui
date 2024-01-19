<template>
  <el-col
    class="me-search-item"
    :span="colSpan"
  >
    <el-form-item
      :label="`${label}：`"
      :prop="prop"
    >
      <slot>
        <el-input
          v-model="text"
          :placeholder="placeholder ? placeholder : `请输入${label}`"
        ></el-input>
      </slot>
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  name: "search-item",
  inject: ["span"],
  data() {
    return {
      text: "",
    }
  },
  watch: {
    text: {
      deep: true,
      handler(val) {
        this.$emit("input", val)
      },
    },
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        this.text = val
      },
    },
  },
  props: {
    value: String | Array,
    label: String,
    //收否快捷搜索
    quick: {
      type: Boolean,
      default: false,
    },
    //字段名
    prop: String,
    //组件类型
    type: {
      type: String,
      default: "input",
    },
    //组件提示语
    placeholder: String,
  },
  computed: {
    colSpan() {
      return this.span()
    },
  },
}
</script>

<style>
.me-search-item .el-form-item__content {
  width: 250px;
}
.me-search-item .el-form-item__content > * {
  width: 100% !important;
}
</style>
