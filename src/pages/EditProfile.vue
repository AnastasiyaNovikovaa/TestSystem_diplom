<template>
<div class="main-wrapper" >   
    <p class="heading">Профиль пользователя</p>

    <div class="main_part_edit">

      <div class="left_side">
        
            <div><img src="../assets/ava_prof.png" class="ava"></div>
            <p class="name_prof">Гончаров Сергей Павлович</p>
            <p class="prof_prof">Доктор технических наук, профессор</p>
         
      </div>

      <div class="right_side">

        <div class="contact_prof_part">
          
          <p class="contact_prof">Контакты</p>
          
          <div>
             <p class="email_prof">Email</p>
             <p class="email_prof_input">gonchar.serg@gmail.com</p>
           </div>

           <div>
             <p class="number_prof">Номер телефона</p>
             <p class="number_prof_input">+7(936) 238-54-50</p>
           </div>

           <div>
             <p class="teleg_prof">Telegram</p>
             <p class="number_prof_input">@SergeyGonch</p>
           </div>

        </div>

        <div class="about_prof_part">

          <p class="about_prof">О себе</p>
          
          <div>
             <p class="birthday_prof">Дата Рождения</p>
             <p class="birthday_prof_input">28/11/1968</p>
           </div>

           <div>
             <p class="place_prof">Местоположение</p>
             <p class="place_prof_input">Россия, г.Санкт-Петербург</p>
           </div>

           <div>
             <p class="work_prof">Место работы</p>
             <p class="work_prof_input">Санкт-Петербургский Государственный Электротехнический Университет</p>
           </div>
          
        </div>

      </div>
      
    </div>
  
  
  </div>
</template>

<script>



</script>


<style>

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
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.15);
    border-radius: 10px;
    padding-left: 65px;
    padding-top: 60px;
  }

  .left_side{
  width: 300px;
  display: inline-block;
  float: left;
  }

  .right_side{
    width: 600px;
    height: 400px;
    display: inline-block;
  }

  .ava{
    margin-right: 100px;
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
    margin-right: 60px;
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