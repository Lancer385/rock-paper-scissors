function getcomputerCountChoice() {
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



let playerScore = 0 , computerScore = 0 , tie = 0;

let computerCount = document.querySelector("#computer");
let playerCount = document.querySelector("#player");
let tieCount = document.querySelector("#tie");

playerCount.textContent = `Player: ${playerScore}`;
computerCount.textContent = `Computer: ${computerScore}`;
tieCount.textContent =`Tie: ${tie}`;


let result = document.querySelector("h2");

let nodeList = document.querySelectorAll("button");
nodeList.forEach((node) => {
    node.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5){
            let computerCountSelection = getcomputerCountChoice();
            let score = node.textContent;
            let round = playRound(score, computerCountSelection);
            if  (round == 1){
                playerScore++;
                playerCount.textContent = `Player: ${playerScore}`;
            }
            else if (round == 2) {
                computerScore++;
                computerCount.textContent = `Computer: ${computerScore}`;
            }
            else {
                tie++ ;
                tieCount.textContent =`Tie: ${tie}`;
            }

            
            if (playerScore == 5 || computerScore == 5){
                if (playerScore > computerScore){
                    result.textContent = "You Win!";
                }
                if (playerScore < computerScore){
                    result.textContent = "You Lose!";
                }
                let resetButton = document.querySelector("#reset");
                resetButton.style.visibility = "visible"; 
                resetButton.addEventListener('click', () =>{
                    location.reload();
                });
            }
        }
    } );
})