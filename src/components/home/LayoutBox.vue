<template>
<div class="">
  <div class="top-container">
    <h2>HELLO I'M BOOKSY</h2>
    <h3>let me introduce me</h3>
  </div>
  <div class="bottom-container inner">
      <div class="box">
          <h3>BEST SELLER</h3>
          <p>Enjoy the latest bestseller rankings <br>provided by Interpark!</p>
          <clear-button>더보기</clear-button>
      </div>
      <div class="box">
          <h3>WHO MAKE?</h3>
          <p>Are you curious about <br>the front-end developer <br>Won-geun Yoo?</p>
          <clear-button>더보기</clear-button>
      </div>
      <div class="box">
          <h3>SEARCH</h3>
          <p>Supports integrated search <br>for domestic books.</p>
          <clear-button>더보기</clear-button>
      </div>
      <div class="box">
          <h3>CATAGORY</h3>
          <p>You can also search <br>by 18 categories (to be added).</p>
          <clear-button>더보기</clear-button>
      </div>

  </div>
</div>

</template>
<script>
import ClearButton from '../common/ClearButton.vue'
export default {
  components: { ClearButton }

}
</script>
<style lang="scss" scoped>
    .top-container{
        margin-top:140px;
        position:relative;
        grid-column: 1/13;
        background-color: #81c4cf;
        background-image: url('https://pixelarity.com/items/demos/hologram/purple/assets/css/images/checker-pattern.svg'),url('https://pixelarity.com/items/demos/hologram/purple/assets/css/images/overlay.png');
        background-position: center 0;
        height:230px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color:white;
        h2{
            color: inherit;
            font-size: 30px;
            margin-bottom: 0.8em;
            position: relative;
            padding-bottom: 0.65em;
            &::after{
                background-color: currentColor;
                content: '';
                opacity: 0.2;
                position: absolute;
                position:absolute;
                left: calc(50% - 30px);
                bottom: 0;
                height: 2px;
                width: 60px;
            }
            &::before{
                background-color: currentColor;
                content: '';
                opacity: 0.2;
                position: absolute;
                left: calc(50%);
                bottom: -4px;
                height: 10px;
                width: 2px;
            }
        }
    }
    .bottom-container{
        display:flex;
        flex-wrap: wrap;
        .box:nth-child(2n-1){
            border-right: 1px solid #81c4cf;
        }
        .box:nth-child(3),
        .box:nth-child(4){
            border-top: 1px solid #81c4cf;
        }
        .box{
            width:50%;
            height:250px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 0;
            h3{
                letter-spacing: 2px;
                font-size: 21px;
                color:#686767;
            }
            p{
                flex:1;
                display:flex;
                align-items: center;
                line-height: 1.3;
                font-size: 18px;
            }
        }
    }
</style>
