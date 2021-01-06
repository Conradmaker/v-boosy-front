<template>
    <li>
        <div class="image__box">
            <img :src="item.src" alt="">
        </div>
        <h3>{{item.title}}</h3>
        <p>{{item.author}}</p>
        <score :score='item.score'/>
    </li>
</template>
<script>
import Score from './Score.vue'

export default {
  components: {
    Score
  },
  props: {
    item: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    console.log(this.item)
  }
}
</script>
<style lang="scss" scoped>
li{
    color:black;
    display:flex;
    flex-direction: column;
    .image__box {
    transition: all 0.3s;
    width: 140px;
    height: 205px;
    box-shadow: 0 3px 5px lightgray;
    border-radius: 3px;
    margin-bottom: 10px;
    overflow: hidden;
    &:hover {
      transform: translateY(-5px) rotate(5deg);
      box-shadow: 0 8px 5px lightgray;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  h3{
      margin:10px 0;
  }
  p{
      font-size: 12px;
      color:#555;
      margin-bottom: 10px;;
  }
  span{
      font-size: 13px;

  }
}
</style>
