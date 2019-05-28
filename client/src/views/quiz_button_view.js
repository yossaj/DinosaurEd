const PubSub = require('../helpers/pub_sub.js')

const QuizButtonView = function (container) {
  this.container = container
}


QuizButtonView.prototype.bindEvents = function () {
  console.log(this.container)
  this.container.addEventListener('click', (event) => {
   PubSub.publish('QuizButtonView:click', (event.target.value))
   console.log(event.target.value)
  })
};




module.exports = QuizButtonView;
