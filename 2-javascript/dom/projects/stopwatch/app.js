let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

const updateDisplay = () => {
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h} : ${m} : ${s}`
}

const startTimer = () => {
    // console.log("timer started")
    let student = "hello"
    if (running === false){
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60){
                seconds = 0;
                minutes++;
            }
            if (minutes === 60){
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        running = true;
    }
    
}

const stopTimer = () => {
        // console.log("timer paused")
        clearInterval(timer);
        running = false;

}

const resetTimer = () => {
        // console.log("resetting")
        stopTimer();
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateDisplay()

}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer)