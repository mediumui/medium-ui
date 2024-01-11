**npm安装**
***  

1、安装依赖
```sh  
npm install medium-ui
```  
2、引入文件
```js
import Vue from "vue"
import Medium from "medium-ui"
import "medium-ui/dist/medium-ui.css" // 引用样式
Vue.use(Medium)
```
**自定义组件前缀**
*** 
>组件名格式默认为<code>me-***-***</code>,为了避免跟别的组件库出现重名，支持对组件前缀<code>prefix</code>进行修改。  

定义组件前缀
```js
// main.js
Vue.use(Medium, {prefix: 'zy-'})
```
在页面中使用
```html
<template>
    <zy-text></zy-text>
</template>
```
