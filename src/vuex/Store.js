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
			questionResponseTime: '',
			cards: [
			{
				answer: 'Этот элемент надо пропустить',
				difficult: 1,
				ordinal: 2,
				question: 'Этот элемент надо пропустить',
				subject: "Это надо убрать",
				topic: "Это надо убрать"
			},
			],
			polls: [
			{
				answer: 1,
				correctAnswer: "21",
				difficult: 2,
				ordinal: 1,
				subject: "Нужно избавиться от этого вопроса",
				title: "Нужно избавиться от этого вопроса",
				topic: "Нужно избавиться от этого вопроса",
				questionResponseTime: "00:15:00",
				variables: [
				"20",
				"21",
				"22",
				"23"
				]
			}
			],

		}
	},

	mutations: {

		SET_TESTS_TO_STATE: (state, tests) => {
			state.tests = tests;
		},

    //мутация для добавления общих данные по тест(название, описание итд)
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
    },

    //мутация для добавления оценок
    ADD_EVALUATION_TEST(state, value) {
    	
    	for(let key in value){
    		for (let key2 in state.newTest.evaluation){

    			if (key==key2){
    				state.newTest.evaluation[key2]=value[key];
    			} 

    		}
    	}
    	console.log(state.NEWTEST);
    },

     //мутация для вопроса к текстовому вопросу
     ADD_SIMPLE_TEST(state, value) {
     	for(let key in value){
     		
     		console.log('Ниже массив cards до присваивания')
     		console.log(state.newTest.cards);
     		let lenght_cards=state.newTest.cards.length-1;
     		state.newTest.cards[lenght_cards].question=value[key];
     		
     		console.log('Ниже ЗНАЧЕНИЕ question массива cards после присваивания');	
     		console.log(state.newTest.cards[lenght_cards].question)
     	}

     	console.log('НАЧИНАЕТСЯ УДАЛЕНИЕ из polls');

				//let i=state.newTest.cards.indexOf(n => n.difficult == 10);
				console.log('массив polls');
				console.log(state.newTest.polls);
				
				state.newTest.polls = state.newTest.polls.filter(n => n.title !== '.')
				//if(i!=-1){state.newTest.cards.splice(state.newTest.cards.indexOf(n => n.question === '.'), 1);}

				console.log(state.newTest.polls);
				console.log('ЗАКОНЧИЛОСЬ УДАЛЕНИЕ из polls');
			},

    //мутация для ответа к текстовому вопросу
    ADD_SIMPLE_TEST_ANSWER(state, value) {
    	for(let key in value){
    		console.log('МУТАЦИЯ дЛЯ простого ответа');
    		console.log(value);
    		console.log('выше значение');
    		let lenght_cards=state.newTest.cards.length-1;
    		state.newTest.cards[lenght_cards].answer=value[key];
    		console.log(state.newTest.cards[lenght_cards].answer);
    	}
    },

     //мутация для вопроса к вопросу с одним ответом + хитроглупые действия для поддержания работы
     ADD_ONE_ANSWER_TEST(state, value) {
     	for(let key in value){
     		
     		console.log('Ниже массив polls до присваивания')
     		console.log(state.newTest.polls);
     		let lenght_polls=state.newTest.polls.length-1;
     		state.newTest.polls[lenght_polls].title=value[key];
     		
     		console.log('Ниже ЗНАЧЕНИЕ question массива polls после присваивания');	
     		console.log(state.newTest.polls[lenght_polls].title)
     	}
     	
				//мутация для удаления элемента массива cards, который создается вместе с этим вопросом

				console.log('НАЧИНАЕТСЯ УДАЛЕНИЕ из cards');

				//let i=state.newTest.cards.indexOf(n => n.difficult == 10);
				console.log('массив cards');
				console.log(state.newTest.cards);
				
				state.newTest.cards = state.newTest.cards.filter(n => n.question !== '.')
				//if(i!=-1){state.newTest.cards.splice(state.newTest.cards.indexOf(n => n.question === '.'), 1);}

				console.log(state.newTest.cards);
				console.log('ЗАКОНЧИЛОСЬ УДАЛЕНИЕ из cards');

			},

			
     //мутация для ответов к вопросу с одним ответом
     ADD_ONE_ANSWER_ANSWER_TEST(state, value) {

     	let string_value='';
     	let string_value_without='';
     	

     	for(let key in value){
     		string_value=value[key];
     	}

     	console.log('это новаяч переменная');
     	string_value_without=string_value.substring(0, string_value.length-1);
     	console.log(string_value_without);

     	console.log('значение входящей строки')
     	console.log(string_value);
     	let lenght_polls=state.newTest.polls.length-1;
     	
     	let Index=state.newTest.polls[lenght_polls].variables.indexOf(
     		state.newTest.polls[lenght_polls].variables.find(str=> str==string_value_without));

     	console.log('Полученный индекс')
     	console.log(Index);

     	state.newTest.polls[lenght_polls].variables[Index]=string_value;
     	
     	console.log('Ниже ЗНАЧЕНИЕ question массива polls после присваивания');	
     	console.log(state.newTest.polls[lenght_polls])
     	
     	
     },



    //мутация для создания новых элементов массивов вопросов
    CREATE_NEW_OBJECT_IN_CARD(state) {
    	console.log('Создаем новый объект cards');
    	state.newTest.cards.push({answer: '.',
    		difficult: 1,
    		ordinal: 2,
    		question: '.',
    		subject: "Это надо убрать",
    		topic: "Это надо убрать"});
    	console.log(state.newTest.cards);

    	console.log('Создаем новый объект polls');
    	state.newTest.polls.push({
    		answer: 1,
    		correctAnswer: "21",
    		difficult: 1,
    		ordinal: 1,
    		subject: "Нужно избавиться от этого вопроса",
    		title: ".",
    		topic: "Нужно избавиться от этого вопроса",
    		questionResponseTime: "00:15:00",
    		variables: [
    		"",
    		"",
    		"",
    		""
    		]}),
    	console.log(state.newTest.polls);

    }

},

