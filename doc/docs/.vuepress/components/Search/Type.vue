<template>
  <div>
    <me-search
      v-model="model"
      @search="onSearch"
    >
      <me-search-item
        prop="name"
        label="姓名"
      >
      </me-search-item>
      <me-search-item
        prop="age"
        label="年龄"
      >
      </me-search-item>
      <me-search-item
        prop="sex"
        label="性别"
        type="select"
        :item-list="sexList"
      >
      </me-search-item>
      <me-search-item
        prop="class"
        label="班级"
        type="select"
        :api="getClassList"
      >
      </me-search-item>
    </me-search>
    <div>搜索条件：{{ model }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      sexList: [
        { label: "男", id: "0" },
        { label: "女", id: "1" },
      ],
    }
  },
  methods: {
    onSearch(params) {
      console.log(params)
    },
    getClassList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = [
            {
              label: "一年级",
              id: "1",
            },
            {
              label: "二年级",
              id: "2",
            },
            {
              label: "三年级",
              id: "3",
            },
            {
              label: "四年级",
              id: "4",
            },
            {
              label: "五年级",
              id: "5",
            },
            {
              label: "六年级",
              id: "6",
            },
          ]
          resolve(list)
        }, 1000)
      })
    },
  },
}
</script>

<style></style>
