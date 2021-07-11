<template>
    <div class="catagory__container" :class="isShow?'open':''">
        <div class="catagory__box">
            <ul>
                <cata-item v-for='cata in catas1' :key="cata.id" :cata='cata'/>
            </ul>
            <ul>
                <cata-item class="bottom__list" v-for='cata in catas2' :key="cata.id" :cata='cata'/>
            </ul>
        </div>
    </div>
</template>
<script>
import CataItem from './CataItem.vue'
export default {
  components: { CataItem },
  props: { isShow: Boolean },
  data () {
    return {
      catas1: [
        { id: 100, name: '국내도서' },
        { id: 101, name: '소설' },
        { id: 102, name: '시/에세이' },
        { id: 103, name: '예술/대중문화' },
        { id: 105, name: '역사/문화' },
        { id: 107, name: '잡지' },
        { id: 108, name: '만화' },
        { id: 109, name: '유아' },
        { id: 110, name: '아동' }
      ],
      catas2: [
        { id: 111, name: '가정과 생활' },
        { id: 112, name: '청소년' },
        { id: 116, name: '자연/과학' },
        { id: 117, name: '경제/경영' },
        { id: 118, name: '자기계발' },
        { id: 119, name: '인문' },
        { id: 122, name: '컴퓨터' },
        { id: 124, name: '취미/레저' },
        { id: 128, name: '여행' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

.catagory__container{
    height:0;
    overflow: hidden;
    opacity: 0;
    display:flex;
    max-width: 1100px;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    .catagory__box{
        width:100%;
        padding:0 10px;
        background: rgba(255, 255, 255, 0.6);
        ul{
            max-width:100%;
            width:100%;
            display:flex;
            justify-content: space-between;
            li{
                flex:1;
                height:50px;
                margin-bottom:15px;
                transition: all 0.2s ease-in-out;
                font-size: 15px;
                &:hover{
                    background: #eee;
                }
            }
            .bottom__list{
                margin-bottom:0px
            }
        }
    }
}
.open{
    height:120px;
    opacity: 1;
}

@media screen and (max-width:700px) {
    .catagory__container>.catagory__box{
        overflow-x: scroll;
        ul{
        li{
            padding: 0 10px;
            white-space: nowrap;
        }
    }
    }

}
</style>
