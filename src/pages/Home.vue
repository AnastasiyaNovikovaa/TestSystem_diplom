<template>
  <div class="main-wrapper">
    <p class="heading">Дедлайны</p>
    <div class="catalog">
	<Catalog_cart/>
    </div>
  </div>
</template>

<script>
//import Header from './components/Header.vue'
//import SideBar from './components/SideBar.vue'
import Catalog_cart from '../components/Catalog_cart.vue'

export default {
  name: '',
  components: {
Catalog_cart
  }
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
