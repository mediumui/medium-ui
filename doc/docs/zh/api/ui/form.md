### 表单(form) 
***  
>表单功能用于详情数据展示  

**表单使用** 
***  
<Form-Default/>  
>当不设置<code>title</code>时，表单头部的标题会自动隐藏
::: details 点击查看代码
``` html
<template>
  <me-form
    :model="model"
    title="设备信息"
  >
    <me-form-item
      label="设施编号"
      prop="code"
    ></me-form-item>
    <me-form-item
      label="设施状态"
      prop="statusStr"
    >
    </me-form-item>
    <me-form-item
      label="创建时间"
      prop="createTime"
    >
    </me-form-item>
    <me-form-item
      label="设施名称"
      prop="deviceName"
    >
    </me-form-item>
    <me-form-item
      label="设施分类"
      prop="class"
    >
    </me-form-item>
  </me-form>
</template>  
```  
```js  
export default {
  data() {
    return {
      model: {
        code: "ZYA20240112",
        deviceName:"空调",
        class: "1222",
        statusStr: '异常',
        createTime: "2024-01-12 12:00:00",
      },
    }
  },
}
```
:::  
**自定义标题** 
***  
<Form-AutoTitle/>
::: tip
<code>me-form</code> 根据业务需求可以对标题进行自定义<code>slot="head"</code>,当自定义标题可以不传<code>title</code>。
:::  

::: details 点击查看代码
``` html {5,6,7}
<template>
  <me-form
    :model="model"
  >
    <template slot="head">
      <span>设备信息<i class="el-icon-question" /></span>
    </template>
    <me-form-item
      label="设施编号"
      prop="code"
    ></me-form-item>
    <me-form-item
      label="设施状态"
      prop="statusStr"
    >
    </me-form-item>
    <me-form-item
      label="创建时间"
      prop="createTime"
    >
    </me-form-item>
    <me-form-item
      label="设施名称"
      prop="deviceName"
    >
    </me-form-item>
    <me-form-item
      label="设施分类"
      prop="class"
    >
    </me-form-item>
  </me-form>
</template>
```
:::  
**自定义字段** 
***  
<Form-AutoProp/>
::: tip
<code>me-form</code>表单默认展示字段为文本，当需要对字段样式、交互时，可以对字段进行自定义.
:::
::: details 点击查看代码
``` html {14,15,16}
<template>
  <me-form
    :model="model"
    title="设备信息"
  >
    <me-form-item
      label="设施编号"
      prop="code"
    ></me-form-item>
    <me-form-item
      label="设施状态"
      prop="statusStr"
    >
    <template slot-scope="{ model }">
      <span style="color: red">{{ model.statusStr }}</span>
    </template>
    </me-form-item>
    <me-form-item
      label="创建时间"
      prop="createTime"
    >
    </me-form-item>
    <me-form-item
      label="设施名称"
      prop="deviceName"
    >
    </me-form-item>
    <me-form-item
      label="设施分类"
      prop="class"
    >
    </me-form-item>
  </me-form>
</template>
```
:::  

**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
title|表单标题|String|-|-
labelWidth|字段标题宽度|String|-|180px
span|字段占行宽度|Number|-|8
model|数据源|Object|-|-  

**Slot**
***
name|说明
:---|:---
-|表单字段配置,必须是<code>me-form-item</code>，否则会被组件过滤掉
head|标题自定义  

**form-item参数**
***  
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
label|字段名|String|-|-
prop|字段key，组件根据<code>prop</code>读取<code>model</code>中的值|String|-|-
colSpan|字段占行宽度|Number|-|8

**form-item Scoped Slot**
***
name|说明
:---|:---
-|自定义字段的内容，参数为 { props, model}
head|自定义字段标题，参数为 { props, model}