<template>
  <div class="popup_wrapper">
   <div class="popup_publish_test">


    <div class="first_block">
    <h3 class="head_popup">Закрытие теста</h3>
    <button @click="ClosePopup_close" class="icon_close close_setting"></button>

   <!-- <p class="head_publish">Данные для прохождения теста</p>-->
    </div>

     <div class="block_message">
    <p class="block_message">Вы закрыли тест. Ответы от студентов приниматься не будут. Результаты вы можете отследить на странице теста.</p>
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

    computed: {
    
  },

  
  methods: {

     ClosePopup_close(){
      this.$emit('ClosePopup_close');
     },
 }
}
  
</script>

<style>

  p.block_message{
    margin-top: 30px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #1B1D21;
    line-height: 150%;
   text-align: center;
   width: 100%;
   padding-left: 10%;
   padding-right: 10%;
  }

.block_message{
}
  
  
</style>