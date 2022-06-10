let hrs = mins = secs = ms = "0" + 0, startWatch;
const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", Stop);
resetBtn.addEventListener("click", reset);


function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("inactive");
    startWatch = setInterval(function () {
        ms++;
       
        if(ms<10){
            ms="0"+ms;
        }
        if (ms == 100) {
            secs++;

            if (secs < 10) {
                secs = "0" + secs;
            }
            ms = "0" + 0;
            console.log(secs);
        }

        if (secs == 60) {
            mins++;
            if (mins < 10) {
                mins = "0" + mins;
            }
            secs = "0" + 0;
        }
        if (mins == 60) {
            hrs++;

            if (hrs < 10) {
                hrs = "0" + hrs;
            }
            mins = "0" + 0;
        }

        showTime();
    }, 10);
}

function Stop() {

    startBtn.classList.remove("active");
    stopBtn.classList.remove("inactive");

    clearInterval(startWatch);

}

function reset() {

    startBtn.classList.remove("active");
    stopBtn.classList.remove("inactive");

    hrs = mins = secs = ms = "0" + 0;
    clearInterval(startWatch);
    showTime();
}
function showTime() {
    document.querySelector(".milliseconds").innerText = ms;
    document.querySelector(".seconds").innerText = secs;
    document.querySelector(".minutes").innerText = mins;
    document.querySelector(".hour").innerText = hrs;

}
