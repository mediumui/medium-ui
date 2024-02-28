<template>
  <div class="table">
    <me-table
      @cell-click="onCellClick"
      :request="searchList"
    >
      <me-table-column type="selection"></me-table-column>
      <me-table-column
        type="index"
        label="序号"
        width="50"
        align="center"
      ></me-table-column>
      <me-table-column
        prop="settledTypeStr"
        label="入驻类型"
        minWidth="120px"
        align="left"
        show-overflow-tooltip
      >
        <template slot-scope="scope">{{ scope.row.settledTypeStr }}aaaa</template>
        <template #header="header">{{ header.column.label }}标题</template>
      </me-table-column>
      <me-table-column
        prop="name"
        label="企业名称"
        align="left"
        minWidth="220px"
        show-overflow-tooltip
        search
        :se-maxlength="50"
        seNimble
      >
      </me-table-column>
      <me-table-column
        prop="typeName"
        label="企业类型"
        align="center"
        show-overflow-tooltip
      ></me-table-column>
      <me-table-column
        prop="memberCount"
        label="企业人数"
        align="left"
        minWidth="80px"
        show-overflow-tooltip
      ></me-table-column>
      <me-table-column
        prop="contacts"
        label="客户联系人"
        align="center"
        minWidth="150px"
        show-overflow-tooltip
        search
        seNimble
      ></me-table-column>
      <me-table-column
        prop="contactsPhone"
        label="客户联系人电话"
        width="150"
        align="left"
        show-overflow-tooltip
        search
        seNimble
      ></me-table-column>
      <me-table-column
        prop="adminPhone"
        label="超管手机号"
        align="center"
        minWidth="150px"
        show-overflow-tooltip
        search
        seNimble
      ></me-table-column>
      <me-table-column
        prop="allRoomNumbers"
        label="关联房号"
        align="center"
        minWidth="175px"
        show-overflow-tooltip
        search
        seType="cascader"
        seMultiple
        :se-api="settledTypeIdLabel"
        :se-params="{ children: true }"
      ></me-table-column>
      <me-table-column
        prop="settledTypeStr"
        label="入驻类型"
        align="left"
        minWidth="120"
        show-overflow-tooltip
        search
        seType="select"
        seProp="settledTypeList"
        seMultiple
        :se-api="settledTypeIdLabel"
      >
      </me-table-column>
      <me-table-column
        prop="updateUser"
        label="更新人"
        width="90"
        align="left"
        show-overflow-tooltip
      ></me-table-column>
      <me-table-column
        prop="updateDate"
        seProp="update"
        label="更新时间"
        align="center"
        minWidth="175px"
        seMultiple
        search
        seType="daterange"
        show-overflow-tooltip
      ></me-table-column>
    </me-table>
  </div>
</template>

