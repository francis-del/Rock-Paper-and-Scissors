// deno-lint-ignore-file
const options = ["rock", "paper", "scissors"];
let winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = confirmWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Incorrect Spelling/Unknown"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return options[Math.floor(Math.random() * Math.floor(3))];
}

function validateInput(choice) {
    return options.includes(choice);
}

function confirmWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "Tie";
    } else if (
        (choicePlayer === "rock" && choiceComputer == "scissors") ||
        (choicePlayer === "paper" && choiceComputer == "rock") ||
        (choicePlayer === "scissors" && choiceComputer == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("Keep It Upppppppppppppp!!!!");
}