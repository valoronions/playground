let count = 1;
let counter = document.querySelector('.counter');
let alreadyCounting = false;
let btnAuto = document.querySelector('.btn-automate');


let interval;


const add = () => {
    count += 1;
    counter.innerHTML = count;
}

const remove = () => {
    count -= 1;
    counter.innerHTML = count;
}

const reset = () => {
    count = 0;
    counter.innerHTML = count;
}

const automate = () => {
    if (alreadyCounting == false) {
        interval = setInterval("auto()", 1000);
        btnAuto.innerHTML = "Stop"
    } else {
        clearInterval(interval);
        btnAuto.innerHTML = "Automate"
        alreadyCounting = false;
    }
}

const auto = () => {
    alreadyCounting = true;
    count++;
    counter.innerHTML = count;
}
