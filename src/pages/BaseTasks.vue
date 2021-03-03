<template>
  <div class="main-wrapper">
    <p class="heading">База задач</p>

    <div>
    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск по задаче" id="search_task"></b-form-input>
	</div>

     <div class="Select">
  <template>
    <b-form-select v-model="selected3" class="mb-3 icon subject">
      <b-form-select-option :value="null" class="text">Предмет</b-form-select-option>
      <b-form-select-option value="a" class="text">БЖД</b-form-select-option>
      <b-form-select-option value="b" class="text">Менеджмент</b-form-select-option>
      <b-form-select-option value="c" class="text">Экономика</b-form-select-option>
      <b-form-select-option value="d" class="text">Физика</b-form-select-option>
      <b-form-select-option value="e" class="text">Механика</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

<div class="Select">
  <template>
    <b-form-select v-model="selected1" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Категория</b-form-select-option>
      <b-form-select-option value="a" class="text">Сортировать А-Я</b-form-select-option>
      <b-form-select-option value="b" class="text">Сортировать Я-А</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

 <div class="Select">
  <template>
    <b-form-select v-model="selected2" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Сложность</b-form-select-option>
      <b-form-select-option value="a" class="text">Лёгкий</b-form-select-option>
      <b-form-select-option value="b" class="text">Средний</b-form-select-option>
      <b-form-select-option value="b" class="text">Сложный</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

<template>
  <div>
    <b-table id="my-table" striped hover :items="items" :fields="fields" :per-page="perPage"
      :current-page="currentPage" ></b-table>
  </div>
  </template>

  <div class="pagin">
   <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"

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
        selected1: null,
        selected2: null,
        selected3: null,
        perPage: 10,
        currentPage: 1,
        fields: ['S','Задание', 'Предмет', 'Категория', 'Сложность', 'heart'],
        items: [
          { isActive: true, S:'', Задание: 'Выбрать значение тока при котором человек почувствует легкое покалывание', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Легкий', heart: '' },
          { isActive: true,  S:'', Задание: 'Освещенность рабочего места при боковом освещении составляет Евн=40 (лк).', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true, S:'', Задание: 'Рассчитать необходимую площадь световых проемов при применении бокового освещения', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Легкий', heart: ''  },
          { isActive: true,  S:'', Задание: 'Определить необходимое количество ламп накаливания типа Б для светильников', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Сложный', heart: ''  },
          { isActive: true, S:'', Задание: 'Определить необходимое количество люминесцентных ламп дневного света марки', Предмет: 'БЖД', Категория: 'Электричество', Сложность: 'Легкий', heart: ''  },
          { isActive: true, S:'', Задание: 'Коэффициент использования светового потока светильника типа ЛБ с учетом', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true, S:'', Задание: 'Коэффициент использования светового потока светильника типа ЛБ с учетом', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true,  S:'',Задание: 'Коэффициент использования светового потока светильника типа ЛБ с учетом', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true,  S:'',Задание: 'Коэффициент использования светового потока светильника типа ЛБ с учетом', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true,  S:'', Задание: 'Коэффициент использования светового потока светильника типа ЛБ с учетом', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true,  S:'', Задание: 'Выбрать значение тока при котором человек почувствует легкое покалывание', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Легкий', heart: '' },
          { isActive: true, S:'', Задание: 'Освещенность рабочего места при боковом освещении составляет Евн=40 (лк).', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Средний', heart: ''  },
          { isActive: true, S:'', Задание: 'Рассчитать необходимую площадь световых проемов при применении бокового освещения', Предмет: 'БЖД', Категория: 'Электричество', 	Сложность: 'Легкий', heart: ''  }
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

#search_task {
	width: 316px;
	height: 40px;
	border-color: white;
	border-radius: 8px;
	background-image: url("../assets/search_icon.png");   
    background-repeat: no-repeat;  
    background-position: 20px;
    padding-left: 50px; 
    float: left;

    margin-right: 30px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;   
    color: #C4C4C4;
}

ul.pagination>li:nth-child(1), ul.pagination>li:last-child{
	opacity: 0;
}

ul.pagination>li{
	width: 28px;
	height: 28px;
	margin-right: 4px;
}

.page-item.active .page-link{
	background: #6C5DD3;
    box-shadow: 0px 4px 10px rgba(218, 224, 246, 0.52);
    border-color: #6C5DD3;
    border-radius: 4px;
	width: 28px;
	height: 28px;
}

.page-link{
	background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(218, 224, 246, 0.52);
    border-radius: 4px;
	width: 28px;
	height: 28px;
	border-color: #FFFFFF;
	display: inline-block;
	padding: 0px;
	text-align: center;
	color: #808191;
}

li.page-item.disable{
	border-color: white;
}

.pagination{
	position: absolute;
    right: 6px;
}

#search_task::placeholder {color: #C4C4C4;}

.subject{
	margin-left: 25px;
}

#my-table td:nth-child(1){
	background-image: url("../assets/rectangle.png");   
	background-size: 20px 20px;
    background-repeat: no-repeat;  
    background-position: 0px center; 
}

#my-table td:nth-child(1):hover{
	background-image: url("../assets/rect_pupl.png");   
	background-size: 20px 20px;
    background-repeat: no-repeat;  
    background-position: 0px center; 
    cursor: pointer;
}


td:nth-child(3){
	width: 160px; 
}

td:nth-child(4){
	width: 200px; 
}

td{
	padding-left: 50px;
}

.table-striped tbody tr:nth-of-type(odd) {
   background-color: #F5F9FD; 
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-bottom: 1px solid #D9EAF5;
    border-top: none;
    font-family: 'PoppinsRegular',  Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 150%;
    color: #1B1D21;
    padding-left: 34px;
}

td:nth-child(2){
	width: 440px;
	padding-left: 0px;
}

.table thead th:nth-child(2){
	padding-left: 0px;
}

.table thead th:nth-child(1){
	padding-right: 0px;
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 1px solid #D9EAF5; 
    font-family: 'PoppinsRegular',  Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;
	color: #808191;
}

.table thead th:nth-child(1){
	background-image: url("../assets/rectangle_check.svg");   
	background-size: 24px 24px;
    background-repeat: no-repeat;  
    background-position: -2px center; 

}


.table thead th:nth-child(6), .table thead th:nth-child(1){
	color: #F5F9FD; 
}

#my-table td:nth-child(6){
	width: 100px;
	background-image: url("../assets/heart.png");   
	background-size: 20px 20px;
    background-repeat: no-repeat;  
    width: 60px; 
    background-position: 36px center;
}

td:nth-child(6):hover{
	cursor: pointer;
}

#my-table{
	
	padding-bottom: 40px;
}

.pagin{
	float:right;
	margin-top: 30px;
	margin-bottom: 40px;
	
}

.table-striped tbody tr:hover {
	background-color: #EEF4FB;
}

.custom-select:focus {
    border-color: none;
    outline: 0;
    box-shadow: none;
    }

</style>