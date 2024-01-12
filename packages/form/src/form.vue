<template>
  <div class="me-form">
    <me-form-head
      v-if="title || $slots.head"
      :title="title"
    >
      <slot name="head"></slot>
    </me-form-head>
    <!-- 表格内容 -->
    <form-table
      :slots="$slots.default"
      :span="span"
      :labelWidth="labelWidth"
      :model="model"
    >
    </form-table>
  </div>
</template>

<script>
import MeFormHead from "./form-head.vue"
export default {
  name: "Form",
  components: {
    MeFormHead,
    formTable: {
      props: {
        slots: Array,
        span: Number,
        labelWidth: String,
        model: Object,
      },
      render(h) {
        const { slots, span, labelWidth, model } = this.$props
        let totalSpan = 0
        let tdRows = []
        const trRows = []
        for (let i = 0; i < slots.length; i++) {
          const slot = slots[i]
          if (!slot.tag || slot.tag.indexOf("form-item") == -1) continue
          const propsData = slot.componentOptions?.propsData
          let colSpan = propsData.colSpan ?? span
          let labelText = propsData.label
          const prop = propsData.prop ?? ""
          //每个td的宽度不能超过24
          if (colSpan > 24) colSpan = 24
          const slotScope = slot.data.scopedSlots
          //标题VNode
          if (slotScope && slotScope.head) {
            //自定义标题格式
            labelText = slotScope.head({ props: propsData, model })
          }
          const labelVNode = h(
            "div",
            {
              class: "me-form-item me-form-item-label",
              style: {
                width: labelWidth,
              },
            },
            labelText
          )
          //   const componentInstance = await slot.componentInstance
          //   console.log(componentInstance, "1222")
          //内容VNode
          let text = model[prop] ?? "——"
          if (slotScope && slotScope.default) {
            text = slotScope.default({ props: propsData, model })
          }
          const tdItemVNode = h(
            "div",
            {
              class: "me-form-item",
            },
            text
          )
          const box = h(
            "div",
            {
              class: "me-form-item-box",
            },
            [labelVNode, tdItemVNode]
          )
          //tdVNode
          const tdVNode = h(
            "td",
            {
              attrs: {
                colspan: colSpan, //占的宽度
              },
            },
            [box]
          )
          if (totalSpan + colSpan <= 24) {
            tdRows.push(tdVNode)
          } else {
            trRows.push(tdRows)
            tdRows = []
            totalSpan = 0
            tdRows.push(tdVNode)
          }
          totalSpan += colSpan
        }
        if (tdRows.length > 0) {
          trRows.push(tdRows)
        }
        //检查tr是否填充满，如果不满则补充至24 colspan
        trRows.forEach((tds) => {
          let width = 0
          for (let i = 0; i < tds.length; i++) {
            const td = tds[i]
            width += td.data.attrs.colspan
          }
          if (width < 24) {
            const td = h("td", {
              attrs: {
                colspan: 24 - width, //占的宽度
              },
            })
            tds.push(td)
          }
        })
        const tableVNode = []
        trRows.forEach((tr) => {
          const trVNode = h("tr", tr)
          tableVNode.push(trVNode)
        })
        //24个span占位符
        const lines = []
        for (let i = 0; i < 24; i++) {
          const line = h("td")
          lines.push(line)
        }
        const footer = h(
          "tr",
          {
            directives: [
              {
                name: "show",

                value: this.isShow,
              },
            ],
          },
          lines
        )
        //表格
        const table = h(
          "table",
          {
            attrs: {
              border: "1", //占的宽度
            },
          },
          [...tableVNode, footer]
        )
        return table
      },
    },
  },
  props: {
    //表单标题
    title: String,
    //字段名宽度
    labelWidth: {
      type: String,
      default: "180px",
    },
    //一个字段占列宽度，总列宽24
    span: {
      type: Number,
      default: 8,
    },
    //数据源
    model: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style>
.me-form {
  display: flex;
  flex-direction: column;
}
.me-form table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #dcdfe6;
  table-layout: fixed;
  border-spacing: 1px;
}
.me-form td {
  height: 1px;
  width: 100%;
  background: #fff;
}
.me-form-item-box {
  display: flex;
  flex-direction: row;
  margin: -1px;
  height: 100%;
}
.me-form-item {
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #606266;
  line-height: 20px;
  box-sizing: border-box;
  width: 100%;
  word-break: break-all;
  line-break: anywhere;
  display: flex;
  align-items: center;
}
.me-form-item-label {
  background: #f5f7fa;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  padding: 13px 20px;
  border-right: 1px solid #dcdfe6;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-top: -1px;
  margin-bottom: -1px;
}
/* 当存在标题时，表格不展示border-top */
.me-form-head + table {
  border-top: none;
  margin-top: -1px;
}
/* 当两个form相邻时，标题不展示border-top */
.me-form + .me-form .me-form-head {
  border-top: none;
  margin-top: -1px;
}
/* 当两个form相邻时，表格不展示border-top */
.me-form + .me-form table {
  border-top: none;
  margin-top: -1px;
}
</style>
