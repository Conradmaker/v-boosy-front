<template>
  <div class="incomplete__container">
      <img src="../../assets/incomplete.gif" alt="incomplete">
      <span>준비중인 컨텐츠 입니다.</span>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function
  }
}
</script>

<style lang="scss" scoped>
    .incomplete__container{
        width:100vw;
        height:100vh;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img{
           max-width:500px;
        }
    }
</style>
