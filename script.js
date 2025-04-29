document.addEventListener("DOMContentLoaded", () => {
    console.log("Game loaded!");
    // Game logic will go here
});


// Score tracking
let teamScores = { team1: 0, team2: 0 };
function updateScore(team, points) {
    teamScores[team] += points;
    document.getElementById(`${team}-score`).textContent = teamScores[team];
}

// Strike counter
let strikes = 0;
function addStrike() {
    strikes++;
    document.getElementById('strike-count').textContent = strikes;
    new Audio('sounds/strike.mp3').play();
    if (strikes >= 3) {
        alert('Three strikes! Turn over.');
        strikes = 0;
        document.getElementById('strike-count').textContent = strikes;
    }
}

// Play correct answer sound
function playCorrectSound() {
    new Audio('sounds/correct.mp3').play();
}

// Play win round sound
function playWinSound() {
    new Audio('sounds/win.mp3').play();
}

let scores = [0, 0];
let currentStrikes = 0;

function addScore(team) {
    const points = parseInt(prompt("Enter points to add:"), 10);
    if (!isNaN(points)) {
        scores[team - 1] += points;
        document.getElementById("score" + team).textContent = scores[team - 1];
        document.getElementById("correctSound").play();
    }
}

function addStrike() {
    currentStrikes++;
    document.getElementById("strikes").textContent = currentStrikes;
    document.getElementById("strikeSound").play();
    if (currentStrikes >= 3) {
        alert("Three strikes! Next team’s turn.");
        currentStrikes = 0;
        document.getElementById("strikes").textContent = currentStrikes;
    }
}
