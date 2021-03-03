<template>
  <div class="main-wrapper">
    <p class="heading head_reportcard">Ведомость</p>

    <div  class = "text-center my-3">
  <b-button  id = "tooltip-target-1">
    
  </b-button> 
  <b-tooltip  target = "tooltip-target-1"  triggers = "hover"> 
  <div class="print"> </div>
    <p class="print_text">Распечатать</p>
    <div class="share"> </div>
    <p class="share_text">Отправить</p>
  </b-tooltip> 
   </div >


<div class="Select">
  <template>
    <b-form-select v-model="selected_years" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Учебный год</b-form-select-option>
      <b-form-select-option value="a" class="text">2020-2021</b-form-select-option>
      <b-form-select-option value="b" class="text">2019-2020</b-form-select-option>
      <b-form-select-option value="с" class="text">2018-2019</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

    <div class="Select">
  <template>
    <b-form-select v-model="selected_subjects" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Предмет</b-form-select-option>
      <b-form-select-option value="a" class="text">Физика</b-form-select-option>
      <b-form-select-option value="b" class="text">Электроника</b-form-select-option>
      <b-form-select-option value="с" class="text">Наноэлектроника</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

 <div class="Select">
  <template>
    <b-form-select v-model="selected_groups" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Группа</b-form-select-option>
      <b-form-select-option value="a" class="text">7301</b-form-select-option>
      <b-form-select-option value="b" class="text">7302</b-form-select-option>
      <b-form-select-option value="b" class="text">7303</b-form-select-option>
      <b-form-select-option value="a" class="text">7304</b-form-select-option>
      <b-form-select-option value="b" class="text">7305</b-form-select-option>
      <b-form-select-option value="b" class="text">7306</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

	<template>
  <div>
    <b-table id="my-table-3" striped hover :items="items" :fields="fields" :per-page="perPage"
      :current-page="currentPage" ></b-table>
  </div>
  </template>

  <div class="message1" data-title="Тест “Основы менеджмента и экономики”"></div>
  <div class="message2" data-title="Тест “Закон Кулона в диэлектрике и электростатике”"></div>
  <div class="message3" data-title="Тест “Основы менеджмента и экономики”"></div>
  <div class="message4" data-title="Тест “Основы менеджмента и экономики”"></div>
  <div class="message5" data-title="Тест “Основы менеджмента и экономики”"></div>

   <div class="pagin">
   <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table-3"

   ></b-pagination>

</div>
    


  </div>
</template>

<script>

export default {
  name: '',
  components: {
   
  },
  data() {
      return {
        selected_groups: null,
        selected_subjects: null,
        selected_years: null,
        perPage: 30,
        currentPage: 1,
        fields: ['N','ФИО', 'Группа', 'Ср', 'Тест1', 'Тест2', 'Тест3', 'Тест4', 'Тест5'],
        items: [
          { isActive: true, N:'1.', ФИО: 'Андреев Андрей Андреевич', Группа: '7301', Ср: '65',  Тест1: '4', Тест2: '8', Тест3: '4', Тест4: '3', Тест5: '3' },
          { isActive: true,  N:'2.', ФИО: 'Андреева Алена Григорьевна', Группа: '7301', Ср: '70',  Тест1: '4', Тест2: '8', Тест3: '4', Тест4: '4', Тест5: '3'},
          { isActive: true, N:'3.', ФИО: 'Богданов Петр Кадырович', Группа: '7301', Ср: '58',   Тест1: '3', Тест2: '8', Тест3: '4', Тест4: '5', Тест5: 'неуд'},
          { isActive: true,  N:'4.', ФИО: 'Вишняков Сергей Алексеевич', Группа: '7301', Ср: '88',   Тест1: '5', Тест2: '8', Тест3: '4', Тест4: '5', Тест5: '3'},
          { isActive: true, N:'5.', ФИО: 'Гордеева Анна Владимировна', Группа: '7301', Ср: '88', Тест1: '5', Тест2: '8', Тест3: '4', Тест4: '3', Тест5: '3'},
          { isActive: true, N:'6.', ФИО: 'Дружинина Виктория Викторовна', Группа: '7301', Ср: '60',   Тест1: '3', Тест2: '8', Тест3: '4', Тест4: '3', Тест5: '3'},
          { isActive: true, N:'7.', ФИО: 'Закиров Булат Исхакович', Группа: '7301', Ср: '65',   Тест1: '4', Тест2: '8', Тест3: '4', Тест4: '4', Тест5: '3'},
          { isActive: true, N:'8.',ФИО: 'Кудрявцев Игнат Семенович', Группа: '7301', Ср: '46',   Тест1: '3', Тест2: '8', Тест3: '4', Тест4: '5', Тест5: '3'},
          { isActive: true,  N:'9.',ФИО: 'Кошкин Александр Дмитриевич', Группа: '7301', Ср: '76',   Тест1: '5', Тест2: '8', Тест3: '4', Тест4: '5', Тест5: '3'},
          { isActive: true,  N:'10.', ФИО: 'Стручков Дмитрий Петрович', Группа: '7301', Ср: '65',  Тест1: '4', Тест2: '8', Тест3: '4', Тест4: '4', Тест5: '3'},
          { isActive: true, N:'11.',ФИО: 'Трофимов Игнат Семенович', Группа: '7301', Ср: '46',   Тест1: '3', Тест2: '8', Тест3: '3', Тест4: '5', Тест5: '3'},
          { isActive: true,  N:'12.',ФИО: 'Трусов Александр Дмитриевич', Группа: '7301', Ср: '76',   Тест1: '5', Тест2: '8', Тест3: 'неуд', Тест4: '5', Тест5: '3'},
          { isActive: true,  N:'13.', ФИО: 'Шаляпин Дмитрий Петрович', Группа: '7301', Ср: '65',  Тест1: '4', Тест2: '8', Тест3: '4', Тест4: '4', Тест5: '3'}
        ],
    }
},

computed: {
	rows() {
        return this.items.length
      }
}
}
</script>

