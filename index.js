function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 1 / 3) {
        return ("rock")
    } else if (computerChoice > 2 / 3) {
        return ("paper")
    } else {
        return ("scissors")
    }
}
function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?").toLowerCase();
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return ("gelijkspel")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore = humanScore + 1
            return ("You got a point")
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1
            return ("You have got a point")
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1
            return ("You got a point")
        } else {
            computerScore = computerScore + 1
            return ("You got beaten! Computer gets a point");
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
    if (humanScore > computerScore) {
        console.log("You WINN!!")
    } else if (computerScore > humanScore) {
        console.log("You lose...")
    } else {
        console.log("GELIJKSPELL")
    }
}
playGame();
