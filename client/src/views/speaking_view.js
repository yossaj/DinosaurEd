
const SpeakingDino = function(div, recordBut){
    this.div = div
    this.recordBut = recordBut
    this.images = []
   
}

SpeakingDino.prototype.bindEvents = function(){
    this.populateImages(this.images)

    this.recordBut.addEventListener('click', (evt)=>{
        // console.log('beeebeee')
        recordStop()
    })

    this.div.addEventListener('click', (evt) => {
        //  this.openClose(this.div, this.images)
        this.displayNextImage(this.div, this.images)
        playAudio()
        
    })
   
    
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

let recorder = null;
let audio = null;


const recordStop = async () => {
    console.log("this is recorder",recorder)
    if (recorder) {
        audio = await recorder.stop();
        recorder = null;
        document.querySelector("#record-stop-button").textContent = "Record";
        document.querySelector("#dinop").removeAttribute("disabled");
    } else {
        recorder = await recordAudio();
        recorder.start();
        document.querySelector("#record-stop-button").textContent = "Stop";
    }
};

const playAudio = () => {
    if (audio && typeof audio.play === "function") {
        audio.play();
    }
};

// SpeakingDino.prototype.recordAudio = () =>

//         new Promise(async resolve => {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             const mediaRecorder = new MediaRecorder(stream);
//             const audioChunks = [];
//             mediaRecorder.addEventListener("dataavailable", event => {
//                 audioChunks.push(event.data);
//             });
//             const start = () => mediaRecorder.start();
//             const stop = () =>
//                 new Promise(resolve => {
//                     mediaRecorder.addEventListener("stop", () => {
//                         const audioBlob = new Blob(audioChunks);
//                         const audioUrl = URL.createObjectURL(audioBlob);
//                         const audio = new Audio(audioUrl);
//                         const play = () => audio.play();
//                         resolve({ audioBlob, audioUrl, play });
//                     });
//                     mediaRecorder.stop();
//                 });
//             resolve({ start, stop });
//     });



// SpeakingDino.prototype.recordStop = async () => {
//          let recorder = null;
//          let audio = null;
//         // console.log("this is recorder", recorder)
//         if (recorder) {
//             audio = await recorder.stop();
//             recorder = null;
//             document.querySelector("#record-stop-button").textContent = "Record";
//             document.querySelector("#dinop").removeAttribute("disabled");
//         } else {
//             recorder = await recordAudio();
//             recorder.start();
//             document.querySelector("#record-stop-button").textContent = "Stop";
//         }
//     };

SpeakingDino.prototype.openClose = function(div, images){
    if (div.src === "http://localhost:3000/images/dino01.png") {
        div.src = images[1]
        playAudio()
    } else if (div.src === "http://localhost:3000/images/dino02.png"){
        div.src =images[0]
    }
}

SpeakingDino.prototype.populateImages = function(images){
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

SpeakingDino.prototype.displayNextImage = function(div, images) {
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
    setInterval(displayNextImage1, 100);  
    playAudio()
 }


// SpeakingDino.prototype.startTimer =function(div,images) {
    // setTimeout(this.closeMouth, 4000)
// }



module.exports = SpeakingDino;