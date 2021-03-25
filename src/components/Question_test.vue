<template>
  <div class="block_question">

    <!--<input v-model="question" type="text" placeholder="Новый вопрос" name="question_test" class="question_test">-->

    <select v-model="select" class="select_type_question arrow_light">
      <option v-for="(select,index) in selects" :key="index">{{ select}}</option>
    </select>

    <!--БЛОК С НЕСКОЛЬКИМИ ОТВЕТАМИ И ТОЛЬКО ОДНИМ ВЕРНЫМ -->
    
    <div v-if="select=='Один из списка'" class="one_from_list">

      <input v-model="one_answer_question" type="text" placeholder="Новый вопрос" name="question_test" class="question_test">
      <p class="text_for_answer">Введите варианты ответов и отметьте верный</p>

      <!--RADIO+INPUT ДЛЯ ВАРИАНТОВ ОТВЕТА -->
      <p> <input  name="one_answer" type="radio" value="n1"> 
        <input v-model="one_answer_answer" class="variant_answer" type="text" placeholder="Первый вариант ответа" name="variant_answer" >
      </p>

      <p> <input name="one_answer" type="radio" value="n2"> 
       <input v-model="one_answer_answer" type="text" placeholder="Второй вариант ответа" name="variant_answer" class="variant_answer">
     </p>

     <p> <input name="one_answer" type="radio" value="n3">
       <input v-model="one_answer_answer" type="text" placeholder="Третий вариант ответа" name="variant_answer" class="variant_answer">
     </p>

     <p>
      <input name="one_answer" type="radio" value="n4">
      <input v-model="one_answer_answer" type="text" placeholder="Четвертый вариант ответа" name="variant_answer" class="variant_answer">
    </p>

    
    <ul class="question_answer_new">
      <li v-for="component in arr"
      :key="component.idOrder">
      <Radio_button_new  v-bind:item="component"></Radio_button_new> 
    </li>
  </ul>
  <button @click="add" class="add_question">Добавить вариант</button>
  
</div>

<!--ЗАКОНЧИЛСЯ БЛОК С НЕСКОЛЬКИМИ ОТВЕТАМИ И ТОЛЬКО ОДНИМ ВЕРНЫМ-->

<!--ЗДЕСЬ БЛОК С НЕСКОЛЬКИМИ ПРАВИЛЬНЫМИ ответами -->

<div v-if="select=='Несколько из списка'" class="Several_from_list">
  
  <p class="text_for_answer">Введите варианты ответов и отметьте верные</p>
  <p><input name="several_answer" type="checkbox" value="nedzen"> <input class="Several_variant_answer" type="text" placeholder="Первый вариант ответа" name="variant_answer" ></p>

  <p><input name="several_answer" type="checkbox" value="nedzen"> <input type="text" placeholder="Второй вариант ответа" name="variant_answer" class="Several_variant_answer"></p>

  <p><input name="several_answer" type="checkbox" value="nedzen"><input type="text" placeholder="Третий вариант ответа" name="variant_answer" class="Several_variant_answer"></p>

  <p><input name="several_answer" type="checkbox" value="nedzen"><input type="text" placeholder="Четвертый вариант ответа" name="variant_answer" class="Several_variant_answer"></p>
  
  <ul class="question_answer_new">
    <li v-for="component in arr_several"
    :key="component.idOrder">
    <Checkbox_new  v-bind:item="component"></Checkbox_new> 
  </li>
</ul>
<button @click="add_several" class="add_question">Добавить вариант</button>
</div>

<!--ЗАКОНЧИЛСЯ блок с несколькими ПРАВИЛЬНЫМИ ответами -->

<!--БЛОК ТЕКСТОВОГО ВОПРОСА -->

<div v-if="select=='Текстовый ответ'" class="Several_from_list">
  <input v-model="simple_question" type="text" placeholder="Новый вопрос" name="question_test" class="question_test">
  <input v-model="simple_answer" type="text" placeholder="Введите правильный ответ" 
  name="variant_answer" class="text_answer">
</div>

<!-- ЗАКОНЧИЛСЯ БЛОК ТЕКСТОВОГО ВОПРОСА -->

<div class="new_hr"><hr></div>

<div class="ball_right_answer">
 <p class="text_right_answer">Баллы за правильный ответ: </p>
 <input type="text" name="right_answer" placeholder="1" class="right_answer">
</div>


<button class="save_question">СОХРАНИТЬ</button>
<button class="delete_question" @click="$emit('delete-row')">Удалить</button>
</div>
</template>

