<template>
  <div class="main-wrapper">

    <Popup_setting_test
      v-if="isPopupVisible"
      @ClosePopup_setting="ClosePopup_setting"
    />

    <Popup_publish_test
      v-if="isPopupVisible_publish"
      @ClosePopup_publish="ClosePopup_publish"
    />

    <div class="header-div">
    <p class="heading block_head">Создание теста</p>
    <div  class="button_eye"></div>
    <div  @click="ShowPopup" class="button_setting"></div>
    
    <div class="button_create_test">
      <button type="button"  class="button create_test" @click="ShowPopup_publish">Создать тест</button>
    </div>
  </div>

  <div class="block_name_test">
    <input type="text" placeholder="Название теста" name="name_test" class="name_test">
    <input type="text" placeholder="Описание теста" name="description_test" class="description_test">
  </div>

  <div class="Buttons">
    <button @click="add_question" class="button_new_block"></button>
    <button class="button_load_tasks"></button>
  </div>

  <Question_test v-for="(n,index) in items" :key="n.index" :row-data="n" v-on:delete-row="deleteThisRow(index)">
  </Question_test>

  </div>
</template>


<script>

import Question_test from '../components/Question_test.vue'
import Popup_setting_test from '../components/Popup_setting_test.vue'
import Popup_publish_test from '../components/Popup_publish_test.vue'

export default {
  components: {
    Question_test,
    Popup_setting_test,
    Popup_publish_test
  },
 data() {
      return {
        items: [],
        isPopupVisible: false,
        isPopupVisible_publish: false,
        count: 1,
      }
    },
    methods: {
      deleteThisRow: function(index) {
            this.items.splice(index, 1),
            console.log('УДАЛИЛИ'+index)
        },

      add_question(){
      this.items.push(this.count),
      this.count=this.count+1
      },

      ShowPopup(){
      this.isPopupVisible = true
     },

     ShowPopup_publish(){
      this.isPopupVisible_publish = true
     },

     ClosePopup_setting(){
       this.isPopupVisible = false
     },

     ClosePopup_publish(){
       this.isPopupVisible_publish = false
       console.log('закрыли');
     }
  }
}
</script>

<style>

  .button_load_tasks{
    width: 40px;
  height: 40px;
  background-image: url("../assets/load.png");
  background-size: 24px 24px;
    background-repeat: no-repeat;  
    background-position: 0px;
    border:none;
    background-color: white;
  }

.button_new_block{
  width: 40px;
  height: 40px;
  background-image: url("../assets/plus_cir.png");
  background-size: 24px 24px;
    background-repeat: no-repeat;  
    background-position: 0px;
    margin-bottom: 8px;
    border:none;
    background-color: white;
}

.button_new_block:focus, .button_load_tasks:focus{
  outline: red;
}

  .Buttons{
  background: #FFFFFF;
  box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.15);
  border-radius: 8px;
  width: 56px;
  height: 126px;
  clear: both;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 16px;
  display: inline-block;
  margin-top: 40px;
  position: fixed;
  top: 160px;
  right: 2%;
  }


 .create_test {
  margin-top: 58px;
  float: right;
  margin-right: 6%;
}

 .button_eye{
    background-image: url("../assets/eye.png");   
    background-repeat: no-repeat; 
    height: 20px;
    width: 20px;
    float: left;
    margin-right: 30px;
    margin-top: 62px;
}

 .button_setting{
    background-image: url("../assets/setting.png");   
    background-repeat: no-repeat; 
    height: 20px;
    width: 20px;
    float: left;
    
    margin-top: 62px;
}

 .block_head{
  float: left;
  margin-right: 45%;
  margin-bottom: 34px;
}


.block_name_test{
  background: #FFFFFF;
  box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.15);
  border-radius: 8px;
  width: 94%;
  height: 250px;
  display: inline-block;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 40px;
  float: left;
  margin-right: 32px;
}

.name_test, .description_test {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #C4C4C4;
  width: 92%;
  margin-left: 50px;
  margin-bottom: 44px;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  padding-bottom: 16px;
}

.name_test:focus, .description_test:focus, .variant_answer:focus{
  outline: red;
}

.name_test {
  font-weight: normal;
  font-size: 22px;
  font-color: #1B1D21;
}

.description_test{
  font-weight: 500;
  font-size: 16px;
  color: #808191;
}

</style>
