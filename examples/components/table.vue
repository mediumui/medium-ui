<template>
  <div class="table">
    <me-table>
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
      ></me-table-column>
      <me-table-column
        prop="name"
        label="企业名称"
        align="left"
        minWidth="220px"
        show-overflow-tooltip
        search
        :se-maxlength="50"
        seNimble
      ></me-table-column>
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
    change() {
      this.status = !this.status
    },
    settledTypeIdLabel(params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = []
          for (let i = 0; i < 10; i++) {
            list.push({
              id: i,
              label: "文本" + i,
            })
          }
          resolve(list)
        }, 3000)
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
