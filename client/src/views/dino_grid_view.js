const PubSub = require('../helpers/pub_sub.js')
const DinoGridItem = require('./dino_grid_item_view.js')

const DinoGrid = function(container){
    this.container = container
}

DinoGrid.prototype.bindEvents = function(){

    PubSub.subscribe('Dinosaurs:data-loaded',(event)=>{
        this.render(event.detail, this.container)
    })

    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        this.render(event.detail, this.container)
    })   
}

DinoGrid.prototype.render = function(dinosaurs, container) {

    const dinoGridItem = new DinoGridItem(dinosaurs, container);
    dinoGridItem.render()
}


module.exports = DinoGrid;