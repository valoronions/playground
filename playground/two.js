let seconds = 00;
let milliseconds = 00;
let interval;


const millisecondsText = document.getElementById('milliseconds');
const secondsText= document.getElementById('seconds');
const swstart = document.querySelector('.sw-start');
const swstop = document.querySelector('.sw-stop');
const swreset = document.querySelector('.sw-reset');

const startStopwatch = () => {
    clearInterval(interval);
    interval = setInterval(timerLogic, 10);
}

const stopStopwatch = () => {
    clearInterval(interval);
}

const restartStopwatch = () => {
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    millisecondsText.innerHTML = milliseconds;
    secondsText.innerHTML = seconds;
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
}