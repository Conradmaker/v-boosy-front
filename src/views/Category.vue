<template>
    <div class="category">
        <list :title='title' :lists = 'lists'/>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import List from '../components/List.vue'
export default {
  components: { List },
  computed: {
    ...mapState('book', ['lists']),
    title () {
      return this.$route.query.title + ' 카테고리 목록'
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('book', ['loadCategory'])
  },
  watch: {
    $route () {
      this.loadCategory(this.id)
    }
  },
  mounted () {
    this.loadCategory(this.id)
  }

}
</script>
