const PubSub = require('../../helpers/pub_sub.js')

const QuizToggleView = function (checkbox) {
  this.checkbox = checkbox
}


QuizToggleView.prototype.bindEvents = function () {
  this.checkbox.addEventListener('change', (evt) => {
    if (this.checkbox.checked) {
      toggleMode = 'on'
    }
    else {
      toggleMode = 'off'
    }
    PubSub.publish('SortToggle:change', toggleMode);
  });
}





module.exports = QuizToggleView;
