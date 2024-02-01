### 播放器(player) 
***  
>视频播放器组件，基于<code>video</code>播放器基础上扩展了<code>PlayerController</code>,通过<code>PlayerController</code>实现对播放器操作，如跨组件操作播放、暂停等。

**播放器使用** 
<Player-Default/>  
::: details 点击查看代码
```html
<template>
 <div id="player-default"></div>
</template>
```
```js
import PlayerController from "medium-ui/utils/playerController"
export default {
  data() {
    return {
      controller: null,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    }
  },
  created() {
    this.controller = new PlayerController({
      id: "player-default",
      src: this.url,
    })
  },
}
```  
:::  
**配置播放器属性**  
<Player-Props/>  
::: details 点击查看代码
```html
<template>
 <div id="player-props"></div>
</template>
```
```js{13}  
import PlayerController from "medium-ui/utils/playerController"
export default {
  data() {
    return {
      controller: null,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    }
  },
  created() {
    this.controller = new PlayerController({
      id: "player-props",
      src: this.url,
      autoplay: true,
    })
  },
}
```  
:::  
::: tip
<code>PlayerController</code>组件支持<code>video</code>标签的所有原生属性，可以根据需求自由配置。
:::  

**播放器事件回调**  
<Player-Event/>  
::: details 点击查看代码
```html
<template>
 <div id="player-event"></div>
</template>
```
```js{14,15,16}  
import PlayerController from "medium-ui/utils/playerController"
export default {
  data() {
    return {
      controller: null,
      url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    }
  },
  created() {
    this.controller = new PlayerController({
      id: "player-props",
      src: this.url,
      autoplay: true,
      onplay(event, controller) {
        console.log("开始播放了")
      },
    })
  },
}
```  
:::  
::: tip
<code>PlayerController</code>可以同时配置事件函数回调。同时<code>PlayerController</code>中保留播放器实例<code>controller.video</code>,可以对播放器实例进行事件监听。
:::  

**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---  
id| 元素id|string|-|-  
cache| 是否支持缓存，如果为<code>true</code>会把播放进度缓存至本地，下次自动续播|boolean|true|false  

**参数**
***
名称|说明|
:---|:---
onwaiting| 视频加载中
onloadedmetadata| 源数据被加载完成后触发
onplay | 当播放器已就绪可以开始播放时触发
onplaying|当播放器已开始播放时触发
onpause| 当播放器暂停时触发
onended|当视频播放完成后触发
onfullScreenChange| 当播放器全屏状态发生变化时触发
onprogress|当播放进度发生变化时触发