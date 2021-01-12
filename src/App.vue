<template>
  <div id="app">
    <headers/>
    <router-view class="router-v"/>
  </div>
</template>
<script>
import Headers from './components/Headers.vue'
export default {
  components: { Headers }
}
</script>
<style lang="scss">
#app {
  width:100%;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  list-style: none;
}
.router-v{
  padding-top:100px;
}
*{
    scroll-behavior: smooth;
  box-sizing: border-box;
}
.inner{
  max-width: 900px;
  margin:0 auto;
  z-index: 1;
}
.router-link-exact-active{
  span{
    font-weight: bold;
  }
  i{
    background: #dbeb53;
    }
}
.fade-enter-active, .fade-leave-active {
  transform: translateY(0);
  transition: all .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(300px);
  opacity: 0;
}
</style>
