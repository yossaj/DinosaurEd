
const SpeakingDino = function(div, recButton){
    this.recButton = recButton
    this.div = div
    this.images = []
  }

SpeakingDino.prototype.bindEvents = function(){
    this.populateImages(this.images)

    this.recButton.addEventListener('click', (evt)=>{
        recordStop()
        setTimeout(() => { this.displayNextImage(this.div, this.images); }, 3000);
    })

}


SpeakingDino.prototype.populateImages = function (images) {
    images[0] = "/images/dino01.png";
    images[1] = "/images/dino02.png";
    images[2] = "/images/dino03.png";
    images[3] = "/images/dino03.png";
    images[4] = "/images/dino03.png";
    images[5] = "/images/dino03.png";
    images[6] = "/images/dino03.png";
    images[7] = "/images/dino02.png";
    images[8] = "/images/dino03.png";
    images[9] = "/images/dino02.png";
    images[10] = "/images/dino01.png";
}

SpeakingDino.prototype.displayNextImage = function (div, images) {
    const extraImages = images;
    const extraDiv = div;
    let x = -1;
    function displayNextImage1() {
        if (extraDiv.id == "dinop") {
            console.log('sheep')
            x = (x === extraImages.length - 1) ? 0 : x + 1;
            document.getElementById("dinop").src = extraImages[x];
        }
    }

    const animate = setInterval(displayNextImage1, 100)
    setTimeout(() => { clearInterval(animate);}, 3000);
}


const recordAudio = () =>
    new Promise(async resolve => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });
        const start = () => mediaRecorder.start();
        const stop = () =>
            new Promise(resolve => {
                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio(audioUrl);
                    const play = () => audio.play();
                    resolve({ audioBlob, audioUrl, play });
                });
                mediaRecorder.stop();
            });
        resolve({ start, stop });
    });



const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const recordStop = async (div, images) => {
    // console.log("this is recorder",recorder)
    const recorder = await recordAudio();
    const actionButton = document.getElementById('record-stop-button');
    actionButton.disabled = true;
    recorder.start();
    await sleep(3000);
    const audio = await recorder.stop();
    audio.play();
    await sleep(3000);
    actionButton.disabled = false;
};

module.exports = SpeakingDino;
