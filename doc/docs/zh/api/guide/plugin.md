**功能延展**
***  
>为了提升开发效率，对部分原生功能进行了延展，其中包括字符串转<code>md5</code>、字符串转<code>json</code>、类型判断等。  

## **字符串转Md5** 
***  

<String-Md5/>  
:::tip
针对需要转换<code>md5</code>的字符串，只需要字符串直接调用<code>toMd5()</code>函数即可，<code>md5</code>格式为<code>32</code>位小写。
:::  

::: details 查看代码
``` html
<template>
  <div class="md5">
    <div>原始文本：{{ message }}</div>
    <el-button @click="toMd5">转换md5</el-button>
    <div>转换结果： {{ md5Str }}</div>
  </div>
</template>
```  

``` js{10}
export default {
  data() {
    return {
      message: "hello world",
      md5Str: "",
    }
  },
  methods: {
    toMd5() {
      this.md5Str = this.message.toMd5()
    },
  },
}
```
:::  
## **类型判断** 
***  
<String-Type/>  
::: warning  
其中手机格式判断公式为以1开头的11位纯数字字符串，不对号码字段进行判断。
:::  
::: details 查看代码
``` html
<template>
<div>
    <div class="string-type">
      <el-input
        placeholder="请输入文本"
        v-model="msg"
      >
      </el-input>
      <el-button @click="isNumber">是否为数字</el-button>
      <el-button @click="isMobile">是否为手机</el-button>
      <el-button @click="isEmail">是否为邮箱</el-button>
      <el-button @click="isEmpty">是否为空</el-button>
    </div>
    {{ result }}
</div>
</template>
```  

``` js{10,13,16,19}
export default {
  data() {
    return {
      msg: "",
      result: "",
    }
  },
  methods: {
    isNumber() {
      this.result = `是否为数字：${this.msg.isNumber()}`
    },
    isMobile() {
      this.result = `是否为手机：${this.msg.isMobile()}`
    },
    isEmail() {
      this.result = `是否为邮件：${this.msg.isEmail()}`
    },
    isEmpty() {
      this.result = `是否为空：${this.msg.isEmpty()}`
    },
  },
}
```
:::  

## **消息提示** 
***  
<String-Message/>
::: tip
用来显示「成功<code>success</code>、警告<code>warning</code>、消息<code>info</code>、错误<code>error</code>」类的操作反馈。默认为成功
:::  

::: details 查看代码
``` html
<template>
  <div>
    <el-button @click="showSuccess">成功</el-button>
    <el-button @click="showWarning">警告</el-button>
    <el-button @click="showError">错误</el-button>
    <el-button @click="showInfo">提示</el-button>
  </div>
</template>
```  

``` js{5,9,13,17}
export default {
  methods: {
    showSuccess() {
      const message = "点击了成功消息"
      message.tips()
    },
    showWarning() {
      const message = "点击了警告消息"
      message.tips("warning")
    },
    showError() {
      const message = "点击了错误消息"
      message.tips("error")
    },
    showInfo() {
      const message = "点击了提示消息"
      message.tips("info")
    },
  },
}
```
:::  