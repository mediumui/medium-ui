<template>
  <el-col :span="span">
    <el-form-item
      :label="text"
      :prop="prop"
      class="me-search-item"
    >
      <el-select
        v-if="type == 'select'"
        v-bind="$attrs"
        v-model="contentValue"
        :placeholder="placeholder ? placeholder : `请选择${label}`"
        :popper-append-to-body="true"
        :multiple="multiple"
        clearable
        collapse-tags
      >
        <el-option
          v-for="(option, index) in optionList"
          :key="index"
          :label="option[props.label]"
          :value="option[props.value]"
        ></el-option>
      </el-select>
      <el-date-picker
        v-else-if="type == 'daterange' || type == 'monthrange' || type == 'datetimerange'"
        v-model="contentValue"
        :type="type"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :pickerOptions="pickerOptions"
        :value-format="rangeValueFormate"
        :append-to-body="true"
      >
      </el-date-picker>
      <el-cascader
        v-else-if="type === 'cascader'"
        v-model="contentValue"
        :props="props"
        :options="optionList"
        :placeholder="placeholder ? placeholder : `请选择${label}`"
        :append-to-body="true"
        clearable
        collapse-tags
      >
      </el-cascader>
      <el-input
        v-else
        :placeholder="placeholder ? placeholder : `请输入${label}`"
        v-model="contentValue"
        :maxlength="maxlength"
        clearable
      >
      </el-input>
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  inject: ["span", "updateValue"],
  name: "search-item",
  data() {
    return {
      contentValue: "",
      optionList: [],
    }
  },
  watch: {
    contentValue: {
      handler(val) {
        this.__updateParams()
      },
    },
    api: {
      deep: true,
      immediate: true,
      handler() {
        this.__initOptions()
      },
    },
  },
  props: {
    //搜索字段名key
    prop: String,
    //字段名称
    label: String,
    //是否支持快捷搜索
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
    //下拉数据/级联数据，api数据优先级高于该数据
    itemList: Object | Array,
    //级联中的级联
    props: {
      type: Object,
      default: () => {
        return {
          label: "label",
          value: "id",
          children: "children",
        }
      },
    },
    //输入框最大限制长度
    maxlength: Number,
    //提示语
    placeholder: String,
    //type为'daterange'、'monthrange'、'datetimerange'时有效
    pickerOptions: {
      type: Object,
      default: () => {},
    },
    //type为'daterange'、'monthrange'、'datetimerange'时有效,用于输出格式
    valueFormat: String,
  },
  computed: {
    text() {
      if (this.label.indexOf(":") != -1) return this.label
      return `${this.label}:`
    },
    rangeValueFormate() {
      if (this.valueFormat) return this.valueFormat
      if (this.type == "monthrange") return "MM"
      if (this.type == "datetimerange") return "HH:mm"
      return "yyyy-MM-dd"
    },
  },
  created() {
    this.__initOptions()
  },
  methods: {
    /**
     * 更新数据
     */
    __updateParams() {
      //对时间范围格式进行处理
      if (this.type == "daterange" || this.type == "monthrange" || this.type == "datetimerange") {
        if (this.contentValue && this.contentValue.length > 1) {
          this.updateValue(this.prop + "BeginDate", this.contentValue[0])
          this.updateValue(this.prop + "EndDate", this.contentValue[1])
        }
      } else {
        this.updateValue(this.prop, this.contentValue)
      }
    },
    async __initOptions() {
      if (this.api) {
        if (typeof this.api != "function") {
          console.error("[类型错误]api类型必须为函数! ")
          return
        }
        const itemList = await this.api(this.params)
        this.optionList = itemList
      } else if (this.itemList) {
        this.optionList = JSON.parse(JSON.stringify(this.itemList))
      }
    },
    reset() {
      this.contentValue = ""
    },
  },
}
</script>

<style>
.me-search-item {
  width: 402px;
  margin-left: 20px;
}
.me-search-item > * {
  width: calc(100% - 152px);
}
.me-search-item > .el-form-item__content > * {
  width: 100% !important;
}
</style>
