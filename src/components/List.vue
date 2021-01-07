<template>
    <section class="inner">
        <h2>{{title}}</h2>
        <ul>
            <list-item  v-for='item in lists' :key="item.title"  :item='item'/>
        </ul>
    </section>
</template>
<script>
import ListItem from './ListItem'
export default {
  props: {
    title: String,
    lists: Array
  },
  components: {
    ListItem
  },
  created () {
  },
  data () {
    return {

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
