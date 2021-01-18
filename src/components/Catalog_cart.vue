<template>
  <div class="catalog-cart">
  <Cart_test
      v-for="test in TESTS"
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

  comuted: {
    ...mapGetters([
      'TESTS'
      ])
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
  
}

.cart{
  margin-right: 32px;
  margin-bottom: 32px;
}

</style>
