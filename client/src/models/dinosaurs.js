const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function(url) {
    this.url = url
}

Dinosaurs.prototype.bindEvents = function() {
    PubSub.subscribe('Dinosaurs:data_ready', event => {
        this.getGame(event.detail)
    })
}

Dinosaurs.prototype.getData = function() {
    
}