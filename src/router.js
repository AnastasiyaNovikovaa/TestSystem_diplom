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



export default new VueRouter ({

	routes: [
	{
		path: '',
		name: 'home',
		component:Home,
		meta: { requiresHeaderSideBar: true }
	},
	{
		path: '/tests',
		name: 'tests',
		component:Tests,
		meta: { requiresHeaderSideBar: true }
	},
	{
		path: '/base_tasks',
		component:BaseTasks,
		meta: { requiresHeaderSideBar: true }
	},
	
	{
		path: '/lovely_tasks',
		component:LovelyTasks,
		meta: { requiresHeaderSideBar: true }
	},
	{
		path: '/my_task',
		component:MyTasks,
		meta: { requiresHeaderSideBar: true }
	},
	{
		path: '/report_card',
		component:ReportCard,
		meta: { requiresHeaderSideBar: true }
	},
	{
		path: '/test/:id',
		name: 'test',
		component: Test,
		meta: { requiresHeaderSideBar: true }
	},

	{
		path: '/entrance',
		name: 'entrance',
		component: Entrance,
		meta: { requiresHeaderSideBar: false }
	},

	{
		path: '/edit_profile',
		name: 'edit_profile',
		component: EditProfile,
		meta: { requiresHeaderSideBar: true }
	},

	{
		path: '/create_test',
		name: 'create_test',
		component: Create_test,
		meta: { requiresHeaderSideBar: true }
	},

	{
		path: '/registration',
		name: 'registration',
		component: Registration,
		meta: { requiresHeaderSideBar: false }
	}

	],
	mode:'history'
})