<script>

  import Radio_button_new from '../components/Radio_button_new.vue'
  import Checkbox_new from '../components/Checkbox_new.vue'

  
  export default {
    name: "PostQuestion",

    props: {
      id_test: {
        type: Number
      }
    },

    components: {
      Radio_button_new,
      Checkbox_new
    /*component_a: {
    render(createElement){
      return createElement ("input", {class:"variant_answer"})
    },

    props: ['item']
   },

   /*component_several_answer: {
    render(createElement){
      return createElement ("input", {class:"Several_variant_answer"})
    },

    props: ['item']
  }*/

},
data() {
  return {
    selects: ['Один из списка', 'Несколько из списка','Текстовый ответ', 'Загрузка фото'],
    select: 'Один из списка',
    arr: [],
    arr_several: [],
    items: [],
    count:1,
    picked_one_answer: '',
  }
},

methods: {

 add(){
  this.arr.push({
   idOrder: Math.random().toFixed(3)
 });
},
add_several(){
  this.arr_several.push({
   idOrder: Math.random().toFixed(2)
 });
}
},


computed: {


    //ВОПРОС ДЛЯ ВОПРОСА С ОДНИМ ПРАВИЛЬНЫМ ОТВЕТОМ
    one_answer_question: {
      set(value){
        this.$store.dispatch('ADD_ONE_ANSWER_TEST',{title: value} );
      },
      get(){
        return this.$store.getters.one_answer_question;
      }
    },

     //ОТВЕТ ДЛЯ ВОПРОСА С ОДНИМ ПРАВИЛЬНЫМ ОТВЕТОМ
     one_answer_answer: {
      set(value){
        this.$store.dispatch('ADD_ONE_ANSWER_ANSWER_TEST',{variables: value} );
      },
      get(){
        return this.$store.getters.one_answer_answer;
      }
    },

     //ВОПРОС ДЛЯ ТЕКСТОВОГО ВОПРОСА
     simple_question: {
      set(value){
        this.$store.dispatch('ADD_SIMPLE_TEST',{question: value} );
      },
      get(){
        return this.$store.getters.simple_question;
      }
    },

     //ОТВЕТ ДЛЯ ТЕКСТОВОГО ВОПРОСА
     simple_answer: {

      set(value){
        this.$store.dispatch('ADD_SIMPLE_TEST_ANSWER',{answer: value} );
      },
      get(){
        return this.$store.getters.simple_answer.answer;
      }
    }
  }
}

</script>

<style>

  .delete_question{
    border: none;
    background: white;
    position: relative;
    left: 32%;
    padding-top: 24px;
  }
  .delete_question:focus{
    outline: red;
  }

  .text_right_answer{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #1B1D21;
    margin-bottom: 24px;
    float: left;
    padding-top: 4px;
  }

  .text_for_answer{
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #1B1D21;
    margin-bottom: 24px;
  }

  .save_question{
    width: 232px;
    height: 36px;
    background: #6C5DD3;
    border-radius: 8px;
    border: none;
    color: white;
    float: right;
    margin-right: 80px;
    margin-top: 20px;
  }

  .new_hr{
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .ball_right_answer{
    margin-top: 20px;
    float: left;
  }

  .right_answer {
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 16px;
    margin-left: 8px;
    width: 30px;
    border-color: #BDBDBD;
    padding-left: 8px;
  }

  .right_answer:focus{
   outline: red;
   border-color: #6C5DD3;
 }

 .new_hr{
  width: 92%;
}

.add_question{
 font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 color: #6C5DD3;
 background: white;
 border: none;
 border-top: none;
 padding-left: 0px;
 padding-right: 0px;
 padding-bottom: 0px;
}

.add_question:focus{
  outline: red;
}

.question_answe_new>li{
  list-style-type: none;
}

ul{
 padding-left: 0px;
}

.variant_answer::placeholder {
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #808191;
}

.variant_answer, .Several_variant_answer, .text_answer{
 border-top: none;
 border-right: none;
 border-left: none;
 border-bottom: none;
 width: 80%;
 margin-bottom: 12px;
 font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
 padding-left: 8px;
}

.variant_answer:focus, .Several_variant_answer:focus, .text_answer:focus{
  outline: red;
}

.select_type_question{
  width: 308px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 5px;
  padding-right: 16px;
  font-family:  'RobotoRegular', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  float: right;
  margin-right: 60px;
}

.icon_arrow {
  background-image: url("../assets/arrow_light.png");   
  background-repeat: no-repeat;  
  background-position: 280px;
  padding-left: 16px;
}

.question_test:focus{
  outline: red;
}

.question_test{
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #C4C4C4;
  width: 50%;
  margin-bottom: 40px;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
  background-image: url("../assets/photo.png");   
  background-repeat: no-repeat;  
  background-position: 95%;
  margin-right: 10%;
  padding-bottom: 10px;
}

.block_question{
  background: #FFFFFF;
  box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.15);
  border-radius: 8px;
  width: 94%;
  height: 60%;
  clear: both;
  padding-top: 50px;
  padding-bottom: 80px;
  padding-left: 50px;
  margin-bottom: 40px;
}

.variant_answer:focus{
  padding-left: 20px;
}
</style>