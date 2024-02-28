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
        prop="class"
        label="班级"
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
    }
  },
  methods: {
    onSearch(params) {
      console.log(params)
    },
  },
}
</script>

<style></style>
