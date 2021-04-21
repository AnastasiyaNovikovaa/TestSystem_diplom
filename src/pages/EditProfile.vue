<template>
<div class="main-wrapper" >   
    <p class="heading">Профиль пользователя</p>

    <div class="main_part_edit">
       <img src="../assets/ava_prof.png" class="ava">

      <div class="left_side">
        
           <p class="contact_prof">ФИО</p>

            <div class="block_user">
             <p class="email_prof">Фамилия</p>
             <input class="input_user" v-model="firstname" type="text" name="name_user" placeholder="Ваша фамилия">
             <!--<p class="email_prof_input">gonchar.serg@gmail.com</p>-->
           </div>


           <div class="block_user">
             <p class="email_prof">Имя</p>
             <input class="input_user" v-model="surname" type="text" name="surname_user" placeholder="Ваше имя">
             <!--<p class="email_prof_input">gonchar.serg@gmail.com</p>-->
           </div>

           <div class="block_user">
             <p class="email_prof">Отчество</p>
             <input class="input_user" v-model="patronymic" type="text" name="patronymic" placeholder="Ваше отчество">
             <!--<p class="email_prof_input">gonchar.serg@gmail.com</p>-->
           </div>

            <!--<p class="name_prof">Гончаров Сергей Павлович</p>
            <p class="prof_prof">Доктор технических наук, профессор</p>-->
         
      </div>

      <div class="right_side">

        <div class="contact_prof_part">
          
          <p class="contact_prof">Контакты</p>
          
          <div class="block_user">
             <p class="email_prof">Email</p>
             <input class="input_user" v-model="email" type="text" name="email_user" placeholder="Ваш Email">
             <!--<p class="email_prof_input">gonchar.serg@gmail.com</p>-->
           </div>

           <div class="block_user">
             <p class="number_prof">Номер телефона</p>
             <input class="input_user" v-model="telephoneNumber" type="text" name="number_user" placeholder="Номер телефона">
             <!--<p class="number_prof_input">+7(936) 238-54-50</p>-->
           </div>

           <div class="block_user">
             <p class="teleg_prof">Telegram</p>
             <input class="input_user" v-model="nickName" type="text" name="telegram_user" placeholder="Ваш ник в Telegram">
             <!--<p class="number_prof_input">@SergeyGonch</p>-->
           </div>

        </div>

        <div class="about_prof_part">

          <p class="about_prof">О себе</p>
          
          <div class="block_user">
             <p class="birthday_prof">Дата Рождения</p>
              <input class="input_user" v-model="birthDate" type="text" name="birthday_user" placeholder="Ваша Дата Рождения">
             <!--<p class="birthday_prof_input">28/11/1968</p>-->
           </div>

           <div class="block_user">
             <p class="place_prof">Местоположение</p>
              <input class="input_user" v-model="location" type="text" name="place_user" placeholder="Ваше местоположение">
             <!--<p class="place_prof_input">Россия, г.Санкт-Петербург</p>-->
           </div>

           <div class="block_user">
             <p class="work_prof">Место работы</p>
              <input class="input_user" v-model="workPlace" type="text" name="work_user" placeholder="Место работы">
            <!-- <p class="work_prof_input">Санкт-Петербургский Государственный Электротехнический Университет</p>-->
           </div>

  
          
        </div>

      </div>


      <div class="bottom_button_2">
       <button type="submit"  class="button create_test" @click="POST_INFO_USER">Сохранить</button>
     </div>

     <div class="bottom_button">
       <p> {{this.messageSucces}}</p>
     </div>
      
    </div>
  
  
  </div>
</template>

