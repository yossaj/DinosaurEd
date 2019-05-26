const PubSub = require('../helpers/pub_sub.js')
const DinoGridItem = require('./dino_grid_item_view.js')
const DinoDetailView = require('./dino_detail_view.js')

const DinoGrid = function(gridContainer, detailContainer){
    this.gridContainer = gridContainer;
    this.detailContainer = detailContainer;
}

DinoGrid.prototype.bindEvents = function(){

    PubSub.subscribe('Dinosaurs:data-loaded',(event)=>{
        this.render(event.detail, this.gridContainer, this.detailContainer)
    })

    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        this.render(event.detail, this.gridContainer, this.detailContainer)
    })
}

DinoGrid.prototype.render = function(dinosaurs, gridContainer, detailContainer) {

    const dinoGridItem = new DinoGridItem(dinosaurs, gridContainer);
    dinoGridItem.render()

    const dinoDetailView = new DinoDetailView(dinosaurs, detailContainer);
    dinoDetailView.render()


}


module.exports = DinoGrid;
