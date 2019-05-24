const PubSub = require('../helpers/pub_sub.js')

const DinoSelect = function(container) {
    this.container = container
}

DinoSelect.prototype.bindEvents = function() {
   PubSub.subscribe('Dinosaurs:diet-types-ready', (event)=> {
    this.populateSelect(event.detail)
    
   })
} 
DinoSelect.prototype.populateSelect = function(diets) {
    diets.forEach(diet => {
        const selectDiet = document.createElement('option')
        selectDiet.textContent = diet;
        this.container.appendChild(selectDiet)
    });
}

module.exports = DinoSelect;