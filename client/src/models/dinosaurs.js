const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Dinosaurs = function(url) {
    this.url = url
    this.dinoData = [];
}
Dinosaurs.prototype.bindEvents = function() {
    PubSub.subscribe('SelectView:Dinosaurs-diet-change', event => {
        const dietIndex = event.detail
        this.publishDinosaursByDiet(dietIndex);
      
        
      })
};

Dinosaurs.prototype.getData = function() {
    const request = new RequestHelper(this.url);
    request.get()
    .then((dinosaurs) => {
        this.dinoData = dinosaurs
        PubSub.publish('Dinosaurs:data-loaded', dinosaurs)
        this.publishDietTypes(dinosaurs);
    })
    .catch(console.error);
};

Dinosaurs.prototype.publishDietTypes = function (dinosaurs) {
  this.dinoData = dinosaurs;
  this.diets = this.uniqueDietList();
  PubSub.publish('Dinosaurs:diet-types-ready', this.diets);
};

Dinosaurs.prototype.uniqueDietList = function () {
    return this.dietList().filter((diet, index, array) => {
        return array.indexOf(diet) === index;
    })
};

Dinosaurs.prototype.dietList= function() {
    const dietList = this.dinoData.map(dinosaur => dinosaur.diet);
    return dietList;
};

Dinosaurs.prototype.dinosaursByDiet = function (dietIndex) {
  const selectedDiet = this.diets[dietIndex];
    return this.dinoData.filter((dinosaur) => {
      return dinosaur.diet === selectedDiet;
    });
};

Dinosaurs.prototype.publishDinosaursByDiet = function (dietIndex) {
  const dinosaursByDiet = this.dinosaursByDiet(dietIndex);
  PubSub.publish('Dinosaurs:data-ready', dinosaursByDiet);
  console.log(dinosaursByDiet);
  
};

module.exports = Dinosaurs
