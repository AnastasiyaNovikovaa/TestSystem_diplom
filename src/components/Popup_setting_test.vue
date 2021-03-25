<template>
  <div class="popup_wrapper">
   <div class="popup_setting_test prokrutka">
    <h3>Настройка публикации</h3>
    <button @click="ClosePopup_setting" class="icon_close close_setting"></button>

    <div class="select_subject">
      <p class="test_select">Введите название предмета</p>
       <input v-model="subject" type="text" placeholder="Математический анализ" class="select_subject_button arrow_light">
      <!--<select v-model="select" class="select_subject_button arrow_light">
       <option v-for="(select,index) in selects" :key="index">{{ select}}</option>
      </select>-->
    </div>

    <div class="select_category">
      <p class="test_select">Выберите категорию</p>
      <input v-model="category" type="text" placeholder="Интегралы" class="select_category_button arrow_light">
      <!--<select v-model="select_category" class="select_category_button arrow_light">
       <option v-for="(select_category,index_cat) in selects_category" :key="index_cat">{{ select_category}}</option>
      </select>-->
    </div>

    <div class="rating">
      <p class="test_select">Оценивание</p>
      <div class="block_rating_5">
      <p class="text_rating">“5” при % правильных ответов: ></p>
      <input v-model.number="evalution_5" type="text" name="rating_5" placeholder="85" class="rating_5">
       </div>

       <div class="block_rating_4">
      <p class="text_rating">“4” при % правильных ответов: ></p>
      <input v-model.number="evalution_4" type="text" name="rating_4" placeholder="70" class="rating_4">
       </div>

        <div class="block_rating_3">
      <p class="text_rating">“3” при % правильных ответов: ></p>
      <input v-model.number="evalution_3" type="text" name="rating_3" placeholder="55" class="rating_3">
       </div>

       <div class="show_result">
       <input type="checkbox" class="show_checkbox"> <p class="text">Показывать результат студенту</p>
       </div>
    </div>

    <div class="time_test">
      <p class="test_select">Ограничить время ответа на вопрос</p>
      <b-form-radio class="radio" v-model="selected"   value="A">Не ограничивать</b-form-radio>
      <b-form-radio class="radio" v-model="selected"  value="B">Установить время</b-form-radio>
    </div>

    <div class="close_test_">
      <p class="test_select">Закрыть тест через</p>
      <b-form-radio class="radio_" v-model="selected_close"  value="C">Не удалять</b-form-radio>
      <b-form-radio class="radio_" v-model="selected_close"  value="D">Установить время</b-form-radio>
    </div>

    <div v-if="selected_close=='D'" class="Date_deadline">
      <label>Введите дату и время</label>
  <input v-model="DateDeadline" type="text" placeholder="XX.XX.XXXX XX:XX" name="variant_answer" class="deadline">

  <!--<label>Введите время</label>
  <input type="text" placeholder="XX:XX" name="variant_answer" class="deadline">-->
  
 </div>

 <div v-if="selected=='B' && selected_close=='D'" class="Time_question">
      <label>Количество минут для одного вопроса</label>
  <input v-model="timeQuestion" type="text" placeholder="Минуты" name="variant_answer" class="deadline">
  
 </div>

 <div v-if="selected=='B'&& selected_close!='D'" class="Time_question_">
      <label>Количество минут для одного вопроса</label>
  <input v-model="timeQuestion" type="text" placeholder="Минуты" name="variant_answer" class="deadline">
  
 </div>

