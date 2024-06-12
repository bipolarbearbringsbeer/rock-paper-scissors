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
const roundResult = document.createElement("p");
const finalResult = document.createElement("p");

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
        roundResult.textContent = "It's draw!!! No one is winner! 🤔";
        body.append(roundResult);
    }
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        roundResult.textContent = `Computer chose ${computerChoice}, you chose ${humanChoice} and lose round! He-he-he 🤣`;
        body.append(roundResult);
        computerScore += 1;
    }
    else {
        roundResult.textContent = `Computer chose ${computerChoice}, you chose ${humanChoice}. You win, whatever 😞`;
        body.append(roundResult);
        userScore += 1;
    }
    userScoreParagraph.textContent = `User Score: ${userScore}`;
    computerScoreParagraph.textContent = `Computer Score: ${computerScore}`;

    if (userScore === 5) {
        finalResult.textContent = "Sadly admit it but you win. 🙁";
        finalResult.style.cssText = "color: #fe50a1; font-size: 22px; font-weight: bold;";
        body.append(finalResult);
        disableButtons();
    }
    else if (computerScore === 5) {
        finalResult.textContent = "Hooray! I won! Mua-ha-ha-ha, loser! 🥳";
        finalResult.style.cssText = "color: #39c3df; font-size: 22px; font-weight: bold;";
        body.append(finalResult);
        disableButtons();
    }

}

function getComputerChoice() {
    // Use Math.random with Math.floor to get random index for variation array
    let computerChoice = variation[Math.floor(Math.random() * variation.length)];

    return computerChoice;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
