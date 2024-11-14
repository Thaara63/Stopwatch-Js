const display = document.getElementById("display");
const displayLapTime = document.getElementById("displayLapTime");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let lapTime = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    
}

function lap(){
    
    if(isRunning){
        lapTime = elapsedTime;

        let lapHours = Math.floor(lapTime / (1000 * 60 * 60));
        let lapMinutes = Math.floor(lapTime / (1000 * 60) % 60);
        let lapSeconds = Math.floor(lapTime / 1000 % 60);
    
        lapHours = String(lapHours).padStart(2, "0");
        lapMinutes = String(lapMinutes).padStart(2, "0");
        lapSeconds = String(lapSeconds).padStart(2, "0");

        displayLapTime.innerHTML += `<li>${lapHours}:${lapMinutes}:${lapSeconds}</li>`;

    }

}

function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;   
    
    display.textContent = `00:00:00`;
    displayLapTime.innerHTML = "";
    
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}`;
    
}