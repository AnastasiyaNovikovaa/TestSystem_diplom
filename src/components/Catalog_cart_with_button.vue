<template>
  <div class="catalog-cart">
    <button class="New_test" @click="$router.push({name: 'create_test'})">
   <div class="plus"> <img src="../assets/plus.png"></div>
   <div>  <p class="Create">Создать тест</p></div></button>
  <Cart_test
      v-for="test in open_test"
      :key="test.id"
      v-bind:test_data="test"
      @Statistic="showIdCart"
  />  

  </div>
</template>

<script>

import Cart_test from '../components/Cart_test.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: '',
  props: {},
  components: {
    Cart_test
  },
  data () {
    return {
    
    }
  },

  computed: {
    ...mapGetters([
      'TESTS'
      ]),
    open_test() {
     return this.TESTS.filter(test => test.status=='OPEN');
     },
    close_test() {
     return this.TESTS.filter(test => test.status=='CLOSE');
     },
  },

  methods: {
    /*Метод в будущем будет переводить на страницу статистики теста*/
    showIdCart(data) {
      console.log(data)
    },

    ...mapActions([
        'GET_TEST_FROM_API'
      ])
  },

  mounted() {
    this.GET_TEST_FROM_API();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.catalog-cart{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  
}

.cart{
  margin-right: 32px;
  margin-bottom: 32px;
}

</style>
