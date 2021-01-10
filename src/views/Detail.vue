<template>
<div>
  <div class="detail">
      <detail-summary :item='item'/>
      <detail-info :item='item'/>
      <detail-summary :item='item'/>
      <detail-nav/>
  </div>
</div>
</template>
<script>
import DetailSummary from '../components/detail/DetailSummary.vue'
import DetailInfo from '../components/detail/DetailInfo.vue'
import DetailNav from '../components/detail/DetailNav.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { DetailSummary, DetailInfo, DetailNav },
  computed: {
    ...mapState('book', ['item']),
    isbn () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('book', ['loadDetail'])
  },
  mounted () {
    this.loadDetail(this.isbn)
  }
}
</script>
<style lang="scss" scoped>
.detail{
    width:100%;
    height:100vh;
}
</style>
