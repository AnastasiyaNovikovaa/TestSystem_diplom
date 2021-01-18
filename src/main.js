import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './vuex/Store.js'

Vue.use(VueRouter)


Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')


