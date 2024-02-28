### 表格(Table) 
***  
**表格使用**
<Table-Default/>  
:::tip
<code>me-table</code>组件兼容<code>el-table</code>所有的<code>props</code>和<code>event</code>，不支持调用<code>el-table</code>中的<code>methods</code>  

<code>me-table-column</code>继承<code>el-table-column</code>,即在<code>el-table-column</code>基础上进行了扩展，兼容所有特性和<code>api</code>。
:::  
::: details 点击查看代码
```html
<template>
  <div class="table">
    <me-table
      @cell-click="onCellClick"
      :request="searchList"
    >
      <me-table-column
        type="index"
        label="序号"
        width="80"
        align="center"
      >
      </me-table-column>
      <me-table-column
        label="姓名"
        prop="name"
        width="200px"
        show-overflow-tooltip
      >
      </me-table-column>
      <me-table-column
        label="年龄"
        prop="age"
      >
      </me-table-column>
      <me-table-column
        label="班级"
        prop="class"
      >
      </me-table-column>
    </me-table>
  </div>
</template>
```
```js
<script>
export default {
  data() {
    return {}
  },
  methods: {
    searchList(params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = [
            {
              name: "张三",
              age: 6,
              class: "一年级",
            },
            {
              name: "李四",
              age: 7,
              class: "一年级",
            },
            {
              name: "王五",
              age: 7,
              class: "一年级",
            },
            {
              name: "赵六",
              age: 6,
              class: "一年级",
            },
            {
              name: "李雷",
              age: 7,
              class: "二年级",
            },
            {
              name: "孙武",
              age: 7,
              class: "二年级",
            },
            {
              name: "秦王",
              age: 7,
              class: "二年级",
            },
            {
              name: "汉祖",
              age: 7,
              class: "二年级",
            },
            {
              name: "元帝",
              age: 8,
              class: "三年级",
            },
          ]
          resolve({
            total: list.length,
            rows: list,
          })
        }, 1000)
      })
    },
    onCellClick(row, column, cell, event) {},
  },
}
</script>
```
:::  
**表格搜索**
<Table-Search/>  
:::tip
表格搜索条件基于<code>me-table-column</code>字段生成，需要进行搜索的字段只需配置<code>search="true"</code>即可，同时兼容<code>me-search-item</code>相应的<code>props</code>,为了避免对原有字段冲突，在<code>me-search-item</code>原有字段加前缀<code>se</code>。详情参考 [搜索组件](/zh/api/ui/search.html)
:::  
::: details 点击查看代码
```html{19,20,26,27}
<template>
  <div class="table">
    <me-table
      @cell-click="onCellClick"
      :request="searchList"
    >
      <me-table-column
        type="index"
        label="序号"
        width="80"
        align="center"
      >
      </me-table-column>
      <me-table-column
        label="姓名"
        prop="name"
        width="200px"
        show-overflow-tooltip
        search
        seNimble
      >
      </me-table-column>
      <me-table-column
        label="年龄"
        prop="age"
        search
        seNimble
      >
      </me-table-column>
      <me-table-column
        label="班级"
        prop="class"
      >
      </me-table-column>
    </me-table>
  </div>
</template>
```
```js
<script>
export default {
  data() {
    return {}
  },
  methods: {
    searchList(params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = [
            {
              name: "张三",
              age: 6,
              class: "一年级",
            },
            {
              name: "李四",
              age: 7,
              class: "一年级",
            },
            {
              name: "王五",
              age: 7,
              class: "一年级",
            },
            {
              name: "赵六",
              age: 6,
              class: "一年级",
            },
            {
              name: "李雷",
              age: 7,
              class: "二年级",
            },
            {
              name: "孙武",
              age: 7,
              class: "二年级",
            },
            {
              name: "秦王",
              age: 7,
              class: "二年级",
            },
            {
              name: "汉祖",
              age: 7,
              class: "二年级",
            },
            {
              name: "元帝",
              age: 8,
              class: "三年级",
            },
          ]
          resolve({
            total: list.length,
            rows: list,
          })
        }, 1000)
      })
    },
    onCellClick(row, column, cell, event) {},
  },
}
</script>

```
:::  
**参数**
***  

参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---  
-|原<code>el-table</code>属性，为了处理数据不支持配置<code>data</code>|Any|-|-  
page|是否使用底部分页功能|Boolean|true|false  
pageSizes|分页可选页码|Array|-|[10, 20, 30, 50, 100]  
request|数据请求响应，异步回调|Function|-|-  

**事件**
***  

事件名称|说明|回调参数
:---|:---|:---  
-|原<code>el-table</code>事件|-  

**方法**
***
方法名|说明|参数
:---|:---|:---
refresh|刷新数据| Function(resetPage: Boolean)  

**me-table-column参数**
***  
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---  
-|原<code>el-table-column</code>属性|Any|-|-  
search|是否搜索|Boolean|true|false  
se-|<code>me-search-item</code>属性，<code>search</code>为<code>true</code>时生效|Any|-|-  
