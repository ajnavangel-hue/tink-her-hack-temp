// EXIT
function exitApp() {
    window.close();
}

// TIMER
let time = 1500;
let interval;
let running = false;

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").innerText =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

function startTimer() {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    running = false;
}

function resetTimer() {
    clearInterval(interval);
    running = false;
    time = 1500;
    updateTimer();
}

// TODO
function addTask() {
    let input = document.getElementById("taskInput");
    let table = document.getElementById("todoTable");

    let row = table.insertRow();
    row.insertCell(0).innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "Done";
    btn.onclick = function () { row.remove(); };

    row.insertCell(1).appendChild(btn);
    input.value = "";
}

// HYDRATION
let water = 0;

function drinkWater() {
    water += 0.25;
    document.getElementById("waterAmount").innerText =
        "Water Drank: " + water.toFixed(2) + " Litres";
}

function resetWater() {
    water = 0;
    document.getElementById("waterAmount").innerText =
        "Water Drank: 0 Litres";
}

// SUBJECT STREAK
let streaks = {};

function addSubject() {
    let input = document.getElementById("subjectInput");
    let subject = input.value;

    if (!streaks[subject]) {
        streaks[subject] = 1;
    } else {
        streaks[subject]++;
    }

    let text = "";
    for (let sub in streaks) {
        text += sub + " 🔥 " + streaks[sub] + "<br>";
    }

    document.getElementById("streakDisplay").innerHTML = text;
    input.value = "";
}