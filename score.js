// Iteration 8: Making scoreboard functional
let scoreboard = document.getElementById("score-board")
var urlQuery = new URLSearchParams(window.location.search);
var score = urlQuery.get("score")
scoreboard.innerHTML = score;

const playAgain = document.getElementById("play-again-button")
playAgain.onclick=()=>{
    window.location.href="./game.html"
}