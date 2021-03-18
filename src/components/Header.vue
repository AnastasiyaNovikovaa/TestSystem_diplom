<template>
  <div id="header">
  <b-navbar  type="light" class="navbar">
    
     <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="place">

          <b-form-input size="sm" class="mr-sm-2" placeholder="Давай найдем что-нибудь" id="search"></b-form-input>
        </b-nav-form>
        <div class="notif"> <img src="../assets/notification.png"> </div>

        <b-nav-item-dropdown right class="divname">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <img src="../assets/ava_prof.png" class="photoava">
            <div class="name">Гончаров С.П.</div>
          </template>
          <b-dropdown-item class="hover"> <router-link to="/" class="main_header">Главная</router-link></b-dropdown-item>
          <b-dropdown-item class="hover"> <router-link class="edit_profile" to="/edit_profile">Настройка профиля</router-link></b-dropdown-item>
         <b-dropdown-item> <hr></b-dropdown-item>
          <b-dropdown-item class="hover"> <router-link to="/entrance">Выход</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>

  <hr>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../css/header.css'
export default {
  name: '',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .edit_profile.router-link-exact-active{
    background-color: white;
    color: #6C5DD3;
    margin-left: 16px;
  }

#search{
  margin-right: 30px;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 150%;
}

#header {

  width: 78%;
  margin-right: 40px;
  margin-left: auto;
  padding-right: 0px;
  
}


hr {
  border: 1px solid #E3EDF4;
  margin: 0;
}

.photoava{
  height: 44px;
  width: 44px;
}

/*Выпадашка меню*/
.dropdown-menu{
background-color: white;
border: none;
box-shadow: 0px 4px 10px rgba(218, 224, 246, 0.5);
border-radius: 10px;
width: 240px;
height: 160px;
padding-top: 18px;
padding-bottom:18px;
}

.dropdown-menu>li>a{
  padding: 0;
  padding-left: 50px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 8px;
  text-align: left;
  vertical-align: center;
  width: 240px;
  font-family: 'RobotoRegular', Helvetica, Arial, sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 150%;
}

.dropdown-menu>li:nth-child(3)>a{
padding-left: 0px;
margin-top: 4px;
}


.dropdown-menu>li:nth-child(1):before{    
    content: url("../assets/home_grey.png");
    padding-left: 20px;
    padding-top: 4px;
    display: block;
    height: 29px;
    position: absolute;
}

.dropdown-menu>li:nth-child(2):before{    
    content: url("../assets/setting.png");
    padding-left: 20px;
    padding-top: 4px;
    display: block;
    height: 29px;
    position: absolute;
}

.dropdown-menu>li:nth-child(4):before{    
    content: url("../assets/out.png");
    padding-left: 20px;
    padding-top: 4px;
    display: block;
    height: 29px;
    position: absolute;
}

.dropdown-item:hover{
  background: linear-gradient(90deg, rgba(233, 233, 233, 0.1) 0%, rgba(233, 233, 233, 0.2) 92.75%);
  border-left:2px solid #6C5DD3; 
  padding-left:48px; 
}

.dropdown-item:active{
  background: linear-gradient(90deg, rgba(233, 233, 233, 0.1) 0%, rgba(233, 233, 233, 0.2) 92.75%);
  border-left:2px solid #6C5DD3; 
  padding-left:48px;
}

.dropdown-menu>li>a:hover{
  color: red;
}

.main_header.router-link-exact-active{
  color: #808191;
  background: white;
  border-radius: 0px;
  position: relative;
  left: 0px;
}

.mr-sm-2:focus{
    color: #495057;
    border-color: #80bdff;
    outline: 0;
    box-shadow: none;
  }
</style>
