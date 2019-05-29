const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Quiz = function() {
    this.dinosaurs = [];
}

Quiz.prototype.bindEvents = function(){

    PubSub.subscribe('Dinosaurs:data-ready', (event)=>{
        this.dinosaurs = event.detail;
    })
};









module.exports = Quiz;