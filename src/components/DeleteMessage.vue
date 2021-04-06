<template>
  <div class="popup_wrapper_delete">
   <div class="popup_delete_test">

    <p class="head">Удаление теста</p>
    <p class="">Поздравляем! Вы успешно удалили тест!</p>
    <p class="">Вернитесь к странице тестов для продолжения работы</p>
     <button @click="$router.push({name: 'tests'})" class="return_test">Вернуться к тестам</button>
   

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
  },

  
 }
  
</script>

<style>

   .popup_wrapper_delete{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .22);
    z-index: 999;
  }

  .popup_delete_test{
    width: 500px;
    height: 300px;
    background-color: white;
    padding-left: 40px;
    padding-top: 30px;
    padding-right: 40px;
    box-shadow: 0px 4px 18px rgba(128, 129, 145, 0.1);
    margin: 0 auto;
    z-index: 1000;
    position: fixed;
    top: 100px;
    left: 400px;
    border-radius: 12px;
  }

   .return_test{
    width: 200px;
    height: 36px;
    background: #6C5DD3;
    border-radius: 4px;
    border: none;
    color: white;
    float: right;
    margin-top: 30px;
    position: absolute;
    bottom: 40px;
    right: 30px;
  }

  .return_test:focus{
    outline: red;
  }

  .head{
     font-family: 'PoppinsBold',  Helvetica, Arial, sans-serif;
  font-size: 24px;
  text-align: left;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  }
  
</style>