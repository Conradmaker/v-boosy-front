<template>
  <div class="home">
    <Banner/>
    <List title='Popular Now' :lists = 'lists'/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Banner from '../components/main/Banner.vue'
import List from '../components/List'
export default {
  name: 'Home',
  components: {
    Banner,
    List
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('book', ['lists'])
  },
  methods: {
    ...mapActions('book', ['loadMain'])
  },
  mounted () {
    this.loadMain()
  }
}
</script>
