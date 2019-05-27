const PubSub = require('../helpers/pub_sub.js')
const Map = require('./map_view.js')


const DinoDetailView = function (dinosaurs, detailContainer) {
  this.dinosaurs = dinosaurs;
  this.container = detailContainer
}

DinoDetailView.prototype.render = function(){
    this.container.innerHTML = ""
    for(const dinosaur of this.dinosaurs){
        const detailContainer = document.createElement('div');

        detailContainer.id = (dinosaur._id);
        
        detailContainer.classList.add('containerTab');
        detailContainer.setAttribute("style", "display: none;");

        dinoHeader = document.createElement('h2');
        dinoHeader.textContent = dinosaur.name
        detailContainer.appendChild(dinoHeader);

        const contents = document.createElement('div');
        contents.classList.add('contents');

        const image = document.createElement('img')
        image.src = dinosaur.images.dinoImage
        contents.appendChild(image);

        const info = document.createElement('div');
        info.classList.add('info')

        const period = document.createElement('h4')
        period.textContent = "Period:"
        info.appendChild(period);

        const periodParagraph = document.createElement('p')
        periodParagraph.textContent = dinosaur.period
        info.appendChild(periodParagraph);

        const infoHeader = document.createElement('h4')
        infoHeader.textContent = "Info:"
        info.appendChild(infoHeader);

        const infoParagraph = document.createElement('p')
        infoParagraph.textContent = dinosaur.info
        info.appendChild(infoParagraph);

        contents.appendChild(info);

        const showMap = document.createElement('p')
        showMap.textContent = 'Where did it live?'
        showMap.setAttribute('id', 'openMap')
        info.appendChild(showMap)
        const getDetails = document.getElementById('openMap')
        if(getDetails !== null){
        getDetails.addEventListener('click', (evt) => {
        console.log('hiiii')
        })}



        // const comparisonDiv = document.createElement('div');
        // comparisonDiv.classList.add('comparison')
        //
        // const comparisonImg = document.createElement('img')
        // comparisonImg.src = dinosaur.images.compareToHuman
        // comparisonDiv.appendChild(comparisonImg);
        //
        // contents.appendChild(comparisonDiv);

        detailContainer.appendChild(contents);
        this.container.appendChild(detailContainer);
      }
}

// DinoDetailView.prototype.getLocation = function(showMap){
//   shopMap.addEventListener('click', (evt)=>{
//     console.log('hiiii')
//   })

// }



module.exports = DinoDetailView;
