<template>
  <div class="home">
    <top class="visual-top">
      홈페이지
    </top>
  </div>
</template>
<script>
import Top from '../components/home'
export default {
  components: {
    Top
  },
  mounted () {
    window.scrollTo({ top: 0 })
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding:0;
  .visual-top{
    padding-top:100px;
    height:100vh;
  }
  .bg-grad {
    background: linear-gradient(45deg, #aeecff, #ffffff, #c5ffca);
    background-size: 600% 600%;
    animation: GradientBackground 10s ease infinite;
    height:100vh;
  }
}

@keyframes GradientBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
};

</style>
