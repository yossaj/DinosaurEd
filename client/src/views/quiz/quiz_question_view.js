const PubSub = require('../../helpers/pub_sub.js')

const QuizQuestionView = function (dinosaur, quizContainer) {
  this.dinosaur = dinosaur
  this.quizContainer = quizContainer

}


QuizQuestionView.prototype.renderQuestion (category) {

  const question = document.createElement('div')
  question.classList.add('question')

  const questionForm = document.createElement('form')
  questionForm.classList.add('question-form')
  question.appendChild(questionForm)

  const questionStatement = document.createElement('p')
  questionStatement.textContent = `What is the diet of ${dinosaur.name}?`
  questionForm.appendChild(questionStatement);

  const radioChoice1 = document.createElement('input');
  radioChoice1.setAttribute('type', 'radio');
  radioChoice1.setAttribute('name', 'choice-1');


  const radioChoice2 = document.createElement('input');
  radioChoice2.setAttribute('type', 'radio');
  radioChoice2.setAttribute('name', 'choice-2');

  const radioChoice3 = document.createElement('input');
  radioChoice3.setAttribute('type', 'radio');
  radioChoice3.setAttribute('name', 'choice-3');




  // return question div element
// }


module.exports = QuizButtonView;
