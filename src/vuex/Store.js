import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store ({
	state: {

		//ПОЛЯ для аутентификации
		status: '',
token: localStorage.getItem('token') || '',
    user : {},

    //тест
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
  /*{
answer: 'Этот элемент надо пропустить',
 difficult: 1,
  ordinal: 2,
 question: 'Этот элемент надо пропустить',
 subject: "Это надо убрать",
 topic: "Это надо убрать"
  },*/
],
	polls: [
    /* {
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
    }*/
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

    },

    ADD_ORDINAL_ANSWER(state, value){
    console.log('получила порядок');
    console.log(value);
    let lenght_polls=state.newTest.polls.length-1;
	state.newTest.polls[lenght_polls].answer=value;
					
	console.log(state.newTest.polls[lenght_polls]);

    },

    auth_request(state){
    state.status = 'loading'
    },

  auth_success(state, token, user){
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
     console.log('мы вышли')

  },

	},

	actions: {

		//авторизация пользователя
		enter_user({commit}, user){
    return new Promise((resolve, reject) => {
    console.log("Вы вошли в систему"),
      commit('auth_request')
      axios({url: 'http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/auth/login', data: user, method: 'POST' })
      .then(resp => {
      const token = resp.data.token
      const user = resp.data.user
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = token
      commit('auth_success', token, user)
      axios({url: 'http://testing-system-ru.eu-west-2.elasticbeanstalk.com/test', data: token, method: 'GET' })
      resolve(resp)
      })
      .catch(err => {
      commit('auth_error')
      localStorage.removeItem('token')
      reject(err)
      })
    })
  },

 //регистрация пользователя
  register({commit}, user){
  return new Promise((resolve, reject) => {
  //console.log("пытаюсь регистрироваться"),
    commit('auth_request')
    axios({url: 'http://testing-system-ru.eu-west-2.elasticbeanstalk.com/api/v1/register', data: user, method: 'POST' })
    .catch(err => {
      commit('auth_error', err)
      reject(err)
    })
  })
 },

 //выход из системы
 logout({commit}){
  return new Promise((resolve) => {
  console.log("акшен для выхода из системы")
    commit('logout')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    resolve()
  })
 },

		//добавление порядка правильного ответа
		ADD_ORDINAL_ANSWER({commit}){
			commit('ADD_ORDINAL_ANSWER');
		},

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

		//геттеры для аутентификации 
		isLoggedIn: state => !!state.token,
  authStatus: state => state.status,

		radio_one_answer(state){
			return state.newTest.polls[0].answer;
		},

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
