<template>
<div class="search">
    <List :title='title' :lists = 'lists'/>
</div>

</template>
<script>
import axios from 'axios'
import List from '../components/List.vue'
export default {
  components: { List },
  data () {
    return {
      lists: [],
      error: {}
    }
  },
  methods: {
    changeList (v) {
      this.lists = v
    }
  },
  computed: {
    keyword () {
      return this.$route.params.id
    },
    title () {
      return `${this.keyword}에 대한 검색결과 ${this.lists.length}개입니다`
    }
  },
  watch: {
    async keyword () {
      try {
        const res = await axios.get(`/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${this.keyword}&output=json`)
        this.changeList(res.data.item)
      } catch (e) {
        this.error = e
      }
    }
  },
  async mounted () {
    try {
      const res = await axios.get(`/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${this.keyword}&output=json`)
      this.changeList(res.data.item)
    } catch (e) {
      this.error = e
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
