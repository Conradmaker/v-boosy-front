<template>
<div>
  <div class="detail">
      <detail-summary :item='item'/>
      <detail-info :item='item'/>
      <detail-summary :item='item'/>
      <detail-nav :scroll='onScroll'/>
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
    ...mapActions('book', ['loadDetail']),
    onScroll (number) {
      console.log(number)
      switch (number) {
        case 0:
          scrollTo(0, 0, {
            ease: 'out-bounce',
            duration: 1500
          })
          break
        case 1:
          scrollTo(0, 986, {
            ease: 'out-bounce',
            duration: 1500
          })
          break
        case 2:
          scrollTo(0, document.documentElement.scrollHeight, {
            ease: 'out-bounce',
            duration: 1500
          })
          break
      }
    }
  },

  mounted () {
    this.loadDetail(this.isbn)
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 1500
    })
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset)
    })
  }
}
</script>
<style lang="scss" scoped>
.detail{
    width:100%;
    height:100vh;
}
</style>
