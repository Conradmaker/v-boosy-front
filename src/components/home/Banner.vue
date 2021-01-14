<template>
    <div class="banner">
        <div class="inner">
            <img src="../../assets/gravity.gif" alt="" class="gif">
            <img src="../../assets/logo.png" alt="">
            <p>어서와요 작은 책방</p>
            <clear-button :onClick='goMore'>둘러보기</clear-button>
        </div>
    </div>
</template>

<script>
import ClearButton from '../common/ClearButton.vue'
export default {
  components: { ClearButton },
  methods: {
    goMore () {
      this.$router.push('/bestseller')
    }
  }

}
</script>

<style lang="scss" scoped>
.banner{
    margin-top:10px;
    .inner{
        .gif{
            max-width: 400px;
            margin-bottom: 20px;;
        }
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            margin: 45px 0;
            font-size: 22px;
        }
    }
}
</style>
