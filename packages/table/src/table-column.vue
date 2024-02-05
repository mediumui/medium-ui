<script>
import { TableColumn } from "element-ui"
export default {
  name: "table-column",
  extends: TableColumn,
  props: {
    //是否搜索
    search: {
      type: Boolean,
      default: false,
    },
    //搜索字段名，当不配置时默认使用prop字段
    seProp: String,
    //字段名称，如果不配置默认使用label
    seLabel: String,
    //是否快捷搜索
    seNimble: {
      type: Boolean,
      default: false,
    },
    //搜索参数
    seParams: {
      type: Object,
      default: () => {
        return {}
      },
    },
    //是否多选(下拉选择、级联有效)
    seMultiple: {
      type: Boolean,
      default: false,
    },
    //搜索类型
    seType: {
      type: String,
      default: "input",
    },
    //搜索接口,(下拉选择、级联需要调用服务器接口需要配置)
    seApi: {
      type: Function,
      default: () => {},
    },
    //(select、级联)可选项数据源，键名可通过 Props 属性配置
    seOptions: {
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
    seMaxlength: Number,
    //提示语
    sePlaceholder: String,
  },
}
</script>

<style></style>
