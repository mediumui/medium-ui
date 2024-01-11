### 菜单按钮(menu-button) 

***  
>菜单按钮用于按钮量较多场景。为了方便节省空间，对部分按钮进行折叠。  

**菜单使用** 
***
<MenuButton-default/>
>菜单按钮需要<code>me-menu-button</code>和<code>me-menu-button-item</code>搭配使用。  
>当点击事件发生时会触发<code>@click</code>事件。
::: details 点击查看代码 
``` html
<template>
  <me-menu-button>
    <me-menu-button-item
      label="编辑"
      @click="onEdit"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="删除"
      @click="onDelete"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="查看"
      @click="onInfo"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="禁用"
      @click="onDisabled"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="启用"
      @click="onOpen"
    >
    </me-menu-button-item>
  </me-menu-button>
</template>
``` 
``` js
export default {
  methods: {
    onDelete() {
      this.$message.success("点击了删除按钮")
    },
    onEdit() {
      this.$message.success("点击了编辑按钮")
    },
    onInfo() {
      this.$message.success("点击了查看按钮")
    },
    onDisabled() {
      this.$message.success("点击了禁用按钮")
    },
    onOpen() {
      this.$message.success("点击了启用按钮")
    },
  },
}
```
:::  
**常用按钮数量修改** 
***  
> 根据业务需求不同，需要暴露不同常用按钮数量，非常用按钮才折叠至下拉列表。  
> 通过修改<code>number</code>值实现展示常用按钮数量。  

<MenuButton-number/>  

::: details 点击查看代码 
``` html {2}
<template>
  <me-menu-button :number="2">
    <me-menu-button-item
      label="编辑"
      @click="onEdit"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="删除"
      @click="onDelete"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="查看"
      @click="onInfo"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="禁用"
      @click="onDisabled"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="启用"
      @click="onOpen"
    >
    </me-menu-button-item>
  </me-menu-button>
</template>
``` 
:::  
**禁用按钮** 
***  
><code>me-menu-button-item</code>支持禁用按钮，<code>disabled</code>默认值为<code>false</code>。当<code>disabled</code>为<code>true</code>时该按钮为禁用状态。  
<MenuButton-disabled/>  
::: details 点击查看代码 
``` html {6}
<template>
  <me-menu-button>
    <me-menu-button-item
      label="编辑"
      @click="onEdit"
      :disabled="true"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="删除"
      @click="onDelete"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="查看"
      @click="onInfo"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="禁用"
      @click="onDisabled"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="启用"
      @click="onOpen"
    >
    </me-menu-button-item>
  </me-menu-button>
</template>
``` 
:::  
**二次确认** 
***  
>当按钮触发时，为了避免因为用户误触发而对数据进行修改，通常需要对按钮进行二次确认。当按钮配置<code>message</code>字段时，组件在响应前进行二次确认，当用户确认后才回调<code>@click</code> 
  
<MenuButton-confirm/>  
::: details 点击查看代码 
``` html {6,12,23,29}
<template>
  <me-menu-button>
    <me-menu-button-item
      label="编辑"
      @click="onEdit"
      message="确定进入编辑页面？"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="删除"
      @click="onDelete"
      message="确定删除该数据吗?"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="查看"
      @click="onInfo"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="禁用"
      @click="onDisabled"
      message="确定禁用该数据？"
    >
    </me-menu-button-item>
    <me-menu-button-item
      label="启用"
      @click="onOpen"
      message="确定启用该数据？"
    >
    </me-menu-button-item>
  </me-menu-button>
</template>
``` 
:::  
**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
number|常用按钮展示个数|Number|-|3  
**Slot**
***
name|说明
:---|:---
-|定义按钮  

**menu-button-item参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
label|按钮文本|String|-|-  
message|二次确认文本|String|-|-  
disabled|是否禁用按钮|Boolean|true/false|false 

**menu-button-item事件**
***
事件名称|说明|回调参数
:---|:---|:---
click|当点击按钮时触发事件，如果配置了<code>message</code>，会在用户确认二次确认后返回| - 