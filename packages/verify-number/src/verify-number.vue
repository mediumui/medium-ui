<template>
  <div class="zy-verify-number">
    <div
      :id="canvasId"
      style="height: 30px"
      @click="refresh"
    />
    <input
      class="zy-verify-number-input"
      type="text"
      v-model="inputCode"
      ref="inputRef"
      autofocus
      @keyup="startVerify"
    />
    <slot name="result">
      <template v-if="status != 'none'">
        <span
          v-if="status == 'success'"
          class="zy-verify-number-success"
        >
          验证成功
        </span>
        <span
          v-else-if="status == 'fail'"
          class="zy-verify-number-fail"
        >
          验证失败
        </span>
      </template>
    </slot>
  </div>
</template>

<script>
import GVerify from "./verify"
export default {
  name: "me-verify-number",
  data() {
    return {
      inputCode: "", //输入的验证码
      verifyValue: null, //生成的校验器
      status: "none",
    }
  },
  props: {
    verifyType: {
      type: String,
      default: "number", //number 数字，blend字母数字混合
    },
    //画布id，这里随机生成一个id，为了实现多个人机交互
    canvasId: {
      type: String,
      default: () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
          return v.toString(16)
        })
      },
    },
  },
  watch: {
    status: {
      immediate: true,
      handler(val) {
        this.$emit("verify", val)
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.verifyValue = new GVerify({
        id: this.canvasId, // 绘制验证码的区域id
        type: this.verifyType,
      })
    })
  },
  methods: {
    refresh(reset = true) {
      if (reset) {
        this.status = "none"
      }
      this.verifyValue.refresh()
    },
    startVerify() {
      //输入长度不够，不进行校验
      if (this.inputCode.length < 4) return
      const res = this.verifyValue.validate(this.inputCode)

      //如果验证失败则进行刷新验证码
      if (!res) {
        this.status = "fail"
        this.refresh(false)
      } else {
        this.status = "success"
      }
    },
  },
}
</script>
<style scoped>
.zy-verify-number {
  display: flex;
  align-items: center;
}
.zy-verify-number-input {
  margin-left: 10px;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  outline: none;
  font-size: 12px;
  text-indent: 10px;
  letter-spacing: 2px;
}

.zy-verify-number-success {
  color: darkgreen;
  margin-left: 10px;
  font-size: 14px;
}

.zy-verify-number-fail {
  color: red;
  margin-left: 10px;
  font-size: 14px;
}
</style>
