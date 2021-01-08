<template>
    <ul>
        <li>
            <i :class="!scrollValid?'nav-act':null">1</i>
            <span>ABOUT</span>
        </li>
        <li>
            <i :class="scrollValid?'nav-act':null">2</i>
            <span>MORE</span>
        </li>
        <li>
            <i>3</i>
            <span>PURCHASE</span>
        </li>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      scrollValid: false
    }
  },
  methods: {
    scrollEvent () {
      const valid = (document.body.clientHeight / 2) < window.pageYOffset
      if (valid) {
        this.scrollValid = true
      } else {
        this.scrollValid = false
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
</style>
