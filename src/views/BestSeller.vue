<template>
  <div class="home">
    <Banner/>
    <transition name="fade">
      <List v-if="isNotEmpty" title='Popular Now' :lists = 'lists'/>
    </transition>
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
  computed: {
    ...mapState('book', ['lists']),
    isNotEmpty () {
      return this.lists.length !== 0
    }
  },
  methods: {
    ...mapActions('book', ['loadMain'])
  },
  mounted () {
    this.loadMain()
    window.scrollTo({ top: 0 })
  }
}
</script>
