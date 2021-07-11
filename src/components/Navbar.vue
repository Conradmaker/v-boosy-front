<template>
    <nav class="inner">
        <ul>
            <router-link to='/' tag='li'>
                <span>Home</span>
                <i></i>
            </router-link>
            <router-link to='/bestseller' tag='li' >
                <span>Bestseller</span>
                <i></i>
            </router-link>
            <li @click='cataOpen = !cataOpen'>
                <span>Catagory</span>
                <i></i>
            </li>
            <router-link to='/about' tag='li'>
                <span>About</span>
                <i></i>
            </router-link>
        </ul>

        <catagory  :is-show='cataOpen'/>
    </nav>
</template>
<script>
import Catagory from './common/Catagory.vue'
export default {
  components: {
    Catagory
  },
  data () {
    return {
      cataOpen: false
    }
  },
  watch: {
    $route () {
      this.cataOpen = false
    }
  }
}
</script>
<style lang="scss">
nav{
    ul{
        height: 50px;
        margin:0 auto;
        max-width:380px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        li{
            cursor: pointer;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            span{
                font-size: 14px;
                letter-spacing: 1.3px;
                line-height: 2;
                color:#464489;
            }
            i{
                width:5px;
                height: 5px;
                border-radius: 50%;
                background: #464489;
            }
            &:hover{
                i{
                    background: #dbeb53;
                }
            }
        }
    }
}
@media screen and (max-width:700px) {
nav{
    ul{
        max-width:100%;
        padding: 0 20px;
    }
}
}
</style>
