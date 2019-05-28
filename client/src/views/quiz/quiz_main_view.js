const PubSub = require('../../helpers/pub_sub.js')
const QuizQuestionView = require('./quiz_question_view.js')

const QuizMainView = function (quizContainer) {
  this.quizContainer = quizContainer
}

QuizMainView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
      this.dinosaurs = event.detail;
  })

  PubSub.subscribe('Dinosaurs:diet-types-ready', (event)=>{
     this.dietList = event.detail
     this.renderQuiz();
   })
}

QuizMainView.prototype.randomDinosaur = function () {
  const randomDinosaur = this.dinosaurs[Math.floor(Math.random()*this.dinosaurs.length)];
  return randomDinosaur
}

QuizMainView.prototype.fourUniqueDinosaurs = function () {
  fourUniqueDinosaurs = [];
    while(fourUniqueDinosaurs.length < 4) {
    const dinosaur = this.randomDinosaur()
    if (fourUniqueDinosaurs.includes(dinosaur) === false) {
    fourUniqueDinosaurs.push(dinosaur)
    }
  }
  return fourUniqueDinosaurs
}



QuizMainView.prototype.renderQuiz = function () {
  const fourUniqueDinosaurs = this.fourUniqueDinosaurs();
  for (const dinosaur of fourUniqueDinosaurs) {
    const question = new QuizQuestionView(dinosaur, this.quizContainer, this.dietList);
    const questionElement = question.renderQuestion();
    this.quizContainer.appendChild(questionElement)
  }

}








module.exports = QuizMainView;
