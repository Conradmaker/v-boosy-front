<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Header, Navbar }

}
</script>
<style lang="scss">
#app {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  list-style: none;
}
*{
  box-sizing: border-box;
}
.inner{
  max-width: 900px;
  margin:0 auto;
}
.router-link-exact-active{
  span{
    font-weight: bold;
  }
  i{
    background: #dbeb53;
    }
}
</style>
