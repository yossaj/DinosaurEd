const PubSub = require('../helpers/pub_sub.js')

const DinoDetailView = function (dinosaurs, detailContainer) {
  this.dinosaurs = dinosaurs;
  this.container = detailContainer
}

DinoDetailView.prototype.render = function(){
    this.container.innerHTML = ""
    for(const dinosaur of this.dinosaurs){
        const detailContainer = document.createElement('div')
        detailContainer.id = (dinosaur._id)
        detailContainer.classList.add('containerTab')

        this.container.appendChild(detailContainer)
}

    function openTab(tabName) {
      var i, x;
      x = document.getElementsByClassName("containerTab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    }

}

// DinoDetailView.prototype.openTab = function (tabName) {
//   var i, x;
//   x = document.getElementsByClassName("containerTab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.getElementById(tabName).style.display = "block";
// }


module.exports = DinoDetailView;
