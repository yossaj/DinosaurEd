const PubSub = require('../helpers/pub_sub.js')

const DinoGrid = function(container){
    this.container = container
    console.log(container)
}

DinoGrid.prototype.bindEvents = function(){
    PubSub.subscribe('Dinosaurs:data-loaded',(event)=>{
        this.render(event.detail)
    })



    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        console.log(event.detail)
    })   
}

DinoGrid.prototype.render = function(dinosaurs) {
    for(const dinosaur of dinosaurs){
        // console.log
        const name = document.createElement('h2')
        name.textContent = dinosaur.name
        this.container.appendChild(name)
    }
}

module.exports = DinoGrid;