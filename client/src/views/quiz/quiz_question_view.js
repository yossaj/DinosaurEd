const PubSub = require('../../helpers/pub_sub.js')

const QuizQuestionView = function (dinosaurs, quizContainer) {
  this.dinosaurs = dinosaurs
  this.quizContainer = quizContainer
  this.dietList = []
}

QuizQuestionView.prototype.bindEvents = function() {
  PubSub.subscribe('Dinosaurs:diet-types-ready', (event)=>{
    this.dietList = event.target.detail
  })
}

QuizQuestionView.prototype.randomDinosaur = function () {
  const randomDinosaur = this.dinosaurs[Math.floor(Math.random()*this.dinosaurs.length)];
  return randomDinosaur
}


QuizQuestionView.prototype.renderQuestion = function() {

  const randomDinosaur = this.randomDinosaur();

  const question = document.createElement('div')
  question.classList.add('question')

  const questionForm = document.createElement('form')
  questionForm.classList.add('question-form')
  question.appendChild(questionForm)

  const questionStatement = document.createElement('p')
  questionStatement.textContent = `What is the diet of the ${randomDinosaur.name}?`
  questionForm.appendChild(questionStatement);

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

  return question
}



module.exports = QuizQuestionView;
