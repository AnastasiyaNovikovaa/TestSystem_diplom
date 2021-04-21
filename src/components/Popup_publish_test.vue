<template>
  <div class="popup_wrapper">
   <div class="popup_publish_test">

    <Popup_succes_publiс_test
      v-if="isPopupVisible_succes"
      @ClosePopup_succes="ClosePopup_succes"
    />

    <div class="first_block">
    <h3 class="head_popup">Настройка публикации</h3>
    <button @click="ClosePopup_publish" class="icon_close close_setting"></button>

   <!-- <p class="head_publish">Данные для прохождения теста</p>-->
    </div>

     <div class="second_block">
    <p class="button_type">Куда отправить:</p>
    <button @click="open_id" class="button_type id_button"></button>
    <button @click="open_email" class="button_type email_button"></button>
   
     </div>
    

    <div v-if="id_visible">
     
     <hr class="hr hr_id">

      <div class="id_test">
      <p class="id">Идентификатор:</p>
      <p class="id_area">{{new_test().identifier}}</p>
    </div>

    <div class="password_test">
       <p class="pass">Код доступа:</p>
      <p class="pass_area">{{new_test().accessCode}}</p>
    </div>

     <p class="message">Отправьте эти данные  своим студентам и они смогут пройти Ваш тест.</p>

      <button @click="open_succes" class="publish_test">Опубликовать</button>

   </div>

   <div v-if="email_visible" class="email_data">
      <hr class="hr hr_email">

      <p class="mail_p">Электронная почта</p>
     <div><input v-model="email" type="email" name="email" placeholder="Кому" class="email"></div>
     <p>{{email}}</p>
     <div><input v-model="message" type="text" name="message" placeholder="Добавьте сообщение" class="message_input"></div>

     <button @click="sent_id" class="publish_test">Отправить</button>

   </div>



  </div>
</div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Popup_succes_publiс_test from '../components/Popup_succes_piblic_test.vue'
  import axios from 'axios'

  export default {
    components: {
    Popup_succes_publiс_test,
  },
    data() {
      return {
        isPopupVisible_succes: false,
        id_visible: true,
        email_visible: false,
        email: '',
        message: ''
      }
    },

    computed: {
    ...mapGetters([
      'TESTS'
      ]),
  },

  
  methods: {

    open_id(){
      this.id_visible=true,
      this.email_visible=false;
    },

    open_email(){
      this.id_visible=false,
      this.email_visible=true;
    },

    sent_id(){
      var array_emails=this.email.split(',');
      var mes=this.message;

      for (let i = 0; i < array_emails.length; i++) { 
      axios.post('http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/tests/' + this.new_test().id +'/publish', {
        email: array_emails[i],
        message: mes,
        headers: {
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, append,delete,entries,foreach,get,has,keys,set,values,Authorization"
        }
      })
    }

      this.isPopupVisible_succes = true;
    },

    ...mapActions([
        'GET_TEST_FROM_API'
      ]),

    ClosePopup_publish(){
      this.$emit('ClosePopup_publish');
     },

      ClosePopup_succes(){
      this.$emit('ClosePopup_succes');
     },

     open_succes() {
      this.isPopupVisible_succes = true;
     },

     //доступ к данным конкретного теста
      new_test() {
    return this.TESTS[this.TESTS.length-1]; 
    },
  },

  mounted() {
    this.GET_TEST_FROM_API();
  }
 }
  
</script>

<style>

  .mail_p{
   font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
  color: #1B1D21;
  }

  .email, .message_input{
    border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #C4C4C4;
  width: 100%;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-color: #808191;
  font-size: 12px;
  padding-bottom: 10px;
  }

  .email{
    margin-bottom: 20px;
  }

  .hr_id, .hr_email{
    background-image: url("../assets/line.svg");
    height: 2px;
     background-repeat: no-repeat;  
    background-position: 185px;
  }

  .hr_id{
    background-position: 142px;
  }

  .id_button{
     width: 24px;
  height: 24px;
  background-image: url("../assets/code.svg");
  background-size: 24px 24px;
    background-repeat: no-repeat;  
    background-position: 0px;
    border:none;
    background-color: white;
    margin-right: 20px;
  }

  .email_button{
     width: 24px;
  height: 24px;
  background-image: url("../assets/mail.svg");
  background-size: 24px 24px;
    background-repeat: no-repeat;  
    background-position: 0px;
    border:none;
    background-color: white;
  }

  .email_button:hover, .email_button:active{
    background-image: url("../assets/mail_active.svg");
  }

  .id_button:hover, .id_button:active{
    background-image: url("../assets/code_active.svg");
  }

div.second_block{
  width: 300px;

}
 
 .hr{
 height: 1px;
 border: 0;
 background-color: #E3EDF4;
  clear: both;
  margin-bottom: 30px;
 }

  .button_type{
    display: block;
    float: left;
    text-align: left;
    margin-bottom: 10px;
  }

  .button_type:focus{
    outline: red;
  }

  p.button_type{
  margin-right: 20px;
  vertical-align: middle;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #1B1D21;
 }

  .first_block{
    width: 100%;
    height: 50px;
  }

  .popup_publish_test{
    width: 668px;
    height: 380px;
    background-color: white;
    padding-left: 40px;
    padding-top: 30px;
    padding-right: 40px;
    box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.1);
    margin: 0 auto;
    z-index: 1000;
    position: fixed;
    top: 100px;
    left: 400px;
    border-radius: 12px;
  }

  .message{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #808191;
    margin-top: 10px;
  }

  .id, .pass{
    display: block;
    float: left;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #1B1D21;
  }

  .id_area, .pass_area{
    display: block;
    float: right;
     font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1B1D21;
    padding-left: 10px;
  }

  .head_publish{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #1B1D21;
    display: block;
    clear: both;
    float: left;
    margin-bottom: 30px;
  }

  .publish_test{
    width: 200px;
    height: 36px;
    background: #6C5DD3;
    border-radius: 4px;
    border: none;
    color: white;
    float: right;
    margin-top: 30px;
  }

  .publish_test:focus{
    outline: red;
  }

  .id_test,  .password_test, .message{
    clear: both;
    float: left;
  }

  .head_popup{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #1B1D21;
    float: left;
    margin-bottom: 20px;
  }

  .close_setting{
    border: none;
    background-color: white;
    float: right;
    margin-right: 16px;
    margin-top: 16px;
  }

  
</style>