<template>
    <div class="headers" :class="{isClear}">
        <Header/>
        <navbar/>
    </div>
</template>
<script>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, Header },
  computed: {
    isClear () {
      return this.$route.name === 'Home'
    }
  }
}
</script>
<style lang="scss" scoped>
.headers{
    z-index: 2;
    background: #fff;
    position:fixed;
    right: 0;
    left: 0;
    top:0;
  }
.isClear{
  background: none;
}
</style>
