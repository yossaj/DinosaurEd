const DinoSelect = require('./views/dino_select_view.js')
const DinoGrid = require('./views/dino_grid_view.js')
const QuizButtonView = require('./views/quiz/quiz_button_view.js')
const DinoDetailView = require('./views/dino_detail_view.js')
const Dinosaurs = require('./models/dinosaurs.js')


document.addEventListener('DOMContentLoaded', ()=>{
    console.log('javascript loaded');


    const dinoContainer = document.querySelector('select#diet')
    const dinoSelect = new DinoSelect(dinoContainer)
    dinoSelect.bindEvents();

    const gridContainer = document.querySelector('div#grid-view')
    const detailContainer = document.querySelector('div#detail-view')
    const dinoGrid = new DinoGrid(gridContainer, detailContainer);
    dinoGrid.bindEvents();

    const quizButton = document.querySelector('button#quiz')
    const quizButtonView = new QuizButtonView(quizButton);
    quizButtonView.bindEvents();

    const url = 'http://localhost:3000/api/dinosaurs'
    const dinosaur = new Dinosaurs(url);
    dinosaur.getData();
    dinosaur.bindEvents();
})
