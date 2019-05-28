const PubSub = require('../../helpers/pub_sub.js')
const QuizQuestionView = require('./quiz_question_view.js')

const QuizMainView = function (quizContainer) {
  this.quizContainer = quizContainer
}

QuizMainView.prototype.bindEvents = function () {
  PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
      this.dinosaurs = event.detail;
      this.renderQuiz();
  })
}

QuizMainView.prototype.renderQuiz = function () {
  var i
  for (i = 0; i < 4; i++) {
  const question = new QuizQuestionView(this.dinosaurs, this.quizContainer);
  const questionElement = question.renderQuestion();
  this.quizContainer.appendChild(questionElement)
  }

}








module.exports = QuizMainView;
