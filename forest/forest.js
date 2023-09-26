let timerID

const audio = document.querySelector("#playerOne");
const video = document.querySelector("#myVideo");

const buttonPlay = document.querySelector("#playFive");
buttonPlay.addEventListener("click", function (){
    timerID = setInterval(startTimer, 1000);
    audio.play();
    video.play();
})

const buttonPause = document.querySelector("#pauseFive");
buttonPause.addEventListener("click", function() {
    stopTimer();
})


const timer = 5;
let amountTime = timer * 60;

function startTimer () {
    const countFiveMinutes = document.querySelector("#countFiveMinutes");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countFiveMinutes.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        amountTime = 0;
    }
}

function stopTimer () {
    clearInterval(timerID);
    audio.pause();
    video.pause();
}


let timerCounter

const audioTwo = document.querySelector("#playerTwo");
const videoTwo = document.querySelector("#myVideo");

const buttonPlayTwo = document.querySelector("#playTen");
buttonPlayTwo.addEventListener("click", function (){
    timerCounter = setInterval(startCountdown, 1000);
    audioTwo.play();
    videoTwo.play();
})

const buttonPauseTwo = document.querySelector("#pauseTen");
buttonPauseTwo.addEventListener("click", function() {
    stopTime();
})


const timerTwo = 10;
let amountTimeTwo = timerTwo * 60;

function startCountdown () {
    const countTenMinutes = document.querySelector("#countTenMinutes");
    let minutes = Math.floor(amountTimeTwo/60);
    let seconds = amountTimeTwo%60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countTenMinutes.textContent = `${minutes} : ${seconds}`;
    amountTimeTwo--;

    if (amountTimeTwo < 0) {
        amountTimeTwo = 0;
    }
}

function stopTime () {
    clearInterval(timerCounter);
    audioTwo.pause();
    videoTwo.pause();
}

gsap.from("h3", {y: -300, duration: 3, ease: "bounce"})
gsap.from(".timer-choice", {y: 130, ease: "bounce", duration: 2})