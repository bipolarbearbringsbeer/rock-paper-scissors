const variation = ["rock", "paper", "scissors"];

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();

        if (computerChoice === humanChoice) {
            console.log("It's draw!!! No one is winner! 🤔");
        }
        else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            console.log(`Computer chose ${computerChoice}, you chose ${humanChoice} and lose round! He-he-he 🤣`);
            computerScore += 1;
        }
        else {
            console.log(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win, whatever 😞`);
            userScore += 1;
        }
    }

    printResult(userScore, computerScore);
}

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

function printResult(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log(`Your score is ${userScore} and mine is ${computerScore}. Well, that means you got lucky 😩`);
    }
    else if (userScore < computerScore) {
        console.log(`Your score is ${userScore} and mine is ${computerScore}. Look at you, crying baby! I am always winner!!! 🤣`);
    }
    else {
        console.log(`Your score is ${userScore} and mine is ${computerScore}. Hmmm, you're as good as me 🤔 🤖`);
    }
}

playGame();
