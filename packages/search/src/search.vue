<template>
  <div class="me-search">
    <el-input
      placeholder="请输入"
      v-model="quickValue"
      clearable
    >
      <el-select
        placeholder="请选择"
        v-model="quickKey"
        slot="prepend"
        class="me-search-quick"
      >
        <el-option
          v-for="quick in quickList"
          :key="`quick_${quick.prop}`"
          :label="quick.label"
          :value="quick.prop"
        >
        </el-option>
      </el-select>
    </el-input>
    <el-button
      type="primary"
      @click="__search"
    >
      查询
    </el-button>
    <el-popover
      placement="bottom"
      trigger="click"
      class="me-search-popover"
      v-model="showPopover"
    >
      <el-button slot="reference"> 高级查询<i :class="showPopover ? 'el-icon-arrow-up el-icon--right' : 'el-icon-arrow-down el-icon--right'" /> </el-button>
      <div class="me-search-popover-content">
        <div class="title">高级查询</div>
        <el-form
          label-width="120px"
          inline
        >
          <el-row>
            <slot></slot>
          </el-row>
        </el-form>
        <div class="me-search-popover-footer">
          <el-button
            type="primary"
            size="mini"
            @click="__search"
          >
            查询
          </el-button>
          <el-button
            size="mini"
            @click="__reset"
          >
            重置
          </el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "search",
  provide() {
    return {
      span: () => {
        return this.span
      },
    }
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      quickList: [],
      quickValue: "",
      quickKey: "firstKeyWord",
      showPopover: false,
    }
  },
  watch: {
    quickValue: {
      handler(val) {
        const model = JSON.parse(JSON.stringify(this.value))
        model[this.quickKey] = val
        this.$emit("input", model)
      },
    },
    quickKey: {
      handler(newKey, oldKey) {
        const model = JSON.parse(JSON.stringify(this.value))
        delete model[oldKey]
        model[newKey] = this.quickValue
        this.$emit("input", model)
      },
    },
  },
  computed: {
    span() {
      const slots = this.$slots.default
      if (slots.length == 1) return 24
      return 12
    },
  },
  created() {
    this.__setQuickList()
  },
  methods: {
    //设置快捷搜索
    __setQuickList() {
      const slots = this.$slots.default
      if (slots.length == 1) this.span = 24
      const searchItemList = [
        {
          label: "全部",
          prop: "firstKeyWord",
        },
      ]
      for (let i = 0; i < slots.length; i++) {
        const quick = slots[i]
        if (quick.tag.indexOf("search-item") != -1) {
          const propsData = JSON.parse(JSON.stringify(quick.componentOptions.propsData))
          if (propsData.quick == true && propsData.prop?.length > 0) {
            const capitalizedFirst = propsData.prop[0].toUpperCase()
            const rest = propsData.prop.slice(1)
            const prop = "first" + capitalizedFirst + rest
            searchItemList.push({
              ...propsData,
              prop,
            })
          }
        }
      }
      this.quickList = searchItemList
    },
    __search() {
      const model = this.checkNull()
      this.$emit("search", model)
      if (this.$parent.searchModelAction) {
        this.$parent.searchModelAction(model)
      }
    },
    __reset() {
      this.quickValue = ""
      const model = JSON.parse(JSON.stringify(this.value))
      for (let key in model) {
        delete model[key]
      }
      this.$emit("input", model)
      this.$nextTick(() => {
        this.__search()
      })
    },
    //移除空值字段
    checkNull() {
      const model = JSON.parse(JSON.stringify(this.value))
      for (let i in model) {
        const obj = model[i]
        // 排除法寻找对象类型
        if (
          typeof obj === "boolean" ||
          (typeof obj === "string" && obj !== "") ||
          typeof obj === "number" ||
          typeof obj === "bigint" ||
          typeof obj === "symbol" ||
          typeof obj === "function"
          // 如果你有其他类型的在这里声明一下
        )
          continue
        if (obj == null || obj == undefined || obj === "") {
          delete model[i]
        }
      }
      return model
    },
  },
}
</script>

<style>
.me-search {
  display: flex;
  flex-direction: row;
}
.me-search > .el-input + .el-button {
  margin-left: 15px;
}
.me-search-quick {
  width: 120px;
}
.me-search > .el-input {
  width: 357px;
}
.me-search .el-input .el-input-group__prepend {
  background: transparent;
}
.me-search-popover {
  margin-left: 15px;
}
.me-search-popover-content {
  padding: 8px 8px 3px 8px;
  max-width: 760px;
}
.me-search-popover-content > .title {
  font-size: 18px;
  font-weight: 500;
  color: #1768b4;
  line-height: 24px;
  margin-bottom: 30px;
}
.me-search-popover-content > form {
  max-height: 326px;
  overflow-y: auto;
  margin-bottom: 40px;
}
.me-search-popover-content > form::-webkit-scrollbar {
  width: 1px;
}
.me-search-popover-footer {
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: end;
}
</style>
