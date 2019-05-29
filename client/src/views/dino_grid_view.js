const PubSub = require('../helpers/pub_sub.js')
const DinoGridItem = require('./dino_grid_item_view.js')
const DinoDetailView = require('./dino_detail_view.js')

const DinoGrid = function(gridContainer, detailContainer){
    this.gridContainer = gridContainer;
    this.detailContainer = detailContainer;
}

DinoGrid.prototype.bindEvents = function(){

    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        this.clearList();
        this.dinosaurs = event.detail;
        this.render(this.dinosaurs, this.gridContainer, this.detailContainer)

    })

    PubSub.subscribe('SortToggle:change', (event)=>{
      this.changeVisiblity(event.detail);
    })

}

DinoGrid.prototype.render = function(dinosaurs, gridContainer, detailContainer) {

    const dinoGridItem = new DinoGridItem(dinosaurs, gridContainer);
    dinoGridItem.render()

    const dinoDetailView = new DinoDetailView(dinosaurs, detailContainer);
    dinoDetailView.render()
}

DinoGrid.prototype.clearList = function () {
  this.gridContainer.innerHTML = '';
};

DinoGrid.prototype.changeVisiblity = function (onOrOff) {
  if (onOrOff === 'on') {
    addHiddenClass('main#main')
    addHiddenClass('div#detail-view')
    addHiddenClass('div#mapid')

    document.querySelector('div#quiz-div').style.display = "block";
  }
  else {
    document.querySelector('main#main').style.display = "block";
    document.querySelector('div#detail-view').style.display = "block";
    document.querySelector('div#mapid').style.display = "block";

    document.querySelector('div#quiz-div').style.display = "none";
  }
}

DinoGrid.prototype.addHiddenClass = function (element) {
  document.querySelectior(element).classList.add('hidden');
}

DinoGrid.prototype.addHiddenClass = function (element) {
  document.querySelectior(element).classList.add('hidden');
}


module.exports = DinoGrid;
