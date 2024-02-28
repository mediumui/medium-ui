<template>
  <div
    class="me-table"
    v-loading="loading"
  >
    <div
      class="me-table-head"
      v-if="searchConfig.length"
      v-show="searchShow"
    >
      <me-search
        ref="search"
        v-model="searchModel"
        @search="refresh"
      >
        <me-search-item
          v-for="(config, index) in searchConfig"
          :key="`${config.prop}_${config.label}_${index}`"
          v-bind="config"
        ></me-search-item>
      </me-search>
    </div>
    <div class="me-table-tool">
      <div>
        <slot name="operator" />
      </div>
      <div>
        <table-icon
          v-if="searchConfig.length"
          :content="searchShow ? '隐藏搜索' : '展开搜索'"
          icon="el-icon-search"
          @click="__changeSearchStatus"
        >
        </table-icon>
        <table-icon
          content="刷新"
          icon="el-icon-refresh"
          @click="refresh"
        >
        </table-icon>
        <table-icon
          icon="el-icon-menu"
          content="显隐列"
          @click="__showColumnList"
        ></table-icon>
      </div>
    </div>
    <el-table
      ref="table"
      :data="list"
      v-bind="bind"
      v-on="$listeners"
      :height="tableHeight"
      :key="Math.random()"
      style="width: 100%; height: 100%"
    >
      <template v-for="(node, index) in $slots.default">
        <table-column-render
          :key="index"
          :node="node"
          v-if="value.indexOf(index) == -1"
        >
        </table-column-render>
      </template>
    </el-table>
    <div class="me-table-footer">
      <div>
        <slot name="footer"></slot>
      </div>
      <div v-if="page">
        <el-pagination
          @size-change="__handleSizeChange"
          @current-change="__handleCurrentChange"
          :current-page.sync="pageNum"
          :page-size="pageSize"
          :page-sizes="pageSizes"
          layout="total, sizes, prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      title="显示/隐藏"
      :visible.sync="showColumnVisible"
      append-to-body
      width="625px"
    >
      <el-transfer
        :titles="['显示', '隐藏']"
        v-model="value"
        :data="columns"
      ></el-transfer>
    </el-dialog>
    <!-- 没有实际显示，只用于获取列slot，其实是隐藏的 -->
    <el-table v-show="false">
      <slot />
    </el-table>
  </div>
</template>

<script>
import TableIcon from "./table-icon.vue"
import MeSearch from "../../search/src/search.vue"
import MeSearchItem from "../../search/src/search-item.vue"
export default {
  components: {
    TableIcon,
    MeSearch,
    MeSearchItem,
    TableColumnRender: {
      functional: true,
      render(h, ctx) {
        const { node } = ctx.props
        if (!node.componentOptions || !node.componentOptions.propsData) return h
        let propsData = node.componentOptions.propsData
        const selectionParams = {
          align: "center",
          width: "50px",
        }
        if (propsData.type == "selection") {
          propsData = {
            ...selectionParams,
            ...propsData,
          }
        }
        const column = h("el-table-column", {
          props: {
            ...propsData,
            key: Math.random(),
          },
          scopedSlots: node.data.scopedSlots,
        })
        return column
      },
    },
  },
  name: "Table",
  props: {
    //修改table斑马纹默认值
    stripe: {
      type: Boolean,
      default: true,
    },
    //是否进行数据分页
    page: {
      type: Boolean,
      default: true,
    },
    //分页可选值
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 50, 100]
      },
    },
    //列表数据请求实现
    request: Function,
  },
  data() {
    return {
      //是否展示搜索
      searchShow: true,
      //搜索条件
      searchModel: {},
      //搜索配置，根据slot生成
      searchConfig: [],
      //表格高度
      tableHeight: "auto",
      //列隐显设置状态
      showColumnVisible: false,
      list: [],
      //所有列数据
      columns: [],
      //隐藏的列下标
      value: [],
      //当前页码
      pageNum: 1,
      //数据总量
      total: 100,
      //一页数量
      pageSize: 10,
      loading: false,
    }
  },
  computed: {
    bind() {
      return {
        ...this.$props,
        ...this.$attrs,
      }
    },
  },
  mounted() {
    window.onresize = () => {
      this.__resetTableHeight()
    }
    this.__resetTableHeight()
    this.__initSearch()
    this.__initColumns()
    this.pageSize = this.pageSizes[0]
    this.refresh(true)
  },
  methods: {
    /**
     * 修改搜索栏展示状态
     */
    __changeSearchStatus() {
      this.searchShow = !this.searchShow
      this.__resetTableHeight()
    },
    /**
     * 更新表格高度
     */
    __resetTableHeight() {
      this.$nextTick(() => {
        let height = this.$refs.table.$el.offsetHeight
        this.tableHeight = height
        this.$forceUpdate()
      })
    },
    __initColumns() {
      this.columns = []
      this.$slots.default.forEach((node, index) => {
        if (node.componentOptions) {
          const params = JSON.parse(JSON.stringify(node.componentOptions.propsData))
          if (params.type == "selection") {
            params.label = "多选"
          }
          this.columns.push({
            ...params,
            key: index,
          })
        }
      })
    },
    /**
     * 初始化搜索信息
     */
    __initSearch() {
      const nodes = this.$slots.default
      const searchConfig = []
      for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index]
        const component = node.componentInstance
        if (!component || component.search != true) {
          //如果不是搜索字段
          continue
        }
        const params = {
          api: component.seApi,
          nimble: component.seNimble,
          multiple: component.seMultiple,
          params: component.seParams,
          prop: component.seProp ?? component.prop,
          label: component.seLabel ?? component.label,
          type: component.seType,
          props: {
            ...component.seProps,
            multiple: component.seMultiple,
          },
          placeholder: component.sePlaceholder,
        }
        searchConfig.push(params)
      }
      this.searchConfig = searchConfig
    },
    /**
     * 展示列隐藏/显示弹窗
     */
    __showColumnList() {
      this.showColumnVisible = true
    },
    /**
     * 当页数量发生变化回调
     */
    __handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.refresh(false)
    },
    /**
     * 当前页码发生变化
     */
    __handleCurrentChange() {
      this.refresh(false)
    },
    /**
     * 刷新列表
     * @param {是否重置页码} resetPage
     */
    async refresh(resetPage = false) {
      if (resetPage) {
        this.pageNum = 1
      }
      //如果没有配置请求实现，则终止
      if (!this.request) return
      const params = {
        ...this.searchModel,
      }
      if (this.page) {
        params.pageSize = this.pageSize
        params.pageNum = this.pageNum
      }
      this.loading = true
      const model = await this.request(params)
      if (model) {
        this.total = model.total
        this.list = model.rows
      }
      this.loading = false
    },
  },
}
</script>

<style>
.me-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.me-table-tool {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
}
.me-table-footer {
  padding: 21px 0;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
