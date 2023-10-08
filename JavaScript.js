function getcomputerChoice() {
    const x = ["rock", "paper", "scissors"];
    random = x[Math.floor(Math.random() * x.length)];
    return random
}

function playRound(x,y) {
    if (x == "rock") {
        if (y == "rock") {
            return 0; // tie
        }
        else if (y == "paper") {
            return 2; // lose
        }
        else {
            return 1; // win
        }
    }
    else if (x == "paper") {
        if (y == "rock") {
            return 1;
        }
        else if (y == "paper") {
            return 0;
        }
        else {
            return 2;
        }
    }
    else if (x == "scissors") {
        if (y == "rock") {
            return 2;
        }
        else if (y == "paper") {
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        return 3;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5 ; i++) {
        let playerSelection = prompt("type here:").toLowerCase();
        let computerSelection = getcomputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if  (round == 1){
            playerScore++;
        }
        else if (round == 2) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return `you win!\nplayer: ${playerScore}\nComputer: ${computerScore}`;
    }
    else if (playerScore < computerScore) {
        return `you lose!\nplayer: ${playerScore}\nComputer: ${computerScore}`;
    }
    else{
        return `the result is a tie!\nplayer: ${playerScore}\nComputer: ${computerScore}`;
    }
    
}





console.log(game());