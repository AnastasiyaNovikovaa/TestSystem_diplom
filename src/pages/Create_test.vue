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
    
    <!--<div class="button_create_test">
      <button type="submit"  class="button create_test" @click="ShowPopup_publish">Создать тест</button>
    </div>
  </div>-->

  <div class="button_create_test">
      <button type="submit"  class="button create_test" @click="POST_DATA_NEW_TEST">Создать тест</button>
    </div>
  </div>
 
  <div class="block_name_test">
    <input type="text" placeholder="Название теста" name="name_test" v-model="nameTest" class="name_test">
    <input type="text" placeholder="Описание теста" name="description_test"  v-model="description" class="description_test">
     <!--<button @click="save_fist_data" class="">Сохранить</button>-->
  </div>
  

  <div class="Buttons">
    <button @click="add_question" class="button_new_block"></button>
    <button class="button_load_tasks"></button>
  </div>

  <Question_test v-for="(n,index) in items" :id_test="id_test" :key="n.index" :row-data="n" v-on:delete-row="deleteThisRow(index)">
  </Question_test>
 
  </div>
</template>


<script>
  

import Question_test from '../components/Question_test.vue'
import Popup_setting_test from '../components/Popup_setting_test.vue'
import Popup_publish_test from '../components/Popup_publish_test.vue'
import axios from 'axios'
//import Question_classes from '../js/Question.js'


export default {
  name: "postComponent",
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
        id_test: 0,
        //nameTest: '',
        descriptionTest: '',
        timestamp: ''
      }
    },

    created() {
                setInterval(this.getNow, 1000);
            },

  methods: {
    getNow: function() {
                    const today = new Date();
                    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                },

    POST_DATA_NEW_TEST(){

        axios.post('http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/tests', {
         ... this.$store.dispatch('ADD_DATA_TEST',{createdDate: this.timestamp}),
        ...this.$store.getters.NEWTEST,
        headers: {
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
         ...this.isPopupVisible_publish = true
      })
      //return instance.get(/tests/)
      .then((response) => {
                    console.log(response);
                })
},


      postData(e){
        console.warn(this.posts),
        e.preventDefault();
      },

      deleteThisRow: function(index) {
            this.items.splice(index, 1),
            console.log('УДАЛИЛИ'+index)
        },

        //отправка название и описание теста на сервер + добавление нового блока вопроса
       save_fist_data(){
          /*this.id_test=Math.ceil(Math.random()*1000000);
          this.$store.dispatch('ADD_FIRST_DATA',{name: this.nameTest, description: this.descriptionTest, id: this.id_test} );
          console.log('нОВЫЙ ID'+this.id_test);*/
          console.log(this.$store.getters.NEWTEST);
       },

      add_question(){
      this.items.push(this.count),
      this.count=this.count+1,
      this.$store.dispatch('CREATE_NEW_OBJECT_IN_CARD')
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
     },
  },

//ОНО должно мне возвращать мой объект с новым тестом
  computed: {

    /*get_newtest: {
         get(){
          return this.$store.getters.NEWTEST;
        },
        set(){
          this.id_test=Math.ceil(Math.random()*1000000);
          this.$store.dispatch('ADD_FIRST_DATA',{name: this.nameTest, description:"", id: this.id_test, createdDate: this.timestamp} );
          console.log('нОВЫЙ ID'+this.id_test);
        }
     },*/

     nameTest: {
      get(){
        return this.$store.getters.NEWTEST.name;
      },

      set(value){
        //передаю сразу id, это плохо, но пусть будет так пока
        this.id_test=Math.ceil(Math.random()*1000000);
        this.$store.dispatch('ADD_DATA_TEST', {name: value, id: this.id_test});
      }
     },

     description: {
      get(){
        return this.$store.getters.NEWTEST.description;
      },

      set(value){
        this.$store.dispatch('ADD_DATA_TEST', {description: value});
      }
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

 .create_test:focus{
  outline: red;
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
