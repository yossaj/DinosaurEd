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