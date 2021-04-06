import VueRouter from 'vue-router'
import Tests from './pages/Tests'
import BaseTasks from './pages/BaseTasks'
import LovelyTasks from './pages/LovelyTasks'
import MyTasks from './pages/MyTasks.vue'
import Home from './pages/Home.vue'
import ReportCard from './pages/ReportСard.vue'
import Test from './pages/OpenTests/Index_test.vue'
import Entrance from './pages/Entrance.vue'
import Registration from './pages/Registration.vue'
import EditProfile from './pages/EditProfile.vue'
import Create_test from './pages/Create_test.vue'
import Secure from './components/Secure.vue'
import store from './vuex/Store.js'


let router = new VueRouter ({

	routes: [
	{
		path: '',
		name: 'home',
		component:Home,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	{
		path: '/tests',
		name: 'tests',
		component:Tests,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	{
		path: '/base_tasks',
		component:BaseTasks,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	
	{
		path: '/lovely_tasks',
		component:LovelyTasks,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	{
		path: '/my_task',
		component:MyTasks,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	{
		path: '/report_card',
		component:ReportCard,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},
	{
		path: '/test/:id',
		name: 'test',
		component: Test,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},

	{
		path: '/entrance',
		name: 'entrance',
		component: Entrance,
		meta: { 
			requiresHeaderSideBar: false
	}
	},

	{
		path: '/edit_profile',
		name: 'edit_profile',
		component: EditProfile,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},

	{
		path: '/create_test',
		name: 'create_test',
		component: Create_test,
		meta: { requiresHeaderSideBar: true,
		requiresAuth: true }
	},

	{
		path: '/registration',
		name: 'registration',
		component: Registration,
		meta: { 
		requiresHeaderSideBar: false
	}
	},

	{
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: { 
        requiresAuth: true
      }
    },

	],
	mode:'history'
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/entrance') 
  } else {
    next() 
  }
})

export default router