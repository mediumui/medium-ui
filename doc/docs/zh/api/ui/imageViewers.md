### 图片预览(image-viewers)  
***  
>基于<code>el-image-viewers</code>组件实现图片放大预览。支持照片墙和文字缩略展示。  

**预览**
*** 
<ImageViewers-Text/>  
::: details 点击查看代码
``` html
<template>
  <me-image-viewers
    :images="list"
  >
  </me-image-viewers>
</template>
```  

``` js
export default {
  data() {
    return {
      list: [
        {
          fileUrl: "https://img10.360buyimg.com/babel/s590x470_jfs/t20270108/232123/40/11742/47161/659cbb02F9d4b81bf/cff42849e5725d8b.jpg",
        },
        {
          fileUrl:
            "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100043111116/FocusFullshop/CkJqZnMvdDEvMjM2NDYzLzI2LzgwMjgvNDczNjUvNjU5YzRlZjZGMDgyYTYxZDcvMTRlYjExOTk4YTc2YTk1Yi5wbmcSCTQtdHlfMF81NTACOO6LekIWChLpu5Hnmb3osIPnlLXohJHmpIUQAUIUChDmr4_mu6ExMDAw5YePNTQwEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG5Yqb6I2QEAdYzPWi2PQC/cr/s/q.jpg",
        },
      ],
    }
  },
}
```
:::  
**自定义文字**
***  
<ImageViewers-AutoText/>    
::: tip
文字样式预览可以根据业务需求对提示文字进行修改，<code>text="头像信息"</code>
:::  

::: details 点击查看代码
``` html{4}
<template>
  <me-image-viewers
    :images="list"
    text="头像信息"
  >
  </me-image-viewers>
</template>
```
:::

**照片墙**
***  
<ImageViewers-Wall/>  
::: tip
默认展示查看图片文字，照片墙样式需要配置<code>type="wall"</code>
:::  

::: details 点击查看代码
``` html{4}
<template>
  <me-image-viewers
    :images="list"
    type="wall"
  >
  </me-image-viewers>
</template>
```  
:::  

**自定义缩略图尺寸**
***  
<ImageViewers-WallSize/>  
::: tip
照片墙缩略图默认宽高为<code>100px</code>, 可以通过<code>size="50px"</code>修改  
注意：<code>size</code>需要带单位，如<code>px</code>
:::  

::: details 点击查看代码
``` html{5}
<template>
  <me-image-viewers
    :images="list"
    type="wall"
    img-size="50px"
  >
  </me-image-viewers>
</template>
```  
:::  

**参数**
***
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
images|预览图片列表|Array|-|-  
fileUrl|图片地址字段|String|-| fileUrl 
type| 缩略展示方式| String| text/wall|text
text|自定义展示文字，当<code>type="text"</code>时生效| String|-|查看图片 
size|设置图片缩略图尺寸,当<code>type="wall"</code>时生效| String|-| 100px  

**方法**
***
方法名|说明|参数
:---|:---|:---
showImagesViewers|展示图片预览| Function(index: Number)