### 框架(layout) 
***  
>该组件通常用于详情页、编辑页等内页，<code>layout</code>组件设置默认返回、标题和页脚。  

**Layout使用**  

<Layout-Default/>  
::: details 点击查看代码
```html{3-20}
<template>
  <div style="height: 500px; width: 100%; background-color: #f0f2f5; padding: 4px">
    <me-layout title="用户详情">
      <div class="content">
        <el-form :data="model">
          <el-form-item
            label="用户名:"
            prop="userName"
          >
            {{ model.userName }}
          </el-form-item>
          <el-form-item
            label="年龄:"
            prop="age"
          >
            {{ model.age }}
          </el-form-item>
        </el-form>
      </div>
    </me-layout>
  </div>
</template>
```
```js
export default {
  data() {
    return {
      model: {
        userName: "wilson",
        age: 30,
      },
    }
  },
}
```  
:::  
**添加页脚**  
<Layout-Footer/>
::: details 点击查看代码
```html{20-27}
 <template>
  <div style="height: 500px; width: 100%; background-color: #f0f2f5; padding: 4px">
    <me-layout title="用户详情">
      <div class="content">
        <el-form :data="model">
          <el-form-item
            label="用户名:"
            prop="userName"
          >
            {{ model.userName }}
          </el-form-item>
          <el-form-item
            label="年龄:"
            prop="age"
          >
            {{ model.age }}
          </el-form-item>
        </el-form>
      </div>
      <template slot="footer">
        <el-button
          type="primary"
          @click="onConfirm"
          >
          确定
          </el-button>
      </template>
    </me-layout>
  </div>
</template>
```
```js
export default {
  data() {
    return {
      model: {
        userName: "wilson",
        age: 30,
      },
    }
  },
  methods: {
    onConfirm() {
      "确定提示".tips()
    },
  },
}
```  
:::  
::: tip
需要展示页脚固定栏时，使用<code>slot="footer"</code>。当页脚为空时，内容区域会自动填充页脚空间
:::  
**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
title| 页头标题|String|-|-  
loading| 加载中效果，当<code>loading</code>为<code>true</code>时内容区域会出现加载效果|Boolean|true|false  
**Slot**
***
name|说明
:---|:---
-|内容区域
head|页头自定义，注意该自定义为<code>Layout</code>右上角，不会影响页头的返回和标题
footer|页脚自定义，当没有使用该<code>slot</code>时，内容区域会往下填充