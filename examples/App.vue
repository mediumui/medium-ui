<template>
  <div>
    <me-form
      :model="model"
      :span="12"
    >
      <span slot="head">aaaa</span>
      <me-form-item
        label="设施编号"
        prop="code"
      ></me-form-item>
      <me-form-item
        label="设施状态"
        prop="statusStr"
      >
        <template slot-scope="scope">
          <span>{{ scope.props }}</span>
        </template>
      </me-form-item>
      <me-form-item
        label="创建时间"
        prop="createTime"
      >
        <template v-slot:head> 我是自定义的<i class="el-icon-warning" /> </template>
      </me-form-item>
      <me-form-item
        label="设施名称"
        :col-span="16"
        prop="deviceName"
      ></me-form-item>
      <me-form-item
        label="设施分类"
        :col-span="24"
        prop="class"
      >
      </me-form-item>
    </me-form>
  </div>
</template>

<script>
import MeForm from "../packages/form/src/form.vue"
import MeFormItem from "../packages/form/src/form-item.js"
export default {
  name: "App",
  components: { MeForm, MeFormItem },
  data() {
    return {
      model: {},
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.model = {
            code: "ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112ZYA20240112",
            deviceName: "空调",
            class: "122222",
          }
          resolve()
        }, 1000)
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
