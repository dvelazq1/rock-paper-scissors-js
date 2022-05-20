// The computerPlay fucntion returns the computer selection which is done at random

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
/* The gamePlay function takes in two parameters playerSelection which the function
prompts the user for, and computerSelection which get via the computerPlay function.
Here we also define who loses or wins the game.
*/
playerScore = 0;
computerScore = 0;
const cSelection= document.createElement("h3");
const pSelection= document.createElement("h3");
const resultsPara = document.createElement("p");
const pScore = document.createElement("p");
const cScore = document.createElement("p");
//const pWin= document.createElement("p");
//const cWin = document.createElement("p");
const finish = document.createElement("p");
finish.style.color = "red";
finish.style.fontSize = "45px";

function gamePlay(playerSelection) {
    computerSelection = computerPlay();
    pSelection.innerText = "Your selection: " + playerSelection;
    cSelection.innerText = "Computer selection: " + computerSelection;
    document.getElementById("selections").appendChild(pSelection);
    document.getElementById("selections").appendChild(cSelection);
    finish.innerText = "";
    resultsPara.innerText = "";
    document.getElementById("results").appendChild(resultsPara);

    // the code below goes through all the possibile game outcomes
    if (computerSelection === playerSelection) {
        resultsPara.innerText = "Tie! The computer selected the same as you!";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        resultsPara.innerText = "You win! Paper beats rock!";
        playerScore +=1;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        resultsPara.innerText = "You lose! Rock beats scissors!";
        computerScore +=1;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        resultsPara.innerText = "You win! Scissors beat paper!";
        playerScore +=1;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        resultsPara.innerText = "You lose! Paper beats rock!";
        computerScore +=1;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        resultsPara.innerText = "You lose! Scissors beat paper!";
        computerScore +=1;

    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        resultsPara.innerText = "You win! Rock beats scissors!";
        playerScore +=1;
    }
    else {
        resultsPara.innerText = "Invalid input. Try typing it again.";
        return -1;
    }
    pScore.innerText = "Player score: " + playerScore;
    cScore.innerText = "Computer score: " + computerScore;
    document.getElementById("score").appendChild(cScore);
    document.getElementById("score").appendChild(pScore);

    if (playerScore == 5){
        finish.innerText = "You Win!";
        document.getElementById("score").appendChild(finish);
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        finish.innerText = "You Lose!";
        document.getElementById("score").appendChild(finish);
        playerScore = 0;
        computerScore = 0;
    }
}


// add event listeners to the buttons
document.getElementById("b1").addEventListener("click", function () { gamePlay("rock"); });
document.getElementById("b2").addEventListener("click", function () { gamePlay("paper"); });
document.getElementById("b3").addEventListener("click", function () { gamePlay("scissors"); });

// create paragraphs for the results
