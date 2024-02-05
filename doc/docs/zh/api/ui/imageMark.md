### 图片标注(imageMark) 
***  
>主要用于项目中对图片关键点位进行标注和展示信息作用，支持一张图片多个标注。  

**imageMark使用**  

<ImageMark-Default/>    
::: details 点击查看代码
``` html{2-10}
<template>
  <div style="width: 800px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
    >
    </me-image-mark>
    获取到的点位： {{ points }}
  </div>
</template>
```  

``` js{5-6}
<script>
export default {
  data() {
    return {
      points: [],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>
```
:::  
:::tip
当点击图片中的位置时，组件会记录该点位基于<code>basis-width</code>的坐标位置，当再次点击该点位时会移除该点位数据。
:::  
**禁用状态** 
***  
<ImageMark-Disabled/>    
::: details 点击查看代码
``` html{2-11}
<template>
  <div style="width: 500px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
      :disabled="true"
    >
    </me-image-mark>
    获取到的点位： {{ points }}
  </div>
</template>
```  

``` js{5-14}
<script>
export default {
  data() {
    return {
      points: [
        { x: 272, y: 161 },
        { x: 468, y: 158 },
        { x: 577, y: 267 },
        { x: 190, y: 344 },
        { x: 104, y: 124 },
        { x: 547, y: 46 },
        { x: 706, y: 286 },
      ],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>
```
:::  
::: warning  
当<code>v-model</code>存在数值时，<code>basis-width</code>应为该为坐标点获取时的图片宽度。
:::  

**自定义坐标点**  

<ImageMark-Custom/>    
::: details 点击查看代码
``` html{2-17}
<template>
  <div style="width: 500px">
    <me-image-mark
      :src="src"
      v-model="points"
      :basis-width="800"
      :disabled="true"
    >
      <template slot-scope="{ point }">
        <div class="point">
          <div>x坐标：{{ point.x }}</div>
          <div>Y坐标：{{ point.y }}</div>
          <div>设备名称：{{ point.deviceName }}</div>
        </div>
      </template>
    </me-image-mark>
  </div>
</template>
```  

``` js{5-14}
<script>
export default {
  data() {
    return {
      points: [
        { x: 272, y: 161, deviceName:'摄像头' },
        { x: 468, y: 158, deviceName:'垃圾桶' },
        { x: 577, y: 267, deviceName:'消防栓' },
        { x: 190, y: 344,deviceName:'消防通道' },
        { x: 104, y: 124,deviceName:'走廊' },
        { x: 547, y: 46 ,deviceName:'墙'},
        { x: 706, y: 286,deviceName:'走廊' },
      ],
      src: "https://fd.co188.com/group1/M03/3A/CA/rBBhH11HoNuABNx5AAJNWay7lLw069.jpg",
    }
  },
}
</script>
```  
```css
.point {
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-wrap: nowrap;
  padding: 12px;
  border: 1px solid #dbdbdb;
}
```
:::  
:::tip
现实业务中经常需要对每个坐标点展示不同的信息，可以通过<code>slot-scope</code>进行自定义,当鼠标移动到坐标点时会展示自定义信息。
:::  

**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
value/v-model|标注的点位信息|Array|-|-
disabled|是否禁用|Boolean|true|false
basisWidth|基准宽度，如果<code>value</code>存在初始值，该值必传|Number|-|-
tool|顶部工具栏列表,当为空时不展示|Array|'add'、'lower'|["add", "lower"]