const PubSub = require('../helpers/pub_sub.js')

const DinoGrid = function(){

}

DinoGrid.prototype.bindEvents = function(){
    PubSub.publish('Dinosaurs:data-ready', (event)=>{
        console.log(event.detail)
    });
}

module.exports = DinoGrid;