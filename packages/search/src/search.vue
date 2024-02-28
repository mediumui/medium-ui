<template>
  <div class="me-search">
    <el-input
      v-model="nimbleValue"
      placeholder="请输入快捷搜索内容"
      clearable
    >
      <el-select
        v-model="nimbleKey"
        slot="prepend"
      >
        <el-option
          v-for="v in nimbleSelectList"
          :key="v.value"
          :label="v.label"
          :value="v.value"
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
      trigger="manual"
      v-model="visible"
      popper-class="me-search-popover"
    >
      <el-button
        slot="reference"
        @click="visible = !visible"
      >
        高级查询
      </el-button>
      <div class="me-search-popover-content">
        <div class="me-search-popover-title">高级查询</div>
        <el-form label-width="120px">
          <el-row>
            <slot />
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
            >重置</el-button
          >
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      span: this.span,
      updateValue: this.__updateValue,
    }
  },
  name: "search",
  props: {
    value: Object,
  },
  data() {
    return {
      // 是否展示高级查询
      visible: false,
      //快捷搜索内容
      nimbleValue: "",
      //快捷搜索关键字
      nimbleKey: "firstKeyWord",
      //快捷搜索关键字下拉列表
      nimbleSelectList: [],
      //高级查询条数
      formNumber: 0,
    }
  },
  watch: {
    nimbleValue: {
      immediate: true,
      handler() {
        const params = JSON.parse(JSON.stringify(this.value))
        if (this.nimbleKey) {
          params[this.nimbleKey] = this.nimbleValue
          this.$emit("input", params)
        }
      },
    },
    nimbleKey: {
      immediate: true,
      handler(newVal, oldVal) {
        const params = JSON.parse(JSON.stringify(this.value))
        if (oldVal && oldVal.length) {
          delete params[oldVal]
        }
        params[newVal] = this.nimbleValue
        this.$emit("input", params)
      },
    },
  },
  computed: {
    span() {
      if (this.formNumber == 1) return 24
      return 12
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.__initNimble()
    })
  },
  methods: {
    __updateValue(key, value) {
      setTimeout(() => {
        const params = JSON.parse(JSON.stringify(this.value))
        if (!value || !value.length) {
          delete params[key]
        } else {
          params[key] = value
        }
        this.$emit("input", params)
      }, 300)
    },
    __search() {
      this.visible = false
      this.$emit("search")
    },
    __reset() {
      const params = {}
      params[this.nimbleKey] = this.nimbleValue

      this.$slots.default.forEach((node) => {
        node.componentInstance.reset()
      })
      setTimeout(() => {
        this.$emit("input", params)
        this.__search()
      }, 300)
    },
    /**
     * 初始化快捷搜索
     */
    __initNimble() {
      const nimbleSelectList = [
        {
          label: "全部",
          value: "firstKeyWord",
        },
      ]
      const nodes = this.$slots.default
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!node.tag || node.tag.indexOf("search-item") == -1) continue
        this.formNumber += 1
        const component = node.componentInstance
        if (component.nimble != true) continue
        const key = component.prop.charAt(0).toUpperCase() + component.prop.slice(1)
        nimbleSelectList.push({
          label: component.label,
          value: "first" + key,
        })
      }
      this.nimbleSelectList = nimbleSelectList
    },
  },
}
</script>

<style>
.me-search {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
}
.me-search > .el-input {
  max-width: 357px;
  flex-shrink: 0;
}
.me-search > .el-input + .el-button {
  margin-left: 14px;
  margin-right: 14px;
}
.me-search > .el-input > .el-input-group__prepend {
  background: #fff;
}
.me-search > .el-input > .el-input-group__prepend > .el-select {
  width: 120px;
}
.me-search-popover {
  padding: 0px !important;
  max-width: 804px;
}
.me-search-popover-content {
  display: flex;
  flex-direction: column;
  min-width: 400px;
}
.me-search-popover-title {
  padding: 20px 20px 30px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #1768b4;
  line-height: 24px;
}
.me-search-popover-footer {
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.me-search-popover-footer > .el-button + .el-button {
  margin-left: 10px;
}
</style>
