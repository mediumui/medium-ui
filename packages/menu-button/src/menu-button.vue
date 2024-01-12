<template>
  <div class="me-menu-button">
    <me-menu-button-div
      v-for="(button, index) in buttons"
      :key="`buttons_${index}_${button.componentOptions.propsData.label}`"
      :node="button"
    >
    </me-menu-button-div>
    <el-dropdown v-if="menuList.length > 0">
      <el-button type="text">更多</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(button, index) in menuList"
          :key="`buttons_${index}_${button.componentOptions.propsData.label}`"
          :disabled="button.componentOptions.propsData.disabled"
        >
          <me-menu-button-div :node="button"> </me-menu-button-div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div v-show="false">
      <slot />
    </div>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: "menu-button",
  components: {
    MeMenuButtonDiv: {
      functional: true,
      render(h, ctx) {
        const { node } = ctx.props
        return node
      },
    },
  },
  data() {
    return {
      buttons: [],
      menuList: [],
    }
  },
  props: {
    number: {
      type: Number,
      default: 3,
    },
  },
  watch: {
    "$slots.default": {
      deep: true,
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.__updateSlots()
        })
      },
    },
  },
  methods: {
    __updateSlots() {
      const slots = this.$slots.default
      const buttons = []
      const menuList = []
      for (let i = 0; i < slots.length; i++) {
        const slot = slots[i]
        //如果该组件隐藏了，则跳过
        if (_.get(slot.data, "directives[0].rawName") == "v-show" && _.get(slot.data, "directives[0].value") == false) {
          continue
        }
        //过滤掉无意义的slot
        if (!slot.tag) continue
        //优先选出下拉菜单外的组件
        if (buttons.length < this.number) {
          buttons.push(slot)
          continue
        } else {
          menuList.push(slot)
        }
      }
      //如果下拉列表只有一个的时候，更多按钮位置展示该按钮
      if (menuList.length == 1) {
        buttons.push(menuList[0])
      } else {
        this.menuList = menuList
      }
      this.buttons = buttons
    },
  },
}
</script>

<style>
.me-menu-button {
  display: flex;
  flex-direction: row;
}
.me-menu-button .el-button + .el-button {
  margin-left: 10px;
}
.me-menu-button .el-button + .el-dropdown {
  margin-left: 10px;
}
</style>
