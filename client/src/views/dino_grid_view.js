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
    this.addHiddenClass('main#main')
    this.addHiddenClass('div#detail-view')
    this.addHiddenClass('div#mapid')
    this.addHiddenClass('div.dino-record')

    this.removeHiddenClass('div#quiz-div')
  }
  else {
    this.removeHiddenClass('main#main')
    this.removeHiddenClass('div#detail-view')
    this.removeHiddenClass('div#mapid')
    this.removeHiddenClass('div.dino-record')

    this.addHiddenClass('div#quiz-div')
  }
}

DinoGrid.prototype.addHiddenClass = function (element) {
  const chosenElement = document.querySelector(element)
  chosenElement.classList.add('hidden');
}

DinoGrid.prototype.removeHiddenClass = function (element) {
  const chosenElement = document.querySelector(element)
  chosenElement.classList.remove('hidden');
}


module.exports = DinoGrid;
