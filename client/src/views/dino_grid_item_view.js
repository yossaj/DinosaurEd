const PubSub = require('../helpers/pub_sub.js')

const DinoGridItem = function (dinosaurs, container) {
    this.dinosaurs = dinosaurs
    this.container = container
    console.log(container)
}

DinoGridItem.prototype.render = function(){
    this.container.innerHTML = ""

    for(const dinosaur of this.dinosaurs){
        const listContainer = document.createElement('div')
        listContainer.classList.add('dino-box')
        const name = document.createElement('h3')
        name.textContent = dinosaur.name
        const image = document.createElement('img')
        image.src = dinosaur.images.dinoImage
        this.container.appendChild(listContainer)
        listContainer.appendChild(image)
        listContainer.appendChild(name)
    }
}

module.exports = DinoGridItem;
