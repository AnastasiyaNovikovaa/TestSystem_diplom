<template>
  <div class="accordion" id="accordion">
    <div class="logo"> <img src="../assets/Лого.png"></div>
     
     <div class="accordion-item">
     <router-link to="/">Главная</router-link>
     </div>

      <div class="accordion-item">
         <p class="accordion-item-head" v-on:click="accordion"> Задачи </p>
 
        <div class="accordion-item-body"> 
               <div class="into"><router-link to="/base_tasks"> База задач</router-link></div>
               <div class="into"> <router-link to="/lovely_tasks"> Избранные задачи</router-link></div>
               <div class="into"> <router-link to="/my_task"> Мои задачи</router-link></div>
        </div>
      </div>
 
    <div class="accordion-item">
        <router-link to="/tests">Тесты </router-link>
    </div>

     <div class="accordion-item">
          <router-link to="/report_card">Ведомость </router-link>
    </div> 

    <div>
    <div class="downline"><hr></div>
    <div class="inst">Инструкция</div>
  </div>
  </div>

</template>

<script>
export default{

    methods: {
        accordion: function (event) {            
    event.target.classList.toggle('active');
        }
    }
 
};

</script>


<style >

  .accordion {
    width: 16%;
    height: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 40px;
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

.accordion-item{
    position: relative;
    float: left;
    text-align: left;
    margin-bottom: 24px;
    font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #808191;
}

a{
  color: #808191;
}

a:hover {
color: #6C5DD3;
text-decoration: none; 
}

.into{
  margin-top: 12px;
  margin-left: 12px;
}

.downline{
  width: 152px;
  margin-top: 140px;
  margin-bottom: 14px;
}

.inst {
font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 150%;
color: #808191;
}

.inst:hover{
  color: #6C5DD3;
  cursor: pointer;
}

img {
  margin-left: 0px;
}

.logo{
  margin-bottom: 112px;
}
 
.accordion-item-head{
    cursor: pointer;
margin:0px;
color:#808191;
}

.accordion-item-head:hover {
color: #6C5DD3;
}

.accordion-item-head:after{    
    content: url("../assets/arrow.png");
    display: block;
    height: 29px;
    position: absolute;
    right: 25px;
    top: 0px;
}
 
.accordion-item-head.active:after{
    content: url("../assets/arrow.png");
    transform: rotate(180deg);
    top:-8px;
}
 
 
.accordion-item-body{
    display: none;

} 
.accordion-item-head.active + .accordion-item-body{
    display: block !important;

flex-direction: column;
flex-wrap: wrap;
}
</style>
