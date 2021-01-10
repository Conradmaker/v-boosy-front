<template>
<div class="search">
    <List :title='title' :lists = 'lists'/>
</div>

</template>
<script>
import { mapActions, mapState } from 'vuex'
import List from '../components/List.vue'
export default {
  components: { List },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('book', ['loadSearch']),
    changeList (v) {
      this.lists = v
    }
  },
  computed: {
    ...mapState('book', ['lists']),
    keyword () {
      return this.$route.params.id
    },
    title () {
      return `${this.keyword}에 대한 검색결과 ${this.lists.length}개입니다`
    }
  },
  watch: {
    keyword () {
      this.loadSearch(this.keyword)
    }
  },
  mounted () {
    this.loadSearch(this.keyword)
  }

}
</script>
<style lang="scss" scoped>

</style>
