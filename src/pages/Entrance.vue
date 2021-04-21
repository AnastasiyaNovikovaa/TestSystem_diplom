<template>
   <div class="body">

    <Popup
      v-if="isPopupVisible"
      @ClosePopup="ClosePopup"
    />

    <div class="main-body">
      <div class="div_logo"> <img class="logo_enter" src="../assets/Лого.png"> </div>
      
      <form @submit.prevent="enter_user" novalidate>
        
          <template class="input">
            <b-container fluid >
              <b-row class="my-1">
                 <b-col sm="9">
                  
                  <b-form-input @blur="$v.formReg.email.$touch()"
                     :class="status($v.formReg.email)"
                     v-model.trim="formReg.email" id="email" 
                  type="email" placeholder="Ваш email"></b-form-input>

                  <div class="invalid-feedback" v-if="!$v.formReg.email.required">{{ reqText }}</div>
              <div class="invalid-feedback" v-if="!$v.formReg.email.email">Пожалуйста введите Email адрес</div>
                </b-col>
              </b-row>
            </b-container>
          </template>

          <template class="input input_password">
            <b-container fluid >
              <b-row class="my-1">
                 <b-col sm="9">
                  <b-form-input @blur="$v.formReg.password.$touch()"
                         :class="status($v.formReg.password)"
                         v-model.trim="formReg.password" id="password" type="password" placeholder="Ваш пароль"></b-form-input>

                  <div class="invalid-feedback" v-if="!$v.formReg.password.required">Поле обязательно для заполнения</div>
                  <div class="invalid-feedback" 
                       v-if="!$v.formReg.password.minLength">{{ minLengthText }}</div>
                  
                </b-col>
              </b-row>
            </b-container>
          </template>

            <template class="check">
              
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Запомнить меня
                </b-form-checkbox>
              
            </template>
          
          <p class="password" @click="ShowPopup">Забыли пароль?</p>

          <button :disabled="disabledEnter" type="submit" class="button button_enter">ВОЙТИ</button>
        </form>
         
      

      <hr class="hr">
      <p class="account">Еще нет аккаунта?</p>
      <a @click="$router.push({name: 'registration'})"><p class="create_account">Создать аккаунт</p></a>
      

    </div>
      
     <div> <img class="wave" src="../assets/wave 1.png"></div>
    
    </div>    
</template>

<script>

import {  email, required, minLength } from 'vuelidate/lib/validators'
import Popup from '../components/Popup.vue'

export default {
  name: '',
  components: {
   Popup
  },
  data() {
       return {
        types: [
          'email'
        ],
        types1: [
          'password'
        ],
        regMessage: false,
        reqText: 'Поле обязательно для заполнения',
        minLengthText: 'Минимальная длина 6 символов!',
        formReg: {
          email: '',
          password: ''
        },
        isPopupVisible: false
      }
    },

    methods: {
    enter_user() {
      console.log("Пользователь вошел");

      let email = this.formReg.email;
        let password = this.formReg.password;
        this.$store.dispatch('ADD_email_user', email);
         this.$store.dispatch('ADD_password_user', password);
         
        //вот тут поправить
        this.$store.dispatch('enter_user', { email, password })
       .then(() => this.$router.push({name: 'home'}))
       .catch(err => console.log(err));

        this.reset()
    },
    reset() {
        
        this.regMessage = true;
        // убрать сообщение о регистрации
        setTimeout(() => {
          this.regMessage = false
        }, 3000)
        // сбросить все поля
        for (let input in this.formReg) {
            this.formReg[input] = ''
        }
        // сбросить валидацию
        this.$v.$reset()
    },

    status(validation) {
       return {
         'is-invalid': validation.$error,
         'error': validation.$error
       }
     },

     ShowPopup(){
      this.isPopupVisible = true
     },

     ClosePopup(){
       this.isPopupVisible = false
     }
  },

  computed: {
    disabledEnter() {
       return this.$v.formReg.password.$invalid
    }
  },

  validations: {
    formReg: {
      email: {
         email,
        required: required
      },
       password: {
            required,
            minLength: minLength(6)
          }
    }
  }
}
</script>

<style scoped>

.wave {
  width: 100%;
  height: 207px;
  bottom: 0px;
    position: absolute;
    z-index: 1;
}

.main-body {
  width: 344px;
  height: 440px;
  margin:  0px auto; 
  padding-top: 100px;
}

.div_logo{
  margin-bottom: 40px;
  height: 30px;
}

.logo_enter {
  margin: 0 auto;
  margin-left: 116px;
}

.form-control {
  width: 340px;
}

.button_enter {
  width: 240px;
  height: 36px;
  margin-left: 50px;
  margin-bottom: 40px;
  margin-top: 28px;
}

.custom-control{
  width: 154px;
    margin-right: 0px;
    float: left;
}

.password{
  width: 124px;
  float: right;
  margin-bottom: 0px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #808191;
}

.password:hover {
	color: #5547BC;
cursor: pointer;
}

.create_account{
  width: 124px;
  float: right;
  margin-bottom: 0px;
    font-family: 'RobotoMedium', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6C5DD3;
  text-decoration: underline;
  margin-right: 36px;
  position: absolute;
  z-index: 5;
  left: 695px;

  cursor: pointer;
}

.create_account:hover{
	color: #5547BC;
}

.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl{
  padding-left: 0px;
  margin-bottom: 24px;
}

.form-control{
  outline: 0;
  border-width: 0 0 1px;
  border-color: #AFBFF9;
  border-radius: 0px;
  background-color: #F5F9FD;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #808191;
}

.hr {
  margin-bottom: 20px;
}

.account{
  float: left;
  margin-bottom: 0px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #808191;
  margin-left: 36px;
}

.input_password{
  margin-bottom: 24px;
  
}

.custom-control-label{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #808191;
}

.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus{
 border-color: none;
 box-shadow: none;
}

.form-control:focus{
    color: #495057;
    border-color: #80bdff;
    outline: 0;
    box-shadow: none;
  }

</style>

   
 