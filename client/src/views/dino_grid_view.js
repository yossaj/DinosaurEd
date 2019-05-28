const PubSub = require('../helpers/pub_sub.js')
const DinoGridItem = require('./dino_grid_item_view.js')
const DinoDetailView = require('./dino_detail_view.js')

const DinoGridView = function(gridContainer, detailContainer){
    this.gridContainer = gridContainer;
    this.detailContainer = detailContainer;
}

DinoGridView.prototype.bindEvents = function(){

    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        this.clearList();
        this.dinosaurs = event.detail;
        this.render(this.dinosaurs, this.gridContainer, this.detailContainer)

    })

    PubSub.subscribe('SortToggle:change', (event)=>{
      this.changeVisiblity(event.detail);
    })

}

DinoGridView.prototype.render = function(dinosaurs, gridContainer, detailContainer) {

    const dinoGridItem = new DinoGridItem(dinosaurs, gridContainer);
    dinoGridItem.render()

    const dinoDetailView = new DinoDetailView(dinosaurs, detailContainer);
    dinoDetailView.render()
}

DinoGridView.prototype.clearList = function () {
  this.gridContainer.innerHTML = '';
};

DinoGridView.prototype.changeVisiblity = function (onOrOff) {
  if (onOrOff === 'on') {
    document.querySelector('main#main').style.display = "none";
    document.querySelector('div#detail-view').style.display = "none";
    document.querySelector('div#mapid').style.display = "none";

    document.querySelector('div#quiz-div').style.display = "block";
  }
  else {
    document.querySelector('main#main').style.display = "block";
    document.querySelector('div#detail-view').style.display = "block";
    document.querySelector('div#mapid').style.display = "block";

    document.querySelector('div#quiz-div').style.display = "none";
  }
}


module.exports = DinoGridView;
