<template>
  <div>
    <el-form inline>
      <el-form-item label="输入加密内容：">
        <el-input
          v-model="text"
          @change="textChange"
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    得到加密结果：
    <div class="rsa-result">
      {{ result }}
    </div>
  </div>
</template>

<script>
import Rsa from "../../../../../utils/rsa.js"
export default {
  data() {
    return {
      text: "",
      result: "",
      publicKey:
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvJH/BmeW+Kf3t0Z5RCnKQpGal8/PsGuANTUxU9X0kRqOoQNJM39kN6r9WLfiwkVLsQ9ZBdnxwsLVdWfhPAnTW9k3xFNFq9QQ1Nydki/HMzLLQpUI5CiH5kHP58aLny6NdX6JdYX+QWr+a4CMsO7GnhoB+shMB1ySIvAyj5Xf3+Ni8SL4fssMwDGhcaJxylX2vrdKY0KWeatJ/lteRtgU0ms5AKHdPz0/jz0ht06o+d6lMhojpPeNfJyRVkYKaeF99SP1EJbPUqYtkUu9a3KYUzGgDoyRfPJ8bIlgD82a1H2mUIjJupZco0pTYS664c0ID0aLCLlhmpZHa6Vlfd2/ZQIDAQAB",
    }
  },
  created() {
    Rsa.init(this.publicKey)
  },
  methods: {
    textChange() {
      this.result = Rsa.encrypt(this.text)
    },
  },
}
</script>

<style>
.rsa-result {
  width: 500px;
  word-wrap: break-word;
}
</style>
