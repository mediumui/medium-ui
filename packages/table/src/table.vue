<template>
  <div class="me-table">
    <!-- 搜索栏 -->
    <transition name="el-fade-in-linear">
      <slot
        name="search"
        v-if="searchStatus"
      ></slot>
    </transition>
    <!-- 表头 -->
    <div class="me-table-head">
      <!-- 自定义工具栏 -->
      <div class="me-table-head-left">
        <slot name="operator"></slot>
      </div>
      <!-- 操作栏 -->
      <div class="me-table-head-tool">
        <el-button
          v-if="$slots.search"
          icon="el-icon-search"
          circle
          size="mini"
          @click="searchStatus = !searchStatus"
        >
        </el-button>
        <el-button
          icon="el-icon-refresh"
          circle
          size="mini"
          @click="refresh(true)"
        >
        </el-button>
        <el-button
          icon="el-icon-menu"
          circle
          size="mini"
        >
        </el-button>
      </div>
    </div>
    <el-table
      ref="table"
      style="width: 100%"
      :data="dataList"
      :header-cell-style="{ fontWeight: 'bold', color: '#333' }"
      v-loading="loading"
      stripe
    >
      <slot></slot>
    </el-table>
    <div class="me-table-footer">
      <div>
        <slot name="footer" />
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      //搜索条件
      searchModel: {},
      //是否展示搜索页面
      searchStatus: true,
      //数据列表
      dataList: [],
      //数据加载
      loading: false,
    }
  },
  methods: {
    searchModelAction(model) {
      console.log(model)
      this.searchModel = model
      this.refresh(true)
    },
    refresh(reset = false) {
      if (reset) {
      }
      this.loading = true
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.dataList = [
            {
              name: "张三",
              age: 12,
              level: "三年级",
              class: "2班",
              job: "班长",
            },
            {
              name: "李四",
              age: 13,
              level: "三年级",
              class: "2班",
              job: "劳动委员",
            },
            {
              name: "李玲",
              age: 11,
              level: "三年级",
              class: "2班",
              job: "班长",
            },
            {
              name: "leo",
              age: 11,
              level: "三年级",
              class: "2班",
              job: "班长",
            },
            {
              name: "andy",
              age: 11,
              level: "三年级",
              class: "2班",
              job: "",
            },
          ]
          this.loading = false
          resolve()
        }, 2000)
      })
    },
  },
}
</script>

<style>
.me-table {
  background: #ffffff;
  height: 100%;
  width: 100%;
  display: flex; /* 使用弹性布局，使子元素较为灵活地填充 */
  flex-direction: column;
}
.me-table .me-search {
  margin-bottom: 20px;
}
.me-table .el-table {
  flex: 2;
  max-height: 100%;
}
.me-table-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 10px 0px;
}
.me-table-head-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.me-table-head-tool {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.me-table-footer {
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.me-table .el-table .el-table__body td .cell:empty::after {
  content: "——";
}
.me-table .el-table th.el-table__cell > .cell {
  font-size: 13px;
  font-weight: 500;
  color: #333333;
  line-height: 18px;
}
</style>
