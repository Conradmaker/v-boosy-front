<template>
  <div class="home">
    <section class="visual-top">
      홈페이지
    </section>
    <section class="visual-bottom">
      홈페이지2
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.home{
  padding:0;
  .visual-top{
    padding-top:100px;
    height:100vh;
  }
  .visual-bottom {
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
