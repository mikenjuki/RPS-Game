const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = SCISSORS;
const RESULT_DRAW = "IT'S A DRAW!";
const RESULT_PLAYER_WINS = "You won, let's go again!";
const RESULT_COMPUTER_WINS = "I won, I'm too good at this!";

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

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};


startGameBtn.addEventListener("click", function () {
    if (gameIsRunning) {
        return;
    } else {
        gameIsRunning = true;

        console.log("Initializing game sequence...");

        const playerChoice = getPlayerChoice();
        console.log("Player chose", playerChoice);

        const computerChoice = getComputerChoice();
        console.log("Computer chose", computerChoice);

        const winner = getWinner(computerChoice, playerChoice);
        console.log(winner);

        let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
        if (winner === RESULT_DRAW) {
            message = message + "had a draw.";
        } else if (winner === RESULT_PLAYER_WINS) {
            message = message + "won.";
        } else {
            message = message + "lost.";
        }
        alert(message);

        gameIsRunning = false;
    }

});