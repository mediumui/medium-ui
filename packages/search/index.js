import Search from "./src/search.vue"
import SearchItem from "./src/search-item.vue"
Search.install = function (Vue, prefix) {
  Vue.component(prefix + Search.name, Search)
  Vue.component(prefix + SearchItem.name, SearchItem)
}
export default Search
