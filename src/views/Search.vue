<template>
<div class="search">
    <Header/>
    <Navbar/>
    <List :title='title' :lists = 'lists'/>
</div>

</template>
<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import List from '../components/List.vue'
export default {
  components: { Header, Navbar, List },
  data () {
    return {
      lists: [],
      error: {}
    }
  },
  computed: {
    keyword () {
      return this.$route.params.id
    },
    title () {
      return `${this.$route.params.id}에 대한 검색결과 ${this.lists.length}개`
    }
  },
  async mounted () {
    try {
      const res = await axios.get(`/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${this.keyword}&output=json`)
      this.lists = res.data.item
    } catch (e) {
      this.error = e
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
