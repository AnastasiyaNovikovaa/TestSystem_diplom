<template>
  <div class="main-wrapper" >   
    <p class="heading">Страница тестов</p>
  <div class="Select">
  <template>
    <b-form-select v-model="selected" class="mb-3 icon" >
      <b-form-select-option :value="null" class="text">Не выбрано</b-form-select-option>
      <b-form-select-option value="a" class="text">Сортировать А-Я</b-form-select-option>
      <b-form-select-option value="b" class="text">Сортировать Я-А</b-form-select-option>
     
    </b-form-select>
</template>
</div>

<div>
    <b-form-input size="sm" class="mr-sm-2" placeholder="Поиск по названию теста" id="search_test"></b-form-input>
</div>

    <div class="catalog catalog_test">
    <p class="Open_tests">Открытые тесты</p>
    <button class="New_test" >
   <div class="plus"> <img src="../assets/plus.png"></div>
   <div>  <p class="Create">Создать тест</p></div>
	</button>
	<Catalog_cart/>
    </div>

     <div class="catalog close_test">
    <p class="Open_tests">Завершенные тесты</p>
	<Catalog_cart/>
    </div>

  </div>
</template>

<script>
import Catalog_cart from '../components/Catalog_cart.vue'

export default {
  name: '',
  components: {
   Catalog_cart
  },
  data() {
      return {
        selected: null
      }
    }
}

</script>

<style>

.New_test {
  margin-right: 32px;
  margin-bottom: 32px;
  float:left;
  background: #F4F7F9;
  border: 2px dashed #AFBFF9;
  stroke-dasharray: 8 8;
  box-sizing: border-box;
  border-radius: 10px;
  height: 256px;
  width: 200px;
}

.plus {
	width: 90px;
	height: 90px;
	margin: -20px 40px 16px auto;

}

.Create {
	font-family: 'RobotoMedium', Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 16px;
	text-align: center;
	text-transform: uppercase;
	color: #AFBFF9;
}

img {
	margin-right: 0;
}

.Open_tests{
	font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-size: 20px;
   font-style: normal;
   font-weight: 400;
   line-height: 28px;
   letter-spacing: 0em;
   text-align: left;
   color: #1B1D21;
   margin-bottom: 26px;
}

#search_test {
	width: 316px;
	height: 40px;
	border-color: white;
	border-radius: 8px;
	background-image: url("../assets/search_icon.png");   
    background-repeat: no-repeat;  
    background-position: 20px;
    padding-left: 50px; 

    margin-right: 30px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;   
}

#search_test::placeholder {color: #C4C4C4;}

.mb-3 {
	width: 200px;
	height: 40px;
	left: 272px;
	top: 208px;

	background: #FFFFFF;
	border-radius: 5px;
	border: none;
}

.Select {
	float: left;
	margin-right: 32px;
}

.catalog_test {
	clear: both;
	margin-top: 36px;
	padding-bottom: 82px;
}

.close_test {
	padding-bottom: 82px;
}

.text{
	font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #BDBDBD;
	padding-bottom: 12px;
}


.custom-select {
	font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%; 
	color: #BDBDBD;
}

.icon {
	background-image: url("../assets/arrow_light.png");   
    background-repeat: no-repeat;  
    background-position: 172px;
    padding-left: 16px;
}
</style>
