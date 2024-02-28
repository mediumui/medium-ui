### 搜索(search) 
***  
>搜索组件用于多条件搜索业务场景。  

**组件使用**  
<Search-Default/> 
:::tip
<code>me-search</code>必须包含的组件名为<code>me-search-item</code>。否则会造成布局错乱。左侧
<font color=red>快捷搜索</font>字段名以<code>first</code>开头。  
<code>me-search</code>需要传<code>v-model</code>，组件根据子项和搜索条件自动生成对应<code>key</code>和<code>value</code>
:::  
::: details 点击查看代码
```html{2-24}
<template>
  <div>
    <me-search
      v-model="model"
      @search="onSearch"
    >
      <me-search-item
        prop="name"
        label="姓名"
      >
      </me-search-item>
      <me-search-item
        prop="age"
        label="年龄"
      >
      </me-search-item>
      <me-search-item
        prop="class"
        label="班级"
      >
      </me-search-item>
    </me-search>
    <div>搜索条件：{{ model }}</div>
  </div>
</template>
```  
```js{2-13}
<script>
export default {
  data() {
    return {
      model: {},
    }
  },
  methods: {
    onSearch(params) {
      console.log(params)
    },
  },
}
</script>
```
:::

**快捷搜索设置**  
<Search-Nimble/>
:::tip
需要对字段进行快捷搜索，在<code>me-search-item</code>配置<code>nimble="true"</code>,<code>me-search</code>自动解析并生成对应字段，字段名格式为<code>first+prop</code>
:::
::: warning
快捷搜索只支持文本搜索且搜索条件唯一，即切换快捷搜索条件时旧的搜索条件会被清空。
:::
::: details 点击查看代码
```html{10,16}
<template>
  <div>
    <me-search
      v-model="model"
      @search="onSearch"
    >
      <me-search-item
        prop="name"
        label="姓名"
        nimble
      >
      </me-search-item>
      <me-search-item
        prop="age"
        label="年龄"
        nimble
      >
      </me-search-item>
      <me-search-item
        prop="class"
        label="班级"
      >
      </me-search-item>
    </me-search>
     <div>搜索条件：{{ model }}</div>
  </div>
</template>
```  
```js
<script>
export default {
  data() {
    return {
      model: {},
    }
  },
  methods: {
    onSearch(params) {
      console.log(params)
    },
  },
}
</script>
```
:::
**搜索类型**  
<Search-Type/>   
:::tip
高级查询支持<code>input</code>、<code>select</code>、<code>cascader</code>等不同数据类型，默认为<code>input</code>  
对于<code>select</code>和<code>cascader</code>,需要配置<code>api</code>或<code>item-list</code>支持下拉数据传入
:::  
::: warning
<code>api</code>和<code>item-list</code>二选一配置，当两者均配置时<code>api</code>优先级高于<code>item-list</code>  
<code>api</code>类型必须为<code>Function</code>，且为异步回调。
:::
::: details 点击查看代码  
```html{20,21,27,28}
<template>
  <div>
    <me-search
      v-model="model"
      @search="onSearch"
    >
      <me-search-item
        prop="name"
        label="姓名"
      >
      </me-search-item>
      <me-search-item
        prop="age"
        label="年龄"
      >
      </me-search-item>
      <me-search-item
        prop="sex"
        label="性别"
        type="select"
        :item-list="sexList"
      >
      </me-search-item>
      <me-search-item
        prop="class"
        label="班级"
        type="select"
        :api="getClassList"
      >
      </me-search-item>
    </me-search>
    <div>搜索条件：{{ model }}</div>
  </div>
</template>
```
```js  
<script>
export default {
  data() {
    return {
      model: {},
      sexList: [
        { label: "男", id: "0" },
        { label: "女", id: "1" },
      ],
    }
  },
  methods: {
    onSearch(params) {
      console.log(params)
    },
    getClassList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = [
            {
              label: "一年级",
              id: "1",
            },
            {
              label: "二年级",
              id: "2",
            },
            {
              label: "三年级",
              id: "3",
            },
            {
              label: "四年级",
              id: "4",
            },
            {
              label: "五年级",
              id: "5",
            },
            {
              label: "六年级",
              id: "6",
            },
          ]
          resolve(list)
        }, 1000)
      })
    },
  },
}
</script>
```
:::  

**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
value|搜索条件|Object|-|-  

**Slot**
***
name|说明
:---|:---
-|搜索条件,必须为<code>me-search-item</code>  

**事件**
***
事件名称|说明|回调参数
:---|:---|:---  
search|点击搜索/重置按钮回调|(params)=>  

**me-search-item参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
prop|搜索字段名key|String|-|-
label|搜索字段名|String|-|-
nimble|是否支持快捷搜索|Boolean|true|false
type|组件类|String|input、select、cascader、daterange、monthrange、datetimerange</code>|input
params|额外参数，当type为<code>api</code>发生请求时会回传该值|Object|-|{}
multiple|是否支持多选,当<code>type</code>为<code>select</code>或<code>cascader</code>时生效|Boolean|true|false
api|远程获取数据函数,<code>type</code>为<code>select</code>、<code>cascader</code>时生效|Function|-|-
itemList|本地数据,<code>type</code>为<code>select</code>、<code>cascader</code>时生效，当<code>api</code>配置时该字段无效|Object/Array|-|-
props|动态配置下拉框字段属性，参考<code>el-cascader</code>配置,<code>type</code>为<code>select</code>、<code>cascader</code>时生效|Object|-|{label: "label",value: "id",children: "children"}  
maxlength|输入文本最大长度,<code>type="input"有效</code>|Number|-|-
placeholder|输入提示语,组件默认根据<code>type</code>类型生成|String|-|-
valueFormat|<code>type</code>为<code>daterange</code>、<code>monthrange</code>、<code>datetimerange</code>时有效,用于输出格式|String|-|-