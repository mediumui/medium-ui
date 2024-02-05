<template>
  <el-col :span="span">
    <el-form-item
      :label="text"
      :prop="prop"
      class="me-search-item"
    >
      <el-input
        :placeholder="placeholder"
        v-model="contentValue"
        :maxlength="maxlength"
      >
      </el-input>
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  inject: ["span"],
  data() {
    return {
      contentValue: "",
    }
  },
  props: {
    //搜索字段名，当不配置时默认使用prop字段
    prop: String,
    //字段名称
    label: String,
    //是否快捷搜索
    nimble: {
      type: Boolean,
      default: false,
    },
    //搜索参数
    params: {
      type: Object,
      default: () => {
        return {}
      },
    },
    //是否多选(下拉选择、级联有效)
    multiple: {
      type: Boolean,
      default: false,
    },
    //搜索类型
    type: {
      type: String,
      default: "input",
    },
    //搜索接口,(下拉选择、级联需要调用服务器接口需要配置)
    api: Function,
    //(select、级联)可选项数据源，键名可通过 Props 属性配置
    options: {
      type: Object,
      default: () => {
        return {
          label: "id",
          value: "id",
          children: "children",
        }
      },
    },
    //输入框最大限制长度
    maxlength: Number,
    //提示语
    placeholder: String,
  },
  computed: {
    text() {
      if (this.label.indexOf(":") != -1) return this.label
      return `${this.label}:`
    },
  },
  created() {
    // console.log(this)
  },
}
</script>

<style>
.me-search-item > * {
  width: 240px;
}
</style>
