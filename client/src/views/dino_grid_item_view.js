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
        const name = document.createElement('h2')
        name.textContent = dinosaur.name
        const image = document.createElement('img')
        this.container.appendChild(listContainer)
        listContainer.appendChild(name)
        listContainer.appendChild(image)
    }
}



module.exports = DinoGridItem;