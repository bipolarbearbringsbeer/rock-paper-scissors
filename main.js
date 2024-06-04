const variation = ["rock", "paper", "scissors"];
let userScore = 0;
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

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's draw!!! No one is winner! 🤔");
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`Computer chose ${computerChoice}, you chose ${humanChoice} and lose! He-he-he 🤣`);
        computerScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`Computer chose ${computerChoice}, you chose ${humanChoice} and lose! He-he-he 🤣`);
        computerScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`Computer chose ${computerChoice}, you chose ${humanChoice} and lose! He-he-he 🤣`);
        computerScore += 1;
    }
    else {
        console.log(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win, whatever 😞`);
        userScore += 1;
    }
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);