<style>
#my-table-3 th,#my-table-3 td{
  padding-left: 0px;
}
#my-table-3 td:nth-child(1){
  background-image: none; 
      padding-left: 0px;
      width: 10px;
}

#my-table-3 td:nth-child(1){
  background-image: none;
  padding-right: 0px;
}


#my-table-3 thead th:nth-child(1){
 background-image: none;
      padding-left: 0px;
}


#my-table-3 td:nth-child(2){
  width: 280px;
}

#my-table-3 td:nth-child(3){
  width: 140px;
}

#my-table-3 td:nth-child(4){
  width: 110px;
}

#my-table-3 td:nth-child(5){
  width: 110px;
}


#my-table-3 td:nth-child(6){
  width: 110px;
   background-image: none;
}

#my-table-3 td:nth-child(7){
  width: 110px;
  margin-right: 14px;
}

#my-table-3 thead th:nth-child(5):hover, #my-table-3  thead th:nth-child(6):hover, #my-table-3  thead th:nth-child(7):hover, #my-table-3  thead th:nth-child(8):hover{
	color: #6C5DD3;
	cursor: pointer;
}

#my-table-3 thead th:nth-child(4){
	color: #F5F9FD;
	padding-left: 17px;
	padding-right: 0px;
	background-image: url("../assets/ball.svg"); 
  background-repeat: no-repeat;  
  background-position: -10px 10px;
    background-size: 80px 26px;

}

#my-table-3 thead th:nth-child(6){
  color: #808191;

padding-right: 0px;
  
}

#my-table-3 thead th:nth-child(7){
  color: #808191;
  
  padding-right: 0px;
  margin-right: 8px;
}

#my-table-3 td:nth-child(9), #my-table-3 td:nth-child(11), #my-table-3 td:nth-child(16) {
   
}

#my-table-3 td:nth-child(8), #my-table-2 td:nth-child(10),#my-table-3 td:nth-child(12), #my-table-3 td:nth-child(13), #my-table-3 td:nth-child(14), #my-table-3 td:nth-child(15) {
  
}

.message1:hover::after, .message2:hover::after, .message3:hover::after, 
.message4:hover::after, .message5:hover::after { 
   content: attr(data-title); 

    position: absolute; /* Абсолютное позиционирование */
    left: -100%; top: -400%; /* Положение подсказки */
    z-index: 1; /* Отображаем подсказку поверх других элементов */
    font-family: 'RobotoMedium',  Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 150%;
    font-style: normal;
    font-weight: 600;
    padding: 10px 12px;
    width: 148px;
	height: 72px;
	background: #FFFFFF;
	box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.1);
	border-radius: 8px;
	cursor: pointer;
}

.message1{
    display: inline-block;
    position: absolute;
    left: 60%;
    top: 38%;
    background-color: none;
    width: 40px;
    height: 20px;
   }
  
.message2{
    display: inline-block;
    position: absolute;
    left: 68%;
    top: 38%;
    background-color: none;
    width: 40px;
    height: 20px;
   }

.message3{
    display: inline-block;
    position: absolute;
    left: 76%;
    top: 38%;
    background-color: none;
    width: 40px;
    height: 20px;
   }

   .message4{
    display: inline-block;
    position: absolute;
    left: 84%;
    top: 38%;
    background-color: none;
    width: 40px;
    height: 20px;
   }

   .message5{
    display: inline-block;
    position: absolute;
    left: 90%;
    top: 38%;
    background-color: none;
    width: 40px;
    height: 20px;
   }
  
#tooltip-target-1{
  background-image: url("../assets/setting.png");   
  background-repeat: no-repeat;  
  background-color: #F5F9FD;
  width: 24px;
  height: 24px;
  border-color: #F5F9FD;
  position: absolute;
  top: 132px;
  left: 425px;
  cursor: pointer;
}

.tooltip-inner {
	color: #1B1D21;
	width: 148px;
	height: 90px;
	background: #FFFFFF;
	box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.1);
	border-radius: 8px;
	font-family: 'RobotoRegular',  Helvetica, Arial, sans-serif;
  line-height: 150%;
  font-style: normal;
  font-weight: 400;
	font-size: 14px;
	padding: 12px;
}

.print{
	background-image: url("../assets/print.png"); 
	width: 24px;
	height: 24px;
	background-repeat: no-repeat; 
	position: absolute;
	left: 10px;
    cursor: pointer;
    margin-right: 4px;  
}

.share{
	background-image: url("../assets/share.png"); 
	background-repeat: no-repeat; 
    cursor: pointer;
    width: 24px;
	height: 24px;
	background-repeat: no-repeat; 
	position: absolute;
	left: 10px;
    cursor: pointer;
    margin-right: 4px; 
}

.share_text{
	margin-left: 4px;
	cursor: pointer;
}

.print_text{
	margin-left: 12px;
	cursor: pointer;
}

</style>