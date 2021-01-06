<template>
    <header class="inner">
        <div class="logo">
            <img src="../assets/logo.png"  alt="logo">
        </div>
        <div class="search__box">
            <input type="text" :placeholder="placeholder" :value="searchValue" @input="onChange($event)" @keydown.enter="onSubmit">
            <i class="material-icons">search</i>
        </div>
        <ul class="btn__wrapper">
            <li @click='loginOpen=true'>LOGIN</li>
            <li>SIGNUP</li>
        </ul>
    <login-modal v-if='loginOpen' v-on:close-modal='closeModal'/>
    </header>
</template>
<script>
import LoginModal from './LoginModal.vue'
export default {
  components: {
    LoginModal
  },
  data () {
    return {
      searchValue: '',
      placeholder: '검색어를 입력하세요',
      loginOpen: false
    }
  },
  methods: {
    onChange (e) {
      this.searchValue = e.target.value
    },
    onSubmit (e) {
      alert(this.searchValue)
    },
    closeModal () {
      console.log('asd')
      this.loginOpen = false
    }
  }
}
</script>
<style lang="scss">
header{
    padding: 00px 10px;
    height:50px;
    align-items: center;
    display:flex;
    justify-content: space-between;
    .logo{
        width:110px;
        img{
            max-width: 100%;
        }
    }
    .search__box{
        position:relative;
        display:flex;
        align-items: center;
        justify-content: center;
        input{
            width:430px;
            padding:8px 15px;
            font-size: 13px;
            border:none;
            outline:none;
            border-radius: 5px;
            background: #F5F5F5;
        }
        i{
            position:absolute;
            right:5px;
            cursor: pointer;
            &:hover{
                color:#555;
            }
        }
    }
    .btn__wrapper{
        display:flex;
        align-items: center;
        gap:20px;
    }
}
</style>
