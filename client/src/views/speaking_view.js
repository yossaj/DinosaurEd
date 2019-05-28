
const SpeakingDino = function(div){
    this.div = div
    this.images = []
}

SpeakingDino.prototype.bindEvents = function(){
    this.populateImages(this.images)
   

    this.div.addEventListener('click', (evt) => {
        
       this.openClose(this.div, this.images)
    })
   
    
}

SpeakingDino.prototype.openClose = function(div, images){
    if (div.src === "http://localhost:3000/images/dino01.png") {
        div.src = images[1]
    } else if (div.src === "http://localhost:3000/images/dino02.png"){
        div.src =images[0]
    }
}

SpeakingDino.prototype.populateImages = function(images){
    images[0] = "/images/dino01.png";
    images[1] = "/images/dino02.png";
    images[2] = "/images/dino03.png";
    // images[3] = "/images/dino03.png";
    // images[4] = "/images/dino03.png";
    // images[5] = "/images/dino03.png";
    // images[6] = "/images/dino03.png";
    // images[7] = "/images/dino02.png";
    // images[8] = "/images/dino03.png";
    // images[9] = "/images/dino02.png";
    // images[10] = "/images/dino01.png";
}

// SpeakingDino.prototype.displayNextImage = function(div, images) {
    // console.log(div, images)
    // function displayNextImage() {
    //     if (stop.id == "dinop") {
    //         // x = (x === images.length - 1) ? 0 : x + 1;
    //         document.getElementById("dinop").src = images[x];
    //     }
    // }

    // setInterval(displayNextImage, 2000);
        
//  }


// SpeakingDino.prototype.startTimer =function(div,images) {
    
    
    // setTimeout(this.closeMouth, 4000)
// }

// const dinopic = document.querySelector('#dinop')
// dinopic.addEventListener('click', (evt) => {
//     startTimer()
// })


// SpeakingDino.prototype.runAnimation = function(){

// }

module.exports = SpeakingDino;