<template>
  <div class="popup_wrapper">
   <div class="popup_publish_test">
     
    <p class="message_succes">Поздравляем! Ваш тест успешно опубликован!</p>
    <p class="message_succes2"> Студенты могут проходить ваш тест. Результаты будут отображены на странице вашего теста.</p>
    <button @click="$router.push({name: 'tests'})" class="publish_test button_return_test">Вернуться к тестам</button>

  </div>
</div>
</template>

<script>

  export default {

    data() {
      return {
        
      }
    },
  methods: {
   
  }
 }
  
</script>

<style>

  .button_return_test{
    position: absolute;
    right: 40px;
    bottom: 30px;
  }

  .popup_publish_test{
    width: 668px;
    height: 350px;
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

  .message_succes{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 19px;
    color: #1B1D21;
    display: block;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    padding-top: 40px;
  }
  .message_succes2{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #1B1D21;
    display: block;
    margin-bottom: 30px;
     text-align: center;
     padding-right: 50px;
      padding-left: 50px;
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
    margin-bottom: 30px;
  }

  .close_setting{
    border: none;
    background-color: white;
    float: right;
    margin-right: 16px;
    margin-top: 16px;
  }

  
</style>