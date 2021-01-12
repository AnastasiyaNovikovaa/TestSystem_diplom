<template>
  <div id="app">
    <Header/>
    <SideBar/>
    <router-view>
    
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideBar
  }
}
</script>

<style>
  Header{
    background-color: #F5F9FD !important;
  }

#app {
  min-height: 100vh;
  background-color: #F5F9FD;

}
</style>
