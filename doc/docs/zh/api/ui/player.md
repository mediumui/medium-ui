### 播放器(player) 
***  
>视频播放器组件，基于<code>video</code>播放器基础上延伸了<code>controller</code>,通过<code>controller</code>实现对播放器操作，如跨组件操作播放、暂停等。

**播放器使用** 
<Player-Default/>  
::: details 点击查看代码
```html
<template>
  <me-player
    :src="url"
    @created="createPlayer"
  ></me-player>
</template>
```
```js
export default {
  data() {
    return {
      controller: null,
      url: "https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4",
    }
  },
  methods: {
    createPlayer(controller) {
      this.controller = controller
    },
  },
}
```  
:::  
::: tip
<code>created</code>会在播放组件初始化成功会回调，同时把生成的<code>controller</code>回传给父组件。
:::