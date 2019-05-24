const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function(url) {
    this.url = url
}



Dinosaurs.prototype.bindEvents = function() {
    PubSub.subscribe('SelectView:Dinosaurs-diet-Change', event => {
        const dietIndex = event.detail()
        this.filteredDietDiosaurs(dietIndex);

})
}

Dinosaurs.prototype.getData = function() {
    const request = new RequestHelper(this.url);
    request.get()
    .then((dinosaurs) => {
        PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
        console.log(dinosaurs)
        this.publishDietTypes(dinosaurs)
    })
    .catch(console.error);
}



module.exports = Dinosaurs
