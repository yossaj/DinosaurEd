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
        this.dinoData = dinosaurs;
        PubSub.publish('Dinosaurs:data-loaded', dinosaurs);
        this.publishDietTypes(dinosaurs)
    })
    .catch(console.error);
}
Dinosaurs.prototype.uniqueDietList = function () {
    return this.dietList().filter((diet, index, array) => {
        return array.indexOf(diet) === index;
    })
}
Dinosaurs.prototype.dietListFunction = function() {
    const dietList = this.dinoData.map(dinosaur => dinosaur.diet);
    return dietList;
}

module.exports = Dinosaurs
