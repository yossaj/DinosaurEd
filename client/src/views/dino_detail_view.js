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

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('headerDiv');

        const dinoHeader = document.createElement('h2');
        dinoHeader.textContent = dinosaur.name
        headerDiv.appendChild(dinoHeader);

        const diet = document.createElement('h3');
        diet.textContent = dinosaur.diet
        headerDiv.appendChild(diet)

        detailContainer.appendChild(headerDiv);

        const pronunciation = document.createElement('h3');
        pronunciation.textContent = dinosaur.pronunciation
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


        const info = document.createElement('div');
        info.classList.add('info')
        infoStats.appendChild(info);

        const nameMeaning = document.createElement('h4')
        nameMeaning.textContent = "Meaning of Name:"
        info.appendChild(nameMeaning);

        const nameParagraph = document.createElement('p')
        nameParagraph.textContent = `"${dinosaur.meaningOfName}"`
        info.appendChild(nameParagraph);

        const continent = document.createElement('h4')
        continent.textContent = "Continent:"
        info.appendChild(continent);

        const continentParagraph = document.createElement('p')
        continentParagraph.textContent = dinosaur.location.continent
        info.appendChild(continentParagraph);

        const period = document.createElement('h4')
        period.textContent = "Period:"
        info.appendChild(period);

        const periodParagraph = document.createElement('p')
        periodParagraph.textContent = dinosaur.period
        info.appendChild(periodParagraph);

        const yearsAgo = document.createElement('h4')
        yearsAgo.textContent = "Years Ago:"
        info.appendChild(yearsAgo);

        const yearsParagraph = document.createElement('p')
        yearsParagraph.textContent = `${dinosaur.mya} Million`
        info.appendChild(yearsParagraph);

        const length = document.createElement('h4')
        length.textContent = "Length:"
        info.appendChild(length);

        const lengthParagraph = document.createElement('p')
        lengthParagraph.textContent = dinosaur.length
        info.appendChild(lengthParagraph);

        const infoParagraphDiv = document.createElement('div');
        infoParagraphDiv.classList.add('info-paragraph');
        contents.appendChild(infoParagraphDiv);

        const infoHeader = document.createElement('h4')
        infoHeader.textContent = "Info:"
        infoParagraphDiv.appendChild(infoHeader);

        const infoParagraph = document.createElement('p')
        infoParagraph.textContent = dinosaur.info
        info.appendChild(infoParagraph);

        // const showMap = document.createElement('p')
        // showMap.textContent = 'Where did it live?'
        // showMap.setAttribute('id', 'openMap')
        // info.appendChild(showMap)
        // const getDetails = document.getElementById('openMap')
        // if(getDetails !== null){
        // getDetails.addEventListener('click', (evt) => {
        // console.log('hiiii')
        // })}

        infoParagraphDiv.appendChild(infoParagraph);

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



module.exports = DinoDetailView;
