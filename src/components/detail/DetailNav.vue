<template>
    <ul>
        <li @click='scroll(0)'>
            <i :class="scrollValid===0?'nav-act':null">1</i>
            <span>ABOUT</span>
        </li>
        <li @click='scroll(1)'>
            <i :class="scrollValid===1?'nav-act':null">2</i>
            <span>MORE</span>
        </li>
        <li @click='scroll(2)'>
            <i :class="scrollValid===2?'nav-act':null">3</i>
            <span>PURCHASE</span>
        </li>
    </ul>
</template>
<script>
export default {
  props: {
    scroll: Function
  },
  data () {
    return {
      scrollValid: 0
    }
  },
  methods: {
    scrollEvent () {
      const valid = (document.documentElement.clientHeight / 3)
      if (window.pageYOffset >= valid * 4) {
        this.scrollValid = 2
      } else if (valid * 5 > window.pageYOffset && window.pageYOffset >= valid) {
        this.scrollValid = 1
      } else if (valid * 3 > window.pageYOffset) {
        this.scrollValid = 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEvent)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollEvent)
  }
}
</script>
<style lang="scss" scoped>
ul{
    position: fixed;
    top:25%;
    right:100px;
    border-left: 1px solid #aaa;
    height:450px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    li{
        display: flex;
        align-items: center;
        i{
            transform:translateX(-50%);
            display:flex;
            align-items: center;
            justify-content: center;
            width:40px;
            height: 40px;
            border-radius: 50%;
            background: #D08381;
            color:#fff;
            transition: all 0.3s;
            cursor: pointer;
            &:hover{
              background: #744442;
            }
        }
        .nav-act{
            background: #FBDFD1;
            color:#aaa;
        }
        span{
            font-size: 14px;
            color:#aaa;
        }
    }
}
    @media screen and (max-width:700px) {
      ul{
        background-color: rgba(255,255,255,.4);
        flex-direction: row;
        justify-content: space-around;
        top:auto;
        bottom:0px;
        right:auto;
        width:100%;
        height:auto;
        padding: 10px 0;
        li{
          flex-direction: column;
          align-items: center;
          flex:1;
          i{
            width:30px;
            height: 30px;
            transform:translateX(0%);
            margin-bottom: 5px;
          }
        }
      }
    }
</style>
