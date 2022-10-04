console.log("Hello World");

function getComputerChoice(){
    if (Math.random() < 1/3) {
        return "Rock";
    }
    else if (Math.random() > 2/3) {
        return "Paper";
    }
    else return "Scissors";
}

var computerChoice = getComputerChoice();

var playerSelection = "Rock";

function playRound(playerSelection, computerChoice){
    if (computerChoice === "Rock") {
        return "Issa draw"
    }
    else if (computerChoice === "Paper") {
        return "Computah wins"
    }

    else if (computerChoice === "Scissors"){
        return "Playa wins"
    }
}
var result = playRound();



function game(){
    var computerPoint = 0;
    var playerPoint = 0;
    for (let i = 0; i < 5; i++) {

        if (result === "Computah wins"){
            return computerPoint++ && console.log(computerPoint);
        }
        else if (result === "Playa wins"){
            return playerPoint++ && console.log(playerPoint);
        }
        else if (result === "Issa draw"){
            return null;
        }
    }
}
console.log(game());