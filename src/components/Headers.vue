<template>
    <div class="headers">
        <Header/>
        <navbar/>
    </div>
</template>
<script>
import Header from './Header.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, Header }

}
</script>
<style lang="scss" scoped>
.headers{
    z-index: 2;
    background: #fff;
    position:fixed;
    right: 0;
    left: 0;
  }
</style>
