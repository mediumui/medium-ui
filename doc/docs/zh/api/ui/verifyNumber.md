### 人机交互(me-verify-number) 

***
>人机交互组件提供的是4位数字或字母校验，当用户输入长度大于4会通过<code>@verify</code>返回校验结果。  
>如校验失败，会在返回校验结果的同时刷新校验码。  
>如校验成功，会保持当前的校验码。

**纯数字校验** 
***
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
**字母数字混合校验**
***  

<Verify-Blend/>  

>人机交互默认为4位随机数字，同时支持4位字母数字混合，<code>verify-type</code>属性支持<code>number</code>和<code>blend</code>, <code>blend</code>为字母数字混合,<code>number</code>为纯数字
::: details 点击查看代码  
``` html
<template>
  <div class="verify-box">
    <me-verify-number v-model="status" @verify="change" verify-type="blend">
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
:::  

**自定义校验结果**
***
<Verify-Result/>  
>右侧提示开放<code>slot</code>实现自定义校验结果
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
:::  
**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
verifyType|人机交互类型|String|number/blend|number

**事件**
***
事件名称|说明|回调参数
:---|:---|:---
verify|当出发人机交互时回调校验结果,<code>none</code>未校验，<code>success</code>校验成功，<code>fail</code>校验失败| (result: String)  
**方法**
***
方法名|说明|参数
:---|:---|:---
refresh|刷新验证码| -
startVerify|校验验证码是否正确| -

**Slot**
***
name|说明
:---|:---
result|校验结果自定义
