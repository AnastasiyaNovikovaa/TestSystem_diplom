<template>
   <div class="body">
    <div class="main-body">
      <div class="div_logo"> <img class="logo_enter" src="../assets/Лого.png"> </div>
      
        <template class="input">
            <b-container fluid >
              <b-row class="my-1" v-for="type in types" :key="type">
                 <b-col sm="9">
                  <b-form-input :id="`type-${type}`" :type="type" placeholder="Ваш email"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>

          <template class="input input_password">
            <b-container fluid >
              <b-row class="my-1" v-for="type in types1" :key="type">
                 <b-col sm="9">
                  <b-form-input :id="`type-${type}`" :type="type" placeholder="Ваш пароль"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>

          <template class="input input_password">
            <b-container fluid >
              <b-row class="my-1" v-for="type in types1" :key="type">
                 <b-col sm="9">
                  <b-form-input :id="`type-${type}`" :type="type" placeholder="Повторите пароль"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </template>
           

          <button type="button" class="button button_enter" @click="$router.push({name: 'home'})">РЕГИСТРАЦИЯ</button>
         
      

      <hr class="hr">
      <p class="account">Уже зарегистрированы?</p>
     <a @click="$router.push({name: 'entrance'})"> <p class="enter">Войти</p></a>

    </div>
      
     <div> <img class="wave" src="../assets/wave 1.png"></div>
    
    </div>    
</template>

<script>

export default {
  name: '',
  components: {
   
  },
  data() {
       return {
        types: [
          'email'
        ],
        types1: [
          'password'
        ]
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

#input[type="checkbox" i]{

}
</style>

   
 