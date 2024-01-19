<template>
  <div class="base-body">
    <me-table>
      <template slot="search">
        <me-search v-model="model">
          <me-search-item
            label="用户名称1"
            :quick="true"
            prop="name"
            v-model="model.name"
          >
            <el-select
              placeholder="请选择用户名"
              v-model="model.name"
              multiple
            >
              <el-option
                label="选项1"
                value="1"
              >
              </el-option>
              <el-option
                label="选项2"
                value="2"
              >
              </el-option>
            </el-select>
          </me-search-item>
          <me-search-item
            label="用户名称2"
            prop="age"
            v-model="model.age"
          >
          </me-search-item>
          <me-search-item
            label="创建日期"
            prop="createDate"
            type="date"
            v-model="model.date"
          >
          </me-search-item>
          <me-search-item
            label="人数"
            prop="userNumber"
            v-model="model.userNumber"
          >
          </me-search-item>
        </me-search>
      </template>
      <template slot="operator">
        <el-button>编辑</el-button>
      </template>
      <el-table-column
        label="序号"
        type="index"
        width="50"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="名字"
        prop="name"
      >
      </el-table-column>
      <el-table-column
        label="年龄"
        prop="age"
      >
      </el-table-column>
      <el-table-column
        label="年级"
        prop="level"
      >
      </el-table-column>
      <el-table-column
        label="班级"
        prop="class"
      >
      </el-table-column>
      <el-table-column
        label="职务"
        prop="job"
      >
      </el-table-column>
      <el-table-column
        width="150px"
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <zy-menu-button>
            <zy-menu-button-item label="编辑"></zy-menu-button-item>
            <zy-menu-button-item
              label="删除"
              :disabled="true"
            >
            </zy-menu-button-item>
          </zy-menu-button>
        </template>
      </el-table-column>
    </me-table>
  </div>
</template>

<script>
import MeSearchItem from "../../packages/search/src/search-item.vue"
import MeSearch from "../../packages/search/src/search.vue"
import MeTable from "../../packages/table/src/table.vue"
export default {
  components: { MeSearchItem, MeSearch, MeTable },
  data() {
    return {
      model: {
        userNumber: 25,
      },
    }
  },
}
</script>

<style>
.base-body {
  width: 100%;
  height: 700px;
  background: red;
}
</style>
