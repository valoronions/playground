let seconds = 00;
let milliseconds = 00;
let minutes = 00;
let interval;
let isRunning = false;
let splits = []


const millisecondsText = document.getElementById('milliseconds');
const secondsText= document.getElementById('seconds');
const minutesText = document.getElementById('minutes');
const swstartstop = document.querySelector('.sw-start-stop');
const swreset = document.querySelector('.sw-reset');
const splitsText = document.querySelector('.splits');

const startStopStopwatch = () => {
    if (isRunning == false) { 
        clearInterval(interval);
        interval = setInterval(timerLogic, 10);
        swstartstop.innerHTML = "Stop";
        isRunning = true;
    } else {
        clearInterval(interval);
        swstartstop.innerHTML = "Start";
        isRunning = false;
    }
}

const restartStopwatch = () => {
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    millisecondsText.innerHTML = milliseconds;
    secondsText.innerHTML = seconds;
    minutesText.innerHTML = minutes;
    isRunning = false;
    swstartstop.innerHTML = "Start";
}

const addSplit = () => {
    splits.push(" " + minutes + ":" + seconds + ":" + milliseconds);
    splitsText.innerHTML = splits;
}

const clearSplits = () => {
    splits = [];
    splitsText.innerHTML = "";
}

const timerLogic = () => {
    milliseconds++;

    if (milliseconds <= 9) {
        millisecondsText.innerHTML = "0" + milliseconds;
    }
    
    if (milliseconds > 9) {
        millisecondsText.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;
        secondsText.innerHTML = "0" + seconds;
        milliseconds = 0;
        millisecondsText.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        secondsText.innerHTML = seconds;
    }

    if (seconds > 59){
        minutes++;
        minutesText.innerHTML = "0" + minutes;
        seconds = 0;
        secondsText.innerHTML = "0" + 0;
    }
    
}