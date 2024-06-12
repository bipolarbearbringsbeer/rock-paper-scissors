const variation = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;


// UI implementation
const body = document.querySelector("body");
const buttonsBlock = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const scoreBlock = document.createElement("div");
const userScoreParagraph = document.createElement("p");
const computerScoreParagraph = document.createElement("p");

buttonsBlock.classList.add("buttons-block");
scoreBlock.classList.add("score-block");
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
userScoreParagraph.textContent = `User Score: ${userScore}`;
computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;

buttonsBlock.append(rockButton, paperButton, scissorsButton);
scoreBlock.append(userScoreParagraph, computerScoreParagraph);
body.append(buttonsBlock, scoreBlock);

rockButton.addEventListener("click", () => {
    playRound("rock");
});
paperButton.addEventListener("click", () => {
    playRound("paper");
});
scissorsButton.addEventListener("click", () => {
    playRound("scissor");
})


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
    userScoreParagraph.textContent = `User Score: ${userScore}`;
    computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;
    console.log(userScore, computerScore);
}

function getComputerChoice() {
    // Use Math.random with Math.floor to get random index for variation array
    let computerChoice = variation[Math.floor(Math.random() * variation.length)];

    return computerChoice;
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

// playGame();