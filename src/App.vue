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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    SideBar
  },

  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  methods: {
      logout: function () {
        this.$store.dispatch('logout')
        /*.then(() => {
          this.$router.push('/login')
        })*/
      }
    },

  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
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
