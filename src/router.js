import VueRouter from 'vue-router'
import Tests from './pages/Tests'
import BaseTasks from './pages/BaseTasks'
import LovelyTasks from './pages/LovelyTasks'
import MyTasks from './pages/MyTasks.vue'
import Home from './pages/Home.vue'
import ReportCard from './pages/ReportСard.vue'
import Test from './pages/OpenTests/Index_test.vue'



export default new VueRouter ({

	routes: [
	{
		path: '',
		component:Home
	},
	{
		path: '/tests',
		name: 'tests',
		component:Tests
	},
	{
		path: '/base_tasks',
		component:BaseTasks
	},
	{
		path: '/lovely_tasks',
		component:LovelyTasks
	},
	{
		path: '/my_task',
		component:MyTasks
	},
	{
		path: '/report_card',
		component:ReportCard
	},
	{
		path: '/test/:id',
		name: 'test',
		component: Test
	}

	],
	mode:'history'
})