actions: {


		//создание новых элементов массивов по клику на +
		CREATE_NEW_OBJECT_IN_CARD({commit}){
			commit('CREATE_NEW_OBJECT_IN_CARD');
		},

		//добавление общей информации по тесту(название, описание итд)
		ADD_DATA_TEST({commit}, value) {
			commit('ADD_DATA_TEST', value);
		},

		//добавление информации по оцениванию
		ADD_EVALUATION_TEST({commit}, value) {
			commit('ADD_EVALUATION_TEST', value);
		},

		//добавление вопроса в текстовом вопросе
		ADD_SIMPLE_TEST({commit}, value) {
			commit('ADD_SIMPLE_TEST', value);
		},

		//добавление ответа в текстовом вопросе
		ADD_SIMPLE_TEST_ANSWER({commit}, value) {
			commit('ADD_SIMPLE_TEST_ANSWER', value);
		},

		//добавление вопроса в вопросе с несколькими ответами, но одним верным
		ADD_ONE_ANSWER_TEST({commit}, value) {
			commit('ADD_ONE_ANSWER_TEST', value);
		},
		
		//добавление ответа в вопросе с несколькими ответами, но одним верным
		ADD_ONE_ANSWER_ANSWER_TEST({commit}, value) {
			commit('ADD_ONE_ANSWER_ANSWER_TEST', value);
		},


		//получение информации о всех тестах
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

		//ДОЛЖЕН ВОЗВРАЩАТЬ КОНКРЕТНЫЙ ВОПРОС ИЗ МАССИВА ДЛЯ ТЕКСТОВОГО ВОПРОСА
		simple_question(state){
			return state.newTest.cards.question;
		},

		//ДОЛЖЕН ВОЗВРАЩАТЬ КОНКРЕТНЫЙ ОТВЕТ ИЗ МАССИВА ДЛЯ ТЕКСТОВОГО ВОПРОСА
		simple_answer(state){
			return state.newTest.cards;
		},

		//ДОЛЖЕН ВОЗВРАЩАТЬ КОНКРЕТНЫЙ ВОПРОС ИЗ МАССИВА ДЛЯ ВОПРОСА С НЕСКОЛЬКИМИ ВАРИАНТАМИ ОТВЕТОВ, НО ОДНИМ ВЕРНЫМ
		one_answer_question(state){
			return state.newTest.polls.title;
		},

		//ДОЛЖЕН ВОЗВРАЩАТЬ КОНКРЕТНЫЕ ОТВЕТЫ ИЗ МАССИВА ДЛЯ ВОПРОСА С НЕСКОЛЬКИМИ ВАРИАНТАМИ ОТВЕТОВ, НО ОДНИМ ВЕРНЫМ
		one_answer_answer(state){
			return state.newTest.polls.variables;
		},

		//Возвращает время на один вопрос в тесте
		questionResponseTime(state){
			return state.newTest.questionResponseTime;
		}
	}

});

export default store;
