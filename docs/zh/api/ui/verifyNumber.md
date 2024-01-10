# 人机交互(me-verify-number)
::: warning 
人机交互组件提供的是4位数字或字母校验，当用户输入长度大于4会通过<code>@verify</code>返回校验结果。  
如校验失败，会在返回校验结果的同时刷新校验码。  
如校验成功，会保持当前的校验码。
:::
> 示例  
  
<Verify-Number/>
::: details 点击查看代码  
``` html
<template>
  <div class="verify-box">
    <me-verify-number v-model="status" @verify="change"></me-verify-number>
  </div>
</template>
```  

``` js
export default {
  data() {
    return {
      status: 'none',
    }
  },
  methods: {
    result(val) {
      this.status = val
    },
  },
}
```
:::
> 自定义校验结果  

<Verify-Result/>  
::: tip  
右侧提示开放<code>slot</code>实现自定义校验结果
:::  

::: details 点击查看代码  
``` html
<template>
  <div class="verify-box">
    <me-verify-number v-model="status" @verify="change">
      <template slot="result">
        {{ status }}
      </template>
    </me-verify-number>
  </div>
</template>
```  

``` js
export default {
  data() {
    return {
      status: 'none',
    }
  },
  methods: {
    result(val) {
      this.status = val
    },
  },
}
```  
