<template>
    <li @click="goDetail">
      <i v-if='isRank' :class="{'top-rank':isTop}">{{index+1}}</i>
        <div class="image__box">
            <img :src="item.coverLargeUrl" alt="">
        </div>
        <h3>{{item.title}}</h3>
        <p>{{item.author}}</p>
        <score :score='item.score'/>
    </li>
</template>
<script>
import { mapState } from 'vuex'
import Score from './Score.vue'

export default {
  components: {
    Score
  },
  props: {
    item: Object,
    index: Number
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('book', ['isRank']),
    isTop () {
      return this.index < 5
    }
  },
  methods: {
    goDetail () {
      this.$router.push(`/detail/${this.item.isbn}`)
    }
  },
  mounted () {
    console.log(this.isTop)
  }
}
</script>
<style lang="scss" scoped>
li{
  position:relative;
  i{
    width:25px;
    height: 25px;
    border-radius: 50%;
    background: #aa50e2;
    box-shadow:0 2px 10px -1px gray;
    color:#fff;
    font-size: 11px;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:-12px;
    left:-12px;
    z-index: 1;
  }
  .top-rank{
    background: gold;
    color:#7b32a8;
  }

  cursor: pointer;
    margin-bottom:40px;
    color:black;
    display:flex;
    flex-direction: column;
    width: 140px;
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
