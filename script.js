const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice, ${DEFAULT_USER_CHOICE} has been selected for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function () {
    let randomValue = Math.floor(Math.random() * 11);

    if (randomValue <= 3) {
        return ROCK;
    } else if (randomValue <= 7) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};


startGameBtn.addEventListener("click", function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("Initializing game sequence...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});