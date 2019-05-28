const PubSub = require('../../helpers/pub_sub.js')

const QuizQuestionView = function (uniqueDinosaur, quizContainer, diets) {
  this.uniqueDinosaur = uniqueDinosaur
  this.quizContainer = quizContainer
  this.dietList = diets
}


QuizQuestionView.prototype.renderQuestion = function() {

  const question = document.createElement('div')
  question.classList.add('question')

  const questionForm = document.createElement('form')
  questionForm.classList.add('question-form')
  question.appendChild(questionForm)

  const questionStatement = document.createElement('p')
  questionStatement.textContent = `What is the diet of the ${this.uniqueDinosaur.name}?`
  questionForm.appendChild(questionStatement);

  const radioChoiceDiv = document.createElement('div')
  radioChoiceDiv.classList.add('radio-choice-div')
  questionForm.appendChild(radioChoiceDiv)

  for (const dietType of this.dietList) {

    const radioChoiceLabel = document.createElement('label')
    radioChoiceLabel.textContent = dietType

    const radioChoice = document.createElement('input');
    radioChoice.setAttribute('type', 'radio');
    radioChoice.setAttribute('name', `${this.uniqueDinosaur.name}-diet`);
    radioChoice.setAttribute('value', dietType);
    radioChoiceLabel.appendChild(radioChoice);

    radioChoiceDiv.appendChild(radioChoiceLabel);
  }

  return question
}



module.exports = QuizQuestionView;
