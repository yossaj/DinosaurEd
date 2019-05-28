const PubSub = require('../../helpers/pub_sub.js')
const QuizQuestionView = require('./quiz_question_view.js')

const QuizMainView = function (quizContainer) {
  this.quizContainer = quizContainer
}

QuizMainView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
      this.dinosaurs = event.detail;
  })
}

QuizMainView.prototype.renderQuiz = function () {
  var i
  for (i = 0; i < 4; i++) {
  const question = new QuizQuestionView(this.dinosaurs, this.quizContainer);
  question.renderQuestion();
  }
}








module.exports = QuizMainView;
