let playerDecision;
let computerDecision;
let playerScore = 0;
let computerScore = 0;
function confirmSelection() {
    playerDecision = document.getElementById("select").value
    if (playerDecision == "unselected") {
        document.getElementById("gameDisplayer").innerHTML = "SELECT ONE!"
    }
    else {
        generateComputerDecision()
        chooseRoundWinner()
        displayDecisions()
        alertWinner()
        updateScore()
        chooseOverallWinner()
    }
}
let decisionArray = ["r", "p", "s"]
function generateComputerDecision() {
    computerDecision = decisionArray[Math.floor(Math.random() * decisionArray.length)];
}
let playerWinChecker = 0
// 0 = unselected
// 1 = win
// 2 = lose
// 3 = tie
function chooseRoundWinner() {
    if (playerDecision == "r" && computerDecision == "p") {
        playerWinChecker = 2
    }
    if (playerDecision == "r" && computerDecision == "s") {
        playerWinChecker = 1
    }
    if (playerDecision == "p" && computerDecision == "r") {
        playerWinChecker = 1
    }
    if (playerDecision == "p" && computerDecision == "s") {
        playerWinChecker = 2
    }
    if (playerDecision == "s" && computerDecision == "p") {
        playerWinChecker = 1
    }
    if (playerDecision == "s" && computerDecision == "r") {
        playerWinChecker = 2
    }
    if (playerDecision == computerDecision) {
        playerWinChecker = 3
    }
}
function alertWinner() {
    if (playerWinChecker == 3) {
        document.getElementById("gameDisplayer").innerHTML = "DRAW"
    }
    if (playerWinChecker == 1) {
        document.getElementById("gameDisplayer").innerHTML = "YOU WON"
    }
    if (playerWinChecker == 2) {
        document.getElementById("gameDisplayer").innerHTML = "YOU LOST"
    }
}
function displayDecisions() {

    if (playerDecision == "r") {
        document.getElementById("playerDisplay").innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    }
    if (playerDecision == "p") {
        document.getElementById("playerDisplay").innerHTML = '<i class="fa-solid fa-hand"></i>'
    }
    if (playerDecision == "s") {
        document.getElementById("playerDisplay").innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    }
    if (computerDecision == "r") {
        document.getElementById("computerDisplay").innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    }
    if (computerDecision == "p") {
        document.getElementById("computerDisplay").innerHTML = '<i class="fa-solid fa-hand"></i>'
    }
    if (computerDecision == "s") {
        document.getElementById("computerDisplay").innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    }
}
function updateScore() {
    if (playerWinChecker == 2) {
        computerScore++
        document.getElementById("compScore").innerHTML = computerScore
    }
    if (playerWinChecker == 1) {
        playerScore++
        document.getElementById("plyrScore").innerHTML = playerScore
    }
}
function chooseOverallWinner() {
    if (computerScore == 30) {
        document.getElementById("selection").style.visibility = "hidden"
        document.getElementById("gameDisplayer").style.fontSize = "30px"
        document.getElementById("gameDisplayer").innerHTML = "Computer won the game!"
        document.getElementById("playAgainDiv").style.visibility = "visible"

    }
    if (playerScore == 30) {
        document.getElementById("selection").style.visibility = "hidden"
        document.getElementById("gameDisplayer").style.fontSize = "30px"
        document.getElementById("gameDisplayer").innerHTML = "You won the game!"
        document.getElementById("playAgainDiv").style.visibility = "visible"
    }
}
function playAgain() {
    document.getElementById("playAgainDiv").style.visibility = "hidden"
    document.getElementById("selection").style.visibility = "visible"
    document.querySelector("select").value = "unselected"
    document.getElementById("gameDisplayer").innerHTML = "  "
    document.getElementById("compScore").innerHTML = computerScore
    document.getElementById("plyrScore").innerHTML = playerScore
    playerDecision = "";
    computerDecision = "";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("compScore").innerHTML = computerScore
    document.getElementById("plyrScore").innerHTML = playerScore
    playerWinChecker = 0;
}