<script>

  import axios from 'axios'

  export default {

data() {
      return {
        messageSucces: ''
      }
    },

    methods: {

      POST_INFO_USER(){

        axios.post('http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/profile', {
        birthDate: "2021-04-16T10:05:46.780Z",
       email: this.$store.state.user.email,
       firstname: this.firstname,
       location: this.location,
       nickName: this.nickName,
       patronymic: this.patronymic,
       surname: this.surname,
       telephoneNumber: this.telephoneNumber,
       password: this.$store.state.user.password,
        workPlace: this.workPlace,
        headers: {
          "Authorization": this.$store.state.token,
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
          "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },

        ...this.messageSucces='Сохранено'
      })
      //return instance.get(/tests/)
      .then((response) => {

                    console.log(response);
                })
},
    },

computed: {

    //фамилия пользователя
   firstname: {
        set(value){
          this.$store.dispatch('ADD_name_user', value );
        },
        get(){
          return this.$store.getters.firstname;
        }
     },
   

    //имя пользователя
    surname: {
        set(value){
          this.$store.dispatch('ADD_surname_user', value );
        },
        get(){
          return this.$store.getters.surname;
        }
     },

      //отчество пользователя
    patronymic: {
        set(value){
          this.$store.dispatch('ADD_patronymic_user', value);
        },
        get(){
          return this.$store.getters.patronymic;
        }
     },

      //отчество пользователя
    email: {
        set(value){
          this.$store.dispatch('ADD_email_user',value);
        },
        get(){
          return this.$store.getters.get_email;
        }
     },

     telephoneNumber: {
        set(value){
          this.$store.dispatch('ADD_telephoneNumber_user', value);
        },
        get(){
          return this.$store.getters.telephoneNumber;
        }
     },

     nickName: {
        set(value){
          this.$store.dispatch('ADD_nickName_user', value );
        },
        get(){
          return this.$store.getters.nickName;
        }
     },

     location: {
        set(value){
          this.$store.dispatch('ADD_location_user', value );
        },
        get(){
          return this.$store.getters.location;
        }
     },

     workPlace: {
        set(value){
          this.$store.dispatch('ADD_workPlace_user', value );
        },
        get(){
          return this.$store.getters.workPlace;
        }
     },

     birthDate: {
        set(value){
          this.$store.dispatch('ADD_birthDate_user', value );
        },
        get(){
          return this.$store.getters.birthDate;
        }
     }


   },

}
</script>


<style>

  .bottom_button, .bottom_button_2{
    display: inline-block;
    width: 200px;
    height: 40px;
    float: right;
    margin-right: 8%;
  }

  .bottom_button{  
    clear: both;
    width: 100px;
    margin-right: 9%;
  }

  .input_user{
    width: 200px;
    height: 36px;
    background: #FFFFFF;
     border: 1px solid #C4C4C4;
     box-sizing: border-box;
     border-radius: 5px;
     padding-left: 8px;
  }

  .block_user{
    margin-bottom: 20px;
  }

  .img_edit{
    float: right;
    background-image: url("../assets/edit.svg");  
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;  
    position: absolute;
    top: 36%;
    right: 6%;
  }

  .email_prof_input, .number_prof_input, .teleg_prof_input, .birthday_prof_input, .place_prof_input, .work_prof_input{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #1B1D21;
    margin-bottom: 24px;
  }

  .email_prof, .number_prof, .teleg_prof, .birthday_prof, .place_prof, .work_prof{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #808191;
    margin-bottom: 8px;
  }

  .main_part_edit{
    width: 1052px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.15);
    border-radius: 10px;
    padding-left: 65px;
    padding-top: 60px;
  }

  .left_side{
  width: 200px;
  display: inline-block;
  float: left;
  margin-right: 50px;
  }

  .right_side{
    width: 500px;
    height: 300px;
    display: inline-block;
  }

  .ava{
    margin-right: 40px;
    margin-bottom: 20px;

  }

  .name_prof{
    font-family: 'RobotoMedium', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #1B1D21;
    margin-bottom: 15px;
    width: 170px;
  }

  .prof_prof{
    font-family: 'RobotoMedium', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #808191;
    width: 170px;
  }

  .contact_prof_part{
    margin-right: 50px;
    float: left;
  }

  .contact_prof, .about_prof{
   
    font-family: 'RobotoBold', Helvetica, Arial, sans-serif;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 150%;
   color: #1B1D21;
  }

  .email_prof, .number_prof, .work_prof, .teleg_prof, .place_prof{

  }

</style>