<template>
   <div class="body">
    <div class="main-body">
      <div class="div_logo"> <img class="logo_enter" src="../assets/Лого.png"> </div>
      
      <form @submit.prevent="register_user" novalidate>
        <div v-if="regMessage" class="alert alert-success" role="alert">
             Вы успешно зарегистрировались!
          </div>

        <template class="input">
            <b-container fluid >
              <b-row class="my-1">
                 <b-col sm="9">
                  
                  <b-form-input @blur="$v.formReg.email.$touch()"
                     :class="status($v.formReg.email)"
                     v-model.trim="formReg.email" id="email" 
                  type="email" placeholder="Ваш email">
                  </b-form-input>

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

          <template class="input input_password">
            <b-container fluid >
              <b-row class="my-1">
                 <b-col sm="9">
                  <b-form-input @blur="$v.formReg.passwordConfirm.$touch()"
                         :class="status($v.formReg.passwordConfirm)"
                         v-model.trim="formReg.passwordConfirm"
                          id="passwordConfirm" type="password" placeholder="Повторите пароль"></b-form-input>
                          <div class="invalid-feedback" 
                       v-if="!$v.formReg.passwordConfirm.sameAs">{{ passwordConfirmText }}</div>
                  
                </b-col>
              </b-row>
            </b-container>
          </template>
           

          <button :disabled="disabledRegister" type="submit" class="button button_enter">РЕГИСТРАЦИЯ</button>
        </form>
         
      

      <hr class="hr">
      <p class="account">Уже зарегистрированы?</p>
     <a @click="$router.push({name: 'entrance'})"> <p class="enter">Войти</p></a>

    </div>
      
     <div> <img class="wave" src="../assets/wave 1.png"></div>
    
    </div>    
</template>

<script>

import {  email, required, minLength, sameAs } from 'vuelidate/lib/validators'


export default {
  name: '',
  components: {
   
  },
  data() {
       return {
        regMessage: false,
        reqText: 'Поле обязательно для заполнения',
        alphaText: 'Запрещены цифры, пробелы и другие символы',
        minLengthText: 'Минимальная длина 6 символов!',
        passwordConfirmText: 'Пароли не совпадают',
        formReg: {
          email: '',
          password: '',
          passwordConfirm: ''
        }
      }
    },

  methods: {
    register_user() {
      console.log("Пользователь зарегистрирован");

      //поправить
      let data = {
          name: 'Костя',
          email: this.formReg.email,
          password: this.formReg.password,
         
        };

        this.$store.dispatch('register', data)
       .then(() => this.$router.push({name: 'entrance'}))
       .catch(err => console.log(err))

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
     }
  },

  computed: {
    disabledRegister() {
       return this.$v.formReg.password.$invalid || 
              this.$v.formReg.passwordConfirm.$invalid
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
          },
          passwordConfirm: {
            sameAs: sameAs('password')
          }
    }
  }
}
</script>

<style scoped>
/*@click="$router.push({name: 'home'})"*/
.wave {
  width: 100%;
  height: 207px;
  bottom: 0px;
    position: absolute;
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
  margin-bottom: 30px;
  margin-top: 12px;
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

.enter{
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
  left: 734px;

  cursor: pointer;
}

.enter:hover{
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

   
 