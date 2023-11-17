// create a variable for data values rock , paper , scissors

console.log('hi');

const options = ['rock', 'paper', 'scissors']; // this is the variable that holds the possible inputs for the game

function getComputerChoice() { // is the function that generates a random input by :
    const choice = options[ Math.floor(Math.random() * options.length) ]; // selecting a value from data structure array called options: and that value is determined by math random * the number of values of array options: to get a real number, math floor which rounds down the value to the near whole number
    return choice; // since we automated x in options[x]: and options[x] = possible inputs : we declared choice = options[x]
    // when you run function getComputerChoice, it will return choice: which can be either rock, paper, scissor 

}

    // we created a function that creates the input, choice for the computer
console.log(getComputerChoice() + " is a computer's choice! Irrelevant to the game!")

function checkWinner( playerSelection, computerSelection) { // runs the possible conditions to determine who wins the game
    if ( playerSelection == computerSelection ) { // player value and computer value
        return 'It is a tie.';
    } 
    else if ( // the conditions of the game in terms of player and computer selection
        ( playerSelection == 'rock' && computerSelection == 'scissor' ) ||
        ( playerSelection == 'scissors' && computerSelection == 'paper' ) ||
        ( playerSelection == 'paper' && computerSelection == 'rock' ) 
    )
    { return "Player"; } // returns player if player wins
 
    else { // otherwise returns computer if player lose
        return "Computer";
    }
}

// we have a function that checks for the winner of the game and returns that value

function playRound( playerSelection, computerSelection) { // function that plays one game of rock paper scissors
    const result = checkWinner(playerSelection, computerSelection); // use the check winner function to return a value and that value = result : those values can be tie, player, computer aka the winner of the game
    if ( result == 'It is a tie.' ) { // if the result == tie then it returns tie
        return 'No winner, tie!';
    } else if ( result == 'Player' ) {  // if result == player then it returns given outcome
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else { // and vice versa if you lose, note that the notation is different but the same
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

// let playerSelection = 'paper'; // our selection for the game 
// let computerSelection = getComputerChoice(); // computer selection that is generated

// console.log(playRound(playerSelection, computerSelection) + " plays a single round"); // plays one round


function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt('Rock Paper Scissors?');
        if( choice == null ) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    } 
}



function game() {
    console.log('welcome, best of five wins!')
    let scorePlayer = 0;
    let scoreComputer = 0;
    for ( let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if( checkWinner(playerSelection,computerSelection) == 'player') {
            scorePlayer++;
        } else if ( checkWinner(playerSelection,computerSelection) == 'computer') {
            scoreComputer++;
        }
    }
    console.log('game over')
    if ( scorePlayer > scoreComputer ) {
        console.log('Player Wins!');
    } else if ( scorePlayer < scoreComputer ) {
        console.log('Computer Wins');
    } else {
        console.log('Tie, no winner!');
    }
}

game();