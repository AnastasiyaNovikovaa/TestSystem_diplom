<template>
  <div class="popup_wrapper">
   <div class="popup_publish_test">
    <h3 class="head_popup">Настройка публикации</h3>
    <button @click="ClosePopup_publish" class="icon_close close_setting"></button>

    <p class="head_publish">Данные для прохождения теста</p>
    
    <div class="id_test">
      <p class="id">Идентификатор:</p>
      <p class="id_area">4756 2847 2172</p>
    </div>

    <div class="password_test">
       <p class="pass">Код доступа:</p>
      <p class="pass_area">476 284</p>
    </div>

    <p class="message">Отправьте эти данные  своим студентам и они смогут пройти Ваш тест.</p>

    <button class="publish_test">Опубликовать</button>

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
    ClosePopup_publish(){
      this.$emit('ClosePopup_publish');
     }
  }
 }
  
</script>

<style>

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