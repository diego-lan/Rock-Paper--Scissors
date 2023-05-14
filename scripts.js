const options = ['ROCK', 'PAPER', 'SCISSORS'];

/* This function generates and return a random number between 0 and 1, multiplyes it by the number of the available options
and round it down */
function getComputerChoice() {
    const choice = Math.floor(Math.random() * options.length);
    return options[choice];
}


/* This function compares the computer selection and our selection and tells us if we have entered
a nonsense, if it's a tie or if we've won or lost */
function playRound(player, computer) {
    let result; 
    if (player !== options[0] && player !== options[1] && player !== options[2]) {
        result = `${player} is not an option, try again.`;
    } else if (player == computer) {
        result = `It\'s a tie, try again.`;
    } else if (
        (player == 'ROCK' && computer == 'SCISSORS') || 
        (player == 'SCISSORS' && computer == 'PAPER') || 
        (player == 'PAPER' && computer == 'ROCK')) { 
            result = `You win! ${player} beats ${computer}`;
    } else {
        result = `You lose! ${computer} beats ${player}`;
    }
    return result;
}
   
const playerSelection = prompt(`Enter Rock, Paper or Scissors.`).toUpperCase();
const computerSelection = getComputerChoice();
