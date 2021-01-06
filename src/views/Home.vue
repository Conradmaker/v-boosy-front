<template>
  <div class="home">
    <Header/>
    <Navbar/>
    <Banner/>
    <List title='Popular Now'/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/main/Banner.vue'
import List from '../components/List'
export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Banner,
    List
  }
}
</script>
