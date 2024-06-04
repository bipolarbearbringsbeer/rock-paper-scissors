const variation = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = variation[Math.floor(Math.random() * variation.length)];

    return computerChoice;
}
