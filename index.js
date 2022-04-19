// The computerPlay fucntion returns the computer selection which is done at random
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
/* The gamePlay function takes in two parameters playerSelection which the function
prompts the user for, and computerSelection which get via the computerPlay function.
Here we also define who loses or wins the game.
*/
function gamePlay(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log("Computer selection was: " + computerSelection);
    playerSelection = prompt("Please enter rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log("Player selection was: " + playerSelection);
    // the code below goes through all the possibile game outcomes
    if (computerSelection === playerSelection) {
        console.log("Tie! The computer selected the same as you!");
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("You win! Paper beats rock!");
        return 1;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose! Rock beats scissors!");
        return 0;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("You win! Scissors beat paper!");
        return 1;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! Paper beats rock!");
        return 0;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose! Scissors beat paper!");
        return 0;
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("You win! Rock beats scissors!");
        return 1;
    }
    else {
        let invalidInput = alert("Invalid input. Try typing it again.")
        return -1;
    }
}
// the code below allows us to have five rounds of gamePlay
function fiveGames() {
    // set up player win and lose counter
    var wins = 0;
    var loses = 0;
    // set up computer wins counter
    var computerWins = 0; 

    // the code below calls the gamePlay function five times and keeps track of all wins and loses
    for (let i = 0; i < 5; i++) {
        thisTurn = gamePlay();
        if (thisTurn === 0) {
            loses += 1;
            computerWins += 1;
        }
        else if (thisTurn === 1){
            wins +=1;
        }
        else if (thisTurn === -1){
            i--;
        }
    }
    // message if player wins
    if (wins > loses){
        console.log("You won " + wins + " games while the computer won "+ computerWins+ " times. Congrats! You win :)");
    }
    // message if computer wins
    else if (loses>wins){
        console.log("The computer won " + computerWins+ " games while you won "+ wins + " times. Sorry you lost :(");
    }
    // message if for some reason the winner cannot be determined, probably not needed but just in case.
    else {
        console.logconsole.log("The computer won " + computerWins+ " games while you won "+ wins + " times.");
    }
}

fiveGames();