<script>
import MeTable from "../../packages/table/src/table.vue"
import MeTableColumn from "../../packages/table/src/table-column.vue"
export default {
  components: { MeTable, MeTableColumn },
  data() {
    return {
      status: false,
    }
  },
  methods: {
    searchList(params) {
      console.log(params)
    },
    change() {
      this.status = !this.status
    },
    onCellClick(row, column, cell, event) {},
    settledTypeIdLabel(params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let list = []
          if (params.children == true) {
            list = [
              {
                id: "zhinan",
                label: "指南",
                children: [
                  {
                    id: "shejiyuanze",
                    label: "设计原则",
                    children: [
                      {
                        id: "yizhi",
                        label: "一致",
                      },
                      {
                        id: "fankui",
                        label: "反馈",
                      },
                      {
                        id: "xiaolv",
                        label: "效率",
                      },
                      {
                        id: "kekong",
                        label: "可控",
                      },
                    ],
                  },
                  {
                    id: "daohang",
                    label: "导航",
                    children: [
                      {
                        id: "cexiangdaohang",
                        label: "侧向导航",
                      },
                      {
                        id: "dingbudaohang",
                        label: "顶部导航",
                      },
                    ],
                  },
                ],
              },
              {
                id: "zujian",
                label: "组件",
                children: [
                  {
                    id: "basic",
                    label: "Basic",
                    children: [
                      {
                        id: "layout",
                        label: "Layout 布局",
                      },
                      {
                        id: "color",
                        label: "Color 色彩",
                      },
                      {
                        id: "typography",
                        label: "Typography 字体",
                      },
                      {
                        id: "icon",
                        label: "Icon 图标",
                      },
                      {
                        id: "button",
                        label: "Button 按钮",
                      },
                    ],
                  },
                  {
                    id: "form",
                    label: "Form",
                    children: [
                      {
                        id: "radio",
                        label: "Radio 单选框",
                      },
                      {
                        id: "checkbox",
                        label: "Checkbox 多选框",
                      },
                      {
                        id: "input",
                        label: "Input 输入框",
                      },
                      {
                        id: "input-number",
                        label: "InputNumber 计数器",
                      },
                      {
                        id: "select",
                        label: "Select 选择器",
                      },
                      {
                        id: "cascader",
                        label: "Cascader 级联选择器",
                      },
                      {
                        id: "switch",
                        label: "Switch 开关",
                      },
                      {
                        id: "slider",
                        label: "Slider 滑块",
                      },
                      {
                        id: "time-picker",
                        label: "TimePicker 时间选择器",
                      },
                      {
                        id: "date-picker",
                        label: "DatePicker 日期选择器",
                      },
                      {
                        id: "datetime-picker",
                        label: "DateTimePicker 日期时间选择器",
                      },
                      {
                        id: "upload",
                        label: "Upload 上传",
                      },
                      {
                        id: "rate",
                        label: "Rate 评分",
                      },
                      {
                        id: "form",
                        label: "Form 表单",
                      },
                    ],
                  },
                  {
                    id: "data",
                    label: "Data",
                    children: [
                      {
                        id: "table",
                        label: "Table 表格",
                      },
                      {
                        id: "tag",
                        label: "Tag 标签",
                      },
                      {
                        id: "progress",
                        label: "Progress 进度条",
                      },
                      {
                        id: "tree",
                        label: "Tree 树形控件",
                      },
                      {
                        id: "pagination",
                        label: "Pagination 分页",
                      },
                      {
                        id: "badge",
                        label: "Badge 标记",
                      },
                    ],
                  },
                  {
                    id: "notice",
                    label: "Notice",
                    children: [
                      {
                        id: "alert",
                        label: "Alert 警告",
                      },
                      {
                        id: "loading",
                        label: "Loading 加载",
                      },
                      {
                        id: "message",
                        label: "Message 消息提示",
                      },
                      {
                        id: "message-box",
                        label: "MessageBox 弹框",
                      },
                      {
                        id: "notification",
                        label: "Notification 通知",
                      },
                    ],
                  },
                  {
                    id: "navigation",
                    label: "Navigation",
                    children: [
                      {
                        id: "menu",
                        label: "NavMenu 导航菜单",
                      },
                      {
                        id: "tabs",
                        label: "Tabs 标签页",
                      },
                      {
                        id: "breadcrumb",
                        label: "Breadcrumb 面包屑",
                      },
                      {
                        id: "dropdown",
                        label: "Dropdown 下拉菜单",
                      },
                      {
                        id: "steps",
                        label: "Steps 步骤条",
                      },
                    ],
                  },
                  {
                    id: "others",
                    label: "Others",
                    children: [
                      {
                        id: "dialog",
                        label: "Dialog 对话框",
                      },
                      {
                        id: "tooltip",
                        label: "Tooltip 文字提示",
                      },
                      {
                        id: "popover",
                        label: "Popover 弹出框",
                      },
                      {
                        id: "card",
                        label: "Card 卡片",
                      },
                      {
                        id: "carousel",
                        label: "Carousel 走马灯",
                      },
                      {
                        id: "collapse",
                        label: "Collapse 折叠面板",
                      },
                    ],
                  },
                ],
              },
              {
                id: "ziyuan",
                label: "资源",
                children: [
                  {
                    id: "axure",
                    label: "Axure Components",
                  },
                  {
                    id: "sketch",
                    label: "Sketch Templates",
                  },
                  {
                    id: "jiaohu",
                    label: "组件交互文档",
                  },
                ],
              },
            ]
            resolve(list)
            return
          }
          for (let i = 0; i < 10; i++) {
            const model = {
              id: i,
              label: "文本" + i + params.children,
            }
            list.push(model)
          }
          resolve(list)
        }, 1000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  width: 800px;
  height: 700px;
}
</style>
