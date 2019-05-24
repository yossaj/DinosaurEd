const PubSub = require('../helpers/pub_sub.js')

const DinoSelect = function(container) {
    this.container = container
}

DinoSelect.prototype.bindEvents = function() {
   PubSub.subscribe('Dinosaurs:diet-types-ready', (event)=> {
    this.populateSelect(event.detail)
   })
   this.container.addEventListener('change', (event) => {
    console.log(event.target.value)
    PubSub.publish('SelectView:Dinosaur-diet-change', (event.target.value)) 
   })
    
} 
DinoSelect.prototype.populateSelect = function(diets) {
    diets.forEach((diet, index )=> {
        const selectDiet = document.createElement('option')
        selectDiet.textContent = diet;
        selectDiet.value = index;
        this.container.appendChild(selectDiet)
    });
}

module.exports = DinoSelect;