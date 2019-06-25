const Dinosaurs = require('./models/dinosaurs.js')
const DinoSelect = require('./views/dino_select_view.js')
const DinoGrid = require('./views/dino_grid_view.js')
const QuizToggleView = require('./views/quiz/quiz_toggle_view.js')
const DinoDetailView = require('./views/dino_detail_view.js')
const QuizMainView = require('./views/quiz/quiz_main_view.js')
const SpeakingDino = require('./views/speaking_view.js')



document.addEventListener('DOMContentLoaded', ()=>{
    console.log('javascript loaded');


    const dinoContainer = document.querySelector('select#diet')
    const dinoSelect = new DinoSelect(dinoContainer)
    dinoSelect.bindEvents();

    const gridContainer = document.querySelector('div#grid-view')
    const detailContainer = document.querySelector('div#detail-view')
    const dinoGrid = new DinoGrid(gridContainer, detailContainer);
    dinoGrid.bindEvents();

    const quizToggle = document.querySelector('input#quiz')
    const quizToggleView = new QuizToggleView(quizToggle);
    quizToggleView.bindEvents();

    const quizContainer = document.querySelector('div#quiz-div');
    const mainQuiz = new QuizMainView(quizContainer);
    mainQuiz.bindEvents();

    const record_butt = document.querySelector('#record-stop-button')
    const speaking_img = document.querySelector('#dinop')
    const speakingDino = new SpeakingDino(speaking_img, record_butt)
    speakingDino.bindEvents()

    const url = 'https://agile-falls-62677.herokuapp.com/api/dinosaurs'
    const dinosaur = new Dinosaurs(url);
    dinosaur.getData();
    dinosaur.bindEvents();
})
