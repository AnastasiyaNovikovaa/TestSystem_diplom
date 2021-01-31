<template>
  <div class="cart_test">
  <p class="head_cart">{{test_data.head}}</p>
  <p class="sub">Предмет</p>
  <p class="second-layer">{{test_data.subject}}</p>
  <p class="sub">Дедлайн</p>
  <p class="second-layer">{{test_data.date_close}}</p>
  <!--<button><router-link
    :to="{name: 'test', params: { id: test_data.id} }"
   class="button">СТАТИСТИКА</router-link></button>-->

   <button type="button" class="button" @click="$router.push({name: 'test', params: { id: test_data.id-1} })">СТАТИСТИКА</button>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    test_data: {
      type: Object,
      default() {
        return
      }
    }
  },
  methods: {
    OpenStatic() {
      this.$emit('Statistic', this.test_data.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.cart_test{
background: #FFFFFF;
height: 255px;
width: 200px;
left: 0px;
top: 0px;
border-radius: 12px;
box-shadow: 0px 0px 18px rgba(128, 129, 145, 0.15);
padding: 16px;
margin-right: 32px;
}

.head_cart{
font-family: 'RobotoMedium',  Helvetica, Arial, sans-serif;
font-size: 14px;
text-align: left;
font-style: normal;
font-weight: 700;
line-height: 150%;
color: #24252E;
margin-bottom: 12px;
}

.sub{
  font-family: 'RobotoMedium',  Helvetica, Arial, sans-serif;
font-size: 14px;
text-align: left;
font-style: normal;
font-weight: 700;
line-height: 150%;
color: #24252E;
margin-bottom: 1px;
}

.second-layer {
  font-family: 'RobotoRegular',  Helvetica, Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
color: #828282;
margin-bottom: 12px;
}

.button {
height: 32px;
width: 167px;
border-radius: 5px;
background: #6C5DD3;
border: none;
color: #ffffff;
text-align: center;
vertical-align: center;
}

</style>
