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
export default {
  name: "me-menu-button",
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
      this.buttons = buttons
      this.menuList = menuList
    },
  },
}
</script>

<style>
.me-menu-button {
  display: flex;
  flex-direction: row;
}
</style>
