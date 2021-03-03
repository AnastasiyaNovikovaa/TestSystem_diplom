<template>
  <div class="main-wrapper">
    <p class="heading">Дедлайны</p>
    <div class="catalog">
	<Catalog_cart/>
    </div>
   
    <h3>Hello</h3>
  <hr>
  <button @click="add">Add a component</button>
  <ul>
  <li v-for="component in arr"
	:key="component.idOrder">
    <component_a  v-bind:item="component"></component_a> 
  </li>
</ul>
  </div>
</template>


<script>
//import Header from './components/Header.vue'
//import SideBar from './components/SideBar.vue'
import Catalog_cart from '../components/Catalog_cart.vue'
//import axios from 'axios'


export default {
  name: '',
  components: {
     Catalog_cart,
	component_a: {
		render(createElement){
			return createElement ("h3","Привет")
		},

    props: ['item'],
	//template: '<h3>Привет</h3>'
   }
  },
  data() {
    return {
      test: null,
      arr: []
    };
  },
  methods: {
  add(){
      this.arr.push({
         idOrder: Math.random().toFixed(2),
         title: 'Номер заказа:'
        });
  }},
 /* mounted(){
  axios
  .get('http://testing-system.eu-west-2.elasticbeanstalk.com/api/test')
  .then(response=> this.test=response);
  }*/
}
</script>

<style>

.main-wrapper{
   max-width: 78%;
   margin:0 40px 0 19%; /*260px*/
   padding-bottom: 120px;
}

.heading{
font-family: 'PoppinsBold',  Helvetica, Arial, sans-serif;
font-size: 28px;
text-align: left;
font-style: normal;
font-weight: 700;
line-height: 42px;
letter-spacing: 0em;
margin-top: 52px;

}

</style>
