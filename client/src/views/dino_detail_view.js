const PubSub = require('../helpers/pub_sub.js')


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


        //headerDiv
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('headerDiv');

        const dinoHeader = this.createNewElement('h2', dinosaur.name)
        headerDiv.appendChild(dinoHeader);

        const diet = this.createNewElement('h3', dinosaur.diet)
        headerDiv.appendChild(diet)

        detailContainer.appendChild(headerDiv);


        const pronunciation = this.createNewElement('h3', dinosaur.pronunciation)
        pronunciation.id = 'pronunciation'
        detailContainer.appendChild(pronunciation);


        const contents = document.createElement('div');
        contents.classList.add('contents');

        const infoStats = document.createElement('div');
        infoStats.classList.add('info-stats');
        contents.appendChild(infoStats);

        const image = document.createElement('img')
        image.src = dinosaur.images.dinoImage
        infoStats.appendChild(image);


        //info Div
        const info = document.createElement('div');
        info.classList.add('info')
        infoStats.appendChild(info);

        const nameMeaning = this.createNewElement('h4', "Meaning Of Name:")
        info.appendChild(nameMeaning)

        const nameParagraph = this.createNewElement('p', `"${dinosaur.meaningOfName}"`)
        info.appendChild(nameParagraph);

        const continent = this.createNewElement('h4', "Continent:")
        info.appendChild(continent);

        const continentParagraph = this.createNewElement('p', dinosaur.location.continent)
        info.appendChild(continentParagraph);

        const period = this.createNewElement('h4', "Period:")
        info.appendChild(period);

        const periodParagraph = this.createNewElement('p', dinosaur.period)
        info.appendChild(periodParagraph);

        const yearsAgo = this.createNewElement('h4', "Years Ago:")
        info.appendChild(yearsAgo);

        const yearsParagraph = this.createNewElement('p', `${dinosaur.mya} Million`)
        info.appendChild(yearsParagraph);

        const length = this.createNewElement('h4', "Length:")
        info.appendChild(length);

        const lengthParagraph = this.createNewElement('p', dinosaur.length)
        info.appendChild(lengthParagraph);


        //info-paragraph Div
        const infoParagraphDiv = document.createElement('div');
        infoParagraphDiv.classList.add('info-paragraph');
        contents.appendChild(infoParagraphDiv);

        const infoHeader = this.createNewElement('h4', "Info:")
        infoParagraphDiv.appendChild(infoHeader);

        const infoParagraph = this.createNewElement('p', dinosaur.info)
        infoParagraphDiv.appendChild(infoParagraph);


        //comparison Div
        const comparisonDiv = document.createElement('div');
        comparisonDiv.classList.add('comparison')

        const comparisonImg = document.createElement('img')
        comparisonImg.src = dinosaur.images.compareToHuman
        comparisonImg.id = 'comparison-img'
        comparisonDiv.appendChild(comparisonImg);


        contents.appendChild(comparisonDiv);
        detailContainer.appendChild(contents);
        this.container.appendChild(detailContainer);
      }
}

DinoDetailView.prototype.createNewElement = function(elementType, textContent) {
  const element = document.createElement(elementType);
  element.textContent = `${textContent}`;
  return element;
}



module.exports = DinoDetailView;
