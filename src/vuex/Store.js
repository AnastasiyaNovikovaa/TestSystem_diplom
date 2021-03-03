import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store ({
	state: {
		tests: []
	},
	mutations: {
		SET_TESTS_TO_STATE: (state, tests) => {
			state.tests = tests;
		}
	},
	actions: {
		GET_TEST_FROM_API({commit}) {


			
			return axios('http://testing-system.eu-west-2.elasticbeanstalk.com/api/test', {
				method: "GET",
				headers: {
					"Accept": "application/json",
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
  "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
				}
			})
			//return instance.get(/tests/)
			.then((tests) => {
				commit('SET_TESTS_TO_STATE', tests.data);
				return tests;
			})
			.catch((error) => {
				console.log(error);
				return error;
			})
		}
	},
	getters: {
		TESTS(state) {
			return state.tests;
		}
	}

});

export default store;
