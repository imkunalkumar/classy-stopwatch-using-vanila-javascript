//declaration of all variables
let hours = 0;
minutes = 0;
seconds = 0;
let miliseconds = 0;

let displayhours = 0;
displayminutes = 0;
displayseconds = 0;
displaymiliseconds = 0;
let interval = null;
let status = "stopped";

//stopwatch function
function stopWatch() {
    miliseconds = miliseconds + 1;
    if (miliseconds / 100 == 1) {
        miliseconds = 0;
        seconds++;
        if (seconds / 60 == 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 == 1)
                minutes = 0;
            hours++;
            if (hours / 12 == 1) {
                hours = 0;
            }
        }
    }
    //miliseconds
    if (miliseconds < 10) {
        displaymiliseconds = "0" + miliseconds.toString();
    } else {
        displaymiliseconds = miliseconds;
    }
    //second
    if (seconds < 10) {
        displayseconds = "0" + seconds.toString();
    } else {
        displayseconds = seconds;
    }
    //minutes
    if (minutes < 10) {
        displayminutes = "0" + minutes.toString();
    } else {
        displayminutes = minutes;
    }
    //hours
    if (hours < 10) {
        displayhours = "0" + hours.toString();
    } else {
        displayhours = hours;
    }
    //display the value to user
    document.getElementById("display").innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds + ":" + displaymiliseconds;
}

function startStop() {

    if (status === "stopped") {

        interval = window.setInterval(stopWatch, 10);
        document.getElementById("start-stop").innerHTML = "stop";
        status = "started";

    } else {

        window.clearInterval(interval);
        document.getElementById("start-stop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliseconds = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("start-stop").innerHTML = "Start";

}