<template>
  <div class="popup_wrapper">
  <div class="popup">
  <div class="icon_close" @click="ClosePopup"></div>

  
  <div class="head_popup">
    <p class="head_popup_name">Восстановление пароля</p>
    <p class="head_popup_description">Пожалуйста, введите  ваш адрес электронной почты для получения ссылки для восстановления пароля</p>
  </div>

<form @submit.prevent="recovery_user" novalidate>
  <template class="input_email_popup">
            <b-container fluid >
              <b-row class="my-1">
                 <b-col sm="9">
                  
                  <b-form-input @blur="$v.formReg.email.$touch()"
                     :class="status($v.formReg.email)"
                     v-model.trim="formReg.email" id="email_popup" 
                  type="email" placeholder="Ваш email"></b-form-input>

                  <div class="invalid-feedback email_invalid" v-if="!$v.formReg.email.required">{{ reqText }}</div>
              <div class="invalid-feedback" v-if="!$v.formReg.email.email">Пожалуйста введите Email адрес</div>
                </b-col>
              </b-row>
            </b-container>
  </template>

   <button :disabled="disabledRecoveryPassword" type="submit" class="button button_enter_popup">Восстановить пароль</button>

</form>
  </div>
</div>
</template>

<script>


import {email, required} from 'vuelidate/lib/validators'

export default {
  name: '',
  components: {
   
  },
  data() {
       return {
        types: [
          'email'
        ],
        regMessage: false,
        reqText: 'Поле обязательно для заполнения',
        formReg: {
          email: ''
        }
      }
    },

    methods: {

    status(validation) {
       return {
         'is-invalid': validation.$error,
         'error': validation.$error
       }
     },

     ClosePopup(){
      this.$emit('ClosePopup'),
      console.log('ghf')
     }
  },

  computed: {
    disabledRecoveryPassword() {
       return this.$v.formReg.email.$invalid
    }
  },

  validations: {
    formReg: {
      email: {
         email,
        required: required
      }
    }
  }
}

</script>


<style>

.popup{
  height: 308px;
  width: 492px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.1);
  padding-top: 32px;
  padding-left: 60px;
  padding-right: 60px;
  margin: 0 auto;
  z-index: 1000;
  position: fixed;
  top: 100px;
  left: 400px;
}

.popup_wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .12);
   z-index: 999;

}

.head_popup_name{
  font-family: 'RobotoMedium', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  color: #1B1D21;
  text-align: center;
}

.head_popup_description{
  text-align: center;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #808191;
  margin-bottom: 25px;
}

#email_popup{
  margin-left: 22px;
  width: 300px;
}

.button_enter_popup{
  width: 244px;
  height: 36px;
  text-transform: uppercase;
  margin-left: 64px;
    margin-top: 20px;
}

.email_invalid{
  margin-left: 30px;
}

.icon_close{
    background-image: url("../assets/close.svg");   
    background-repeat: no-repeat;  
    width: 24px;
    height: 24px;
    margin: 0 0 auto auto;
    position: relative;
    right: -30px;
    top: -15px;
}

.icon_close:hover{
  cursor: pointer;
}

</style>
