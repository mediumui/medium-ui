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

<script>
import MeTable from "../../../../../packages/table/src/table.vue"
export default {
  components: { MeTable },
  data() {
    return {}
  },
  methods: {
    searchList(params) {
      console.log(params, "12222")
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

<style>
.table {
  width: 800px;
  height: 500px;
}
</style>
