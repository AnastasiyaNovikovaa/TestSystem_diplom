<template>
  <div class="popup_wrapper">
   <div class="popup_preview_test prokrutka">

    <h3 class="head_popup">Предпросмотр создаваемого теста</h3>
    <button @click="ClosePopup_preview" class="icon_close close_setting"></button>

    <div class="info_test">
    
      <p v-if="get_new_test.name!=null && get_new_test.name!=''"> <b>Название теста: </b>{{get_new_test.name}}</p>
      <p v-else> <b>Название теста: </b>не заполнено</p>

      <p v-if="get_new_test.description!=null && get_new_test.description!=''"><b>Описание теста: </b>{{get_new_test.description}}</p>
      <p v-else> <b>Описание теста: </b>не заполнено</p>

      <p v-if="get_new_test.subject!=null && get_new_test.subject!=''"> <b>Предмет: </b>{{get_new_test.subject}}</p>
      <p v-else> <b>Предмет: </b>не заполнено</p>

      <p v-if="get_new_test.category!=null && get_new_test.category!=''"><b>Категория: </b>{{get_new_test.category}}</p>
      <p v-else> <b>Категория: </b>не заполнено</p>

      <p v-if="get_new_test.deadline!=null && get_new_test.deadline!=''"><b>Дедлайн: </b>{{get_new_test.deadline}}</p>
      <p v-else> <b>Дедлайн: </b>не заполнено</p>

      <p><b>Вопросы c текстовым ответом:</b></p>
      
      <div v-for="card in get_new_test.cards" :key="card.id">
        <p>{{get_new_test.cards.indexOf(card)+1}}. Вопрос: {{card.question}}</p>
       <p>Ответ: {{card.answer}}</p>
      </div>

      <p><b>Вопросы типа один из нескольких:</b></p>

      <div v-for="card in get_new_test.polls" :key="card.id">
        <p>{{get_new_test.polls.indexOf(card)+1}}. Вопрос: {{card.title}}</p>
        <div v-for="variant in card.variables" :key="variant.id">Вариант ответа: {{variant}} </div>
      </div>


    </div>
    
  </div>
</div>
</template>

<script>

  

  export default {
    components: {
    
  },
    data() {
      return {
        
      }
    },

  methods: {
    ClosePopup_preview(){
      this.$emit('ClosePopup_preview');
    }
  },

  computed: {
    get_new_test(){
       
        return this.$store.state.newTest;
    
    }
  }
 }
  
</script>

<style>

  .info_test{
    clear: both;
  }

  .popup_preview_test{
    width: 668px;
    height: 550px;
    background-color: white;
    padding-left: 40px;
    padding-top: 30px;
    padding-right: 40px;
    padding-bottom: 30px;
    box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.1);
    margin: 0 auto;
    z-index: 1000;
    position: fixed;
    top: 50px;
    left: 400px;
    border-radius: 12px;
  }


  .close_setting{
    border: none;
    background-color: white;
    float: right;
    margin-right: 16px;
    margin-top: 16px;
  }

  
</style>