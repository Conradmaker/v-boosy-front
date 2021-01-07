<template>
  <div class="home">
    <Header/>
    <Navbar/>
    <Banner/>
    <List title='Popular Now' :lists = 'lists'/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/main/Banner.vue'
import List from '../components/List'
export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Banner,
    List
  },
  data () {
    return {
      lists: [],
      error: {}
    }
  },
  methods: {
    fetchList: async () => {
      return await axios.get(
        '/api/bestSeller.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&categoryId=100&output=json'
      )
    }
  },
  async mounted () {
    try {
      const data = await this.fetchList()
      this.lists = data.data.item
    } catch (e) {
      this.error = e
    }
  }
}
</script>
