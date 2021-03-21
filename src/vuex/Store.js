import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store ({
	state: {
		tests: [],

		//структура нового теста. !Еще нужен создатель!
		newTest: {
			id: 0,
			name: '',
			description: '',
			category: '',
			createdDate: '',
			deadline: '',
			subject: '',
			evaluation: {
five: 85,
four: 65,
three: 50
},
			time_for_question: 0,
			question: ''
			/*questions: [
			{
			question: '',
			rightAnswer: '',
			id: 0
		}
			]*/

		}
	},

	mutations: {
		SET_TESTS_TO_STATE: (state, tests) => {
			state.tests = tests;
		},

		//добавление названия и описания теста
		/*ADD_FIRST_DATA(state, value) {
			console.log('ВИВ');
		console.log(value);
        state.newTest.name = value.name;
        state.newTest.description = value.description;
        state.newTest.id = value.id_test;
        console.log(state.newTest.name);
    },*/

    ADD_DATA_TEST(state, value) {
		console.log('НОВАЯ МУТАЦИЯ');
		console.log(value);
		for(let key in value){
			for (let key2 in state.newTest){

				if (key==key2){

					state.newTest[key2]=value[key];
					console.log('Проверка');
					console.log(state.newTest[key2]);
					console.log(value[key]);
					console.log('Закончилась Проверка');
				} 

			}
		}
		console.log(state.NEWTEST);
    },

     ADD_EVALUATION_TEST(state, value) {
		console.log('МУТАЦИЯ дЛЯ ОЦЕНОК');
		console.log(value);
		console.log('выше значение')

		for(let key in value){
			for (let key2 in state.newTest.evaluation){

				if (key==key2){
					state.newTest.evaluation[key2]=value[key];
					console.log('Проверка');
					console.log(state.newTest.evaluation[key2]);
					console.log(value[key]);
					console.log('Закончилась Проверка');
				} 

			}
		}
		console.log(state.NEWTEST);
    },

	},

	actions: {

		/*ADD_FIRST_DATA({commit}, value) {
        commit('ADD_FIRST_DATA', value);
		},*/

		ADD_DATA_TEST({commit}, value) {
        commit('ADD_DATA_TEST', value);
		},

		ADD_EVALUATION_TEST({commit}, value) {
        commit('ADD_EVALUATION_TEST', value);
		},

		GET_TEST_FROM_API({commit}) {

			return axios('http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/tests', {
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
		},


	},
	getters: {

		//возвращает все созданные тесты с сервера
		TESTS(state) {
			return state.tests;
		},

		//должен возвращать информацию о создаваемом тесте
		NEWTEST(state){
			return state.newTest;
		},

		//должен возвращать информацию о создаваемом тесте
		evaluation(state){
			return state.newTest.evaluation;
		},

		question(state){
			return state.newTest.question;
		},
	}

});

export default store;
