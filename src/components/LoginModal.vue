<template>
    <div class="modal__container login__modal">
        <div class="modal__box">
            <span class="login-title">Hello,</span>
            <span class="login-title">{{welcome}}</span>
            <label>EMAIL
                <input v-model="email" ref="emailInput" type="email">
            </label>
            <label>PASSWORD
                <input v-model="password" type="password" @focus="onChangeTitle">
            </label>
            <div class="button__wrapper">
                <c-button :on-click='closeModal'>취소</c-button>
                <c-button>로그인</c-button>
            </div>

        </div>
    </div>
</template>

<script>
import cButton from './common/CButton.vue'
export default {
  components: { cButton },
  props: {},
  methods: {
    closeModal () {
      console.log('123123')
      this.$emit('close-modal')
    },
    onChangeTitle () {
      const emailValid = this.email.includes('@')
      if (emailValid) {
        this.welcome = this.email.split('@')[0]
      } else {
        alert('올바른 이메일을 입력하세요')
        this.$refs.emailInput.focus()
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      welcome: 'Friend!!'
    }
  }
}
</script>

<style lang="scss">
    .modal__container{
        z-index: 9999;
        position:fixed;
        top: 0;
        bottom: 0;
        left:0;
        right: 0;
        background: rgba(0, 0, 0, 0.329);
        display:flex;
        align-items: center;
        justify-content: center;
        .modal__box{
            min-width: 300px;
            min-height: 200px;
            padding: 20px 15px;
            background: #fff;
            border-radius: 10px;
        }

    }
    .login__modal{
        .modal__box{
            padding: 30px 25px;
            box-shadow: 0px 5px 30px gray;
        }
        .login-title{
            display:block;
            font-size: 34px;
            font-weight: bold;
            color: #464489;
            line-height: 1.2;
        }
        label{
            display: block;
            font-size: 13px;
            margin-top:20px;
        }
        input{
            padding: 5px;
            display:block;
            width:260px;
            font-size: 17px;
            border:none;
            border-bottom: 1px solid #464489;
            outline: none;
        }
        .button__wrapper{
            margin-top:20px;
            display: flex;
            justify-content: flex-end;
            gap:20px;
            button{
                width:40%;
                height:30px;
                background: #464489;
                &:hover{
                    background: #605dbb;
                }
            }
        }
    }

</style>
