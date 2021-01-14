<template>
<div>
  <div class="top-container">
    <h2>Contect me!</h2>
    <h3>If there is a function you want, please contact us at the contact information below.</h3>
  </div>
  <div class="bottom-container inner">
      <div class="box">
          <img alt='me' src="../../assets/me.png" />
          <h3>yhg0337@gmail.com</h3>
          <clear-button :onClick='goGH'>GitHub</clear-button>
      </div>
  </div>
</div>

</template>
<script>
import ClearButton from '../common/ClearButton.vue'
export default {
  components: { ClearButton },
  methods: {
    goGH () {
      window.location.href = 'https://github.com/Conradmaker'
    }
  }
}
</script>
<style lang="scss" scoped>
    .top-container{
        position:relative;
        grid-column: 1/13;
        background-color: #ffb3d9;
        background-image: url('https://pixelarity.com/items/demos/hologram/purple/assets/css/images/checker-pattern.svg'),url('https://pixelarity.com/items/demos/hologram/purple/assets/css/images/overlay.png');
        background-position: center 0;
        height:250px;
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
        .box{
            flex:1;
            height:250px;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 0;
            img{
                width:200px;
            }
            h3{
                letter-spacing: 2px;
                font-size: 21px;
                color:#686767;
                margin: 30px 0;
            }
        }
    }
</style>
