class Question {
    constructor(obj) {
        if (obj.id)    // Если id нет или он 0 или null или false, то сегенерируем id, иначе просто запишем, что пришло
            this.id = obj.id    //number
        else {  //generate Id
            this.id = Math.ceil(Math.random() * 1000000)
        }

        this.question = obj.question //string
    }

    addQuestion(question) {
        this.question = question
    }
}

class QuestionOneAnswer extends Question {
    constructor(obj) {
        super(obj)
        if (obj.answer) {
            this.answer = [obj.answer];   //string оборачиваем в массив, чтобы был единный формат ответов (не важно один ответ или несколько)
        }
    }

    // Данная функция позволяет добавлять (перезаписывать) ответы в объект не при формировании, а потом как-нибудь
    addAnswer(answer) {
        this.answer[0] = answer
    }
}

class QuestionSeveralAnswer extends Question {
    constructor(obj) {
        super(obj)
        this.answer = obj.answer || [];   //array Если ничего не будет при создании экземпляра, то создаём пустой массив
    }

    // Данная функция позволяет добавлять ответы в объект не при формировании, а потом как-нибудь 
    addAnswer(answer) {
        this.answer.push(answer)
    }
}

let quest1 = new QuestionOneAnswer({ id: 1, question: 'Как тебя зовут?', answer: 'Olya' })
let quest2 = new QuestionSeveralAnswer({ question: 'А сколько тебе лет?', answer: [24, 37, 42] })
let quest3 = new QuestionOneAnswer({ answer: 'Владимир' })
let quest4 = new QuestionSeveralAnswer({})

console.log(quest1);
console.log("quest2");
console.log(quest2);
console.log("quest3");
console.log(quest3);
console.log("-----------");
console.log("quest4");
console.log(quest4);
quest4.addQuestion('В каких странах бывал?')
console.log("quest4");
console.log(quest4);
quest4.addAnswer('Греция')
console.log("quest4");
console.log(quest4);
quest4.addAnswer('Турция')
console.log("quest4");
console.log(quest4);