<button @click="ClosePopup_setting" class="save_setting">Сохранить</button>


  </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        selects: ['Мат. анализ', 'Физика','Программирование', 'Экономика'],
        select: 'Мат. анализ',
        selects_category: ['Интегралы', 'Производная','Дифуры', 'Пределы'],
        select_category: 'Интегралы',
        selected: 'A',
        selected_close: 'C'
      }
    },


  methods: {
    ClosePopup_setting(){
      this.$emit('ClosePopup_setting');
     }
  },

  computed: {

    //предмет
    subject: {
        set(value){
          this.$store.dispatch('ADD_DATA_TEST',{subject: value} );
        },
        get(){
          return this.$store.getters.subject;
        }
     },

     //категория
     category: {
        set(value){
          this.$store.dispatch('ADD_DATA_TEST',{category: value});
        },
        get(){
          return this.$store.getters.category;
        }
     },

     evalution_5: {
        set(value){
          this.$store.dispatch('ADD_EVALUATION_TEST', {five: value});
        },
        get(){
  
          return this.$store.getters.evaluation.five;
        }
     },

     evalution_4: {
        set(value){
          this.$store.dispatch('ADD_EVALUATION_TEST', {four: value} );
        },
        get(){

          return this.$store.getters.evaluation.four;
        }
     },

     evalution_3: {
        set(value){
          this.$store.dispatch('ADD_EVALUATION_TEST', {three: value} );
        },
        get(){

          return this.$store.getters.evaluation.three;
        }
     },


     //время на один вопрос
     timeQuestion: {
        set(value){
          this.$store.dispatch('ADD_DATA_TEST', {questionResponseTime: value} );
        },
        get(){
          return this.$store.getters.questionResponseTime;
        }
     },
     //дедлайн
     DateDeadline: {
        set(value){
          this.$store.dispatch('ADD_DATA_TEST', {deadline: value} );
        },
        get(){
          return this.$store.getters.deadline;
        }
     }
}
 }
  
</script>

<style>
  .Time_question_{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #1B1D21;
  }

 .Time_question {
  display: inline;
  width: 300px;
  float: left;
  position: relative;
  top: -12%;
   font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #1B1D21;
  }

.Date_deadline{
  float: right;
  display: inline;
  width: 200px;
  position: relative;
    right: -200px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #1B1D21;
}

.deadline{
   background: #FFFFFF;
     border: 1px solid #C4C4C4;
     box-sizing: border-box;
     border-radius: 5px;
     padding-left: 8px;
     height: 32px;
     margin-bottom: 10px;
}

  .prokrutka {
overflow-y: scroll; /* прокрутка по вертикали */
}

  .close_test_{
    width: 200px;
    float: right;
  }

  .save_setting{
    width: 200px;
    height: 36px;
    background: #6C5DD3;
    border-radius: 4px;
    border: none;
    color: white;
    float: right;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .save_setting:focus {
    outline: red;
  }

  .radio>label {
    margin-bottom: 12px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #1B1D21;
    vertical-align: middle;
    padding-top: 2px;
  }

  .show_checkbox{
    float: left;
    margin-right: 10px;
    margin-top: 6px;
    height: 16px;
    width: 16px;
    background-color: red;
  }

  .rating_5, .rating_4, .rating_3{
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 16px;
    margin-left: 8px;
    width: 30px;
    border-color: #BDBDBD;
  }

  .rating_5:focus, .rating_4:focus, .rating_3:focus{
    outline: red;
  }

  .rating_5::placeholder, .rating_4::placeholder, .rating_3::placeholder{
    color: #BDBDBD;
    padding-left: 5px;
  }

  .show_result{
    clear: both;
    margin-bottom: 16px;
  }

  .text_rating{
    float: left;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #1B1D21;
  }

  .text{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #1B1D21;
    padding-top: 2px;
  }

  .rating{
    width: 445px;
  }

  .popup_setting_test{
    width: 668px;
    height: 600px;
    background-color: white;
    padding-left: 40px;
    padding-top: 30px;
    padding-right: 40px;
     box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.1);
  margin: 0 auto;
  z-index: 1000;
  position: fixed;
  top: 20px;
  left: 400px;
  border-radius: 12px;
  }

  .rating{
    clear: both;
  }

  h3{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #1B1D21;
    float: left;
    margin-bottom: 24px;
  }

  .close_setting{
    border: none;
    background-color: white;
    float: right;
    margin-right: 16px;
    margin-top: 16px;
  }

  .test_select{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #1B1D21;
  }

.select_subject{
  width: 245px;
  clear: both;
    float: left;
}
  .select_subject_button, .select_category_button{
    width: 245px;
    margin-bottom: 12px;
    height: 36px;
    background: #FFFFFF;
     border: 1px solid #C4C4C4;
     box-sizing: border-box;
     border-radius: 5px;
     padding-left: 8px;
  }

  .select_category{
     width: 245px;
    float: right;
    margin-bottom: 12px;
  }

  .time_test{
    width: 300px;
    float: left;
  }

  .radio_{
    margin-bottom: 12px;
  }
  
</style>