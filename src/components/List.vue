<template>
    <section class="inner">
        <h2>{{title}}</h2>
        <ul>
            <list-item  v-for='(item,i) in lists' :key="item.isbn"  :item='item' :index='i'/>
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
  mounted () {
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
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
        li:first-child .top-rank{
        background: rgb(247, 247, 31);
  }
    }
}
</style>
