let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
const timerEl = document.querySelector(".timer");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let timerRunning = false;

function startTimer() {
    startTime = Date.now() - elapsedTime; // Keep track of elapsed time
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00.00";
    startbtn.innerText = "Start";
    timerRunning = false;
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds) +
        "." +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
}

startbtn.addEventListener("click", () => {
    if (!timerRunning) {
        startTimer();
        startbtn.innerText = "Pause";
        timerRunning = true;
    } else if(timerRunning===true){
        stopTimer();
        startbtn.innerText = "Restart";
        timerRunning = false;
    }
});

resetbtn.addEventListener("click", resetTimer);
