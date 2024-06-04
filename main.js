const variation = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = variation[Math.floor(Math.random() * variation.length)];

    return computerChoice;
}

function getUserChoice() {
    let wrongInput = true;

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

console.log(getUserChoice());
