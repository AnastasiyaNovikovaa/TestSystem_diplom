<template>
  <div class="main-wrapper">
    <p class="heading">Избранные задачи</p>

    <div>
    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск по задаче" id="search_task"></b-form-input>
	</div>

     <div class="Select">
  <template>
    <b-form-select v-model="selected" class="mb-3 icon subject" >
      <b-form-select-option :value="null" class="text">Предмет</b-form-select-option>
      <b-form-select-option value="a" class="text">БЖД</b-form-select-option>
      <b-form-select-option value="b" class="text">Менеджмент</b-form-select-option>
      <b-form-select-option value="b" class="text">Экономика</b-form-select-option>
      <b-form-select-option value="b" class="text">Физика</b-form-select-option>
      <b-form-select-option value="b" class="text">Механика</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

<div class="Select">
  <template>
    <b-form-select v-model="selected" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Категория</b-form-select-option>
      <b-form-select-option value="a" class="text">Сортировать А-Я</b-form-select-option>
      <b-form-select-option value="b" class="text">Сортировать Я-А</b-form-select-option>
     
    </b-form-select>
  </template>
	</div>

 <div class="Select">
  <template>
    <b-form-select v-model="selected" class="mb-3 icon" >
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
        selected: null,
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
td:nth-child(6){
  width: 100px;
  background-image: url("../assets/heart_solid.png");   
  background-size: 20px 20px;
    background-repeat: no-repeat;  
    width: 60px; 
    background-position: 36px center;
}

</style>