const PubSub = require('../helpers/pub_sub.js')
const Map = require('./map_view.js')
const map = new Map()

const DinoGridItem = function (dinosaurs, container) {
    this.dinosaurs = dinosaurs
    this.container = container

}


DinoGridItem.prototype.render = function(){
    this.container.innerHTML = ""

    const map = new Map()
    
    for(const dinosaur of this.dinosaurs){

        const listContainer = document.createElement('div')
        listContainer.classList.add('dino-box')
        listContainer.classList.add('grow')

        listContainer.onclick = function () {
          var i, x
          x = document.getElementsByClassName("containerTab");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          document.getElementById(dinosaur._id).style.display = "block";


          console.log("can you hear me",dinosaur.audio)
          const roar = new Audio(dinosaur.audio);
          roar.play();



          const mapDiv = document.querySelector('#mapid')

          if(mapDiv.classList.contains("off")){
            mapDiv.classList.remove("off")
            map.render()
          }
          // console.log(dinosaur)
          let lat = dinosaur.location.latitude
          let long = dinosaur.location.longitude
          let link = dinosaur.visit
          let name = dinosaur.name
          // console.log(long,lat);
          map.setPosition(long,lat)

          map.addMarker(lat,long, link, name)
        }

        const name = document.createElement('h3')
        name.textContent = dinosaur.name
        const image = document.createElement('img')
        image.src = dinosaur.images.dinoImage
        this.container.appendChild(listContainer)
        listContainer.appendChild(image)
        listContainer.appendChild(name)
    }



}

DinoGridItem.prototype.openTab = function (tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

}






module.exports = DinoGridItem;
