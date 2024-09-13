let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
} 

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice = prompt("Please choose rock, paper, or scissors!").toLowerCase();
    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice. Please try again.").toLowerCase()
    } return choice;
} 

function capitalizeFirstLetter(str) {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
  }



function playGame() {
    // Reset scores at the start of a new game
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${capitalizeFirstLetter(humanChoice)}. Please play again!`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Congrats, you win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`);
            humanScore++;
        } else {
            console.log(`Oh no! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
            computerScore++;
        }
    } 
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score - You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`The game is a tie with both scoring ${humanScore}.`);
    }
}
playGame();

    