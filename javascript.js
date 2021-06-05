/*

Computer selection (random)
Player selection
Game itself (keep track of results)
rounds (compare player to computer selection)

*/

function getPlayerSelection() {
    let playerSelection = prompt(`Input Rock, paper or scissors to play! (or quit to leave!)`);
    if (!playerSelection) return getPlayerSelection();
    playerSelection = playerSelection.toString().toLowerCase();
    switch (playerSelection) {
        case `rock`:
        case `paper`:
        case `scissors`:
            return playerSelection;
        case `quit`:
            return `quit`;
        default:
            console.log(`Didn't quite catch that, check your spelling!`);
            return getPlayerSelection();
    }
}

function getComputerSelection() {
    rndNumber = Math.floor(Math.random() * 3)
    switch (rndNumber) {
        case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
    }
}


function game() {
    let computerWins = 0;
    let playerWins = 0;
    let keepGoing = true;
    while (keepGoing) {
        if (computerWins === 3) {
            keepGoing = false;
            console.log(`You lose! Computer won ${computerWins}-${playerWins}!`);
            continue;
        } else if (playerWins === 3) {
            keepGoing = false;
            console.log(`You WIN! You won ${playerWins}-${computerWins}!`);
            continue;
        } else {
            console.log(`Game is ${playerWins}-${computerWins}! I'm cheering you on!`);
            let currentRoundWinner = gameRound();
            switch (currentRoundWinner){
                case `computerWins`: computerWins++;
                break;
                case `playerWins`: playerWins++;
                break;
                case `quit`: keepGoing = false;
                console.log(`See ya!`)
            }
        }
    }

}

function gameRound() {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();

    if (playerSelection === `rock` && computerSelection === `paper` ||
        playerSelection === `paper` && computerSelection === `scissors` ||
        playerSelection === `scissors` && computerSelection === `rock`) {
            console.log(`Computer's ${computerSelection} beats your ${playerSelection}! Tough luck!`);
            return `computerWins`;
        } else if (playerSelection === `rock` && computerSelection === `scissors` ||
                   playerSelection === `paper` && computerSelection === `rock` ||
                   playerSelection === `scissors` && computerSelection === `paper`){
            console.log(`Your ${playerSelection} beats computer's ${computerSelection}! Nicely done!`);
            return `playerWins`;
        } else if (playerSelection === `rock` && computerSelection === `rock` ||
                   playerSelection === `paper` && computerSelection === `paper` ||
                   playerSelection === `scissors` && computerSelection === `scissors`) {
            console.log(`You both chose ${playerSelection}! It's a tie, try again!`);
        } else if (playerSelection === `quit`){
            return `quit`;
        } else console.log(`Something went wrong!`)
}