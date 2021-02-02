<template>
  <div id="app">
    <Header v-if="$route.meta.requiresHeaderSideBar"/>
    <SideBar v-if="$route.meta.requiresHeaderSideBar"/>
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
