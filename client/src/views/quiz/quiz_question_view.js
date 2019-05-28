const PubSub = require('../../helpers/pub_sub.js')

const QuizQuestionView = function (dinosaur, quizContainer) {
  this.dinosaur = dinosaur
  this.quizContainer = quizContainer
  this.dietList = []
}

QuizQuestionView.prototype.bindEvents = function() {
  PubSub.subscribe('Dinosaurs:diet-types-ready', (event)=>{
    this.dietList = event.target.detail
  })
}


QuizQuestionView.prototype.renderQuestion = function() {

  const question = document.createElement('div')
  question.classList.add('question')

  const questionStatement = document.createElement('p')
  questionStatement.textContent = `What is the diet of ${dinosaur.name}?`
  questionForm.appendChild(questionStatement);

  const questionForm = document.createElement('form')
  questionForm.classList.add('question-form')
  question.appendChild(questionForm)

  for(const diet of this.dietList){

    const radioChoiceLabel = document.createElement('label')
    radioChoiceLabel.textContent = diet

    const radioChoice = document.createElement('input');
    radioChoice.setAttribute('type', 'radio');
    radioChoice.setAttribute('name', diet);
    radioChoice.setAttribute('value', diet);
    radioChoiceLabel.appendChild(radioChoice);

    questionForm.appendChild(radioChoiceLabel);
  }
}



  // return question div element
// }


module.exports = QuizQuestionView;
