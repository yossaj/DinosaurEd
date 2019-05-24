const PubSub = require('../helpers/pub_sub.js')

const DinoSelect = function(container) {
    this.container = container
}

DinoSelect.prototype.bindEvents = function {
   PubSub.subscribe('Dinousaurs:diet-types-ready', (event)=> {
    // console.log(event)
   })
} 
DinoSelect.prototype.populateSelect = function() {
    this.container.forEach(event => {
        
    });
}