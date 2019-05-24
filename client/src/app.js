const DinoSelect = require('/viewsdino_select_view.js')
const DinoGrid = require('./views/dino_grid_view.js')
const DinoGridList = require('./views/dino_grid_item_view.js')
// const DinoDetail = require('./views/dino_detail_view.js')
const Dinosaurs = require('./models/dinosaurs.js')


document.addEventListener('DOMContentLoaded', ()=>{

    const dinoContainer = document.querySelector('select#diet')
    const dinoSelect = new DinoSelect(dinoContainer)
    dinoSelect.bindEvents();

    const dinoGrid = new DinoGrid();
    dinoGrid.bindEvents();

    const dinoGridList = new dinoGridList();
    dinoGridList.bindEvents();

    const dinosaur = new Dinosaur();
    dinosaurs.getData();
})
