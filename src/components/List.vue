<template>
    <section class="inner">
        <h2>{{title}}</h2>
        <ul>
            <list-item  v-for='item in items' :key="item.title"  :item='item'/>
        </ul>
    </section>
</template>
<script>
import ListItem from './ListItem'
export default {
  props: {
    title: String
  },
  components: {
    ListItem
  },
  data () {
    return {
      items: [{
        title: '책1',
        author: '저자1',
        score: 8.1,
        src: require('../assets/book1.png')
      }, {
        title: '책2',
        author: '책2',
        score: 2.1,
        src: require('../assets/book2.png')
      }, {
        title: '책3',
        author: '책3',
        score: 8.3,
        src: require('../assets/book3.png')
      }, {
        title: '책4',
        author: '책4',
        score: 2.4,
        src: require('../assets/book4.png')
      }, {
        title: '책5',
        author: '책5',
        score: 4.5,
        src: require('../assets/book5.png')
      }, {
        title: '책6',
        author: '책6',
        score: 6.6,
        src: require('../assets/book6.png')
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
section{
    h2{
        margin:30px 0 20px 0;
        font-size: 20px;
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        gap:20px;
        justify-content: space-between;
    }
}
</style>
