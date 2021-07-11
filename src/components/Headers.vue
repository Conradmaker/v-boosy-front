<template>
    <div class="headers" :class="{isTop:isTop}">
        <Header/>
        <navbar/>
    </div>
</template>
<script>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, Header },
  data () {
    return {
      isTop: true
    }
  },
  computed: {
    isClear () {
      return this.$route.name === 'Home'
    }
  },
  methods: {
    onScroll () {
      if (
        window.pageYOffset > 85
      ) {
        this.isTop = false
      } else {
        this.isTop = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style lang="scss" scoped>
.headers{
    z-index: 2;
    background: rgba(255, 255, 255, 0.9);
    position:fixed;
    right: 0;
    left: 0;
    top:0;
    transition:all 0.25s ease-in-out;
  }
.isTop{
  background: none;
}
@media screen and (max-width:700px) {
  .headers{
    max-width:100vw;
  }
}
</style>
