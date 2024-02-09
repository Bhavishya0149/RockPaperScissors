let isRunning = false;
let playerScore = 0;
let compScore = 0;
const pSHolder = document.getElementById("pScore");
const cSHolder = document.getElementById("cScore"); 
const statusTag = document.getElementById("status");
const comp_move_update = document.getElementById("compmove");

function getMove(){
    let move = Math.floor(Math.random() * 3);
    console.log(move);
    return move;
}

document.getElementById("set").addEventListener("click", () => {
    statusTag.innerHTML = "The game is running";
    statusTag.style.color = "green";
    isRunning = true;
    comp_move_update.innerHTML = "&nbsp;";
})

document.getElementById("stop").addEventListener("click", () => {
    statusTag.innerHTML = "The game is not running";
    statusTag.style.color = "red";
    isRunning = false;
    comp_move_update.innerHTML = "";
    if(playerScore == compScore){
        comp_move_update.innerHTML = "Game ends in a draw!";
    } else if (playerScore > compScore){
        // let message = "You won"
        comp_move_update.innerHTML = "You won " + playerScore + " - " + compScore;
    } else {
        comp_move_update.innerHTML = "Computer won " + compScore + " - " + playerScore;
    }
    playerScore = 0;
    compScore = 0;
    pSHolder.innerHTML = 0; cSHolder.innerHTML = 0;
})

document.getElementById("reset").addEventListener("click", () => {
    comp_move_update.innerHTML = "";
    playerScore = 0;
    compScore = 0;
    pSHolder.innerHTML = 0; cSHolder.innerHTML = 0;
    comp_move_update.innerHTML = "Score was reset";
})

document.getElementById("rock").addEventListener("click", () => {
        if(isRunning == false){
            alert("Game is not running"); return;
        }
        let move = getMove();
        if(move == 0){
            comp_move_update.innerHTML = "Computer picked rock, tie!";
        } else if (move == 1){
            comp_move_update.innerHTML = "Computer picked paper, comp scored a point!";
            cSHolder.innerHTML = ++compScore;
        } else {
            comp_move_update.innerHTML = "Computer picked scissors, you scored a point!";
            pSHolder.innerHTML = ++playerScore;
        }
});
document.getElementById("paper").addEventListener("click", () => {
        if(isRunning == false){
            alert("Game is not running"); return;
        }
        let move = getMove();
        if(move == 0){
            comp_move_update.innerHTML = "Computer picked paper, tie!";
        } else if (move == 1){
            comp_move_update.innerHTML = "Computer picked scissors, comp scored a point!";
            cSHolder.innerHTML = ++compScore;
        } else {
            comp_move_update.innerHTML = "Computer picked rock, you scored a point!";
            pSHolder.innerHTML = ++playerScore;
        }
});
document.getElementById("scissor").addEventListener("click", () => {
        if(isRunning == false){
            alert("Game is not running"); return;
        }
        let move = getMove();
        if(move == 0){
            comp_move_update.innerHTML = "Computer picked scissors, tie!";
        } else if (move == 1){
            comp_move_update.innerHTML = "Computer picked rock, comp scored a point!";
            cSHolder.innerHTML = ++compScore;
        } else {
            comp_move_update.innerHTML = "Computer picked paper, you scored a point!";
            pSHolder.innerHTML = ++playerScore;
        }
});

function updateScore(move){
    if(isRunning == false){
        alert("Game is not running!");
        return;
    }
}
