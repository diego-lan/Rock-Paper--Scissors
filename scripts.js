const options = ['ROCK', 'PAPER', 'SCISSORS'];

let playerScore = 0;
let computerScore = 0;

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
            playerScore ++;
    } else {
        result = `You lose! ${computer} beats ${player}`;
        computerScore ++;
    }
    console.log(`You\'ve chosen ${player}`);
    console.log(`Computer\'s choice is ${computer}`);
    return result;
}

/* This function allows us to play 5 times in a row */
function game() {
    let counter = 0;
    while (counter < 5) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt(`Enter Rock, Paper or Scissors.`).toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(''); // /this is just to leave an empty line to separate each round and make things more readable
        counter ++;
    }

}

/* This function anounces the winner */
function theWinnerIs(playerScore, computerScore) {
    if(playerScore < computerScore) {
        return (`You win!`);
    } else if (playerScore > computerScore) {
        return (`You lose!`);
    } else {
        return (`It\'s a tie! Play again!`);
    }
}

game();
console.log(theWinnerIs());