const variation = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Use Math.random with Math.floor to get random index for variation array
    let computerChoice = variation[Math.floor(Math.random() * variation.length)];

    return computerChoice;
}

function getUserChoice() {
    let wrongInput = true;

    // Check for right user input
    while (wrongInput) {
        let userChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

        if (
            userChoice === "rock" ||
            userChoice === "paper" ||
            userChoice === "scissors"
        ) {
            return userChoice;
        }
    }
}

