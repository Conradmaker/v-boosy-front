<template>
<div>
  <div class="detail">
      <detail-summary :item='item'/>
      <detail-info :item='item'/>
      <detail-nav/>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import DetailSummary from '../components/detail/DetailSummary.vue'
import DetailInfo from '../components/detail/DetailInfo.vue'
import DetailNav from '../components/detail/DetailNav.vue'
export default {
  components: { DetailSummary, DetailInfo, DetailNav },
  data () {
    return {
      item: {},
      error: {}
    }
  },
  computed: {
    isbn () {
      return this.$route.params.id
    }
  },
  methods: {
    fetchSearch: async (i) => {
      return await axios.get(
      `/api/search.api?key=1BF59F57030886E0B9D3463D8697C390B5C9791830F090998C72A200E5322CD1&query=${i}&output=json&queryType=isbn`
      )
    }
  },
  async mounted () {
    try {
      const data = await this.fetchSearch(this.isbn)
      this.item = data.data.item[0]
    } catch (e) {
      this.error = e
    }
  }
}
</script>
<style lang="scss" scoped>
.detail{
    width:100%;
    height:100vh;
}
</style>
